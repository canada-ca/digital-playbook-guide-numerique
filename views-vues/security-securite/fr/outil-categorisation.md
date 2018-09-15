---
layout: default
title: Outil de categorisation de sécurité (ébauche)
lang: fr
altLang: en
altLangPage: categorization-tool
collectionDirectory: views-vues/security-securite
businessDomain:
  title: Business Domain
  intro: A business domain is an operational environment where a department performs business activities supporting common organizational objectives.
  "business-domain-label": What is your business domain?
businessComponent:
  title: Business Component
  intro1: Any activity performed by a department in the course of its operations to deliver or support the delivery of its programs or services. A business activity is composed of one or several business processes and related information assets.
  intro2: Business activities will be categorized by determining the expected injuries from IT-related threat compromise to the national and non-national interests that the business activities serve, and then determining the lveral of these expected injuries.
  "business-activity-label": Business Activity
  "business-activity-component-label": Business Activity Component
  "component-description-label": Component Description
  "component-type-label": Type
  "component-type-sub-label": Select a type
  "component-type-option-1": Process
  "component-type-option-2": Information
  "authoritative-source-label": Authoritative Source
lossTypes: [ "confidentiality", "integrity", "availability" ]
confidentiality:
  title: Loss of Confidentiality
  intro: To ensure the confidentiality of business activites and IT assets against a specified set of theats in order to prevent injury to national interests or non-national interests.
  "type-of-injury-label": What is the type of injury that is most likely to result from a loss of confidentiality?
  example1: Example of such injury
  example2: ie. Riot
integrity:
  title: Loss of Integrity
  intro: To ensure the integrity of a business activity or IT asset against a specified set of threats in order to prevent injury to national interests or non-national interests.
  "type-of-injury-label": What is the type of injury that is most likely to result from a loss of integrity?
  example1: Example of such injury
  example2: ie. Distress, psychological trauma
availability:
  title: Loss of Availability
  intro: To ensure the availability of a business activity or IT asset against a specified set of threats in order to prevent injury to national interests or non-national interests.
  "type-of-injury-label": What is the type of injury that is most likely to result from a loss of availability?
  example1: Example of such injury
  example2: ie. Affecting program performance
lossOfCommon:
  "failure-scenario-label": Failure Scenario (in context)
  "failure-scenario-sub-label": Select a type of injury
  "failure-scenario-table-heading": Type of injury
  "failure-scenario-option-1": Civil disorder or unrest
  "failure-scenario-option-2": Physical harm to people
  "failure-scenario-option-3": Psychological harm to people
  "failure-scenario-option-4": Financial loss to individuals
  "failure-scenario-option-5": Financial loss to Canadian companies
  "failure-scenario-option-6": Financial loss to Canadian governement
  "failure-scenario-option-7": Harm to Canadian economy
  "failure-scenario-option-8": Harm to Canada's reputation
  "failure-scenario-option-9": Harm to National Interest
  "failure-scenario-option-0": No expected injury
  "injury-significance": How significant is the expected injury?
  "injury-significance-sub-label": Select the significance of injury
  "injury-significance-table-heading": Significance of injury
  "injury-significance-option-1": Very low
  "injury-significance-option-2": Low
  "injury-significance-option-3": Medium
  "injury-significance-option-4": High
  "injury-significance-option-5": Very high
  "injury-significance-option-0": NA
  "analysis-label": Analysis
labelGridClass: col-sm-4
fieldGridClass: col-sm-8
---
{% assign dataVariable = site.playbookData[page.lang] %}{%
assign dataSource = site.data[dataVariable] %}

<section id="welcome-section" class="wb-frmvld">
<form id="welcome-form" class="form-horizontal" method="post">

## Welcome to the Security Categorization Tool

Security Categorization is the process of identifying the potential injuries that could result from compromises of business processes and related information.

The Security Categorization Tool is an instrument meant to be used by security practitioners to help organize business processes and information for the purposes of injury assessment. It should help the practitioner develop a business injury view of the department for the purposes of designing secure systems.

This web-based version of the tool is meant to make the process of organizing this information quicker and easier for security practitioners and it is compatible with Microsoft Excel. Assessments created on the Excel spreadsheet version of the Security Categorization tool can be imported to this web-based tool.

<section>

