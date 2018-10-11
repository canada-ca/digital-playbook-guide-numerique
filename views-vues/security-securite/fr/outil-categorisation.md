---
layout: default
title: Outil de categorisation de sécurité (ébauche)
lang: fr
altLang: en
altLangPage: categorization-tool
collectionDirectory: views-vues/security-securite
common:
  save: Save
  cancel: Cancel
  delete: Delete
businessDomain:
  title: Business Domain
  intro: A business domain is an operational environment where a department performs business activities supporting common organizational objectives.
  "business-domain-field-label": What is your business domain?
  "add-domain-button": Add another business domain
  "add-activity-button": Add business activity
businessActivity:
  title: Business Activity
  intro1: Any activity performed by a department in the course of its operations to deliver or support the delivery of its programs or services. A business activity is composed of one or several business processes and related information assets.
  intro2: Business activities will be categorized by determining the expected injuries from IT-related threat compromise to the national and non-national interests that the business activities serve, and then determining the lveral of these expected injuries.
  "add-activity-button": Add another business activity
  "add-component-button": Add business activity component
businessComponent:
  title: Business Component
  "business-activity-label": Business Activity
  "business-component-label": Business Activity Component
  "component-description-label": Component Description
  "component-type-label": Type
  "component-type-sub-label": Select a type
  "component-type-option-1": Process
  "component-type-option-2": Information
  "authoritative-source-label": Authoritative Source
  "add-component-button": Add another business activity component
lossTypes: [ "confidentiality", "integrity", "availability" ]
confidentiality:
  title: Loss of Confidentiality
  intro: To ensure the confidentiality of business activites and IT assets against a specified set of theats in order to prevent injury to national interests or non-national interests.
  "type-of-injury-label": What is the type of injury that is most likely to result from a loss of confidentiality?
  example1: Example of such injury
  example2: ie. Riot
  "add-confidentiality-button": Add loss of confidentiality failure scenario
  "add-another-confidentiality-button": Add another loss of confidentiality failure scenario
integrity:
  title: Loss of Integrity
  intro: To ensure the integrity of a business activity or IT asset against a specified set of threats in order to prevent injury to national interests or non-national interests.
  "type-of-injury-label": What is the type of injury that is most likely to result from a loss of integrity?
  example1: Example of such injury
  example2: ie. Distress, psychological trauma
  "add-integrity-button": Add loss of integrity failure scenario
  "add-another-integrity-button": Add another loss of integrity failure scenario
availability:
  title: Loss of Availability
  intro: To ensure the availability of a business activity or IT asset against a specified set of threats in order to prevent injury to national interests or non-national interests.
  "type-of-injury-label": What is the type of injury that is most likely to result from a loss of availability?
  example1: Example of such injury
  example2: ie. Affecting program performance
  "add-another-availability-button": Add another loss of availability failure scenario
  "add-availability-button": Add loss of availability failure scenario
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
summaryReport:
  title: Summary Report
  intro: The summary report expresses the highest level of expected injuries from threat compromise with respect to the security objectives of confidentiality, integrity, and availability.
  domainTable:
    caption: Breakdown by Business Domain
    col1Header: Business Domain
    col2Header: Security Category
    col2aHeader: Confidentiality
    col2bHeader: Integrity
    col2cHeader: Availability
  componentTable:
    caption: Breakdown by Component
    col1Header: Business Domain
    col2Header: Component
    col3Header: Type
    col4Header: Security Category
    col4aHeader: Confidentiality
    col4bHeader: Integrity
    col4cHeader: Availability
detailedReport:
  title: Detailed Report
  intro1: Security Categorization is the process of identifying the potential injuries that could result from compromises of business processes and related information.
  intro2: The following report provides the detailed injury assessment performed for each process or information component with respect to confidentiality, integrity and availability.
downloadAssessment: Download assessment in CSV format
labelGridClass: col-sm-4
fieldGridClass: col-sm-8
---
{% assign dataVariable = site.playbookData[page.lang] %}{%
assign dataSource = site.data[dataVariable] %}

<div id="sec-cat-form-properties" class="hidden wb-format-gen wb-calculate" data-wb-format-gen='[
  { "onInit": true, "resetForm": "#business-domain-form, #business-activity-form, #business-component-form, #loss-of-confidentiality-form, #loss-of-integrity-form, #loss-of-availability-form" },
  { "onInit": true, "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ], "action": "replace", "source": { "type": "sessionStorage", "key": "assessment", "action": "firstIndex" } },
  { "onInit": true, "type": "form", "source": "sessionStorage", "key": "assessment", "indexesKeys": [
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ] }
  ], "action": "restore-form-state", "container": "#business-domain-form", "noEvents": true },
  { "onInit": true, "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": "form-init-complete" }
]' data-wb-calculate='{ "eventTrigger": "form-init-complete", "eventElement": "#sec-cat-form-properties", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "outputValue", "outputTarget": "#save-domain, #cancel-domain", "outputProperty": "disabled", "value": true },
      { "type": "conditional",
        "inputs": [
          { "type": ">",
            "inputs": [
              { "type": "number", "query": "#sec-cat-form-properties", "sourceAttribute": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ] },
              -1
            ]
          }
        ],
        "actionsTrue": [
          { "type": "outputValue", "outputTarget": "#delete-domain, #add-another-domain, #add-activity", "outputProperty": "disabled", "value": false }
        ],
        "actionsFalse": [
          { "type": "outputValue", "outputTarget": "#delete-domain, #add-another-domain, #add-activity", "outputProperty": "disabled", "value": true }
        ]
      }
    ]
  }
] }' data-sec-cat-form-state='{ "current-action": "append", "current-domain": -1, "current-activity": -1, "current-component": -1, "current-loss-of-confidentiality": -1, "current-loss-of-integrity": -1, "current-loss-of-availability": -1 }'></div>

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

<div id="business-domain-fields-container" class="wb-calculate wb-format-gen" data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "input", "eventElement": "#business-domain-fields-container", "operations": [
  { "type": "conditional",
    "inputs": [
      { "type": "==",
        "inputs": [
          { "type": "boolean", "query": "#save-domain", "sourceProperty": "disabled" },
          true
        ]
      }
    ],
    "actionsTrue": [
      { "type": "outputValue", "outputTarget": "#save-domain, #cancel-domain", "outputProperty": "disabled", "value": false },
      { "type": "conditional",
        "inputs": [
          { "type": "==",
            "inputs": [
              { "type": "boolean", "query": "#delete-domain", "sourceProperty": "disabled" },
              false
            ]
          },
          { "type": "==",
            "inputs": [
              { "type": "string", "query": "#sec-cat-form-properties", "sourceAttribute": "data-sec-cat-form-state", "indexesKeys": [ "current-action" ] },
              "append"
            ]
          }
        ],
        "actionsTrue": [
          { "type": "event", "outputTarget": "#business-domain-fields-container", "outputEvent": "edit-domain" }
        ]
      },
      { "type": "outputValue", "outputTarget": "#delete-domain, #add-another-domain, #add-activity", "outputProperty": "disabled", "value": true }
    ]
  }
] }' data-wb-format-gen='[
  { "eventTrigger": "edit-domain", "eventElement": "#business-domain-fields-container", "operations": [
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-action" ], "action": "replace", "data": "replace" },
    { "type": "dataAttribute", "element": "#save-domain", "key": "data-wb-format-gen", "indexesKeys": [ 0, "operations", 0, "indexesKeys", 0 ], "action": "replace", "data": { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ] } }
  ] },
  { "eventTrigger": "append-domain", "eventElement": "#business-domain-fields-container", "operations": [
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-action" ], "action": "replace", "data": "append" },
    { "type": "dataAttribute", "element": "#save-domain", "key": "data-wb-format-gen", "indexesKeys": [ 0, "operations", 0, "indexesKeys" ], "action": "delete" }
  ] }
]'>

<div class="form-group" markdown="0">
<label for="business-domain-field" class="required {{ page.labelGridClass }}"><span class="field-name">{{ page.businessDomain[ "business-domain-field-label" ] }}</span> <strong class="required">({{ site.required[ page.lang ] }})</strong></label>
<div class="{{ page.fieldGridClass }}">
<input name="business-domain-field" id="business-domain-field" type="text" required="required" pattern=".{2,}" data-rule-minlength="2" />
</div>
</div>

</div>

