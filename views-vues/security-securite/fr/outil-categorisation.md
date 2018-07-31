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
  field3Option1: Very low
  field3Option2: Low
  field3Option3: Medium
  field3Option4: High
  field3Option5: Very high
  field3Option6: NA
  field4Label: Analysis
---
{% assign dataVariable = site.playbookData[page.lang] %}{%
assign dataSource = site.data[dataVariable] %}

<div class="wb-frmvld">
<form action="#" method="post">
<section id="business-domain">

<div class="wb-inview" data-inview="progress-overlay">

## {{ page.businessDomain.title }}

</div>

{{ page.businessDomain.intro }}

<div class="form-group">
<label for="business-domain-1" class="required"><span class="field-name">{{ page.businessDomain.field1Label }}</span> <strong class="required">({{ site.required[ page.lang ] }})</strong></label>
<input name="business-domain-1" id="business-domain-1" type="text" required="required" pattern=".{2,}" data-rule-minlength="2" />
</div>

</section>

<section id="business-component">

## {{ page.businessComponent.title }}

{{ page.businessComponent.intro1 }}

{{ page.businessComponent.intro2 }}

<div class="form-group">
<label for="business-component-1" class="required"><span class="field-name">{{ page.businessComponent.field1Label }}</span> <strong class="required">({{ site.required[ page.lang ] }})</strong></label>
<input name="business-component-1" id="business-component-1" type="text" required="required" pattern=".{2,}" data-rule-minlength="2" />
</div>

<div class="form-group">
<label for="business-component-2" class="required"><span class="field-name">{{ page.businessComponent.field2Label }}</span> <strong class="required">({{ site.required[ page.lang ] }})</strong></label>
<input name="business-component-2" id="business-component-2" type="text" required="required" pattern=".{2,}" data-rule-minlength="2" />
</div>

<div class="form-group">
<label for="business-component-3" class="required"><span class="field-name">{{ page.businessComponent.field3Label }}</span> <strong class="required">({{ site.required[ page.lang ] }})</strong></label>
<textarea name="business-component-3" id="business-component-3" required="required" pattern=".{2,}" data-rule-minlength="2"></textarea>
</div>

<div class="form-group">
<label for="business-component-4" class="required"><span class="field-name">{{ page.businessComponent.field4Label }}</span> <strong class="required">({{ site.required[ page.lang ] }})</strong></label>
<select class="form-control" id="business-component-4" name="business-component-4" required="required">
<option label="{{ page.businessComponent.field4Sublabel }}"></option>
<option value="1">{{ page.businessComponent.field4Option1 }}</option>
<option value="2">{{ page.businessComponent.field4Option2 }}</option>
</select>
</div>

<div class="form-group">
<label for="business-component-5" class="required"><span class="field-name">{{ page.businessComponent.field5Label }}</span> <strong class="required">({{ site.required[ page.lang ] }})</strong></label>
<textarea name="business-component-5" id="business-component-5" required="required" pattern=".{2,}" data-rule-minlength="2"></textarea>
</div>

</section>

{% for lossType in page.lossTypes %}
<section id="loss-of-{{ lossType }}">

## {{ page[ lossType ].title }}

{{ page[ lossType ].intro }}

<div class="form-group">
<label for="loss-of-{{ lossType }}-1" class="required"><span class="field-name">{{ page.lossOfCommon.field1Label }}</span> <strong class="required">({{ site.required[ page.lang ] }})</strong></label>
<input name="loss-of-{{ lossType }}-1" id="loss-of-{{ lossType }}-1" type="text" required="required" pattern=".{2,}" data-rule-minlength="2" />
</div>

<div class="form-group">
<label for="loss-of-{{ lossType }}-2" class="required"><span class="field-name">{{ page[ lossType ].field2Label }}</span> <strong class="required">({{ site.required[ page.lang ] }})</strong></label>
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

<div class="form-group">
<label for="loss-of-{{ lossType }}-3" class="required"><span class="field-name">{{ page.lossOfCommon.field3Label }}</span> <strong class="required">({{ site.required[ page.lang ] }})</strong></label>
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

**{{ page[ lossType ].example1 }}** {{ page[ lossType ].example2 }}

<div class="form-group">
<label for="loss-of-{{ lossType }}-4" class="required"><span class="field-name">{{ page.lossOfCommon.field4Label }}</span> <strong class="required">({{ site.required[ page.lang ] }})</strong></label>
<textarea name="loss-of-{{ lossType }}-4" id="loss-of-{{ lossType }}-4" required="required" pattern=".{2,}" data-rule-minlength="2"></textarea>
</div>

</section>
{% endfor %}

</form>
</div>
