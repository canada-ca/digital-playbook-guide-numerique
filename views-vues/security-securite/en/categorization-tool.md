---
layout: default
title: Security Categorization Tool (draft)
lang: en
altLang: fr
altLangPage: outil-categorisation
collectionDirectory: views-vues/security-securite
businessDomain:
  title: Business Domain
  intro: A business domain is an operational environment where a department performs business activities supporting common organizational objectives.
  "business-domain-field-label": What is your business domain?
businessActivity:
  title: Business Activity
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

<span data-wb-format-gen='{ "resetForm": "#business-domain-form, #business-activity-form, #business-component-form, #loss-of-confidentiality-form, #loss-of-integrity-form, #loss-of-availability-form" }'></span>

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
<label for="business-domain-field" class="required {{ page.labelGridClass }}"><span class="field-name">{{ page.businessDomain[ "business-domain-field-label" ] }}</span> <strong class="required">({{ site.required[ page.lang ] }})</strong></label>
<div class="{{ page.fieldGridClass }}">
<input name="business-domain-field" id="business-domain-field" type="text" required="required" pattern=".{2,}" data-rule-minlength="2" />
</div>
</div>

<div class="btn-group" markdown="0">
<!-- Save to memory, update buttons across forms, enables/disables buttons in the current form, and (TODO) shows an indicator that the save was successful -->
<button id="save-domain" type="submit" class="btn btn-primary wb-calculate wb-format-gen" data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "submit", "eventElement": "#business-domain-form", "listenerElement": "body", "returnFalse": true, "operations": [
  { "type": "action",
    "inputs": [
      { "type": "outputValue", "outputTarget": "#save-domain, #cancel-add-domain", "outputProperty": "disabled", "value": true },
      { "type": "outputValue", "outputTarget": "#delete-domain, #add-another-domain, #add-activity", "outputProperty": "disabled", "value": false },
      { "type": "event", "outputTarget": "#save-domain", "outputEvent": "save-domain-proceed" }
    ]
  }
] }' data-wb-format-gen='{ "eventTrigger": "save-domain-proceed", "eventElement": "#save-domain", "operations": [
  { "type": "sessionStorage", "key": "assessment", "source": "form-state", "container": "#business-domain-form", "action": "append" },
  { "type": "dataAttribute", "element": "#save-activity, #save-component, #save-loss-of-confidentiality, #save-loss-of-integrity, #save-loss-of-availability, #cancel-add-domain, #cancel-add-activity, #cancel-add-component, #cancel-add-loss-of-confidentiality, #cancel-add-loss-of-integrity, #cancel-add-loss-of-availability, #delete-domain, #delete-activity, #delete-component, #delete-loss-of-confidentiality, #delete-loss-of-integrity, #delete-loss-of-availability", "key": "data-wb-format-gen", "indexesKeys": [ "operations", 0, "indexesKeys", 0 ], "action": "increment" },
  { "type": "dataAttribute", "element": "#delete-domain, #delete-activity, #delete-component, #delete-loss-of-confidentiality, #delete-loss-of-integrity, #delete-loss-of-availability", "key": "data-wb-format-gen", "indexesKeys": [ "operations", 1, "indexesKeys", 0 ], "action": "increment" }
] }'>Save</button>
<!-- Loads the previous domain in the current form or clear the forms where a previous domain does not exist. Also enables/disables buttons in the current form. -->
<button id="cancel-add-domain" type="button" class="btn btn-default wb-format-gen wb-calculate" data-wb-format-gen='{ "eventTrigger": "click", "eventElement": "#cancel-add-domain", "operations": [
  { "type": "form", "source": "sessionStorage", "key": "assessment", "indexesKeys": [ -1 ], "action": "restore-form-state", "container": "#business-domain-form" }
] }' data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#cancel-add-domain", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "outputValue", "outputTarget": "#save-domain, #cancel-add-domain", "outputProperty": "disabled", "value": true },
      { "type": "outputValue", "outputTarget": "#delete-domain, #add-another-domain, #add-activity", "outputProperty": "disabled", "value": false }
    ]
  }
] }'>Cancel</button>
<!-- Disabled by default. (TODO) Brings up a delete confirmation dialog. If confirmed, deletes the current domain from memory, loads the previous domain in the current form, or resets the form if no previous domain exists. Also updates buttons across forms and enables/disabled buttons in the current form. -->
<button id="delete-domain" type="button" disabled="disabled" class="btn btn-default wb-format-gen wb-calculate" data-wb-format-gen='{ "eventTrigger": "click", "eventElement": "#delete-domain", "operations": [
  { "type": "sessionStorage", "key": "assessment", "indexesKeys": [ -1 ], "action": "delete" },
  { "type": "form", "source": "sessionStorage", "key": "assessment", "indexesKeys": [ -2 ], "action": "restore-form-state", "container": "#business-domain-form" },
  { "type": "dataAttribute", "element": "#save-activity, #save-component, #save-loss-of-confidentiality, #save-loss-of-integrity, #save-loss-of-availability, #cancel-add-domain, #cancel-add-activity, #cancel-add-component, #cancel-add-loss-of-confidentiality, #cancel-add-loss-of-integrity, #cancel-add-loss-of-availability, #delete-domain, #delete-activity, #delete-component, #delete-loss-of-confidentiality, #delete-loss-of-integrity, #delete-loss-of-availability", "key": "data-wb-format-gen", "indexesKeys": [ "operations", 0, "indexesKeys", 0 ], "action": "decrement" },
  { "type": "dataAttribute", "element": "#delete-domain, #delete-activity, #delete-component, #delete-loss-of-confidentiality, #delete-loss-of-integrity, #delete-loss-of-availability", "key": "data-wb-format-gen", "indexesKeys": [ "operations", 1, "indexesKeys", 0 ], "action": "decrement" }
] }' data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#delete-domain", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "outputValue", "outputTarget": "#save-domain, #cancel-add-domain", "outputProperty": "disabled", "value": true },
      { "type": "outputValue", "outputTarget": "#delete-domain, #add-another-domain, #add-activity", "outputProperty": "disabled", "value": false }
    ]
  }
] }'>Delete</button>
<!-- Disabled by default. Resets the current form and enables/disables buttons in the current form. -->
<button id="add-another-domain" type="button" disabled="disabled" class="btn btn-default wb-format-gen wb-calculate" data-wb-format-gen='{ "eventTrigger": "click", "eventElement": "#add-another-domain", "operations": [
  { "resetForm": "#business-domain-form" }
] }' data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#add-another-domain", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "outputValue", "outputTarget": "#delete-domain, #add-another-domain, #add-activity", "outputProperty": "disabled", "value": true },
      { "type": "outputValue", "outputTarget": "#save-domain, #cancel-add-domain", "outputProperty": "disabled", "value": false }
    ]
  }
] }'>Add another business domain</button>
<!-- Disabled by default. Resets the activity form, enables/disables buttons in the activity form, shows the activity form, hides this form. -->
<button id="add-activity" type="button" disabled="disabled" class="btn btn-default wb-format-gen wb-calculate" data-wb-format-gen='{ "eventTrigger": "click", "eventElement": "#add-activity", "operations": [
  { "resetForm": "#business-activity-form" }
] }' data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#add-activity", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "outputValue", "outputTarget": "#delete-activity, #add-another-activity, #add-component", "outputProperty": "disabled", "value": true },
      { "type": "outputValue", "outputTarget": "#save-activity, #cancel-add-activity", "outputProperty": "disabled", "value": false },
      { "type": "removeClass", "outputTarget": "#business-activity-section", "class": "hidden" },
      { "type": "addClass", "outputTarget": "#business-domain-section", "class": "hidden" }
    ]
  }
] }'>Add business activity</button>
</div>

