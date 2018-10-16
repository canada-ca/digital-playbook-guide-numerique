---
layout: default
title: Security Categorization Tool (draft)
lang: en
altLang: fr
altLangPage: outil-categorisation
collectionDirectory: views-vues/security-securite
common:
  save: Save
  cancel: Cancel
  delete: Delete
  startAssessment: Start assessment
youAreHere: You Are Here
domain:
  title: Business Domain
  intro: A business domain is an operational environment where a department performs business activities supporting common organizational objectives.
  "domain-field-label": What is your business domain?
  "add-domain-button": Add another business domain
  "add-activity-button": Add business activity
  "previous": Previous domain
  "next": Next domain
activity:
  title: Business Activity
  intro1: Any activity performed by a department in the course of its operations to deliver or support the delivery of its programs or services. A business activity is composed of one or several business processes and related information assets.
  intro2: Business activities will be categorized by determining the expected injuries from IT-related threat compromise to the national and non-national interests that the business activities serve, and then determining the lveral of these expected injuries.
  "activity-label": Business Activity
  "add-activity-button": Add another business activity
  "add-component-button": Add business component
  "previous": Previous activity
  "next": Next activity
component:
  title: Business Component
  "component-label": Business Activity Component
  "component-description-label": Component Description
  "component-type-label": Type
  "component-type-sub-label": Select a type
  "component-type-option-1": Process
  "component-type-option-2": Information
  "authoritative-source-label": Authoritative Source
  "add-component-button": Add another business component
  "previous": Previous component
  "next": Next component
lossTypes: [ "confidentiality", "integrity", "availability" ]
confidentiality:
  title: Loss of Confidentiality
  intro: To ensure the confidentiality of business activites and IT assets against a specified set of theats in order to prevent injury to national interests or non-national interests.
  "type-of-injury-label": What is the type of injury that is most likely to result from a loss of confidentiality?
  example1: Example of such injury
  example2: ie. Riot
  "add-confidentiality-button": Add loss of confidentiality
  "add-another-confidentiality-button": Add another loss of confidentiality
  "previous": Previous loss of confidentiality
  "next": Next loss of confidentiality
integrity:
  title: Loss of Integrity
  intro: To ensure the integrity of a business activity or IT asset against a specified set of threats in order to prevent injury to national interests or non-national interests.
  "type-of-injury-label": What is the type of injury that is most likely to result from a loss of integrity?
  example1: Example of such injury
  example2: ie. Distress, psychological trauma
  "add-integrity-button": Add loss of integrity
  "add-another-integrity-button": Add another loss of integrity
  "previous": Previous loss of integrity
  "next": Next loss of integrity