<div class="btn-group" markdown="0">
<!-- Save to memory, update buttons across forms, enables/disables buttons in the current form, and (TODO) shows an indicator that the save was successful -->
<button id="save-domain" type="submit" disabled="disabled" class="btn btn-primary wb-calculate wb-format-gen" data-wb-calculate='[
  { "ignoreInit": true, "eventTrigger": "submit", "eventElement": "#business-domain-form", "listenerElement": "body", "returnFalse": true, "operations": [
    { "type": "action",
      "inputs": [
        { "type": "outputValue", "outputTarget": "#save-domain, #cancel-domain", "outputProperty": "disabled", "value": true },
        { "type": "outputValue", "outputTarget": "#delete-domain, #add-another-domain, #add-activity", "outputProperty": "disabled", "value": false },
        { "type": "event", "outputTarget": "#save-domain", "outputEvent": "save-domain-proceed" }
      ]
    }
  ] },
  { "ignoreInit": true, "eventTrigger": "save-domain-complete", "eventElement": "#save-domain", "operations": [
      { "type": "conditional",
        "inputs": [
          { "type": "==",
            "inputs": [
              { "type": "string", "query": "#sec-cat-form-properties", "sourceAttribute": "data-sec-cat-form-state", "indexesKeys": [ "current-action" ] },
              "append"
            ]
          }
        ],
        "actionsTrue": [
          { "type": "event", "outputTarget": "#save-domain", "outputEvent": "last-domain" }
        ],
        "actionsFalse": [
          { "type": "event", "outputTarget": "#business-domain-fields-container", "outputEvent": "append-domain" }
        ]
      }
  ] }
]' data-wb-format-gen='[
  { "eventTrigger": "save-domain-proceed", "eventElement": "#save-domain", "operations": [
    { "type": "sessionStorage", "key": "assessment", "source": "form-state", "container": "#business-domain-form",
      "action": { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-action" ] }
    },
    { "type": "event", "outputTarget": "#save-domain", "outputEvent": "save-domain-complete" }
  ] },
  { "eventTrigger": "last-domain", "eventElement": "#save-domain", "operations": [
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ], "action": "replace", "source": { "type": "sessionStorage", "key": "assessment", "action": "lastIndex" } }
  ] }
]'>{{ page.common.save }}</button>
<!-- Loads the previous domain in the current form or clear the forms where a previous domain does not exist. Also enables/disables buttons in the current form. -->
<button id="cancel-domain" type="button" disabled="disabled" class="btn btn-default wb-calculate wb-format-gen" data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#cancel-domain", "operations": [
  { "type": "conditional",
    "inputs": [
      { "type": "==",
        "inputs": [
          { "type": "string", "query": "#sec-cat-form-properties", "sourceAttribute": "data-sec-cat-form-state", "indexesKeys": [ "current-action" ] },
          "replace"
        ]
      }
    ],
    "actionsTrue": [
      { "type": "event", "outputTarget": "#business-domain-fields-container", "outputEvent": "append-domain" }
    ]
  },
  { "type": "action",
    "inputs": [
      { "type": "outputValue", "outputTarget": "#save-domain, #cancel-domain", "outputProperty": "disabled", "value": true },
      { "type": "conditional",
        "inputs": [
          { "type": ">",
            "inputs": [
              { "type": "number", "query": "#sec-cat-form-properties", "sourceAttribute": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ] },
              -1
            ]
          }
        ],
        "actionsTrue": [
          { "type": "outputValue", "outputTarget": "#delete-domain, #add-another-domain, #add-activity", "outputProperty": "disabled", "value": false }
        ]
      }
    ]
  }
] }' data-wb-format-gen='{ "eventTrigger": "click", "eventElement": "#cancel-domain", "operations": [
  { "type": "form", "source": "sessionStorage", "key": "assessment", "indexesKeys": [
      { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ] }
    ], "action": "restore-form-state", "container": "#business-domain-form", "noEvents": true
  }
] }'>{{ page.common.cancel }}</button>
<!-- Disabled by default. (TODO) Brings up a delete confirmation dialog. If confirmed, deletes the current domain from memory, loads the previous domain in the current form, or resets the form if no previous domain exists. Also updates buttons across forms and enables/disabled buttons in the current form. -->
<button id="delete-domain" type="button" disabled="disabled" class="btn btn-default wb-calculate wb-format-gen" data-wb-calculate='[
  { "ignoreInit": true, "eventTrigger": "click", "eventElement": "#delete-domain", "operations": [
    { "type": "action",
      "inputs": [
        { "type": "event", "outputTarget": "#delete-domain", "outputEvent": "delete-domain-proceed" }
      ]
    }
  ] },
  { "ignoreInit": true, "eventTrigger": "delete-domain-complete", "eventElement": "#delete-domain", "operations": [
    { "type": "action",
      "inputs": [
        { "type": "outputValue", "outputTarget": "#save-domain, #cancel-domain", "outputProperty": "disabled", "value": true },
        { "type": "conditional",
          "inputs": [
            { "type": "<",
              "inputs": [
                { "type": "number", "query": "#sec-cat-form-properties", "sourceAttribute": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ] },
                0
              ]
            }
          ],
          "actionsTrue": [
            { "type": "outputValue", "outputTarget": "#delete-domain, #add-another-domain, #add-activity", "outputProperty": "disabled", "value": true }
          ]
        }
      ]
    }
  ] }
]' data-wb-format-gen='{ "eventTrigger": "delete-domain-proceed", "eventElement": "#delete-domain", "operations": [
  { "type": "sessionStorage", "key": "assessment", "indexesKeys": [
      { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ] }
    ], "action": "delete"
  },
  { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ], "source": { "type": "sessionStorage", "key": "assessment", "action": "closestIndex", "source": { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ] } }, "action": "replace" },
  { "type": "form", "source": "sessionStorage", "key": "assessment", "indexesKeys": [ { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ] } ], "action": "restore-form-state", "container": "#business-domain-form", "noEvents": true },
  { "type": "event", "outputTarget": "#delete-domain", "outputEvent": "delete-domain-complete" }
] }'>{{ page.common.delete }}</button>
<!-- Disabled by default. Resets the current form and enables/disables buttons in the current form. -->
<button id="add-another-domain" type="button" disabled="disabled" class="btn btn-default wb-format-gen wb-calculate" data-wb-format-gen='{ "eventTrigger": "click", "eventElement": "#add-another-domain", "operations": [
  { "resetForm": "#business-domain-form" }
] }' data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#add-another-domain", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "outputValue", "outputTarget": "#save-domain, #delete-domain, #add-another-domain, #add-activity", "outputProperty": "disabled", "value": true },
      { "type": "outputValue", "outputTarget": "#cancel-domain", "outputProperty": "disabled", "value": false },
      { "type": "outputValue", "outputTarget": "#cancel-domain", "outputAttribute": "data-add-source", "value": "#business-domain-section" },
      { "type": "event", "outputTarget": "#business-domain-field", "outputEvent": "setfocus.wb" }
    ]
  }
] }'>{{ page.businessDomain[ "add-domain-button" ] }}</button>
<!-- Disabled by default. Resets the activity form, enables/disables buttons in the activity form, shows the activity form, hides this form. -->
<button id="add-activity" type="button" disabled="disabled" class="btn btn-default wb-format-gen wb-calculate" data-wb-format-gen='{ "eventTrigger": "click", "eventElement": "#add-activity", "operations": [
  { "resetForm": "#business-activity-form" }
] }' data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#add-activity", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "outputValue", "outputTarget": "#save-activity, #delete-activity, #add-another-activity, #add-component", "outputProperty": "disabled", "value": true },
      { "type": "outputValue", "outputTarget": "#cancel-activity", "outputProperty": "disabled", "value": false },
      { "type": "outputValue", "outputTarget": "#cancel-activity", "outputAttribute": "data-add-source", "value": "#business-domain-section" },
      { "type": "removeClass", "outputTarget": "#business-activity-section", "class": "hidden" },
      { "type": "addClass", "outputTarget": "#business-domain-section", "class": "hidden" },
      { "type": "event", "outputTarget": "#business-activity-section h2", "outputEvent": "setfocus.wb" }
    ]
  }
] }'>{{ page.businessDomain[ "add-activity-button" ] }}</button>
</div>

</form>
</section>

<section id="business-activity-section" class="hidden wb-frmvld">
<form id="business-activity-form" class="form-horizontal" method="post">

## {{ page.businessActivity.title }}

{{ page.businessActivity.intro1 }}

{{ page.businessActivity.intro2 }}

