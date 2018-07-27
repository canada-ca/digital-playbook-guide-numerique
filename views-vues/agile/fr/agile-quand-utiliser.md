---
layout: default
title: Est-ce que Agile est juste pour mon projet? (ébauche)
lang: fr
altLang: en
altLangPage: agile-use-when
collectionDirectory: views-vues/agile
criteria:
 - "Customer Availability"
 - "Scope / Features"
 - "Requirements"
 - "Feature Prioritization"
 - "Team"
 - "Funding"
 - "Track Record of Success"
 - "Software Development Project"
 - "Co-location"
 - "Proactive Product Owners"
 - "Teamwork and Collaboration"
 - "Willingness to Fail and Learn"
criteriaAgilePoints: [ 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10 ]
---
{% assign dataVariable = site.playbookData[page.lang] %}{%
assign dataSource = site.data[dataVariable] %}
<section>

<div class="wb-inview" data-inview="progress-overlay">

## Introduction

</div>

L'objectif de ce questionnaire est d'aider à déterminer si Agile est bon pour votre projet. Il n'est pas destiné à prendre la décision pour vous mais à aider à informer cette décision.

Les questions de ce questionnaire sont inspirées des ressources suivantes&#160;:

<!-- markdownlint-disable MD032 -->
- [Waterfall vs. Agile: Which is the Right Development Methodology for Your Project? (Segue Technologies)](https://www.seguetech.com/waterfall-vs-agile-methodology/)
- [How to Know If Agile Is Right for You (ProjectManager.com)](https://www.projectmanager.com/blog/know-agile-right)
{: .lst-spcd lang="en"}
<!-- markdownlint-enable MD032 -->

</section>

<section>

## Questionnaire

<div id="agile-use-when-questionnaire" class="wb-frmvld">
<form action="#" method="post">

<!-- Question 1 -->
<div id="question-1" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "noForm": true, "base": { "live": true } }'>
<p>1. {{ page.criteria[ 0 ] }}</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-1-agile", "class": "hidden" },
  { "action": "addClass", "source": ".question-1-non-agile", "class": "hidden" }
]'>I need the customer to be available throughout the project.</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-1-non-agile", "class": "hidden" },
  { "action": "addClass", "source": ".question-1-agile", "class": "hidden" }
]'>I do not mind if the customer is minimally involved throughout the project.</li>
</ul>
</div>

<!-- Question 2 -->
<div id="question-2" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "noForm": true, "base": { "live": true } }'>
<p>2. {{ page.criteria[ 1 ] }}</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-2-agile", "class": "hidden" },
  { "action": "addClass", "source": ".question-2-non-agile", "class": "hidden" }
]'>I welcome changes throughout my project (even at the expense of Cost, Schedule, or other features).</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-2-non-agile", "class": "hidden" },
  { "action": "addClass", "source": ".question-2-agile", "class": "hidden" }
]'>I know the scope in advance, or when the contract terms limit changes.</li>
</ul>
</div>

<!-- Question 3 -->
<div id="question-3" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "noForm": true, "base": { "live": true } }'>
<p>3. {{ page.criteria[ 2 ] }}</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-3-agile", "class": "hidden" },
  { "action": "addClass", "source": ".question-3-non-agile", "class": "hidden" }
]'>I am uncertain about the requirements from the beginning of the project, and I am open to changing them along the way.</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-3-non-agile", "class": "hidden" },
  { "action": "addClass", "source": ".question-3-agile", "class": "hidden" }
]'>I am certain about the requirements from the beginning and there is little or no likelihood of change.</li>
</ul>
</div>

<!-- Question 4 -->
<div id="question-4" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "noForm": true, "base": { "live": true } }'>
<p>4. {{ page.criteria[ 3 ] }}</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-4-agile", "class": "hidden" },
  { "action": "addClass", "source": ".question-4-non-agile", "class": "hidden" }
]'>I am open to prioritization by value to ensure the most valuable features are implemented first.</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-4-non-agile", "class": "hidden" },
  { "action": "addClass", "source": ".question-4-agile", "class": "hidden" }
]'>I am looking to have a "do everything we agreed upon" approach and an "all or nothing" approach.</li>
</ul>
</div>