availability:
  title: Loss of Availability
  intro: To ensure the availability of a business activity or IT asset against a specified set of threats in order to prevent injury to national interests or non-national interests.
  "type-of-injury-label": What is the type of injury that is most likely to result from a loss of availability?
  example1: Example of such injury
  example2: ie. Affecting program performance
  "add-another-availability-button": Add another loss of availability
  "add-availability-button": Add loss of availability
  "previous": Previous loss of availability
  "next": Next loss of availability
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
  { "onInit": true, "eventTrigger": "form-init", "eventElement": "#sec-cat-form-properties", "operations": [
    { "resetForm": "#domain-form, #activity-form, #component-form, #confidentiality-form, #integrity-form, #availability-form" },
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ], "action": "replace", "source": { "type": "sessionStorage", "key": "assessment", "action": "firstIndex" } },
    { "type": "form", "source": "sessionStorage", "key": "assessment", "indexesKeys": [
      { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ], "returnAs": "number" }
    ], "action": "restore-form-state", "container": "#domain-form", "noEvents": true },
    { "onInit": true, "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": "form-init-complete" }
  ] },
  { "eventTrigger": "restore-domain", "eventElement": "#sec-cat-form-properties", "operations": [
    { "type": "form", "source": "sessionStorage", "key": "assessment", "indexesKeys": [
      { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ], "returnAs": "number" }
    ], "action": "restore-form-state", "container": "#domain-form", "noEvents": true }
  ] },
  { "eventTrigger": "restore-activity", "eventElement": "#sec-cat-form-properties", "operations": [
    { "type": "form", "source": "sessionStorage", "key": "assessment", "indexesKeys": [
      { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ], "returnAs": "number" },
      0, "activities",
      { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-activity" ], "returnAs": "number" }
    ], "action": "restore-form-state", "container": "#activity-form", "noEvents": true }
  ] },
  { "eventTrigger": "restore-component", "eventElement": "#sec-cat-form-properties", "operations": [
    { "type": "form", "source": "sessionStorage", "key": "assessment", "indexesKeys": [
      { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ], "returnAs": "number" },
      0, "activities",
      { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-activity" ], "returnAs": "number" },
      0, "components",
      { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-component" ], "returnAs": "number" }
    ], "action": "restore-form-state", "container": "#component-form", "noEvents": true }
  ] }{%
for lossType in page.lossTypes %},
  { "eventTrigger": "restore-{{ lossType }}", "eventElement": "#sec-cat-form-properties", "operations": [
    { "type": "form", "source": "sessionStorage", "key": "assessment", "indexesKeys": [
      { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ], "returnAs": "number" },
      0, "activities",
      { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-activity" ], "returnAs": "number" },
      0, "components",
      { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-component" ], "returnAs": "number" },
      0, "{{ lossType }}",
      { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-{{ lossType }}" ], "returnAs": "number" }
    ], "action": "restore-form-state", "container": "#{{ lossType }}-form", "noEvents": true }
  ] }{%
endfor %}
]' data-wb-calculate='[
  { "eventTrigger": "form-init-complete", "eventElement": "#sec-cat-form-properties", "operations": [
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
  ] },
  { "eventTrigger": "show-welcome", "eventElement": "#sec-cat-form-properties", "operations": [
    { "type": "action",
      "inputs": [
        { "type": "removeClass", "outputTarget": "#welcome-section", "class": "hidden" },
        { "type": "addClass", "outputTarget": "#domain-section, #activity-section, #component-section, #confidentiality-section, #integrity-section, #availability-section, #you-are-here-section, .domain-you-are-here, .activity-you-are-here, .component-you-are-here", "class": "hidden" },
        { "type": "event", "outputTarget": "#welcome-section h2", "outputEvent": "setfocus.wb" }
      ]
    }
  ] },
  { "eventTrigger": "show-domain", "eventElement": "#sec-cat-form-properties", "operations": [
    { "type": "action",
      "inputs": [
        { "type": "removeClass", "outputTarget": "#domain-section", "class": "hidden" },
        { "type": "addClass", "outputTarget": "#welcome-section, #activity-section, #component-section, #confidentiality-section, #integrity-section, #availability-section, #you-are-here-section, .domain-you-are-here, .activity-you-are-here, .component-you-are-here", "class": "hidden" },
        { "type": "event", "outputTarget": "#domain-section h2", "outputEvent": "setfocus.wb" }
      ]
    }
  ] },
  { "eventTrigger": "default-domain-buttons", "eventElement": "#sec-cat-form-properties", "operations": [
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
        },
        { "type": "conditional",
          "inputs": [
            { "type": ">",
              "inputs": [
                { "type": "number", "query": "#sec-cat-form-properties", "sourceAttribute": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ] },
                0
              ]
            }
          ],
          "actionsTrue": [
            { "type": "removeClass", "outputTarget": "#previous-domain", "class": "disabled" }
          ],
          "actionsFalse": [
            { "type": "addClass", "outputTarget": "#previous-domain", "class": "disabled" }
          ]
        },
        { "type": "conditional",
          "inputs": [
            { "type": "<",
              "inputs": [
                { "type": "number", "query": "#sec-cat-form-properties", "sourceAttribute": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ] },
                { "type": "number", "sourceStorage": "sessionStorage", "key": "assessment", "action": "lastIndex" }
              ]
            }
          ],
          "actionsTrue": [
            { "type": "removeClass", "outputTarget": "#next-domain", "class": "disabled" }
          ],
          "actionsFalse": [
            { "type": "addClass", "outputTarget": "#next-domain", "class": "disabled" }
          ]
        }
      ]
    }
  ] },
  { "eventTrigger": "show-activity", "eventElement": "#sec-cat-form-properties", "operations": [
    { "type": "action",
      "inputs": [
        { "type": "event", "outputTarget": "#you-are-here-section", "outputEvent": "update-domain-you-are-here" },
        { "type": "removeClass", "outputTarget": "#activity-section, #you-are-here-section, .domain-you-are-here", "class": "hidden" },
        { "type": "addClass", "outputTarget": "#welcome-section, #domain-section, #component-section, #confidentiality-section, #integrity-section, #availability-section, .activity-you-are-here, .component-you-are-here", "class": "hidden" },
        { "type": "event", "outputTarget": "#activity-section h2", "outputEvent": "setfocus.wb" }
      ]
    }
  ] },
  { "eventTrigger": "default-activity-buttons", "eventElement": "#sec-cat-form-properties", "operations": [
    { "type": "action",
      "inputs": [
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
          ],
          "actionsFalse": [
            { "type": "outputValue", "outputTarget": "#delete-activity, #add-another-activity, #add-component", "outputProperty": "disabled", "value": true }
          ]
        },
        { "type": "conditional",
          "inputs": [
            { "type": ">",
              "inputs": [
                { "type": "number", "query": "#sec-cat-form-properties", "sourceAttribute": "data-sec-cat-form-state", "indexesKeys": [ "current-activity" ] },
                0
              ]
            }
          ],
          "actionsTrue": [
            { "type": "removeClass", "outputTarget": "#previous-activity", "class": "disabled" }
          ],
          "actionsFalse": [
            { "type": "addClass", "outputTarget": "#previous-activity", "class": "disabled" }
          ]
        },
        { "type": "conditional",
          "inputs": [
            { "type": "<",
              "inputs": [
                { "type": "number", "query": "#sec-cat-form-properties", "sourceAttribute": "data-sec-cat-form-state", "indexesKeys": [ "current-activity" ] },
                { "type": "number", "sourceStorage": "sessionStorage", "key": "assessment", "indexesKeys": [
                  { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ], "returnAs": "number" },
                  0, "activities"
                ], "action": "lastIndex" }
              ]
            }
          ],
          "actionsTrue": [
            { "type": "removeClass", "outputTarget": "#next-activity", "class": "disabled" }
          ],
          "actionsFalse": [
            { "type": "addClass", "outputTarget": "#next-activity", "class": "disabled" }
          ]
        }
      ]
    }
  ] },
  { "eventTrigger": "show-component", "eventElement": "#sec-cat-form-properties", "operations": [
    { "type": "action",
      "inputs": [
        { "type": "event", "outputTarget": "#you-are-here-section", "outputEvent": "update-domain-you-are-here" },
        { "type": "event", "outputTarget": "#you-are-here-section", "outputEvent": "update-activity-you-are-here" },
        { "type": "removeClass", "outputTarget": "#component-section, #you-are-here-section, .domain-you-are-here, .activity-you-are-here", "class": "hidden" },
        { "type": "addClass", "outputTarget": "#welcome-section, #domain-section, #activity-section, #confidentiality-section, #integrity-section, #availability-section, .component-you-are-here", "class": "hidden" },
        { "type": "event", "outputTarget": "#component-section h2", "outputEvent": "setfocus.wb" }
      ]
    }
  ] },
  { "eventTrigger": "default-component-buttons", "eventElement": "#sec-cat-form-properties", "operations": [
    { "type": "action",
      "inputs": [
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
            { "type": "outputValue", "outputTarget": "#delete-component, #add-another-component, #add-confidentiality, #add-integrity, #add-availability", "outputProperty": "disabled", "value": false }
          ],
          "actionsFalse": [
            { "type": "outputValue", "outputTarget": "#delete-component, #add-another-component, #add-confidentiality, #add-integrity, #add-availability", "outputProperty": "disabled", "value": true }
          ]
        },
        { "type": "conditional",
          "inputs": [
            { "type": ">",
              "inputs": [
                { "type": "number", "query": "#sec-cat-form-properties", "sourceAttribute": "data-sec-cat-form-state", "indexesKeys": [ "current-component" ] },
                0
              ]
            }
          ],
          "actionsTrue": [
            { "type": "removeClass", "outputTarget": "#previous-component", "class": "disabled" }
          ],
          "actionsFalse": [
            { "type": "addClass", "outputTarget": "#previous-component", "class": "disabled" }
          ]
        },
        { "type": "conditional",
          "inputs": [
            { "type": "<",
              "inputs": [
                { "type": "number", "query": "#sec-cat-form-properties", "sourceAttribute": "data-sec-cat-form-state", "indexesKeys": [ "current-component" ] },
                { "type": "number", "sourceStorage": "sessionStorage", "key": "assessment", "indexesKeys": [
                  { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ], "returnAs": "number" },
                  0, "activities",
                  { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-activity" ], "returnAs": "number" },
                  0, "components"
                ], "action": "lastIndex" }
              ]
            }
          ],
          "actionsTrue": [
            { "type": "removeClass", "outputTarget": "#next-component", "class": "disabled" }
          ],
          "actionsFalse": [
            { "type": "addClass", "outputTarget": "#next-component", "class": "disabled" }
          ]
        }
      ]
    }
  ] }{%
for lossType in page.lossTypes %},
  { "eventTrigger": "show-{{ lossType }}", "eventElement": "#sec-cat-form-properties", "operations": [
    { "type": "action",
      "inputs": [
        { "type": "event", "outputTarget": "#you-are-here-section", "outputEvent": "update-domain-you-are-here" },
        { "type": "event", "outputTarget": "#you-are-here-section", "outputEvent": "update-activity-you-are-here" },
        { "type": "event", "outputTarget": "#you-are-here-section", "outputEvent": "update-component-you-are-here" },
        { "type": "removeClass", "outputTarget": "#{{ lossType }}-section, #you-are-here-section, .domain-you-are-here, .activity-you-are-here, .component-you-are-here", "class": "hidden" },
        { "type": "addClass", "outputTarget": "#welcome-section, #domain-section, #activity-section, #component-section{% if lossType != "confidentiality" %}, #confidentiality-section{% endif %}{% if lossType != "integrity" %}, #integrity-section{% endif %}{% if lossType != "availability" %}, #availability-section{% endif %}", "class": "hidden" },
        { "type": "event", "outputTarget": "#{{ lossType }}-section h2", "outputEvent": "setfocus.wb" }
      ]
    }
  ] },
  { "eventTrigger": "default-{{ lossType }}-buttons", "eventElement": "#sec-cat-form-properties", "operations": [
    { "type": "action",
      "inputs": [
        { "type": "outputValue", "outputTarget": "#save-{{ lossType }}, #cancel-{{ lossType }}", "outputProperty": "disabled", "value": true },
        { "type": "conditional",
          "inputs": [
            { "type": ">",
              "inputs": [
                { "type": "number", "query": "#sec-cat-form-properties", "sourceAttribute": "data-sec-cat-form-state", "indexesKeys": [ "current-{{ lossType }}" ] },
                -1
              ]
            }
          ],
          "actionsTrue": [
            { "type": "outputValue", "outputTarget": "#delete-{{ lossType }}, #add-another-{{ lossType }}{% if lossType != "confidentiality" %}, #add-confidentiality-{{ lossType }}-form{% endif %}{% if lossType != "integrity" %}, #add-integrity-{{ lossType }}-form{% endif %}{% if lossType != "availability" %}, #add-availability-{{ lossType }}-form{% endif %}", "outputProperty": "disabled", "value": false }
          ],
          "actionsFalse": [
            { "type": "outputValue", "outputTarget": "#delete-{{ lossType }}, #add-another-{{ lossType }}{% if lossType != "confidentiality" %}, #add-confidentiality-{{ lossType }}-form{% endif %}{% if lossType != "integrity" %}, #add-integrity-{{ lossType }}-form{% endif %}{% if lossType != "availability" %}, #add-availability-{{ lossType }}-form{% endif %}", "outputProperty": "disabled", "value": true }
          ]
        },
        { "type": "conditional",
          "inputs": [
            { "type": ">",
              "inputs": [
                { "type": "number", "query": "#sec-cat-form-properties", "sourceAttribute": "data-sec-cat-form-state", "indexesKeys": [ "current-{{ lossType }}" ] },
                0
              ]
            }
          ],
          "actionsTrue": [
            { "type": "removeClass", "outputTarget": "#previous-{{ lossType }}", "class": "disabled" }
          ],
          "actionsFalse": [
            { "type": "addClass", "outputTarget": "#previous-{{ lossType }}", "class": "disabled" }
          ]
        },
        { "type": "conditional",
          "inputs": [
            { "type": "<",
              "inputs": [
                { "type": "number", "query": "#sec-cat-form-properties", "sourceAttribute": "data-sec-cat-form-state", "indexesKeys": [ "current-{{ lossType }}" ] },
                { "type": "number", "sourceStorage": "sessionStorage", "key": "assessment", "indexesKeys": [
                  { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ], "returnAs": "number" },
                  0, "activities",
                  { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-activity" ], "returnAs": "number" },
                  0, "components",
                  { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-component" ], "returnAs": "number" },
                  0, "{{ lossType }}"
                ], "action": "lastIndex" }
              ]
            }
          ],
          "actionsTrue": [
            { "type": "removeClass", "outputTarget": "#next-{{ lossType }}", "class": "disabled" }
          ],
          "actionsFalse": [
            { "type": "addClass", "outputTarget": "#next-{{ lossType }}", "class": "disabled" }
          ]
        }
      ]
    }
  ] }{%
endfor %}
]' data-sec-cat-form-state='{ "current-action": "append", "current-domain": -1, "current-activity": -1, "current-component": -1, "current-confidentiality": -1, "current-integrity": -1, "current-availability": -1 }'></div>

