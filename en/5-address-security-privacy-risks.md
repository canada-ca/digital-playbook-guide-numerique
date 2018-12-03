---
layout: default
title: "5. Address security and privacy risks"
lang: en
altLang: fr
altLangPage: 5-gerer-risques-matiere-securite-protection-renseignements-personnels
---
<!-- {: .dpgn-stage-alpha .dpgn-stage-beta .dpgn-stage-live .dpgn-digital-architectural .dpgn-digital-architectural-design-for-users-first} -->

<div class="dpgn-section-intro-standard">

Canadians who use government services must have confidence that:

* any information they provide is handled and stored appropriately
* they know how their information will be used by government
* they can easily retrieve information they provide
* that their privacy is protected while they use the service, and afterwards
* the system they’re using is safe and secure

If a service cannot guarantee confidentiality, integrity and availability of the system, people will not use it. Effective cyber and IT security is an essential enabler of digital transformation. Securing #GCDigital requires the delivery of government services that are safe, secure and trusted by Canadians.

</div>

<div class="dpgn-section-guidelines">

**Guidelines:**

<!-- markdownlint-disable MD032 -->
* TOC
{:toc}
<!-- markdownlint-enable MD032 -->

</div>

<div class="dpgn-section-guidelines-related">

**Related guidelines:**

{% include functions/guideline-links.html guidelines="1.1, 1.2, 4.1, 8.1, 8.2, 8.3, 8.4" samePage=false includeStandardTitle=true %}

</div>

<section class="dpgn-section-guideline">

## 5.1 Take a balanced approach to managing risk by implementing appropriate privacy and security measures

<div class="dpgn-section-intro-guideline">

All organizations face risks, no matter the size, yet one size does not fit all when it comes to risk management. Each IT organisation has to make difficult decisions around how much time and money to spend protecting their technology and services. An understanding of the users, data and threats that affect the service will help to inform this risk-based approach to support the delivery of a usable and secure system. Appropriate steps must be taken to identify, assess and understand security and privacy risks to GC sensitive and protected data and the systems that process this data.

A key goal of risk management is to inform and improve these decisions. Making it easy for those responsible for risk management decisions to have access to (and understand) the information they require is important for the effective communication of risks. The effective communication of risk management information helps organizations to direct and control risk management activities. Accepting that technology and security risks will be realised and understanding what the organisation will do to minimise damage, continue to operate, and make improvements based on lessons learned.

Assessing cyber risks cannot be done in isolation. It must be assessed while considering potential impacts on other parts of an organization, and interactions with other elements such as financial risk and safety. Understanding what an organization cares about, and why it's important, will help to prioritize where to invest when implementing appropriate privacy and security measures into your design with minimal user impact. The level of investment in privacy and security should be based on the perceived or actual value placed on the assets or information you are protecting. When considering the balance of controls, account for the cost of lost trust - the effort to rebuild trust, should your service be compromised.

**Formerly guideline 9.3**
{: .dpgn-data-ignore}

### Include security and privacy in innovation

Canadians’ support for open data and digital services is enhanced when their privacy rights are protected: transparency and respect for privacy are complementary goals. The shift to digital government offers opportunities to strengthen privacy rights and safely share more data that can benefit society. Innovation must be matched by conscious responsibility regarding stewardship of users’ personal information and data.

Embedding privacy protection in the design of digital applications or open data increases political legitimacy and public confidence, and privacy safeguards are a necessary condition for a successful shift to a digital Government of Canada. Digital services also have the potential to enhance privacy rights, for example, by facilitating access to and correction of personal information.

Organizations have a responsibility to ensure that the data under their care remains protected at all times, including in the process of sharing with external partners and within their own network. This requires an understanding what data is worth protecting, manage who and what can access it, and build effective defenses that both support innovation and protect the investment made in services and associated assets.

**Formerly guideline 9.4**
{: .dpgn-data-ignore}

### Address jurisdictional legal and regulatory requirements