<div id="business-activity-fields-container" class="wb-calculate wb-format-gen" data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "input", "eventElement": "#business-activity-fields-container", "operations": [
  { "type": "conditional",
    "inputs": [
      { "type": "==",
        "inputs": [
          { "type": "boolean", "query": "#save-activity", "sourceProperty": "disabled" },
          true
        ]
      }
    ],
    "actionsTrue": [
      { "type": "outputValue", "outputTarget": "#save-activity, #cancel-activity", "outputProperty": "disabled", "value": false },
      { "type": "conditional",
        "inputs": [
          { "type": "==",
            "inputs": [
              { "type": "boolean", "query": "#delete-activity", "sourceProperty": "disabled" },
              false
            ]
          },
          { "type": "==",
            "inputs": [
              { "type": "string", "query": "#sec-cat-form-properties", "sourceAttribute": "data-sec-cat-form-state", "indexesKeys": [ "current-action" ] },
              "append"
            ]
          }
        ],
        "actionsTrue": [
          { "type": "event", "outputTarget": "#business-activity-fields-container", "outputEvent": "edit-activity" }
        ]
      },
      { "type": "outputValue", "outputTarget": "#delete-activity, #add-another-activity, #add-component", "outputProperty": "disabled", "value": true }
    ]
  }
] }' data-wb-format-gen='[
  { "eventTrigger": "edit-activity", "eventElement": "#business-activity-fields-container", "operations": [
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-action" ], "action": "replace", "data": "replace" },
    { "type": "dataAttribute", "element": "#save-activity", "key": "data-wb-format-gen", "indexesKeys": [ 0, "operations", 0, "indexesKeys", 3 ], "action": "replace", "data": { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-activity" ] } }
  ] },
  { "eventTrigger": "append-activity", "eventElement": "#business-activity-fields-container", "operations": [
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-action" ], "action": "replace", "data": "append" },
    { "type": "dataAttribute", "element": "#save-activity", "key": "data-wb-format-gen", "indexesKeys": [ 0, "operations", 0, "indexesKeys", 3 ], "action": "delete" }
  ] }
]'>

<div class="form-group" markdown="0">
<label for="business-activity-field" class="required {{ page.labelGridClass }}"><span class="field-name">{{ page.businessComponent[ "business-activity-label" ] }}</span> <strong class="required">({{ site.required[ page.lang ] }})</strong></label>
<div class="{{ page.fieldGridClass }}">
<input name="business-activity-field" id="business-activity-field" type="text" required="required" pattern=".{2,}" data-rule-minlength="2" />
</div>
</div>

</div>

<div class="btn-group" markdown="0">
<!-- Save to memory, update buttons across forms, enables/disables buttons in the current form, and (TODO) shows an indicator that the save was successful -->
<button id="save-activity" type="submit" disabled="disabled" class="btn btn-primary wb-calculate wb-format-gen" data-wb-calculate='[
  { "ignoreInit": true, "eventTrigger": "submit", "eventElement": "#business-activity-form", "listenerElement": "body", "returnFalse": true, "operations": [
    { "type": "action",
      "inputs": [
        { "type": "outputValue", "outputTarget": "#save-activity, #cancel-activity", "outputProperty": "disabled", "value": true },
        { "type": "outputValue", "outputTarget": "#delete-activity, #add-another-activity, #add-component", "outputProperty": "disabled", "value": false },
        { "type": "outputValue", "outputTarget": "#cancel-activity", "outputAttribute": "data-add-source", "value": "#business-activity-section" },
        { "type": "event", "outputTarget": "#save-activity", "outputEvent": "save-activity-proceed" }
      ]
    }
  ] },
  { "ignoreInit": true, "eventTrigger": "save-activity-complete", "eventElement": "#save-activity", "operations": [
      { "type": "conditional",
        "inputs": [
          { "type": "==",
            "inputs": [
              { "type": "string", "query": "#sec-cat-form-properties", "sourceAttribute": "data-sec-cat-form-state", "indexesKeys": [ "current-action" ] },
              "append"
            ]
          }
        ],
        "actionsTrue": [
          { "type": "event", "outputTarget": "#save-activity", "outputEvent": "last-activity" }
        ],
        "actionsFalse": [
          { "type": "event", "outputTarget": "#business-activity-fields-container", "outputEvent": "append-activity" }
        ]
      }
  ] }
]' data-wb-format-gen='[
  { "eventTrigger": "save-activity-proceed", "eventElement": "#save-activity", "operations": [
    { "type": "sessionStorage", "key": "assessment", "indexesKeys": [
        { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ] },
        0, "activities"
      ], "source": "form-state", "container": "#business-activity-form",
      "action": { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-action" ] }
    },
    { "type": "event", "outputTarget": "#save-activity", "outputEvent": "save-activity-complete" }
  ] },
  { "eventTrigger": "last-activity", "eventElement": "#save-activity", "operations": [
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-activity" ], "action": "replace", "source": { "type": "sessionStorage", "key": "assessment", "indexesKeys": [
      { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ] },
      0, "activities"
    ], "action": "lastIndex" } }
  ] }
]'>{{ page.common.save }}</button>
<!-- Loads the previous activity in the current form or clear the forms where a previous activity does not exist. Also enables/disables buttons in the current form. -->
<button id="cancel-activity" type="button" class="btn btn-default wb-calculate wb-format-gen" data-add-source="#business-activity-section" data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#cancel-activity", "operations": [
  { "type": "conditional",
    "inputs": [
      { "type": "==",
        "inputs": [
          { "type": "string", "query": "#sec-cat-form-properties", "sourceAttribute": "data-sec-cat-form-state", "indexesKeys": [ "current-action" ] },
          "append"
        ]
      },
      { "type": "!=",
        "inputs": [
          { "type": "string", "query": "#cancel-activity", "sourceAttribute": "data-add-source" },
          "#business-activity-section"
        ]
      }
    ],
    "actionsTrue": [
      { "type": "removeClass", "outputTarget": { "type": "string", "query": "#cancel-activity", "sourceAttribute": "data-add-source" }, "class": "hidden" },
      { "type": "addClass", "outputTarget": "#business-activity-section", "class": "hidden" },
      { "type": "event", "outputTarget": { "type": "concat", "inputs": [
          { "type": "string", "query": "#cancel-activity", "sourceAttribute": "data-add-source" },
          " h2"
        ] }, "outputEvent": "setfocus.wb" }
    ],
    "actionsFalse": [
      { "type": "conditional",
        "inputs": [
          { "type": "==",
            "inputs": [
              { "type": "string", "query": "#sec-cat-form-properties", "sourceAttribute": "data-sec-cat-form-state", "indexesKeys": [ "current-action" ] },
              "replace"
            ]
          }
        ],
        "actionsTrue": [
          { "type": "event", "outputTarget": "#business-activity-fields-container", "outputEvent": "append-activity" }
        ]
      },
      { "type": "outputValue", "outputTarget": "#save-activity, #cancel-activity", "outputProperty": "disabled", "value": true },
      { "type": "conditional",
        "inputs": [
          { "type": ">",
            "inputs": [
              { "type": "number", "query": "#sec-cat-form-properties", "sourceAttribute": "data-sec-cat-form-state", "indexesKeys": [ "current-activity" ] },
              -1
            ]
          }
        ],
        "actionsTrue": [
          { "type": "outputValue", "outputTarget": "#delete-activity, #add-another-activity, #add-component", "outputProperty": "disabled", "value": false }
        ]
      },
      { "type": "event", "outputTarget": "#cancel-activity", "outputEvent": "cancel-activity-restore-proceed" }
    ]
  }
] }' data-wb-format-gen='{ "eventTrigger": "cancel-activity-restore-proceed", "eventElement": "#cancel-activity", "operations": [
  { "type": "form", "source": "sessionStorage", "key": "assessment", "indexesKeys": [
      { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ] },
      0, "activities",
      { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-activity" ] }
    ], "action": "restore-form-state", "container": "#business-activity-form", "noEvents": true
  }
] }'>{{ page.common.cancel }}</button>
<!-- Disabled by default. (TODO) Brings up a delete confirmation dialog. If confirmed, deletes the current activity from memory, loads the previous activity in the current form, or resets the form if no previous activity exists. Also updates buttons across forms and enables/disabled buttons in the current form. -->
<button id="delete-activity" type="button" disabled="disabled" class="btn btn-default wb-calculate wb-format-gen" data-wb-calculate='[
  { "ignoreInit": true, "eventTrigger": "click", "eventElement": "#delete-activity", "operations": [
    { "type": "action",
      "inputs": [
        { "type": "event", "outputTarget": "#delete-activity", "outputEvent": "delete-activity-proceed" }
      ]
    }
  ] },
  { "ignoreInit": true, "eventTrigger": "delete-activity-complete", "eventElement": "#delete-activity", "operations": [
    { "type": "action",
      "inputs": [
        { "type": "outputValue", "outputTarget": "#save-activity, #cancel-activity", "outputProperty": "disabled", "value": true },
        { "type": "conditional",
          "inputs": [
            { "type": "<",
              "inputs": [
                { "type": "number", "query": "#sec-cat-form-properties", "sourceAttribute": "data-sec-cat-form-state", "indexesKeys": [ "current-activity" ] },
                0
              ]
            }
          ],
          "actionsTrue": [
            { "type": "outputValue", "outputTarget": "#delete-activity, #add-another-activity, #add-component", "outputProperty": "disabled", "value": true }
          ]
        }
      ]
    }
  ] }
]' data-wb-format-gen='{ "eventTrigger": "delete-activity-proceed", "eventElement": "#delete-activity", "operations": [
  { "type": "sessionStorage", "key": "assessment", "indexesKeys": [
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ] },
    0, "activities",
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-activity" ] }
  ], "action": "delete" },
  { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-activity" ], "source": { "type": "sessionStorage", "key": "assessment", "indexesKeys":[
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ] },
    0, "activities"
  ], "action": "closestIndex", "source": { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-activity" ] } }, "action": "replace" },
  { "type": "form", "source": "sessionStorage", "key": "assessment", "indexesKeys": [
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ] },
    0, "activities",
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-activity" ] }
  ], "action": "restore-form-state", "container": "#business-activity-form", "noEvents": true },
  { "type": "event", "outputTarget": "#delete-activity", "outputEvent": "delete-activity-complete" }
] }'>{{ page.common.delete }}</button>
<!-- Disabled by default. Resets the current form and enables/disables buttons in the current form. -->
<button id="add-another-activity" type="button" disabled="disabled" class="btn btn-default wb-format-gen wb-calculate" data-wb-format-gen='{ "eventTrigger": "click", "eventElement": "#add-another-activity", "operations": [
  { "resetForm": "#business-activity-form" }
] }' data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#add-another-activity", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "outputValue", "outputTarget": "#save-activity, #delete-activity, #add-another-activity, #add-component", "outputProperty": "disabled", "value": true },
      { "type": "outputValue", "outputTarget": "#cancel-activity", "outputProperty": "disabled", "value": false },
      { "type": "outputValue", "outputTarget": "#cancel-activity", "outputAttribute": "data-add-source", "value": "#business-activity-section" },
      { "type": "event", "outputTarget": "#business-activity-field", "outputEvent": "setfocus.wb" }
    ]
  }
] }'>{{ page.businessActivity[ "add-activity-button" ] }}</button>
<!-- Disabled by default. Resets the component form, enables/disables buttons in the component form, shows the component form, hides this form. -->
<button id="add-component" type="button" disabled="disabled" class="btn btn-default wb-format-gen wb-calculate" data-wb-format-gen='{ "eventTrigger": "click", "eventElement": "#add-component", "operations": [
  { "resetForm": "#business-component-form" }
] }' data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#add-component", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "outputValue", "outputTarget": "#save-component, #delete-component, #add-another-component, #add-loss-of-confidentiality, #add-loss-of-integrity, #add-loss-of-availability", "outputProperty": "disabled", "value": true },
      { "type": "outputValue", "outputTarget": "#cancel-component", "outputProperty": "disabled", "value": false },
      { "type": "outputValue", "outputTarget": "#cancel-component", "outputAttribute": "data-add-source", "value": "#business-activity-section" },
      { "type": "removeClass", "outputTarget": "#business-component-section", "class": "hidden" },
      { "type": "addClass", "outputTarget": "#business-activity-section", "class": "hidden" },
      { "type": "event", "outputTarget": "#business-component-section h2", "outputEvent": "setfocus.wb" }
    ]
  }
] }'>{{ page.businessActivity[ "add-component-button" ] }}</button>
</div>