<section id="you-are-here-section" class="hidden panel panel-info">
<header class="panel-heading">
<h2 class="panel-title">{{ page.youAreHere }}</h2>
</header>
<div class="panel-body">
<dl class="dl-horizontal mrgn-bttm-0 wb-calculate wb-format-gen" data-wb-calculate='[
  { "eventTrigger": "update-domain-you-are-here", "eventElement": "#you-are-here-section", "operations": [
    { "type": "action",
      "inputs": [
        { "type": "outputValue", "outputTarget": "#domain-you-are-here-value",
          "value": { "type": "string", "sourceStorage": "sessionStorage", "key": "assessment", "indexesKeys": [
            { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ], "returnAs": "number" },
            0, "state"
          ] }
        }
      ]
    }
  ] },
  { "eventTrigger": "update-activity-you-are-here", "eventElement": "#you-are-here-section", "operations": [
    { "type": "action",
      "inputs": [
        { "type": "outputValue", "outputTarget": "#activity-you-are-here-value",
          "value": { "type": "string", "sourceStorage": "sessionStorage", "key": "assessment", "indexesKeys": [
            { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ] },
            0, "activities",
            { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-activity" ] },
            0, "state"
          ] }
        }
      ]
    }
  ] },
  { "eventTrigger": "update-component-you-are-here", "eventElement": "#you-are-here-section", "operations": [
    { "type": "action",
      "inputs": [
        { "type": "outputValue", "outputTarget": "#component-you-are-here-value",
          "value": { "type": "string", "sourceStorage": "sessionStorage", "key": "assessment", "indexesKeys": [
            { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ] },
            0, "activities",
            { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-activity" ] },
            0, "components",
            { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-activity" ] },
            0, "state"
          ] }
        }
      ]
    }
  ] }
]'>
<dt class="hidden domain-you-are-here">{{ page.domain.title }}</dt>
<dd class="hidden domain-you-are-here" markdown="0">
<a id="domain-you-are-here-value" href="javascript:void(0)" class="wb-calculate" data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#domain-you-are-here-value", "returnFalse": true, "operations": [
  { "type": "action",
    "inputs": [
      { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": "restore-domain" },
      { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": "default-domain-buttons" },
      { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": "show-domain" }
    ]
  }
] }'></a>
</dd>
<dt class="hidden activity-you-are-here">{{ page.activity.title }}</dt>
<dd class="hidden activity-you-are-here" markdown="0">
<a id="activity-you-are-here-value" href="javascript:void(0)" class="wb-calculate" data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#activity-you-are-here-value", "returnFalse": true, "operations": [
  { "type": "action",
    "inputs": [
      { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": "restore-activity" },
      { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": "default-activity-buttons" },
      { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": "show-activity" }
    ]
  }
] }'></a>
</dd>
<dt class="hidden component-you-are-here">{{ page.component.title }}</dt>
<dd class="hidden component-you-are-here" markdown="0">
<a id="component-you-are-here-value" href="javascript:void(0)" class="wb-calculate" data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#component-you-are-here-value", "returnFalse": true, "operations": [
  { "type": "action",
    "inputs": [
      { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": "restore-component" },
      { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": "default-component-buttons" },
      { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": "show-component" }
    ]
  }
] }'></a>
</dd>
</dl>
</div>
</section>

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

<div class="btn-group" markdown="0">
<!-- Displays the business domain form -->
<button id="start-assessment" type="button" class="btn btn-default wb-calculate" data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#start-assessment", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": "default-domain-buttons" },
      { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": "show-domain" }
    ]
  }
] }'>{{ page.common.startAssessment }}</button>
</div>

