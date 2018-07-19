---
layout: default
title: Right Cloud Decision Tool (draft)
lang: en
altLang: fr
altLangPage: nuage-outil-decisionnel
collectionDirectory: views-vues/cloud-nuage
---
{% assign dataVariable = site.playbookData[page.lang] %}{%
assign dataSource = site.data[dataVariable] %}

To help organize the decision of which cloud deployment model is the right deployment model for your business context, the following tool can be used.

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

**Questionnaire progress:**

<p markdown="0" class="wb-inview" data-inview="progress-bottom"><progress id="questionnaire-progress" value="0" max="100" class="wb-calculate" data-wb-calculate='{ "eventTrigger": "removeClass.action.wb-fieldflow", "operations": [
  { "type": "percent", "decimalPlaces": 0, "outputTarget": "#questionnaire-progress-percent, #questionnaire-progress-percent-bottom", "inputs": [
    { "type": "count", "query": "#right-cloud-questionnaire fieldset input:checked" },
    { "type": "count", "query": "#right-cloud-questionnaire fieldset" }
  ] },
  { "type": "number", "outputTarget": "#questionnaire-progress, #questionnaire-progress-bottom", "outputAttribute": "value", "query": "#questionnaire-progress-percent" },
  { "type": "conditional",
    "inputs": [
      { "type": ">", "inputs": [ { "type": "number", "query": "#questionnaire-progress-percent" }, 0 ] }
    ],
    "actions": [
      { "type": "event", "outputTarget": "#questionnaire-progress, #questionnaire-progress-bottom", "outputEvent": "wb-update-wb-progress" }
    ]
  }
] }'></progress> <span id="questionnaire-progress-percent">0</span>%</p>

<section markdown="0" id="progress-bottom" class="wb-overlay modal-content overlay-def wb-bar-b">
<header>
<div class="mrgn-tp-md mrgn-bttm-sm h5">
<h3 class="mrgn-tp-0 mrgn-bttm-0 mrgn-rght-md h5 pull-left">Questionnaire progress</h3>
<progress id="questionnaire-progress-bottom" value="0" max="100"></progress> <span id="questionnaire-progress-percent-bottom">0</span>%
</div>
</header>
</section>

<table class="table table-bordered table-condensed">
<thead>
<tr>
<th id="r1h1">Impact Level</th>
<th id="r1h2">Criteria</th>
<th id="r1h3"><strong>Public</strong></th>
<th id="r1h4"><strong>Private</strong></th>
<th id="r1h5"><strong>Non-Cloud</strong></th>
</tr>
</thead>
<tbody>
<tr>
<th headers="r1h1" id="r2h1" rowspan="3"><strong>Mandatory</strong></th>
<th headers="r1h2" id="r2h2"><strong>Sensitivity</strong></th>
<td headers="r1h3 r2h1 r2h2" class="sensitivity-result"><span id="public-cloud-sensitivity-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> Passed</span><span id="public-cloud-sensitivity-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> Failed</span></td>
<td headers="r1h4 r2h1 r2h2" class="sensitivity-result"><span id="private-cloud-sensitivity-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> Passed</span><span id="private-cloud-sensitivity-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> Failed</span></td>
<td headers="r1h5 r2h1 r2h2" class="sensitivity-result"><span id="non-cloud-sensitivity-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> Passed</span><span id="non-cloud-sensitivity-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> Failed</span></td>
</tr>

<tr>
<th headers="r1h2" id="r2h3"><strong>Financial</strong></th>
<td headers="r1h3 r2h1 r2h3" class="financial-result"><span id="public-cloud-financial-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> Passed</span><span id="public-cloud-financial-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> Failed</span></td>
<td headers="r1h4 r2h1 r2h3" class="financial-result"><span id="private-cloud-financial-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> Passed</span><span id="private-cloud-financial-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> Failed</span></td>
<td headers="r1h5 r2h1 r2h3" class="financial-result"><span id="non-cloud-financial-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> Passed</span><span id="non-cloud-financial-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> Failed</span></td>
</tr>