<!-- Question 5 -->
<div id="question-5" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "noForm": true, "base": { "live": true } }'>
<p>5. {{ page.criteria[ 4 ] }}</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-5-agile", "class": "hidden" },
  { "action": "addClass", "source": ".question-5-non-agile", "class": "hidden" }
]'>It is possible for me to have smaller, dedicated teams with a high degree of coordination and synchronization.</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-5-non-agile", "class": "hidden" },
  { "action": "addClass", "source": ".question-5-agile", "class": "hidden" }
]'>I prefer to limit team coordination / synchronization to handoff points.</li>
</ul>
</div>

<!-- Question 6 -->
<div id="question-6" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "noForm": true, "base": { "live": true } }'>
<p>6. {{ page.criteria[ 5 ] }}</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-6-agile", "class": "hidden" },
  { "action": "addClass", "source": ".question-6-non-agile", "class": "hidden" }
]'>I have a funding model that supports an iterative approach.</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-6-non-agile", "class": "hidden" },
  { "action": "addClass", "source": ".question-6-agile", "class": "hidden" }
]'>I need to have funding agreements up-front.</li>
</ul>
</div>

<!-- Question 7 -->
<div id="question-7" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "noForm": true, "base": { "live": true } }'>
<p>7. {{ page.criteria[ 6 ] }}</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-7-agile", "class": "hidden" },
  { "action": "addClass", "source": ".question-7-non-agile", "class": "hidden" }
]'>Project failure rate for previous projects managed using a waterfall approach is unacceptably high.</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-7-non-agile", "class": "hidden" },
  { "action": "addClass", "source": ".question-7-agile", "class": "hidden" }
]'>Projects have been delivering successfully with a waterfall approach.</li>
</ul>
</div>

<!-- Question 8 -->
<div id="question-8" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "noForm": true, "base": { "live": true } }'>
<p>8. {{ page.criteria[ 7 ] }}</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-8-agile", "class": "hidden" },
  { "action": "addClass", "source": ".question-8-non-agile", "class": "hidden" }
]'>My project is a software development project.</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-8-non-agile", "class": "hidden" },
  { "action": "addClass", "source": ".question-8-agile", "class": "hidden" }
]'>My project is not a software development project.</li>
</ul>
</div>

<!-- Question 9 -->
<div id="question-9" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "noForm": true, "base": { "live": true } }'>
<p>9. {{ page.criteria[ 8 ] }}</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-9-agile", "class": "hidden" },
  { "action": "addClass", "source": ".question-9-non-agile", "class": "hidden" }
]'>My team is co-located (and would benefit from daily scrums to discuss status, roadblocks and input from the product owner).</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-9-non-agile", "class": "hidden" },
  { "action": "addClass", "source": ".question-9-agile", "class": "hidden" }
]'>My team is not co-located.</li>
</ul>
</div>

<!-- Question 10 -->
<div id="question-10" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "noForm": true, "base": { "live": true } }'>
<p>10. {{ page.criteria[ 9 ] }}</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-10-agile", "class": "hidden" },
  { "action": "addClass", "source": ".question-10-non-agile", "class": "hidden" }
]'>I have a product owner that is engaged, empowered, readily available, knowledgeable and can provide the development team with constant feedback.</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-10-non-agile", "class": "hidden" },
  { "action": "addClass", "source": ".question-10-agile", "class": "hidden" }
]'>I do not have a product owner that is very engaged, readily available, knowledgeable and can provide the development team with constant feedback.</li>
</ul>
</div>

<!-- Question 11 -->
<div id="question-11" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "noForm": true, "base": { "live": true } }'>
<p>11. {{ page.criteria[ 10 ] }}</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-11-agile", "class": "hidden" },
  { "action": "addClass", "source": ".question-11-non-agile", "class": "hidden" }
]'>My team consists of dedicated team members, cross-functional expertise, is collaborative and show initiative.</li>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-11-non-agile", "class": "hidden" },
  { "action": "addClass", "source": ".question-11-agile", "class": "hidden" }
]'>My team does not have dedicated team members, cross-functional expertise, collaborative and show initiative.</li>
</ul>
</div>

