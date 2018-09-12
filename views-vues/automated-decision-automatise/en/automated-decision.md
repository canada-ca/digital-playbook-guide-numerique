---
layout: default
title: How should I implement an Automated Decision System? (draft)
lang: en
altLang: fr
altLangPage: decision-automatise
collectionDirectory: views-vues/automated-decision-automatise
---
{% assign dataVariable = site.playbookData[page.lang] %}{%
assign dataSource = site.data[dataVariable] %}

This page provides personalized guidance for how projects can implement an Automated Decision System.

The Government of Canada is increasingly looking to utilise technology and automated systems to make, or assist in making, administrative decisions to improve service delivery. It is committed to doing so in a manner that is compatible with core administrative law principles such as transparency, accountability, legality and procedural fairness.
{: data-dpgn-data-include='&#123; "standard": "8", "section": "introduction" &#125;' data-content-source-uri="{{ site.AutomatedDecisionSystems.DirectiveURL[ page.lang ] }}" data-content-source-title="Introduction, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}" .dpgn-automated-decision}

<!-- markdownlint-disable MD032 -->
- TOC
{:toc .lst-spcd}
<!-- markdownlint-enable MD032 -->

<details>
<summary markdown="0">Filters (page-specific)</summary>
<form action="#" method="post" class="wb-contentfilter">
<fieldset>
<legend>Automated Decision System type</legend>
<ul class="list-unstyled">
<li><input type="checkbox" id="dpgn-automated-decision-type-file-triage-assignment" /> <label for="dpgn-automated-decision-type-file-triage-assignment">File triage or assignment</label></li>
<li><input type="checkbox" id="dpgn-automated-decision-type-risk-scoring-categorization" /> <label for="dpgn-automated-decision-type-risk-scoring-categorization">Risk scoring, profiling, or categorization</label></li>
<li><input type="checkbox" id="dpgn-automated-decision-type-recommendation" /> <label for="dpgn-automated-decision-type-recommendation">Recommendation to take a certain course of action</label></li>
<li><input type="checkbox" id="dpgn-automated-decision-type-full-decision" /> <label for="dpgn-automated-decision-type-full-decision">Full end-to-end decision</label></li>
</ul>
</fieldset>

<fieldset>
<legend>Impact level</legend>
<ul class="list-unstyled">
<li><input type="checkbox" id="dpgn-automated-decision-level-i" /> <label for="dpgn-automated-decision-level-i">Level I</label></li>
<li><input type="checkbox" id="dpgn-automated-decision-level-ii" /> <label for="dpgn-automated-decision-level-ii">Level II</label></li>
<li><input type="checkbox" id="dpgn-automated-decision-level-iii" /> <label for="dpgn-automated-decision-level-iii">Level III</label></li>
<li><input type="checkbox" id="dpgn-automated-decision-level-iv" /> <label for="dpgn-automated-decision-level-iv">Level IV</label></li>
</ul>

<details>
<summary markdown="0">Impact level details</summary>
<dl>
<dt>Level I</dt>
<dd>
<p><strong>The decision has a little to no impact on the rights or interests of an individual, community, organization, sociey, or the environment.</strong></p>
<p>Erroneous decision could reasonably be expected to cause nil to minimial harm.</p>
</dd>
<dt>Level II</dt>
<dd>
<p><strong>The decision has a moderate impact on the rights or interests of an individual, community, organization, sociey, or the environment.</strong></p>
<p>Compromise could reasonably be expected to cause minimal to moderate harm.</p>
</dd>
<dt>Level III</dt>
<dd>
<p><strong>The decision has a high impact on the rights or interests of an individual, community, organization, sociey, or the environment.</strong></p>
<p>Compromise could reasonably be expected to cause moderate to serious harm.</p>
</dd>
<dt>Level IV</dt>
<dd>
<p><strong>The decision has a very high impact on the rights or interests of an individual, community, organization, sociey, or the environment.</strong></p>
<p>Compromise could reasonably be expected to cause serious to catastrophic harm.</p>
</dd>
</dl>
</details>
</fieldset>
<input type="button" value="{{ site.ApplyFilters[page.lang] }}" class="btn btn-primary contentfilter-button" />
</form>
</details>