<tr>
<th headers="r1h2" id="r2h4"><strong>Legacy</strong></th>
<td headers="r1h3 r2h1 r2h4" class="legacy-result"><span id="public-cloud-legacy-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> Passed</span><span id="public-cloud-legacy-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> Failed</span></td>
<td headers="r1h4 r2h1 r2h4" class="legacy-result"><span id="private-cloud-legacy-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> Passed</span><span id="private-cloud-legacy-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> Failed</span></td>
<td headers="r1h5 r2h1 r2h4" class="legacy-result"><span id="non-cloud-legacy-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> Passed</span><span id="non-cloud-legacy-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> Failed</span></td>
</tr>

<tr>
<th headers="r1h1" id="r3h1" rowspan="3"><strong>Highly Rated</strong><br /> [20 points each]</th>
<th headers="r1h2" id="r3h2"><strong>Commoditized</strong></th>
<td headers="r1h3 r3h1 r3h2" class="commoditized-result"><span id="public-cloud-commoditized-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 20 points</span><span id="public-cloud-commoditized-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
<td headers="r1h4 r3h1 r3h2" class="commoditized-result"><span id="private-cloud-commoditized-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 20 points</span><span id="private-cloud-commoditized-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
<td headers="r1h5 r3h1 r3h2" class="commoditized-result"><span id="non-cloud-commoditized-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 20 points</span><span id="non-cloud-commoditized-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
</tr>

<tr>
<th headers="r1h2" id="r3h3"><strong>Location</strong></th>
<td headers="r1h3 r3h1 r3h3" class="location-result"><span id="public-cloud-location-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 20 points</span><span id="public-cloud-location-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
<td headers="r1h4 r3h1 r3h3" class="location-result"><span id="private-cloud-location-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 20 points</span><span id="private-cloud-location-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
<td headers="r1h5 r3h1 r3h3" class="location-result"><span id="non-cloud-location-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 20 points</span><span id="non-cloud-location-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
</tr>

<tr>
<th headers="r1h2" id="r3h4"><strong>Connectivity</strong></th>
<td headers="r1h3 r3h1 r3h4" class="connectivity-result"><span id="public-cloud-connectivity-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 20 points</span><span id="public-cloud-connectivity-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
<td headers="r1h4 r3h1 r3h4" class="connectivity-result"><span id="private-cloud-connectivity-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 20 points</span><span id="private-cloud-connectivity-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
<td headers="r1h5 r3h1 r3h4" class="connectivity-result"><span id="non-cloud-connectivity-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 20 points</span><span id="non-cloud-connectivity-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
</tr>

<tr>
<th headers="r1h1" id="r4h1" rowspan="5"><strong>Rated</strong><br /> [10 points each]</th>
<th headers="r1h2" id="r4h2"><strong>Speed</strong></th>
<td headers="r1h3 r4h1 r4h2" class="speed-result"><span id="public-cloud-speed-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 10 points</span><span id="public-cloud-speed-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
<td headers="r1h4 r4h1 r4h2" class="speed-result"><span id="private-cloud-speed-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 10 points</span><span id="private-cloud-speed-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
<td headers="r1h5 r4h1 r4h2" class="speed-result"><span id="non-cloud-speed-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 10 points</span><span id="non-cloud-speed-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
</tr>

<tr>
<th headers="r1h2" id="r4h3"><strong>Longevity</strong></th>
<td headers="r1h3 r4h1 r4h3" class="longevity-result"><span id="public-cloud-longevity-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 10 points</span><span id="public-cloud-longevity-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
<td headers="r1h4 r4h1 r4h3" class="longevity-result"><span id="private-cloud-longevity-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 10 points</span><span id="private-cloud-longevity-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
<td headers="r1h5 r4h1 r4h3" class="longevity-result"><span id="non-cloud-longevity-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 10 points</span><span id="non-cloud-longevity-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
</tr>

