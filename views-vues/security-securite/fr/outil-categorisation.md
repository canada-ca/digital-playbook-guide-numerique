---
layout: default
title: Outil de categorisation (ébauche)
lang: fr
altLang: en
altLangPage: categorization-tool
collectionDirectory: views-vues/security-securite
businessDomain:
  title: Business Domain
  intro: A business domain is an operational environment where a department performs business activities supporting common organizational objectives.
  field1Label: What is your business domain?
businessComponent:
  title: Business Component
  intro1: Any activity performed by a department in the course of its operations to deliver or support the delivery of its programs or services. A business activity is composed of one or several business processes and related information assets.
  intro2: Business activities will be categorized by determining the expected injuries from IT-related threat compromise to the national and non-national interests that the business activities serve, and then determining the lveral of these expected injuries.
  field1Label: Business Activity
  field2Label: Business Activity Component
  field3Label: Component Description
  field4Label: Type
  field4Sublabel: Select a type
  field4Option1: Process
  field4Option2: Information
  field5Label: Authoritative Source
lossTypes: [ "confidentiality", "integrity", "availability" ]
confidentiality:
  title: Loss of Confidentiality
  intro: To ensure the confidentiality of business activites and IT assets against a specified set of theats in order to prevent injury to national interests or non-national interests.
  field2Label: What is the type of injury that is most likely to result from a loss of confidentiality?
  example1: Example of such injury
  example2: ie. Riot
integrity:
  title: Loss of Integrity
  intro: To ensure the integrity of a business activity or IT asset against a specified set of threats in order to prevent injury to national interests or non-national interests.
  field2Label: What is the type of injury that is most likely to result from a loss of integrity?
  example1: Example of such injury
  example2: ie. Distress, psychological trauma
availability:
  title: Loss of Availability
  intro: To ensure the availability of a business activity or IT asset against a specified set of threats in order to prevent injury to national interests or non-national interests.
  field2Label: What is the type of injury that is most likely to result from a loss of availability?
  example1: Example of such injury
  example2: ie. Affecting program performance
lossOfCommon:
  field1Label: Failure Scenario (in context)
  field2Sublabel: Select a type of injury
  field2TableHeading: Type of injury
  field2Option1: Civil disorder or unrest
  field2Option2: Physical harm to people
  field2Option3: Psychological harm to people
  field2Option4: Financial loss to individuals
  field2Option5: Financial loss to Canadian companies
  field2Option6: Financial loss to Canadian governement
  field2Option7: Harm to Canadian economy
  field2Option8: Harm to Canada's reputation
  field2Option9: Harm to National Interest
  field2Option10: No expected injury
  field3Label: How significant is the expected injury?
  field3Sublabel: Select the significance of injury
  field3TableHeading: Significance of injury
  field3Option1: Very low
  field3Option2: Low
  field3Option3: Medium
  field3Option4: High
  field3Option5: Very high
  field3Option6: NA
  field4Label: Analysis
labelGridClass: col-sm-4
fieldGridClass: col-sm-8
---
{% assign dataVariable = site.playbookData[page.lang] %}{%
assign dataSource = site.data[dataVariable] %}

<section id="welcome-section">

## Welcome to the Security Categorization Tool

Security Categorization is the process of identifying the potential injuries that could result from compromises of business processes and related information.

The Security Categorization Tool is an instrument meant to be used by security practitioners to help organize business processes and information for the purposes of injury assessment. It should help the practitioner develop a business injury view of the department for the purposes of designing secure systems.

This web-based version of the tool is meant to make the process of organizing this information quicker and easier for security practitioners and it is compatible with Microsoft Excel. Assessments created on the Excel spreadsheet version of the Security Categorization tool can be imported to this web-based tool.

<section>

### What Would You Like to Do?

<!-- Button for revealing the next section and hiding the current one -->
{% include views-vues/questionnaire-next-previous.html currentId="welcome" nextId="business-domain" nextHeading="2" %}

</section>

<section id="business-domain-section" class="hidden wb-frmvld">
<form id="business-domain-form" class="form-horizontal" method="post">

## {{ page.businessDomain.title }}

{{ page.businessDomain.intro }}

<div class="form-group" markdown="0">
<label for="business-domain-1" class="required {{ page.labelGridClass }}"><span class="field-name">{{ page.businessDomain.field1Label }}</span> <strong class="required">({{ site.required[ page.lang ] }})</strong></label>
<div class="{{ page.fieldGridClass }}">
<input name="business-domain-1" id="business-domain-1" type="text" required="required" pattern=".{2,}" data-rule-minlength="2" />
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
<label for="business-component-1" class="required {{ page.labelGridClass }}"><span class="field-name">{{ page.businessComponent.field1Label }}</span> <strong class="required">({{ site.required[ page.lang ] }})</strong></label>
<div class="{{ page.fieldGridClass }}">
<input name="business-component-1" id="business-component-1" type="text" required="required" pattern=".{2,}" data-rule-minlength="2" />
</div>
</div>

