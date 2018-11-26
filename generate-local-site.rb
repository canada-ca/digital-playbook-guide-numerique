require 'json'
require 'kramdown'
require 'yaml'
require 'jekyll'
require 'fileutils'
require 'logger'

logger = Logger.new(STDOUT)
logger.level = Logger::INFO

jekyll_output_dir = "test_rendered_site/"
# Generate the site
conf = Jekyll.configuration({
	'source' => '.',
	'destination' => jekyll_output_dir,
        'exclude' => ["/en", "/fr", "/docs", "views-vues/automated-decision-automatise/fr", "views-vues/gc-earb-ceai", "/views-vues/dev-stages", "/views-vues/single-page-seule", "/views-vues/standards-normes", "/views-vues/view-template-modele-vue", "/views-vues/comparison-comparatif"]
})
logger.info("Generating temporary site with Jekyll")
Jekyll::Site.new(conf).process
logger.info("Site generation complete")