<tr>
<th headers="r1h2" id="r4h4"><strong>Elasticity</strong></th>
<td headers="r1h3 r4h1 r4h4" class="elasticity-result"><span id="public-cloud-elasticity-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 10 points</span><span id="public-cloud-elasticity-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
<td headers="r1h4 r4h1 r4h4" class="elasticity-result"><span id="private-cloud-elasticity-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 10 points</span><span id="private-cloud-elasticity-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
<td headers="r1h5 r4h1 r4h4" class="elasticity-result"><span id="non-cloud-elasticity-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 10 points</span><span id="non-cloud-elasticity-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
</tr>

<tr>
<th headers="r1h2" id="r4h5"><strong>Innovation</strong></th>
<td headers="r1h3 r4h1 r4h5" class="innovation-result"><span id="public-cloud-innovation-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 10 points</span><span id="public-cloud-innovation-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
<td headers="r1h4 r4h1 r4h5" class="innovation-result"><span id="private-cloud-innovation-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 10 points</span><span id="private-cloud-innovation-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
<td headers="r1h5 r4h1 r4h5" class="innovation-result"><span id="non-cloud-innovation-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 10 points</span><span id="non-cloud-innovation-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
</tr>

<tr>
<th headers="r1h2" id="r4h6"><strong>DevOps</strong></th>
<td headers="r1h3 r4h1 r4h6" class="devops-result"><span id="public-cloud-devops-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 10 points</span><span id="public-cloud-devops-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
<td headers="r1h4 r4h1 r4h6" class="devops-result"><span id="private-cloud-devops-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 10 points</span><span id="private-cloud-devops-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
<td headers="r1h5 r4h1 r4h6" class="devops-result"><span id="non-cloud-devops-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 10 points</span><span id="non-cloud-devops-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
</tr>

