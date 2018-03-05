# 6. Use open standards and solutions (draft)

**[TODO: Add/revise introductory text]**

**Guidelines:**

[6.1 Leverage open standards and embrace leading practices](#user-content-61-leverage-open-standards-and-embrace-leading-practices)

[6.2 Use and reuse common, proven government solutions, approaches, and platforms](#user-content-62-use-and-reuse-common-proven-government-solutions-approaches-and-platforms)

[6.3 Design for interoperability, allowing services to be discovered and leveraged by the community](#user-content-63-design-for-interoperability-allowing-services-to-be-discovered-and-leveraged-by-the-community)

[6.4 Open up the data, transactions, and business rules that underpin a service](#user-content-64-open-up-the-data-transactions-and-business-rules-that-underpin-a-service)

[6.5 Design, build and test end-to-end digital services](#user-content-65-design-build-and-test-end-to-end-digital-services)

[6.6 Cloud first](#user-content-66-cloud-first)

**Related guidelines:**

[5.1 Make all non-sensitive data and information open to the outside world for sharing and reuse under an open licence (Principle 5: Work in the open by default)](5-work-in-open-by-default.md#user-content-51-make-all-non-sensitive-data-and-information-open-to-the-outside-world-for-sharing-and-reuse-under-an-open-licence)

**[TODO: Identify related guidelines in format "\#.\# Guideline name (Principle #: Principle name)"]**

## 6.1 Leverage open standards and embrace leading practices

**[TODO: Add/revise introductory text]**

Use open standards, open source software and common government platforms where available.

Open standards and open source software are published publicly, freely available for use by anyone, and are developed and maintained using a collaborative approach.

Using open standards and common government platforms will help the government:

- save time and money by reusing things that are already available

- move between different technologies when needed

- quickly and easily change a service when needed

- give people a more consistent experience of using government services online

- access a wider range of both open source and proprietary software vendors

- eliminate potentially restrictive long-term contracts

**(Digital Service Standard (Ontario))**

### Checklist

**[TODO: Add/revise checklist items]**

- use open standards and common platforms **(Digital Service Standard (Ontario))**

- understand common user needs with other services and meet those needs consistently with the rest of government **(Digital Service Standard (Ontario))**

### Implementation guides

**[TODO: Add/revise implementation guide items]**

- [Working with open standards](https://www.gov.uk/service-manual/making-software/open-standards-and-licensing.html) **(Digital Service Standard (UK))**

- [technology for services](https://www.gov.uk/service-manual/technology/choosing-technology-an-introduction) **(Digital Service Standard (UK))**

### Similar resources

- [9. Use open standards and common platforms (Digital Service Standard (UK))](https://www.gov.uk/service-manual/service-standard/use-open-standards-and-common-platforms)

- [9. Use open standards and common platforms (Digital Service Standard (Ontario))](https://www.ontario.ca/page/digital-service-standard#section-10)

## 6.2 Use and reuse common, proven government solutions, approaches, and platforms

**[TODO: Add/revise introductory text]**

The technology decisions we make need to enable development teams to work efficiently and enable services to scale easily and cost-effectively. Our choices for hosting infrastructure, databases, software frameworks, programming languages and the rest of the technology stack should seek to avoid vendor lock-in and match what successful modern consumer and enterprise software companies would choose today. In particular, digital services teams should consider using open source, cloud-based, and commodity solutions across the technology stack, because of their widespread adoption and support by successful consumer and enterprise technology companies in the private sector. **Digital Services Playbook (US))**

In order to limit costs, avoid duplication of effort and provide a consistent client experience when using various services, the reuse and adaptation of existing technological solutions is encouraged, where appropriate. If the development of new solutions is required, consider the ability of others to reuse and adapt your work as this will provide additional value on an organizational level. **(2. Reuse, improve and share technological solutions where appropriate (Do - Digital Design Playbook (ISED)))**

### Checklist

- **[TODO: Add/revise checklist items]**

- Choose software frameworks that are commonly used by private-sector companies creating similar services **(Digital Services Playbook (US))**

- Whenever possible, ensure that software can be deployed on a variety of commodity hardware types **(Digital Services Playbook (US))**

- Ensure that each project has clear, understandable instructions for setting up a local development environment, and that team members can be quickly added or removed from projects **(Digital Services Playbook (US))**

- [Consider open source software solutions](https://www.obamawhitehouse.gov/sites/default/files/omb/assets/egov_docs/memotociostechnologyneutrality.pdf) at every layer of the stack **(Digital Services Playbook (US))**

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

- Consider open source where feasible. **(2. Reuse, improve and share technological solutions where appropriate (Do - Digital Design Playbook (ISED)))**
  - Open source refers to practices that allow other software developers to have access via a free license to another product’s programming code, thereby allowing others to make subsequent improvements or develop new products that work with the product (e.g., being able to incorporate Twitter into another service or product).
  - Open-source code is typically a collaborative effort where programmers improve upon the source code and share the changes within the community so that other members can help improve it further.

- Consider open data to the extent possible. **(2. Reuse, improve and share technological solutions where appropriate (Do - Digital Design Playbook (ISED)))**
  - Open data is structured data that is machine-readable, is freely shared and can be used and/or built on without restrictions. It relies on three things: a permissive licensing model that encourages reuse, data discoverability and data accessibility. It also requires anonymization of data when involving potentially private information.
  - Open data increases transparency.
  - Open data leverages public sector information to develop consumer and commercial products.
  - Utilize the Government of Canada’s and ISED’s Application Programming Interface (API) Store.

### Implementation guides

**[TODO: Add/revise implementation guide items]**

### Similar resources

- [8. Choose a modern technology stack (Digital Services Playbook (US))](https://playbook.cio.gov/#play8)

- [1. Comply with Government of Canada acts, policies, standards and directives (Plan - Digital Design Playbook (ISED)) (internal to GC only)](http://www.gcpedia.gc.ca/wiki/DDPlayBook_Plan#1._Comply_with_Government_of_Canada_acts.2C_policies.2C_standards_and_directives)

- [2. Reuse, improve and share technological solutions where appropriate (Do - Digital Design Playbook (ISED)) (internal to GC only)](http://www.gcpedia.gc.ca/wiki/DDPlayBook_Do#2._Reuse.2C_improve_and_share_technological_solutions_where_appropriate)

## 6.3 Design for interoperability, allowing services to be discovered and leveraged by the community

**[TODO: Add/revise introductory text]**

**Introduction examples:**

Application Program Interfaces (APIs) are a means by which business functionality is exposed digitally. They are building blocks that are critical to the successful delivery of government online digital services and expanding service delivery to third party providers. They can also enable greater interoperability between services, optimized experiences across devices and can even lead to innovative new services by enabling third party products to work seamlessly with Government of Canada systems.

### Checklist

**[TODO: Add/revise checklist items]**

- Build services that are API-centric services, which execute most, if not all, functionality through API calls (e.g., connecting frontend to backend through an API)

- Plan out API access from the beginning, designing services to be able to safely and securely expose functionality to other systems and the public.

- Design APIs to be compete but also minimal, ensuring the expected functionality is provided but with as few public members per class and as few classes as possible. This makes it easier to understand, remember, debug and change the API.

- Design APIs to have clear and simple semantics to make common tasks easy. Rare tasks should still be possible but not the focus. Avoid being overly general, optimizing specific use cases.

- Design APIs to be intuitive so that a semi-experienced user can be successful with minimal assistance from the documentation and programmers can easily understand code that uses the API.

- Design APIs to be easy to memorize by implementing a consistent and precise naming convention. Use plain language and recognizable patterns and concepts, avoiding abbreviations where possible.

### Implementation guides

**[TODO: Add/revise implementation guide items]**

## 6.4 Open up the data, transactions, and business rules that underpin a service

**[TODO: Add/revise introductory text]**

### Checklist

**[TODO: Add/revise checklist items]**

### Implementation guides

**[TODO: Add/revise implementation guide items]**

## 6.5 Design, build and test end-to-end digital services

**[TODO: Add/revise introductory text]**

There are many potential benefits from the greater use of digital services, including greater convenience for users, quicker and more responsive service delivery, increased security and reliability and reduced costs. To maximize these potential benefits and avoid user reliance on less convenient ways of interacting with government, services should be designed to be digital from end-to-end.

### Checklist

**[TODO: Add/revise checklist items]**

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

### Implementation guides

**[TODO: Add/revise implementation guide items]**

- [Quality assurance: testing your service regularly](https://www.gov.uk/service-manual/technology/quality-assurance-testing-your-service-regularly) **(Digital Service Standard (UK))**

- [Designing for different browsers and devices](https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices) **(Digital Service Standard (UK))**

- [Performance testing](https://www.gov.uk/service-manual/technology/test-your-services-performance) **(Digital Service Standard (UK))**

- [Exploratory testing](https://www.gov.uk/service-manual/technology/exploratory-testing) **(Digital Service Standard (UK))**

- [Deployment environments](https://www.gov.uk/service-manual/making-software/deployment.html) **(Digital Service Standard (UK))**

- [Vulnerability and penetration testing](https://www.gov.uk/service-manual/technology/vulnerability-and-penetration-testing) **(Digital Service Standard (UK))**

### Similar resources

- [10. Test the end-to-end service (Digital Service Standard (UK))](https://www.gov.uk/service-manual/service-standard/test-the-end-to-end-service)

- [4. Design the service from start to finish (Digital Service Standard (Ontario))](https://www.ontario.ca/page/digital-service-standard#section-5)

- [6. Test the end-to-end service (Digital Service Standard (Ontario))](https://www.ontario.ca/page/digital-service-standard#section-7)

- [10. Automate testing and deployments (Digital Services Playbook (US))](https://playbook.cio.gov/#play10)

## 6.6 Cloud first

**[TODO: Add/revise introductory text]**

**Introduction examples:**

Our services should be deployed on flexible infrastructure, where resources can be provisioned in real-time to meet spikes in traffic and user demand. **(Digital Services Playbook (US))**

Public cloud services offer benefits that enable significant advances in the following:

- Service performance: Self-service provisioning of computing resources can dramatically reduce the time to meet a requirement. Metrics-based service levels that are contractually enforced help ensure consistent performance levels.

- Security: Cloud-service providers hold internationally recognized security certifications that are assessed by third-party security professionals. These certifications include robust security features that would be a challenge for any one consumer to fund individually.

- Innovation: New features are being continuously deployed, and the costs are amortized across a global service customer base. New technologies such as social media, mobile platforms and analytic tools are all available through subscriptions without large capital investments.

- Agility: Rapid access is available to multi-featured computing resources at the required capacity to carry out projects from planning to full operation.

- Elasticity: Commoditized services can grow and shrink with the level of demand; consumers pay only for what is needed for the time it is needed.

### Checklist

**[TODO: Add/revise checklist items]**

- Ensure that resources are provisioned on demand **(OneGC product design criteria) /** Resources are provisioned on demand **(Digital Services Playbook (US))**

- Enable resources to scale based on real-time user demand **(OneGC product design criteria) /** Resources scale based on real-time user demand **(Digital Services Playbook (US))**

- Ensure resources are available in multiple regions **(OneGC product design criteria) /** Resources are available in multiple regions **(Digital Services Playbook (US))**

- Pay for only the resources that are used **(OneGC product design criteria) /** We only pay for resources we use **(Digital Services Playbook (US))**

- Design so static assets are served through a content delivery network **(OneGC product design criteria) /** Static assets are served through a content delivery network **(Digital Services Playbook (US))**

- Resources are provisioned through an API **(Digital Services Playbook (US))**

- Application is hosted on commodity hardware **(Digital Services Playbook (US))**

### Implementation guides

**[TODO: Add/revise implementation guide items]**

### Similar ressources

- [9. Deploy in a flexible hosting environment (Digital Services Playbook (US))](https://playbook.cio.gov/#play9)
