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

**Build It Right Principles (GC):**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
- {: .dpgn-digital-architectural-open-by-default-1} Open source standards, components, and leading practices will be used wherever practical.
- {: .dpgn-digital-architectural-open-by-default-2} When Open Source offerings cannot be used, Platform Agnostic COTS offerings are preferable to custom-built solutions. For clarity, the order of preference shall be:
  1. Open Standard
  1. Platform Agnostic COTS
  1. Proprietary COTS
  1. Custom
- {: .dpgn-digital-architectural-performance-availability-scalability-1} All services will respond in 500ms or less wherever possible. Flexible support services should automatically adjust to meet demand as needed.
- {: .dpgn-digital-architectural-performance-availability-scalability-2} Cloud providers should have geographically-separated data centers that are backed up at the transaction level and automatically fail over while maintaining client sessions.
- {: .dpgn-digital-architectural-performance-availability-scalability-3} Critical applications shall be 99.999% available including planned maintenance.
- {: .dpgn-digital-architectural-performance-availability-scalability-4} Support for zero-downtime version updates default.
- {: .dpgn-digital-architectural-performance-availability-scalability-5} Systems shall be designed for resiliency. For example:
  - Leveraging distributed architectures,
  - Assuming failure will occur,
  - Designing graceful error handling,
  - Leveraging active monitoring
