---
layout: default
title: How should I ensure my project meets GC EARB requirements? (draft)
lang: en
altLang: fr
altLangPage: ceai-gc
collectionDirectory: views-vues/gc-earb-ceai
---

The Government of Canada Architectural Standards shall be applied to digital projects and initiatives in order to successfully align with the Government of Canada digital direction. The Government of Canada Enterprise Architecture Review Board (GC EARB) will use these standards to evaluate digital investments and solutions to ensure the GC acts as a single enterprise by validating, recommending and approving technology solutions and to ensure departmental alignment with enterprise-wide IT standards, security, and strategic direction. The Architectural Standards build upon the Government of Canada Digital Standards, focusing on best practices for architectural and design planning.
{: .dpgn-data-ignore}

This page provides personalized guidance for how projects can meet the Government of Canada Digital Architectural Standards required by the Government of Canada Enterprise Architecture Review Board (GC EARB).
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
- TOC
{:toc .lst-spcd .dpgn-data-ignore}
<!-- markdownlint-enable MD032 -->

<section>

<!-- markdownlint-disable MD022 -->
## 1. Business Architecture
{: .dpgn-data-ignore}
<!-- markdownlint-enable MD022 -->

<section>

<!-- markdownlint-disable MD022 -->
### Align to the GC Business Capability model
{: .dpgn-data-ignore}
<!-- markdownlint-enable MD022 -->

