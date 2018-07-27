---
layout: default
title: Évaluation d'impact algorithmique (draft)
lang: fr
altLang: en
altLangPage: algorithmic-impact-assessment
collectionDirectory: views-vues/automated-decision-automatise
aiaCriteria: 
 - "Impact sur les individus et les entités"
 - "Impact sur les institutions gouvernementales"
 - "Gestion de données"
 - "Équité procédurale"
 - "Complexité"
criteriaThresholds:
 - [15, 40, 70]
 - [25, 50, 75]
 - [30, 60, 80]
 - [30, 60, 80]
 - [25, 50, 75]
multipliers:
 - []
 - []
 - [1, 1.15, 1.25, 1.5]
 - [0.5, 1, 2]
 - [0.5, 1, 2]
progressPercentThreshold: 1
---
{% assign dataVariable = site.playbookData[page.lang] %}{%
assign dataSource = site.data[dataVariable] %}
<section>

<div class="wb-inview" data-inview="progress-overlay">

## Introduction

</div>

Governments are increasingly looking to utilize Automated Decision Systems to make, or assist in making administrative decisions. However, questions are being raised as to how to adequately assess the impacts that these systems may have on Canadians and federal institutions. The aim of the proposed Algorithmic Impact Assessment is to develop a framework to help institutions better understand and mitigate the risks associated with Automated Decision Systems and to provide the appropriate governance, oversight and reporting/audit requirements that best match the type of application being designed. The AIA supports the TBS Standard on Automated Decision-Making.

In developing this proposed AIA Framework, the following three key goals have been identified:

- Increase capacity to evaluate the impact of Automated Decision Systems including legal and ethical issues, such as disparate impacts and due process violations;
- Recommend the appropriate governance, oversight and/or design recommendations to institutions based on their existing or proposed automated decision systems; and
- Provide a mechanism for greater openness and transparency for public consultation and external review of the design and deployment of Automated Decision Systems in the public sector.

</section>

<section>

## Questionnaire

<div class="wb-frmvld">
<form action="#" method="post">

<section>

### Discretion

<!-- Question 1 -->
<div id="question-1" class="wb-fieldflow wb-calculate" data-wb-fieldflow='{ "renderas": "checkbox", "noForm": true, "isoptional": true, "base": { "live": true } }' data-wb-calculate='{ "eventTrigger": "clean.wb-fieldflow", "eventElement": "#question-1", "ignoreInit": true, "operations": [
  { "type": "conditional",
    "inputs": [
      { "type": ">",
        "inputs": [
          { "type": "count", "query": ".question-1-checkbox-score:not(.hidden)" }, 0
        ]
      }
    ],
    "actionsTrue": [
      { "type": "removeClass", "outputTarget": ".question-1-checkbox-score span.hidden + span.hidden", "class": "hidden" },
      { "type": "event", "outputTarget": "#question-1", "outputEvent": "score-updated" }
    ]
  },
  { "type": "conditional",
    "inputs": [
      { "type": "==",
        "inputs": [
          { "type": "count", "query": "[data-wb-fieldflow-source=question-1] > div:nth-of-type(n+3) input:checked" }, 0
        ]
      }
    ],
    "actionsTrue": [
      { "type": "addClass", "outputTarget": "#question-1-1-wrapper, #question-1-1-result, #question-1-1-1-result, #question-1-1-2-result", "class": "hidden" },
      { "type": "event", "outputTarget": "#question-1", "outputEvent": "score-updated" }
    ]
  }
] }'>
<p>1. What parts of the decision-making process will be automated by this system? (Check all that apply)</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "toggle", "toggle": { "selector": ".question-1a-no", "type": "off" } },
  { "action": "toggle", "toggle": { "selector": ".question-1a-yes", "type": "on" }, "clean": ".question-1a-yes" }
]'>a. File triage or assignment</li>
<li data-wb-fieldflow='[
  { "action": "toggle", "toggle": { "selector": ".question-1b-no", "type": "off" } },
  { "action": "toggle", "toggle": { "selector": ".question-1b-yes", "type": "on" }, "clean": ".question-1b-yes" }
]'>b. Risk scoring or categorization</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": "#question-1-1-wrapper, #question-1-1-result, #question-1-1-1-result.nested-active, #question-1-1-2-result.nested-active", "class": "hidden" },
  { "action": "toggle", "toggle": { "selector": ".question-1c-no", "type": "off" } },
  { "action": "toggle", "toggle": { "selector": ".question-1c-yes", "type": "on" }, "clean": ".question-1c-yes" }
]'>c. Recommendation to take a certain course of action</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": "#question-1-1-wrapper, #question-1-1-result, #question-1-1-1-result.nested-active, #question-1-1-2-result.nested-active", "class": "hidden" },
  { "action": "toggle", "toggle": { "selector": ".question-1d-no", "type": "off" } },
  { "action": "toggle", "toggle": { "selector": ".question-1d-yes", "type": "on" }, "clean": ".question-1d-yes" }
]'>d. Full end-to-end decision</li>
</ul>
</div>

