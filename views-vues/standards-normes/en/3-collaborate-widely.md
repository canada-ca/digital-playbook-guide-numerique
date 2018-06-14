---
layout: default
titleSource: standard
standard: 3
lang: en
altLang: fr
altLangPage: 3-collaborer-largement
collectionDirectory: views-vues/standards-normes
---
{% assign defaultSubsectionTitles = site.defaultSubsectionTitles[page.lang] %}{% 
include functions/output-standard.html standard=page.standard includeStandardTitle=false currentHeadingLevel=1 groupByTagsTags=site.defaultSubsectionTags groupByTagsTitles=defaultSubsectionTitles %}

