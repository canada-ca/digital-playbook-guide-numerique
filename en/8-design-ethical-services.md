---
layout: default
title:  "8. Design ethical services (draft)"
lang: en
altLang: fr
altLangPage: 8-concevoir-services-ethiques
---
<div class="dpgn-section-intro-standard">

**[TODO: Add/revise introductory text]**

**Automated Decision Systems:**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD034 -->
The Government of Canada is increasingly looking to utilise technology and automated systems to make, or assist in making, administrative decisions to improve service delivery. It is committed to doing so in a manner that is compatible with core administrative law principles such as transparency, accountability, legality and procedural fairness.
{: .dpgn-automated-decision-introduction data-content-source-uri="{{ site.AutomatedDecisionSystems.DirectiveURL[ page.lang ] }}" data-content-source-title="Introduction, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"}
<!-- markdownlint-enable MD034 -->

</div>

<div class="dpgn-section-guidelines">

**Guidelines:**

<!-- markdownlint-disable MD032 -->
- TOC
{:toc}
<!-- markdownlint-enable MD032 -->

</div>

<div class="dpgn-section-guidelines-related">

**Related guidelines:**

{% include functions/guideline-links.html guidelines="1.2, 1.3, 1.4, 2.1, 2.2, 2.4, 5.2, 5.3, 5.4, 9.1, 9.2, 9.3, 9.4, 10.2" samePage=false includeStandardTitle=true %}

</div>

<section class="dpgn-section-guideline">

## 8.1 Be transparent about personal and organizational biases and indicate how they are being addressed

<div class="dpgn-section-intro-guideline">

**[TODO: Add/revise introductory text]**

</div>

<section class="dpgn-section-checklist">

### Checklist

**[TODO: Add/revise checklist items]**