<!-- Question 1.1 -->
<div id="question-1-1-wrapper" class="hidden">
<div id="question-1-1" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "noForm": true, "inline": true, "base": { "live": true } }'>
<p>1.1 Does the recommendation or decision made by the system involve discretion?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-1-1-yes, #question-1-1-1-1-1-2-wrapper, #question-1-1-1-result, #question-1-1-2-result", "class": "hidden" },
  { "action": "addClass", "source": ".question-1-1-no", "class": "hidden" },
  { "action": "addClass", "source": "#question-1-1-1-result, #question-1-1-2-result", "class": "nested-active" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-1-1-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-1-1-yes, #question-1-1-1-1-1-2-wrapper, #question-1-1-1-result, #question-1-1-2-result", "class": "hidden" },
  { "action": "removeClass", "source": "#question-1-1-1-result, #question-1-1-2-result", "class": "nested-active" }
]'>No</li>
</ul>
</div>

<div id="question-1-1-1-1-1-2-wrapper" class="hidden">
<!-- Question 1.1.1 -->
<div id="question-1-1-1" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "noForm": true, "inline": true, "base": { "live": true } }'>
<p>1.1.1 Is the decision purely discretionary? (e.g., review on compassionate grounds)</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-1-1-1-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-1-1-1-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-1-1-1-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-1-1-1-yes", "class": "hidden" }
]'>No</li>
</ul>
</div>

<!-- Question 1.1.2 -->
<div id="question-1-1-2" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "noForm": true, "inline": true, "base": { "live": true } }'>
<p>1.1.2 Have all the decision points that involve the exercise of discretion or judgement been clearly idenified as requiring human input?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-1-1-2-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-1-1-2-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-1-1-2-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-1-1-2-yes", "class": "hidden" }
]'>No</li>
</ul>
</div>
</div>
</div>

</section>

<section>

### Scope

<!-- Question 2 -->
<div id="question-2" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>2. Can this automated system result in the restriction of movement into, out of, or within Canada?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-2-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-2-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-2-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-2-yes", "class": "hidden" }
]'>No</li>
</ul>
</div>

<!-- Question 3 -->
<div id="question-3" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>3. Can this system infer or predict potential criminal activity?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-3-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-3-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-3-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-3-yes", "class": "hidden" }
]'>No</li>
</ul>
</div>

<!-- Question 4 -->
<div id="question-4" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>4. Can this system result in granting or restricting access to a premises or network?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-4-yes, #question-4-1-wrapper, #question-4-1-result", "class": "hidden" },
  { "action": "addClass", "source": ".question-4-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-4-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-4-yes, #question-4-1-wrapper, #question-4-1-result", "class": "hidden" }
]'>No</li>
</ul>
</div>

<!-- Question 4.1 -->
<div id="question-4-1-wrapper" class="hidden">
<div id="question-4-1" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "noForm": true, "base": { "live": true }, "default": { "action": "addClass", "source": ".question-4-1-none, .question-4-1-protected, .question-4-1-protected-a, .question-4-1-protected-b, .question-4-1-protected-c, .question-4-1-classified, .question-4-1-confidential, .question-4-1-secret, .question-4-1-top-secret", "class": "hidden" } }'>
<p>4.1 What is the classfication of the premises? (Select one)</p>
<ul>
<li data-wb-fieldflow='{ "action": "removeClass", "source": ".question-4-1-none", "class": "hidden" }'>None</li>
<li data-wb-fieldflow='{ "action": "removeClass", "source": ".question-4-1-protected", "class": "hidden" }'>Protected</li>
<li data-wb-fieldflow='{ "action": "removeClass", "source": ".question-4-1-protected-a", "class": "hidden" }'>Protected A</li>
<li data-wb-fieldflow='{ "action": "removeClass", "source": ".question-4-1-protected-b", "class": "hidden" }'>Protected B</li>
<li data-wb-fieldflow='{ "action": "removeClass", "source": ".question-4-1-protected-c", "class": "hidden" }'>Protected C</li>
<li data-wb-fieldflow='{ "action": "removeClass", "source": ".question-4-1-classified", "class": "hidden" }'>Classified</li>
<li data-wb-fieldflow='{ "action": "removeClass", "source": ".question-4-1-confidential", "class": "hidden" }'>Confidential</li>
<li data-wb-fieldflow='{ "action": "removeClass", "source": ".question-4-1-secret", "class": "hidden" }'>Secret</li>
<li data-wb-fieldflow='{ "action": "removeClass", "source": ".question-4-1-top-secret", "class": "hidden" }'>Top Secret</li>
</ul>
</div>
</div>

