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

<!-- markdownlint-disable MD032 -->
- {: data-dpgn-data-include='{ "guideline": "6.2", "section": "checklist" }'} Define program services as business capabilities to establish a common vocabulary between business, development, and operation
- {: data-dpgn-data-include='{ "guideline": "6.2", "section": "checklist" }'} Identify capabilities that are common to the GC enterprise and can be shared and reused
- {: data-dpgn-data-include='{ "guideline": "6.1", "section": "checklist" }'} Model business processes using Unified Modelling language to identify common enterprise processes
{: .dpgn-digital-architectural-align-gc-business-capability-model .dpgn-business-architecture .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

{% include /functions/output-sections.html parentHeadingLevel="3" relevantTags="dpgn-digital-architectural-align-gc-business-capability-model" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>

<section>

### Design for Users First and Deliver with Multidisciplinary Teams

<!-- markdownlint-disable MD032 -->
- {: data-dpgn-data-include='{ "guideline": "1.2", "section": "checklist" }'} Focus on the needs of users, using agile, iterative, and user-centred methods
- {: data-dpgn-data-include='{ "guideline": "2.2", "section": "checklist" }'} Conform to both accessibility and official languages requirements
- {: data-dpgn-data-include='{ "guideline": "3.1", "section": "checklist" }'} Include all skillsets required for delivery, including for requirements, design, development, and operations
- {: data-dpgn-data-include='{ "guideline": "4.4", "section": "checklist" }'} Work across the entire application lifecycle, from development and testing to deployment and operations
- {: data-dpgn-data-include='{ "guideline": "4.3", "section": "checklist" }'} Ensure quality is considered throughout the Software Development Lifecycle
- {: data-dpgn-data-include='{ "guideline": "4.3", "section": "checklist" }'} Encourage and adopt Test Driven Development (TDD) to improve the trust between Business and IT
{: .dpgn-digital-architectural-design-for-users-first .dpgn-digital-architectural-multidisciplinary-teams .dpgn-business-architecture .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

{% include /functions/output-sections.html parentHeadingLevel="3" relevantTags="dpgn-digital-architectural-design-for-users-first,dpgn-digital-architectural-multidisciplinary-teams" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>
</section>

<section>

## 2. Information Architecture

<section>

### Keep Data Organized

<!-- markdownlint-disable MD032 -->
- {: data-dpgn-data-include='{ "guideline": "10.2", "section": "checklist" }'} Decouple Master Data from applications and host within the appropriate system of record
- {: data-dpgn-data-include='{ "guideline": "10.2", "section": "checklist" }'} Make systems of record authoritative central sources
- {: data-dpgn-data-include='{ "guideline": "10.2", "section": "checklist" }'} Assign data custodians to ensuring data is correct, consistent, and complete
- {: data-dpgn-data-include='{ "guideline": "10.2", "section": "checklist" }'} Design data resiliency in accordance with GC policies and standards
- {: data-dpgn-data-include='{ "guideline": "10.2", "section": "checklist" }'} Use Master Data Management to provide a single point of reference for appropriate stakeholders
{: .dpgn-digital-architectural-keep-data-organized .dpgn-information-architecture .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

{% include /functions/output-sections.html parentHeadingLevel="3" relevantTags="dpgn-digital-architectural-keep-data-organized" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>

<section>

### Enable Interoperability

<!-- markdownlint-disable MD032 -->
- {: data-dpgn-data-include='{ "guideline": "6.3", "section": "checklist" }'} Expose all functionality as services
- {: data-dpgn-data-include='{ "guideline": "6.3", "section": "checklist" }'} Use microservices built around business capabilities. Scope each service to a single purpose
- {: data-dpgn-data-include='{ "guideline": "6.3", "section": "checklist" }'} Run each service in its own process and have it communicate with other services through a well-defined interface, such as an HTTPS-based application programming interface (API)
- {: data-dpgn-data-include='{ "guideline": "6.2", "section": "checklist" }'} Run applications in containers
- {: data-dpgn-data-include='{ "guideline": "6.2", "section": "checklist" }'} Leverage enterprise digital exchange components such as the GC Service Bus, Digital Exchange Platform, and the API Store based on fit-for-use
{: .dpgn-digital-architectural-enable-interoperability .dpgn-information-architecture .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

{% include /functions/output-sections.html parentHeadingLevel="3" relevantTags="dpgn-digital-architectural-enable-interoperability" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>
</section>

<section>

## 3. Application Architecture

<section>

### Use Open Standards and Solutions by Default

<!-- markdownlint-disable MD032 -->
- {: data-dpgn-data-include='{ "guideline": "6.1", "section": "checklist" }'} Use open source standards, solutions, components, and leading practices
- {: data-dpgn-data-include='{ "guideline": "6.1", "section": "checklist" }'} Enforce this order of preference: open source first, then platform-agnostic COTS, then proprietary COTS, and lastly custom-built
- {: data-dpgn-data-include='{ "guideline": "5.1", "section": "checklist" }'} Make source code open and reusable under an appropriate open source software license
- {: data-dpgn-data-include='{ "guideline": "5.1", "section": "checklist" }'} Expose public data to implement Open Data and Open Information initiatives
{: .dpgn-digital-architectural-open-standards-solutions .dpgn-application-architecture .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

{% include /functions/output-sections.html parentHeadingLevel="3" relevantTags="dpgn-digital-architectural-open-standards-solutions" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>

<section>

### Maximize Reuse

<!-- markdownlint-disable MD032 -->
- {: data-dpgn-data-include='{ "guideline": "6.2", "section": "checklist" }'} Leverage and reuse existing solutions, components, and processes
- {: data-dpgn-data-include='{ "guideline": "6.2", "section": "checklist" }'} Select enterprise and cluster solutions over department-specific solutions
- {: data-dpgn-data-include='{ "guideline": "6.2", "section": "checklist" }'} Achieve simplification by minimizing duplication of components and adhering to relevant standards
- {: data-dpgn-data-include='{ "guideline": "6.2", "section": "checklist" }'} Inform the GC EARB about departmental investments and innovations
- {: data-dpgn-data-include='{ "guideline": "5.1", "section": "checklist" }'} Share code publicly when appropriate, and when not, share within the Government of Canada
{: .dpgn-digital-architectural-maximize-reuse .dpgn-application-architecture .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

{% include /functions/output-sections.html parentHeadingLevel="3" relevantTags="dpgn-digital-architectural-maximize-reuse" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>
</section>

<section>

## 4. Technology Architecture

<section>

### Use Cloud first

<!-- markdownlint-disable MD032 -->
- {: data-dpgn-data-include='{ "guideline": "6.2", "section": "checklist" }'} Enforce this order of preference: Software as a Service (SaaS) first, then Platform as a Service (PaaS), and lastly Infrastructure as a Service (IaaS)
- {: data-dpgn-data-include='{ "guideline": "6.2", "section": "checklist" }'} Enforce this order of preference: Public cloud first, then Hybrid cloud, then Private cloud, and lastly non-cloud (on-premises) solutions
- {: data-dpgn-data-include='{ "guideline": "6.2", "section": "checklist" }'} Design for cloud mobility and develop an exit strategy to avoid vendor lock-in
{: .dpgn-digital-architectural-cloud-first .dpgn-technology-architecture .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

{% include /functions/output-sections.html parentHeadingLevel="3" relevantTags="dpgn-digital-architectural-cloud-first" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>

<section>

### Design for Performance, Availability, and Scalability

<!-- markdownlint-disable MD032 -->
- {: data-dpgn-data-include='{ "guideline": "6.1", "section": "checklist" }'} Design for resiliency
- {: data-dpgn-data-include='{ "guideline": "6.1", "section": "checklist" }'} Ensure response times meet user needs, and critical services are highly available
- {: data-dpgn-data-include='{ "guideline": "6.1", "section": "checklist" }'} Support zero-downtime deployments for planned and unplanned maintenance
- {: data-dpgn-data-include='{ "guideline": "6.1", "section": "checklist" }'} Use distributed architectures, assume failure will happen, handle errors gracefully, and monitor actively
{: .dpgn-digital-architectural-performance-availability-scalability .dpgn-technology-architecture .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

{% include /functions/output-sections.html parentHeadingLevel="3" relevantTags="dpgn-digital-architectural-performance-availability-scalability" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>
</section>

<section>

## 5. Security Architecture and Privacy

<section>

### Design for Security and Privacy

<!-- markdownlint-disable MD032 -->
- {: data-dpgn-data-include='{ "guideline": "9.4", "section": "checklist" }'} Implement security across all architectural layers
- {: data-dpgn-data-include='{ "guideline": "9.4", "section": "checklist" }'} Categorize data properly to determine appropriate safeguards
- {: data-dpgn-data-include='{ "guideline": "9.4", "section": "checklist" }'} Perform a privacy impact assessment (PIA) when personal information is involved
- {: data-dpgn-data-include='{ "guideline": "9.4", "section": "checklist" }'} Balance user and business needs with proportionate security measures
{: .dpgn-digital-architectural-security-privacy .dpgn-security-architecture-privacy .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

{% include /functions/output-sections.html parentHeadingLevel="3" relevantTags="dpgn-digital-architectural-security-privacy" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>

<section>

### Design Systems to be Measurable and Accountable

<!-- markdownlint-disable MD032 -->
- {: data-dpgn-data-include='{ "guideline": "5.2", "section": "checklist" }'} Publish a Service Level Agreement for each service
- {: data-dpgn-data-include='{ "guideline": "5.3", "section": "checklist" }'} Make an audit trail available for all transactions to ensure accountability and non repudiation
- {: data-dpgn-data-include='{ "guideline": "5.3", "section": "checklist" }'} Establish business and IT metrics to enable business outcomes
- {: data-dpgn-data-include='{ "guideline": "5.3", "section": "checklist" }'} Apply oversight and lifecycle management to digital investments through governance
{: .dpgn-digital-architectural-measurable-accountable .dpgn-security-architecture-privacy .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

{% include /functions/output-sections.html parentHeadingLevel="3" relevantTags="dpgn-digital-architectural-measurable-accountable" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>
</section>
