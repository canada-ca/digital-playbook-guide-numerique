---
layout: default
title: Right Cloud Decision Tool (draft)
lang: en
altLang: fr
altLangPage: nuage-outil-decisionnel
collectionDirectory: views-vues/cloud-nuage
cloudTypes: [ "public-cloud", "private-cloud", "non-cloud" ]
criteriaTitles: [ "Sensitivity", "Financial", "Legacy", "Commoditized", "Location", "Connectivity", "Speed", "Longevity", "Elasticity", "Innovation", "DevOps" ]
criteriaTags: [ "sensitivity", "financial", "legacy", "commoditized", "location", "connectivity", "speed", "longevity", "elasticity", "innovation", "devops" ]
---
{% assign dataVariable = site.playbookData[page.lang] %}{%
assign dataSource = site.data[dataVariable] %}
<div class="wb-inview" data-inview="progress-overlay">

To help organize the decision of which cloud deployment model is the right deployment model for your business context, the following tool can be used.

</div>

<div id="right-cloud-questionnaire" class="wb-frmvld">
<form method="post" action="#">

<section>

## Mandatory

<!-- Question 1 -->
<div id="question-1" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true }, "default": { "action": "addClass", "source": ".sensitivity-result > span", "class": "hidden" } }'>
<p>Sensitivity</p>
<ul>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-sensitivity-passed, #private-cloud-sensitivity-failed, #non-cloud-sensitivity-failed", "class": "hidden" }'>Stakeholders have not raised concerns regarding the sensitivity of the data.</li>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-sensitivity-failed, #private-cloud-sensitivity-passed, #non-cloud-sensitivity-passed", "class": "hidden" }'>Stakeholders view the sensitivity of the data to be high.</li>
</ul>
</div>

<!-- Question 2 -->
<div id="question-2" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true }, "default": { "action": "addClass", "source": ".financial-result > span", "class": "hidden" } }'>
<p>Financial</p>
<ul>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-financial-passed, #private-cloud-financial-failed, #non-cloud-financial-failed", "class": "hidden" }'>Budget is available to support an Operational Expense Model; the costs will rise and fall with the consumption of resources.</li>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-financial-failed, #private-cloud-financial-passed, #non-cloud-financial-passed", "class": "hidden" }'>Budget is available to support a Capital Expense Model; ability to plan for periodic investments in ever greening infrastructure and innovation.</li>
</ul>
</div>

<!-- Question 3 -->
<div id="question-3" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true }, "default": { "action": "addClass", "source": ".legacy-result > span", "class": "hidden" } }'>
<p>Legacy</p>
<ul>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-legacy-passed, #private-cloud-legacy-passed, #non-cloud-legacy-failed", "class": "hidden" }'>Application can operate in a cloud environment and the required virtualized or dedicated hardware is available in a cloud environment.</li>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-legacy-failed, #private-cloud-legacy-failed, #non-cloud-legacy-passed", "class": "hidden" }'>Application needs to operate in a non-cloud environment and required highly specialized, dedicated, hardware.</li>
</ul>
</div>

</section>

<section>

## Highly Rated [20 points each]

<!-- Question 4 -->
<div id="question-4" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true }, "default": { "action": "addClass", "source": ".commoditized-result > span", "class": "hidden" } }'>
<p>Commoditized</p>
<ul>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-commoditized-passed, #private-cloud-commoditized-failed, #non-cloud-commoditized-failed", "class": "hidden" }'>Application does not have voluminous transactions with an on-premises database or application.</li>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-commoditized-failed, #private-cloud-commoditized-passed, #non-cloud-commoditized-passed", "class": "hidden" }'>Application has voluminous transactions with an on-premises database or application.</li>
</ul>
</div>

<!-- Question 5 -->
<div id="question-5" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true }, "default": { "action": "addClass", "source": ".location-result > span", "class": "hidden" } }'>
<p>Location</p>
<ul>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-location-passed, #private-cloud-location-failed, #non-cloud-location-failed", "class": "hidden" }'>Application is not susceptible to latency issues that may arise due to traffic moving through an additional circuit.</li>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-location-failed, #private-cloud-location-passed, #non-cloud-location-passed", "class": "hidden" }'>Application is susceptible to latency issues that may arise due to traffic moving through an additional circuit.</li>
</ul>
</div>

<!-- Question 6 -->
<div id="question-6" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true }, "default": { "action": "addClass", "source": ".connectivity-result > span", "class": "hidden" } }'>
<p>Connectivity</p>
<ul>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-connectivity-passed, #private-cloud-connectivity-failed, #non-cloud-connectivity-failed", "class": "hidden" }'>Application does not have voluminous transactions with an on-premises database or application.</li>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-connectivity-failed, #private-cloud-connectivity-passed, #non-cloud-connectivity-passed", "class": "hidden" }'>Application has voluminous transactions with an on-premises database or application.</li>
</ul>
</div>

