require 'json'
require 'kramdown'
require 'nokogiri'
require 'upmark'
require 'yaml'
require 'jekyll'
require 'fileutils'
require 'logger'

logger = Logger.new(STDOUT)
logger.level = Logger::INFO
lang = ["en", "fr"]
site_data_file = "_config.yml"
logger.info("Loading site data from '#{site_data_file}'")
site_data = YAML.load_file(site_data_file)
if site_data == nil
	logger.fatal("Site data could not be loaded from '#{site_data_file}'")
	abort
end
common_data = site_data["common"]
jekyll_output_dir = "rendered_site/"

def build_content_array(html_block, is_parent, parent_heading_level, logger, parent_tags, parent_content_source)
	content_array = Array.new
	ignore_nodes_number = 0
	if is_parent
		nodes = html_block.children
	else
		nodes = html_block
	end
	nodes.each do |node|
		if node.element? || ( node.text? && node.content.strip.length > 0 )
			if ignore_nodes_number > 0
				ignore_nodes_number -= 1
			else
				item = Hash.new
				cancel_content_push = false

				node_class = node["class"]
				if node_class.nil? || node_class.length == 0
					tags = Array.new
				elsif node_class.include? "dpgn-data-ignore"
					next
				else
					tags = node_class.split(" ")
					node.remove_attribute("class")
				end

				# If parent_tags exists, then append it to the current tags, eliminating duplicates
				if !parent_tags.nil?
	 				tags.push(*parent_tags.reject { |tag| tag.include? "dpgn-section" })
					tags = tags.uniq
	 			end

				node_source = node["data-source"]
				if node_source.nil? || node_source.length == 0
					content_source = Array.new
				else
					content_source = node_source.gsub(" ", "").split(",")
					node.remove_attribute("data-source")
				end

	 			# If content_source is nil then use parent_content_source instead
	 			if !parent_content_source.nil? && (content_source.nil? || content_source.length == 0)      
					content_source = parent_content_source
				end

				if node.name === "section"
					item["content_type"] = "section"
					item["tags"] = tags
					item["source"] = content_source
					heading = node.css("h#{parent_heading_level + 1}")
					if heading.count >= 1
						item["title"] = heading[0].inner_html
					else
						# Handle missing heading
						logger.error("Heading could not be found when processing a section (build_content_array)")
						logger.debug(node)
					end
					item["content"] = build_content_array(node, true, parent_heading_level + 1, logger, tags, content_source)
				elsif node.name === ("h#{parent_heading_level + 1}")
					item["content_type"] = "section"
					item["tags"] = tags
					item["source"] = content_source
					item["title"] = node.inner_html
					node_array = Array.new
					next_node = node.next
					while !next_node.nil?
						if  ( next_node.element? && next_node.name != "h#{parent_heading_level + 1}" ) || ( next_node.text? && next_node.content.strip.length > 0 )
							node_array.push(next_node)
						end
						next_node = next_node.next
					end
					ignore_nodes_number += node_array.count
					item["content"] = build_content_array(node_array, false, parent_heading_level + 1, logger, tags, content_source)
				elsif node.name === "ul" || node.name === "ol"
					if node.name === "ul"
						content_type = "unordered_list"
					else
						content_type = "ordered_list"
					end

					# Check if previous item (that was not ignored) was a list of the same type, and if it was, combine it with this list       
					last_item_index = content_array.length - 1
					if last_item_index >= 0 && content_array[last_item_index]["content_type"] === content_type
						# Combine the tags
						if !tags.nil? && tags.length > 0
							last_list_tags = content_array[last_item_index]["tags"]
							last_list_tags.push(*tags)
							content_array[last_item_index]["tags"] = last_list_tags.uniq
						end

						# Combine the content sources
						if !content_source.nil? && content_source.length > 0
							last_list_source = content_array[last_item_index]["source"]
							last_list_source.push(*content_source)
							content_array[last_item_index]["source"] = last_list_source.uniq
						end

						# Combine the list items
						last_list_items = content_array[last_item_index]["content"]
						new_list_items = build_content_array(node, true, parent_heading_level, logger, tags, content_source)
						last_list_items.push(*new_list_items)
						content_array[last_item_index]["content"] = last_list_items.uniq

						# Don't push a new item into the content array since updated the last item
						cancel_content_push = true
					else
						item["content_type"] = content_type
						item["tags"] = tags
						item["source"] = content_source
						item["content"] = build_content_array(node, true, parent_heading_level, logger, tags, content_source)
					end
				elsif node.name === "li"
					item["content_type"] = "list_item"
					item["tags"] = tags
					item["source"] = content_source
					item["content"] = build_content_array(node, true, parent_heading_level, logger, tags, content_source)
				elsif node.text? || (!node.description.nil? && node.description.inline?)
					if content_array.length > 0 && content_array[content_array.length - 1]["content_type"] === "inline"
						last_item_index = content_array.length - 1

						# Combine the tags
						if !tags.nil? && tags.length > 0
							last_list_tags = content_array[last_item_index]["tags"]
							last_list_tags.push(*tags)
							content_array[last_item_index]["tags"] = last_list_tags.uniq
						end

						# Combine the content sources
						if !content_source.nil? && content_source.length > 0
							last_list_source = content_array[last_item_index]["source"]
							last_list_source.push(*content_source)
							content_array[last_item_index]["source"] = last_list_source.uniq
						end

						# Combine the inline items
						content_array[last_item_index]["content"] += node.to_s

						# Don't push a new item into the content array since updated the last item
						cancel_content_push = true
					else
						# Add a new inline item because it is the first in a series
						item["content_type"] = "inline"
						item["tags"] = tags
						item["source"] = content_source
						item["content"] = node.to_s
					end
				elsif node.name != "h#{parent_heading_level}"
					item["content_type"] = "block"
					item["tags"] = tags
					item["source"] = content_source
					item["content"] = node
				end
				if !cancel_content_push && !item["content_type"].nil?
					content_array.push(item)
				end
			end
		end
	end
	return content_array
