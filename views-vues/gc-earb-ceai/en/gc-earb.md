---
layout: default
title: How should I ensure my project meets GC EARB requirements? (draft)
lang: en
altLang: fr
altLangPage: ceai-gc
collectionDirectory: views-vues/gc-earb-ceai
---

The Government of Canada Architectural Standards shall be applied to digital projects and initiatives in order to successfully align with the Government of Canada digital direction. The Government of Canada Enterprise Architecture Review Board (GC EARB) will use these standards to evaluate digital investments and solutions to ensure the GC acts as a single enterprise by validating, recommending and approving technology solutions and to ensure departmental alignment with enterprise-wide IT standards, security, and strategic direction. The Architectural Standards build upon the Government of Canada Digital Standards, focusing on best practices for architectural and design planning.

This page provides personalized guidance for how projects can meet the Government of Canada Digital Architectural Standards required by the Government of Canada Enterprise Architecture Review Board (GC EARB).

<!-- markdownlint-disable MD032 -->
- TOC
{:toc .lst-spcd}
<!-- markdownlint-enable MD032 -->

<section>

## 1. Business Architecture

<section>

### Align to the GC Business Capability model

<section>
{% include /functions/output-section-heading.html parentHeadingLevel=2 sectionType="checklist" %}

<!-- markdownlint-disable MD032 -->
- {: data-dpgn-data-include='&#123; "guideline": "6.2", "section": "checklist" &#125;'} Define program services as business capabilities to establish a common vocabulary between business, development, and operation
- {: data-dpgn-data-include='&#123; "guideline": "6.2", "section": "checklist" &#125;'} Identify capabilities that are common to the GC enterprise and can be shared and reused
- {: data-dpgn-data-include='&#123; "guideline": "6.1", "section": "checklist" &#125;'} Model business processes using Unified Modelling language to identify common enterprise processes
{: .lst-spcd .dpgn-digital-architectural-align-gc-business-capability-model .dpgn-business-architecture .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

</section>

{% include /functions/output-sections.html parentHeadingLevel="3" relevantTags="dpgn-digital-architectural-align-gc-business-capability-model" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>

<section>

### Design for Users First and Deliver with Multidisciplinary Teams

<section>
{% include /functions/output-section-heading.html parentHeadingLevel=2 sectionType="checklist" %}

<!-- markdownlint-disable MD032 -->
- {: data-dpgn-data-include='&#123; "guideline": "1.2", "section": "checklist" &#125;'} Focus on the needs of users, using agile, iterative, and user-centred methods
- {: data-dpgn-data-include='&#123; "guideline": "2.2", "section": "checklist" &#125;'} Conform to both accessibility and official languages requirements
- {: data-dpgn-data-include='&#123; "guideline": "3.1", "section": "checklist" &#125;'} Include all skillsets required for delivery, including for requirements, design, development, and operations
- {: .dpgn-standards-hide data-dpgn-data-include='&#123; "guideline": "4.4", "section": "checklist" &#125;'} Work across the entire application lifecycle, from development and testing to deployment and operations
- {: .dpgn-standards-hide data-dpgn-data-include='&#123; "guideline": "4.3", "section": "checklist" &#125;'} Ensure quality is considered throughout the Software Development Lifecycle
- {: .dpgn-standards-hide data-dpgn-data-include='&#123; "guideline": "4.3", "section": "checklist" &#125;'} Encourage and adopt Test Driven Development (TDD) to improve the trust between Business and IT
{: .lst-spcd .dpgn-digital-architectural-design-for-users-first .dpgn-digital-architectural-multidisciplinary-teams .dpgn-business-architecture .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

</section>

{% include /functions/output-sections.html parentHeadingLevel="3" relevantTags="dpgn-digital-architectural-design-for-users-first,dpgn-digital-architectural-multidisciplinary-teams" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>
</section>

<section>

## 2. Information Architecture

<section>

### Keep Data Organized

<section>
{% include /functions/output-section-heading.html parentHeadingLevel=2 sectionType="checklist" %}

<!-- markdownlint-disable MD032 -->
- {: data-dpgn-data-include='&#123; "guideline": "10.2", "section": "checklist" &#125;'} Decouple Master Data from applications and host within the appropriate system of record
- {: data-dpgn-data-include='&#123; "guideline": "10.2", "section": "checklist" &#125;'} Make systems of record authoritative central sources
- {: data-dpgn-data-include='&#123; "guideline": "10.2", "section": "checklist" &#125;'} Assign data custodians to ensuring data is correct, consistent, and complete
- {: data-dpgn-data-include='&#123; "guideline": "10.2", "section": "checklist" &#125;'} Design data resiliency in accordance with GC policies and standards
- {: data-dpgn-data-include='&#123; "guideline": "10.2", "section": "checklist" &#125;'} Use Master Data Management to provide a single point of reference for appropriate stakeholders
{: .lst-spcd .dpgn-digital-architectural-keep-data-organized .dpgn-information-architecture .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

</section>

{% include /functions/output-sections.html parentHeadingLevel="3" relevantTags="dpgn-digital-architectural-keep-data-organized" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>

<section>

### Enable Interoperability

<section>
{% include /functions/output-section-heading.html parentHeadingLevel=2 sectionType="checklist" %}

<!-- markdownlint-disable MD032 -->
- {: data-dpgn-data-include='&#123; "guideline": "6.3", "section": "checklist" &#125;'} Expose all functionality as services
- {: data-dpgn-data-include='&#123; "guideline": "6.3", "section": "checklist" &#125;'} Use microservices built around business capabilities. Scope each service to a single purpose
- {: data-dpgn-data-include='&#123; "guideline": "6.3", "section": "checklist" &#125;'} Run each service in its own process and have it communicate with other services through a well-defined interface, such as an HTTPS-based application programming interface (API)
- {: data-dpgn-data-include='&#123; "guideline": "6.2", "section": "checklist" &#125;'} Run applications in containers
- {: data-dpgn-data-include='&#123; "guideline": "6.2", "section": "checklist" &#125;'} Leverage enterprise digital exchange components such as the GC Service Bus, Digital Exchange Platform, and the API Store based on fit-for-use
{: .lst-spcd .dpgn-digital-architectural-enable-interoperability .dpgn-information-architecture .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

</section>

{% include /functions/output-sections.html parentHeadingLevel="3" relevantTags="dpgn-digital-architectural-enable-interoperability" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>
</section>

<section>

## 3. Application Architecture

<section>

### Use Open Standards and Open Source Software by Default

<section>
{% include /functions/output-section-heading.html parentHeadingLevel=2 sectionType="checklist" %}

<!-- markdownlint-disable MD032 -->
- {: data-dpgn-data-include='&#123; "guideline": "6.1", "section": "checklist" &#125;'} Use open source standards, solutions, components, and leading practices
- {: data-dpgn-data-include='&#123; "guideline": "6.1", "section": "checklist" &#125;'} Enforce this order of preference: open source first, then platform-agnostic COTS, then proprietary COTS, and lastly custom-built
- {: data-dpgn-data-include='&#123; "guideline": "5.1", "section": "checklist" &#125;'} Make source code open and reusable under an appropriate open source software license
- {: data-dpgn-data-include='&#123; "guideline": "5.1", "section": "checklist" &#125;'} Expose public data to implement Open Data and Open Information initiatives
{: .lst-spcd .dpgn-digital-architectural-open-standards-solutions .dpgn-application-architecture .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

</section>

{% include /functions/output-sections.html parentHeadingLevel="3" relevantTags="dpgn-digital-architectural-open-standards-solutions" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>

<section>

### Maximize Reuse

<section>
{% include /functions/output-section-heading.html parentHeadingLevel=2 sectionType="checklist" %}

<!-- markdownlint-disable MD032 -->
- {: data-dpgn-data-include='&#123; "guideline": "6.2", "section": "checklist" &#125;'} Leverage and reuse existing solutions, components, and processes
- {: data-dpgn-data-include='&#123; "guideline": "6.2", "section": "checklist" &#125;'} Select enterprise and cluster solutions over department-specific solutions
- {: data-dpgn-data-include='&#123; "guideline": "6.2", "section": "checklist" &#125;'} Achieve simplification by minimizing duplication of components and adhering to relevant standards
- {: data-dpgn-data-include='&#123; "guideline": "6.2", "section": "checklist" &#125;'} Inform the GC EARB about departmental investments and innovations
- {: data-dpgn-data-include='&#123; "guideline": "5.1", "section": "checklist" &#125;'} Share code publicly when appropriate, and when not, share within the Government of Canada
{: .lst-spcd .dpgn-digital-architectural-maximize-reuse .dpgn-application-architecture .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

</section>

{% include /functions/output-sections.html parentHeadingLevel="3" relevantTags="dpgn-digital-architectural-maximize-reuse" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>
</section>

<section>

## 4. Technology Architecture

<section>

### Use Cloud first

<section>
{% include /functions/output-section-heading.html parentHeadingLevel=2 sectionType="checklist" %}

<!-- markdownlint-disable MD032 -->
- {: data-dpgn-data-include='&#123; "guideline": "6.2", "section": "checklist" &#125;'} Enforce this order of preference: Software as a Service (SaaS) first, then Platform as a Service (PaaS), and lastly Infrastructure as a Service (IaaS)
- {: data-dpgn-data-include='&#123; "guideline": "6.2", "section": "checklist" &#125;'} Enforce this order of preference: Public cloud first, then Hybrid cloud, then Private cloud, and lastly non-cloud (on-premises) solutions
- {: data-dpgn-data-include='&#123; "guideline": "6.2", "section": "checklist" &#125;'} Design for cloud mobility and develop an exit strategy to avoid vendor lock-in
{: .lst-spcd .dpgn-digital-architectural-cloud-first .dpgn-technology-architecture .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

</section>

{% include /functions/output-sections.html parentHeadingLevel="3" relevantTags="dpgn-digital-architectural-cloud-first" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>

<section>

### Design for Performance, Availability, and Scalability

<section>
{% include /functions/output-section-heading.html parentHeadingLevel=2 sectionType="checklist" %}

<!-- markdownlint-disable MD032 -->
- {: data-dpgn-data-include='&#123; "guideline": "6.1", "section": "checklist" &#125;'} Design for resiliency
- {: data-dpgn-data-include='&#123; "guideline": "6.1", "section": "checklist" &#125;'} Ensure response times meet user needs, and critical services are highly available
- {: data-dpgn-data-include='&#123; "guideline": "6.1", "section": "checklist" &#125;'} Support zero-downtime deployments for planned and unplanned maintenance
- {: data-dpgn-data-include='&#123; "guideline": "6.1", "section": "checklist" &#125;'} Use distributed architectures, assume failure will happen, handle errors gracefully, and monitor actively
{: .lst-spcd .dpgn-digital-architectural-performance-availability-scalability .dpgn-technology-architecture .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

</section>

{% include /functions/output-sections.html parentHeadingLevel="3" relevantTags="dpgn-digital-architectural-performance-availability-scalability" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>
</section>

<section>

## 5. Security Architecture and Privacy

<section>

### Design for Security and Privacy

<section>
{% include /functions/output-section-heading.html parentHeadingLevel=2 sectionType="checklist" %}

<!-- markdownlint-disable MD032 -->
- {: data-dpgn-data-include='&#123; "guideline": "9.4", "section": "checklist" &#125;'} Implement security across all architectural layers
- {: data-dpgn-data-include='&#123; "guideline": "9.4", "section": "checklist" &#125;'} Categorize data properly to determine appropriate safeguards
- {: data-dpgn-data-include='&#123; "guideline": "9.4", "section": "checklist" &#125;'} Perform a privacy impact assessment (PIA) when personal information is involved
- {: data-dpgn-data-include='&#123; "guideline": "9.4", "section": "checklist" &#125;'} Balance user and business needs with proportionate security measures
{: .lst-spcd .dpgn-digital-architectural-security-privacy .dpgn-security-architecture-privacy .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

</section>

{% include /functions/output-sections.html parentHeadingLevel="3" relevantTags="dpgn-digital-architectural-security-privacy" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>

<section>

### Design Systems to be Measurable and Accountable

<section>
{% include /functions/output-section-heading.html parentHeadingLevel=2 sectionType="checklist" %}

<!-- markdownlint-disable MD032 -->
- {: data-dpgn-data-include='&#123; "guideline": "5.2", "section": "checklist" &#125;'} Publish a Service Level Agreement for each service
- {: data-dpgn-data-include='&#123; "guideline": "5.3", "section": "checklist" &#125;'} Make an audit trail available for all transactions to ensure accountability and non repudiation
- {: data-dpgn-data-include='&#123; "guideline": "5.3", "section": "checklist" &#125;'} Establish business and IT metrics to enable business outcomes
- {: data-dpgn-data-include='&#123; "guideline": "5.3", "section": "checklist" &#125;'} Apply oversight and lifecycle management to digital investments through governance
{: .lst-spcd .dpgn-digital-architectural-measurable-accountable .dpgn-security-architecture-privacy .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

</section>

{% include /functions/output-sections.html parentHeadingLevel="3" relevantTags="dpgn-digital-architectural-measurable-accountable" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>
</section>