</section>

<section>

## Rated [10 points each]

<!-- Question 7 -->
<div id="question-7" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true }, "default": { "action": "addClass", "source": ".speed-result > span", "class": "hidden" } }'>
<p>Speed</p>
<ul>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-speed-passed, #private-cloud-speed-failed, #non-cloud-speed-failed", "class": "hidden" }'>Rapid access to services is desired. Are the required services available on-demand?</li>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-speed-failed, #private-cloud-speed-passed, #non-cloud-speed-passed", "class": "hidden" }'>Can tolerate the time required to implement the services that may not currently be available on-demand.</li>
</ul>
</div>

<!-- Question 8 -->
<div id="question-8" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true }, "default": { "action": "addClass", "source": ".longevity-result > span", "class": "hidden" } }'>
<p>Longevity: The applications is expected to meet a:</p>
<ul>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-longevity-passed, #private-cloud-longevity-failed, #non-cloud-longevity-failed", "class": "hidden" }'>Short-term need</li>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-longevity-passed, #private-cloud-longevity-passed, #non-cloud-longevity-passed", "class": "hidden" }'>Long-term need</li>
</ul>
</div>

<!-- Question 9 -->
<div id="question-9" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true }, "default": { "action": "addClass", "source": ".elasticity-result > span", "class": "hidden" } }'>
<p>Elasticity: With time, the resource requirements of the  application will:</p>
<ul>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-elasticity-passed, #private-cloud-elasticity-passed, #non-cloud-elasticity-passed", "class": "hidden" }'>Remain stable</li>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-elasticity-passed, #private-cloud-elasticity-failed, #non-cloud-elasticity-failed", "class": "hidden" }'>Grow or shrink</li>
</ul>
</div>

<!-- Question 10 -->
<div id="question-10" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true }, "default": { "action": "addClass", "source": ".innovation-result > span", "class": "hidden" } }'>
<p>Innovation</p>
<ul>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-innovation-passed, #private-cloud-innovation-failed, #non-cloud-innovation-failed", "class": "hidden" }'>Project will want to take advantage of new technology trends as they become available to the market.</li>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-innovation-failed, #private-cloud-innovation-passed, #non-cloud-innovation-failed", "class": "hidden" }'>Application does not want to take advantage of new technology trends and will remain static.</li>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-innovation-failed, #private-cloud-innovation-failed, #non-cloud-innovation-passed", "class": "hidden" }'>No new technology is required.</li>
</ul>
</div>

<!-- Question 11 -->
<div id="question-11" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true }, "default": { "action": "addClass", "source": ".devops-result > span", "class": "hidden" } }'>
<p>DevOps</p>
<ul>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-devops-passed, #private-cloud-devops-failed, #non-cloud-devops-failed", "class": "hidden" }'>Desire rapid access to a suite of tools to support application development as platform services without making a capital investment.</li>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-devops-failed, #private-cloud-devops-passed, #non-cloud-devops-passed", "class": "hidden" }'>Willing to invest to deploy application development tools to support project.</li>
</ul>
</div>

</section>

</form>
</div>

<!--Results-->
<section>

## Results

<section>
<h3 class="h5 mrgn-bttm-0 mrgn-tp-0 mrgn-rght-sm pull-left">Questionnaire completed:</h3>

<p><progress id="questionnaire-progress" value="0" max="100" class="wb-calculate" data-wb-calculate='{ "eventTrigger": "addClass.action.wb-fieldflow removeClass.action.wb-fieldflow toggle.action.wb-fieldflow score-updated", "operations": [
  { "type": "percent", "decimalPlaces": 0, "outputTarget": "#questionnaire-progress-percent, #questionnaire-progress-overlay-percent", "inputs": [
    { "type": "count", "query": "#right-cloud-questionnaire fieldset input:checked" },
    { "type": "count", "query": "#right-cloud-questionnaire fieldset" }
  ] },
  { "type": "number", "outputTarget": "#questionnaire-progress, #questionnaire-progress-overlay", "outputAttribute": "value", "query": "#questionnaire-progress-percent" },
  { "type": "conditional",
    "inputs": [
      { "type": ">", "inputs": [ { "type": "number", "query": "#questionnaire-progress-percent" }, 0 ] }
    ],
    "actions": [
      { "type": "event", "outputTarget": "#questionnaire-progress, #questionnaire-progress-overlay", "outputEvent": "wb-update-wb-progress" }
    ]
  }
] }'></progress> <span id="questionnaire-progress-percent">0</span>%</p>
</section>