<!-- Question 12 -->
<div id="question-12" class="wb-fieldflow" data-wb-fieldflow='{ "renderas": "radio", "noForm": true, "base": { "live": true } }'>
<p>12. {{ page.criteria[ 11 ] }}</p>
<ul>
<li data-wb-fieldflow='[
  { "action": "removeClass", "source": ".question-12-agile", "class": "hidden" },
  { "action": "addClass", "source": ".question-12-non-agile", "class": "hidden" }
]'>My organization (supporting management, client, etc.) are amenable to failing fast and learning faster.</li>
<li data-wb-fieldflow='[{ "action": "removeClass", "source": ".question-12-non-agile", "class": "hidden" }, { "action": "addClass", "source": ".question-12-agile", "class": "hidden" }]'>My organization (supporting management, client, etc.) sees failure as a negative thing.</li>
</ul>
</div>

<section>

## Résultats

<section>
<h3 class="h5 mrgn-bttm-0 mrgn-tp-0 mrgn-rght-sm pull-left">Questionnaire complété&#160;:</h3>

<p><progress id="questionnaire-progress" value="0" max="100" class="wb-calculate" data-wb-calculate='{ "eventTrigger": "addClass.action.wb-fieldflow removeClass.action.wb-fieldflow toggle.action.wb-fieldflow score-updated", "operations": [
  { "type": "percent", "decimalPlaces": 0, "outputTarget": "#questionnaire-progress-percent, #questionnaire-progress-overlay-percent", "inputs": [
    { "type": "count", "query": "#agile-use-when-questionnaire fieldset input:checked" },
    { "type": "count", "query": "#agile-use-when-questionnaire fieldset" }
  ] },
  { "type": "number", "outputTarget": "#questionnaire-progress, #questionnaire-progress-overlay", "outputAttribute": "value", "query": "#questionnaire-progress-percent" },
  { "type": "conditional",
    "inputs": [
      { "type": ">", "inputs": [ { "type": "number", "query": "#questionnaire-progress-percent" }, 0 ] }
    ],
    "actionsTrue": [
      { "type": "event", "outputTarget": "#questionnaire-progress, #questionnaire-progress-overlay", "outputEvent": "wb-update-wb-progress" }
    ]
  }
] }'></progress> <span id="questionnaire-progress-percent">0</span>&#160;%</p>
</section>

<section markdown="0" id="progress-overlay" class="wb-overlay modal-content overlay-def wb-bar-t">
<header>
<div class="h6 mrgn-tp-md mrgn-bttm-md">
<h3 class="h6 mrgn-tp-0 mrgn-bttm-0 mrgn-rght-sm pull-left">Questionnaire complété&#160;:</h3>
<p><progress id="questionnaire-progress-overlay" value="0" max="100"></progress> <span id="questionnaire-progress-overlay-percent">0</span>&#160;%</p>
</div>
</header>
</section>

<section id="final-result" class="panel panel-default">
<header class="panel-heading">
<h3 class="panel-title">Recommendation</h3>
</header>
<div class="panel-body">
<p id="recommendation-not-complete">{{ site.CompleteQuestionnaireFirst[ page.lang ] }}</p>
<p class="hidden" id="recommendation-agile-element">Agile may be an element you want to incorporate in your project.</p>
<p class="hidden" id="recommendation-agile-managing-project">You will likely want to take an agile approach in managing your project.</p>
<p class="hidden" id="recommendation-agile-managing-project-and-scrum">You will likely want to take an agile approach in managing your project and consider scrum as a useful tool.</p>
</div>
</section>

<section>

### Résultats détaillés

<table class="table table-bordered table-condensed">
<thead>
<tr>
<th>Critère</th>
<th>Réponse sélectionnée</th>
<th>Agile est-il recommandé?</th>
<th>Points</th>
</tr>
</thead>
<tbody>
{% for index in (0..11) %}{%
  assign questionNumber = index | plus: 1 %}<tr>