<!-- markdownlint-disable MD026 -->

### What Would You Like to Do?

<!-- markdownlint-enable MD026 -->

<!-- Button for revealing the next section and hiding the current one -->
{% include views-vues/questionnaire-next-previous.html currentId="welcome" nextId="business-domain" nextHeading="2" %}

</section>

</form>
</section>

<section id="business-domain-section" class="hidden wb-frmvld">
<form id="business-domain-form" class="form-horizontal" method="post">

## {{ page.businessDomain.title }}

{{ page.businessDomain.intro }}

<div class="form-group" markdown="0">
<label for="business-domain" class="required {{ page.labelGridClass }}"><span class="field-name">{{ page.businessDomain[ "business-domain-label" ] }}</span> <strong class="required">({{ site.required[ page.lang ] }})</strong></label>
<div class="{{ page.fieldGridClass }}">
<input name="business-domain" id="business-domain" type="text" required="required" pattern=".{2,}" data-rule-minlength="2" />
</div>
</div>

<button type="button" class="btn btn-primary wb-format-gen" data-wb-format-gen='{ "type": "session-storage", "key": "assessment", "source": "form-state", "container": "#business-domain-form", "action": "append" }'>Append business domain to assessment in session storage</button>

<!-- Buttons for revealing the next/previous section and hiding the current one -->{%
include views-vues/questionnaire-next-previous.html currentId="business-domain" nextId="business-component" nextHeading="2" previousId="welcome" previousHeading="2" %}
</form>
</section>

<section id="business-component-section" class="hidden wb-frmvld">
<form id="business-component-form" class="form-horizontal" method="post">

## {{ page.businessComponent.title }}

{{ page.businessComponent.intro1 }}

{{ page.businessComponent.intro2 }}

<!-- Temporary div for purpose of creating container for the button. Remove when testing is done -->
<div id="business-activity-container">

<div class="form-group" markdown="0">
<label for="business-activity" class="required {{ page.labelGridClass }}"><span class="field-name">{{ page.businessComponent[ "business-activity-label" ] }}</span> <strong class="required">({{ site.required[ page.lang ] }})</strong></label>
<div class="{{ page.fieldGridClass }}">
<input name="business-activity" id="business-activity" type="text" required="required" pattern=".{2,}" data-rule-minlength="2" />
</div>
</div>

</div>

<!-- TODO Figure out how to create this button on the fly for different business domains. So have one button for creating business acitivities for each business domain -->
<button type="button" class="btn btn-primary wb-format-gen" data-wb-format-gen='{ "type": "session-storage", "key": "assessment", "indexesKeys": [ 1, 0, "activities" ], "source": "form-state", "container": "#business-activity-container", "action": "append" }'>Append business activity to business domain 2 in session storage (need at least 2 business domains for this to work)</button>

<!-- Temporary div for purpose of creating container for the button. Remove when testing is done -->
<div id="business-activity-component-container">

<div class="form-group" markdown="0">
<label for="business-activity-component" class="required {{ page.labelGridClass }}"><span class="field-name">{{ page.businessComponent[ "business-activity-component-label" ] }}</span> <strong class="required">({{ site.required[ page.lang ] }})</strong></label>
<div class="{{ page.fieldGridClass }}">
<input name="business-activity-component" id="business-activity-component" type="text" required="required" pattern=".{2,}" data-rule-minlength="2" />
</div>
</div>

</div>

<!-- TODO Figure out how to create this button on the fly for different business activities. So have one button for creating business acitivity components for each business activity -->

<button type="button" class="btn btn-primary wb-format-gen" data-wb-format-gen='{ "type": "session-storage", "key": "assessment", "indexesKeys": [ 1, 0, "activities", 1, 0, "components" ], "source": "form-state", "container": "#business-activity-component-container", "action": "append" }'>Append business activity component to business activity 2 of business domain 2 in session storage (need at least 2 business activities in business domain 2 for this to work)</button>

<div class="form-group" markdown="0">
<label for="component-description" class="required {{ page.labelGridClass }}"><span class="field-name">{{ page.businessComponent[ "component-description-label" ] }}</span> <strong class="required">({{ site.required[ page.lang ] }})</strong></label>
<div class="{{ page.fieldGridClass }}">
<textarea name="component-description" id="component-description" required="required"></textarea>
</div>
</div>