**Automated Decision Systems:**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
<!-- markdownlint-disable MD034 -->
- {: .dpgn-automated-decision-deployment-operation data-content-source-title="Section 6.2.1 and Appendix C, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Notify affected individuals that the decision rendered will be undertaken in whole or in part by a Automated Decisions Systems as prescribed in the following:
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
- {: .dpgn-automated-decision-deployment-operation data-content-source-title="Section 6.2.2, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Provide a meaningful explanation to affected individuals of how and why the decision was made as prescribed in the following:
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
{: data-content-source-uri="{{ site.AutomatedDecisionSystems.DirectiveURL[ page.lang ] }}" .dpgn-automated-decision}
<!-- markdownlint-enable MD034 -->
<!-- markdownlint-enable MD032 -->

</section>

<section class="dpgn-section-guides">

### Implementation guides

**[TODO: Add/revise implementation guide items]**

</section>

<section class="dpgn-section-solutions">

### Reusable solutions

**[TODO: Add/revise reusable solutions]**

</section>
</section>

<section class="dpgn-section-guideline">

## 8.2 Assess the full impact on users and communities

<div class="dpgn-section-intro-guideline">

**[TODO: Add/revise introductory text]**

</div>

<section class="dpgn-section-checklist">

### Checklist

**[TODO: Add/revise checklist items]**

**Automated Decision Systems:**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
<!-- markdownlint-disable MD034 -->
- {: .dpgn-automated-decision-initiation-1 data-content-source-title="Section 6.1.1, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Complete an [{{ site.AutomatedDecisionSystems.ImpactAssessment[ page.lang ] | downcase }}]({{ site.AutomatedDecisionSystems.ImpactAssessmentURL[ page.lang ] }}), prior to the production of any Automated Decision System.
- {: .dpgn-automated-decision-initiation-3 data-content-source-title="Section 6.1.3, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Ensure that the [{{ site.AutomatedDecisionSystems.ImpactAssessment[ page.lang ] | downcase }}]({{ site.AutomatedDecisionSystems.ImpactAssessmentURL[ page.lang ] }}) remains up to date and accurately reflects the functionality of the Automated Decision System.
{: data-content-source-uri="{{ site.AutomatedDecisionSystems.DirectiveURL[ page.lang ] }}" .dpgn-automated-decision}
<!-- markdownlint-enable MD034 -->
<!-- markdownlint-enable MD032 -->

</section>

<section class="dpgn-section-guides">

### Implementation guides

**[TODO: Add/revise implementation guide items]**

**Automated Decision Systems:**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
- {: .dpgn-automated-decision-initiation} [{{ site.AutomatedDecisionSystems.ImpactAssessment[ page.lang ] }} (GC)]({{ site.AutomatedDecisionSystems.ImpactAssessmentURL[ page.lang ] }})
{: .dpgn-automated-decision}
<!-- markdownlint-enable MD032 -->

</section>

<section class="dpgn-section-solutions">

### Reusable solutions

**[TODO: Add/revise reusable solutions]**

</section>
</section>

<section class="dpgn-section-guideline">

## 8.3 Comply with ethical guidelines in the design of automated systems

<div class="dpgn-section-intro-guideline">

**[TODO: Add/revise introductory text]**

</div>

<section class="dpgn-section-checklist">

### Checklist

**[TODO: Add/revise checklist items]**

**Automated Decision Systems:**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
<!-- markdownlint-disable MD034 -->
- {: .dpgn-automated-decision-initiation-2 data-content-source-title="Section 6.1.2, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Apply the following relevant requirements as determined by the [{{ site.AutomatedDecisionSystems.ImpactAssessment[ page.lang ] | downcase }}]({{ site.AutomatedDecisionSystems.ImpactAssessmentURL[ page.lang ] }}):
  - {: data-content-source-title="Appendix C, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Approval Requirement:
    - {: .dpgn-automated-decision-level-i} **Level I:** None
    - {: .dpgn-automated-decision-level-ii} **Level II:** Government of Canada Enterprise Architecture Review Board
    - {: .dpgn-automated-decision-level-iii} **Level III:** Government of Canada Enterprise Architecture Review Board
    - {: .dpgn-automated-decision-level-iv} **Level IV:**
      - Government of Canada Enterprise Architecture Review Board
      - Requires specific authority from Treasury Board
- {: .dpgn-automated-decision-analysis-approach data-content-source-title="Section 6.3.8, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Consult with the institution’s legal services unit, to ensure that the use of the Automated Decision System System is compliant with applicable legal requirements.
- {: .dpgn-automated-decision-deployment-operation data-content-source-title="Section 6.4.1, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Provide affected individuals with information regarding options that are available to them for recourse to challenge the automated decision or recommendation.
{: data-content-source-uri="{{ site.AutomatedDecisionSystems.DirectiveURL[ page.lang ] }}" .dpgn-automated-decision}
<!-- markdownlint-enable MD034 -->
<!-- markdownlint-enable MD032 -->

</section>

<section class="dpgn-section-guides">

### Implementation guides

**[TODO: Add/revise implementation guide items]**

</section>

<section class="dpgn-section-solutions">

### Reusable solutions

**[TODO: Add/revise reusable solutions]**

</section>
</section>

<section class="dpgn-section-guideline">

## 8.4 Balance trade-offs between innovation and inclusiveness

<div class="dpgn-section-intro-guideline">

**[TODO: Add/revise introductory text]**

</div>

<section class="dpgn-section-checklist">

### Checklist

**[TODO: Add/revise checklist items]**

**Automated Decision Systems:**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
<!-- markdownlint-disable MD034 -->
- {: .dpgn-automated-decision-deployment-operation data-content-source-title="Section 6.3.6 and Appendix C, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Subject to requirements prescribed in the following, ensure that a contingency systems and/or processes are available should the Automated Decision System be unavailable for an extended period of time:
  - {: .dpgn-automated-decision-level-i} **Level I:** None
  - {: .dpgn-automated-decision-level-ii} **Level II:** None
  - {: .dpgn-automated-decision-level-iii} **Level III:** Ensure that a contingency plans and/or backup systems are available should the Automated Decision System be unavailable.
  - {: .dpgn-automated-decision-level-iv} **Level IV:** Ensure that a contingency plans and/or backup systems are available should the Automated Decision System be unavailable.
{: data-content-source-uri="{{ site.AutomatedDecisionSystems.DirectiveURL[ page.lang ] }}" .dpgn-automated-decision}
<!-- markdownlint-enable MD034 -->
<!-- markdownlint-enable MD032 -->

</section>

<section class="dpgn-section-guides">

### Implementation guides

**[TODO: Add/revise implementation guide items]**

</section>

<section class="dpgn-section-solutions">

### Reusable solutions

**[TODO: Add/revise reusable solutions]**

</section>
</section>