<!-- Question 5 -->
<div id="question-5" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>5. Does this system provide funds to an individual, business, or community?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-5-yes, #question-5-1-5-2-wrapper, #question-5-1-result, #question-5-1-1-result.nested-active, #question-5-2-result, #question-5-2-1-result.nested-active", "class": "hidden" },
  { "action": "addClass", "source": ".question-5-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-5-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-5-yes, #question-5-1-5-2-wrapper, #question-5-1-result, #question-5-1-1-result, #question-5-2-result, #question-5-2-1-result", "class": "hidden" }
]'>No</li>
</ul>
</div>

<div id="question-5-1-5-2-wrapper" class="hidden">
<!-- Question 5.1 -->
<div id="question-5-1" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>5.1 Is this funding for a social or economic support program?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-5-1-yes, #question-5-1-1-wrapper, #question-5-1-1-result", "class": "hidden" },
  { "action": "addClass", "source": ".question-5-1-no", "class": "hidden" },
  { "action": "addClass", "source": "#question-5-1-1-result", "class": "nested-active" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-5-1-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-5-1-yes, #question-5-1-1-wrapper, #question-5-1-1-result", "class": "hidden" },
  { "action": "removeClass", "source": "#question-5-1-1-result", "class": "nested-active" }
]'>No</li>
</ul>
</div>

<!-- Question 5.1.1 -->
<div id="question-5-1-1-wrapper" class="hidden">
<div id="question-5-1-1" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>5.1.1 If funding were to be denied, could it leave the client in a precarious economic positions? (e.g., could render and individual homeless or a business to close)</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-5-1-1-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-5-1-1-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-5-1-1-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-5-1-1-yes", "class": "hidden" }
]'>No</li>
</ul>
</div>
</div>

<!-- Question 5.2 -->
<div id="question-5-2" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>5.2 Does the system issue transfer payments?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-5-2-yes, #question-5-2-1-wrapper, #question-5-2-1-result", "class": "hidden" },
  { "action": "addClass", "source": ".question-5-2-no", "class": "hidden" },
  { "action": "addClass", "source": "#question-5-2-1-result", "class": "nested-active" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-5-2-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-5-2-yes, #question-5-2-1-wrapper, #question-5-2-1-result", "class": "hidden" },
  { "action": "removeClass", "source": "#question-5-2-1-result", "class": "nested-active" }
]'>No</li>
</ul>
</div>

<!-- Question 5.2.1 -->
<div id="question-5-2-1-wrapper" class="hidden">
<div id="question-5-2-1" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>5.2.1 Is this grant, conribution, or transfer payment in excess of $5,000,000?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-5-2-1-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-5-2-1-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-5-2-1-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-5-2-1-yes", "class": "hidden" }
]'>No</li>
</ul>
</div>
</div>
</div>

<!-- Question 6 -->
<div id="question-6" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>6. Does this system, result in the issuance of a fine, administrative monetary penalty, or a debt collection notice?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-6-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-6-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-6-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-6-yes", "class": "hidden" }
]'>No</li>
</ul>
</div>

<!-- Question 7 -->
<div id="question-7" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>7. Does this system result in the issuance of a permit, license, patent, or trademark?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-7-yes, #question-7-1-7-2-7-3-wrapper, #question-7-1-result, #question-7-1-1-result.nested-active, #question-7-2-result, #question-7-3-result", "class": "hidden" },
  { "action": "addClass", "source": ".question-7-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-7-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-7-yes, #question-7-1-7-2-7-3-wrapper, #question-7-1-result, #question-7-2-result, #question-7-1-1-result, #question-7-2-result, #question-7-3-result", "class": "hidden" }
]'>No</li>
</ul>
</div>

<div id="question-7-1-7-2-7-3-wrapper" class="hidden">
<!-- Question 7.1 -->
<div id="question-7-1" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>7.1 Does this involve the collection, transportation, storage, purchase or sale of a regulated good or substance?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-7-1-yes, #question-7-1-1-wrapper, #question-7-1-1-result", "class": "hidden" },
  { "action": "addClass", "source": ".question-7-1-no", "class": "hidden" },
  { "action": "addClass", "source": "#question-7-1-1-result", "class": "nested-active" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-7-1-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-7-1-yes, #question-7-1-1-wrapper, #question-7-1-1-result", "class": "hidden" },
  { "action": "removeClass", "source": "#question-7-1-1-result", "class": "nested-active" }
]'>No</li>
</ul>
</div>

<!-- Question 7.1.1 -->
<div id="question-7-1-1-wrapper" class="hidden">
<div id="question-7-1-1" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>7.1.1 Does this involve the collection, transportation, storage, purchase or sale of a regulated good or substance?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-7-1-1-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-7-1-1-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-7-1-1-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-7-1-1-yes", "class": "hidden" }
]'>No</li>
</ul>
</div>
</div>

<!-- Question 7.2 -->
<div id="question-7-2" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>7.2 Is this a construction or environmental permit?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-7-2-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-7-2-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-7-2-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-7-2-yes", "class": "hidden" }
]'>No</li>
</ul>
</div>