<!-- markdownlint-disable MD032 -->
- {: .dpgn-guideline-6-2 .dpgn-checklist} Define program services as business capabilities to establish a common vocabulary between business, development, and operation
- {: .dpgn-guideline-6-2 .dpgn-checklist} Identify capabilities that are common to the GC enterprise and can be shared and reused
- {: .dpgn-guideline-6-1 .dpgn-checklist} Model business processes using Unified Modelling language to identify common enterprise processes
{: .dpgn-digital-architectural-align-gc-business-capability-model .dpgn-business-architecture .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

{% include /functions/output-sections.html parentHeadingLevel="2" relevantTags="dpgn-digital-architectural-align-gc-business-capability-model" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>

<section>

<!-- markdownlint-disable MD022 -->
### Design for Users First and Deliver with Multidisciplinary Teams
{: .dpgn-data-ignore}
<!-- markdownlint-enable MD022 -->

<!-- markdownlint-disable MD032 -->
- {: .dpgn-guideline-1-2 .dpgn-checklist} Focus on the needs of users, using agile, iterative, and user-centred methods
- {: .dpgn-guideline-2-2 .dpgn-checklist} Conform to both accessibility and official languages requirements
- {: .dpgn-guideline-3-1 .dpgn-checklist} Include all skillsets required for delivery, including for requirements, design, development, and operations
- {: .dpgn-guideline-4-4 .dpgn-checklist} Work across the entire application lifecycle, from development and testing to deployment and operations
- {: .dpgn-guideline-4-3 .dpgn-checklist} Ensure quality is considered throughout the Software Development Lifecycle
- {: .dpgn-guideline-4-3 .dpgn-checklist} Encourage and adopt Test Driven Development (TDD) to improve the trust between Business and IT
{: .dpgn-digital-architectural-design-for-users-first .dpgn-digital-architectural-multidisciplinary-teams .dpgn-business-architecture .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

{% include /functions/output-sections.html parentHeadingLevel="2" relevantTags="dpgn-digital-architectural-design-for-users-first,dpgn-digital-architectural-multidisciplinary-teams" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>
</section>

<section>

<!-- markdownlint-disable MD022 -->
## 2. Information Architecture
{: .dpgn-data-ignore}
<!-- markdownlint-enable MD022 -->

<section>

<!-- markdownlint-disable MD022 -->
### Keep Data Organized
{: .dpgn-data-ignore}
<!-- markdownlint-enable MD022 -->

<!-- markdownlint-disable MD032 -->
- {: .dpgn-guideline-10-2 .dpgn-checklist} Decouple Master Data from applications and host within the appropriate system of record
- {: .dpgn-guideline-10-2 .dpgn-checklist} Make systems of record authoritative central sources
- {: .dpgn-guideline-10-3 .dpgn-checklist} Assign data custodians to ensuring data is correct, consistent, and complete
- {: .dpgn-guideline-10-2 .dpgn-checklist} Design data resiliency in accordance with GC policies and standards
- {: .dpgn-guideline-10-2 .dpgn-checklist} Use Master Data Management to provide a single point of reference for appropriate stakeholders
{: .dpgn-digital-architectural-keep-data-organized .dpgn-information-architecture .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

{% include /functions/output-sections.html parentHeadingLevel="2" relevantTags="dpgn-digital-architectural-keep-data-organized" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>

<section>

<!-- markdownlint-disable MD022 -->
### Enable Interoperability
{: .dpgn-data-ignore}
<!-- markdownlint-enable MD022 -->

<!-- markdownlint-disable MD032 -->
- {: .dpgn-guideline-6-3 .dpgn-checklist} Expose all functionality as services
- {: .dpgn-guideline-6-3 .dpgn-checklist} Use microservices built around business capabilities. Scope each service to a single purpose
- {: .dpgn-guideline-6-3 .dpgn-checklist} Run each service in its own process and have it communicate with other services through a well-defined interface, such as an HTTPS-based application programming interface (API)
- {: .dpgn-guideline-6-2 .dpgn-checklist} Run applications in containers
- {: .dpgn-guideline-6-2 .dpgn-checklist} Leverage enterprise digital exchange components such as the GC Service Bus, Digital Exchange Platform, and the API Store based on fit-for-use
{: .dpgn-digital-architectural-enable-interoperability .dpgn-information-architecture .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

{% include /functions/output-sections.html parentHeadingLevel="2" relevantTags="dpgn-digital-architectural-enable-interoperability" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>
</section>

<section>

<!-- markdownlint-disable MD022 -->
## 3. Application Architecture
{: .dpgn-data-ignore}
<!-- markdownlint-enable MD022 -->

<section>

<!-- markdownlint-disable MD022 -->
### Use Open Standards and Solutions by Default
{: .dpgn-data-ignore}
<!-- markdownlint-enable MD022 -->

<!-- markdownlint-disable MD032 -->
- {: .dpgn-guideline-6-1 .dpgn-checklist} Use open source standards, solutions, components, and leading practices
- {: .dpgn-guideline-6-1 .dpgn-checklist} Enforce this order of preference: open source first, then platform-agnostic COTS, then proprietary COTS, and lastly custom-built
- {: .dpgn-guideline-5-1 .dpgn-checklist} Make source code open and reusable under an appropriate open source software license
- {: .dpgn-guideline-5-1 .dpgn-checklist} Expose public data to implement Open Data and Open Information initiatives
{: .dpgn-digital-architectural-open-standards-solutions .dpgn-application-architecture .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

{% include /functions/output-sections.html parentHeadingLevel="2" relevantTags="dpgn-digital-architectural-open-standards-solutions" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>

<section>

<!-- markdownlint-disable MD022 -->
### Maximize Reuse
{: .dpgn-data-ignore}
<!-- markdownlint-enable MD022 -->

<!-- markdownlint-disable MD032 -->
- {: .dpgn-guideline-6-2 .dpgn-checklist} Leverage and reuse existing solutions, components, and processes
- {: .dpgn-guideline-6-2 .dpgn-checklist} Select enterprise and cluster solutions over department-specific solutions
- {: .dpgn-guideline-6-2 .dpgn-checklist} Achieve simplification by minimizing duplication of components and adhering to relevant standards
- {: .dpgn-guideline-6-2 .dpgn-checklist} Inform the GC EARB about departmental investments and innovations
- {: .dpgn-guideline-5-1 .dpgn-checklist} Share code publicly when appropriate, and when not, share within the Government of Canada
{: .dpgn-digital-architectural-maximize-reuse .dpgn-application-architecture .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

{% include /functions/output-sections.html parentHeadingLevel="2" relevantTags="dpgn-digital-architectural-maximize-reuse" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>
</section>

<section>

<!-- markdownlint-disable MD022 -->
## 4. Technology Architecture
{: .dpgn-data-ignore}
<!-- markdownlint-enable MD022 -->

<section>

<!-- markdownlint-disable MD022 -->
### Use Cloud first
{: .dpgn-data-ignore}
<!-- markdownlint-enable MD022 -->

<!-- markdownlint-disable MD032 -->
- {: .dpgn-guideline-6-2 .dpgn-checklist} Enforce this order of preference: Software as a Service (SaaS) first, then Platform as a Service (PaaS), and lastly Infrastructure as a Service (IaaS)
- {: .dpgn-guideline-6-2 .dpgn-checklist} Enforce this order of preference: Public cloud first, then Hybrid cloud, then Private cloud, and lastly non-cloud (on-premises) solutions
- {: .dpgn-guideline-6-2 .dpgn-checklist} Design for cloud mobility and develop an exit strategy to avoid vendor lock-in
{: .dpgn-digital-architectural-cloud-first .dpgn-technology-architecture .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

{% include /functions/output-sections.html parentHeadingLevel="2" relevantTags="dpgn-digital-architectural-cloud-first" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>

<section>

<!-- markdownlint-disable MD022 -->
### Design for Performance, Availability, and Scalability
{: .dpgn-data-ignore}
<!-- markdownlint-enable MD022 -->

<!-- markdownlint-disable MD032 -->
- {: .dpgn-guideline-6-1 .dpgn-checklist} Design for resiliency
- {: .dpgn-guideline-6-1 .dpgn-checklist} Ensure response times meet user needs, and critical services are highly available
- {: .dpgn-guideline-6-1 .dpgn-checklist} Support zero-downtime deployments for planned and unplanned maintenance
- {: .dpgn-guideline-6-1 .dpgn-checklist} Use distributed architectures, assume failure will happen, handle errors gracefully, and monitor actively
{: .dpgn-digital-architectural-performance-availability-scalability .dpgn-technology-architecture .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

{% include /functions/output-sections.html parentHeadingLevel="2" relevantTags="dpgn-digital-architectural-performance-availability-scalability" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>
</section>

<section>

<!-- markdownlint-disable MD022 -->
## 5. Security Architecture and Privacy
{: .dpgn-data-ignore}
<!-- markdownlint-enable MD022 -->

<section>

<!-- markdownlint-disable MD022 -->
### Design for Security and Privacy
{: .dpgn-data-ignore}
<!-- markdownlint-enable MD022 -->

<!-- markdownlint-disable MD032 -->
- {: .dpgn-guideline-9-4 .dpgn-checklist} Implement security across all architectural layers
- {: .dpgn-guideline-9-4 .dpgn-checklist} Categorize data properly to determine appropriate safeguards
- {: .dpgn-guideline-9-4 .dpgn-checklist} Perform a privacy impact assessment (PIA) when personal information is involved
- {: .dpgn-guideline-9-1 .dpgn-checklist} Balance user and business needs with proportionate security measures
{: .dpgn-digital-architectural-security-privacy .dpgn-security-architecture-privacy .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

{% include /functions/output-sections.html parentHeadingLevel="2" relevantTags="dpgn-digital-architectural-security-privacy" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>

<section>

<!-- markdownlint-disable MD022 -->
### Design Systems to be Measurable and Accountable
{: .dpgn-data-ignore}
<!-- markdownlint-enable MD022 -->

<!-- markdownlint-disable MD032 -->
- {: .dpgn-guideline-5-2 .dpgn-checklist} Publish a Service Level Agreement for each service
- {: .dpgn-guideline-5-3 .dpgn-checklist} Make an audit trail available for all transactions to ensure accountability and non repudiation
- {: .dpgn-guideline-5-3 .dpgn-checklist} Establish business and IT metrics to enable business outcomes
- {: .dpgn-guideline-5-3 .dpgn-checklist} Apply oversight and lifecycle management to digital investments through governance
{: .dpgn-digital-architectural-measurable-accountable .dpgn-security-architecture-privacy .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

{% include /functions/output-sections.html parentHeadingLevel="2" relevantTags="dpgn-digital-architectural-measurable-accountable" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>
</section>