</section>

</form>
</section>

<section id="domain-section" class="hidden wb-frmvld">
<form id="domain-form" class="form-horizontal" method="post">

## {{ page.domain.title }}

{{ page.domain.intro }}

<div id="domain-fields-container" class="wb-calculate wb-format-gen" data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "input", "eventElement": "#domain-fields-container", "operations": [
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
          { "type": "event", "outputTarget": "#domain-fields-container", "outputEvent": "edit-domain" }
        ]
      },
      { "type": "outputValue", "outputTarget": "#delete-domain, #add-another-domain, #add-activity", "outputProperty": "disabled", "value": true }
    ]
  }
] }' data-wb-format-gen='[
  { "eventTrigger": "edit-domain", "eventElement": "#domain-fields-container", "operations": [
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-action" ], "action": "replace", "data": "replace" },
    { "type": "dataAttribute", "element": "#save-domain", "key": "data-wb-format-gen", "indexesKeys": [ 0, "operations", 0, "indexesKeys", 0 ], "action": "replace", "data": { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ] } }
  ] },
  { "eventTrigger": "append-domain", "eventElement": "#domain-fields-container", "operations": [
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-action" ], "action": "replace", "data": "append" },
    { "type": "dataAttribute", "element": "#save-domain", "key": "data-wb-format-gen", "indexesKeys": [ 0, "operations", 0, "indexesKeys" ], "action": "delete" }
  ] }
]'>

<div class="form-group" markdown="0">
<label for="domain-field" class="required {{ page.labelGridClass }}"><span class="field-name">{{ page.domain[ "domain-field-label" ] }}</span> <strong class="required">({{ site.required[ page.lang ] }})</strong></label>
<div class="{{ page.fieldGridClass }}">
<input name="domain-field" id="domain-field" type="text" required="required" pattern=".{2,}" data-rule-minlength="2" />
</div>
</div>

</div>

<div class="btn-group" markdown="0">
<!-- Save to memory, update buttons across forms, enables/disables buttons in the current form, and (TODO) shows an indicator that the save was successful -->
<button id="save-domain" type="submit" disabled="disabled" class="btn btn-primary wb-calculate wb-format-gen" data-wb-calculate='[
  { "ignoreInit": true, "eventTrigger": "submit", "eventElement": "#domain-form", "listenerElement": "body", "returnFalse": true, "operations": [
    { "type": "action",
      "inputs": [
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
          { "type": "event", "outputTarget": "#domain-fields-container", "outputEvent": "append-domain" }
        ]
      },
      {
        "type": "action",
        "inputs": [
          { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": "default-domain-buttons" }
        ]
      }
  ] }
]' data-wb-format-gen='[
  { "eventTrigger": "save-domain-proceed", "eventElement": "#save-domain", "operations": [
    { "type": "sessionStorage", "key": "assessment", "source": "form-state", "container": "#domain-form",
      "action": { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-action" ] }
    },
    { "type": "event", "outputTarget": "#save-domain", "outputEvent": "save-domain-complete" }
  ] },
  { "eventTrigger": "last-domain", "eventElement": "#save-domain", "operations": [
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ], "action": "replace", "source": { "type": "sessionStorage", "key": "assessment", "action": "lastIndex" } }
  ] }
]'>{{ page.common.save }}</button>
<!-- Loads the previous domain in the current form or clear the forms where a previous domain does not exist. Also enables/disables buttons in the current form. -->
<button id="cancel-domain" type="button" disabled="disabled" class="btn btn-default wb-calculate" data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#cancel-domain", "operations": [
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
      { "type": "event", "outputTarget": "#domain-fields-container", "outputEvent": "append-domain" }
    ]
  },
  { "type": "action",
    "inputs": [
      { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": "restore-domain" },
      { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": "default-domain-buttons" }
    ]
  }
] }'>{{ page.common.cancel }}</button>
<!-- Disabled by default. (TODO) Brings up a delete confirmation dialog. If confirmed, deletes the current domain from memory, loads the previous domain in the current form, or resets the form if no previous domain exists. Also updates buttons across forms and enables/disabled buttons in the current form. -->
<button id="delete-domain" type="button" disabled="disabled" class="btn btn-default wb-calculate wb-format-gen" data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#delete-domain", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "event", "outputTarget": "#delete-domain", "outputEvent": "delete-domain-proceed" }
    ]
  }
] }' data-wb-format-gen='{ "eventTrigger": "delete-domain-proceed", "eventElement": "#delete-domain", "operations": [
  { "type": "sessionStorage", "key": "assessment", "indexesKeys": [
      { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ] }
    ], "action": "delete"
  },
  { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ], "source": { "type": "sessionStorage", "key": "assessment", "action": "closestIndex", "source": { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ] } }, "action": "replace" },
  { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": "restore-domain" },
  { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": "default-domain-buttons" }
] }'>{{ page.common.delete }}</button>
<!-- Disabled by default. Resets the current form and enables/disables buttons in the current form. -->
<button id="add-another-domain" type="button" disabled="disabled" class="btn btn-default wb-format-gen wb-calculate" data-wb-format-gen='{ "eventTrigger": "click", "eventElement": "#add-another-domain", "operations": [
  { "resetForm": "#domain-form" }
] }' data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#add-another-domain", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "outputValue", "outputTarget": "#save-domain, #delete-domain, #add-another-domain, #add-activity", "outputProperty": "disabled", "value": true },
      { "type": "outputValue", "outputTarget": "#cancel-domain", "outputProperty": "disabled", "value": false },
      { "type": "outputValue", "outputTarget": "#cancel-domain", "outputAttribute": "data-add-source", "value": "domain" },
      { "type": "event", "outputTarget": "#domain-field", "outputEvent": "setfocus.wb" }
    ]
  }
] }'>{{ page.domain[ "add-domain-button" ] }}</button>
<!-- Disabled by default. Resets the activity form, enables/disables buttons in the activity form, shows the activity form, hides this form. -->
<button id="add-activity" type="button" disabled="disabled" class="btn btn-default wb-format-gen wb-calculate" data-wb-format-gen='{ "eventTrigger": "click", "eventElement": "#add-activity", "operations": [
  { "resetForm": "#activity-form" }
] }' data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#add-activity", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "outputValue", "outputTarget": "#save-activity, #delete-activity, #add-another-activity, #add-component", "outputProperty": "disabled", "value": true },
      { "type": "outputValue", "outputTarget": "#cancel-activity", "outputProperty": "disabled", "value": false },
      { "type": "outputValue", "outputTarget": "#cancel-activity", "outputAttribute": "data-add-source", "value": "domain" },
      { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": "show-activity" }
    ]
  }
] }'>{{ page.domain[ "add-activity-button" ] }}</button>
</div>

{% include views-vues/security-securite/categorization-tool-pagination-outil-categorisation.html itemType="domain" %}

</form>
</section>

<section id="activity-section" class="hidden wb-frmvld">
<form id="activity-form" class="form-horizontal" method="post">

## {{ page.activity.title }}