</form>
</section>

<section id="business-activity-section" class="hidden wb-frmvld">
<form id="business-activity-form" class="form-horizontal" method="post">

## {{ page.businessActivity.title }}

<div class="form-group" markdown="0">
<label for="business-activity-field" class="required {{ page.labelGridClass }}"><span class="field-name">{{ page.businessComponent[ "business-activity-label" ] }}</span> <strong class="required">({{ site.required[ page.lang ] }})</strong></label>
<div class="{{ page.fieldGridClass }}">
<input name="business-activity-field" id="business-activity-field" type="text" required="required" pattern=".{2,}" data-rule-minlength="2" />
</div>
</div>

<div class="btn-group" markdown="0">
<!-- Save to memory, update buttons across forms, enables/disables buttons in the current form, and (TODO) shows an indicator that the save was successful -->
<button id="save-activity" type="submit" class="btn btn-primary wb-calculate wb-format-gen" data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "submit", "eventElement": "#business-activity-form", "listenerElement": "body", "returnFalse": true, "operations": [
  { "type": "action",
    "inputs": [
      { "type": "outputValue", "outputTarget": "#save-activity, #cancel-add-activity", "outputProperty": "disabled", "value": true },
      { "type": "outputValue", "outputTarget": "#delete-activity, #add-another-activity, #add-component", "outputProperty": "disabled", "value": false },
      { "type": "event", "outputTarget": "#save-activity", "outputEvent": "save-activity-proceed" }
    ]
  }
] }' data-wb-format-gen='{ "eventTrigger": "save-activity-proceed", "eventElement": "#save-activity", "operations": [
  { "type": "sessionStorage", "key": "assessment", "indexesKeys": [ -1, 0, "activities" ], "source": "form-state", "container": "#business-activity-form", "action": "append" },
  { "type": "dataAttribute", "element": "#save-component, #save-loss-of-confidentiality, #save-loss-of-integrity, #save-loss-of-availability, #cancel-add-activity, #cancel-add-component, #cancel-add-loss-of-confidentiality, #cancel-add-loss-of-integrity, #cancel-add-loss-of-availability, #delete-activity, #delete-component, #delete-loss-of-confidentiality, #delete-loss-of-integrity, #delete-loss-of-availability", "key": "data-wb-format-gen", "indexesKeys": [ "operations", 0, "indexesKeys", 3 ], "action": "increment" },
  { "type": "dataAttribute", "element": "#delete-activity, #delete-component, #delete-loss-of-confidentiality, #delete-loss-of-integrity, #delete-loss-of-availability", "key": "data-wb-format-gen", "indexesKeys": [ "operations", 1, "indexesKeys", 3 ], "action": "increment" }
] }'>Save</button>
<!-- Loads the previous activity in the current form or clear the forms where a previous activity does not exist. Also enables/disables buttons in the current form. -->
<button id="cancel-add-activity" type="button" class="btn btn-default wb-format-gen wb-calculate" data-wb-format-gen='{ "eventTrigger": "click", "eventElement": "#cancel-add-activity", "operations": [
  { "type": "form", "source": "sessionStorage", "key": "assessment", "indexesKeys": [ -1, 0, "activities", -1 ], "action": "restore-form-state", "container": "#business-activity-form" }
] }' data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#cancel-add-activity", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "outputValue", "outputTarget": "#save-activity, #cancel-add-activity", "outputProperty": "disabled", "value": true },
      { "type": "outputValue", "outputTarget": "#delete-activity, #add-another-activity, #add-component", "outputProperty": "disabled", "value": false }
    ]
  }
] }'>Cancel</button>
<!-- Disabled by default. (TODO) Brings up a delete confirmation dialog. If confirmed, deletes the current activity from memory, loads the previous activity in the current form, or resets the form if no previous activity exists. Also updates buttons across forms and enables/disabled buttons in the current form. -->
<button id="delete-activity" type="button" disabled="disabled" class="btn btn-default wb-format-gen wb-calculate" data-wb-format-gen='{ "eventTrigger": "click", "eventElement": "#delete-activity", "operations": [
  { "type": "sessionStorage", "key": "assessment", "indexesKeys": [ -1, 0, "activities", -1 ], "action": "delete" },
  { "type": "form", "source": "sessionStorage", "key": "assessment", "indexesKeys": [ -1, 0, "activities", -2 ], "action": "restore-form-state", "container": "#business-activity-form" },
  { "type": "dataAttribute", "element": "#save-component, #save-loss-of-confidentiality, #save-loss-of-integrity, #save-loss-of-availability, #cancel-add-activity, #cancel-add-component, #cancel-add-loss-of-confidentiality, #cancel-add-loss-of-integrity, #cancel-add-loss-of-availability, #delete-activity, #delete-component, #delete-loss-of-confidentiality, #delete-loss-of-integrity, #delete-loss-of-availability", "key": "data-wb-format-gen", "indexesKeys": [ "operations", 0, "indexesKeys", 3 ], "action": "decrement" },
  { "type": "dataAttribute", "element": "#delete-activity, #delete-component, #delete-loss-of-confidentiality, #delete-loss-of-integrity, #delete-loss-of-availability", "key": "data-wb-format-gen", "indexesKeys": [ "operations", 1, "indexesKeys", 3 ], "action": "decrement" }
] }' data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#delete-activity", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "outputValue", "outputTarget": "#save-activity, #cancel-add-activity", "outputProperty": "disabled", "value": true },
      { "type": "outputValue", "outputTarget": "#delete-activity, #add-another-activity, #add-component", "outputProperty": "disabled", "value": false }
    ]
  }
] }'>Delete</button>
<!-- Disabled by default. Resets the current form and enables/disables buttons in the current form. -->
<button id="add-another-activity" type="button" disabled="disabled" class="btn btn-default wb-format-gen wb-calculate" data-wb-format-gen='{ "eventTrigger": "click", "eventElement": "#add-another-activity", "operations": [
  { "resetForm": "#business-activity-form" }
] }' data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#add-another-activity", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "outputValue", "outputTarget": "#delete-activity, #add-another-activity, #add-component", "outputProperty": "disabled", "value": true },
      { "type": "outputValue", "outputTarget": "#save-activity, #cancel-add-activity", "outputProperty": "disabled", "value": false }
    ]
  }
] }'>Add another business activity</button>
<!-- Disabled by default. Resets the component form, enables/disables buttons in the component form, shows the component form, hides this form. -->
<button id="add-component" type="button" disabled="disabled" class="btn btn-default wb-format-gen wb-calculate" data-wb-format-gen='{ "eventTrigger": "click", "eventElement": "#add-component", "operations": [
  { "resetForm": "#business-component-form" }
] }' data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#add-component", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "outputValue", "outputTarget": "#delete-component, #add-another-component, #add-loss-of-confidentiality, #add-loss-of-integrity, #add-loss-of-availability", "outputProperty": "disabled", "value": true },
      { "type": "outputValue", "outputTarget": "#save-component, #cancel-add-component", "outputProperty": "disabled", "value": false },
      { "type": "removeClass", "outputTarget": "#business-component-section", "class": "hidden" },
      { "type": "addClass", "outputTarget": "#business-activity-section", "class": "hidden" }
    ]
  }
] }'>Add business activity component</button>
</div>