<!-- Question 7.3 -->
<div id="question-7-3" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>7.3 Is this a patent or trademark?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-7-3-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-7-3-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-7-3-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-7-3-yes", "class": "hidden" }
]'>No</li>
</ul>
</div>
</div>

<!-- Question 8 -->
<div id="question-8" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>8. Does this system confer a legal status that is otherwise required to receive a benefit or service (e.g., Indian status, veteran status)?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-8-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-8-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-8-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-8-yes", "class": "hidden" }
]'>No</li>
</ul>
</div>

<!-- Question 9 -->
<div id="question-9" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>9. Does this system involve the distribution of human resources or material in the management of emergencies?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-9-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-9-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-9-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-9-yes", "class": "hidden" }
]'>No</li>
</ul>
</div>

<!-- Question 10 -->
<div id="question-10" class="wb-fieldflow wb-calculate" data-wb-fieldflow='{ "renderas": "checkbox", "noForm": true, "isoptional": true, "base": { "live": true } }' data-wb-calculate='{ "eventTrigger": "clean.wb-fieldflow", "eventElement": "#question-10", "ignoreInit": true, "operations": [
  { "type": "conditional",
    "inputs": [
      { "type": ">",
        "inputs": [
          { "type": "count", "query": ".question-10-checkbox-score:not(.hidden)" }, 0
        ]
      }
    ],
    "actionsTrue": [
      { "type": "removeClass", "outputTarget": ".question-10-checkbox-score span.hidden + span.hidden", "class": "hidden" },
      { "type": "event", "outputTarget": "#question-10", "outputEvent": "score-updated" }
    ]
  }
] }'>
<p>10. What are the key business drivers for automating the administrative decision-making process? (Check all that apply)</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "toggle", "toggle": { "selector": ".question-10a-no", "type": "off" } },
  { "action": "toggle", "toggle": { "selector": ".question-10a-yes", "type": "on" }, "clean": ".question-10a-yes" }
]'>a. Existing backlog of work or cases</li>
<li data-wb-fieldflow='[
  { "action": "toggle", "toggle": { "selector": ".question-10b-no", "type": "off" } },
  { "action": "toggle", "toggle": { "selector": ".question-10b-yes", "type": "on" }, "clean": ".question-10b-yes" }
]'>b. Improve overall quality of decisions</li>
<li data-wb-fieldflow='[
  { "action": "toggle", "toggle": { "selector": ".question-10c-no", "type": "off" } },
  { "action": "toggle", "toggle": { "selector": ".question-10c-yes", "type": "on" }, "clean": ".question-10c-yes" }
]'>c. Lower transaction costs of an existing program</li>
<li data-wb-fieldflow='[
  { "action": "toggle", "toggle": { "selector": ".question-10d-no", "type": "off" } },
  { "action": "toggle", "toggle": { "selector": ".question-10d-yes", "type": "on" }, "clean": ".question-10d-yes" }
]'>d. The system is performing tasks that humans could not accomplish in a reasonable period of time</li>
<li data-wb-fieldflow='[
  { "action": "toggle", "toggle": { "selector": ".question-10e-no", "type": "off" } },
  { "action": "toggle", "toggle": { "selector": ".question-10e-yes", "type": "on" }, "clean": ".question-10e-yes" }
]'>e. Improve client service delivery</li>
<li data-wb-fieldflow='[
  { "action": "toggle", "toggle": { "selector": ".question-10f-no", "type": "off" } },
  { "action": "toggle", "toggle": { "selector": ".question-10f-yes", "type": "on" }, "clean": ".question-10f-yes" }
]'>f. Using innovative approaches</li>
</ul>
</div>

<!-- Question 11 -->
<div id="question-11" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>11. Is the scope of the system clearly reflected in project documentation?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-11-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-11-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-11-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-11-yes", "class": "hidden" }
]'>No</li>
</ul>
</div>

<!-- Question 12 -->
<fieldset>
<legend class="mrgn-bttm-0 h5 required">12. Has the design team consulted the following experts within their organization? <strong class="required">(required)</strong></legend>
<div class="clearfix"></div>

<div id="question-12a" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>a. Communications</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-12a-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-12a-no, .question-12a-na", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-12a-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-12a-yes, .question-12a-na", "class": "hidden" }
]'>No</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-12a-na", "class": "hidden" },
  { "action": "addClass", "source": ".question-12a-yes, .question-12a-no", "class": "hidden" }
]'>Not applicable</li>
</ul>
</div>

<div id="question-12b" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>b. Data and Information Management</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-12b-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-12b-no, .question-12b-na", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-12b-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-12b-yes, .question-12b-na", "class": "hidden" }
]'>No</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-12b-na", "class": "hidden" },
  { "action": "addClass", "source": ".question-12b-yes, .question-12b-no", "class": "hidden" }
]'>Not applicable</li>
</ul>
</div>

