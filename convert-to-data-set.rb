require 'json'
require 'kramdown'
require 'nokogiri'
require 'upmark'
require 'yaml'

lang = ["en", "fr"]
site_data = YAML.load_file("_config.yml")
common_data = site_data["common"]

def build_content_array(html_block, is_parent, parent_heading_level)
	content_array = Array.new
	ignore_loop = 0
	if is_parent
		elems = html_block.element_children
	else
		elems = html_block
	end
	elems.each do |elem|
		unless ignore_loop > 0 || elem.name === "h#{parent_heading_level}"
			item = Hash.new
			if elem["class"].nil? || elem["class"].length == 0
				tags = Array.new
			else
				tags = elem["class"].split(" ")
				elem.remove_attribute("class")
			end

			if elem.name === "section"
				item["type"] = "section"
				item["tags"] = tags
				heading = elem.css("h#{parent_heading_level + 1}")
				if heading.count >= 1
					item["title"] = heading[0].inner_html
				else
					# Handle missing heading
				end
				item["content"] = build_content_array(elem, true, parent_heading_level + 1)
			elsif elem.name === ("h#{parent_heading_level + 1}")
				item["type"] = "section"
				item["tags"] = tags
				item["title"] = elem.inner_html
				node_array = Array.new
				next_elem = elem.next_element
				while !next_elem.nil? && next_elem.name != "h#{parent_heading_level + 1}"
					node_array.push(next_elem)
					next_elem = next_elem.next_element
					ignore_loop += 1
				end
				item["content"] = build_content_array(node_array, false, parent_heading_level + 1)
			elsif elem.name === "ul" || elem.name === "ol"
				item["type"] = "list"
				item["tags"] = tags
				if elem.name === "ul"
					item["listtype"] = "unordered"
				else
					item["listtype"] = "ordered"
				end
				item["content"] = build_content_array(elem, true, parent_heading_level)
			elsif elem.name === "li"
				if !elem.next_element.nil? && (elem.next_element.name === "ul" || elem.next_element.name === "ol")
					item["type"] = "listnested"
					item["tags"] = tags
					item["content"] = elem
					item["nested"] = build_content_array(elem.next_element, false, parent_heading_level)
				else
					item["type"] = "listitem"
					item["tags"] = tags
					item["content"] = elem.inner_html
				end
			else
				item["type"] = "text"
				item["tags"] = tags
				item["content"] = elem
			end
			content_array.push(item)
		end

		if ignore_loop > 0
			ignore_loop -= 1
		end
	end
	return content_array
end

lang.each do |lang|

	# Root data
	data = Hash.new
	data["$schema"] = "https://raw.githubusercontent.com/canada-ca/digital-playbook-guide-numerique/master/_data/" << site_data["playbookData"]["#{lang}"] << "_schema.json"

	# Introduction data
	introduction = Hash.new
	file = "#{lang}" << "/" << site_data["overviewFile"]["#{lang}"] << ".md"
	
	# Parse the front matter and markdown	
	front_matter = YAML.load_file(file)
	doc = Kramdown::Document.new(File.read(file), {parse_block_html: true})
	html_doc = doc.to_html
	html_dom = Nokogiri::HTML(html_doc)

	data["title"] = front_matter["title"]
	elems = html_dom.css("." << common_data["introduction"]["tags"][0])
	if elems.count >= 1
		introduction = Hash.new
		h2 = elems[0].css("h2")
		if h2.count >= 1
			introduction["title"] = h2[0].inner_html
		else
			# Handling for Playbook intro heading not being found
		end
		if elems[0]["class"].nil? || elems[0]["class"].length == 0
			introduction["tags"] = Array.new
		else
			introduction["tags"] = elems[0]["class"].split(" ")
		end
		introduction["content"] = build_content_array(elems[0], true, 2)
		data["introduction"] = introduction
	else
		# Handling for Playbook intro not being found
	end

	# Standards
	common_data_standards = common_data["standards"]
	common_data_standard = common_data_standards["standard"]
	standards = Hash.new
	standards["title"] = common_data_standards["title"]["#{lang}"]
	standards["tags"] = common_data_standards["tags"]
	standards_content = Array.new

	site_data["standardFile"].each do |filename|
		file = "#{lang}" << "/" << filename["#{lang}"] << ".md"
		standard = Hash.new

		# Parse the front matter and markdown
		front_matter = YAML.load_file(file)
		doc = Kramdown::Document.new(File.read(file), {parse_block_html: true})
		html_doc = doc.to_html
		html_dom = Nokogiri::HTML(html_doc)

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
		standard_intro["tags"] = common_data_standard["introduction"]["tags"]
		standard_intro_content = Array.new

		elems = html_dom.css(".dpgn-section-intro-standard")
		if elems.count >= 1
			if elems[0]["class"].nil? || elems[0]["class"].length == 0
				introduction["tags"] = Array.new
			else
				introduction["tags"] = elems[0]["class"].split(" ")
			end
			standard_intro["content"] = build_content_array(elems[0], true, 2)
		else
			# Handling for Playbook intro not being found
		end
		standard["introduction"] = standard_intro

		# Related guidelines
		related_guidelines = Hash.new
		related_guidelines["title"] = common_data_standard["relatedguidelines"]["title"]["#{lang}"]
		related_guidelines["tags"] = common_data_standard["relatedguidelines"]["tags"]
		related_guidelines["content"] = Array.new		
		standard["relatedguidelines"] = related_guidelines

		# Guidelines
		guidelines = Hash.new
		guidelines["title"] = common_data_standard["guidelines"]["title"]["#{lang}"]
		guidelines["tags"] = common_data_standard["guidelines"]["tags"]
		guidelines["content"] = Array.new
		standard["guidelines"] = guidelines

		standards_content.push(standard)
	end
	standards["content"] = standards_content
	data["standards"] = standards

	File.write("_data/" << site_data["playbookData"]["#{lang}"] << "-generated.json", JSON.pretty_generate(data))
end