</form>
</section>

<section id="business-component-section" class="hidden wb-frmvld">
<form id="business-component-form" class="form-horizontal" method="post">

## {{ page.businessComponent.title }}

{{ page.businessComponent.intro1 }}

{{ page.businessComponent.intro2 }}

<!-- Temporary div for purpose of creating container for the button. Remove when testing is done -->
<div id="business-activity-component-container">

<div class="form-group" markdown="0">
<label for="business-activity-component-field" class="required {{ page.labelGridClass }}"><span class="field-name">{{ page.businessComponent[ "business-activity-component-label" ] }}</span> <strong class="required">({{ site.required[ page.lang ] }})</strong></label>
<div class="{{ page.fieldGridClass }}">
<input name="business-activity-component-field" id="business-activity-component-field" type="text" required="required" pattern=".{2,}" data-rule-minlength="2" />
</div>
</div>

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

</div>

<div class="btn-group" markdown="0">
<!-- Save to memory, update buttons across forms, enables/disables buttons in the current form, and (TODO) shows an indicator that the save was successful -->
<button id="save-component" type="submit" class="btn btn-primary wb-calculate wb-format-gen" data-wb-format-gen='{ "type": "sessionStorage", "key": "assessment", "source": "form-state", "container": "#business-component-form", "indexesKeys": [ -1, 0, "activities", -1, 0, "components" ], "action": "append" }' data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "submit", "eventElement": "#business-component-form", "listenerElement": "body", "returnFalse": true, "operations": [
  { "type": "action",
    "inputs": [
      { "type": "outputValue", "outputTarget": "#save-component, #cancel-add-component", "outputProperty": "disabled", "value": true },
      { "type": "outputValue", "outputTarget": "#delete-component, #add-another-component, #add-loss-of-confidentiality, #add-loss-of-integrity, #add-loss-of-availability", "outputProperty": "disabled", "value": false },
      { "type": "event", "outputTarget": "#save-component", "outputEvent": "save-component-proceed" }
    ]
  }
] }' data-wb-format-gen='{ "eventTrigger": "save-component-proceed", "eventElement": "#save-component", "operations": [
  { "type": "sessionStorage", "key": "assessment", "indexesKeys": [ -1, 0, "activities", -1, 0, "components" ], "source": "form-state", "container": "#business-component-form", "action": "append" },
  { "type": "dataAttribute", "element": "#save-loss-of-confidentiality, #save-loss-of-integrity, #save-loss-of-availability, #cancel-add-component, #cancel-add-loss-of-confidentiality, #cancel-add-loss-of-integrity, #cancel-add-loss-of-availability, #delete-component, #delete-loss-of-confidentiality, #delete-loss-of-integrity, #delete-loss-of-availability", "key": "data-wb-format-gen", "indexesKeys": [ "operations", 0, "indexesKeys", 6 ], "action": "increment" },
  { "type": "dataAttribute", "element": "#delete-component, #delete-loss-of-confidentiality, #delete-loss-of-integrity, #delete-loss-of-availability", "key": "data-wb-format-gen", "indexesKeys": [ "operations", 1, "indexesKeys", 6 ], "action": "increment" }
] }'>Save</button>
<!-- Loads the previous component in the current form or clear the forms where a previous component does not exist. Also enables/disables buttons in the current form. -->
<button id="cancel-add-component" type="button" class="btn btn-default wb-format-gen wb-calculate" data-wb-format-gen='{ "eventTrigger": "click", "eventElement": "#cancel-add-component", "operations": [
  { "type": "form", "source": "sessionStorage", "key": "assessment", "indexesKeys": [ -1, 0, "activities", -1, 0, "components", -1 ], "action": "restore-form-state", "container": "#business-component-form" }
] }' data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#cancel-add-component", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "outputValue", "outputTarget": "#save-component, #cancel-add-component", "outputProperty": "disabled", "value": true },
      { "type": "outputValue", "outputTarget": "#delete-component, #add-another-component, #add-loss-of-confidentiality, #add-loss-of-integrity, #add-loss-of-availability", "outputProperty": "disabled", "value": false }
    ]
  }
] }'>Cancel</button>
<!-- Disabled by default. (TODO) Brings up a delete confirmation dialog. If confirmed, deletes the current component from memory, loads the previous component in the current form, or resets the form if no previous component exists. Also updates buttons across forms and enables/disabled buttons in the current form. -->
<button id="delete-component" type="button" disabled="disabled" class="btn btn-default wb-format-gen wb-calculate" data-wb-format-gen='{ "eventTrigger": "click", "eventElement": "#delete-component", "operations": [
  { "type": "sessionStorage", "key": "assessment", "indexesKeys": [ -1, 0, "activities", -1, 0, "components", -1 ], "action": "delete" },
  { "type": "form", "source": "sessionStorage", "key": "assessment", "indexesKeys": [ -1, 0, "activities", -1, 0, "components", -2 ], "action": "restore-form-state", "container": "#business-component-form" },
  { "type": "dataAttribute", "element": "#save-loss-of-confidentiality, #save-loss-of-integrity, #save-loss-of-availability, #cancel-add-component, #cancel-add-loss-of-confidentiality, #cancel-add-loss-of-integrity, #cancel-add-loss-of-availability, #delete-component, #delete-loss-of-confidentiality, #delete-loss-of-integrity, #delete-loss-of-availability", "key": "data-wb-format-gen", "indexesKeys": [ "operations", 0, "indexesKeys", 6 ], "action": "decrement" },
  { "type": "dataAttribute", "element": "#delete-component, #delete-loss-of-confidentiality, #delete-loss-of-integrity, #delete-loss-of-availability", "key": "data-wb-format-gen", "indexesKeys": [ "operations", 1, "indexesKeys", 6 ], "action": "decrement" }
] }' data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#delete-component", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "outputValue", "outputTarget": "#save-component, #cancel-add-component", "outputProperty": "disabled", "value": true },
      { "type": "outputValue", "outputTarget": "#delete-component, #add-another-component, #add-loss-of-confidentiality, #add-loss-of-integrity, #add-loss-of-availability", "outputProperty": "disabled", "value": false }
    ]
  }
] }'>Delete</button>
<!-- Disabled by default. Resets the current form and enables/disables buttons in the current form. -->
<button id="add-another-component" type="button" disabled="disabled" class="btn btn-default wb-format-gen wb-calculate" data-wb-format-gen='{ "eventTrigger": "click", "eventElement": "#add-another-component", "operations": [
  { "resetForm": "#business-component-form" }
] }' data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#add-another-component", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "outputValue", "outputTarget": "#delete-component, #add-another-component, #add-loss-of-confidentiality, #add-loss-of-integrity, #add-loss-of-availability", "outputProperty": "disabled", "value": true },
      { "type": "outputValue", "outputTarget": "#save-component, #cancel-add-component", "outputProperty": "disabled", "value": false }
    ]
  }
] }'>Add another business activity component</button>
<!-- Disabled by default. Resets the loss of confidentiality form, enables/disables buttons in the loss of confidentiality form, shows the loss of confidentiality form, hides this form. -->
<button id="add-loss-of-confidentiality" type="button" disabled="disabled" class="btn btn-default wb-format-gen wb-calculate" data-wb-format-gen='{ "eventTrigger": "click", "eventElement": "#add-loss-of-confidentiality", "operations": [
  { "resetForm": "#loss-of-confidentiality-form" }
] }' data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#add-loss-of-confidentiality", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "outputValue", "outputTarget": "#delete-loss-of-confidentiality, #add-another-loss-of-confidentiality, #add-loss-of-integrity-confidentiality-form, #add-loss-of-availability-confidentiality-form", "outputProperty": "disabled", "value": true },
      { "type": "outputValue", "outputTarget": "#save-loss-of-confidentiality, #cancel-add-loss-of-confidentiality", "outputProperty": "disabled", "value": false },
      { "type": "removeClass", "outputTarget": "#loss-of-confidentiality-section", "class": "hidden" },
      { "type": "addClass", "outputTarget": "#business-component-section", "class": "hidden" }
    ]
  }
] }'>Add loss of confidentiality failure scenario</button>
<!-- Disabled by default. Resets the loss of integrity form, enables/disables buttons in the loss of integrity form, shows the loss of integrity form, hides this form. -->
<button id="add-loss-of-integrity" type="button" disabled="disabled" class="btn btn-default wb-format-gen wb-calculate" data-wb-format-gen='{ "eventTrigger": "click", "eventElement": "#add-loss-of-integrity", "operations": [
  { "resetForm": "#loss-of-integrity-form" }
] }' data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#add-loss-of-integrity", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "outputValue", "outputTarget": "#delete-loss-of-integrity, #add-loss-of-confidentiality-integrity-form, #add-another-loss-of-integrity, #add-loss-of-availability-integrity-form", "outputProperty": "disabled", "value": true },
      { "type": "outputValue", "outputTarget": "#save-loss-of-integrity, #cancel-add-loss-of-integrity", "outputProperty": "disabled", "value": false },
      { "type": "removeClass", "outputTarget": "#loss-of-integrity-section", "class": "hidden" },
      { "type": "addClass", "outputTarget": "#business-component-section", "class": "hidden" }
    ]
  }
] }'>Add loss of integrity failure scenario</button>
<!-- Disabled by default. Resets the loss of availability form, enables/disables buttons in the loss of availability form, shows the loss of availability form, hides this form. -->
<button id="add-loss-of-availability" type="button" disabled="disabled" class="btn btn-default wb-format-gen wb-calculate" data-wb-format-gen='{ "eventTrigger": "click", "eventElement": "#add-loss-of-availability", "operations": [
  { "resetForm": "#loss-of-availability-form" }
] }' data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#add-loss-of-availability", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "outputValue", "outputTarget": "#delete-loss-of-availability, #add-loss-of-confidentiality-availability-form, #add-loss-of-integrity-availability-form, #add-another-loss-of-availability", "outputProperty": "disabled", "value": true },
      { "type": "outputValue", "outputTarget": "#save-loss-of-availability, #cancel-add-loss-of-availability", "outputProperty": "disabled", "value": false },
      { "type": "removeClass", "outputTarget": "#loss-of-availability-section", "class": "hidden" },
      { "type": "addClass", "outputTarget": "#business-component-section", "class": "hidden" }
    ]
  }
] }'>Add loss of availability failure scenario</button>
</div>

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