<div id="question-12c" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>c. Enterprise Architecture</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-12c-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-12c-no, .question-12c-na", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-12c-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-12c-yes, .question-12c-na", "class": "hidden" }
]'>No</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-12c-na", "class": "hidden" },
  { "action": "addClass", "source": ".question-12c-yes, .question-12c-no", "class": "hidden" }
]'>Not applicable</li>
</ul>
</div>

<div id="question-12d" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>d. Human Resources</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-12d-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-12d-no, .question-12d-na", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-12d-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-12d-yes, .question-12d-na", "class": "hidden" }
]'>No</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-12d-na", "class": "hidden" },
  { "action": "addClass", "source": ".question-12d-yes, .question-12d-no", "class": "hidden" }
]'>Not applicable</li>
</ul>
</div>

<div id="question-12e" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>e. IT/Cybersecurity</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-12e-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-12e-no, .question-12e-na", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-12e-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-12e-yes, .question-12e-na", "class": "hidden" }
]'>No</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-12e-na", "class": "hidden" },
  { "action": "addClass", "source": ".question-12e-yes, .question-12e-no", "class": "hidden" }
]'>Not applicable</li>
</ul>
</div>

<div id="question-12f" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>f. Legal</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-12f-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-12f-no, .question-12f-na", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-12f-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-12f-yes, .question-12f-na", "class": "hidden" }
]'>No</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-12f-na", "class": "hidden" },
  { "action": "addClass", "source": ".question-12f-yes, .question-12f-no", "class": "hidden" }
]'>Not applicable</li>
</ul>
</div>

<div id="question-12g" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>g. Service Delivery</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-12g-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-12g-no, .question-12g-na", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-12g-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-12g-yes, .question-12g-na", "class": "hidden" }
]'>No</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-12g-na", "class": "hidden" },
  { "action": "addClass", "source": ".question-12g-yes, .question-12g-no", "class": "hidden" }
]'>Not applicable</li>
</ul>
</div>

<div id="question-12h" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>h. Privacy</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-12h-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-12h-no, .question-12h-na", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-12h-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-12h-yes, .question-12h-na", "class": "hidden" }
]'>No</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-12h-na", "class": "hidden" },
  { "action": "addClass", "source": ".question-12h-yes, .question-12h-no", "class": "hidden" }
]'>Not applicable</li>
</ul>
</div>

</fieldset>

<!-- Question 13 -->
<div id="question-13" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>13. Have you developed Key Performance Indicators and benchmarks to measure and improve the system’s performance?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-13-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-13-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-13-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-13-yes", "class": "hidden" }
]'>No</li>
</ul>
</div>

<!-- Question 14 -->
<div id="question-14" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>14. Is there a process in place to document how data quality issues were resolved during the design process?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-14-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-14-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-14-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-14-yes", "class": "hidden" }
]'>No</li>
</ul>
</div>

<!-- Question 15 -->
<div id="question-15" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>15. Have appropriate strategies been developed to manage the risk that outdated or unreliable data is used to make an automated decision?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-15-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-15-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-15-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-15-yes", "class": "hidden" }
]'>No</li>
</ul>
</div>

<!-- Question 16 -->
<div id="question-16" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>16. Have you undertaken <a href="https://www.swc-cfc.gc.ca/gba-acs/approach-approche-en.html" target="_blank" rel="external">Gender Based Analysis Plus</a> of the training data?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-16-yes, #question-16-1-wrapper, #question-16-1-result", "class": "hidden" },
  { "action": "addClass", "source": ".question-16-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-16-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-16-yes, #question-16-1-wrapper, #question-16-1-result", "class": "hidden" }
]'>No</li>
</ul>
</div>

<!-- Question 16.1 -->
<div id="question-16-1-wrapper" class="hidden">
<div id="question-16-1" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>16.1 Have you documented mitigation strategies?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-16-1-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-16-1-no, .question-16-1-na", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-16-1-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-16-1-yes, .question-16-1-na", "class": "hidden" }
]'>No</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-16-1-na", "class": "hidden" },
  { "action": "addClass", "source": ".question-16-1-yes, .question-16-1-no", "class": "hidden" }
]'>Not applicable</li>
</ul>
</div>
</div>

<!-- Question 17 -->
<div id="question-17" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>17. Will your system make decisions specifically about Indigenous peoples or territory?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-17-yes, #question-17-1-wrapper, #question-17-1-result", "class": "hidden" },
  { "action": "addClass", "source": ".question-17-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-17-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-17-yes, #question-17-1-wrapper, #question-17-1-result", "class": "hidden" }
]'>No</li>
</ul>
</div>

<div id="question-17-1-wrapper" class="hidden">
<!-- Question 17.1 -->
<div id="question-17-1" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>17.1 Have you engaged relevant Indigenous organizations in meaningful consultation in the design of the system?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-17-1-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-17-1-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-17-1-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-17-1-yes", "class": "hidden" }
]'>No</li>
</ul>
</div>
</div>

