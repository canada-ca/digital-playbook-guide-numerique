---
layout: default
title: Experimental approaches and reusable components
lang: en
altLang: fr
altLangPage: approches-experimentales-composants-reutilisables
collectionDirectory: docs
---
{::options toc_levels="2..3" /}

One of the goals of the Digital Playbook was to experiment with new approaches while reusing as much as possible. The goal was to be platform agnostic, focusing on HTML, CSS and JavaScript while leveraging the [Web Experience Toolkit (WET)](https://wet-boew.github.io/wet-boew/index-en.html) as much as possible. Where requirements exceeded what was offered through WET, the goal was to develop reusable components that could be contributed back into WET for others to use.

The following sections include examples of experimental approaches and reusable components that resulted from the work on the Digital Playbook.

<!-- markdownlint-disable MD032 -->
- TOC
{:toc .lst-spcd}
<!-- markdownlint-enable MD032 -->

## Interface components

The interface components in this section are built using reusable JavaScript functions and are controlled through JSON data nested in HTML markup.

### Save form progress to a file

#### Involved components

<!-- markdownlint-disable MD032 -->
- handleEvent (assets-atouts/js/format-gen.js) - If triggered through an event
- outputFile (assets-atouts/js/format-gen.js)
- getFormFieldStatus (assets-atouts/js/format-gen.js) - If the form progress will be retrieved using the current state of the form fields
- retrieveData (assets-atouts/js/format-gen.js) - If the form progress will be retrieved from sessionStorage, localStorage or a data attribute
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

#### Example implementations

<!-- markdownlint-disable MD032 -->
- [Algorithmic Impact Assessment]({{ site.baseurl }}/views-vues/automated-decision-automatise/en/algorithmic-impact-assessment.html) - Retrieving form progress from the current state of the form fields
- [Security Categorization Tool]({{ site.baseurl }}/views-vues/security-securite/en/categorization-tool.html) - Retrieving form progress from sessionStorage
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

### Restoring form progress from a file

#### Involved components

<!-- markdownlint-disable MD032 -->
- handleEvent (assets-atouts/js/format-gen.js) - If triggered through an event
- inputFile (assets-atouts/js/format-gen.js)
- setFormFieldStatus (assets-atouts/js/format-gen.js) - If restoring progress directly to an HTML form
- storeData (assets-atouts/js/format-gen.js) - If restoring progress through sessionStorage or localStorage (where form state is dependent upon storage)
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

#### Example implementations

<!-- markdownlint-disable MD032 -->
- [Algorithmic Impact Assessment]({{ site.baseurl }}/views-vues/automated-decision-automatise/en/algorithmic-impact-assessment.html) - Restoring progress directly through an HTML form
- [Security Categorization Tool]({{ site.baseurl }}/views-vues/security-securite/en/categorization-tool.html) - Restoring progress through sessionStorage
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

### Downloading data as a file or sending it through an HTTP request

#### Involved components

<!-- markdownlint-disable MD032 -->
- handleEvent (assets-atouts/js/format-gen.js) - If triggered through an event
- outputFile (assets-atouts/js/format-gen.js)
- retrieveData (assets-atouts/js/format-gen.js) - If retrieving data from sessionStorage, localStorage or a data attribute
- dataToTableArray (assets-atouts/js/format-gen.js) - If converting multi-dimensional data object to CSV (prepares data for use by generateTableRows)
- generateTableRows (assets-atouts/js/format-gen.js) - If outputting stored data as CSV
- htmlToCSV (assets-atouts/js/format-gen.js) - If retrieving data directly from HTML markup and outputting as CSV
- htmlToJSON (assets-atouts/js/format-gen.js) - If retrieving data directly from HTML markup and outputting as JSON
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

#### Example implementations

<!-- markdownlint-disable MD032 -->
- [Algorithmic Impact Assessment]({{ site.baseurl }}/views-vues/automated-decision-automatise/en/algorithmic-impact-assessment.html) - Retrieving data directly from HTML markup and downloading it as a CSV file
- [Security Categorization Tool]({{ site.baseurl }}/views-vues/security-securite/en/categorization-tool.html) - Retrieving a multi-dimensional data object from sessionStorage and downloading it as a CSV file
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

### Generating an HTML table from a multi-dimensional object

#### Involved components

<!-- markdownlint-disable MD032 -->
- handleEvent (assets-atouts/js/format-gen.js) - If triggered through an event
- inputStorage (assets-atouts/js/format-gen.js)
- retrieveData (assets-atouts/js/format-gen.js)
- dataToTableArray (assets-atouts/js/format-gen.js)
- findData (assets-atouts/js/format-gen.js)
- flattenArray (assets-atouts/js/format-gen.js)
- filterArray (assets-atouts/js/format-gen.js)
- getNestedArrayElementCounts (assets-atouts/js/format-gen.js)
- generateTableRows (assets-atouts/js/format-gen.js)
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

#### Example implementations

<!-- markdownlint-disable MD032 -->
- [Security Categorization Tool]({{ site.baseurl }}/views-vues/security-securite/en/categorization-tool.html) - Detailed Report section shows output of all data while Summary Report section shows output of specific parts of the data, including filtering.
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

### Add, edit and delete nested data

#### Involved components

<!-- markdownlint-disable MD032 -->
- handleEvent (assets-atouts/js/format-gen.js) - If triggered through an event
- outputStorage (assets-atouts/js/format-gen.js)
- retrieveData (assets-atouts/js/format-gen.js)
- retrieveValue (assets-atouts/js/format-gen.js)
- findData (assets-atouts/js/format-gen.js)
- storeData (assets-atouts/js/format-gen.js)
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

#### Example implementations

<!-- markdownlint-disable MD032 -->
- [Security Categorization Tool]({{ site.baseurl }}/views-vues/security-securite/en/categorization-tool.html) - Adding, saving, editing and deleting items.
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

### Dynamically calculating results using data in the page

#### Involved components

<!-- markdownlint-disable MD032 -->
- handleEvent (assets-atouts/js/calcul.js) - If triggered through an event
- iterate (assets-atouts/js/calcul.js)
- calculate (assets-atouts/js/calcul.js)
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

#### Example implementations

<!-- markdownlint-disable MD032 -->
- [Algorithmic Impact Assessment]({{ site.baseurl }}/views-vues/automated-decision-automatise/en/algorithmic-impact-assessment.html) - Caculating the % of questionnaire completed, the score and % for each criteria as well as the resulting impact level.
- [Is Agile Right for My Project?]({{ site.baseurl }}/views-vues/agile/en/agile-use-when.html) - Calculating the % of questionnaire completed, the agile, hybrid score and non-agile scores as well as the final recommendation.
- [Right Cloud Decision Tool]({{ site.baseurl }}/views-vues/cloud-nuage/en/cloud-decision-tool.html) - Calculating the % of questionnaire completed as well as the public, private and non-coloud scores.
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

### Event triggering and handling

#### Involved components

<!-- markdownlint-disable MD032 -->
- handleEvent (assets-atouts/js/format-gen.js, assets-atouts/js/calcul.js)
- calculate (assets-atouts/js/calcul.js) - For triggering events
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

#### Example implementations

<!-- markdownlint-disable MD032 -->
- [Algorithmic Impact Assessment]({{ site.baseurl }}/views-vues/automated-decision-automatise/en/algorithmic-impact-assessment.html) - Managing the order of updates to the the intial results and final result sections, updating the quesionnaire completed, navigating between form sections, showing/hiding questions and handling other changes to the form.
- [Security Categorization Tool]({{ site.baseurl }}/views-vues/security-securite/en/categorization-tool.html) - Navigating between form sections, handling add, remove, edit and delete functionality, updating the detailed and summary reports as well as handling save, restore and download functionality.
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

### Conditional logic and resulting actions

#### Involved components

<!-- markdownlint-disable MD032 -->
- handleEvent (assets-atouts/js/calcul.js) - If triggered through an event
- calculate (assets-atouts/js/calcul.js)
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

#### Example implementations

<!-- markdownlint-disable MD032 -->
- [Algorithmic Impact Assessment]({{ site.baseurl }}/views-vues/automated-decision-automatise/en/algorithmic-impact-assessment.html) - Showing/hiding questions through checkbox changes, determining the impact level, controlling the query string of the filtered link to the Directive on Automated Decision Making.
- [Is Agile Right for My Project?]({{ site.baseurl }}/views-vues/agile/en/agile-use-when.html) - Determing the final recommendation.
- [Right Cloud Decision Tool]({{ site.baseurl }}/views-vues/cloud-nuage/en/cloud-decision-tool.html) - Determining whether mandatory requirements were met and displaying the result.
- [Security Categorization Tool]({{ site.baseurl }}/views-vues/security-securite/en/categorization-tool.html) - Enabling/disabling interface buttons and controlling the results of button clicks and showing/hinding current location links.
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

## Content authoring and management components

The content authoring and management components in this section are implemented using Jekyll, Liquid and Ruby but could be ported to any other server-side scripting language.

### Generating a JSON dataset from authored Markdown content

#### Involved components

<!-- markdownlint-disable MD032 -->
- convert-to-data-set.rb
- en/\*.md and /fr/\*.md (both Front Matter and content)
- Select content retrieved from:
  - views-vues/automated-decision-automatise/en/automated-decision.md
  - views-vues/automated-decision-automatise/fr/decision-automatise.md
  - views-vues/gc-earb-ceai/gc-earb.md
  - views-vues/gc-earb-ceai/ceai-gc.md
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

#### Example implementations

<!-- markdownlint-disable MD032 -->
- _data/guide.json - Generated from /fr/\*.md
- _data/playbook.json - Generated from /en/\*.md
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

### Generating different views using content retrieved from a dataset using the structure and tags

#### Involved components

<!-- markdownlint-disable MD032 -->
- _data/guide.json - French
- _data/playbook.json - English
- _includes/functions/class-from-tags.html
- _includes/functions/filtered-standard-guideline-content.html
- _includes/functions/find-array-match.html
- _includes/functions/find-relevant-content.html
- _includes/functions/find-relevant-standards-guidelines.html
- _includes/functions/generate-id.html
- _includes/functions/guideline-links.html
- _includes/functions/output-content-array.html
- _includes/functions/output-content-details.html
- _includes/functions/output-guidelne.html
- _includes/functions/output-section-content.html
- _includes/functions/output-section-heading.html
- _includes/functions/output-sections.html
- _includes/functions/output-standard.html
- _includes/functions/page-title.html
- _includes/functions/retrieve-data.html
- _includes/functions/standard-links.html
- _includes/functions/store-data.html
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

#### Example implementations

<!-- markdownlint-disable MD032 -->
- [1. Design with users]({{ site.baseurl }}/digital-playbook-guide-numerique/views-vues/standards-normes/en/1-design-with-users.html)
- [Digital Standards - Single page view]({{ site.baseurl }}/views-vues/single-page-seule/en/digital-standards.html)
- [Development stages]({{ site.baseurl }}/views-vues/dev-stages/en/development-stages.html)
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

### Remotely retrieving an online dataset and using it to populate a select element

#### Involved components

<!-- markdownlint-disable MD032 -->
- import-department-name.rb
- departments.json - Generated by import-department-name.rb
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

#### Example implementations

<!-- markdownlint-disable MD032 -->
- [Algorithmic Impact Assessment]({{ site.baseurl }}/views-vues/automated-decision-automatise/en/algorithmic-impact-assessment.html) - Department select (question 3)
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->