</form>
</section>

<section id="business-component-section" class="hidden wb-frmvld">
<form id="business-component-form" class="form-horizontal" method="post">

## {{ page.businessComponent.title }}

<div id="business-component-fields-container" class="wb-calculate wb-format-gen" data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "input", "eventElement": "#business-component-fields-container", "operations": [
  { "type": "conditional",
    "inputs": [
      { "type": "==",
        "inputs": [
          { "type": "boolean", "query": "#save-component", "sourceProperty": "disabled" },
          true
        ]
      }
    ],
    "actionsTrue": [
      { "type": "outputValue", "outputTarget": "#save-component, #cancel-component", "outputProperty": "disabled", "value": false },
      { "type": "conditional",
        "inputs": [
          { "type": "==",
            "inputs": [
              { "type": "boolean", "query": "#delete-component", "sourceProperty": "disabled" },
              false
            ]
          },
          { "type": "==",
            "inputs": [
              { "type": "string", "query": "#sec-cat-form-properties", "sourceAttribute": "data-sec-cat-form-state", "indexesKeys": [ "current-action" ] },
              "append"
            ]
          }
        ],
        "actionsTrue": [
          { "type": "event", "outputTarget": "#business-component-fields-container", "outputEvent": "edit-component" }
        ]
      },
      { "type": "outputValue", "outputTarget": "#delete-component, #add-another-component, #add-loss-of-confidentiality, #add-loss-of-integrity, #add-loss-of-availability", "outputProperty": "disabled", "value": true }
    ]
  }
] }' data-wb-format-gen='[
  { "eventTrigger": "edit-component", "eventElement": "#business-component-fields-container", "operations": [
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-action" ], "action": "replace", "data": "replace" },
    { "type": "dataAttribute", "element": "#save-component", "key": "data-wb-format-gen", "indexesKeys": [ 0, "operations", 0, "indexesKeys", 6 ], "action": "replace", "data": { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-component" ] } }
  ] },
  { "eventTrigger": "append-component", "eventElement": "#business-component-fields-container", "operations": [
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-action" ], "action": "replace", "data": "append" },
    { "type": "dataAttribute", "element": "#save-component", "key": "data-wb-format-gen", "indexesKeys": [ 0, "operations", 0, "indexesKeys", 6 ], "action": "delete" }
  ] }
]'>

<div class="form-group" markdown="0">
<label for="business-component-field" class="required {{ page.labelGridClass }}"><span class="field-name">{{ page.businessComponent[ "business-component-label" ] }}</span> <strong class="required">({{ site.required[ page.lang ] }})</strong></label>
<div class="{{ page.fieldGridClass }}">
<input name="business-component-field" id="business-component-field" type="text" required="required" pattern=".{2,}" data-rule-minlength="2" />
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
<button id="save-component" type="submit" class="btn btn-primary wb-calculate wb-format-gen" data-wb-calculate='[
  { "ignoreInit": true, "eventTrigger": "submit", "eventElement": "#business-component-form", "listenerElement": "body", "returnFalse": true, "operations": [
    { "type": "action",
      "inputs": [
        { "type": "outputValue", "outputTarget": "#save-component, #cancel-component", "outputProperty": "disabled", "value": true },
        { "type": "outputValue", "outputTarget": "#delete-component, #add-another-component, #add-loss-of-confidentiality, #add-loss-of-integrity, #add-loss-of-availability", "outputProperty": "disabled", "value": false },
        { "type": "outputValue", "outputTarget": "#cancel-component", "outputAttribute": "data-add-source", "value": "#business-component-section" },
        { "type": "event", "outputTarget": "#save-component", "outputEvent": "save-component-proceed" }
      ]
    }
  ] },
  { "ignoreInit": true, "eventTrigger": "save-component-complete", "eventElement": "#save-component", "operations": [
      { "type": "conditional",
        "inputs": [
          { "type": "==",
            "inputs": [
              { "type": "string", "query": "#sec-cat-form-properties", "sourceAttribute": "data-sec-cat-form-state", "indexesKeys": [ "current-action" ] },
              "append"
            ]
          }
        ],
        "actionsTrue": [
          { "type": "event", "outputTarget": "#save-component", "outputEvent": "last-component" }
        ],
        "actionsFalse": [
          { "type": "event", "outputTarget": "#business-component-fields-container", "outputEvent": "append-component" }
        ]
      }
  ] }
]' data-wb-format-gen='[
  { "eventTrigger": "save-component-proceed", "eventElement": "#save-component", "operations": [
    { "type": "sessionStorage", "key": "assessment", "indexesKeys": [
        { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ] },
        0, "activities",
        { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-activity" ] },
        0, "components"
      ], "source": "form-state", "container": "#business-component-form",
      "action": { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-action" ] }
    },
    { "type": "event", "outputTarget": "#save-component", "outputEvent": "save-component-complete" }
  ] },
  { "eventTrigger": "last-component", "eventElement": "#save-component", "operations": [
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-component" ], "action": "replace", "source": { "type": "sessionStorage", "key": "assessment", "indexesKeys": [
      { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ] },
      0, "activities",
      { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-activity" ] },
      0, "components"
    ], "action": "lastIndex" } }
  ] }
]'>{{ page.common.save }}</button>
<!-- Loads the previous component in the current form or clear the forms where a previous component does not exist. Also enables/disables buttons in the current form. -->
<button id="cancel-component" type="button" class="btn btn-default wb-calculate wb-format-gen" data-add-source="#business-component-section" data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#cancel-component", "operations": [
  { "type": "conditional",
    "inputs": [
      { "type": "==",
        "inputs": [
          { "type": "string", "query": "#sec-cat-form-properties", "sourceAttribute": "data-sec-cat-form-state", "indexesKeys": [ "current-action" ] },
          "append"
        ]
      },
      { "type": "!=",
        "inputs": [
          { "type": "string", "query": "#cancel-component", "sourceAttribute": "data-add-source" },
          "#business-component-section"
        ]
      }
    ],
    "actionsTrue": [
      { "type": "removeClass", "outputTarget": { "type": "string", "query": "#cancel-component", "sourceAttribute": "data-add-source" }, "class": "hidden" },
      { "type": "addClass", "outputTarget": "#business-component-section", "class": "hidden" },
      { "type": "event", "outputTarget": { "type": "concat", "inputs": [
          { "type": "string", "query": "#cancel-component", "sourceAttribute": "data-add-source" },
          " h2"
        ] }, "outputEvent": "setfocus.wb" }
    ],
    "actionsFalse": [
      { "type": "conditional",
        "inputs": [
          { "type": "==",
            "inputs": [
              { "type": "string", "query": "#sec-cat-form-properties", "sourceAttribute": "data-sec-cat-form-state", "indexesKeys": [ "current-action" ] },
              "replace"
            ]
          }
        ],
        "actionsTrue": [
          { "type": "event", "outputTarget": "#business-component-fields-container", "outputEvent": "append-component" }
        ]
      },
      { "type": "outputValue", "outputTarget": "#save-component, #cancel-component", "outputProperty": "disabled", "value": true },
      { "type": "conditional",
        "inputs": [
          { "type": ">",
            "inputs": [
              { "type": "number", "query": "#sec-cat-form-properties", "sourceAttribute": "data-sec-cat-form-state", "indexesKeys": [ "current-component" ] },
              -1
            ]
          }
        ],
        "actionsTrue": [
          { "type": "outputValue", "outputTarget": "#delete-component, #add-another-component, #add-loss-of-confidentiality, #add-loss-of-integrity, #add-loss-of-availability", "outputProperty": "disabled", "value": false }
        ]
      },
      { "type": "event", "outputTarget": "#cancel-component", "outputEvent": "cancel-component-restore-proceed" }
    ]
  }
] }' data-wb-format-gen='{ "eventTrigger": "cancel-component-restore-proceed", "eventElement": "#cancel-component", "operations": [
  { "type": "form", "source": "sessionStorage", "key": "assessment", "indexesKeys": [
      { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ] },
      0, "activities",
      { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-activity" ] },
      0, "components",
      { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-component" ] }
    ], "action": "restore-form-state", "container": "#business-component-form", "noEvents": true
  }
] }'>{{ page.common.cancel }}</button>
<!-- Disabled by default. (TODO) Brings up a delete confirmation dialog. If confirmed, deletes the current component from memory, loads the previous component in the current form, or resets the form if no previous component exists. Also updates buttons across forms and enables/disabled buttons in the current form. -->
<button id="delete-component" type="button" disabled="disabled" class="btn btn-default wb-calculate wb-format-gen" data-wb-calculate='[
  { "ignoreInit": true, "eventTrigger": "click", "eventElement": "#delete-component", "operations": [
    { "type": "action",
      "inputs": [
        { "type": "event", "outputTarget": "#delete-component", "outputEvent": "delete-component-proceed" }
      ]
    }
  ] },
  { "ignoreInit": true, "eventTrigger": "delete-component-complete", "eventElement": "#delete-component", "operations": [
    { "type": "action",
      "inputs": [
        { "type": "outputValue", "outputTarget": "#save-component, #cancel-component", "outputProperty": "disabled", "value": true },
        { "type": "conditional",
          "inputs": [
            { "type": "<",
              "inputs": [
                { "type": "number", "query": "#sec-cat-form-properties", "sourceAttribute": "data-sec-cat-form-state", "indexesKeys": [ "current-component" ] },
                0
              ]
            }
          ],
          "actionsTrue": [
            { "type": "outputValue", "outputTarget": "#delete-component, #add-another-component, #add-loss-of-confidentiality, #add-loss-of-integrity, #add-loss-of-availability", "outputProperty": "disabled", "value": true }
          ]
        }
      ]
    }
  ] }
]' data-wb-format-gen='{ "eventTrigger": "delete-component-proceed", "eventElement": "#delete-component", "operations": [
  { "type": "sessionStorage", "key": "assessment", "indexesKeys": [
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ] },
    0, "activities",
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-activity" ] },
    0, "components",
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-component" ] }
  ], "action": "delete" },
  { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-component" ], "source": { "type": "sessionStorage", "key": "assessment", "indexesKeys":[
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ] },
    0, "activities",
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-activity" ] },
    0, "components"
  ], "action": "closestIndex", "source": { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-component" ] } }, "action": "replace" },
  { "type": "form", "source": "sessionStorage", "key": "assessment", "indexesKeys": [
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ] },
    0, "activities",
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-activity" ] },
    0, "components",
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-component" ] }
  ], "action": "restore-form-state", "container": "#business-component-form", "noEvents": true },
  { "type": "event", "outputTarget": "#delete-component", "outputEvent": "delete-component-complete" }
] }'>{{ page.common.delete }}</button>
<!-- Disabled by default. Resets the current form and enables/disables buttons in the current form. -->
<button id="add-another-component" type="button" disabled="disabled" class="btn btn-default wb-format-gen wb-calculate" data-wb-format-gen='{ "eventTrigger": "click", "eventElement": "#add-another-component", "operations": [
  { "resetForm": "#business-component-form" }
] }' data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#add-another-component", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "outputValue", "outputTarget": "#save-component, #delete-component, #add-another-component, #add-loss-of-confidentiality, #add-loss-of-integrity, #add-loss-of-availability", "outputProperty": "disabled", "value": true },
      { "type": "outputValue", "outputTarget": "#cancel-component", "outputProperty": "disabled", "value": false },
      { "type": "outputValue", "outputTarget": "#cancel-component", "outputAttribute": "data-add-source", "value": "#business-component-section" },
      { "type": "event", "outputTarget": "#business-component-field", "outputEvent": "setfocus.wb" }
    ]
  }
] }'>{{ page.businessComponent[ "add-component-button" ] }}</button>
<!-- Disabled by default. Resets the loss of confidentiality form, enables/disables buttons in the loss of confidentiality form, shows the loss of confidentiality form, hides this form. -->
<button id="add-loss-of-confidentiality" type="button" disabled="disabled" class="btn btn-default wb-format-gen wb-calculate" data-wb-format-gen='{ "eventTrigger": "click", "eventElement": "#add-loss-of-confidentiality", "operations": [
  { "resetForm": "#loss-of-confidentiality-form" }
] }' data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#add-loss-of-confidentiality", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "outputValue", "outputTarget": "#save-loss-of-confidentiality, #delete-loss-of-confidentiality, #add-another-loss-of-confidentiality, #add-loss-of-integrity-confidentiality-form, #add-loss-of-availability-confidentiality-form", "outputProperty": "disabled", "value": true },
      { "type": "outputValue", "outputTarget": "#cancel-loss-of-confidentiality", "outputProperty": "disabled", "value": false },
      { "type": "outputValue", "outputTarget": "#cancel-loss-of-confidentiality", "outputAttribute": "data-add-source", "value": "#business-component-section" },
      { "type": "removeClass", "outputTarget": "#loss-of-confidentiality-section", "class": "hidden" },
      { "type": "addClass", "outputTarget": "#business-component-section", "class": "hidden" },
      { "type": "event", "outputTarget": "#loss-of-confidentiality-section h2", "outputEvent": "setfocus.wb" }
    ]
  }
] }'>{{ page.confidentiality[ "add-confidentiality-button" ] }}</button>
<!-- Disabled by default. Resets the loss of integrity form, enables/disables buttons in the loss of integrity form, shows the loss of integrity form, hides this form. -->
<button id="add-loss-of-integrity" type="button" disabled="disabled" class="btn btn-default wb-format-gen wb-calculate" data-wb-format-gen='{ "eventTrigger": "click", "eventElement": "#add-loss-of-integrity", "operations": [
  { "resetForm": "#loss-of-integrity-form" }
] }' data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#add-loss-of-integrity", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "outputValue", "outputTarget": "#save-loss-of-integrity, #delete-loss-of-integrity, #add-loss-of-confidentiality-integrity-form, #add-another-loss-of-integrity, #add-loss-of-availability-integrity-form", "outputProperty": "disabled", "value": true },
      { "type": "outputValue", "outputTarget": "#cancel-loss-of-integrity", "outputProperty": "disabled", "value": false },
      { "type": "outputValue", "outputTarget": "#cancel-loss-of-integrity", "outputAttribute": "data-add-source", "value": "#business-component-section" },
      { "type": "removeClass", "outputTarget": "#loss-of-integrity-section", "class": "hidden" },
      { "type": "addClass", "outputTarget": "#business-component-section", "class": "hidden" },
      { "type": "event", "outputTarget": "#business-component-field", "outputEvent": "setfocus.wb" },
      { "type": "event", "outputTarget": "#loss-of-integrity-section h2", "outputEvent": "setfocus.wb" }
    ]
  }
] }'>{{ page.integrity[ "add-integrity-button" ] }}o</button>
<!-- Disabled by default. Resets the loss of availability form, enables/disables buttons in the loss of availability form, shows the loss of availability form, hides this form. -->
<button id="add-loss-of-availability" type="button" disabled="disabled" class="btn btn-default wb-format-gen wb-calculate" data-wb-format-gen='{ "eventTrigger": "click", "eventElement": "#add-loss-of-availability", "operations": [
  { "resetForm": "#loss-of-availability-form" }
] }' data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#add-loss-of-availability", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "outputValue", "outputTarget": "#save-loss-of-availability, #delete-loss-of-availability, #add-loss-of-confidentiality-availability-form, #add-loss-of-integrity-availability-form, #add-another-loss-of-availability", "outputProperty": "disabled", "value": true },
      { "type": "outputValue", "outputTarget": "#cancel-loss-of-availability", "outputProperty": "disabled", "value": false },
      { "type": "outputValue", "outputTarget": "#cancel-loss-of-availability", "outputAttribute": "data-add-source", "value": "#business-component-section" },
      { "type": "removeClass", "outputTarget": "#loss-of-availability-section", "class": "hidden" },
      { "type": "addClass", "outputTarget": "#business-component-section", "class": "hidden" },
      { "type": "event", "outputTarget": "#loss-of-availability-section h2", "outputEvent": "setfocus.wb" }
    ]
  }
] }'>{{ page.availability[ "add-availability-button" ] }}</button>
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