<!-- Question 18 -->
<div id="question-18" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>18. Does your system use contactless machine vision for biometric recognition (e.g. facial, full-body person, gait)?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-18-yes, #question-18-1-18-2-wrapper, #question-18-1-result, #question-18-2-result", "class": "hidden" },
  { "action": "addClass", "source": ".question-18-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-18-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-18-yes, #question-18-1-18-2-wrapper, #question-18-1-result, #question-18-2-result", "class": "hidden" }
]'>No</li>
</ul>
</div>

<div id="question-18-1-18-2-wrapper" class="hidden">
<!-- Question 18.1 -->
<div id="question-18-1" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>18.1 Does your system perform within acceptable parameters for all skin colours as defined by the Fitzpatrick Skin Type scale or similar measurement?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-18-1-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-18-1-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-18-1-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-18-1-yes", "class": "hidden" }
]'>No</li>
</ul>
</div>

<!-- Question 18.2 -->
<div id="question-18-2" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>18.2 Where applicable, have you tested to ensure that the system performs within acceptable parameters with persons who have a disability that may cause them to be unduly disadvantaged by the machine vision component? (e.g., ensuring that a gait analysis tool does not unduly disadvantage an individual that uses a wheelchair)?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-18-2-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-18-2-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-18-2-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-18-2-yes", "class": "hidden" }
]'>No</li>
</ul>
</div>
</div>

<!-- Question 19 -->
<div id="question-19" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>19. Does the governance structure assign accountability for the design, development, maintenance, and improvement of the system?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-19-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-19-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-19-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-19-yes", "class": "hidden" }
]'>No</li>
</ul>
</div>

<!-- Question 20 -->
<div id="question-20" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>20. Does the system interface with other IT systems?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-20-yes, #question-20-1-20-2-wrapper, #question-20-1-result, #question-20-2-result", "class": "hidden" },
  { "action": "addClass", "source": ".question-20-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-20-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-20-yes, #question-20-1-20-2-wrapper, #question-20-1-result, #question-20-2-result", "class": "hidden" }
]'>No</li>
</ul>
</div>

<div id="question-20-1-20-2-wrapper" class="hidden">
<!-- Question 20.1 -->
<div id="question-20-1" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>20.1 Where it interfaces with other systems, have you clearly identified the business processes that occur between systems?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-20-1-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-20-1-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-20-1-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-20-1-yes", "class": "hidden" }
]'>No</li>
</ul>
</div>

<!-- Question 20.2 -->
<div id="question-20-2" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>20.2 Have you gone to the Enterprise Architecture Review Board with a concept case^</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-20-2-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-20-2-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-20-2-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-20-2-yes", "class": "hidden" }
]'>No</li>
</ul>
</div>
</div>

<!-- Question 21 -->
<fieldset>
<legend class="mrgn-bttm-0 h5 required">21. Are you planning to make information about system functionality publicly available? <strong class="required">(required)</strong></legend>
<div class="clearfix"></div>

<div id="question-21a" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>a. Training data sources</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-21a-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-21a-no, .question-21a-na", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-21a-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-21a-yes, .question-21a-na", "class": "hidden" }
]'>No</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-21a-na", "class": "hidden" },
  { "action": "addClass", "source": ".question-21a-yes, .question-21a-no", "class": "hidden" }
]'>Not applicable</li>
</ul>
</div>

<div id="question-21b" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>b. Decision trees</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-21b-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-21b-no, .question-21b-na", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-21b-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-21b-yes, .question-21b-na", "class": "hidden" }
]'>No</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-21b-na", "class": "hidden" },
  { "action": "addClass", "source": ".question-21b-yes, .question-21b-no", "class": "hidden" }
]'>Not applicable</li>
</ul>
</div>

<div id="question-21c" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>c. Confidence thresholds</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-21c-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-21c-no, .question-21c-na", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-21c-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-21c-yes, .question-21c-na", "class": "hidden" }
]'>No</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-21c-na", "class": "hidden" },
  { "action": "addClass", "source": ".question-21c-yes, .question-21c-no", "class": "hidden" }
]'>Not applicable</li>
</ul>
</div>

<div id="question-21d" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>d. Pre-defined models</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-21d-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-21d-no, .question-21d-na", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-21d-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-21d-yes, .question-21d-na", "class": "hidden" }
]'>No</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-21d-na", "class": "hidden" },
  { "action": "addClass", "source": ".question-21d-yes, .question-21d-no", "class": "hidden" }
]'>Not applicable</li>
</ul>
</div>

<div id="question-21e" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>e. Criteria</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-21e-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-21e-no, .question-21e-na", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-21e-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-21e-yes, .question-21e-na", "class": "hidden" }
]'>No</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-21e-na", "class": "hidden" },
  { "action": "addClass", "source": ".question-21e-yes, .question-21e-no", "class": "hidden" }
]'>Not applicable</li>
</ul>
</div>

