---
layout: default
title: Évaluation d'impact algorithmique (draft)
lang: en
altLang: fr
altLangPage: algorithmic-impact-assessment
collectionDirectory: views-vues/automated-decision-automatise
---
{% assign dataVariable = site.playbookData[page.lang] %}{%
assign dataSource = site.data[dataVariable] %}

<section>

## Introduction

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

<!-- Question 1 -->
<div id="question-1" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"checkbox", "noForm": true, "base": { "live": true } }'>
<p>What is the nature of the decision being made by the system? (Check all that apply)</p>
<ul>
<li data-wb-fieldflow=''>Restricting movement into, out of, or within Canada</li>
<li data-wb-fieldflow=''>Identifying existing or potential criminality</li>
<li data-wb-fieldflow=''>Granting access to a secured premises or network</li>
<li data-wb-fieldflow=''>Providing funds to an individual, business, or other organization</li>
<li data-wb-fieldflow=''>Issuing a fine, administrative monetary penalty, or collection notice</li>
<li data-wb-fieldflow=''>Issuing licenses or permits</li>
<li data-wb-fieldflow=''>Granting a status that is required to receive a benefit or service</li>
<li data-wb-fieldflow=''>Categorize an individual, business, or market segment in terms of risk</li>
<li data-wb-fieldflow=''>None of the above</li>
</ul>
</div>

<!-- Question 2 -->
<div id="question-2" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"checkbox", "noForm": true, "base": { "live": true } }'>
<p>What are the key business drivers for automating the administrative decision-making process? (Check all that apply)</p>
<ul>
<li data-wb-fieldflow=''>Existing backlog of work or cases</li>
<li data-wb-fieldflow=''>Improve overall quality of decisions</li>
<li data-wb-fieldflow=''>Lower transaction costs of an existing program</li>
<li data-wb-fieldflow=''>The system is performing tasks that humans could not accomplish in a reasonable period of time</li>
<li data-wb-fieldflow=''>Improve client service delivery</li>
<li data-wb-fieldflow=''>Using innovative approaches</li>
</ul>
</div>

<!-- Question 3 -->
<div id="question-3" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true } }'>
<p>Is the scope of the system clearly reflected in project documentation?</p>
<ul>
<li data-wb-fieldflow=''>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

<!-- Question 4 -->
<div id="question-4" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"checkbox", "noForm": true, "base": { "live": true } }'>
<p>Has the design team consulted the following experts within their organization: (Check all that apply)</p>
<ul>
<li data-wb-fieldflow=''>Communications</li>
<li data-wb-fieldflow=''>Data and Information Management</li>
<li data-wb-fieldflow=''>Enterprise Architecture</li>
<li data-wb-fieldflow=''>Human Resources</li>
<li data-wb-fieldflow=''>IT/Cybersecurity</li>
<li data-wb-fieldflow=''>Legal</li>
<li data-wb-fieldflow=''>Service Delivery</li>
<li data-wb-fieldflow=''>Privacy</li>
</ul>
</div>

<!-- Question 5 -->
<div id="question-5" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true } }'>
<p>Have you developed Key Performance Indicators and benchmarks to measure and improve the system’s performance?</p>
<ul>
<li data-wb-fieldflow=''>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

<!-- Question 6 -->
<div id="question-6" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true } }'>
<p>Is there a process in place to document how data quality issues were resolved during the design process?</p>
<ul>
<li data-wb-fieldflow=''>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

<!-- Question 7 -->
<div id="question-7" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true } }'>
<p>Have appropriate strategies been developed to manage the risk that outdated or unreliable data is used to make an automated decision?</p>
<ul>
<li data-wb-fieldflow=''>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

<!-- Question 8 -->
<div id="question-8" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true } }'>
<p>Have you undertaken Gender Based Analysis Plus of the training data?</p>
<ul>
<li data-wb-fieldflow='{ "action": "append", "source": "#question-8-1" }'>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

<!-- Question 8.1 -->
<div id="question-8-1" class="hidden wb-fieldflow-sub" data-wb-fieldflow='{ "renderas":"radio" }'>
<p>Did the analysis highlight any risk to a particular gender, gender expression or identity, or visible minority?</p>
<ul>
<li data-wb-fieldflow='{ "action": "append", "source": "#question-8-1-1" }'>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

<!-- Question 8.1.1 -->
<div id="question-8-1-1" class="hidden wb-fieldflow-sub" data-wb-fieldflow='{ "renderas":"radio" }'>
<p>Have you documented mitigation strategies?</p>
<ul>
<li data-wb-fieldflow=''>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

<!-- Question 9 -->
<div id="question-9" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true } }'>
<p>Will your system make decisions specifically about Indigenous peoples or territory?</p>
<ul>
<li data-wb-fieldflow='[{ "action": "append", "source": "#question-9-1" }, { "action": "append", "source": "#question-9-2" }]'>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

