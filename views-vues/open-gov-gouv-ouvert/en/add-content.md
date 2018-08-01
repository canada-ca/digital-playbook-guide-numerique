---
layout: default
title: How do I add content to the Open Government Portal - open.canada.ca? (draft)
lang: en
altLang: fr
altLangPage: ajouter-contenu
collectionDirectory: views-vues/open-gov-gouv-ouvert
step1:
  title: "Step 1: Determine if the dataset or information asset should be released"
  q1Label: Does the content help explain who you are? (e.g., Departmental/agency information, location(s) and contacts, constitutional and legal governance)
  q2Label: Is the content about the programs or services you offer? (e.g., description of services offered, including advice and guidance, publications, administrative data, transactions, grants and contributions and media releases)
  q3Label: Is the content about your finances, what you spend and how you spend it? (e.g., projected and actual income and expenditures, tendering, procurement and contracts, travel and hospitality, position reclassifications, annual report of Minister's office expenses)
  q4Label: Is the content about your priorities, and how you're doing? (e.g., strategy and performance information, assessments and reviews, Ministerial mandate letters, reports tabled in Parliament)
  q5Label: Is the content about your policies and procedures? (e.g., protocols for delivering your functions and responsiblities, policy proposals and announcements, decision-making processes and consultations)
  q6Label: Is the content about your lists and registers? (e.g., information held in registers required by legislation and others lists and registers relating to your functions, summaries of complete Access to Information requests, etc.)
  q7Label: Will the asset provide a benefit to Canadians either by improving services or allowing for innovation and economic growth?
  q8Label: Has the asset been frequently requested through an Access to Information request?
  q9Label: Will the asset allow the public to better understand GC priorities and commitments?
  q10Label: Will the asset provide value to other GC institutions and provide more effective services?
  q11Label: Does the asset provide information valuable to researchers, students, academics, or interested citizens?
  failTitle: Should not be released
  failBody: Based upon your previous answers, the dataset or information asset should not be released.
step2:
  title: "Step 2: Determine if the dataset or information asset is subject to restrictions"
  q1Label: Does the dataset or information contain classified or protected information?
  q2Label1: Does the dataset or information asset contain Personal Information
  q2Label2: "about an individual's:"
  q2Sub1Label: a. race?
  q2Sub2Label: b. national or ethnic origin?
  q2Sub3Label: c. religion?
  q2Sub4Label: d. age?
  q2Sub5Label: e. marital status?
  q2Sub6Label: f. Medical, criminal or employment history status?
  q2Footnote: Personal information, as defined by the Privacy Act, is 
  q2FootnoteQuote: \"information about an identifiable individual that is recorded in any form\"
  q3Label: Does the dataset or information asset contain information about vulnerable or targeted individuals? (e.g., information related to policing activities or prison guards)
  q4Label: Is the dataset or information asset subject to legal or contractual agreements that prevent it from being released? (e.g., commercial licenses, non-disclosure agreements of vendor limitations)
  q5Label: Could the dataset or information be subject to legal or contractual agreements that prevent if rom being released? (e.g., commercial licenses, non-disclosure agreements of vendor limitations)
  q6Label: Could the dataset or information asset potentially breach confidentiality if its release impairs the government's ability to make decisions? (e.g., court rulings or negotiations such as collective bargaining or international trade agreements)
  failTitle: Subject to restrictions
  failBody: Based upon your last answer, the dataset or information asset is subject to restrictions so should not be released.
step3:
  title: "Step 3: Assess the dataset or information asset's readiness for release"
  q1Label: Is the dataset or information asset available in an accessible format, that meets the Standard on Web Accessibility (e.g., CSV, XML, HTML, PDF/UA)
  q2Label: Is the dataset or information asset provided in both official languages?
  q3Label: Can the dataset or information asset be released under the Open Government Licence?
  q4Label: Has the asset been assessed and verified for quality? (e.g., completeness, accuracy, timeliness, consistency)
  q5Label: Has a data dictionary been developed to describe elements within the dataset?
  q6Label: Has the dataset or information asset been approved for release to the publiv by the CIO / IMSO?
  failTitle: Not ready for release
  failBody: Based upon your last answer, the dataset or information asset is not ready for release.
---
{% assign dataVariable = site.playbookData[page.lang] %}{%
assign dataSource = site.data[dataVariable] %}

<section>

## Introduction

The Government of Canada is committed to maximizing the release of government information and data to support transparency, accountability, citizen engagement, and socio-economic benefits, as captured in the [Directive on Open Government](https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=28108).

This page was developed to assist you with determining if a dataset (structured information) or information asset (unstructured information) should be released on open.canada.ca.

The process entails the following steps:

- Step 1: Determine if the dataset or information asset should be released
- Step 2: Determine if the dataset or information asset is subject to restrictions
- Step 3: Assess the dataset or information asset's readiness for release
- Step 4: Release the dataset or information asset on open.canada.ca

</section>

{% include views-vues/open-gov-gouv-ouvert/add-content-ajouter-contenu-questionnaire.html %}

<section id="step4-section" class="hidden">

## Step 4. Release the dataset or information asset on open.canada.ca

In order to add a dataset or information to the Open Government Portal, you will need to create a metadata record to describe the dataset or information asset using the Open Government Registry.

The [Open Government Registry Guide](https://open.canada.ca/ckan/en/dataset/c2529700-2728-5c39-9107-1102e9cfb7bb) provides details on the required steps to release a record on open.canada.ca.

Once the record has been developed, you can email open-ouvert@tbs-sct.gc.ca to review your record, and have it released on open.canada.ca.

For any questions, please reach out to the Open Government group at open-ouvert@tbs-sct.gc.ca.

<section>

### Implementation guides

- [Open Government Guidebook](https://open.canada.ca/ckan/en/dataset/9eaa6d0e-4b8c-5241-acf7-c6885294b8c1)

</section>

</section>

</div>

<aside id="footnotes-aside" class="wb-fnote hidden" role="note">
<h3 id="fn">{{ site.Footnotes[ page.lang ] }}</h3>
<dl>
<dt>{{ site.Footnote[ page.lang ] }} 1</dt>
<dd id="fn1">
<p>{{ page.step2.q2Footnote }} <q cite="http://laws-lois.justice.gc.ca/{% if page.lang == "en" %}eng{% else %}fra{% endif %}/lois/P-21/page-1.html#h-3">{{ page.step2.q2FootnoteQuote }}</q></p>
<p class="fn-rtn"><a href="#fn1-rf"><span class="wb-inv">{{ site.ReturnToFootnote[ page.lang ] }} </span>1{% if page.lang == "en" %}<span class="wb-inv"> referrer</span>{% endif %}</a></p>
</dd>
</dl>
</aside>

</div>

</form>
</div>