<td>{{ page.criteria[ index ] }}</td>
<td>
<span class="hidden question-{{ questionNumber }}-agile">1</span>
<span class="hidden question-{{ questionNumber }}-non-agile">2</span>
</td>
<td>
<span class="hidden question-{{ questionNumber }}-agile"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> Oui</span>
<span class="hidden question-{{ questionNumber }}-non-agile"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> Non</span>
</td>
<td>
<span class="hidden question-{{ questionNumber }}-agile agile-answer-points">{{ page.criteriaAgilePoints[ index ] }}</span>
<span class="hidden question-{{ questionNumber }}-non-agile non-agile-answer-points">0</span>
</td>
</tr>{%
endfor %}
</tbody>
<tfoot>
<tr class="wb-calculate" data-wb-calculate='{ "eventTrigger": "addClass.action.wb-fieldflow removeClass.action.wb-fieldflow", "operations": [
  { "type": "count", "increment": 1, "query": ".agile-answer-points:not(.hidden)", "outputTarget": "#total-agile-answers" },
  { "type": "percent", "decimalPlaces": 1, "inputs": [ { "type": "number", "query": "#total-agile-answers" }, { "type": "number", "query": "#max-agile-answers" } ], "outputTarget": "#total-agile-answers-percent" },
  { "type": "number", "decimalPlaces": 0, "query": "#total-agile-answers-percent", "outputTarget": "#total-agile-answers-progress", "outputAttribute": "value" },
  { "type": "add", "query": ".agile-answer-points:not(.hidden)", "outputTarget": "#total-agile-points" },
  { "type": "add", "query": ".agile-answer-points", "outputTarget": "#max-agile-points" },
  { "type": "percent", "decimalPlaces": 1, "inputs": [ { "type": "number", "query": "#total-agile-points" }, { "type": "number", "query": "#max-agile-points" } ], "outputTarget": "#total-agile-points-percent" },
  { "type": "number", "decimalPlaces": 0, "query": "#total-agile-points-percent", "outputTarget": "#total-agile-points-progress", "outputAttribute": "value" },
  { "type": "conditional",
    "inputs": [
      { "type": ">", "inputs": [ { "type": "number", "query": "#questionnaire-progress-percent" }, 0 ] }
    ],
    "actionsTrue": [
      { "type": "event", "outputTarget": "#total-agile-answers-progress, #total-agile-points-progress", "outputEvent": "wb-update-wb-progress" }
    ]
  },
  { "type": "conditional",
    "inputs": [
      { "type": ">=", "inputs": [ { "type": "number", "query": "#questionnaire-progress-percent" }, 100 ] }
    ],
    "actionsTrue": [
      { "type": "removeClass", "outputTarget": "#final-result", "class": "panel-default"},
      { "type": "addClass", "outputTarget": "#final-result", "class": "panel-primary"},
      { "type": "conditional", "inputs": [ { "type": "<", "inputs": [ { "type": "number", "query": "#total-agile-points-percent" }, 50 ] } ],
        "actionsTrue": [
          { "type": "removeClass", "outputTarget": "#recommendation-agile-element", "class": "hidden" },
          { "type": "addClass", "outputTarget": "#recommendation-not-complete, #recommendation-agile-managing-project, #recommendation-agile-managing-project-and-scrum", "class": "hidden" }
        ],
        "actionsFalse": [
          { "type": "conditional",
            "inputs": [
              { "type": "<", "inputs": [ { "type": "number", "query": "#total-agile-points-percent" }, 75 ] }
            ],
            "actionsTrue": [
              { "type": "removeClass", "outputTarget": "#recommendation-agile-managing-project", "class": "hidden" },
              { "type": "addClass", "outputTarget": "#recommendation-not-complete, #recommendation-agile-element, #recommendation-agile-managing-project-and-scrum", "class": "hidden" }
            ],
            "actionsFalse": [
              { "type": "removeClass", "outputTarget": "#recommendation-agile-managing-project-and-scrum", "class": "hidden" },
              { "type": "addClass", "outputTarget": "#recommendation-not-complete, #recommendation-agile-element, #recommendation-agile-managing-project", "class": "hidden" }
            ]
          }
        ]
      }
    ]
  }
] }'>
<th>Sommaire</th>
<td>s/o</td>
<td>Agile est recommandé pour <span id="total-agile-answers">0</span> {{ site.OutOf[ page.lang ] }} <span id="max-agile-answers">{{ page.criteria | size }}</span> critères<br />
<progress id="total-agile-answers-progress" value="0" max="100"></progress> <span id="total-agile-answers-percent">0</span>&#160;%</td>
<td><span id="total-agile-points">0</span> {{ site.OutOf[ page.lang ] }} <span id="max-agile-points">0</span> points<br />
<progress id="total-agile-points-progress" value="0" max="100"></progress> <span id="total-agile-points-percent">0</span>&#160;%</td>
</tr>
</tfoot>
</table>

</section>

</section>