<div class="form-group" markdown="0">
<label for="component-type" class="required {{ page.labelGridClass }}"><span class="field-name">{{ page.businessComponent[ "component-type-label" ] }}</span> <strong class="required">({{ site.required[ page.lang ] }})</strong></label>
<div class="{{ page.fieldGridClass }}">
<select class="form-control" id="component-type" name="component-type" required="required">
<option label="{{ page.businessComponent[ "component-type-sub-label" ] }}"></option>
<option value="1">{{ page.businessComponent[ "component-type-option-1" ] }}</option>
<option value="2">{{ page.businessComponent[ "component-type-option-2" ] }}</option>
</select>
</div>
</div>

<div class="form-group" markdown="0">
<label for="authoritative-source" class="required {{ page.labelGridClass }}"><span class="field-name">{{ page.businessComponent[ "authoritative-source-label" ] }}</span> <strong class="required">({{ site.required[ page.lang ] }})</strong></label>
<div class="{{ page.fieldGridClass }}">
<textarea name="authoritative-source" id="authoritative-source" required="required"></textarea>
</div>
</div>

<!-- Buttons for revealing the next/previous section and hiding the current one -->{%
assign nextId = "loss-of-" | append: page.lossTypes[ 0 ] %}{%
include views-vues/questionnaire-next-previous.html currentId="business-component" nextId=nextId nextHeading="2" previousId="business-domain" previousHeading="2" %}
</form>
</section>

{% assign lossTypeIndex = 0 %}{%
for lossType in page.lossTypes %}{%
  assign previousLossTypeIndex = lossTypeIndex | minus: 1 %}
<section id="loss-of-{{ lossType }}-section" class="hidden wb-frmvld">
<form id="loss-of-{{ lossType }}-form" class="form-horizontal" method="post">

## {{ page[ lossType ].title }}

{{ page[ lossType ].intro }}

<div class="form-group" markdown="0">
<label for="failure-scenario-{{ lossType }}" class="required {{ page.labelGridClass }}"><span class="field-name">{{ page.lossOfCommon[ "failure-scenario-label" ] }}</span> <strong class="required">({{ site.required[ page.lang ] }})</strong></label>
<div class="{{ page.fieldGridClass }}">
<input name="failure-scenario-{{ lossType }}" id="failure-scenario-{{ lossType }}" type="text" required="required" pattern=".{2,}" data-rule-minlength="2" />
</div>
</div>

<div class="form-group" markdown="0">
<label for="type-of-injury-{{ lossType }}" class="required {{ page.labelGridClass }}"><span class="field-name">{{ page[ lossType ][ "type-of-injury-label" ] }}</span> <strong class="required">({{ site.required[ page.lang ] }})</strong></label>
<div class="{{ page.fieldGridClass }}">
<select class="form-control" id="type-of-injury-{{ lossType }}" name="type-of-injury-{{ lossType }}" required="required">
<option label="{{ page.lossOfCommon[ "failure-scenario-sub-label" ] }}"></option>
<option value="1">{{ page.lossOfCommon[ "failure-scenario-option-1" ] }}</option>
<option value="2">{{ page.lossOfCommon[ "failure-scenario-option-2" ] }}</option>
<option value="3">{{ page.lossOfCommon[ "failure-scenario-option-3" ] }}</option>
<option value="4">{{ page.lossOfCommon[ "failure-scenario-option-4" ] }}</option>
<option value="5">{{ page.lossOfCommon[ "failure-scenario-option-5" ] }}</option>
<option value="6">{{ page.lossOfCommon[ "failure-scenario-option-6" ] }}</option>
<option value="7">{{ page.lossOfCommon[ "failure-scenario-option-7" ] }}</option>
<option value="8">{{ page.lossOfCommon[ "failure-scenario-option-8" ] }}</option>
<option value="9">{{ page.lossOfCommon[ "failure-scenario-option-9" ] }}</option>
<option value="0">{{ page.lossOfCommon[ "failure-scenario-option-0" ] }}</option>
</select>
</div>
</div>

