---
layout: default
title:  "6. Use open standards and solutions (draft)"
lang: en
altLang: fr
altLangPage: 6-utiliser-normes-solutions-ouvertes
---
<div class="dpgn-section-intro-standard">

**[TODO: Add/revise introductory text]**

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

{% include functions/guideline-links.html guidelines="1.3, 3.4, 5.1, 10.3" samePage=false includeStandardTitle=true %}

</div>

<section class="dpgn-section-guideline">

## 6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate

<div class="dpgn-section-intro-guideline">

**[TODO: Add/revise introductory text]**

Build technology that uses open standards to ensure your system works and communicates with other products or systems, and can easily be upgraded and expanded.

Adopting and using open standards means you can:

- move between different technologies when you need to, avoiding vendor lock-in
- quickly and easily change your service when you need to
- increase compatibility with all stakeholders
- open up the range of companies you can purchase from as more of them are likely to use the same standard as you
- access a wider range of both open source and proprietary software vendors

Our choices for hosting infrastructure, databases, software frameworks, programming languages and the rest of the technology stack should seek to avoid vendor lock-in and match what successful modern consumer and enterprise software companies would choose today. In particular, digital services teams should consider using open source software, cloud-based, and commodity solutions across the technology stack, because of their widespread adoption and support by successful consumer and enterprise technology companies in the private sector.

Open source software (OSS) tends to use and help define open standards and publicly available specifications. OSS products are, by their nature, publicly available specifications, and the availability of their source code promotes open, democratic debate around their specifications, making them both more robust and interoperable.

Using open source software means you can benefit from:

- solving common problems with readily available open source technology
- more time and resource for customised solutions to solve the rare or unique problems
- lower implementation and running costs

**Design, build and test end-to-end digital services (formerly guideline 6.5):**
{: .dpgn-data-ignore}

There are many potential benefits from the greater use of digital services, including greater convenience for users, quicker and more responsive service delivery, increased security and reliability and reduced costs. To maximize these potential benefits and avoid user reliance on less convenient ways of interacting with government, services should be designed to be digital from end-to-end.

</div>

<section class="dpgn-section-checklist">

### Checklist

**[TODO: Add/revise checklist items]**

- Use open standards and open source software at every layer of the technology stack
- Factor in the use of open Standards and open source software when calculating total cost of ownership of a solutions including exit or transition costs
- Avoiding lock-in to any proprietary solutions where open source software and/or open standards are available
- Ensure that software can be deployed on a variety of commodity hardware types

