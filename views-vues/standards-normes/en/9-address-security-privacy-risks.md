---
layout: default
titleSource: standard
standard: 9
lang: en
altLang: fr
altLangPage: 9-gerer-risques-matiere-securite-protection-renseignements-personnels
collectionDirectory: views-vues/standards-normes
---
{% assign defaultSubsectionTitles = site.defaultSubsectionTitles[page.lang] %}{% 
include functions/output-standard.html standard=page.standard includeStandardTitle=false currentHeadingLevel=1 groupByTagsTags=site.defaultSubsectionTags groupByTagsTitles=defaultSubsectionTitles %}