<section markdown="0" id="progress-overlay" class="wb-overlay modal-content overlay-def wb-bar-t">
<header>
<div class="h6 mrgn-tp-md mrgn-bttm-md">
<h3 class="h6 mrgn-tp-0 mrgn-bttm-0 mrgn-rght-sm pull-left">Questionnaire completed:</h3>
<p><progress id="questionnaire-progress-overlay" value="0" max="100"></progress> <span id="questionnaire-progress-overlay-percent">0</span>%</p>
</div>
</header>
</section>

<table class="table table-bordered table-condensed">
<thead>
<tr>
<th id="r1h1">Impact Level</th>
<th id="r1h2">Criteria</th>
<th id="r1h3">Public</th>
<th id="r1h4">Private</th>
<th id="r1h5">Non-Cloud</th>
</tr>
</thead>
<tbody>
{% for index in (0..2) %}{%
  assign headerNumber = index | plus: 2 %}{%
  assign criteriaTitle = page.criteriaTitles[ index ] %}{%
  assign criteriaTag = page.criteriaTags[ index ]
%}<tr>{%
if index == 0 %}
<th headers="r1h1" id="r2h1" rowspan="3">Mandatory</th>{%
endif %}
<th headers="r1h2" id="r2h{{ headerNumber }}">{{ criteriaTitle }}</th>{%
  for cloudIndex in (0..2) %}{%
    assign cloudHeaderNumber = cloudIndex | plus: 3 %}{%
    assign cloudType = page.cloudTypes[ cloudIndex ] %}
<td headers="r1h{{ cloudHeaderNumber}} r2h1 r2h{{ headerNumber }}" class="{{ criteriaTag }}-result"><span id="{{ cloudType }}-{{ criteriaTag }}-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> Passed</span><span id="{{ cloudType }}-{{ criteriaTag }}-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> Failed</span></td>{%
  endfor %}
</tr>{%
endfor %}

{% for index in (3..5) %}{%
  assign headerNumber = index | minus: 1 %}{%
  assign criteriaTitle = page.criteriaTitles[ index ] %}{%
  assign criteriaTag = page.criteriaTags[ index ]
%}<tr>{%
if index == 3 %}
<th headers="r1h1" id="r3h1" rowspan="3">Highly Rated<br /> [20 points each]</th>{%
endif %}
<th headers="r1h2" id="r3h{{ headerNumber }}">{{ criteriaTitle }}</th>{%
  for cloudIndex in (0..2) %}{%
    assign cloudHeaderNumber = cloudIndex | plus: 3 %}{%
    assign cloudType = page.cloudTypes[ cloudIndex ] %}
<td headers="r1h{{ cloudHeaderNumber }} r3h1 r3h{{ headerNumber }}" class="{{ criteriaTag }}-result"><span id="{{ cloudType }}-{{ criteriaTag }}-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 20 points</span><span id="{{ cloudType }}-{{ criteriaTag }}-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>{%
  endfor %}
</tr>{%
endfor %}

{% for index in (6..10) %}{%
  assign headerNumber = index | minus: 4 %}{%
  assign criteriaTitle = page.criteriaTitles[ index ] %}{%
  assign criteriaTag = page.criteriaTags[ index ]
%}<tr>{%
if index == 6 %}
<th headers="r1h1" id="r4h1" rowspan="5">Rated<br /> [10 points each]</th>{%
endif %}
<th headers="r1h2" id="r4h{{ headerNumber }}">{{ criteriaTitle }}</th>{%
  for cloudIndex in (0..2) %}{%
    assign cloudHeaderNumber = cloudIndex | plus: 3 %}{%
    assign cloudType = page.cloudTypes[ cloudIndex ] %}
<td headers="r1h{{ cloudHeaderNumber }} r4h1 r4h{{ headerNumber }}" class="{{ criteriaTag }}-result"><span id="{{ cloudType }}-{{ criteriaTag }}-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 10 points</span><span id="{{ cloudType }}-{{ criteriaTag }}-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>{%
  endfor %}
</tr>{%
endfor %}

<tr>
<th headers="r1h1" id="r5h1" rowspan="2">Summary</th>
<th headers="r1h2" id="r5h2">Mandatory Met</th>{%
for index in (0..2) %}{%
  assign headerNumber = index | plus: 3 %}{%
  assign cloudType = page.cloudTypes[ index ] %}