**Digital Architectural Standards (GC):**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
- {: .dpgn-digital-architectural-open-standards-solutions-1} Use open source standards, solutions, components, and leading practices.
- {: .dpgn-digital-architectural-open-standards-solutions-2} Enforce this order of preference: open source first, then platform-agnostic COTS, then proprietary COTS, and lastly custom-built.
- {: .dpgn-digital-architectural-performance-availability-scalability-1} Design for resiliency.
- {: .dpgn-digital-architectural-performance-availability-scalability-2} Ensure response times meet user needs, and critical services are highly available.
- {: .dpgn-digital-architectural-performance-availability-scalability-3} Support zero-downtime deployments for planned and unplanned maintenance.
- {: .dpgn-digital-architectural-performance-availability-scalability-4} Use distributed architectures, assume failure will happen, handle errors gracefully, and monitor actively.
{: .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

**Design, build and test end-to-end digital services (formerly guideline 6.5):**
{: .dpgn-data-ignore}

- Design, build and test end-to-end digital services
- ensure prototypes incorporate the end-to-end user experience **(4. Design the service from start to finish, Digital Service Standard (Ontario))**
- design and test your service to work with the devices and browsers your users use - find out the browsers you must test with **(Digital Service Standard (UK))**
- test the service in an environment that is as similar to the live environment as possible **(Digital Service Standard (Ontario))**
- have a process for testing changes made to the service **(Digital Service Standard (Ontario))**
- have a process for monitoring and testing the service frequently even when changes are not being made **(Digital Service Standard (Ontario))**
- Create automated tests that verify all user-facing functionality **(Digital Services Playbook (US))**
- Create unit and integration tests to verify modules and components **(Digital Services Playbook (US))**
- Run tests automatically as part of the build process **(Digital Services Playbook (US))**
- Perform deployments automatically with deployment scripts, continuous delivery services, or similar techniques **(Digital Services Playbook (US))**
- Conduct load and performance tests at regular intervals, including before public launch **(Digital Services Playbook (US))**
- Determine how users would be affected if your service was unavailable for any length of time and how that's changed since beta **(Digital Service Standard (UK))**
- Determine the most likely ways the service could go offline and how you plan to stop them **(Digital Service Standard (UK))**
- Determine your strategy for dealing with outages, including who's responsible and the decisions they can make **(Digital Service Standard (UK))**

**Automated Decision Systems:**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
<!-- markdownlint-disable MD034 -->
- {: .dpgn-automated-decision-deployment-operation data-content-source-title="Section 7.3.1, Standard on Automated Decision-Making (draft) (GC)"} Before going into production, develop the appropriate processes to ensure that training data is tested for unintended biases and other factors that may unfairly impact outcomes.
{: data-content-source-uri="https://docs.google.com/document/d/1LdciG-UYeokx3U7ZzRng3u4T3IHrBXXk9JddjjueQok" .dpgn-automated-decision}
<!-- markdownlint-enable MD034 -->
<!-- markdownlint-enable MD032 -->

</section>

<section class="dpgn-section-guides">

### Implementation guides

**[TODO: Add/revise implementation guide items]**

- [Socle Logiciels Libres (France)](https://references.modernisation.gouv.fr/socle-logiciels-libres)
- [Logiciels libres et ouverts - Guide d'analyse de maturité (Québec)](https://www.tresor.gouv.qc.ca/fileadmin/PDF/ressources_informationnelles/logiciels_libres/pollo.pdf)
- [Logiciels libres et ouverts - Guide d'analyse du coût total de propriété (Québec)](https://www.tresor.gouv.qc.ca/fileadmin/PDF/ressources_informationnelles/logiciels_libres/ctp.pdf)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-open-standards-solutions} [Working with open standards (Service Manual (UK))](https://www.gov.uk/service-manual/technology/working-with-open-standards)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-open-standards-solutions} [Choosing technology: an introduction (Service Manual (UK))](https://www.gov.uk/service-manual/technology/choosing-technology-an-introduction)
- [Australian Government ICT Policy Guides and Procurement (AU)](http://finance.gov.au/policy-guides-procurement/)
- [W3C Standards (W3C)](https://www.w3.org/standards/)
  - [Web Design and Applications - W3C Web design standards (W3C)](https://www.w3.org/standards/webdesign/)
  - [Web of Devices (W3C)](https://www.w3.org/standards/webofdevices/)
- [OASIS Standards (oasis-open.org)](https://www.oasis-open.org/standards)

**Design, build and test end-to-end digital services (formerly guideline 6.5):**
{: .dpgn-data-ignore}

- [Quality assurance: testing your service regularly (Digital Service Standard (UK))](https://www.gov.uk/service-manual/technology/quality-assurance-testing-your-service-regularly)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-performance-availability-scalability} [Designing for different browsers and devices (Digital Service Standard (UK))](https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-performance-availability-scalability} [Test your service's performance (Digital Service Standard (UK))](https://www.gov.uk/service-manual/technology/test-your-services-performance)
- [Exploratory testing (Digital Service Standard (UK))](https://www.gov.uk/service-manual/technology/exploratory-testing)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-performance-availability-scalability} [Deployment environments (Digital Service Standard (UK))](https://www.gov.uk/service-manual/making-software/deployment.html)
- [Vulnerability and penetration testing (Digital Service Standard (UK))](https://www.gov.uk/service-manual/technology/vulnerability-and-penetration-testing)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-performance-availability-scalability} [Performance testing (Digital Service Standard (AU))](https://www.dta.gov.au/standard/design-guides/performance-testing/)
- [Testing your service (Service Manual (UK)](https://www.gov.uk/service-manual/technology#testing-your-service)
- [Testing Cookbook (18F (US))](https://testing-cookbook.18f.gov/)
- [Keeping your service online (Service Manual (UK))](https://www.gov.uk/service-manual/technology/uptime-and-availability-keeping-your-service-online)

</section>

<section class="dpgn-section-solutions">

### Reusable solutions

**[TODO: Add/revise reusable solutions]**

</section>

<section class="dpgn-section-similar">

### Similar resources

- [Open Standards (Open First Whitepaper (GC))](https://github.com/canada-ca/Open_First_Whitepaper/blob/master/en/2_Open_Standards.md)
- [Open Source Software Use (Open First Whitepaper (GC))](https://github.com/canada-ca/Open_First_Whitepaper/blob/master/en/3_Open_Source_Software_Use.md)
- [Logiciels libres et ouverts - Guide de référence (Québec)](https://www.tresor.gouv.qc.ca/fileadmin/PDF/ressources_informationnelles/logiciels_libres/ll.pdf)
- [Politique du libre (Montréal)](https://github.com/VilledeMontreal/politique-libre/blob/master/Politique/PolitiqueDuLibre.md)
- [8. Choose a modern technology stack (Digital Services Playbook (US))](https://playbook.cio.gov/#play8)
- [3. Be open and use open source (Technology Code of Practice (UK))](https://www.gov.uk/guidance/be-open-and-use-open-source)
- [4. Make use of open standards (Technology Code of Practice (UK))](https://www.gov.uk/guidance/make-use-of-open-standards)
- [9. Use open standards and common platforms (Digital Service Standard (UK))](https://www.gov.uk/service-manual/service-standard/use-open-standards-and-common-platforms)
- [9. Use open standards and common platforms (Digital Service Standard (Ontario))](https://www.ontario.ca/page/digital-service-standard#section-9)
- [7. Use open standards and common platforms (Digital Service Standard (AU))](https://www.dta.gov.au/standard/7-open-standards-and-common-platforms/)

**Digital Architectural Standards (GC):**
{: .dpgn-data-ignore}

- {: .dpgn-digital-architectural .dpgn-digital-architectural-open-standards-solutions} [1. Use Open Standards and Solutions by Default (Digital Architectural Standards (GC))](https://canada-ca.github.io/digital-playbook-guide-numerique/views-vues/gc-earb-ceai/fr/ceai-gc.html#use-open-standards-and-solutions-by-default)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-performance-availability-scalability} [5. Design for Performance, Availability, and Scalibility (Digital Architectural Standards (GC))](https://canada-ca.github.io/digital-playbook-guide-numerique/views-vues/gc-earb-ceai/en/gc-earb.html#design-for-performance-availability-and-scalability)

**Design, build and test end-to-end digital services (formerly guideline 6.5):**
{: .dpgn-data-ignore}

- [10. Test the end-to-end service (Digital Service Standard (UK))](https://www.gov.uk/service-manual/service-standard/test-the-end-to-end-service)
- [4. Design the service from start to finish (Digital Service Standard (Ontario))](https://www.ontario.ca/page/digital-service-standard#section-4)
- [6. Test the end-to-end service (Digital Service Standard (Ontario))](https://www.ontario.ca/page/digital-service-standard#section-6)
- [10. Automate testing and deployments (Digital Services Playbook (US))](https://playbook.cio.gov/#play10)
- [10. Test the service (Digital Service Standard (AU))](https://www.dta.gov.au/standard/10-test-the-service/)
- [11. Make a plan for being offline (Digital Service Standard (UK))](https://www.gov.uk/service-manual/service-standard/make-a-plan-for-being-offline)

</section>
</section>

<section class="dpgn-section-guideline">

## 6.2 Use and reuse common, proven government solutions, approaches, and platforms

<div class="dpgn-section-intro-guideline">

**[TODO: Add/revise introductory text]**

In order to limit costs, avoid duplication of effort and provide a consistent client experience when using various services, the reuse and adaptation of existing technological solutions is encouraged. If the development of new solutions is required, consider the ability of others to reuse and adapt your work as this will provide additional value on an organizational level.

Using common, proven government solutions, approaches, and platforms will help the government:

- meet the needs of your users by building with proven solutions
- make users' experience of government more consistent, which generates trust
- save time and money by reusing things that are already available

</div>

<section class="dpgn-section-checklist">

### Checklist

**[TODO: Add/revise checklist items]**

- Use device-agnostic and modular technology. **(2. Reuse, improve and share technological solutions where appropriate (Do - Digital Design Playbook (ISED)))**
  - Use technology that allows your service to function regardless of the device or operating system. Make sure mobile apps can function on all devices.
  - Modular technology can be reused, in part or in whole to innovate new solutions and uses for it. It also allows you to add new capabilities and capacities to your technology in response to changing operational environments.
- Follow the [Canada.ca Content Style Guide](https://www.tbs-sct.gc.ca/hgw-cgf/oversight-surveillance/communications/csc-grc-eng.asp)
- Static assets are served through a content delivery network **(Digital Services Playbook (US))**

**Digital Architectural Standards (GC):**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
- {: .dpgn-digital-architectural-maximize-reuse-1} Leverage and reuse existing solutions, components, and processes.
- {: .dpgn-digital-architectural-maximize-reuse-2} Select enterprise and cluster solutions over department-specific solutions.
- {: .dpgn-digital-architectural-maximize-reuse-3} Achieve simplification by minimizing duplication of components and adhering to relevant standards.
- {: .dpgn-digital-architectural-maximize-reuse-4} Inform the GC EARB about departmental investments and innovations.
- {: .dpgn-digital-architectural-maximize-reuse-5} Share code publicly when appropriate, and when not, share within the Government of Canada.
- {: .dpgn-digital-architectural-enable-interoperability-4} Run applications in containers.
- {: .dpgn-digital-architectural-enable-interoperability-5} Leverage enterprise digital exchange components (GC Service Bus, Digital Exchange Platform, and the API Store).
{: .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

<section>
  
#### Cloud services

**Digital Architectural Standards (GC):**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
- {: .dpgn-digital-architectural-cloud-first-1} Enforce this order of preference: Software as a Service (SaaS) first, then Platform as a Service (PaaS), and lastly Infrastructure as a Service (IaaS).
- {: .dpgn-digital-architectural-cloud-first-2} Enforce this order of preference: Public cloud first, then Hybrid cloud, then Private cloud, and lastly non-cloud (on-premises) solutions.
- {: .dpgn-digital-architectural-cloud-first-3} Design for cloud mobility and develop an exit strategy to avoid vendor lock-in.
{: .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

**Government of Canada Cloud Adoption Strategy:**
{: .dpgn-data-ignore}

- Cloud services are identified and evaluated as the principal delivery option when initiating IT investments, initiatives, strategies and projects.
- In considering how to manage security risks, departments and agencies must follow the [GC Cloud Security Risk Management Approach and Procedures](https://www.canada.ca/en/treasury-board-secretariat/services/information-technology/cloud-computing/cloud-security-risk-management-approach-procedures.html) and the [Direction on the Secure Use of Commercial Cloud Services: Security Policy Implementation Notice (SPIN)](https://www.canada.ca/en/treasury-board-secretariat/services/access-information-privacy/security-identity-management/direction-secure-use-commercial-cloud-services-spin.html).
- Departments and agencies may deploy solutions that have data-categorization requirements that fall outside of a particular cloud security control profile, as described in the [Government of Canada Security Control Profile for Cloud-Based GC IT Services](https://www.canada.ca/en/treasury-board-secretariat/services/information-technology/cloud-computing/government-canada-security-control-profile-cloud-based-it-services.html), with appropriate risk-mitigation measures that have been developed in consultation with GC security partners.
- To ensure, to the greatest extent possible, the GC’s continuous access to sensitive data, departments and agencies must comply with the [Direction for Electronic Data Residency](https://www.canada.ca/en/treasury-board-secretariat/services/information-technology/policy-implementation-notices/direction-electronic-data-residency.html).
- To ensure business continuity and to manage risks, departments and agencies will develop an appropriate exit strategy before using cloud services.
- Departments and agencies should consider portability and interoperability of services when designing cloud-based solutions.

</section>

</section>

<section class="dpgn-section-guides">

### Implementation guides

**[TODO: Add/revise implementation guide items]**

- {: .dpgn-digital-architectural .dpgn-digital-architectural-maximize-reuse}[Canada.ca Content and Information Architecture Specification](https://www.canada.ca/en/treasury-board-secretariat/services/government-communications/canada-content-information-architecture-specification.html)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-maximize-reuse} [Canada.ca Content Style Guide](https://www.canada.ca/en/treasury-board-secretariat/services/government-communications/canada-content-style-guide.html)

<section>

#### Cloud services

**Cloud first (formerly guideline 6.6):**
{: .dpgn-data-ignore}

- {: .dpgn-digital-architectural .dpgn-digital-architectural-cloud-first} [Government of Canada Right Cloud Selection Guidance](https://www.canada.ca/en/treasury-board-secretariat/services/information-technology/cloud-computing/government-canada-right-cloud-selection-guidance.html)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-cloud-first} [Government of Canada Security Control Profile for Cloud-Based GC IT Services](https://www.canada.ca/en/treasury-board-secretariat/services/information-technology/cloud-computing/government-canada-security-control-profile-cloud-based-it-services.html)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-cloud-first} [Government of Canada Cloud Adoption Strategy](https://www.canada.ca/en/treasury-board-secretariat/services/information-technology/cloud-computing/government-canada-cloud-adoption-strategy.html)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-cloud-first} [Government of Canada White Paper: Data Sovereignty and Public Cloud](https://www.canada.ca/en/treasury-board-secretariat/services/information-technology/cloud-computing/gc-white-paper-data-sovereignty-public-cloud.html)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-cloud-first} [Government of Canada Cloud Security Risk Management Approach and Procedures](https://www.canada.ca/en/treasury-board-secretariat/services/information-technology/cloud-computing/cloud-security-risk-management-approach-procedures.html)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-cloud-first} [Direction on the Secure Use of Commercial Cloud Services: Security Policy Implementation Notice (SPIN)](https://www.canada.ca/en/treasury-board-secretariat/services/access-information-privacy/security-identity-management/direction-secure-use-commercial-cloud-services-spin.html)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-cloud-first} [Direction for Electronic Data Residency](https://www.canada.ca/en/treasury-board-secretariat/services/information-technology/policy-implementation-notices/direction-electronic-data-residency.html)

</section>

</section>

<section class="dpgn-section-solutions">

### Reusable solutions

**[TODO: Add/revise reusable solutions]**

- {: .dpgn-digital-architectural .dpgn-digital-architectural-maximize-reuse} [Web Experience Toolkit (WET)](http://wet-boew.github.io/wet-boew/index-en.html)

</section>

<section class="dpgn-section-similar">

### Similar resources

- [Three-Step Software Solutions Analysis (Federal Source Code Policy (US))](https://sourcecode.cio.gov/Three-Step-Software-Solutions-Analysis/)
- [1. Comply with Government of Canada acts, policies, standards and directives (Plan - Digital Design Playbook (ISED)) (internal to GC only)](http://www.gcpedia.gc.ca/wiki/DDPlayBook_Plan#1._Comply_with_Government_of_Canada_acts.2C_policies.2C_standards_and_directives)
- [2. Reuse, improve and share technological solutions where appropriate (Do - Digital Design Playbook (ISED)) (internal to GC only)](http://www.gcpedia.gc.ca/wiki/DDPlayBook_Do#2._Reuse.2C_improve_and_share_technological_solutions_where_appropriate)

**Digital Architectural Standards (GC):**
{: .dpgn-data-ignore}

- {: .dpgn-digital-architectural .dpgn-digital-architectural-maximize-reuse} [2. Maximize Reuse (Digital Architectural Standards (GC))](https://canada-ca.github.io/digital-playbook-guide-numerique/views-vues/gc-earb-ceai/en/gc-earb.html#maximize-reuse)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-enable-interoperability} [6. Enable Interoperability (Digital Architectural Standards (GC))](https://canada-ca.github.io/digital-playbook-guide-numerique/views-vues/gc-earb-ceai/en/gc-earb.html#enable-interoperability)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-cloud-first} [9. Use Cloud First (Digital Architectural Standards Principles (GC))](https://canada-ca.github.io/digital-playbook-guide-numerique/views-vues/gc-earb-ceai/en/gc-earb.html#use-cloud-first)

**Cloud first (formerly guideline 6.6):**
{: .dpgn-data-ignore}

- [9. Deploy in a flexible hosting environment (Digital Services Playbook (US))](https://playbook.cio.gov/#play9)

</section>
</section>

<section class="dpgn-section-guideline">

## 6.3 Design for interoperability, allowing services to be discovered and leveraged by the community

<div class="dpgn-section-intro-guideline">

**[TODO: Add/revise introductory text]**

Interoperability is a characteristic of a product or system, whose interfaces are completely understood, to work with other products or systems, present or future, in either implementation or access, without any restrictions. Interoperability should be ensured, via the use of open standards.

Application Program Interfaces (APIs) are a means by which business functionality is exposed digitally. They are building blocks that are critical to the successful delivery of government online digital services and expanding service delivery to third party providers. They can also enable greater interoperability between services, optimized experiences across devices and can even lead to innovative new services by enabling third party products to work seamlessly with Government of Canada systems.

</div>

<section class="dpgn-section-checklist">

### Checklist

**[TODO: Add/revise checklist items]**

**Digital Architectural Standards (GC):**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
- {: .dpgn-digital-architectural-enable-interoperability-1} Expose all functionality as services.
- {: .dpgn-digital-architectural-enable-interoperability-2} Use microservices built around business capabilities. Scope each service to a single purpose.
- {: .dpgn-digital-architectural-enable-interoperability-3} Run each service in its own process and have it communicate with other services through a well-defined interface, such as an HTTPS-based application programming interface (API).
{: .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

- Build services that are API-centric services, which execute most, if not all, functionality through API calls (e.g., connecting frontend to backend through an API)
- Plan out API access from the beginning, designing services to be able to safely and securely expose functionality to other systems and the public.
- Design APIs to be compete but also minimal, ensuring the expected functionality is provided but with as few public members per class and as few classes as possible. This makes it easier to understand, remember, debug and change the API.
- Design APIs to have clear and simple semantics to make common tasks easy. Rare tasks should still be possible but not the focus. Avoid being overly general, optimizing specific use cases.
- Design APIs to be intuitive so that a semi-experienced user can be successful with minimal assistance from the documentation and programmers can easily understand code that uses the API.
- Design APIs to be easy to memorize by implementing a consistent and precise naming convention. Use plain language and recognizable patterns and concepts, avoiding abbreviations where possible.

</section>

<section class="dpgn-section-guides">

### Implementation guides

**[TODO: Add/revise implementation guide items]**

- {: .dpgn-digital-architectural .dpgn-digital-architectural-open-standards-solutions .dpgn-digital-architectural-enable-interoperability} [API technical and data standards (Government Digital Service (UK))](https://www.gov.uk/guidance/gds-api-technical-and-data-standards)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-enable-interoperability} [Developing cross-government API data and technical standards (Government Digital Service blog (UK))](https://gdstechnology.blog.gov.uk/2018/02/13/developing-cross-government-api-data-and-technical-standards/)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-open-standards-solutions .dpgn-architectural-enable-interoperability} [Application Programming Interfaces (APIs) (Digital Service Standard (AU))](https://www.dta.gov.au/standard/design-guides/api/)

</section>

<section class="dpgn-section-solutions">

### Reusable solutions

**[TODO: Add/revise reusable solutions]**

</section>

<section class="dpgn-section-similar">

### Similar resources

**Digital Architectural Standards (GC):**
{: .dpgn-data-ignore}

- {: .dpgn-digital-architectural .dpgn-digital-architectural-enable-interoperability} [6. Enable Interoperability (Digital Architectural Standards (GC))](https://canada-ca.github.io/digital-playbook-guide-numerique/views-vues/gc-earb-ceai/en/gc-earb.html#enable-interoperability)

</section>
</section>

<section class="dpgn-section-guideline">

## 6.4 Open up the data, transactions, and business rules that underpin a service

<div class="dpgn-section-intro-guideline">

**[TODO: Add/revise introductory text]**

</div>

<section class="dpgn-section-checklist">

### Checklist

**[TODO: Add/revise checklist items]**

</section>

<section class="dpgn-section-guides">

### Implementation guides

**[TODO: Add/revise implementation guide items]**

- [Open data (Digital Service Standard (AU))](https://www.dta.gov.au/standard/design-guides/open-data/)
- [API technical and data standards (Government Digital Service (UK))](https://www.gov.uk/guidance/gds-api-technical-and-data-standards)
- [Developing cross-government API data and technical standards (Government Digital Service blog (UK))](https://gdstechnology.blog.gov.uk/2018/02/13/developing-cross-government-api-data-and-technical-standards/)
- [Application Programming Interfaces (APIs) (Digital Service Standard (AU))](https://www.dta.gov.au/standard/design-guides/api/)

</section>

<section class="dpgn-section-solutions">

### Reusable solutions

**[TODO: Add/revise reusable solutions]**

</section>
</section>