<div id="loss-of-{{ lossType }}-fields-container" class="wb-calculate wb-format-gen" data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "input", "eventElement": "#loss-of-{{ lossType }}-fields-container", "operations": [
  { "type": "conditional",
    "inputs": [
      { "type": "==",
        "inputs": [
          { "type": "boolean", "query": "#save-loss-of-{{ lossType }}", "sourceProperty": "disabled" },
          true
        ]
      }
    ],
    "actionsTrue": [
      { "type": "outputValue", "outputTarget": "#save-loss-of-{{ lossType }}, #cancel-loss-of-{{ lossType }}", "outputProperty": "disabled", "value": false },
      { "type": "conditional",
        "inputs": [
          { "type": "==",
            "inputs": [
              { "type": "boolean", "query": "#delete-loss-of-{{ lossType }}", "sourceProperty": "disabled" },
              false
            ]
          },
          { "type": "==",
            "inputs": [
              { "type": "string", "query": "#sec-cat-form-properties", "sourceAttribute": "data-sec-cat-form-state", "indexesKeys": [ "current-action" ] },
              "append"
            ]
          }
        ],
        "actionsTrue": [
          { "type": "event", "outputTarget": "#loss-of-{{ lossType }}-fields-container", "outputEvent": "edit-loss-of-{{ lossType }}" }
        ]
      },
      { "type": "outputValue", "outputTarget": "#delete-loss-of-{{ lossType }}, #add{% if lossTypeIndex == 0 %}-another{% endif %}-loss-of-confidentiality{% if lossTypeIndex != 0 %}-{{ lossType }}-form{% endif %}, #add{% if lossTypeIndex == 1 %}-another{% endif %}-loss-of-integrity{% if lossTypeIndex != 1 %}-{{ lossType }}-form{% endif %}, #add{% if lossTypeIndex == 2 %}-another{% endif %}-loss-of-availability{% if lossTypeIndex != 2 %}-{{ lossType }}-form{% endif %}", "outputProperty": "disabled", "value": true }
    ]
  }
] }' data-wb-format-gen='[
  { "eventTrigger": "edit-loss-of-{{ lossType }}", "eventElement": "#loss-of-{{ lossType }}-fields-container", "operations": [
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-action" ], "action": "replace", "data": "replace" },
    { "type": "dataAttribute", "element": "#save-loss-of-{{ lossType }}", "key": "data-wb-format-gen", "indexesKeys": [ 0, "operations", 0, "indexesKeys", 9 ], "action": "replace", "data": { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-loss-of-{{ lossType }}" ] } }
  ] },
  { "eventTrigger": "append-loss-of-{{ lossType }}", "eventElement": "#loss-of-{{ lossType }}-fields-container", "operations": [
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-action" ], "action": "replace", "data": "append" },
    { "type": "dataAttribute", "element": "#save-loss-of-{{ lossType }}", "key": "data-wb-format-gen", "indexesKeys": [ 0, "operations", 0, "indexesKeys", 9 ], "action": "delete" }
  ] }
]'>

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

</div>

<div class="btn-group" markdown="0">
<!-- Save to memory, update buttons across forms, enables/disables buttons in the current form, and (TODO) shows an indicator that the save was successful -->
<button id="save-loss-of-{{ lossType }}" type="submit" disabled="disabled" class="btn btn-primary wb-format-gen wb-calculate" data-wb-calculate='[
  { "ignoreInit": true, "eventTrigger": "submit", "eventElement": "#loss-of-{{ lossType }}-form", "listenerElement": "body", "returnFalse": true, "operations": [
      { "type": "action",
        "inputs": [
          { "type": "outputValue", "outputTarget": "#save-loss-of-{{ lossType }}, #cancel-loss-of-{{ lossType }}", "outputProperty": "disabled", "value": true },
          { "type": "outputValue", "outputTarget": "#delete-loss-of-{{ lossType }}, #add{% if lossTypeIndex == 0 %}-another{% endif %}-loss-of-confidentiality{% if lossTypeIndex != 0 %}-{{ lossType }}-form{% endif %}, #add{% if lossTypeIndex == 1 %}-another{% endif %}-loss-of-integrity{% if lossTypeIndex != 1 %}-{{ lossType }}-form{% endif %}, #add{% if lossTypeIndex == 2 %}-another{% endif %}-loss-of-availability{% if lossTypeIndex != 2 %}-{{ lossType }}-form{% endif %}", "outputProperty": "disabled", "value": false },
          { "type": "outputValue", "outputTarget": "#cancel-loss-of-{{ lossType }}", "outputAttribute": "data-add-source", "value": "loss-of-{{ lossType }}-section" },
          { "type": "event", "outputTarget": "#save-loss-of-{{ lossType }}", "outputEvent": "save-loss-of-{{ lossType }}-proceed" }
        ]
      }
    ]
  },
  { "ignoreInit": true, "eventTrigger": "save-loss-of-{{ lossType }}-complete", "eventElement": "#save-loss-of-{{ lossType }}", "operations": [
      { "type": "conditional",
        "inputs": [
          { "type": "==",
            "inputs": [
              { "type": "string", "query": "#sec-cat-form-properties", "sourceAttribute": "data-sec-cat-form-state", "indexesKeys": [ "current-action" ] },
              "append"
            ]
          }
        ],
        "actionsTrue": [
          { "type": "event", "outputTarget": "#save-loss-of-{{ lossType }}", "outputEvent": "last-loss-of-{{ lossType }}" }
        ],
        "actionsFalse": [
          { "type": "event", "outputTarget": "#loss-of-{{ lossType }}-fields-container", "outputEvent": "append-loss-of-{{ lossType }}" }
        ]
      }
  ] }
]' data-wb-format-gen='[
  { "eventTrigger": "save-loss-of-{{ lossType }}-proceed", "eventElement": "#save-loss-of-{{ lossType }}", "operations": [
    { "type": "sessionStorage", "key": "assessment", "indexesKeys": [
      { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ] },
      0, "activities",
      { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-activity" ] },
      0, "components",
      { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-component" ] },
      0, "{{ lossType }}"
    ], "source": "form-state", "container": "#loss-of-{{ lossType }}-form",
    "action": { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-action" ] }
    },
    { "type": "event", "outputTarget": "#save-loss-of-{{ lossType }}", "outputEvent": "save-loss-of-{{ lossType }}-complete" }
  ] },
  { "eventTrigger": "last-loss-of-{{ lossType }}", "eventElement": "#save-loss-of-{{ lossType }}", "operations": [
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-loss-of-{{ lossType }}" ], "action": "replace", "source": { "type": "sessionStorage", "key": "assessment", "indexesKeys": [
      { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ] },
      0, "activities",
      { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-activity" ] },
      0, "components",
      { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-component" ] },
      0, "{{ lossType }}"
    ], "action": "lastIndex" } }
  ] }
]'>{{ page.common.save }}</button>
<!-- Loads the previous loss of {{ lossType }} in the current form or clear the forms where a previous loss of {{ lossType }} does not exist. Also enables/disables buttons in the current form. -->
<button id="cancel-loss-of-{{ lossType }}" type="button" disabled="disabled" class="btn btn-default wb-calculate wb-format-gen" data-add-source="#loss-of-{{ lossType }}-section" data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#cancel-loss-of-{{ lossType }}", "operations": [
  { "type": "conditional",
    "inputs": [
      { "type": "==",
        "inputs": [
          { "type": "string", "query": "#sec-cat-form-properties", "sourceAttribute": "data-sec-cat-form-state", "indexesKeys": [ "current-action" ] },
          "append"
        ]
      },
      { "type": "!=",
        "inputs": [
          { "type": "string", "query": "#cancel-loss-of-{{ lossType }}", "sourceAttribute": "data-add-source" },
          "#loss-of-{{ lossType }}-section"
        ]
      }
    ],
    "actionsTrue": [
      { "type": "removeClass", "outputTarget": { "type": "string", "query": "#cancel-loss-of-{{ lossType }}", "sourceAttribute": "data-add-source" }, "class": "hidden" },
      { "type": "addClass", "outputTarget": "#loss-of-{{ lossType }}-section", "class": "hidden" },
      { "type": "event", "outputTarget": { "type": "concat", "inputs": [
          { "type": "string", "query": "#cancel-loss-of-{{ lossType }}", "sourceAttribute": "data-add-source" },
          " h2"
        ] }, "outputEvent": "setfocus.wb" }
    ],
    "actionsFalse": [
      { "type": "conditional",
        "inputs": [
          { "type": "==",
            "inputs": [
              { "type": "string", "query": "#sec-cat-form-properties", "sourceAttribute": "data-sec-cat-form-state", "indexesKeys": [ "current-action" ] },
              "replace"
            ]
          }
        ],
        "actionsTrue": [
          { "type": "event", "outputTarget": "#loss-of-{{ lossType }}-fields-container", "outputEvent": "append-loss-of-{{ lossType }}" }
        ]
      },
      { "type": "outputValue", "outputTarget": "#save-loss-of-{{ lossType }}, #cancel-loss-of-{{ lossType }}", "outputProperty": "disabled", "value": true },
      { "type": "conditional",
        "inputs": [
          { "type": ">",
            "inputs": [
              { "type": "number", "query": "#sec-cat-form-properties", "sourceAttribute": "data-sec-cat-form-state", "indexesKeys": [ "current-loss-of-{{ lossType }}" ] },
              -1
            ]
          }
        ],
        "actionsTrue": [
          { "type": "outputValue", "outputTarget": "#delete-loss-of-{{ lossType }}, #add{% if lossTypeIndex == 0 %}-another{% endif %}-loss-of-confidentiality{% if lossTypeIndex != 0 %}-{{ lossType }}-form{% endif %}, #add{% if lossTypeIndex == 1 %}-another{% endif %}-loss-of-integrity{% if lossTypeIndex != 1 %}-{{ lossType }}-form{% endif %}, #add{% if lossTypeIndex == 2 %}-another{% endif %}-loss-of-availability{% if lossTypeIndex != 2 %}-{{ lossType }}-form{% endif %}", "outputProperty": "disabled", "value": false }
        ]
      },
      { "type": "event", "outputTarget": "#cancel-loss-of-{{ lossType }}", "outputEvent": "cancel-loss-of-{{ lossType }}-restore-proceed" }
    ]
  }
] }' data-wb-format-gen='{ "eventTrigger": "cancel-loss-of-{{ lossType }}-restore-proceed", "eventElement": "#cancel-loss-of-{{ lossType }}", "operations": [
  { "type": "form", "source": "sessionStorage", "key": "assessment", "indexesKeys": [
      { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ] },
      0, "activities",
      { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-activity" ] },
      0, "components",
      { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-component" ] },
      0, "{{ lossType }}",
      { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-loss-of-{{ lossType }}" ] }
    ], "action": "restore-form-state", "container": "#loss-of-{{ lossType }}-form", "noEvents": true
  }
] }'>{{ page.common.cancel }}</button>
<!-- Disabled by default. (TODO) Brings up a delete confirmation dialog. If confirmed, deletes the current loss of {{ lossType }} from memory, loads the previous loss of {{ lossType }} in the current form, or resets the form if no previous loss of {{ lossType }} exists. Also updates buttons across forms and enables/disabled buttons in the current form. -->
<button id="delete-loss-of-{{ lossType }}" type="button" disabled="disabled" class="btn btn-default wb-calculate wb-format-gen" data-wb-calculate='[
  { "ignoreInit": true, "eventTrigger": "click", "eventElement": "#delete-loss-of-{{ lossType }}", "operations": [
    { "type": "action",
      "inputs": [
        { "type": "event", "outputTarget": "#delete-loss-of-{{ lossType }}", "outputEvent": "delete-loss-of-{{ lossType }}-proceed" }
      ]
    }
  ] },
  { "ignoreInit": true, "eventTrigger": "delete-loss-of-{{ lossType }}-complete", "eventElement": "#delete-loss-of-{{ lossType }}", "operations": [
    { "type": "action",
      "inputs": [
        { "type": "outputValue", "outputTarget": "#save-loss-of-{{ lossType }}, #cancel-loss-of-{{ lossType }}", "outputProperty": "disabled", "value": true },
        { "type": "conditional",
          "inputs": [
            { "type": "<",
              "inputs": [
                { "type": "number", "query": "#sec-cat-form-properties", "sourceAttribute": "data-sec-cat-form-state", "indexesKeys": [ "current-loss-of-{{ lossType }}" ] },
                0
              ]
            }
          ],
          "actionsTrue": [
            { "type": "outputValue", "outputTarget": "#delete-loss-of-{{ lossType }}, #add{% if lossTypeIndex == 0 %}-another{% endif %}-loss-of-confidentiality{% if lossTypeIndex != 0 %}-{{ lossType }}-form{% endif %}, #add{% if lossTypeIndex == 1 %}-another{% endif %}-loss-of-integrity{% if lossTypeIndex != 1 %}-{{ lossType }}-form{% endif %}, #add{% if lossTypeIndex == 2 %}-another{% endif %}-loss-of-availability{% if lossTypeIndex != 2 %}-{{ lossType }}-form{% endif %}", "outputProperty": "disabled", "value": true }
          ]
        }
      ]
    }
  ] }
]' data-wb-format-gen='{ "eventTrigger": "delete-loss-of-{{ lossType }}-proceed", "eventElement": "#delete-loss-of-{{ lossType }}", "operations": [
  { "type": "sessionStorage", "key": "assessment", "indexesKeys": [
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ] },
    0, "activities",
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-activity" ] },
    0, "components",
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-component" ] },
    0, "{{ lossType }}",
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-loss-of-{{ lossType }}" ] }
  ], "action": "delete" },
  { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-loss-of-{{ lossType }}" ], "source": { "type": "sessionStorage", "key": "assessment", "indexesKeys":[
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ] },
    0, "activities",
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-activity" ] },
    0, "components",
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-component" ] },
    0, "{{ lossType }}"
  ], "action": "closestIndex", "source": { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-loss-of-{{ lossType }}" ] } }, "action": "replace" },
  { "type": "form", "source": "sessionStorage", "key": "assessment", "indexesKeys": [
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ] },
    0, "activities",
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-activity" ] },
    0, "components",
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-component" ] },
    0, "{{ lossType }}",
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-loss-of-{{ lossType }}" ] }
  ], "action": "restore-form-state", "container": "#loss-of-{{ lossType }}-form", "noEvents": true },
  { "type": "event", "outputTarget": "#delete-loss-of-{{ lossType }}", "outputEvent": "delete-loss-of-{{ lossType }}-complete" }
] }'>{{ page.common.delete }}</button>{%
assign lossTypeIndexInner = 0 %}{%
for lossTypeInner in page.lossTypes %}{%
  if lossTypeIndexInner == lossTypeIndex %}{%
    assign lossButton = "add-another-" | append: lossTypeInner | append: "-button" %}