<tr>
<th headers="r1h1" id="r5h1" rowspan="2"><strong>Summary</strong></th>
<th headers="r1h2" id="r5h2"><strong>Mandatory Met</strong></th>
<td headers="r1h3 r5h1 r5h2" class="wb-calculate" data-wb-calculate='{ "eventTrigger": "removeClass.action.wb-fieldflow", "operations": [
  { "type": "count", "increment": 1, "query": "#public-cloud-sensitivity-passed:not(.hidden), #public-cloud-financial-passed:not(.hidden), #public-cloud-legacy-passed:not(.hidden)", "outputTarget": "#tally-mandatory-public-cloud" },
  { "type": "percent", "decimalPlaces": 1, "inputs": [{ "type": "number", "query": "#tally-mandatory-public-cloud" }, 3], "outputTarget": "#percent-mandatory-public-cloud" },
  { "type": "number", "decimalPlaces": 0, "query": "#percent-mandatory-public-cloud", "outputTarget": "#progress-mandatory-public-cloud", "outputAttribute": "value" },
  { "type": "conditional", "inputs": [ { "type": "==", "inputs": [ 0, 0 ] } ],
    "actions": [ { "type": "event", "outputTarget": "#progress-mandatory-public-cloud", "outputEvent": "wb-update-wb-progress" } ]
  },
  { "type": "conditional", "inputs": [
      { "type": ">=", "inputs": [{ "type": "count", "query": "fieldset[data-wb-fieldflow-source=question-1] input:checked" }, 1] },
      { "type": ">=", "inputs": [{ "type": "count", "query": "fieldset[data-wb-fieldflow-source=question-2] input:checked" }, 1] },
      { "type": ">=", "inputs": [{ "type": "count", "query": "fieldset[data-wb-fieldflow-source=question-3] input:checked" }, 1] }
    ],
    "actions": [
      { "type": "conditional", "inputs": [{ "type": "==", "inputs": [{ "type": "number", "query": "#tally-mandatory-public-cloud"}, 3] }], "actions": [{ "type": "addClass", "class": "hidden", "outputTarget": "#mandatory-public-cloud-failed"}, { "type":  "removeClass", "class": "hidden", "outputTarget": "#mandatory-public-cloud-passed"}] },
      { "type": "conditional", "inputs": [{ "type": "!=", "inputs": [{ "type": "number", "query": "#tally-mandatory-public-cloud"}, 3] }], "actions": [{ "type": "addClass", "class": "hidden", "outputTarget": "#mandatory-public-cloud-passed"}, { "type": "removeClass", "class": "hidden", "outputTarget": "#mandatory-public-cloud-failed"}] }
    ]
  }
] }'><span id="tally-mandatory-public-cloud">0</span> / 3 (<span id="percent-mandatory-public-cloud">0</span>%)<span id="mandatory-public-cloud-passed" class="hidden mrgn-lft-md"> <span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> Passed</span><span id="mandatory-public-cloud-failed" class="hidden mrgn-lft-md"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> Failed</span><div><progress id="progress-mandatory-public-cloud" value="0" max="100"></progress></div></td>
<td headers="r1h4 r5h1 r5h2" class="wb-calculate" data-wb-calculate='{ "eventTrigger": "removeClass.action.wb-fieldflow", "operations": [
  { "type": "count", "increment": 1, "query": "#private-cloud-sensitivity-passed:not(.hidden), #private-cloud-financial-passed:not(.hidden), #private-cloud-legacy-passed:not(.hidden)", "outputTarget": "#tally-mandatory-private-cloud" },
  { "type": "percent", "decimalPlaces": 1, "inputs": [{ "type": "number", "query": "#tally-mandatory-private-cloud" }, 3], "outputTarget": "#percent-mandatory-private-cloud" },
  { "type": "number", "decimalPlaces": 0, "query": "#percent-mandatory-private-cloud", "outputTarget": "#progress-mandatory-private-cloud", "outputAttribute": "value" },
  { "type": "conditional", "inputs": [ { "type": "==", "inputs": [ 0, 0 ] } ],
    "actions": [ { "type": "event", "outputTarget": "#progress-mandatory-private-cloud", "outputEvent": "wb-update-wb-progress" } ]
  },
  { "type": "conditional", "inputs": [
      { "type": ">=", "inputs": [{ "type": "count", "query": "fieldset[data-wb-fieldflow-source=question-1] input:checked" }, 1] },
      { "type": ">=", "inputs": [{ "type": "count", "query": "fieldset[data-wb-fieldflow-source=question-2] input:checked" }, 1] },
      { "type": ">=", "inputs": [{ "type": "count", "query": "fieldset[data-wb-fieldflow-source=question-3] input:checked" }, 1] }
    ],
    "actions": [
      { "type": "conditional", "inputs": [{ "type": "==", "inputs": [{ "type": "number", "query": "#tally-mandatory-private-cloud"}, 3] }], "actions": [{ "type": "addClass", "class": "hidden", "outputTarget": "#mandatory-private-cloud-failed"}, { "type": "removeClass", "class": "hidden", "outputTarget": "#mandatory-private-cloud-passed"}] },
      { "type": "conditional", "inputs": [{ "type": "!=", "inputs": [{ "type": "number", "query": "#tally-mandatory-private-cloud"}, 3] }], "actions": [{ "type": "addClass", "class": "hidden", "outputTarget": "#mandatory-private-cloud-passed"}, { "type": "removeClass", "class": "hidden", "outputTarget": "#mandatory-private-cloud-failed"}] }
    ]
  }
] }'><span id="tally-mandatory-private-cloud">0</span> / 3 (<span id="percent-mandatory-private-cloud">0</span>%)<span id="mandatory-private-cloud-passed" class="hidden mrgn-lft-md"> <span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> Passed</span><span id="mandatory-private-cloud-failed" class="hidden mrgn-lft-md"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> Failed</span><div><progress id="progress-mandatory-private-cloud" value="0" max="100"></progress></div></td>
<td headers="r1h5 r5h1 r5h2" class="wb-calculate" data-wb-calculate='{ "eventTrigger": "removeClass.action.wb-fieldflow", "operations": [
  { "type": "count", "increment": 1, "query": "#non-cloud-sensitivity-passed:not(.hidden), #non-cloud-financial-passed:not(.hidden), #non-cloud-legacy-passed:not(.hidden)", "outputTarget": "#tally-mandatory-non-cloud" },
  { "type": "percent", "decimalPlaces": 1, "inputs": [{ "type": "number", "query": "#tally-mandatory-non-cloud" }, 3], "outputTarget": "#percent-mandatory-non-cloud" },
  { "type": "number", "decimalPlaces": 0, "query": "#percent-mandatory-non-cloud", "outputTarget": "#progress-mandatory-non-cloud", "outputAttribute": "value" },
  { "type": "conditional", "inputs": [ { "type": "==", "inputs": [ 0, 0 ] } ],
    "actions": [ { "type": "event", "outputTarget": "#progress-mandatory-non-cloud", "outputEvent": "wb-update-wb-progress" } ]
  },
  { "type": "conditional", "inputs": [
      { "type": ">=", "inputs": [{ "type": "count", "query": "fieldset[data-wb-fieldflow-source=question-1] input:checked" }, 1] },
      { "type": ">=", "inputs": [{ "type": "count", "query": "fieldset[data-wb-fieldflow-source=question-2] input:checked" }, 1] },
      { "type": ">=", "inputs": [{ "type": "count", "query": "fieldset[data-wb-fieldflow-source=question-3] input:checked" }, 1] }
    ],
    "actions": [
      { "type": "conditional", "inputs": [{ "type": "==", "inputs": [{ "type": "number", "query": "#tally-mandatory-non-cloud"}, 3] }], "actions": [{ "type": "addClass", "class": "hidden", "outputTarget": "#mandatory-non-cloud-failed"}, { "type": "removeClass", "class": "hidden", "outputTarget": "#mandatory-non-cloud-passed"}] },
      { "type": "conditional", "inputs": [{ "type": "!=", "inputs": [{ "type": "number", "query": "#tally-mandatory-non-cloud"}, 3] }], "actions": [{ "type": "addClass", "class": "hidden", "outputTarget": "#mandatory-non-cloud-passed"}, { "type": "removeClass", "class": "hidden", "outputTarget": "#mandatory-non-cloud-failed"}] }
    ]
  }
] }'><span id="tally-mandatory-non-cloud">0</span> / 3 (<span id="percent-mandatory-non-cloud">0</span>%)<span id="mandatory-non-cloud-passed" class="hidden mrgn-lft-md"> <span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> Passed</span><span id="mandatory-non-cloud-failed" class="hidden mrgn-lft-md"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> Failed</span><div><progress id="progress-mandatory-non-cloud" value="0" max="100"></progress></div></td>
</tr>