</div>

<!-- TODO Figure out how to create this button on the fly for different business domains. So have one button for creating business acitivities for each business domain -->
<button type="button" class="btn btn-primary wb-format-gen" data-wb-format-gen='{ "type": "session-storage", "key": "assessment", "indexesKeys": [ 1, 0, "activities" ], "source": "form-state", "container": "#business-activity-container", "action": "append" }'>Append business activity to business domain 2 in session storage (need at least 2 business domains for this to work)</button>

<!-- Temporary div for purpose of creating container for the button. Remove when testing is done -->
<div id="business-activity-component-container">

<div class="form-group" markdown="0">
<label for="business-component-2" class="required {{ page.labelGridClass }}"><span class="field-name">{{ page.businessComponent.field2Label }}</span> <strong class="required">({{ site.required[ page.lang ] }})</strong></label>
<div class="{{ page.fieldGridClass }}">
<input name="business-component-2" id="business-component-2" type="text" required="required" pattern=".{2,}" data-rule-minlength="2" />
</div>
</div>

</div>

<!-- TODO Figure out how to create this button on the fly for different business activities. So have one button for creating business acitivity components for each business activity -->

<button type="button" class="btn btn-primary wb-format-gen" data-wb-format-gen='{ "type": "session-storage", "key": "assessment", "indexesKeys": [ 1, 0, "activities", 1, 0, "components" ], "source": "form-state", "container": "#business-activity-component-container", "action": "append" }'>Append business activity component to business activity 2 of business domain 2 in session storage (need at least 2 business activities in business domain 2 for this to work)</button>

<!-- TODO Build better mechanism for displaying table -->
<button type="button" class="btn btn-primary wb-format-gen" data-wb-format-gen='{ "action": "set-table-rows", "source": "session-storage", "key": "assessment", "tableColSpecs": [
  { "relativeToColumn": -1, "dataContainerSource": [], "dataElementSource": [ 0, "state" ] },
  { "relativeToColumn": 0, "dataContainerSource": [ "activities" ], "dataElementSource": [ 0, "state" ] },
  { "relativeToColumn": 1, "dataContainerSource": [ 0, "components" ], "dataElementSource": [ 0, "state" ] }
], "container": "#detailed-assessment-section tbody" }'>Generate table array and output to log</button>

<div class="form-group" markdown="0">
<label for="business-component-3" class="required {{ page.labelGridClass }}"><span class="field-name">{{ page.businessComponent.field3Label }}</span> <strong class="required">({{ site.required[ page.lang ] }})</strong></label>
<div class="{{ page.fieldGridClass }}">
<textarea name="business-component-3" id="business-component-3" required="required"></textarea>
</div>
</div>

<div class="form-group" markdown="0">
<label for="business-component-4" class="required {{ page.labelGridClass }}"><span class="field-name">{{ page.businessComponent.field4Label }}</span> <strong class="required">({{ site.required[ page.lang ] }})</strong></label>
<div class="{{ page.fieldGridClass }}">
<select class="form-control" id="business-component-4" name="business-component-4" required="required">
<option label="{{ page.businessComponent.field4Sublabel }}"></option>
<option value="1">{{ page.businessComponent.field4Option1 }}</option>
<option value="2">{{ page.businessComponent.field4Option2 }}</option>
</select>
</div>
</div>

<div class="form-group" markdown="0">
<label for="business-component-5" class="required {{ page.labelGridClass }}"><span class="field-name">{{ page.businessComponent.field5Label }}</span> <strong class="required">({{ site.required[ page.lang ] }})</strong></label>
<div class="{{ page.fieldGridClass }}">
<textarea name="business-component-5" id="business-component-5" required="required"></textarea>
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
<label for="loss-of-{{ lossType }}-1" class="required {{ page.labelGridClass }}"><span class="field-name">{{ page.lossOfCommon.field1Label }}</span> <strong class="required">({{ site.required[ page.lang ] }})</strong></label>
<div class="{{ page.fieldGridClass }}">
<input name="loss-of-{{ lossType }}-1" id="loss-of-{{ lossType }}-1" type="text" required="required" pattern=".{2,}" data-rule-minlength="2" />
</div>
</div>