{{ page.activity.intro1 }}

{{ page.activity.intro2 }}

<div id="activity-fields-container" class="wb-calculate wb-format-gen" data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "input", "eventElement": "#activity-fields-container", "operations": [
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
          { "type": "event", "outputTarget": "#activity-fields-container", "outputEvent": "edit-activity" }
        ]
      },
      { "type": "outputValue", "outputTarget": "#delete-activity, #add-another-activity, #add-component", "outputProperty": "disabled", "value": true }
    ]
  }
] }' data-wb-format-gen='[
  { "eventTrigger": "edit-activity", "eventElement": "#activity-fields-container", "operations": [
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-action" ], "action": "replace", "data": "replace" },
    { "type": "dataAttribute", "element": "#save-activity", "key": "data-wb-format-gen", "indexesKeys": [ 0, "operations", 0, "indexesKeys", 3 ], "action": "replace", "data": { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-activity" ] } }
  ] },
  { "eventTrigger": "append-activity", "eventElement": "#activity-fields-container", "operations": [
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-action" ], "action": "replace", "data": "append" },
    { "type": "dataAttribute", "element": "#save-activity", "key": "data-wb-format-gen", "indexesKeys": [ 0, "operations", 0, "indexesKeys", 3 ], "action": "delete" }
  ] }
]'>

<div class="form-group" markdown="0">
<label for="activity-field" class="required {{ page.labelGridClass }}"><span class="field-name">{{ page.activity[ "activity-label" ] }}</span> <strong class="required">({{ site.required[ page.lang ] }})</strong></label>
<div class="{{ page.fieldGridClass }}">
<input name="activity-field" id="activity-field" type="text" required="required" pattern=".{2,}" data-rule-minlength="2" />
</div>
</div>

</div>

<div class="btn-group" markdown="0">
<!-- Save to memory, update buttons across forms, enables/disables buttons in the current form, and (TODO) shows an indicator that the save was successful -->
<button id="save-activity" type="submit" disabled="disabled" class="btn btn-primary wb-calculate wb-format-gen" data-wb-calculate='[
  { "ignoreInit": true, "eventTrigger": "submit", "eventElement": "#activity-form", "listenerElement": "body", "returnFalse": true, "operations": [
    { "type": "action",
      "inputs": [
        { "type": "outputValue", "outputTarget": "#cancel-activity", "outputAttribute": "data-add-source", "value": "activity" },
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
          { "type": "event", "outputTarget": "#activity-fields-container", "outputEvent": "append-activity" }
        ]
      },
      { "type": "action",
        "inputs": [
          { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": "default-activity-buttons" }
        ]
      }
  ] }
]' data-wb-format-gen='[
  { "eventTrigger": "save-activity-proceed", "eventElement": "#save-activity", "operations": [
    { "type": "sessionStorage", "key": "assessment", "indexesKeys": [
        { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ] },
        0, "activities"
      ], "source": "form-state", "container": "#activity-form",
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
<button id="cancel-activity" type="button" class="btn btn-default wb-calculate" data-add-source="activity" data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#cancel-activity", "operations": [
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
          "activity"
        ]
      }
    ],
    "actionsTrue": [
      { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": { "type": "concat", "inputs": [
          "restore-", { "type": "string", "query": "#cancel-activity", "sourceAttribute": "data-add-source" }
        ] }
      },
      { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": { "type": "concat", "inputs": [
          "default-", { "type": "string", "query": "#cancel-activity", "sourceAttribute": "data-add-source" }, "-buttons"
        ] }
      },
      { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": { "type": "concat", "inputs": [
          "show-", { "type": "string", "query": "#cancel-activity", "sourceAttribute": "data-add-source" }
        ] }
      }
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
          { "type": "event", "outputTarget": "#activity-fields-container", "outputEvent": "append-activity" }
        ]
      },
      { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": "default-activity-buttons" },
      { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": "restore-activity" }
    ]
  }
] }'>{{ page.common.cancel }}</button>
<!-- Disabled by default. (TODO) Brings up a delete confirmation dialog. If confirmed, deletes the current activity from memory, loads the previous activity in the current form, or resets the form if no previous activity exists. Also updates buttons across forms and enables/disabled buttons in the current form. -->
<button id="delete-activity" type="button" disabled="disabled" class="btn btn-default wb-calculate wb-format-gen" data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#delete-activity", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "event", "outputTarget": "#delete-activity", "outputEvent": "delete-activity-proceed" }
    ]
  }
] }' data-wb-format-gen='{ "eventTrigger": "delete-activity-proceed", "eventElement": "#delete-activity", "operations": [
  { "type": "sessionStorage", "key": "assessment", "indexesKeys": [
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ] },
    0, "activities",
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-activity" ] }
  ], "action": "delete" },
  { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-activity" ], "source": { "type": "sessionStorage", "key": "assessment", "indexesKeys":[
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ] },
    0, "activities"
  ], "action": "closestIndex", "source": { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-activity" ] } }, "action": "replace" },
  { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": "restore-activity" },
  { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": "default-activity-buttons" }
] }'>{{ page.common.delete }}</button>
<!-- Disabled by default. Resets the current form and enables/disables buttons in the current form. -->
<button id="add-another-activity" type="button" disabled="disabled" class="btn btn-default wb-format-gen wb-calculate" data-wb-format-gen='{ "eventTrigger": "click", "eventElement": "#add-another-activity", "operations": [
  { "resetForm": "#activity-form" }
] }' data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#add-another-activity", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "outputValue", "outputTarget": "#save-activity, #delete-activity, #add-another-activity, #add-component", "outputProperty": "disabled", "value": true },
      { "type": "outputValue", "outputTarget": "#cancel-activity", "outputProperty": "disabled", "value": false },
      { "type": "outputValue", "outputTarget": "#cancel-activity", "outputAttribute": "data-add-source", "value": "activity" },
      { "type": "event", "outputTarget": "#activity-field", "outputEvent": "setfocus.wb" }
    ]
  }
] }'>{{ page.activity[ "add-activity-button" ] }}</button>
<!-- Disabled by default. Resets the component form, enables/disables buttons in the component form, shows the component form, hides this form. -->
<button id="add-component" type="button" disabled="disabled" class="btn btn-default wb-format-gen wb-calculate" data-wb-format-gen='{ "eventTrigger": "click", "eventElement": "#add-component", "operations": [
  { "resetForm": "#component-form" }
] }' data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#add-component", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "outputValue", "outputTarget": "#save-component, #delete-component, #add-another-component, #add-confidentiality, #add-integrity, #add-availability", "outputProperty": "disabled", "value": true },
      { "type": "outputValue", "outputTarget": "#cancel-component", "outputProperty": "disabled", "value": false },
      { "type": "outputValue", "outputTarget": "#cancel-component", "outputAttribute": "data-add-source", "value": "activity" },
      { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": "show-component" }
    ]
  }
] }'>{{ page.activity[ "add-component-button" ] }}</button>
</div>

{% include views-vues/security-securite/categorization-tool-pagination-outil-categorisation.html itemType="activity" %}

</form>
</section>

<section id="component-section" class="hidden wb-frmvld">
<form id="component-form" class="form-horizontal" method="post">