end

# Generate the site
conf = Jekyll.configuration({
	'source' => '.',
	'destination' => jekyll_output_dir
})
logger.info("Generating temporary site with Jekyll")
Jekyll::Site.new(conf).process

lang.each do |lang|
	# Root data
	data = Hash.new
	data["$schema"] = "https://raw.githubusercontent.com/canada-ca/digital-playbook-guide-numerique/master/_data/#{site_data["playbookData"]["#{lang}"]}_schema.json"

	# Introduction data
	introduction = Hash.new
	file_md = "#{lang}/#{site_data["overviewFile"]["#{lang}"]}.md"
	file_html = "#{jekyll_output_dir}#{lang}/#{site_data["overviewFile"]["#{lang}"]}.html"
	
	# Parse the front matter and HTML
	logger.info("Processing '#{file_md}'")
	front_matter = YAML.load_file(file_md)
	if front_matter == nil
		logger.fatal("Could not process '#{file_md}'")
		abort
	end
	logger.info("Processing '#{file_html}'")
	html_dom = File.open(file_html) { |f| Nokogiri::HTML(f) }
	if html_dom == nil
		logger.fatal("Could not process '#{file_html}'")
		abort
	end

	data["title"] = front_matter["title"]
	elems_intro_selector = ".#{common_data["introduction"]["tags"][0]}"
	elems_intro = html_dom.css(elems_intro_selector)
	if elems_intro.count >= 1
		introduction = Hash.new
		elem_intro = elems_intro[0]
		h2 = elem_intro.css("h2")
		if h2.count >= 1
			introduction["title"] = h2[0].inner_html
		else
			# Handling for Playbook intro heading not being found
			logger.error("Heading could not be found when processing the Playbook introduction")
			logger.debug(elem_intro)
		end
		if elem_intro["class"].nil? || elem_intro["class"].length == 0
			tags = Array.new
		else
			tags = elem_intro["class"].split(" ")
		end
		if elem_intro["data-source"].nil? || elem_intro["data-source"].length == 0
			source = Array.new
		else
			source = elem_intro["class"].gsub(" ","").split(",")
		end
		introduction["tags"] = tags
		introduction["source"] = source
		introduction["content"] = build_content_array(elem_intro, true, 2, logger, tags, source)
		data["introduction"] = introduction
	else
		# Handling for Playbook intro not being found
		logger.error("Playbook introduction could not be found using '#{elems_intro_selector}'")
	end

	# Standards
	common_data_standards = common_data["standards"]
	common_data_standard = common_data_standards["standard"]
	common_data_guidelines = common_data_standard["guidelines"]
	common_data_guideline = common_data_guidelines["guideline"]
	standards = Hash.new
	standards["title"] = common_data_standards["title"]["#{lang}"]
	standards["tags"] = common_data_standards["tags"]
	standards_content = Array.new

	site_data["standardFile"].each do |filename|
		file_md = "#{lang}/#{filename["#{lang}"]}.md"
		file_html = "#{jekyll_output_dir}#{lang}/#{filename["#{lang}"]}.html"
		standard = Hash.new

		# Parse the front matter and markdown
		logger.info("Processing '#{file_md}'")
		front_matter = YAML.load_file(file_md)
		if front_matter == nil
			logger.fatal("Could not process '#{file_md}'")
			abort
		end
		logger.info("Processing '#{file_html}'")	
		html_dom = File.open(file_html) { |f| Nokogiri::HTML(f) }
		if html_dom == nil
			logger.fatal("Could not process '#{file_html}'")
			abort
		end


		standard["title"] = front_matter["title"]
		standard["tags"] = common_data_standard["tags"]
		if front_matter["tags"] != nil
			if front_matter["tags"].kind_of?(Array)
				standard["tags"].push(*front_matter["tags"])
			else
				clean_string = front_matter["tags"].gsub! " ", ""
				standard["tags"].push(*clean_string.split(","))
			end
		end 

		# Introduction
		standard_intro = Hash.new
		elems_standard_intro_selector = ".#{common_data_standard["introduction"]["tags"][0]}"
		elems_standard_intro = html_dom.css(elems_standard_intro_selector)
		if elems_standard_intro.count >= 1
			elem_standard_intro = elems_standard_intro[0]
			if elem_standard_intro["class"].nil? || elem_standard_intro["class"].length == 0
				tags = Array.new
			else
				tags = elem_standard_intro["class"].split(" ")
			end
			if elem_standard_intro["data-source"].nil? || elem_standard_intro["data-source"].length == 0
				source = Array.new
			else
				source = elem_standard_intro["class"].gsub(" ","").split(",")
			end
			standard_intro["tags"] = tags
			standard_intro["source"] = source
			standard_intro["content"] = build_content_array(elem_standard_intro, true, 1, logger, tags, source)
		else
			# Handling for standard intro not being found
			logger.error("Introduction for '#{standard["title"]}' could not be found using '#{elems_standard_intro_selector}'")

		end
		standard["introduction"] = standard_intro

		# Related guidelines
		related_guidelines = Hash.new
		related_guidelines["title"] = common_data_standard["relatedguidelines"]["title"]["#{lang}"]
		related_guidelines["tags"] = common_data_standard["relatedguidelines"]["tags"]
		related_guidelines_ul_selector = ".#{related_guidelines["tags"][0]} ul"
		related_guidelines_ul = html_dom.css(related_guidelines_ul_selector)
		if related_guidelines_ul.count >= 1
			related_guidelines["content"] = related_guidelines_ul[0]["data-guidelines"].split(",")
		else
			# Handling for related guidelines missing
			logger.error("Related guidelines for '#{standard["title"]}' could not be found using '#{related_guidelines_ul_selector}'")
		end
		standard["relatedguidelines"] = related_guidelines

		# Guidelines
		guidelines = Hash.new
		guidelines["title"] = common_data_guidelines["title"]["#{lang}"]
		guidelines["tags"] = common_data_guidelines["tags"]
		guidelines_content = Array.new
		elems_guidelines = html_dom.css(".#{common_data_guideline["tags"][0]}")
		elems_guidelines.each do |elem_guideline|
			guideline = Hash.new
			h2 = elem_guideline.css("h2")
			if h2.count >= 1
				guideline["title"] = h2[0].inner_html
			else
				# Handling for guideline heading not being found
				logger.error("Heading for a guideline in '#{standard["title"]} could not be found")
				logger.debug(elem_guideline)
			end			
			if elem_guideline["class"].nil? || elem_guideline["class"].length == 0
				guideline["tags"] = Array.new
			else
				guideline["tags"] = elem_guideline["class"].split(" ")
			end

			# Guideline sections
			guideline_sections = ["introduction", "checklist", "guides", "solutions", "similar"]
			guideline_sections.each do |guideline_section_name|
				guideline_section = Hash.new
				elems_guideline_section_selector = ".#{common_data_guideline[guideline_section_name]["tags"][0]}"
				elems_guideline_section = elem_guideline.css(elems_guideline_section_selector)
				unless guideline_section_name == "introduction"
					guideline_section["title"] = common_data_guideline[guideline_section_name]["title"]["#{lang}"]
				end
				if elems_guideline_section.count >= 1
					elem_guideline_section = elems_guideline_section[0]
					if elem_guideline_section["class"].nil? || elem_guideline_section["class"].length == 0
						tags = Array.new
					else
						tags = elem_guideline_section["class"].split(" ")
					end
					if elem_guideline_section["data-source"].nil? || elem_guideline_section["data-source"].length == 0
						source = Array.new
					else
						source = elem_guideline_section["class"].gsub(" ","").split(",")
					end
					guideline_section["tags"] = tags
					guideline_section["source"] = source
					guideline_section["content"] = build_content_array(elem_guideline_section, true, guideline_section_name == "introduction" ? 2 : 3, logger, tags, source)
				else
					# Handling for guideline section not being found
					logger.warn("'#{guideline_section_name}' section could not be found in '#{guideline["title"]}' using '#{elems_guideline_section_selector}'")
					guideline_section["tags"] = common_data_guideline[guideline_section_name]["tags"]
					guideline_section["content"] = Array.new
				end			
				guideline[guideline_section_name] = guideline_section
			end
			guidelines_content.push(guideline)
		end
		guidelines["content"] = guidelines_content
		standard["guidelines"] = guidelines

		standards_content.push(standard)
	end
	standards["content"] = standards_content
	data["standards"] = standards

	output_dataset = "_data/#{site_data["playbookData"]["#{lang}"]}-generated.json"
	logger.info("Generating '#{output_dataset}'")
	File.write(output_dataset, JSON.pretty_generate(data) << "\n")
end

logger.info("Deleting temporary site")
FileUtils.remove_dir(jekyll_output_dir)