<!-- Disabled by default. Resets the current form and enables/disables buttons in the current form. -->
<button id="add-another-loss-of-{{ lossTypeInner }}" type="button" disabled="disabled" class="btn btn-default wb-format-gen wb-calculate" data-wb-format-gen='{ "eventTrigger": "click", "eventElement": "#add-another-loss-of-{{ lossTypeInner }}", "operations": [
  { "resetForm": "#loss-of-{{ lossTypeInner }}-form" }
] }' data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#add-another-loss-of-{{ lossTypeInner }}", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "outputValue", "outputTarget": "#save-loss-of-{{ lossTypeInner }}, #delete-loss-of-{{ lossTypeInner }}, #add{% if lossTypeIndex == 0 %}-another{% endif %}-loss-of-confidentiality{% if lossTypeIndex != 0 %}-{{ lossType }}-form{% endif %}, #add{% if lossTypeIndex == 1 %}-another{% endif %}-loss-of-integrity{% if lossTypeIndex != 1 %}-{{ lossType }}-form{% endif %}, #add{% if lossTypeIndex == 2 %}-another{% endif %}-loss-of-availability{% if lossTypeIndex != 2 %}-{{ lossType }}-form{% endif %}", "outputProperty": "disabled", "value": true },
      { "type": "outputValue", "outputTarget": "#cancel-loss-of-{{ lossTypeInner }}", "outputProperty": "disabled", "value": false },
      { "type": "outputValue", "outputTarget": "#cancel-loss-of-{{ lossTypeInner }}", "outputAttribute": "data-add-source", "value": "#loss-of-{{ lossType }}-section" },
      { "type": "event", "outputTarget": "#failure-scenario-{{ lossTypeInner }}", "outputEvent": "setfocus.wb" }
    ]
  }
] }'>{{ page[ lossTypeInner ][ lossButton ] }}</button>{%
  else %}{%
    assign lossButton = "add-" | append: lossTypeInner | append: "-button" %}