## {{ page.component.title }}

<div id="component-fields-container" class="wb-calculate wb-format-gen" data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "input", "eventElement": "#component-fields-container", "operations": [
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
          { "type": "event", "outputTarget": "#component-fields-container", "outputEvent": "edit-component" }
        ]
      },
      { "type": "outputValue", "outputTarget": "#delete-component, #add-another-component, #add-confidentiality, #add-integrity, #add-availability", "outputProperty": "disabled", "value": true }
    ]
  }
] }' data-wb-format-gen='[
  { "eventTrigger": "edit-component", "eventElement": "#component-fields-container", "operations": [
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-action" ], "action": "replace", "data": "replace" },
    { "type": "dataAttribute", "element": "#save-component", "key": "data-wb-format-gen", "indexesKeys": [ 0, "operations", 0, "indexesKeys", 6 ], "action": "replace", "data": { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-component" ] } }
  ] },
  { "eventTrigger": "append-component", "eventElement": "#component-fields-container", "operations": [
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-action" ], "action": "replace", "data": "append" },
    { "type": "dataAttribute", "element": "#save-component", "key": "data-wb-format-gen", "indexesKeys": [ 0, "operations", 0, "indexesKeys", 6 ], "action": "delete" }
  ] }
]'>

<div class="form-group" markdown="0">
<label for="component-field" class="required {{ page.labelGridClass }}"><span class="field-name">{{ page.component[ "component-label" ] }}</span> <strong class="required">({{ site.required[ page.lang ] }})</strong></label>
<div class="{{ page.fieldGridClass }}">
<input name="component-field" id="component-field" type="text" required="required" pattern=".{2,}" data-rule-minlength="2" />
</div>
</div>

<div class="form-group" markdown="0">
<label for="component-description" class="required {{ page.labelGridClass }}"><span class="field-name">{{ page.component[ "component-description-label" ] }}</span> <strong class="required">({{ site.required[ page.lang ] }})</strong></label>
<div class="{{ page.fieldGridClass }}">
<textarea name="component-description" id="component-description" required="required"></textarea>
</div>
</div>

<div class="form-group" markdown="0">
<label for="component-type" class="required {{ page.labelGridClass }}"><span class="field-name">{{ page.component[ "component-type-label" ] }}</span> <strong class="required">({{ site.required[ page.lang ] }})</strong></label>
<div class="{{ page.fieldGridClass }}">
<select class="form-control" id="component-type" name="component-type" required="required">
<option label="{{ page.component[ "component-type-sub-label" ] }}"></option>
<option value="1">{{ page.component[ "component-type-option-1" ] }}</option>
<option value="2">{{ page.component[ "component-type-option-2" ] }}</option>
</select>
</div>
</div>

<div class="form-group" markdown="0">
<label for="authoritative-source" class="required {{ page.labelGridClass }}"><span class="field-name">{{ page.component[ "authoritative-source-label" ] }}</span> <strong class="required">({{ site.required[ page.lang ] }})</strong></label>
<div class="{{ page.fieldGridClass }}">
<textarea name="authoritative-source" id="authoritative-source" required="required"></textarea>
</div>
</div>

</div>

<div class="btn-group" markdown="0">
<!-- Save to memory, update buttons across forms, enables/disables buttons in the current form, and (TODO) shows an indicator that the save was successful -->
<button id="save-component" type="submit" class="btn btn-primary wb-calculate wb-format-gen" data-wb-calculate='[
  { "ignoreInit": true, "eventTrigger": "submit", "eventElement": "#component-form", "listenerElement": "body", "returnFalse": true, "operations": [
    { "type": "action",
      "inputs": [
        { "type": "outputValue", "outputTarget": "#cancel-component", "outputAttribute": "data-add-source", "value": "component" },
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
          { "type": "event", "outputTarget": "#component-fields-container", "outputEvent": "append-component" }
        ]
      },
      {
        "type": "action",
        "inputs": [
          { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": "default-component-buttons" }
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
      ], "source": "form-state", "container": "#component-form",
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
<button id="cancel-component" type="button" class="btn btn-default wb-calculate" data-add-source="component" data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#cancel-component", "operations": [
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
          "component"
        ]
      }
    ],
    "actionsTrue": [
      { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": { "type": "concat", "inputs": [
          "restore-", { "type": "string", "query": "#cancel-component", "sourceAttribute": "data-add-source" }
        ] }
      },
      { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": { "type": "concat", "inputs": [
          "default-", { "type": "string", "query": "#cancel-component", "sourceAttribute": "data-add-source" }, "-buttons"
        ] }
      },
      { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": { "type": "concat", "inputs": [
          "show-", { "type": "string", "query": "#cancel-component", "sourceAttribute": "data-add-source" }
        ] }
      }
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
          { "type": "event", "outputTarget": "#component-fields-container", "outputEvent": "append-component" }
        ]
      },
      { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": "default-component-buttons" },
      { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": "restore-component" }
    ]
  }
] }'>{{ page.common.cancel }}</button>
<!-- Disabled by default. (TODO) Brings up a delete confirmation dialog. If confirmed, deletes the current component from memory, loads the previous component in the current form, or resets the form if no previous component exists. Also updates buttons across forms and enables/disabled buttons in the current form. -->
<button id="delete-component" type="button" disabled="disabled" class="btn btn-default wb-calculate wb-format-gen" data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#delete-component", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "event", "outputTarget": "#delete-component", "outputEvent": "delete-component-proceed" }
    ]
  }
] }' data-wb-format-gen='{ "eventTrigger": "delete-component-proceed", "eventElement": "#delete-component", "operations": [
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
  { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": "restore-component" },
  { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": "default-component-buttons" }
] }'>{{ page.common.delete }}</button>
<!-- Disabled by default. Resets the current form and enables/disables buttons in the current form. -->
<button id="add-another-component" type="button" disabled="disabled" class="btn btn-default wb-format-gen wb-calculate" data-wb-format-gen='{ "eventTrigger": "click", "eventElement": "#add-another-component", "operations": [
  { "resetForm": "#component-form" }
] }' data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#add-another-component", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "outputValue", "outputTarget": "#save-component, #delete-component, #add-another-component, #add-confidentiality, #add-integrity, #add-availability", "outputProperty": "disabled", "value": true },
      { "type": "outputValue", "outputTarget": "#cancel-component", "outputProperty": "disabled", "value": false },
      { "type": "outputValue", "outputTarget": "#cancel-component", "outputAttribute": "data-add-source", "value": "component" },
      { "type": "event", "outputTarget": "#component-field", "outputEvent": "setfocus.wb" }
    ]
  }
] }'>{{ page.component[ "add-component-button" ] }}</button>{%
for lossType in page.lossTypes %}{%
  assign addButton = "add-" | append: lossType | append: "-button" %}