<div class="btn-group" markdown="0">
<!-- Save to memory, update buttons across forms, enables/disables buttons in the current form, and (TODO) shows an indicator that the save was successful -->
<button id="save-loss-of-{{ lossType }}" type="submit" class="btn btn-primary wb-format-gen wb-calculate" data-wb-format-gen='{ "type": "sessionStorage", "key": "assessment", "source": "form-state", "container": "#loss-of-{{ lossType }}-form", "indexesKeys": [ -1, 0, "activities", -1, 0, "components", -1, 0, "{{ lossType }}" ], "action": "append" }' data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "submit", "eventElement": "#loss-of-{{ lossType }}-form", "listenerElement": "body", "returnFalse": true, "operations": [
  { "type": "action",
    "inputs": [
      { "type": "outputValue", "outputTarget": "#save-loss-of-{{ lossType }}, #cancel-add-loss-of-{{ lossType }}", "outputProperty": "disabled", "value": true },
      { "type": "outputValue", "outputTarget": "#delete-loss-of-{{ lossType }}, #add{% if lossTypeIndex == 0 %}-another{% endif %}-loss-of-confidentiality{% if lossTypeIndex != 0 %}-{{ lossType }}-form{% endif %}, #add{% if lossTypeIndex == 1 %}-another{% endif %}-loss-of-integrity{% if lossTypeIndex != 1 %}-{{ lossType }}-form{% endif %}, #add{% if lossTypeIndex == 2 %}-another{% endif %}-loss-of-availability{% if lossTypeIndex != 2 %}-{{ lossType }}-form{% endif %}", "outputProperty": "disabled", "value": false },
      { "type": "event", "outputTarget": "#save-loss-of-{{ lossType }}", "outputEvent": "save-loss-of-{{ lossType }}-proceed" }
    ]
  }
] }' data-wb-format-gen='{ "eventTrigger": "save-loss-of-{{ lossType }}-proceed", "eventElement": "#save-loss-of-{{ lossType }}", "operations": [
  { "type": "sessionStorage", "key": "assessment", "indexesKeys": [ -1, 0, "activities", -1, 0, "components", -1, 0, "{{ lossType }}" ], "source": "form-state", "container": "#loss-of-{{ lossType }}-form", "action": "append" },
  { "type": "dataAttribute", "element": "#cancel-add-loss-of-{{ lossType }}, #delete-loss-of-{{ lossType }}", "key": "data-wb-format-gen", "indexesKeys": [ "operations", 0, "indexesKeys", 9 ], "action": "increment" },
  { "type": "dataAttribute", "element": "#delete-loss-of-{{ lossType }}", "key": "data-wb-format-gen", "indexesKeys": [ "operations", 1, "indexesKeys", 9 ], "action": "increment" }
] }'>Save</button>
<!-- Loads the previous loss of {{ lossType }} in the current form or clear the forms where a previous loss of {{ lossType }} does not exist. Also enables/disables buttons in the current form. -->
<button id="cancel-add-loss-of-{{ lossType }}" type="button" class="btn btn-default wb-format-gen wb-calculate" data-wb-format-gen='{ "eventTrigger": "click", "eventElement": "#cancel-loss-of-{{ lossType }}", "operations": [
  { "type": "form", "source": "sessionStorage", "key": "assessment", "indexesKeys": [ -1, 0, "activities", -1, 0, "components", -1, 0, "{{ lossType }}", -1 ], "action": "restore-form-state", "container": "#loss-of-{{ lossType }}-form" }
] }' data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#cancel-loss-of-{{ lossType }}", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "outputValue", "outputTarget": "#save-loss-of-{{ lossType }}, #cancel-add-loss-of-{{ lossType }}", "outputProperty": "disabled", "value": true },
      { "type": "outputValue", "outputTarget": "#delete-loss-of-{{ lossType }}, #add{% if lossTypeIndex == 0 %}-another{% endif %}-loss-of-confidentiality{% if lossTypeIndex != 0 %}-{{ lossType }}-form{% endif %}, #add{% if lossTypeIndex == 1 %}-another{% endif %}-loss-of-integrity{% if lossTypeIndex != 1 %}-{{ lossType }}-form{% endif %}, #add{% if lossTypeIndex == 2 %}-another{% endif %}-loss-of-availability{% if lossTypeIndex != 2 %}-{{ lossType }}-form{% endif %}", "outputProperty": "disabled", "value": false }
    ]
  }
] }'>Cancel</button>
<!-- Disabled by default. (TODO) Brings up a delete confirmation dialog. If confirmed, deletes the current loss of {{ lossType }} from memory, loads the previous loss of {{ lossType }} in the current form, or resets the form if no previous loss of {{ lossType }} exists. Also updates buttons across forms and enables/disabled buttons in the current form. -->
<button id="delete-loss-of-{{ lossType }}" type="button" disabled="disabled" class="btn btn-default wb-format-gen wb-calculate" data-wb-format-gen='{ "eventTrigger": "click", "eventElement": "#delete-loss-of-{{ lossType }}", "operations": [
  { "type": "sessionStorage", "key": "assessment", "indexesKeys": [ -1, 0, "activities", -1, 0, "components", -1, 0, "{{ lossType }}", -1 ], "action": "delete" },
  { "type": "form", "source": "sessionStorage", "key": "assessment", "indexesKeys": [ -1, 0, "activities", -1, 0, "components", -1, 0, "{{ lossType }}", -2 ], "action": "restore-form-state", "container": "#loss-of-{{ lossType }}-form" },
  { "type": "dataAttribute", "element": "#cancel-add-loss-of-{{ lossType }}, #delete-loss-of-{{ lossType }}", "key": "data-wb-format-gen", "indexesKeys": [ "operations", 0, "indexesKeys", 9 ], "action": "decrement" },
  { "type": "dataAttribute", "element": "#delete-loss-of-{{ lossType }}", "key": "data-wb-format-gen", "indexesKeys": [ "operations", 1, "indexesKeys", 9 ], "action": "decrement" }
] }' data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#delete-loss-of-{{ lossType }}", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "outputValue", "outputTarget": "#save-loss-of-{{ lossType }}, #cancel-add-loss-of-{{ lossType }}", "outputProperty": "disabled", "value": true },
      { "type": "outputValue", "outputTarget": "#delete-loss-of-{{ lossType }}, #add{% if lossTypeIndex == 0 %}-another{% endif %}-loss-of-confidentiality{% if lossTypeIndex != 0 %}-{{ lossType }}-form{% endif %}, #add{% if lossTypeIndex == 1 %}-another{% endif %}-loss-of-integrity{% if lossTypeIndex != 1 %}-{{ lossType }}-form{% endif %}, #add{% if lossTypeIndex == 2 %}-another{% endif %}-loss-of-availability{% if lossTypeIndex != 2 %}-{{ lossType }}-form{% endif %}", "outputProperty": "disabled", "value": false }
    ]
  }
] }'>Delete</button>{%
assign lossTypeIndexInner = 0 %}{%
for lossTypeInner in page.lossTypes %}{%
  if lossTypeIndexInner == lossTypeIndex %}