<div id="question-21f" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>f. Classification structures</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-21f-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-21f-no, .question-21f-na", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-21f-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-21f-yes, .question-21f-na", "class": "hidden" }
]'>No</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-21f-na", "class": "hidden" },
  { "action": "addClass", "source": ".question-21f-yes, .question-21f-no", "class": "hidden" }
]'>Not applicable</li>
</ul>
</div>

</fieldset>

<!-- Question 22 -->
<div id="question-22" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>22. Have the system design and processes been reviewed by the appropriate Legal Services Unit and other legal experts, as required?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-22-yes, #question-22-1-22-2-wrapper, #question-22-1-result, #question-22-2-result", "class": "hidden" },
  { "action": "addClass", "source": ".question-22-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-22-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-22-yes, #question-22-1-22-2-wrapper, #question-22-1-result, #question-22-2-result", "class": "hidden" }
]'>No</li>
</ul>
</div>

<div id="question-22-1-22-2-wrapper" class="hidden">
<!-- Question 22.1 -->
<div id="question-22-1" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>22.1 Has a formal opinion been issued?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-22-1-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-22-1-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-22-1-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-22-1-yes", "class": "hidden" }
]'>No</li>
</ul>
</div>

<!-- Question 22.2 -->
<div id="question-22-2" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>22.2 Have the relevant areas of legislation been identified during the scoping phase?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-22-2-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-22-2-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-22-2-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-22-2-yes", "class": "hidden" }
]'>No</li>
</ul>
</div>
</div>

<!-- Question 23 -->
<div id="question-23" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>23. Does the Automated Decision System require the use of personal information?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-23-yes, #question-23-1-wrapper, #question-23-1-result", "class": "hidden" },
  { "action": "addClass", "source": ".question-23-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-23-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-23-yes, #question-23-1-wrapper, #question-23-1-result", "class": "hidden" }
]'>No</li>
</ul>
</div>

<!-- Question 23.1 -->
<div id="question-23-1-wrapper" class="hidden">
<div id="question-23-1" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>23.1 Does the program have an existing Privacy Impact Assessment?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-23-1-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-23-1-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-23-1-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-23-1-yes", "class": "hidden" }
]'>No</li>
</ul>
</div>
</div>

<!-- Question 24 -->
<div id="question-24" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "noForm": true, "base": { "live": true }, "default": { "action": "addClass", "source": ".question-24-protected, .question-24-protected-a, .question-24-protected-b, .question-24-protected-c, .question-24-classified, .question-24-confidential, .question-24-secret, .question-24-top-secret", "class": "hidden" } }'>
<p>24. What is the security classfication of the input data used by the system? (Select one)</p>
<ul>
<li data-wb-fieldflow='{ "action": "removeClass", "source": ".question-24-protected", "class": "hidden" }'>Protected</li>
<li data-wb-fieldflow='{ "action": "removeClass", "source": ".question-24-protected-a", "class": "hidden" }'>Protected A</li>
<li data-wb-fieldflow='{ "action": "removeClass", "source": ".question-24-protected-b", "class": "hidden" }'>Protected B</li>
<li data-wb-fieldflow='{ "action": "removeClass", "source": ".question-24-protected-c", "class": "hidden" }'>Protected C</li>
<li data-wb-fieldflow='{ "action": "removeClass", "source": ".question-24-classified", "class": "hidden" }'>Classified</li>
<li data-wb-fieldflow='{ "action": "removeClass", "source": ".question-24-confidential", "class": "hidden" }'>Confidential</li>
<li data-wb-fieldflow='{ "action": "removeClass", "source": ".question-24-secret", "class": "hidden" }'>Secret</li>
<li data-wb-fieldflow='{ "action": "removeClass", "source": ".question-24-top-secret", "class": "hidden" }'>Top Secret</li>
</ul>
</div>

<!-- Question 25 -->
<div id="question-25" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>25. Have you conducted a Security Assessment and Authorization?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-25-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-25-no, .question-25-na", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-25-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-25-yes, .question-25-na", "class": "hidden" }
]'>No</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-25-na", "class": "hidden" },
  { "action": "addClass", "source": ".question-25-yes, .question-25-no", "class": "hidden" }
]'>Not applicable</li>
</ul>
</div>

<!-- Question 26 -->
<div id="question-26" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>26. Is there a process in place to monitor and grant access permission?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-26-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-26-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-26-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-26-yes", "class": "hidden" }
]'>No</li>
</ul>
</div>

<!-- Question 27 -->
<div id="question-27" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>27. Does the system enable human override of system decisions?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-27-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-27-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-27-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-27-yes", "class": "hidden" }
]'>No</li>
</ul>
</div>

<!-- Question 28 -->
<div id="question-28" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>28. Does the system enable override of human decisions?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-28-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-28-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-28-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-28-yes", "class": "hidden" }
]'>No</li>
</ul>
</div>

<!-- Question 29 -->
<div id="question-29" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>29. Does the system enable the override of other automated decision systems?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-29-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-29-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-29-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-29-yes", "class": "hidden" }
]'>No</li>
</ul>
</div>