<div class="form-group" markdown="0">
<label for="injury-significance-{{ lossType }}" class="required {{ page.labelGridClass }}"><span class="field-name">{{ page.lossOfCommon[ "injury-significance" ] }}</span> <strong class="required">({{ site.required[ page.lang ] }})</strong></label>
<div class="{{ page.fieldGridClass }}">
<select class="form-control" id="injury-significance-{{ lossType }}" name="injury-significance-{{ lossType }}" required="required">
<option label="{{ page.lossOfCommon[ "injury-significance-sub-label" ] }}"></option>
<option value="1">{{ page.lossOfCommon[ "injury-significance-option-1" ] }}</option>
<option value="2">{{ page.lossOfCommon[ "injury-significance-option-2" ] }}</option>
<option value="3">{{ page.lossOfCommon[ "injury-significance-option-3" ] }}</option>
<option value="4">{{ page.lossOfCommon[ "injury-significance-option-4" ] }}</option>
<option value="5">{{ page.lossOfCommon[ "injury-significance-option-5" ] }}</option>
<option value="0">{{ page.lossOfCommon[ "injury-significance-option-0" ] }}</option>
</select>
</div>
</div>

**{{ page[ lossType ].example1 }}** {{ page[ lossType ].example2 }}

<div class="form-group" markdown="0">
<label for="analysis-{{ lossType }}" class="required {{ page.labelGridClass }}"><span class="field-name">{{ page.lossOfCommon[ "analysis-label" ] }}</span> <strong class="required">({{ site.required[ page.lang ] }})</strong></label>
<div class="{{ page.fieldGridClass }}">
<textarea name="analysis-{{ lossType }}" id="analysis-{{ lossType }}" required="required"></textarea>
</div>
</div>

<!-- Buttons for revealing the next/previous section and hiding the current one (except for the last section which doesn't have a next button) -->{%
  assign currentId = "loss-of-" | append: lossType %}{%
  if lossTypeIndex == 0 %}{%
    assign previousId = "business-component" %}{%
  else %}{%
    assign previousId = "loss-of-" | append: page.lossTypes[ previousLossTypeIndex ] %}{%
  endif %}{%
  if lossTypeIndex == 2 %}{%
    assign nextId = "summary-report" %}{%
    assign nextHeading = "3" %}{%
  else %}{%
    assign nextId = "loss-of-" | append: page.lossTypes[ lossTypeIndex ] %}{%
    assign nextHeading = "2" %}{%
  endif %}{%
  include views-vues/questionnaire-next-previous.html currentId=currentId nextId=nextId nextHeading=nextHeading previousId=previousId previousHeading="2" %}
</form>
</section>{%
  assign lossTypeIndex = lossTypeIndex | plus: 1 %}{%
endfor %}

<section id="results-section">

## Results

<section id="summary-report-section">

### Summary Report

The summary report expresses the highest level of expected injuries from threat comporomise with respect to the security objectives of confidentiality, integrity, and availability.

<table class="table table-bordered">
<caption>Breakdown by Business Domain</caption>
<thead>
<tr>
<th rowspan="2">Business Domain</th>
<th colspan="3" class="text-center">Security Category</th>
</tr>
<tr>
<th class="text-center">Confidentiality</th>
<th class="text-center">Integrity</th>
<th class="text-center">Availability</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td class="text-center"></td>
<td class="text-center"></td>
<td class="text-center"></td>
</tr>
</tbody>
</table>

<table class="table table-bordered">
<caption>Breakdown by Component</caption>
<thead>
<tr>
<th rowspan="2">Business Domain</th>
<th rowspan="2">Component</th>
<th rowspan="2" class="text-center">Type</th>
<th colspan="3" class="text-center">Security Category</th>
</tr>
<tr>
<th class="text-center">Confidentiality</th>
<th class="text-center">Integrity</th>
<th class="text-center">Availability</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td></td>
<td class="text-center"></td>
<td class="text-center"></td>
<td class="text-center"></td>
<td class="text-center"></td>
</tr>
</tbody>
</table>

</section>

<section id="detailed-report-section">

### Detailed Report

Security Categorization is the process of identifying the potential injuries that could result from compromises of business processes and related information.

The following report provides the detailed injury assessment performed for each process or information component with respect to confidentiality, integrity and availability.