The law and governance in cyberspace is not the sole responsibility nor under the authority of any one specific government, or group; boundary-less services require a fulsome understanding of any jurisdiction in which you operate.

Canadians want to have confidence that government digital services are designed to meet the laws and regulations stipulated in multiple acts protecting the confidentiality, integrity and accessibility of systems and information. Develop a legal and regulatory view of the department for the purposes of designing secure information systems through identifying the *business needs for security*. A business need for security is any protection or compliance requirement that ensures the confidentiality, integrity or availability of a business activity or information assets supporting a business activity. Business needs for security can also be derived from departmental missions, objectives, priorities, the need to preserve the organization's image and reputation, and various obligations that may have been contracted.

</div>

<section class="dpgn-section-checklist">

### Checklist

* Document the approach to security and risk management including the types of information and optimum level of documentation, necessary to make timely and effective decisions.
* Ensure that you identify and categorize information based on the degree of injury that could be expected to result from a compromise of its confidentiality, integrity and availability. Determine the type of information collected, how it should be secured, how long it is kept, and how it may be used and shared.
* At the start of designing a new service or feature, the team lead should engage the appropriate privacy, information management, and legal officer(s) to ensure that solutions comply with all requirements for the collection, sharing and protection of personal information.
* Determine what you absolutely need to protect through risk assessment and threat modeling – can you clearly identify what components are essential to the success of your service? Not all assets need the same level of protection. #pragmaticsecurity
* Determine what you’re willing to pay for security – can you adequately protect your assets with the desired level of investment? Is the cost of protection in excess of the value of your assets? #pragmaticsecurity
* Complete a preliminary privacy impact assessment (PPIA) or privacy impact assessment (PIA) if personal information is involved in the service.
* Establish a cycle of re-evaluation to ensure what you’re protecting is actually what you need to protect and make improvements based on lessons learned.
* Develop your system with the [7 principles of Privacy by Design (Information and Privacy Commissioner of Ontario)](https://www.ipc.on.ca/wp-content/uploads/Resources/7foundationalprinciples.pdf) in mind.
* Ensure your service complies with Canadian security and privacy legislation, government policy instruments, and departmental security policies at all stages.
* Identify and understand the jurisdictional requirements of where your digital service operates, and where your stakeholders are.
* Develop, update, and maintain written cybersecurity policies and procedures, including on governance by both service and organizational management.
* Develop, publish and maintain training and awareness material as required, to establish secure service-user behaviours
* Make sure the service limits access to physical and logical assets and associated facilities to authorized users, processes, or devices consistent with the risk of unauthorized access.
* Maintain logs of user access and system interactions to fully trace a user as they traverse each part of the system
* Implement layered defenses to reduce exposure to cyber threats with increased awareness and understanding to proactively manage such threats

**Alpha Stage**
{: .dpgn-data-ignore}

* {: .dpgn-stage-alpha .dpgn-stage-beta .dpgn-stage-live}Plan recurring interactions with the business and information risk teams to ensure ongoing alignment.
* {: .dpgn-stage-alpha}Integrate a security advisor into the delivery team to support IT security risk management throughout the full delivery of the service.
* {: .dpgn-stage-alpha}Document the protective measures implemented to enable the secure processing and sharing of data and information across government
* {: .dpgn-stage-alpha}Document how the service manages information and records (data) in order to protect their confidentiality and integrity, and ensure their availability.
* {: .dpgn-stage-alpha}Ensure all APIs have appropriate authentication and that only authorized users/services are able to access the information; “open data” APIs are explicitly configured to allow access by all by default.

**Beta Stage**
{: .dpgn-data-ignore}

{: .dpgn-standards-hide .dpgn-stage-beta} **Note:** Beta Stage includes all elements from the previous Alpha stage, plus the following:

* {: .dpgn-stage-beta .dpgn-stage-live}Where collecting personal information, inform users about privacy rights and protections, and about their right to access and correct their own personal information.
* {: .dpgn-stage-beta .dpgn-stage-live}Use appropriate de-identification strategies to minimize the risk of disclosing personal information.
* {: .dpgn-stage-beta .dpgn-stage-live}Establish a data access audit process to provide assurance to users that their data has not been accessed in an unauthorized manner.
* {: .dpgn-stage-beta .dpgn-stage-live}Incorporate privacy safeguards into partnership and data sharing agreements.
* {: .dpgn-stage-beta .dpgn-stage-live}Ensure that privacy breach protocol is implemented and understood. Federal institutions are required to notify the Office of the Privacy Commissioner of Canada (OPC) and the Treasury Board of Canada Secretariat (TBS) of all material privacy breaches and of the mitigation measures being implemented, if the breach involves sensitive personal information and could reasonably be expected to cause serious injury to the individual.
* {: .dpgn-stage-beta .dpgn-stage-live}Establish terms of services to ensure users understand how their data will be used and how it will be accessed
* {: .dpgn-stage-beta .dpgn-stage-live}Ensure your service has properly documented event management processes, in the event of a data breach or compromise of the integrity of your systems.
* {: .dpgn-stage-beta .dpgn-stage-live}Provide users adequate information (*Terms and Conditions / Privacy Agreement*) to ensure they fully understand the authority they are providing to 3rd party services.
* {: .dpgn-stage-beta .dpgn-stage-live}Ensure all APIs are developed in alignment with secure connection guidance; APIs should be accessed over HTTPS.

**Live Stage**
{: .dpgn-data-ignore}

{: .dpgn-standards-hide .dpgn-stage-beta} **Note:** Live Stage includes all elements from the previous Alpha and Beta stages, plus the following:

* {: .dpgn-stage-live}Establish agreements with 3rd parties who may benefit from receiving data from your service in accordance with guidance such as the TBS Guidance on Preparing Information Sharing Agreements Involving Personal Information, to ensure they will treat your data with appropriate care.

</section>

<section class="dpgn-section-guides">

### Implementation guides

* {: .dpgn-stage-alpha .dpgn-stage-beta .dpgn-stage-live .dpgn-digital-architectural .dpgn-digital-architectural-security-privacy}[Information Technology Policy Implementation Notices (ITPIN)](https://www.canada.ca/en/treasury-board-secretariat/services/information-technology/policy-implementation-notices.html)
* {: .dpgn-stage-alpha .dpgn-stage-beta .dpgn-stage-live .dpgn-digital-architectural .dpgn-digital-architectural-security-privacy}[GC Security Policy Implementation Notices (internal to Government of Canada)](http://intranet.canada.ca/wg-tg/go-sg/sim-gsi/spin-amps/spin-amps-eng.asp)
* {: .dpgn-stage-alpha .dpgn-stage-beta .dpgn-stage-live .dpgn-digital-architectural .dpgn-digital-architectural-security-privacy} [Security and Identity Management Policy Instruments](https://www.canada.ca/en/treasury-board-secretariat/services/access-information-privacy/security-identity-management/what-we-are-doing.html)
* {: .dpgn-stage-alpha .dpgn-stage-beta .dpgn-stage-live .dpgn-digital-architectural .dpgn-digital-architectural-security-privacy} [Security Resource Centre](https://www.canada.ca/en/treasury-board-secretariat/services/access-information-privacy/security-identity-management/resources.html)
* {: .dpgn-stage-alpha .dpgn-stage-beta .dpgn-stage-live}[OPC guidance for federal institutions (Office of the Privacy Commissioner of Canada (OPC))](https://www.priv.gc.ca/en/for-federal-institutions/)
* {: .dpgn-stage-beta .dpgn-stage-live}[Guidance on Preparing Information Sharing Agreements Involving Personal Information](https://www.canada.ca/en/treasury-board-secretariat/services/access-information-privacy/privacy/guidance-preparing-information-sharing-agreements-involving-personal-information.html)
* {: .dpgn-stage-alpha .dpgn-stage-beta .dpgn-stage-live .dpgn-digital-architectural .dpgn-digital-architectural-security-privacy}[Guidance Document: Taking Privacy into Account Before Making Contracting Decisions](https://www.canada.ca/en/treasury-board-secretariat/services/access-information-privacy/privacy/guidance-document-taking-privacy-into-account-before-making-contracting-decisions.html)
* {: .dpgn-stage-beta .dpgn-stage-live}[Guidelines for obtaining meaningful consent (Office of the Privacy Commissioner of Canada (OPC))](https://www.priv.gc.ca/en/privacy-topics/collecting-personal-information/consent/gl_omc_201805/)
* {: .dpgn-stage-beta .dpgn-stage-live}[Guidance on inappropriate data practices: Interpretation and application of subsection 5(3) (Office of the Privacy Commissioner of Canada (OPC))](https://www.priv.gc.ca/en/privacy-topics/collecting-personal-information/consent/gd_53_201805/)
* {: .dpgn-stage-beta .dpgn-stage-live .dpgn-digital-architectural .dpgn-digital-architectural-security-privacy}[Direction for Electronic Data Residency](https://www.canada.ca/en/treasury-board-secretariat/services/information-technology/policy-implementation-notices/direction-electronic-data-residency.html)
* [Canadian Criminal Code, Unauthorized use of computer (Sect 342.1/342.2)](http://laws-lois.justice.gc.ca/eng/acts/C-46/FullText.html#h-97)
* [Canadian Criminal Code, Mischief in relation to computer data (Sect 430(1.1))](http://laws-lois.justice.gc.ca/eng/acts/C-46/FullText.html#h-117)

</section>

<section class="dpgn-section-solutions">

### Reusable solutions

* {: .dpgn-stage-alpha .dpgn-stage-beta .dpgn-stage-live .dpgn-digital-architectural .dpgn-digital-architectural-security-privacy} [Pan-Canadian Trust Framework](https://github.com/canada-ca/PCTF-CCP)

</section>

<section class="dpgn-section-similar">

### Similar resources

* [Managing Risk through Digital Trust (CSO)](https://www.csoonline.com/article/3200753/security/managing-risk-through-digital-trust.html)
* [10. Embed privacy and security by design (Digital Service Standard (Ontario))](https://www.ontario.ca/page/digital-service-standard#section-10)
* [Privacy Act (Office of the Privacy Commissioner of Canada)](https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-privacy-act/)
* [Personal Information Protection & Electronic Documents Act (PIPEDA) (Office of the Privacy Commissioner of Canada)](https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/)
* [Privacy by Design (Wikipedia)](https://en.wikipedia.org/wiki/Privacy_by_design)
* [7. Understand security and privacy issues (Digital Service Standard (UK))](https://www.gov.uk/service-manual/service-standard/understand-security-and-privacy-issues)
* [11. Manage security and privacy through reusable processes (Digital Services Playbook (US))](https://playbook.cio.gov/#play11)
* [5. Make it secure (Digital Service Standard (AU))](https://guides.service.gov.au/digital-service-standard/5-make-it-secure/)

</section>

</section>

<section class="dpgn-section-guideline">

## 5.2 Make security measures frictionless so that they do not place a burden on users

<div class="dpgn-section-intro-guideline">

Digital services need to be designed to provide a rich and streamlined user experience, while also ensuring that sensitive information is protected within a processing environment that remains secure throughout its lifecycle. Service owners must be mindful that users will often find a way to circumvent burdensome security measures for convenience. It is important to make security seamless and frictionless by designing security measures that enable the user experience, through streamlined user-interface and features with which they interact, and to help improve the overall posture to prevent workarounds. Leveraging enabling services such as digital identity will help to provide users with access to digital services from their preferred device.

Services must be designed to resist attacks. However, security is not one-size fits all, and appropriate defenses are best developed to address the “soft spots” in your systems. By thinking about situations in which you could be compromised, it will help to identify and eliminate design issues. Undertaking a defense-in-depth approach provides layered security measures to help prevent against evolving and existing threats. It allows security to be addressed at multiple layers, hardening your systems as required, while providing unimpeded operations in others.

Integrating security from the outset and “shifting security left” in the service design will help to address security and privacy risks earlier in the development process, allowing teams to identify security needs as components are developed, reducing the cost and burden of changes later. A process of continuous review and improvement should be built into the development and maintenance of the service to support the selection of proportionate security measures that will protect against cyber attacks.

</div>

<section class="dpgn-section-checklist">

### Checklist

* {: .dpgn-stage-beta .dpgn-stage-live .dpgn-digital-architectural-security-privacy}Implement an Identity and Access Management (IAM) solution that aligns with trusted digital identity frameworks, such as the Pan-Canadian Trust Framework, for security commensurate to service sensitivity, ID portability across platforms, and authentication and authorization agility.
* {: .dpgn-stage-alpha .dpgn-stage-beta .dpgn-stage-live .dpgn-digital-architectural-security-privacy}Where possible, provide users easily-accessible means of authentication (e.g.: biometrics) to your service - take advantage of improvements in consumer technologies.
* {: .dpgn-stage-alpha .dpgn-stage-beta .dpgn-stage-live .dpgn-digital-architectural-security-privacy}Use deployment scripts to ensure configuration of production environment remains consistent and controllable.
* {: .dpgn-stage-alpha .dpgn-stage-beta .dpgn-stage-live .dpgn-digital-architectural-security-privacy}Test and certify components in each layer of the technology stack for security vulnerabilities, and then to re-use these same pre-certified components for multiple services.
* {: .dpgn-stage-alpha .dpgn-stage-beta .dpgn-stage-live .dpgn-digital-architectural-security-privacy}Ensure all APIs are developed in alignment with secure connections requirements from TBS and CSE; all APIs should be accessed over HTTPS only.
* {: .dpgn-stage-alpha .dpgn-stage-beta .dpgn-stage-live .dpgn-digital-architectural-security-privacy}Ensure all APIs have appropriate authentication and that only authorized users/services are able to access the information; “open data” APIs are explicitly configured to allow access by all by default
* {: .dpgn-stage-beta .dpgn-stage-live .dpgn-digital-architectural-security-privacy}Ensure your digital service offers a quick and easy reporting mechanism, that enables the process of security vulnerability disclosures; alerts should be treated with care and consideration equal to internal evaluations.
* {: .dpgn-stage-beta .dpgn-stage-live}Develop robust IT Continuity plans, including infrastructure and data backups, to ensure that your digital service is able to return to operational status with minimal disruption.
* {: .dpgn-stage-beta .dpgn-stage-live}Document the plan and process for technical updates and support for services/system software
* {: .dpgn-stage-beta .dpgn-stage-live}Leverage existing services and frameworks such as the Pan-Canadian Trust Framework to foster multi-jurisdictional service delivery.

</section>

<section class="dpgn-section-guides">

### Implementation guides

* {: .dpgn-stage-alpha .dpgn-stage-beta .dpgn-stage-live}[Password Guidance](https://docs.google.com/document/d/1Vhg_B6nIIYMtEhO6SaMGatRHwabapz2HLAHMT9V4Ev0/)

</section>

<section class="dpgn-section-solutions">

### Reusable solutions

**[TODO: Add/revise reusable solutions]**

* {: .dpgn-stage-alpha .dpgn-stage-beta .dpgn-stage-live}[Pan-Canadian Trust Framework](https://github.com/canada-ca/PCTF-CCP)

</section>

<section class="dpgn-section-similar">

### Similar resources

* [10. Embed privacy and security by design (Digital Service Standard (Ontario))](https://www.ontario.ca/page/digital-service-standard#section-10)
* [Information security (Digital Service Standard (UK))](https://www.gov.uk/service-manual/making-software/information-security.html)
* [Cloud security (Digital Service Standard (UK))](https://www.gov.uk/service-manual/operations/cloud-security.html)
* [User accounts and logins (Digital Service Standard (UK))](https://www.gov.uk/service-manual/design/user-accounts)

</section>
</section>