<!-- Disabled by default. Resets the loss of {{ lossType }} form, enables/disables buttons in the loss of {{ lossType }} form, shows the loss of {{ lossType }} form, hides this form. -->
<button id="add-{{ lossType }}" type="button" disabled="disabled" class="btn btn-default wb-format-gen wb-calculate" data-wb-format-gen='{ "eventTrigger": "click", "eventElement": "#add-{{ lossType }}", "operations": [
  { "resetForm": "#{{ lossType }}-form" }
] }' data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#add-{{ lossType }}", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "outputValue", "outputTarget": "#save-{{ lossType }}, #delete-{{ lossType }}, #add-another-{{ lossType }}{% if lossType != "confidentiality" %}, #add-confidentiality-{{ lossType }}-form{% endif %}{% if lossType != "integrity" %}, #add-integrity-{{ lossType }}-form{% endif %}{% if lossType != "availability" %}, #add-availability-{{ lossType }}-form{% endif %}", "outputProperty": "disabled", "value": true },
      { "type": "outputValue", "outputTarget": "#cancel-{{ lossType }}", "outputProperty": "disabled", "value": false },
      { "type": "outputValue", "outputTarget": "#cancel-{{ lossType }}", "outputAttribute": "data-add-source", "value": "component" },
      { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": "show-{{ lossType }}" }
    ]
  }
] }'>{{ page[ lossType ][ addButton ] }}</button>{%
endfor %}
</div>

{% include views-vues/security-securite/categorization-tool-pagination-outil-categorisation.html itemType="component" %}

</form>
</section>

{% assign lossTypeIndex = 0 %}{%
for lossType in page.lossTypes %}{%
  assign previousLossTypeIndex = lossTypeIndex | minus: 1 %}
<section id="{{ lossType }}-section" class="hidden wb-frmvld">
<form id="{{ lossType }}-form" class="form-horizontal" method="post">

## {{ page[ lossType ].title }}

{{ page[ lossType ].intro }}

<div id="{{ lossType }}-fields-container" class="wb-calculate wb-format-gen" data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "input", "eventElement": "#{{ lossType }}-fields-container", "operations": [
  { "type": "conditional",
    "inputs": [
      { "type": "==",
        "inputs": [
          { "type": "boolean", "query": "#save-{{ lossType }}", "sourceProperty": "disabled" },
          true
        ]
      }
    ],
    "actionsTrue": [
      { "type": "outputValue", "outputTarget": "#save-{{ lossType }}, #cancel-{{ lossType }}", "outputProperty": "disabled", "value": false },
      { "type": "conditional",
        "inputs": [
          { "type": "==",
            "inputs": [
              { "type": "boolean", "query": "#delete-{{ lossType }}", "sourceProperty": "disabled" },
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
          { "type": "event", "outputTarget": "#{{ lossType }}-fields-container", "outputEvent": "edit-{{ lossType }}" }
        ]
      },
      { "type": "outputValue", "outputTarget": "#delete-{{ lossType }}, #add{% if lossTypeIndex == 0 %}-another{% endif %}-confidentiality{% if lossTypeIndex != 0 %}-{{ lossType }}-form{% endif %}, #add{% if lossTypeIndex == 1 %}-another{% endif %}-integrity{% if lossTypeIndex != 1 %}-{{ lossType }}-form{% endif %}, #add{% if lossTypeIndex == 2 %}-another{% endif %}-availability{% if lossTypeIndex != 2 %}-{{ lossType }}-form{% endif %}", "outputProperty": "disabled", "value": true }
    ]
  }
] }' data-wb-format-gen='[
  { "eventTrigger": "edit-{{ lossType }}", "eventElement": "#{{ lossType }}-fields-container", "operations": [
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-action" ], "action": "replace", "data": "replace" },
    { "type": "dataAttribute", "element": "#save-{{ lossType }}", "key": "data-wb-format-gen", "indexesKeys": [ 0, "operations", 0, "indexesKeys", 9 ], "action": "replace", "data": { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-{{ lossType }}" ] } }
  ] },
  { "eventTrigger": "append-{{ lossType }}", "eventElement": "#{{ lossType }}-fields-container", "operations": [
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-action" ], "action": "replace", "data": "append" },
    { "type": "dataAttribute", "element": "#save-{{ lossType }}", "key": "data-wb-format-gen", "indexesKeys": [ 0, "operations", 0, "indexesKeys", 9 ], "action": "delete" }
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
<button id="save-{{ lossType }}" type="submit" disabled="disabled" class="btn btn-primary wb-format-gen wb-calculate" data-wb-calculate='[
  { "ignoreInit": true, "eventTrigger": "submit", "eventElement": "#{{ lossType }}-form", "listenerElement": "body", "returnFalse": true, "operations": [
      { "type": "action",
        "inputs": [
          { "type": "outputValue", "outputTarget": "#cancel-{{ lossType }}", "outputAttribute": "data-add-source", "value": "{{ lossType }}" },
          { "type": "event", "outputTarget": "#save-{{ lossType }}", "outputEvent": "save-{{ lossType }}-proceed" }
        ]
      }
    ]
  },
  { "ignoreInit": true, "eventTrigger": "save-{{ lossType }}-complete", "eventElement": "#save-{{ lossType }}", "operations": [
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
          { "type": "event", "outputTarget": "#save-{{ lossType }}", "outputEvent": "last-{{ lossType }}" }
        ],
        "actionsFalse": [
          { "type": "event", "outputTarget": "#{{ lossType }}-fields-container", "outputEvent": "append-{{ lossType }}" }
        ]
      },
      {
        "type": "action",
        "inputs": [
          { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": "default-{{ lossType }}-buttons" }
        ]
      }
  ] }
]' data-wb-format-gen='[
  { "eventTrigger": "save-{{ lossType }}-proceed", "eventElement": "#save-{{ lossType }}", "operations": [
    { "type": "sessionStorage", "key": "assessment", "indexesKeys": [
      { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ] },
      0, "activities",
      { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-activity" ] },
      0, "components",
      { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-component" ] },
      0, "{{ lossType }}"
    ], "source": "form-state", "container": "#{{ lossType }}-form",
    "action": { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-action" ] }
    },
    { "type": "event", "outputTarget": "#save-{{ lossType }}", "outputEvent": "save-{{ lossType }}-complete" }
  ] },
  { "eventTrigger": "last-{{ lossType }}", "eventElement": "#save-{{ lossType }}", "operations": [
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-{{ lossType }}" ], "action": "replace", "source": { "type": "sessionStorage", "key": "assessment", "indexesKeys": [
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
<button id="cancel-{{ lossType }}" type="button" disabled="disabled" class="btn btn-default wb-calculate" data-add-source="{{ lossType }}" data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#cancel-{{ lossType }}", "operations": [
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
          { "type": "string", "query": "#cancel-{{ lossType }}", "sourceAttribute": "data-add-source" },
          "{{ lossType }}"
        ]
      }
    ],
    "actionsTrue": [
      { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": { "type": "concat", "inputs": [
          "restore-", { "type": "string", "query": "#cancel-{{ lossType }}", "sourceAttribute": "data-add-source" }
        ] }
      },
      { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": { "type": "concat", "inputs": [
          "default-", { "type": "string", "query": "#cancel-{{ lossType }}", "sourceAttribute": "data-add-source" }, "-buttons"
        ] }
      },
      { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": { "type": "concat", "inputs": [
          "show-", { "type": "string", "query": "#cancel-{{ lossType }}", "sourceAttribute": "data-add-source" }
        ] }
      }
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
          { "type": "event", "outputTarget": "#{{ lossType }}-fields-container", "outputEvent": "append-{{ lossType }}" }
        ]
      },
      { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": "default-{{ lossType }}-buttons" },
      { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": "restore-{{ lossType }}" }
    ]
  }
] }'>{{ page.common.cancel }}</button>
<!-- Disabled by default. (TODO) Brings up a delete confirmation dialog. If confirmed, deletes the current loss of {{ lossType }} from memory, loads the previous loss of {{ lossType }} in the current form, or resets the form if no previous loss of {{ lossType }} exists. Also updates buttons across forms and enables/disabled buttons in the current form. -->
<button id="delete-{{ lossType }}" type="button" disabled="disabled" class="btn btn-default wb-calculate wb-format-gen" data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#delete-{{ lossType }}", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "event", "outputTarget": "#delete-{{ lossType }}", "outputEvent": "delete-{{ lossType }}-proceed" }
    ]
  }
] }' data-wb-format-gen='{ "eventTrigger": "delete-{{ lossType }}-proceed", "eventElement": "#delete-{{ lossType }}", "operations": [
  { "type": "sessionStorage", "key": "assessment", "indexesKeys": [
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ] },
    0, "activities",
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-activity" ] },
    0, "components",
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-component" ] },
    0, "{{ lossType }}",
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-{{ lossType }}" ] }
  ], "action": "delete" },
  { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-{{ lossType }}" ], "source": { "type": "sessionStorage", "key": "assessment", "indexesKeys":[
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-domain" ] },
    0, "activities",
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-activity" ] },
    0, "components",
    { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-component" ] },
    0, "{{ lossType }}"
  ], "action": "closestIndex", "source": { "type": "dataAttribute", "element": "#sec-cat-form-properties", "key": "data-sec-cat-form-state", "indexesKeys": [ "current-{{ lossType }}" ] } }, "action": "replace" },
  { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": "restore-{{ lossType }}" },
  { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": "default-{{ lossType }}-buttons" }
] }'>{{ page.common.delete }}</button>{%
assign lossTypeIndexInner = 0 %}{%
for lossTypeInner in page.lossTypes %}{%
  if lossTypeIndexInner == lossTypeIndex %}{%
    assign lossButton = "add-another-" | append: lossTypeInner | append: "-button" %}