<table class="table table-bordered">
<thead>
<tr>
<th rowspan="2">{{ page.businessDomain.title }}</th>
<th colspan="5" class="text-center">{{ page.businessComponent.title }}</th>
<th colspan="4" class="text-center">{{ page.confidentiality.title }}</th>
<th colspan="4" class="text-center">{{ page.integrity.title }}</th>
<th colspan="4" class="text-center">{{ page.availability.title }}</th>
</tr>
<tr>
<th>{{ page.businessComponent[ "business-activity-label" ] }}</th>
<th>{{ page.businessComponent[ "business-activity-component-label" ] }}</th>
<th>{{ page.businessComponent[ "component-description-label" ] }}</th>
<th>{{ page.businessComponent[ "component-type-label" ] }}</th>
<th>{{ page.businessComponent[ "authoritative-source-label" ] }}</th>
<!-- {{ page.confidentiality.title }} -->
<th>{{ page.lossOfCommon[ "failure-scenario-label" ] }}</th>
<th>{{ page.lossOfCommon[ "failure-scenario-table-heading" ] }}</th>
<th>{{ page.lossOfCommon[ "injury-significance-table-heading" ] }}</th>
<th>{{ page.lossOfCommon[ "analysis-label" ] }}</th>
<!-- {{ page.integrity.title }} -->
<th>{{ page.lossOfCommon[ "failure-scenario-label" ] }}</th>
<th>{{ page.lossOfCommon[ "failure-scenario-table-heading" ] }}</th>
<th>{{ page.lossOfCommon[ "injury-significance-table-heading" ] }}</th>
<th>{{ page.lossOfCommon[ "analysis-label" ] }}</th>
<!-- {{ page.availability.title }} -->
<th>{{ page.lossOfCommon[ "failure-scenario-label" ] }}</th>
<th>{{ page.lossOfCommon[ "failure-scenario-table-heading" ] }}</th>
<th>{{ page.lossOfCommon[ "injury-significance-table-heading" ] }}</th>
<th>{{ page.lossOfCommon[ "analysis-label" ] }}</th>
</tr>
</thead>
<tbody class="wb-format-gen" data-wb-format-gen='{ "onInit": true, "eventTrigger": "storage-updated.wb-format-gen", "action": "set-table-rows", "source": "session-storage", "key": "assessment", "tableColSpecs": [
  { "relativeToColumn": -1, "dataContainerSource": [], "dataElementSource": [ 0, "state" ] },
  { "relativeToColumn": 0, "dataContainerSource": [ "activities" ], "dataElementSource": [ 0, "state" ] },
  { "relativeToColumn": 1, "dataContainerSource": [ 0, "components" ], "dataElementSource": [ 0, "state" ] }
], "container": "#detailed-report-section tbody"
}'>
<tr>{%
for index in (1..18) %}
<td></td>{%
endfor %}
</tr>
</tbody>
</table>

<div markdown="0" class="btn-group mrgn-tp-md">
<!-- Button for saving progress to a JSON file -->
<button type="button" class="btn btn-default wb-format-gen" data-wb-format-gen='{ "type": "json", "filename": "assessment-json", "source": "session-storage", "key": "assessment" }'>Save progress to a file</button>
<!-- Button for restoring progress from a JSON file. This button triggers the hidden input type="file" field. this is done to give more visual control over the appearance than what the input type="file" field allows. -->
<button id="restore-from-file-button" type="button" class="btn btn-default wb-calculate" data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#restore-from-file-button", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "event", "outputTarget": "#restore-from-file", "outputEvent": "click" }
    ]
  }
] }'>Restore progress from a file</button>
<button type="button" class="btn btn-default wb-format-gen" data-wb-format-gen='{ "type": "csv", "filename": "assessment-csv", "source": "session-storage", "key": "assessment", "tableColSpecs": [
  { "relativeToColumn": -1, "dataContainerSource": [], "dataElementSource": [ 0, "state" ] },
  { "relativeToColumn": 0, "dataContainerSource": [ "activities" ], "dataElementSource": [ 0, "state" ] },
  { "relativeToColumn": 1, "dataContainerSource": [ 0, "components" ], "dataElementSource": [ 0, "state" ] }
] }'>Download assessment in CSV format</button>
</div>
<div class="hidden">
<input id="restore-from-file" type="file" class="wb-format-gen" data-wb-format-gen='{ "type": "json", "action": "restore-storage", "target": "session-storage", "key": "assessment" }' />
</div>

</section>

</section>