<!-- Disabled by default. Resets the current form and enables/disables buttons in the current form. -->
<button id="add-another-loss-of-{{ lossTypeInner }}" type="button" disabled="disabled" class="btn btn-default wb-format-gen wb-calculate" data-wb-format-gen='{ "eventTrigger": "click", "eventElement": "#add-another-loss-of-{{ lossTypeInner }}", "operations": [
  { "resetForm": "#loss-of-{{ lossTypeInner }}-form" }
] }' data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#add-another-loss-of-{{ lossTypeInner }}", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "outputValue", "outputTarget": "#delete-loss-of-{{ lossTypeInner }}, #add{% if lossTypeIndex == 0 %}-another{% endif %}-loss-of-confidentiality{% if lossTypeIndex != 0 %}-{{ lossType }}-form{% endif %}, #add{% if lossTypeIndex == 1 %}-another{% endif %}-loss-of-integrity{% if lossTypeIndex != 1 %}-{{ lossType }}-form{% endif %}, #add{% if lossTypeIndex == 2 %}-another{% endif %}-loss-of-availability{% if lossTypeIndex != 2 %}-{{ lossType }}-form{% endif %}", "outputProperty": "disabled", "value": true },
      { "type": "outputValue", "outputTarget": "#save-loss-of-{{ lossTypeInner }}, #cancel-add-loss-of-{{ lossTypeInner }}", "outputProperty": "disabled", "value": false }
    ]
  }
] }'>Add another loss of {{ lossTypeInner }} failure scenario</button>{%
  else %}