<!-- Disabled by default. Resets the current form and enables/disables buttons in the current form. -->
<button id="add-another-{{ lossTypeInner }}" type="button" disabled="disabled" class="btn btn-default wb-format-gen wb-calculate" data-wb-format-gen='{ "eventTrigger": "click", "eventElement": "#add-another-{{ lossTypeInner }}", "operations": [
  { "resetForm": "#{{ lossTypeInner }}-form" }
] }' data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#add-another-{{ lossTypeInner }}", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "outputValue", "outputTarget": "#save-{{ lossTypeInner }}, #delete-{{ lossTypeInner }}, #add{% if lossTypeIndex == 0 %}-another{% endif %}-confidentiality{% if lossTypeIndex != 0 %}-{{ lossType }}-form{% endif %}, #add{% if lossTypeIndex == 1 %}-another{% endif %}-integrity{% if lossTypeIndex != 1 %}-{{ lossType }}-form{% endif %}, #add{% if lossTypeIndex == 2 %}-another{% endif %}-availability{% if lossTypeIndex != 2 %}-{{ lossType }}-form{% endif %}", "outputProperty": "disabled", "value": true },
      { "type": "outputValue", "outputTarget": "#cancel-{{ lossTypeInner }}", "outputProperty": "disabled", "value": false },
      { "type": "outputValue", "outputTarget": "#cancel-{{ lossTypeInner }}", "outputAttribute": "data-add-source", "value": "{{ lossType }}" },
      { "type": "event", "outputTarget": "#failure-scenario-{{ lossTypeInner }}", "outputEvent": "setfocus.wb" }
    ]
  }
] }'>{{ page[ lossTypeInner ][ lossButton ] }}</button>{%
  else %}{%
    assign lossButton = "add-" | append: lossTypeInner | append: "-button" %}
<!-- Disabled by default. Resets the loss of {{ lossTypeInner }} form, enables/disables buttons in the loss of {{ lossTypeInner }} form, shows the loss of {{ lossTypeInner }} form, hides this form. -->
<button id="add-{{ lossTypeInner }}-{{ lossType }}-form" type="button" disabled="disabled" class="btn btn-default wb-format-gen wb-calculate" data-wb-format-gen='{ "eventTrigger": "click", "eventElement": "#add-{{ lossTypeInner }}-{{ lossType }}-form", "operations": [
  { "resetForm": "#{{ lossTypeInner }}-form" }
] }' data-wb-calculate='{ "ignoreInit": true, "eventTrigger": "click", "eventElement": "#add-{{ lossTypeInner }}-{{ lossType }}-form", "operations": [
  { "type": "action",
    "inputs": [
      { "type": "outputValue", "outputTarget": "#save-{{ lossTypeInner }}, #delete-{{ lossTypeInner }}, #add{% if lossTypeIndex == 0 %}-another{% endif %}-confidentiality{% if lossTypeIndex != 0 %}-{{ lossType }}-form{% endif %}, #add{% if lossTypeIndex == 1 %}-another{% endif %}-integrity{% if lossTypeIndex != 1 %}-{{ lossType }}-form{% endif %}, #add{% if lossTypeIndex == 2 %}-another{% endif %}-availability{% if lossTypeIndex != 2 %}-{{ lossType }}-form{% endif %}", "outputProperty": "disabled", "value": true },
      { "type": "outputValue", "outputTarget": "#cancel-{{ lossTypeInner }}", "outputProperty": "disabled", "value": false },
      { "type": "outputValue", "outputTarget": "#cancel-{{ lossTypeInner }}", "outputAttribute": "data-add-source", "value": "{{ lossType }}" },
      { "type": "event", "outputTarget": "#sec-cat-form-properties", "outputEvent": "show-{{ lossTypeInner }}" }
    ]
  }
] }'>{{ page[ lossTypeInner ][ lossButton ] }}</button>{%
  endif %}{%
  assign lossTypeIndexInner = lossTypeIndexInner | plus: 1 %}{%
endfor %}
</div>

{% include views-vues/security-securite/categorization-tool-pagination-outil-categorisation.html itemType=lossType %}

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
<th rowspan="2">{{ page.domain.title }}</th>
<th rowspan="2">{{ page.activity[ "activity-label" ] }}</th>
<th colspan="4" class="text-center">{{ page.component.title }}</th>
<th colspan="4" class="text-center">{{ page.confidentiality.title }}</th>
<th colspan="4" class="text-center">{{ page.integrity.title }}</th>
<th colspan="4" class="text-center">{{ page.availability.title }}</th>
</tr>
<tr>
<th>{{ page.component[ "component-label" ] }}</th>
<th>{{ page.component[ "component-description-label" ] }}</th>
<th>{{ page.component[ "component-type-label" ] }}</th>
<th>{{ page.component[ "authoritative-source-label" ] }}</th>
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