<!-- Disabled by default. Resets the loss of {{ lossTypeInner }} form, enables/disables buttons in the loss of {{ lossTypeInner }} form, shows the loss of {{ lossTypeInner }} form, hides this form. -->
<button id="add-loss-of-{{ lossTypeInner }}-{{ lossType }}-form" type="button" disabled="disabled" class="btn btn-default wb-format-gen wb-calculate" data-wb-format-gen='{ "eventTrigger": "click", "eventElement": "#add-loss-of-{{ lossTypeInner }}-{{ lossType }}-form", "operations": [
  { "resetForm": "#loss-of-{{ lossTypeInner }}-form" }
] }' data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#add-loss-of-{{ lossTypeInner }}-{{ lossType }}-form", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "outputValue", "outputTarget": "#save-loss-of-{{ lossTypeInner }}, #delete-loss-of-{{ lossTypeInner }}, #add{% if lossTypeIndex == 0 %}-another{% endif %}-loss-of-confidentiality{% if lossTypeIndex != 0 %}-{{ lossType }}-form{% endif %}, #add{% if lossTypeIndex == 1 %}-another{% endif %}-loss-of-integrity{% if lossTypeIndex != 1 %}-{{ lossType }}-form{% endif %}, #add{% if lossTypeIndex == 2 %}-another{% endif %}-loss-of-availability{% if lossTypeIndex != 2 %}-{{ lossType }}-form{% endif %}", "outputProperty": "disabled", "value": true },
      { "type": "outputValue", "outputTarget": "#cancel-loss-of-{{ lossTypeInner }}", "outputProperty": "disabled", "value": false },
      { "type": "outputValue", "outputTarget": "#cancel-loss-of-{{ lossTypeInner }}", "outputAttribute": "data-add-source", "value": "#loss-of-{{ lossType }}-section" },
      { "type": "removeClass", "outputTarget": "#loss-of-{{ lossTypeInner }}-section", "class": "hidden" },
      { "type": "addClass", "outputTarget": "#loss-of-{{ lossType }}-section", "class": "hidden" },
      { "type": "event", "outputTarget": "#loss-of-{{ lossTypeInner }}-section h2", "outputEvent": "setfocus.wb" }
    ]
  }
] }'>{{ page[ lossTypeInner ][ lossButton ] }}</button>{%
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