- {: .dpgn-digital-architectural-performance-availability-scalability-6} Consideration shall be given to risks of over-centralization or including too much complexity into a single system.
- {: .dpgn-digital-architectural-expose-functionality-services-2} Open standards will be used for all interoperability.
{: .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

**Design, build and test end-to-end digital services (formerly guideline 6.5):**
{: .dpgn-data-ignore}

- Design, build and test end-to-end digital services
- Be sure that you can clearly explain your service, what it does, and how you plan to move users to the digital service
- Design the digital service in a way that gives it clear advantages over other channels
- examine other channels to understand the steps users take to complete their goal and how your service fits **(Digital Service Standard (Ontario))**
- develop a journey map of all the touch points in a user's experience of the service, from awareness of the service to completion and receipt of product (if applicable) **(Digital Service Standard (Ontario))**
- Use familiar language and simple design consistently throughout the service, including online and offline touch points, by ensuring consistent design across related digital services
- ensure prototypes incorporate the end-to-end user experience **(Digital Service Standard (Ontario))**
- design and test your service to work with the devices and browsers your users use - find out the browsers you must test with **(Digital Service Standard (UK))**
- test the service in an environment that is as similar to the live environment as possible **(Digital Service Standard (Ontario))**
- have a process for testing changes made to the service **(Digital Service Standard (Ontario))**
- have a process for monitoring and testing the service frequently even when changes are not being made **(Digital Service Standard (Ontario))**
- Create automated tests that verify all user-facing functionality **(Digital Services Playbook (US))**
- Create unit and integration tests to verify modules and components **(Digital Services Playbook (US))**
- Run tests automatically as part of the build process **(Digital Services Playbook (US))**
- Perform deployments automatically with deployment scripts, continuous delivery services, or similar techniques **(Digital Services Playbook (US))**
- Conduct load and performance tests at regular intervals, including before public launch **(Digital Services Playbook (US))**

**Automated Decision Systems:**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
<!-- markdownlint-disable MD034 -->
- {: .dpgn-automated-decision-deployment-operation data-content-source-title="Section 7.3.1, Standard on Automated Decision-Making (draft) (GC)"} Before going into production, develop the appropriate processes to ensure that training data is tested for unintended biases and other factors that may unfairly impact outcomes.
{: .dpgn-automated-decision data-content-source-uri="https://docs.google.com/document/d/1LdciG-UYeokx3U7ZzRng3u4T3IHrBXXk9JddjjueQok"}
<!-- markdownlint-enable MD034 -->
<!-- markdownlint-enable MD032 -->

**Alpha stage (Design, build and test end-to-end digital services (formerly guideline 6.5)):**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
- test your prototypes with users. **(Digital Service Standard (AU))**
{: .dpgn-stage-alpha}
<!-- markdownlint-enable MD032 -->

**Beta and live stages (Design, build and test end-to-end digital services (formerly guideline 6.5)):**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
- show the steps required to achieve an end-to-end service delivery outcome for the user **(Digital Service Standard (AU))**
- show the testing environment; using test plans, real world scenarios and user stories **(Digital Service Standard (AU))**
- show the deployment environment **(Digital Service Standard (AU))**
- show ability to create new environments quickly and easily **(Digital Service Standard (AU))**
- show that your service can perform under expected loads with suitable scale contingencies **(Digital Service Standard (AU))**
- show you understand the systems you need and the testing environments for non-digital parts of the service **(Digital Service Standard (AU))**
- show that users can seamlessly move between channels as required **(Digital Service Standard (AU))**
- show how you explored integrating automated testing into the deployment process **(Digital Service Standard (AU))**
- show you have a business continuity plan and a roll-back option. **(Digital Service Standard (AU))**
{: .dpgn-stage-beta .dpgn-stage-live}
<!-- markdownlint-enable MD032 -->

</section>

<section class="dpgn-section-guides">

### Implementation guides

**[TODO: Add/revise implementation guide items]**

- [Socle Logiciels Libres (France)](https://references.modernisation.gouv.fr/socle-logiciels-libres)
- [Logiciels libres et ouverts - Guide d'analyse de maturité (Québec)](https://www.tresor.gouv.qc.ca/fileadmin/PDF/ressources_informationnelles/logiciels_libres/pollo.pdf)
- [Logiciels libres et ouverts - Guide d'analyse du coût total de propriété (Québec)](https://www.tresor.gouv.qc.ca/fileadmin/PDF/ressources_informationnelles/logiciels_libres/ctp.pdf)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-open-by-default} [Working with open standards (Service Manual (UK))](https://www.gov.uk/service-manual/technology/working-with-open-standards)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-open-by-default} [Choosing technology: an introduction (Service Manual (UK))](https://www.gov.uk/service-manual/technology/choosing-technology-an-introduction)
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
- [9. Use open standards and common platforms (Digital Service Standard (Ontario))](https://www.ontario.ca/page/digital-service-standard#section-10)
- [7. Use open standards and common platforms (Digital Service Standard (AU))](https://www.dta.gov.au/standard/7-open-standards-and-common-platforms/)

**Build It Right Principles (GC):**
{: .dpgn-data-ignore}

- {: .dpgn-digital-architectural .dpgn-digital-architectural-open-by-default} [1. Open by Default (Proprietary by Necessity) (Build It Right Principles (GC))](https://canada-ca.github.io/digital-playbook-guide-numerique/views-vues/gc-earb-ceai/en/gc-earb.html#open-by-default-proprietary-by-neccessity)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-performance-availability-scalability} [5. Design for Performance, Availability, and Scalibility (Build It Right Principles (GC))](https://canada-ca.github.io/digital-playbook-guide-numerique/views-vues/gc-earb-ceai/en/gc-earb.html#design-for-performance-availability-and-scalability)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-expose-functionality-services} [6. Expose all functionality as services (Build It Right Principles (GC))](https://canada-ca.github.io/digital-playbook-guide-numerique/views-vues/gc-earb-ceai/en/gc-earb.html#expose-all-functionality-as-services)

**Design, build and test end-to-end digital services (formerly guideline 6.5):**
{: .dpgn-data-ignore}

- [10. Test the end-to-end service (Digital Service Standard (UK))](https://www.gov.uk/service-manual/service-standard/test-the-end-to-end-service)
- [4. Design the service from start to finish (Digital Service Standard (Ontario))](https://www.ontario.ca/page/digital-service-standard#section-5)
- [6. Test the end-to-end service (Digital Service Standard (Ontario))](https://www.ontario.ca/page/digital-service-standard#section-7)
- [10. Automate testing and deployments (Digital Services Playbook (US))](https://playbook.cio.gov/#play10)
- [10. Test the service (Digital Service Standard (AU))](https://www.dta.gov.au/standard/10-test-the-service/)

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

**Cloud first (formerly guideline 6.6):**
{: .dpgn-data-ignore}

Our services should be deployed on flexible infrastructure, where resources can be provisioned in real-time to meet spikes in traffic and user demand. **(Digital Services Playbook (US))**

Public cloud services offer benefits that enable significant advances in the following:

- Service performance: Self-service provisioning of computing resources can dramatically reduce the time to meet a requirement. Metrics-based service levels that are contractually enforced help ensure consistent performance levels.

- Security: Cloud-service providers hold internationally recognized security certifications that are assessed by third-party security professionals. These certifications include robust security features that would be a challenge for any one consumer to fund individually.
- Innovation: New features are being continuously deployed, and the costs are amortized across a global service customer base. New technologies such as social media, mobile platforms and analytic tools are all available through subscriptions without large capital investments.
- Agility: Rapid access is available to multi-featured computing resources at the required capacity to carry out projects from planning to full operation.
- Elasticity: Commoditized services can grow and shrink with the level of demand; consumers pay only for what is needed for the time it is needed.

**(GC)**

</div>

<section class="dpgn-section-checklist">

### Checklist

**[TODO: Add/revise checklist items]**

- follow government better practice and standards in the design of the service **(Digital Service Standard (AU))**
- identify tools, systems, processes that can be adopted or reused from other services **(Digital Service Standard (AU))**
- search for similar solutions in other jurisdictions. **(Digital Service Standard (AU))**
- addressing any common user needs in a way that is consistent with the rest of government. **(Digital Service Standard (AU))**
- Choose software frameworks that are commonly used by private-sector companies creating similar services **(Digital Services Playbook (US))**
- Ensure that each project has clear, understandable instructions for setting up a local development environment, and that team members can be quickly added or removed from projects **(Digital Services Playbook (US))**
- Use departmental/GC standards. **(2. Reuse, improve and share technological solutions where appropriate (Do - Digital Design Playbook (ISED)))**
  - Adopt the business number as the client identifier - do not create other unique identifiers. This enables data sharing across service lines, departments and jurisdictions.
  - Authenticated services must use only the federated credentials (e.g., SecureKey, GCKey). This enables a single login so clients do not need to re-authenticate their identity for each ISED service. It also ensures a sufficient level of security.
  - Build in client relationship management (e.g., MS Dynamics). This enables many capabilities such as the “Tell-me-once” feature, real-time status updates and omni-channel service delivery.
  - Utilize resources offered by the Chief Information Office (e.g., Master Data Management) to retrieve information that can help you have a holistic view of clients across the department.
  - Follow the [Canada.ca Content Style Guide](https://www.tbs-sct.gc.ca/hgw-cgf/oversight-surveillance/communications/csc-grc-eng.asp)
  - For services that receive payments, adopt the departmental standard e-payment system. This provides a consistent client experience across ISED services.
  - Build in real-time status updates to your services, where appropriate.
- Use device-agnostic and modular technology. **(2. Reuse, improve and share technological solutions where appropriate (Do - Digital Design Playbook (ISED)))**
  - Use technology that allows your service to function regardless of the device or operating system. Make sure mobile apps can function on all devices.
  - Modular technology can be reused, in part or in whole to innovate new solutions and uses for it. It also allows you to add new capabilities and capacities to your technology in response to changing operational environments.
- Choose solutions or parts thereof that are re-usable in another service context. **(2. Reuse, improve and share technological solutions where appropriate (Do - Digital Design Playbook (ISED)))**
  - Use technology solutions that other business lines can reuse or adapt to their needs. This is both economical and practical as it permits future interoperability, and reduces the overall cost of follow-on digital transformation initiatives.
- Consider open data to the extent possible. **(2. Reuse, improve and share technological solutions where appropriate (Do - Digital Design Playbook (ISED)))**
  - Open data is structured data that is machine-readable, is freely shared and can be used and/or built on without restrictions. It relies on three things: a permissive licensing model that encourages reuse, data discoverability and data accessibility. It also requires anonymization of data when involving potentially private information.
  - Open data increases transparency.
  - Open data leverages public sector information to develop consumer and commercial products.
  - Utilize the Government of Canada’s and ISED’s Application Programming Interface (API) Store.

**Build It Right Principles (GC):**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
- {: .dpgn-digital-architectural-maximize-reuse-1} Where feasible, existing components and processes across the GC shall be leveraged/reused to create new solutions.
- {: .dpgn-digital-architectural-maximize-reuse-2} Net new development shall consider GC Enterprise/GC Enterprise Cluster requirements first over Departmental Specific Solutions. For clarity, the order of scope preference is:
  - Enterprise
  - Enterprise Cluster
  - Departmental (recognising institutional uniqueness)
- {: .dpgn-digital-architectural-maximize-reuse-3} Reuse first, buy second, build last.
- {: .dpgn-digital-architectural-maximize-reuse-4} Simplification will be achieved by minimizing duplication of active components in use, adhering to established standards.
- {: .dpgn-digital-architectural-maximize-reuse-5} Perform IT lifecycle management so that no HW or SW platform is unsupported or obsolete.
- {: .dpgn-digital-architectural-maximize-reuse-6} GC institutions shall identify opportunities to TBS where their investments/innovations contribute to move the whole GC forward.
- {: .dpgn-digital-architectural-maximize-reuse-7} Solutions shall be designed with Enterprise scale in mind.
  - For example, many initiatives involving containerization and managing applications in the Cloud are based on custom operational scripts leveraging open source tools. While that's fantastic for early stage exploration, it's not a sustainable model for production scale systems. As newer architectures come through EARB, we should be looking at their long term viability.
- {: .dpgn-digital-architectural-expose-functionality-services-3} Applications shall be run in containers.
- {: .dpgn-digital-architectural-expose-functionality-services-5} Services shall be designed using standardized information models and schemas (e.g., NIEM, HRXML). API's are nearly useless if they expose proprietary schemas.
  - For example, services generated by whatever technology they're exposing are not interop-friendly. Furthermore, they tend to tightly couple the API to the backend implementation which defeats the point of having a service.
- {: .dpgn-digital-architectural-cloud-first-1} The order of preference for hosting is:
  - Public Cloud for SaaS (Software as a Service, also known as Managed Services).
  - Public PaaS (Platform as a Service)
  - Public IaaS (Infrastructure as a Service)
  - Private Cloud (Where Public hosting is not possible)
  - Non-cloud (Where cloud hosting is not possible)
{: .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

**Cloud first (formerly guideline 6.6):**
{: .dpgn-data-ignore}

- Cloud first
- Ensure that resources are provisioned on demand **(OneGC product design criteria) /** Resources are provisioned on demand **(Digital Services Playbook (US))**
- Enable resources to scale based on real-time user demand **(OneGC product design criteria) /** Resources scale based on real-time user demand **(Digital Services Playbook (US))**
- Ensure resources are available in multiple regions **(OneGC product design criteria) /** Resources are available in multiple regions **(Digital Services Playbook (US))**
- Pay for only the resources that are used **(OneGC product design criteria) /** We only pay for resources we use **(Digital Services Playbook (US))**
- Design so static assets are served through a content delivery network **(OneGC product design criteria) /** Static assets are served through a content delivery network **(Digital Services Playbook (US))**
- Resources are provisioned through an API **(Digital Services Playbook (US))**
- Application is hosted on commodity hardware **(Digital Services Playbook (US))**

</section>

<section class="dpgn-section-guides">

### Implementation guides

**[TODO: Add/revise implementation guide items]**

- {: .dpgn-digital-architectural .dpgn-digital-architectural-maximize-reuse}[Canada.ca Content and Information Architecture Specification](https://www.canada.ca/en/treasury-board-secretariat/services/government-communications/canada-content-information-architecture-specification.html)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-maximize-reuse} [Canada.ca Content Style Guide](https://www.canada.ca/en/treasury-board-secretariat/services/government-communications/canada-content-style-guide.html)

**Cloud first (formerly guideline 6.6):**
{: .dpgn-data-ignore}

- {: .dpgn-digital-architectural .dpgn-digital-architectural-cloud-first} [Government of Canada Right Cloud Selection Guidance](https://www.canada.ca/en/treasury-board-secretariat/services/information-technology/cloud-computing/government-canada-right-cloud-selection-guidance.html)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-cloud-first} [Government of Canada Security Control Profile for Cloud-Based GC IT Services](https://www.canada.ca/en/treasury-board-secretariat/services/information-technology/cloud-computing/government-canada-security-control-profile-cloud-based-it-services.html)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-cloud-first} [Government of Canada Cloud Adoption Strategy](https://www.canada.ca/en/treasury-board-secretariat/services/information-technology/cloud-computing/government-canada-cloud-adoption-strategy.html)

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

**Build It Right Principles (GC):**
{: .dpgn-data-ignore}

- {: .dpgn-digital-architectural .dpgn-digital-architectural-maximize-reuse} [2. Maximize Reuse (Enterprise First) (Build It Right Principles (GC))](https://canada-ca.github.io/digital-playbook-guide-numerique/views-vues/gc-earb-ceai/en/gc-earb.html#maximize-reuse-enterprise-first)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-expose-functionality-services} [6. Expose all functionality as services (Build It Right Principles (GC))](https://canada-ca.github.io/digital-playbook-guide-numerique/views-vues/gc-earb-ceai/en/gc-earb.html#expose-all-functionality-as-services)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-cloud-first} [9. Cloud First (Build It Right Principles (GC))](https://canada-ca.github.io/digital-playbook-guide-numerique/views-vues/gc-earb-ceai/en/gc-earb.html#cloud-first)

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

- Build services that are API-centric services, which execute most, if not all, functionality through API calls (e.g., connecting frontend to backend through an API)
- Plan out API access from the beginning, designing services to be able to safely and securely expose functionality to other systems and the public.
- Design APIs to be compete but also minimal, ensuring the expected functionality is provided but with as few public members per class and as few classes as possible. This makes it easier to understand, remember, debug and change the API.
- Design APIs to have clear and simple semantics to make common tasks easy. Rare tasks should still be possible but not the focus. Avoid being overly general, optimizing specific use cases.
- Design APIs to be intuitive so that a semi-experienced user can be successful with minimal assistance from the documentation and programmers can easily understand code that uses the API.
- Design APIs to be easy to memorize by implementing a consistent and precise naming convention. Use plain language and recognizable patterns and concepts, avoiding abbreviations where possible.

**Build It Right Principles (GC):**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
- {: .dpgn-digital-architectural-expose-functionality-services-1} The microservices architecture is a design approach to build a single application as a set of small services. Microservices are built around business capabilities; each service is scoped to a single purpose. Components will be architected to minimize the costs of future changes.
- {: .dpgn-digital-architectural-expose-functionality-services-4} Each service shall in its own process and communicate with other services through a well-defined interface using a lightweight mechanism, typicall an HTTP-based application programming interface (API).
{: .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

</section>

<section class="dpgn-section-guides">

### Implementation guides

**[TODO: Add/revise implementation guide items]**

- {: .dpgn-digital-architectural .dpgn-digital-architectural-open-by-default .dpgn-digital-architectural-expose-functionality-services} [API technical and data standards (Government Digital Service (UK))](https://www.gov.uk/guidance/gds-api-technical-and-data-standards)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-expose-functionality-services} [Developing cross-government API data and technical standards (Government Digital Service blog (UK))](https://gdstechnology.blog.gov.uk/2018/02/13/developing-cross-government-api-data-and-technical-standards/)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-open-by-default .dpgn-architectural-expose-functionality-services} [Application Programming Interfaces (APIs) (Digital Service Standard (AU))](https://www.dta.gov.au/standard/design-guides/api/)

</section>

<section class="dpgn-section-solutions">

### Reusable solutions

**[TODO: Add/revise reusable solutions]**

</section>

<section class="dpgn-section-similar">

### Similar resources

**Build It Right Principles (GC):**
{: .dpgn-data-ignore}

- {: .dpgn-digital-architectural .dpgn-digital-architectural-expose-functionality-services} [6. Expose all functionality as services (Build It Right Principles (GC))](https://canada-ca.github.io/digital-playbook-guide-numerique/views-vues/gc-earb-ceai/en/gc-earb.html#expose-all-functionality-as-services)

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

**Build It Right Principles (GC):**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
- {: .dpgn-digital-architectural-open-by-default-4} Information should be open to other GC organizations and exposed via API's. Any legislative barriers to doing so shall be flagged to TBS.
{: .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

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

<section class="dpgn-section-similar">

### Similar resources

**Build It Right Principles (GC):**
{: .dpgn-data-ignore}

- {: .dpgn-digital-architectural .dpgn-digital-architectural-open-by-default} [1. Open by Default (Proprietary by Necessity) (Build It Right Principles (GC))](https://canada-ca.github.io/digital-playbook-guide-numerique/views-vues/gc-earb-ceai/en/gc-earb.html#open-by-default-proprietary-by-neccessity)

</section>
</section>