<!-- Disabled by default. Resets the loss of {{ lossTypeInner }} form, enables/disables buttons in the loss of {{ lossTypeInner }} form, shows the loss of {{ lossTypeInner }} form, hides this form. -->
<button id="add-loss-of-{{ lossTypeInner }}-{{ lossType }}-form" type="button" disabled="disabled" class="btn btn-default wb-format-gen wb-calculate" data-wb-format-gen='{ "eventTrigger": "click", "eventElement": "#add-loss-of-{{ lossTypeInner }}-{{ lossType }}-form", "operations": [
  { "resetForm": "#loss-of-{{ lossTypeInner }}-form" }
] }' data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#add-loss-of-{{ lossTypeInner }}-{{ lossType }}-form", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "outputValue", "outputTarget": "#delete-loss-of-{{ lossTypeInner }}, #add{% if lossTypeIndex == 0 %}-another{% endif %}-loss-of-confidentiality{% if lossTypeIndex != 0 %}-{{ lossType }}-form{% endif %}, #add{% if lossTypeIndex == 1 %}-another{% endif %}-loss-of-integrity{% if lossTypeIndex != 1 %}-{{ lossType }}-form{% endif %}, #add{% if lossTypeIndex == 2 %}-another{% endif %}-loss-of-availability{% if lossTypeIndex != 2 %}-{{ lossType }}-form{% endif %}", "outputProperty": "disabled", "value": true },
      { "type": "outputValue", "outputTarget": "#save-loss-of-{{ lossTypeInner }}, #cancel-add-loss-of-{{ lossTypeInner }}", "outputProperty": "disabled", "value": false },
      { "type": "removeClass", "outputTarget": "#loss-of-{{ lossTypeInner }}-section", "class": "hidden" },
      { "type": "addClass", "outputTarget": "#loss-of-{{ lossType }}-section", "class": "hidden" }
    ]
  }
] }'>Add loss of {{ lossTypeInner }} failure scenario</button>{%
  endif %}{%
  assign lossTypeIndexInner = lossTypeIndexInner | plus: 1 %}{%
endfor %}
</div>

