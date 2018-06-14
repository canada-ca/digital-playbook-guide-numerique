---
layout: default
titleSource: standard
standard: 5
lang: en
altLang: fr
altLangPage: 5-travailler-ouvertement-par-defaut
collectionDirectory: views-vues/standards-normes
---
{% assign defaultSubsectionTitles = site.defaultSubsectionTitles[page.lang] %}{% 
include functions/output-standard.html standard=page.standard includeStandardTitle=false currentHeadingLevel=1 groupByTagsTags=site.defaultSubsectionTags groupByTagsTitles=defaultSubsectionTitles %}