<!-- Question 9.1 -->
<div id="question-9-1" class="hidden wb-fieldflow-sub" data-wb-fieldflow='{ "renderas":"radio" }'>
<p>Did you collect your data in a manner adherent to <a href="http://fnigc.ca/ocapr.html" target="_blank">OCAP<sup>TM</sup> principles</a>?</p>
<ul>
<li data-wb-fieldflow=''>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

<!-- Question 9.2 -->
<div id="question-9-2" class="hidden wb-fieldflow-sub" data-wb-fieldflow='{ "renderas":"radio" }'>
<p>Have you engaged Indigenous organizations in meaningful consultation in the design of the system?</p>
<ul>
<li data-wb-fieldflow='{ "action": "append", "source": "#question-9-2-1" }'>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

<!-- Question 9.2.1 -->
<div id="question-9-2-1" class="hidden wb-fieldflow-sub" data-wb-fieldflow='{ "renderas":"checkbox" }'>
<p>Which ones? (Check all that apply)</p>
<ul>
<li data-wb-fieldflow=''>Assembly of First Nations</li>
<li data-wb-fieldflow=''>Congress of Aboriginal Peoples</li>
<li data-wb-fieldflow=''>First Nations Information Governance Centre</li>
<li data-wb-fieldflow=''>Inuit Tapiriit Kanatami</li>
<li data-wb-fieldflow=''>Métis National Council</li>
<li data-wb-fieldflow=''>Native Women's Association of Canada</li>
<li data-wb-fieldflow=''>First Nations Technology Council</li>
<li data-wb-fieldflow=''>Band councils or Indigenous governments in relevant or affected regions</li>
</ul>
</div>

<!-- Question 10 -->
<div id="question-10" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true } }'>
<p>Does your system use contactless machine vision for biometric recognition (e.g. facial, full-body person, gait)?</p>
<ul>
<li data-wb-fieldflow='[{ "action": "append", "source": "#question-10-1" }, { "action": "append", "source": "#question-10-2" }]'>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

<!-- Question 10.1 -->
<div id="question-10-1" class="hidden wb-fieldflow-sub" data-wb-fieldflow='{ "renderas":"radio" }'>
<p>Does your system perform within acceptable parameters for all skin colours as defined by the Fitzpatrick Skin Type scale or similar measurement?</p>
<ul>
<li data-wb-fieldflow=''>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

<!-- Question 10.2 -->
<div id="question-10-2" class="hidden wb-fieldflow-sub" data-wb-fieldflow='{ "renderas":"radio" }'>
<p>Where applicable, have you tested to ensure that the system performs within acceptable parameters with persons who have a disability that may cause them to be unduly disadvantaged by the machine vision component? (For example, ensuring that a gait analysis tool does not unduly disadvantage an individual that uses a wheelchair)</p>
<ul>
<li data-wb-fieldflow=''>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

<!-- Question 11 -->
<div id="question-11" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true } }'>
<p>Does the system have a governance structure?</p>
<ul>
<li data-wb-fieldflow='{ "action": "append", "source": "#question-11-1" }'>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

<!-- Question 11.1 -->
<div id="question-11-1" class="hidden wb-fieldflow-sub" data-wb-fieldflow='{ "renderas":"checkbox" }'>
<p>Does the governance structure assign accountability for the following stages of design: (Check all that apply)</p>
<ul>
<li data-wb-fieldflow=''>Design</li>
<li data-wb-fieldflow=''>Development</li>
<li data-wb-fieldflow=''>Implementation</li>
<li data-wb-fieldflow=''>Maintenance</li>
</ul>
</div>

<!-- Question 12 -->
<div id="question-12" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true } }'>
<p>Does the system interface with other IT systems?</p>
<ul>
<li data-wb-fieldflow='{ "action": "append", "source": "#question-12-1" }'>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

<!-- Question 12.1 -->
<div id="question-12-1" class="hidden wb-fieldflow-sub" data-wb-fieldflow='{ "renderas":"radio" }'>
<p>Where it interfaces with other systems, have you clearly identified the business processes that occur between systems?</p>
<ul>
<li data-wb-fieldflow=''>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

<!-- Question 13 -->
<div id="question-13" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"checkbox", "noForm": true, "base": { "live": true } }'>
<p>Are you planning to make information about system functionality publicly available? (Check all that apply)</p>
<ul>
<li data-wb-fieldflow=''>Training data sources</li>
<li data-wb-fieldflow=''>Decision trees</li>
<li data-wb-fieldflow=''>Confidence thresholds</li>
<li data-wb-fieldflow=''>Pre-defined models</li>
<li data-wb-fieldflow=''>Criteria</li>
<li data-wb-fieldflow=''>Classification structures</li>
</ul>
</div>