</form>
</section>{%
  assign lossTypeIndex = lossTypeIndex | plus: 1 %}{%
endfor %}

<section id="results-section">

## Results

<div class="wb-tabs">
<div class="tabpanels">

<details id="summary-report-section">

<summary markdown="0">Summary Report</summary>

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

</details>

<details id="detailed-report-section" open="open">

<summary markdown="0">Detailed Report</summary>

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
<tbody class="wb-format-gen" data-wb-format-gen='{ "onInit": true, "eventTrigger": "storage-updated.wb-format-gen", "action": "set-table-rows", "source": "sessionStorage", "key": "assessment", "tableColSpecs": [
  { "relativeToColumn": -1, "dataContainerSource": [], "dataElementSource": [ 0, "state" ] },
  { "relativeToColumn": 0, "dataContainerSource": [ "activities" ], "dataElementSource": [ 0, "state" ] },
  { "relativeToColumn": 1, "dataContainerSource": [ 0, "components" ], "dataElementSource": [ 0, "state" ] },
  { "relativeToColumn": 2, "dataContainerSource": [], "dataElementSource": [ 1, "state" ] },
  { "relativeToColumn": 2, "dataContainerSource": [], "dataElementSource": [ 2, "text" ] },
  { "relativeToColumn": 2, "dataContainerSource": [], "dataElementSource": [ 3, "state" ] },
  { "relativeToColumn": 2, "dataContainerSource": [ 0, "confidentiality" ], "dataElementSource": [ 0, "state" ] },
  { "relativeToColumn": 6, "dataContainerSource": [], "dataElementSource": [ 1, "text" ] },
  { "relativeToColumn": 6, "dataContainerSource": [], "dataElementSource": [ 2, "text" ] },
  { "relativeToColumn": 6, "dataContainerSource": [], "dataElementSource": [ 3, "state" ] },
  { "relativeToColumn": 2, "dataContainerSource": [ 0, "integrity" ], "dataElementSource": [ 0, "state" ] },
  { "relativeToColumn": 10, "dataContainerSource": [], "dataElementSource": [ 1, "text" ] },
  { "relativeToColumn": 10, "dataContainerSource": [], "dataElementSource": [ 2, "text" ] },
  { "relativeToColumn": 10, "dataContainerSource": [], "dataElementSource": [ 3, "state" ] },
  { "relativeToColumn": 2, "dataContainerSource": [ 0, "availability" ], "dataElementSource": [ 0, "state" ] },
  { "relativeToColumn": 14, "dataContainerSource": [], "dataElementSource": [ 1, "text" ] },
  { "relativeToColumn": 14, "dataContainerSource": [], "dataElementSource": [ 2, "text" ] },
  { "relativeToColumn": 14, "dataContainerSource": [], "dataElementSource": [ 3, "state" ] }
], "container": "#detailed-report-section tbody"
}'>
<tr>{%
for index in (1..18) %}
<td></td>{%
endfor %}
</tr>
</tbody>
</table>

