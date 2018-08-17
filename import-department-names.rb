require 'open-uri'
require 'csv'
require 'json'

department_names_csv_url = "http://donnees-data.tpsgc-pwgsc.gc.ca/ba1/min-dept/min-dept.csv"
data = Array.new

uri = URI.parse( department_names_csv_url )
index = 0
CSV.parse( uri.read.force_encoding("UTF-8") ).each do |row|
	if ( index > 0 )
		data.push( { "number" => row[ 0 ], "en" => row[ 1 ], "fr" => row [ 2 ] } )
	end
	index += 1
end

File.write("_data/departments.json", JSON.pretty_generate(data) << "\n")