<!-- Question 30 -->
<div id="question-30" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>30. Do you have processes in place to log the instances where overrides were performed?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-30-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-30-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-30-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-30-yes", "class": "hidden" }
]'>No</li>
</ul>
</div>

<!-- Question 31 -->
<div id="question-31" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>31. Do you have a process in place to test and verify business rules?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-31-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-31-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-31-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-31-yes", "class": "hidden" }
]'>No</li>
</ul>
</div>

<!-- Question 32 -->
<div id="question-32" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>32. Did you develop verification processes to test for unintentional outcomes?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-32-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-32-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-32-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-32-yes", "class": "hidden" }
]'>No</li>
</ul>
</div>

<!-- Question 33 -->
<div id="question-33" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>33. Is the system used by a different part of the organization than the ones who developed it?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-33-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-33-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-33-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-33-yes", "class": "hidden" }
]'>No</li>
</ul>
</div>

<!-- Question 34 -->
<div id="question-34" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>34. Did you develop training programs or documentation to ensure that the system is used effectively and properly?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-34-yes, #question-34-1-wrapper, #question-34-1-result", "class": "hidden" },
  { "action": "addClass", "source": ".question-34-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-34-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-34-yes, #question-34-1-wrapper, #question-34-1-result", "class": "hidden" }
]'>No</li>
</ul>
</div>

<!-- Question 34.1 -->
<div id="question-34-1-wrapper" class="hidden">
<div id="question-34-1" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>34.1 Do you have the means to ensure that training requirements are being met?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-34-1-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-34-1-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-34-1-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-34-1-yes", "class": "hidden" }
]'>No</li>
</ul>
</div>
</div>

<!-- Question 35 -->
<div id="question-35" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>35. Can the system provide an audit trail that records recommendations or decisions?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-35-yes, #question-35-1-35-2-35-3-wrapper, #question-35-1-result, #question-35-2-result, #question-35-3-result", "class": "hidden" },
  { "action": "addClass", "source": ".question-35-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-35-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-35-yes, #question-35-1-35-2-35-3-wrapper, #question-35-1-result, #question-35-2-result, #question-35-3-result", "class": "hidden" }
]'>No</li>
</ul>
</div>

<div id="question-35-1-35-2-35-3-wrapper" class="hidden">
<!-- Question 35.1 -->
<div id="question-35-1" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>35.1 Does the audit trail clearly set out all decision points made by the system?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-35-1-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-35-1-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-35-1-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-35-1-yes", "class": "hidden" }
]'>No</li>
</ul>
</div>

<!-- Question 35.2 -->
<div id="question-35-2" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>35.2 Have you included change control processes in the audit trail to record modifications to the system's operation or performance?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-35-2-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-35-2-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-35-2-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-35-2-yes", "class": "hidden" }
]'>No</li>
</ul>
</div>

<!-- Question 35.3 -->
<div id="question-35-3" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>35.3 Does the audit trail show who an authorized decision-maker is?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-35-3-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-35-3-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-35-3-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-35-3-yes", "class": "hidden" }
]'>No</li>
</ul>
</div>
</div>

<!-- Question 36 -->
<div id="question-36" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>36. Is the system capable of incorporating recommendations or decisions into a statement, reasons or other written notification, where required?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-36-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-36-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-36-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-36-yes", "class": "hidden" }
]'>No</li>
</ul>
</div>

<!-- Question 37 -->
<div id="question-37" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>37. If the system is intended to undertake tasks currently undertaken by human staff, have you engaged with your departmental human resources?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-37-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-37-no, .question-37-na", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-37-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-37-yes, .question-37-na", "class": "hidden" }
]'>No</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-37-na", "class": "hidden" },
  { "action": "addClass", "source": ".question-37-yes, .question-37-no", "class": "hidden" }
]'>Not applicable</li>
</ul>
</div>

<!-- Question 38 -->
<div id="question-38" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>38. Have you developed a communications strategy to address any potential changes to work practices for officers?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-38-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-38-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-38-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-38-yes", "class": "hidden" }
]'>No</li>
</ul>
</div>

<!-- Question 39 -->
<div id="question-39" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>39. Have you established appropriate user/client feedback mechanisms?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-39-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-39-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-39-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-39-yes", "class": "hidden" }
]'>No</li>
</ul>
</div>

<!-- Question 40 -->
<div id="question-40" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "inline": true, "noForm": true, "base": { "live": true } }'>
<p>40. Do you have a recourse process planned or established for clients that wish to challenge the decision?</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-40-yes", "class": "hidden" },
  { "action": "addClass", "source": ".question-40-no", "class": "hidden" }
]'>Yes</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-40-no", "class": "hidden" },
  { "action": "addClass", "source": ".question-40-yes", "class": "hidden" }
]'>No</li>
</ul>
</div>

</section>

</form>
</div>
</section>

{% include views-vues/automated-decision-automatise/aia-questionnaire-eia.html %}