<!-- Question 14 -->
<div id="question-14" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true } }'>
<p>Have the system design and processes been reviewed by the appropriate Legal Services Unit and other legal experts, as required?</p>
<ul>
<li data-wb-fieldflow='[{ "action": "append", "source": "#question-14-1" }, { "action": "append", "source": "#question-14-2" }]'>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

<!-- Question 14.1 -->
<div id="question-14-1" class="hidden wb-fieldflow-sub" data-wb-fieldflow='{ "renderas":"radio" }'>
<p>Has a formal opinion been issued?</p>
<ul>
<li data-wb-fieldflow=''>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

<!-- Question 14.2 -->
<div id="question-14-2" class="hidden wb-fieldflow-sub" data-wb-fieldflow='{ "renderas":"radio" }'>
<p>Have the relevant areas of legislation been identified during the scoping phase?</p>
<ul>
<li data-wb-fieldflow=''>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

<!-- Question 15 -->
<div id="question-15" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true } }'>
<p>Does the system require the exercise of discretion or judgment by an officer? (i.e., human in the loop)</p>
<ul>
<li data-wb-fieldflow='[{ "action": "append", "source": "#question-15-1" }, { "action": "append", "source": "#question-15-2" }]'>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

<!-- Question 15.1 -->
<div id="question-15-1" class="hidden wb-fieldflow-sub" data-wb-fieldflow='{ "renderas":"radio" }'>
<p>Have all the decision points that involve the exercise of discretion or judgement been clearly identified as requiring human input?</p>
<ul>
<li data-wb-fieldflow=''>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

<!-- Question 15.2 -->
<div id="question-15-2" class="hidden wb-fieldflow-sub" data-wb-fieldflow='{ "renderas":"radio" }'>
<p>Are the business rules relating to discretion or judgment contained in the automated system open to internal and external review?</p>
<ul>
<li data-wb-fieldflow=''>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

<!-- Question 16 -->
<div id="question-16" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true } }'>
<p>Does the Automated Decision System require the us of personal information?</p>
<ul>
<li data-wb-fieldflow='{ "action": "append", "source": "#question-16-1" }'>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

<!-- Question 16.1 -->
<div id="question-16-1" class="hidden wb-fieldflow-sub" data-wb-fieldflow='{ "renderas":"radio" }'>
<p>Have you undertaken a Privacy Impact Assessment?</p>
<ul>
<li data-wb-fieldflow=''>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

<!-- Question 17 -->
<div id="question-17" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true } }'>
<p>Have you conducted a Security Assessment and Authorization?</p>
<ul>
<li data-wb-fieldflow=''>Yes</li>
<li data-wb-fieldflow=''>No</li>
<li data-wb-fieldflow=''>Not applicable</li>
</ul>
</div>

<!-- Question 18 -->
<div id="question-18" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true } }'>
<p>Is there a process in place to monitor and grant access permission?</p>
<ul>
<li data-wb-fieldflow=''>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

<!-- Question 19 -->
<div id="question-19" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true } }'>
<p>Does the system enable human override of system decisions?</p>
<ul>
<li data-wb-fieldflow=''>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

<!-- Question 20 -->
<div id="question-20" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true } }'>
<p>Does the system enable override of human decisions?</p>
<ul>
<li data-wb-fieldflow=''>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

<!-- Question 21 -->
<div id="question-21" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true } }'>
<p>Does the system enable the override of other automated decision systems?</p>
<ul>
<li data-wb-fieldflow=''>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

<!-- Question 22 -->
<div id="question-22" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true } }'>
<p>Do you have processes in place to log the instances where overrides were performed?</p>
<ul>
<li data-wb-fieldflow=''>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

<!-- Question 23 -->
<div id="question-23" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true } }'>
<p>Do you have a process in place to test and verify business rules?</p>
<ul>
<li data-wb-fieldflow=''>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

<!-- Question 24 -->
<div id="question-24" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true } }'>
<p>Did you develop verification processes, for example testing for unintentional outcomes?</p>
<ul>
<li data-wb-fieldflow=''>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

<!-- Question 25 -->
<div id="question-25" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true } }'>
<p>Did you develop a verification strategy to assess whether the system is being used as designed and intended?<</p>
<ul>
<li data-wb-fieldflow=''>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

<!-- Question 26 -->
<div id="question-26" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true } }'>
<p>Is the system used by a different part of the organization than the ones who developed it?</p>
<ul>
<li data-wb-fieldflow='{ "action": "append", "source": "#question-26-1" }'>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

<!-- Question 26.1 -->
<div id="question-26-1" class="hidden wb-fieldflow-sub" data-wb-fieldflow='{ "renderas":"radio" }'>
<p>Did you develop training programs to ensure that the system is used effectively and properly?</p>
<ul>
<li data-wb-fieldflow='{ "action": "append", "source": "#question-26-1-1" }'>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

