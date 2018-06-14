---
layout: default
titleSource: standard
standard: 10
lang: en
altLang: fr
altLangPage: 10-etre-bons-utilisateurs-donnees
collectionDirectory: views-vues/standards-normes
---
{% assign defaultSubsectionTitles = site.defaultSubsectionTitles[page.lang] %}{% 
include functions/output-standard.html standard=page.standard includeStandardTitle=false currentHeadingLevel=1 groupByTagsTags=site.defaultSubsectionTags groupByTagsTitles=defaultSubsectionTitles %}