<summary markdown="0">{{ page.summaryReport.title }}</summary>

{{ page.summaryReport.intro }}

<table class="table table-bordered">
<caption>{{ page.summaryReport.domainTable.caption }}</caption>
<thead>
<tr>
<th rowspan="2">{{ page.summaryReport.domainTable.col1Header }}</th>
<th colspan="3" class="text-center">{{ page.summaryReport.domainTable.col2Header }}</th>
</tr>
<tr>
<th class="text-center">{{ page.summaryReport.domainTable.col2aHeader }}</th>
<th class="text-center">{{ page.summaryReport.domainTable.col2bHeader }}</th>
<th class="text-center">{{ page.summaryReport.domainTable.col2cHeader }}</th>
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
<caption>{{ page.summaryReport.componentTable.caption }}</caption>
<thead>
<tr>
<th rowspan="2">{{ page.summaryReport.componentTable.col1Header }}</th>
<th rowspan="2">{{ page.summaryReport.componentTable.col2Header }}</th>
<th rowspan="2" class="text-center">{{ page.summaryReport.componentTable.col3Header }}</th>
<th colspan="3" class="text-center">{{ page.summaryReport.componentTable.col4Header }}</th>
</tr>
<tr>
<th class="text-center">{{ page.summaryReport.componentTable.col4aHeader }}</th>
<th class="text-center">{{ page.summaryReport.componentTable.col4bHeader }}</th>
<th class="text-center">{{ page.summaryReport.componentTable.col4cHeader }}</th>
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

<summary markdown="0">{{ page.detailedReport.title }}</summary>

{{ page.detailedReport.intro1 }}

{{ page.detailedReport.intro2 }}

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
<th>{{ page.businessComponent[ "business-component-label" ] }}</th>
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
<button type="button" class="btn btn-default wb-format-gen" data-wb-format-gen='{ "type": "json", "filename": "assessment-json", "source": "sessionStorage", "key": "assessment" }'>{{ site.SaveToFile[ page.lang ] }}</button>
<!-- Button for restoring progress from a JSON file. This button triggers the hidden input type="file" field. this is done to give more visual control over the appearance than what the input type="file" field allows. -->
<button id="restore-from-file-button" type="button" class="btn btn-default wb-calculate" data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#restore-from-file-button", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "event", "outputTarget": "#restore-from-file", "outputEvent": "click" }
    ]
  }
] }'>{{ site.RestoreFromFile[ page.lang ] }}</button>
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
] }'>{{ page.downloadAssessment }}</button>
</div>
<div class="hidden">
<input id="restore-from-file" type="file" class="wb-format-gen" data-wb-format-gen='{ "eventTrigger": "change", "eventElement": "#restore-from-file", "operations": [
  { "type": "json", "action": "restore-storage", "target": "sessionStorage", "key": "assessment" }
] }' />
</div>

</section>