<tr>
<th headers="r1h2" id="r5h3"><strong>Rated Totals</strong></th>
<td headers="r1h3 r5h1 r5h3" class="wb-calculate" data-wb-calculate='{ "eventTrigger": "removeClass.action.wb-fieldflow", "operations": [
  { "type": "add", "inputs": [{ "type": "count", "increment": 20, "query": "#public-cloud-commoditized-passed:not(.hidden), #public-cloud-location-passed:not(.hidden), #public-cloud-connectivity-passed:not(.hidden)" }, { "type": "count", "increment": 10, "query": "#public-cloud-speed-passed:not(.hidden), #public-cloud-longevity-passed:not(.hidden), #public-cloud-elasticity-passed:not(.hidden), #public-cloud-innovation-passed:not(.hidden), #public-cloud-devops-passed:not(.hidden)" }], "outputTarget": "#tally-rated-public-cloud" },
  { "type": "percent", "decimalPlaces": 1, "inputs": [{ "type": "number", "query": "#tally-rated-public-cloud" }, 110], "outputTarget": "#percent-rated-public-cloud" },
  { "type": "number", "decimalPlaces": 0, "query": "#percent-rated-public-cloud", "outputTarget": "#progress-rated-public-cloud", "outputAttribute": "value" },
  { "type": "conditional", "inputs": [ { "type": "==", "inputs": [ 0, 0 ] } ],
    "actions": [ { "type": "event", "outputTarget": "#progress-rated-public-cloud", "outputEvent": "wb-update-wb-progress" } ]
  }
] }'><span id="tally-rated-public-cloud">0</span> / 110 (<span id="percent-rated-public-cloud">0</span>%)<div><progress id="progress-rated-public-cloud" value="0" max="100"></progress></div></td>
<td headers="r1h4 r5h1 r5h3" class="wb-calculate" data-wb-calculate='{ "eventTrigger": "removeClass.action.wb-fieldflow", "operations": [
  { "type": "add", "inputs": [{ "type": "count", "increment": 20, "query": "#private-cloud-commoditized-passed:not(.hidden), #private-cloud-location-passed:not(.hidden), #private-cloud-connectivity-passed:not(.hidden)" }, { "type": "count", "increment": 10, "query": "#private-cloud-speed-passed:not(.hidden), #private-cloud-longevity-passed:not(.hidden), #private-cloud-elasticity-passed:not(.hidden), #private-cloud-innovation-passed:not(.hidden), #private-cloud-devops-passed:not(.hidden)" }], "outputTarget": "#tally-rated-private-cloud" },
  { "type": "percent", "decimalPlaces": 1, "inputs": [{ "type": "number", "query": "#tally-rated-private-cloud" }, 110], "outputTarget": "#percent-rated-private-cloud" },
  { "type": "number", "decimalPlaces": 0, "query": "#percent-rated-private-cloud", "outputTarget": "#progress-rated-private-cloud", "outputAttribute": "value" },
  { "type": "conditional", "inputs": [ { "type": "==", "inputs": [ 0, 0 ] } ],
    "actions": [ { "type": "event", "outputTarget": "#progress-rated-private-cloud", "outputEvent": "wb-update-wb-progress" } ]
  }
] }'><span id="tally-rated-private-cloud">0</span> / 110 (<span id="percent-rated-private-cloud">0</span>%)<div><progress id="progress-rated-private-cloud" value="0" max="100"></progress></div></td>
<td headers="r1h5 r5h1 r5h3" class="wb-calculate" data-wb-calculate='{ "eventTrigger": "removeClass.action.wb-fieldflow", "operations": [
  { "type": "add", "inputs": [{ "type": "count", "increment": 20, "query": "#non-cloud-commoditized-passed:not(.hidden), #non-cloud-location-passed:not(.hidden), #non-cloud-connectivity-passed:not(.hidden)" }, { "type": "count", "increment": 10, "query": "#non-cloud-speed-passed:not(.hidden), #non-cloud-longevity-passed:not(.hidden), #non-cloud-elasticity-passed:not(.hidden), #non-cloud-innovation-passed:not(.hidden), #non-cloud-devops-passed:not(.hidden)" }], "outputTarget": "#tally-rated-non-cloud" },
  { "type": "percent", "decimalPlaces": 1, "inputs": [{ "type": "number", "query": "#tally-rated-non-cloud" }, 110], "outputTarget": "#percent-rated-non-cloud" },
  { "type": "number", "decimalPlaces": 0, "query": "#percent-rated-non-cloud", "outputTarget": "#progress-rated-non-cloud", "outputAttribute": "value" },
  { "type": "conditional", "inputs": [ { "type": "==", "inputs": [ 0, 0 ] } ],
    "actions": [ { "type": "event", "outputTarget": "#progress-rated-non-cloud", "outputEvent": "wb-update-wb-progress" } ]
  }
] }'><span id="tally-rated-non-cloud">0</span> / 110 (<span id="percent-rated-non-cloud">0</span>%)<div><progress id="progress-rated-non-cloud" value="0" max="100"></progress></div></td>
</tr>
</tbody>
</table>

</section>