<!-- Question 26.1.1 -->
<div id="question-26-1-1" class="hidden wb-fieldflow-sub" data-wb-fieldflow='{ "renderas":"radio" }'>
<p>Do you have mechanisms in place to ensure that training requirements are being met?</p>
<ul>
<li data-wb-fieldflow=''>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

<!-- Question 27 -->
<div id="question-27" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true } }'>
<p>Can the system provide an audit trail that can monitor recommendations, decisions, and processes?</p>
<ul>
<li data-wb-fieldflow='[{ "action": "append", "source": "#question-27-1" }, { "action": "append", "source": "#question-27-2" }, { "action": "append", "source": "#question-27-3" }, { "action": "append", "source": "#question-27-4" }, { "action": "append", "source": "#question-27-5" }]'>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

<!-- Question 27.1 -->
<div id="question-27-1" class="hidden wb-fieldflow-sub" data-wb-fieldflow='{ "renderas":"radio" }'>
<p>Does the audit trail clearly set out all decision points made by the system?</p>
<ul>
<li data-wb-fieldflow=''>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

<!-- Question 27.2 -->
<div id="question-27-2" class="hidden wb-fieldflow-sub" data-wb-fieldflow='{ "renderas":"radio" }'>
<p>Can the decisions made by the system be incorporated into a statement, reasons or other written notification, where required?</p>
<ul>
<li data-wb-fieldflow=''>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

<!-- Question 27.3 -->
<div id="question-27-3" class="hidden wb-fieldflow-sub" data-wb-fieldflow='{ "renderas":"radio" }'>
<p>Have you designed the audit trail to include clearly identifiable links to: authorized delegations, including relevant legislation, policy or procedures?</p>
<ul>
<li data-wb-fieldflow=''>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

<!-- Question 27.4 -->
<div id="question-27-4" class="hidden wb-fieldflow-sub" data-wb-fieldflow='{ "renderas":"checkbox" }'>
<p>Have you included change control processes in the audit trail to: (Check all that apply)</p>
<ul>
<li data-wb-fieldflow=''>Record modifications to the system's operation or performance</li>
<li data-wb-fieldflow=''>Reflect changes to the legislation that underpins the operation of the system</li>
</ul>
</div>

<!-- Question 27.5 -->
<div id="question-27-3" class="hidden wb-fieldflow-sub" data-wb-fieldflow='{ "renderas":"radio" }'>
<p>Does the audit trail show who an authorized decision-maker is?</p>
<ul>
<li data-wb-fieldflow=''>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

<!-- Question 28 -->
<div id="question-28" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true } }'>
<p>If the system is intended to undertake tasks currently undertaken by human staff, have you engaged your departmental human resources?</p>
<ul>
<li data-wb-fieldflow=''>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

<!-- Question 29 -->
<div id="question-29" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true } }'>
<p>Have you developed a communications strategy to address any potential changes to work practices for officers?</p>
<ul>
<li data-wb-fieldflow=''>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

<!-- Question 30 -->
<div id="question-30" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true } }'>
<p>Have you developed an external communications plan?</p>
<ul>
<li data-wb-fieldflow=''>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

<!-- Question 31 -->
<div id="question-31" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true } }'>
<p>Have you established appropriate user/client feedback mechanisms?</p>
<ul>
<li data-wb-fieldflow=''>Yes</li>
<li data-wb-fieldflow=''>No</li>
</ul>
</div>

</form>
</div>
</section>

<!--Results-->
<section>

## Results

<table class="table table-bordered table-condensed">
<thead>
<tr>
<th>Criteria</th>
<th>Points total</th>
<th>Percentage</th>
</tr>
</thead>
<tbody>
<tr>
<td>Criteria 1</td>
<td><span id="tally-criteria1">0</span> / 200</td>
<td><span id="percent-criteria1">0</span>%</td>
</tr>
<tr>
<td>Criteria 2</td>
<td><span id="tally-criteria2">0</span> / 200</td>
<td><span id="percent-criteria2">0</span>%</td>
</tr>
</tbody>
</table>

<details>

<summary>Detailed results</summary>

<table class="table table-bordered table-condensed">
<thead>
<tr>
<th>Question</th>
<th>Answer selected</th>
<th>Criteria 1</th>
<th>Criteria 2</th>
</tr>
</thead>
<tbody>
<tr>
<td>Question 1 text</td>
<td>Answer selected</td>
<td>Points impact</td>
<td>Points impact</td>
</tr>
<tr>
<td>Question 3 text</td>
<td>Answer selected</td>
<td>Points impact</td>
<td>Points impact</td>
</tr>
</tbody>
</table>

</details>

</section>