<td headers="r1h{{ headerNumber }} r5h1 r5h2" class="wb-calculate" data-wb-calculate='{ "eventTrigger": "removeClass.action.wb-fieldflow", "operations": [
  { "type": "count", "increment": 1, "query": "#{{ cloudType }}-sensitivity-passed:not(.hidden), #{{ cloudType }}-financial-passed:not(.hidden), #{{ cloudType }}-legacy-passed:not(.hidden)", "outputTarget": "#tally-mandatory-{{ cloudType }}" },
  { "type": "percent", "decimalPlaces": 1, "inputs": [ { "type": "number", "query": "#tally-mandatory-{{ cloudType }}" }, 3 ], "outputTarget": "#percent-mandatory-{{ cloudType }}" },
  { "type": "number", "decimalPlaces": 0, "query": "#percent-mandatory-{{ cloudType }}", "outputTarget": "#progress-mandatory-{{ cloudType }}", "outputAttribute": "value" },
  { "type": "conditional", "inputs": [ { "type": ">", "inputs": [ { "type": "number", "query": "#percent-mandatory-{{ criteriaNumber }}" }, 0 ] } ],
    "actions": [ { "type": "event", "outputTarget": "#progress-mandatory-{{ cloudType }}", "outputEvent": "wb-update-wb-progress" } ]
  },
  { "type": "conditional", "inputs": [
      { "type": ">=", "inputs": [{ "type": "count", "query": "fieldset[data-wb-fieldflow-source=question-1] input:checked" }, 1] },
      { "type": ">=", "inputs": [{ "type": "count", "query": "fieldset[data-wb-fieldflow-source=question-2] input:checked" }, 1] },
      { "type": ">=", "inputs": [{ "type": "count", "query": "fieldset[data-wb-fieldflow-source=question-3] input:checked" }, 1] }
    ],
    "actions": [
      { "type": "conditional", "inputs": [{ "type": "==", "inputs": [{ "type": "number", "query": "#tally-mandatory-{{ cloudType }}" }, 3] }], "actions": [{ "type": "addClass", "class": "hidden", "outputTarget": "#mandatory-{{ cloudType }}-failed"}, { "type":  "removeClass", "class": "hidden", "outputTarget": "#mandatory-{{ cloudType }}-passed"}] },
      { "type": "conditional", "inputs": [{ "type": "!=", "inputs": [{ "type": "number", "query": "#tally-mandatory-{{ cloudType }}" }, 3] }], "actions": [{ "type": "addClass", "class": "hidden", "outputTarget": "#mandatory-{{ cloudType }}-passed"}, { "type": "removeClass", "class": "hidden", "outputTarget": "#mandatory-{{ cloudType }}-failed"}] }
    ]
  }
] }'><span id="tally-mandatory-{{ cloudType }}">0</span> out of 3 (<span id="percent-mandatory-{{ cloudType }}">0</span>%)<span id="mandatory-{{ cloudType }}-passed" class="hidden mrgn-lft-md"> <span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> Passed</span><span id="mandatory-{{ cloudType }}-failed" class="hidden mrgn-lft-md"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> Failed</span><div><progress id="progress-mandatory-{{ cloudType }}" value="0" max="100"></progress></div></td>{%
endfor %}
</tr>

<tr>
<th headers="r1h2" id="r5h3">Rated Totals</th>{%
for index in (0..2) %}{%
  assign headerNumber = index | plus: 3 %}{%
  assign cloudType = page.cloudTypes[ index ] %}
<td headers="r1h{{ headerNumber }} r5h1 r5h3" class="wb-calculate" data-wb-calculate='{ "eventTrigger": "removeClass.action.wb-fieldflow", "operations": [
  { "type": "add", "inputs": [{ "type": "count", "increment": 20, "query": "#{{ cloudType }}-commoditized-passed:not(.hidden), #{{ cloudType }}-location-passed:not(.hidden), #{{ cloudType }}-connectivity-passed:not(.hidden)" }, { "type": "count", "increment": 10, "query": "#{{ cloudType }}-speed-passed:not(.hidden), #{{ cloudType }}-longevity-passed:not(.hidden), #{{ cloudType }}-elasticity-passed:not(.hidden), #{{ cloudType }}-innovation-passed:not(.hidden), #{{ cloudType }}-devops-passed:not(.hidden)" }], "outputTarget": "#tally-rated-{{ cloudType }}" },
  { "type": "percent", "decimalPlaces": 1, "inputs": [{ "type": "number", "query": "#tally-rated-{{ cloudType }}" }, 110], "outputTarget": "#percent-rated-{{ cloudType }}" },
  { "type": "number", "decimalPlaces": 0, "query": "#percent-rated-{{ cloudType }}", "outputTarget": "#progress-rated-{{ cloudType }}", "outputAttribute": "value" },
  { "type": "conditional", "inputs": [ { "type": ">", "inputs": [ { "type": "number", "query": "#percent-rated-{{ criteriaNumber }}" }, 0 ] } ],
    "actions": [ { "type": "event", "outputTarget": "#progress-rated-{{ cloudType }}", "outputEvent": "wb-update-wb-progress" } ]
  }
] }'><span id="tally-rated-{{ cloudType }}">0</span> out of 110 (<span id="percent-rated-{{ cloudType }}">0</span>%)<div><progress id="progress-rated-{{ cloudType }}" value="0" max="100"></progress></div></td>{%
endfor %}
</tr>
</tbody>
</table>

</section>