<div class="form-group" markdown="0">
<label for="loss-of-{{ lossType }}-2" class="required {{ page.labelGridClass }}"><span class="field-name">{{ page[ lossType ].field2Label }}</span> <strong class="required">({{ site.required[ page.lang ] }})</strong></label>
<div class="{{ page.fieldGridClass }}">
<select class="form-control" id="loss-of-{{ lossType }}-2" name="loss-of-{{ lossType }}-2" required="required">
<option label="{{ page.lossOfCommon.field2Sublabel }}"></option>
<option value="1">{{ page.lossOfCommon.field2Option1 }}</option>
<option value="2">{{ page.lossOfCommon.field2Option2 }}</option>
<option value="3">{{ page.lossOfCommon.field2Option3 }}</option>
<option value="4">{{ page.lossOfCommon.field2Option4 }}</option>
<option value="5">{{ page.lossOfCommon.field2Option5 }}</option>
<option value="6">{{ page.lossOfCommon.field2Option6 }}</option>
<option value="7">{{ page.lossOfCommon.field2Option7 }}</option>
<option value="8">{{ page.lossOfCommon.field2Option8 }}</option>
<option value="9">{{ page.lossOfCommon.field2Option9 }}</option>
<option value="10">{{ page.lossOfCommon.field2Option10 }}</option>
</select>
</div>
</div>

<div class="form-group" markdown="0">
<label for="loss-of-{{ lossType }}-3" class="required {{ page.labelGridClass }}"><span class="field-name">{{ page.lossOfCommon.field3Label }}</span> <strong class="required">({{ site.required[ page.lang ] }})</strong></label>
<div class="{{ page.fieldGridClass }}">
<select class="form-control" id="loss-of-{{ lossType }}-3" name="loss-of-{{ lossType }}-3" required="required">
<option label="{{ page.lossOfCommon.field3Sublabel }}"></option>
<option value="1">{{ page.lossOfCommon.field3Option1 }}</option>
<option value="2">{{ page.lossOfCommon.field3Option2 }}</option>
<option value="3">{{ page.lossOfCommon.field3Option3 }}</option>
<option value="4">{{ page.lossOfCommon.field3Option4 }}</option>
<option value="5">{{ page.lossOfCommon.field3Option5 }}</option>
<option value="6">{{ page.lossOfCommon.field3Option6 }}</option>
</select>
</div>
</div>

**{{ page[ lossType ].example1 }}** {{ page[ lossType ].example2 }}

<div class="form-group" markdown="0">
<label for="loss-of-{{ lossType }}-4" class="required {{ page.labelGridClass }}"><span class="field-name">{{ page.lossOfCommon.field4Label }}</span> <strong class="required">({{ site.required[ page.lang ] }})</strong></label>
<div class="{{ page.fieldGridClass }}">
<textarea name="loss-of-{{ lossType }}-4" id="loss-of-{{ lossType }}-4" required="required"></textarea>
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
<th>{{ page.businessComponent.field1Label }}</th>
<th>{{ page.businessComponent.field2Label }}</th>
<th>{{ page.businessComponent.field3Label }}</th>
<th>{{ page.businessComponent.field4Label }}</th>
<th>{{ page.businessComponent.field5Label }}</th>
<!-- {{ page.confidentiality.title }} -->
<th>{{ page.lossOfCommon.field1Label }}</th>
<th>{{ page.lossOfCommon.field2TableHeading }}</th>
<th>{{ page.lossOfCommon.field3TableHeading }}</th>
<th>{{ page.lossOfCommon.field4Label }}</th>
<!-- {{ page.integrity.title }} -->
<th>{{ page.lossOfCommon.field1Label }}</th>
<th>{{ page.lossOfCommon.field2TableHeading }}</th>
<th>{{ page.lossOfCommon.field3TableHeading }}</th>
<th>{{ page.lossOfCommon.field4Label }}</th>
<!-- {{ page.availability.title }} -->
<th>{{ page.lossOfCommon.field1Label }}</th>
<th>{{ page.lossOfCommon.field2TableHeading }}</th>
<th>{{ page.lossOfCommon.field3TableHeading }}</th>
<th>{{ page.lossOfCommon.field4Label }}</th>
</tr>
</thead>
<tbody>
<tr>{%
for index in (1..18) %}
<td></td>{%
endfor %}
</tr>
</tbody>
</table>

<button type="button" class="btn btn-primary wb-format-gen" data-wb-format-gen='{ "type": "json", "filename": "check-session-storage", "source": "session-storage", "key": "assessment" }'>Download assessment from session storage</button>

</section>

</section>