</details>

</div>
</div>

<div markdown="0" class="btn-group mrgn-tp-md">
<!-- Button for saving progress to a JSON file -->
<button type="button" class="btn btn-default wb-format-gen" data-wb-format-gen='{ "type": "json", "filename": "assessment-json", "source": "sessionStorage", "key": "assessment" }'>Save progress to a file</button>
<!-- Button for restoring progress from a JSON file. This button triggers the hidden input type="file" field. this is done to give more visual control over the appearance than what the input type="file" field allows. -->
<button id="restore-from-file-button" type="button" class="btn btn-default wb-calculate" data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#restore-from-file-button", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "event", "outputTarget": "#restore-from-file", "outputEvent": "click" }
    ]
  }
] }'>Restore progress from a file</button>
<button type="button" class="btn btn-default wb-format-gen" data-wb-format-gen='{ "type": "csv", "filename": "assessment-csv", "source": "sessionStorage", "key": "assessment", "tableColSpecs": [
  { "relativeToColumn": -1, "dataContainerSource": [], "dataElementSource": [ 0, "state" ] },
  { "relativeToColumn": 0, "dataContainerSource": [ "activities" ], "dataElementSource": [ 0, "state" ] },
  { "relativeToColumn": 1, "dataContainerSource": [ 0, "components" ], "dataElementSource": [ 0, "state" ] },
  { "relativeToColumn": 2, "dataContainerSource": [], "dataElementSource": [ 1, "state" ] },
  { "relativeToColumn": 2, "dataContainerSource": [], "dataElementSource": [ 2, "text" ] },
  { "relativeToColumn": 2, "dataContainerSource": [], "dataElementSource": [ 3, "state" ] },
  { "relativeToColumn": 2, "dataContainerSource": [ 0, "confidentiality" ], "dataElementSource": [ 0, "state" ] },
  { "relativeToColumn": 6, "dataContainerSource": [], "dataElementSource": [ 1, "text" ] },
  { "relativeToColumn": 6, "dataContainerSource": [], "dataElementSource": [ 2, "text" ] },
  { "relativeToColumn": 6, "dataContainerSource": [], "dataElementSource": [ 3, "state" ] },
  { "relativeToColumn": 2, "dataContainerSource": [ 0, "integrity" ], "dataElementSource": [ 0, "state" ] },
  { "relativeToColumn": 10, "dataContainerSource": [], "dataElementSource": [ 1, "text" ] },
  { "relativeToColumn": 10, "dataContainerSource": [], "dataElementSource": [ 2, "text" ] },
  { "relativeToColumn": 10, "dataContainerSource": [], "dataElementSource": [ 3, "state" ] },
  { "relativeToColumn": 2, "dataContainerSource": [ 0, "availability" ], "dataElementSource": [ 0, "state" ] },
  { "relativeToColumn": 14, "dataContainerSource": [], "dataElementSource": [ 1, "text" ] },
  { "relativeToColumn": 14, "dataContainerSource": [], "dataElementSource": [ 2, "text" ] },
  { "relativeToColumn": 14, "dataContainerSource": [], "dataElementSource": [ 3, "state" ] }
] }'>Download assessment in CSV format</button>
</div>
<div class="hidden">
<input id="restore-from-file" type="file" class="wb-format-gen" data-wb-format-gen='{ "type": "json", "action": "restore-storage", "target": "sessionStorage", "key": "assessment" }' />
</div>

</section>