<section>

## 1. Initiation

<section>
{% include /functions/output-section-heading.html parentHeadingLevel=2 sectionType="checklist" %}

<!-- markdownlint-disable MD032 -->
<!-- markdownlint-disable MD034 -->
- {: data-dpgn-data-include='&#123; "guideline": "9.1", "section": "checklist" &#125;' data-content-source-title="{{ contentSourceTitle611 }}"} Complete an [{{ site.AutomatedDecisionSystems.ImpactAssessment[ page.lang ] | downcase }}]({{ site.AutomatedDecisionSystems.ImpactAssessmentURL[ page.lang ] }}), prior to the production of any Automated Decision System.
- {: data-dpgn-data-include='&#123; "guideline": "9.2", "section": "checklist" &#125;' data-content-source-title="Section 6.1.2, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Apply the following relevant requirements as determined by the [{{ site.AutomatedDecisionSystems.ImpactAssessment[ page.lang ] | downcase }}]({{ site.AutomatedDecisionSystems.ImpactAssessmentURL[ page.lang ] }}):
  - {: data-content-source-title="Appendix C, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Approval Requirement:
    - {: .dpgn-automated-decision-level-i} **Level I:** None
    - {: .dpgn-automated-decision-level-ii} **Level II:** Government of Canada Enterprise Architecture Review Board
    - {: .dpgn-automated-decision-level-iii} **Level III:** Government of Canada Enterprise Architecture Review Board
    - {: .dpgn-automated-decision-level-iv} **Level IV:**
      - Government of Canada Enterprise Architecture Review Board
      - Requires specific authority from Treasury Board
- {: data-dpgn-data-include='&#123; "guideline": "9.1", "section": "checklist" &#125;' data-content-source-title="Section 6.1.3, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Ensure that the [{{ site.AutomatedDecisionSystems.ImpactAssessment[ page.lang ] | downcase }}]({{ site.AutomatedDecisionSystems.ImpactAssessmentURL[ page.lang ] }}) remains up to date and accurately reflects the functionality of the Automated Decision System.
- {: data-dpgn-data-include='&#123; "guideline": "3.2", "section": "checklist" &#125;' data-content-source-title="Section 6.1.4, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Release the final results of Algorithmic Impact Assessments in an accessible format via Government of Canada websites and services designated by the Treasury Board of Canada Secretariat pursuant to the [Directive on Open Government](https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=28108).
{: data-content-source-uri="{{ site.AutomatedDecisionSystems.DirectiveURL[ page.lang ] }}" .lst-spcd .dpgn-automated-decision-initiation .dpgn-automated-decision}
<!-- markdownlint-enable MD034 -->
<!-- markdownlint-enable MD032 -->

</section>

{% include /functions/output-sections.html parentHeadingLevel="2" relevantTags="dpgn-automated-decision-initiation" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>

<section>

## 2. Analysis/Approach

<section>
{% include /functions/output-section-heading.html parentHeadingLevel=2 sectionType="checklist" %}

<!-- markdownlint-disable MD032 -->
<!-- markdownlint-disable MD034 -->
- {: data-dpgn-data-include='&#123; "guideline": "9.2", "section": "checklist" &#125;' {: data-content-source-title="Section 6.3.8, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Consult with the institution’s legal services unit, to ensure that the use of the Automated Decision System System is compliant with applicable legal requirements.
- {: data-dpgn-data-include='&#123; "guideline": "5.1", "section": "checklist" &#125;' data-content-source-title="Section 6.3.7, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Conduct risk assessments throughout the development of the system and ensure appropriate safeguards to be applied, as per the [Policy on Government Security](https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=16578).
{: data-content-source-uri="{{ site.AutomatedDecisionSystems.DirectiveURL[ page.lang ] }}" .lst-spcd .dpgn-automated-decision-analysis-approach .dpgn-automated-decision}
<!-- markdownlint-enable MD034 -->
<!-- markdownlint-enable MD032 -->

</section>

{% include /functions/output-sections.html parentHeadingLevel="2" relevantTags="dpgn-automated-decision-analysis-approach" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>

<section>

## 3. Design/Build

<section>
{% include /functions/output-section-heading.html parentHeadingLevel=2 sectionType="checklist" %}

<!-- markdownlint-disable MD032 -->
<!-- markdownlint-disable MD034 -->
- {: data-dpgn-data-include='&#123; "guideline": "10.1", "section": "checklist" &#125;' data-content-source-title="Section 6.3.4 and Appendix C, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Retain the following appropriate expert to review the Automated Decision System, based on the Impact Assessment Level:
  - {: .dpgn-automated-decision-level-i} **Level I:** None
  - {: .dpgn-automated-decision-level-ii} **Level II:** At least one of:
    - Qualified expert from a federal, provincial, territorial or municipal government institution
    - Qualified members of faculty of a post-secondary institution
    - Qualified researchers from a relevant non-governmental organization
    - Contracted third-party vendor with a related specialization
    - Publishing specifications of the Automated Decision System in a peer-reviewed journal
  - {: .dpgn-automated-decision-level-iii} **Level III:** At least one of:
    - Qualified expert from a federal, provincial, territorial or municipal government institution
    - Qualified members of faculty of a post-secondary institution
    - Qualified researchers from a relevant non-governmental organization
    - Contracted third-party vendor with a related specialization
    - Publishing specifications of the Automated Decision System in a peer-reviewed journal
  - {: .dpgn-automated-decision-level-iv} **Level IV:** At least two of:
    - Qualified experts from the National Research Council of Canada or Statistics Canada
    - Qualified members of faculty of a post-secondary institution
    - Qualified researchers from a relevant non-governmental organization
    - Contracted third-party vendor with a related specialization
    - **OR:** Publishing specifications of the Automated Decision System in a peer-reviewed journal
- {: .dpgn-standards-hide data-dpgn-data-include='&#123; "guideline": "4.1", "section": "checklist" &#125;' data-content-source-title="Section 6.3.5 and Appendix C, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Ensure that the relevant employees are sufficiently trained in the design, function, and implementation of the Automated Decision System to be able to review, explain and oversee automated decision-making, as prescribed in the following:
  - {: .dpgn-automated-decision-level-i} **Level I:** None
  - {: .dpgn-automated-decision-level-ii} **Level II:** Documentation on the design and functionality of the system
  - {: .dpgn-automated-decision-level-iii} **Level III:**
    - Documentation on the design and functionality of the system
    - Training courses muse be completed.
  - {: .dpgn-automated-decision-level-iv} **Level IV:**
    - Documentation on the design and functionality of the system
    - Reocurring training courses.
    - A means to verify that training has been completed.
{: data-content-source-uri="{{ site.AutomatedDecisionSystems.DirectiveURL[ page.lang ] }}" .lst-spcd .dpgn-automated-decision-design-build .dpgn-automated-decision}
<!-- markdownlint-enable MD034 -->
<!-- markdownlint-enable MD032 -->

</section>

{% include /functions/output-sections.html parentHeadingLevel="2" relevantTags="dpgn-automated-decision-design-build" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>

<section>

## 4. Deployment/Operation

<section>
{% include /functions/output-section-heading.html parentHeadingLevel=2 sectionType="checklist" %}

<!-- markdownlint-disable MD032 -->
<!-- markdownlint-disable MD034 -->
- {: data-dpgn-data-include='&#123; "guideline": "3.2", "section": "checklist" &#125;' data-content-source-title="Section 6.2.3, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Make available to the public all of the source code used for the Automated Decision Systems on the [Open Resource Exchange](https://canada-ca.github.io/ore-ero/home.html).
- {: data-dpgn-data-include='&#123; "guideline": "3.2", "section": "checklist" &#125;' data-content-source-title="Section 6.2.4, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} In cases where it is deemed that source code should not be disclosed, seek the approval of the Enterprise Architecture Review Board to exempt the disclosure. In these cases, the justification as to why code was not disclosed shall be published according to the process specified in the [Directive on Open Government](https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=28108).
- {: data-dpgn-data-include='&#123; "guideline": "3.2", "section": "checklist" &#125;' data-content-source-title="Section 6.2.5, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Source code for systems that are classified SECRET or TOP SECRET are exempt from making it available to the public on the Open Resource Exchange.
- {: data-dpgn-data-include='&#123; "guideline": "3.2", "section": "checklist" &#125;' data-content-source-title="Section 6.2.6, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Ensure that all licenses required for the Automated Decision Systems are open licenses as listed in the [Open Source Software Registry](https://drive.google.com/open?id=1xISkyXdlFVw5cZv91SKQSVJ88R5OtmPLp33NeH28PQY).
- {: data-dpgn-data-include='&#123; "guideline": "3.2", "section": "checklist" &#125;' data-content-source-title="Section 6.2.7, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Ensure that Canada maintains the right to have access to foreground intellectual property to respond to any legal challenges.
- {: data-dpgn-data-include='&#123; "guideline": "9.2", "section": "checklist" &#125;' data-content-source-title="Section 6.3.1, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Before going into production, develop the appropriate processes to ensure that training data is tested for unintended biases and other factors that may unfairly impact outcomes.
- {: data-dpgn-data-include='&#123; "guideline": "9.2", "section": "checklist" &#125;' data-content-source-title="Section 6.2.1 and Appendix C, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Notify affected individuals that the decision rendered will be undertaken in whole or in part by a Automated Decisions Systems as prescribed in the following:
  - {: .dpgn-automated-decision-level-i} **Level I:** None
  - {: .dpgn-automated-decision-level-ii} **Level II:** Plain language notification listed on the program or service website.
  - {: .dpgn-automated-decision-level-iii} **Level III:**
    - Plain language notification listed on the program or service website.
    - If the service involves an online application, the notice must be made at the time of the application.
    - Website must link to additional information where information about the system is provided, including:
      - The role that the Automated Decisions System, has within the decision process,
      - A description of the training data, or a link to the anonymized training data if this data is publicly available, and
      - A description of the criteria used for making the decision, including relevant business rules.
  - {: .dpgn-automated-decision-level-iv} **Level IV:**
    - Plain language notification listed on the program or service website.
    - If the service involves an online application, the notice must be made at the time of the application.
    - Website must link to additional information where information about the system is provided, including:
      - The role that the Automated Decisions Syste, has within the decision process,
      - A description of the training data, or a link to the anonymized training data if this data is publicly available, and
      - A description of the criteria used for making the decision, including relevant business rules.
- {: data-dpgn-data-include='&#123; "guideline": "9.2", "section": "checklist" &#125;' data-content-source-title="Section 6.2.2, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Provide a meaningful explanation to affected individuals of how and why the decision was made as prescribed in the following:
  - {: .dpgn-automated-decision-type-file-triage-assignment .dpgn-automated-decision-type-risk-scoring-categorization data-content-source-title="Appendix C, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Explanation Requirement for Recommendation:
    - {: .dpgn-automated-decision-level-i} **Level I:** None
    - {: .dpgn-automated-decision-level-ii} **Level II:** None
    - {: .dpgn-automated-decision-level-iii} **Level III:** Meaningful explanation provided upon request based on machine or human review.
    - {: .dpgn-automated-decision-level-iv} **Level IV:**
      - Meaningful explanation, including the variables in the decision, provided with the decision rendered.
      - Explanation can be human or machine generated.
  - {: .dpgn-automated-decision-type-recommendation .dpgn-automated-decision-type-full-decision data-content-source-title="Appendix C, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Explanation Requirement for Decisions:
    - {: .dpgn-automated-decision-level-i} **Level I:** An explanation provided upon request based on machine or human review. This could include a Frequently Asked Questions section of a website.
    - {: .dpgn-automated-decision-level-ii} **Level II:** Meaningful explanation provided upon request based on machine or human review.
    - {: .dpgn-automated-decision-level-iii} **Level III:**
      - Meaningful explanation, including variables used in the decision, provided with the decision rendered.
      - Explanation can be human or machine generated.
    - {: .dpgn-automated-decision-level-iv} **Level IV:**
      - Meaningful explanation, including variables used in the decision, provided with the decision rendered.
      - Explanation can be human or machine generated.
- {: data-dpgn-data-include='&#123; "guideline": "9.2", "section": "checklist" &#125;' data-content-source-title="Section 6.4.1, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Provide affected individuals with information regarding options that are available to them for recourse to challenge the automated decision or recommendation.
- {: data-dpgn-data-include='&#123; "guideline": "9.2", "section": "checklist" &#125;' data-content-source-title="Section 6.3.6 and Appendix C, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Subject to requirements prescribed in the following, ensure that a contingency systems and/or processes are available should the Automated Decision System be unavailable for an extended period of time:
  - {: .dpgn-automated-decision-level-i} **Level I:** None
  - {: .dpgn-automated-decision-level-ii} **Level II:** None
  - {: .dpgn-automated-decision-level-iii} **Level III:** Ensure that a contingency plans and/or backup systems are available should the Automated Decision System be unavailable.
  - {: .dpgn-automated-decision-level-iv} **Level IV:** Ensure that a contingency plans and/or backup systems are available should the Automated Decision System be unavailable.
{: data-content-source-uri="{{ site.AutomatedDecisionSystems.DirectiveURL[ page.lang ] }}" .lst-spcd .dpgn-automated-decision-deployment-operation .dpgn-automated-decision}
<!-- markdownlint-enable MD034 -->
<!-- markdownlint-enable MD032 -->

</section>

{% include /functions/output-sections.html parentHeadingLevel="2" relevantTags="dpgn-automated-decision-deployment-operation" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>

<section>

## 5. Evaluation

<section>
{% include /functions/output-section-heading.html parentHeadingLevel=2 sectionType="checklist" %}

<!-- markdownlint-disable MD032 -->
<!-- markdownlint-disable MD034 -->
- {: data-dpgn-data-include='&#123; "guideline": "8.2", "section": "checklist" &#125;' data-content-source-title="Section 6.3.2, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Monitor the outcomes of Automated Decision Systems on an ongoing basis to safeguard against unintentional outcomes and to ensure compliance with institutional and program legislation, as well as the [{{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}]({{ site.AutomatedDecisionSystems.DirectiveURL[ page.lang ] }}).
- {: data-dpgn-data-include='&#123; "guideline": "3.1", "section": "checklist" &#125;' data-content-source-title="Section 6.5.1, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Publish information on the effectiveness and efficiency of Automated Decision Systems annually on a website or service designated by the Treasury Board of Canada.
- {: data-dpgn-data-include='&#123; "guideline": "2.2", "section": "checklist" &#125;' data-content-source-title="Section 6.3.3, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Ensure that data being used by the Automated Decision System is routinely tested to ensure that it is still relevant, accurate and up-to-date and follow any applicable policy or guidelines with regards to data management practices in accordance with the [Policy on Information Management](https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=12742).
- {: data-dpgn-data-include='&#123; "guideline": "3.1", "section": "checklist" &#125;' data-content-source-title="Section 6.5.2, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} When requested, provide information on the achievement of the expected results of the Automated Decision System and compliance with the [{{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}]({{ site.AutomatedDecisionSystems.DirectiveURL[ page.lang ] }}) will be provided to the Treasury Board of Canada Secretariat.
{: data-content-source-uri="{{ site.AutomatedDecisionSystems.DirectiveURL[ page.lang ] }}" .lst-spcd .dpgn-automated-decision-evaluation .dpgn-automated-decision}
<!-- markdownlint-enable MD034 -->
<!-- markdownlint-enable MD032 -->

</section>

{% include /functions/output-sections.html parentHeadingLevel="2" relevantTags="dpgn-automated-decision-evaluation" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>
