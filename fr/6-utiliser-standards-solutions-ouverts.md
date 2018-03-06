# 6. Utiliser des standards et solutions ouverts (ébauche)

**\[TODO: Ajouter / réviser le texte d'introduction\]**

**Lignes directrices :**

[6.1 Tirer parti des normes ouvertes et adopter des pratiques exemplaires](#user-content-61-tirer-parti-des-normes-ouvertes-et-adopter-des-pratiques-exemplaires)

[6.2 Utiliser et réutiliser des solutions, des approches et des plateformes gouvernementales communes et éprouvées](#user-content-62-utiliser-et-réutiliser-des-solutions-des-approches-et-des-plates-formes-gouvernementales-courantes-et-éprouvées)

[6.3 Conception pour l'interopérabilité, permettant aux services d'être découverts et exploités par la communauté](#user-content-63-conception-pour-linteropérabilité-permettant-aux-services-dêtre-découverts-et-exploités-par-la-communauté)

[6.4 Ouvrez les données, les transactions et les règles métier qui sous-tendent un service](#user-content-64-ouvrez-les-données-les-transactions-et-les-règles-métier-qui-sous-tendent-un-service)

[6.5 Concevoir, créer et tester des services numériques de bout en bout](#user-content-65-concevoir-créer-et-tester-des-services-numériques-de-bout-en-bout)

[6.6 Nuage d'abord](#user-content-66-nuage-dabord)

**Lignes directrices connexes:**

[5.1 Rendre toutes les données et informations non sensibles ouvertes au monde extérieur pour les partager et les réutiliser sous licence ouverte (Principe 5: Travailler à l'extérieur par défaut)](5-travailler-air-libre-par-defaut.md#user-content-51-rendre-toutes-les-données-et-informations-non-sensibles-ouvertes-au-monde-extérieur-pour-les-partager-et-les-réutiliser-sous-une-licence-ouverte)

**\[TODO: Identifier les directives connexes au format \"\# . \# Nom de la ligne directrice (Principe \#: Nom du principe)\"\]**

## 6.1 Tirer parti des normes ouvertes et adopter des pratiques exemplaires

**\[TODO: Ajouter / réviser le texte d'introduction\]**

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

### Liste de contrôle

**\[TODO: Ajouter / modifier les éléments de la liste de contrôle\]**

- use open standards and common platforms **(Digital Service Standard (Ontario))**

- understand common user needs with other services and meet those needs consistently with the rest of government **(Digital Service Standard (Ontario))**

### Guides d'implémentation

**\[TODO: Ajouter / réviser les éléments du guide de mise en œuvre\]**

- [Working with open standards](https://www.gov.uk/service-manual/making-software/open-standards-and-licensing.html) **(Digital Service Standard (UK))**

- [technology for services](https://www.gov.uk/service-manual/technology/choosing-technology-an-introduction) **(Digital Service Standard (UK))**

### Ressources similaires
- [Open Standards - Open First Whitepaper (GC)](https://github.com/canada-ca/Open_First_Whitepaper/blob/master/2_Open_Standards.md)

- [9. Use open standards and common platforms (Digital Service Standard (UK))](https://www.gov.uk/service-manual/service-standard/use-open-standards-and-common-platforms)

- [9. Utiliser des normes ouvertes et des plateformes communes (Normes des services numériques (Ontario))](https://www.ontario.ca/fr/page/norme-des-services-numeriques#section-10)

## 6.2 Utiliser et réutiliser des solutions, des approches et des plates-formes gouvernementales courantes et éprouvées

**\[TODO: Ajouter / réviser le texte d'introduction\]**

The technology decisions we make need to enable development teams to work efficiently and enable services to scale easily and cost-effectively. Our choices for hosting infrastructure, databases, software frameworks, programming languages and the rest of the technology stack should seek to avoid vendor lock-in and match what successful modern consumer and enterprise software companies would choose today. In particular, digital services teams should consider using open source, cloud-based, and commodity solutions across the technology stack, because of their widespread adoption and support by successful consumer and enterprise technology companies in the private sector. **Digital Services Playbook (US))**

In order to limit costs, avoid duplication of effort and provide a consistent client experience when using various services, the reuse and adaptation of existing technological solutions is encouraged, where appropriate. If the development of new solutions is required, consider the ability of others to reuse and adapt your work as this will provide additional value on an organizational level. **(2. Reuse, improve and share technological solutions where appropriate (Do - Digital Design Playbook (ISED)))**

### Liste de contrôle

**\[TODO: Ajouter / modifier les éléments de la liste de contrôle\]**

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

### Guides d'implémentation

**\[TODO: Ajouter / réviser les éléments du guide de mise en œuvre\]**

### Ressources similaires

- [Open Source Software - Open First Whitepaper (GC)](https://github.com/canada-ca/Open_First_Whitepaper/blob/master/2_Open_Standards.md)

- [8. Choose a modern technology stack (Digital Services Playbook (US))](https://playbook.cio.gov/#play8)

- [1. Comply with Government of Canada acts, policies, standards and directives (Plan - Digital Design Playbook (ISED)) (internal to GC only)](http://www.gcpedia.gc.ca/wiki/DDPlayBook_Plan#1._Comply_with_Government_of_Canada_acts.2C_policies.2C_standards_and_directives)

- [2. Reuse, improve and share technological solutions where appropriate (Do - Digital Design Playbook (ISED)) (internal to GC only)](http://www.gcpedia.gc.ca/wiki/DDPlayBook_Do#2._Reuse.2C_improve_and_share_technological_solutions_where_appropriate)

## 6.3 Conception pour l'interopérabilité, permettant aux services d'être découverts et exploités par la communauté

**\[TODO: Ajouter / réviser le texte d'introduction\]**

Les interfaces de programme d'application (API) sont un moyen par lequel les fonctionnalités métier sont exposées numériquement. Ce sont des éléments essentiels à la prestation réussie des services numériques en direct du gouvernement et à l'expansion de la prestation de services à des fournisseurs tiers. Ils peuvent également permettre une plus grande interopérabilité entre les services, optimiser les expériences entre les appareils et même mener à de nouveaux services novateurs en permettant à des produits tiers de fonctionner de façon transparente avec les systèmes du gouvernement du Canada.

### Liste de contrôle

- **\[TODO: Ajouter / modifier les éléments de la liste de contrôle\]**

- Build services that are API-centric services, which execute most, if not all, functionality through API calls (e.g., connecting frontend to backend through an API)

- Plan out API access from the beginning, designing services to be able to safely and securely expose functionality to other systems and the public.

- Design APIs to be compete but also minimal, ensuring the expected functionality is provided but with as few public members per class and as few classes as possible. This makes it easier to understand, remember, debug and change the API.

- Design APIs to have clear and simple semantics to make common tasks easy. Rare tasks should still be possible but not the focus. Avoid being overly general, optimizing specific use cases.

- Design APIs to be intuitive so that a semi-experienced user can be successful with minimal assistance from the documentation and programmers can easily understand code that uses the API.

- Design APIs to be easy to memorize by implementing a consistent and precise naming convention. Use plain language and recognizable patterns and concepts, avoiding abbreviations where possible.

### Guides d'implémentation

**\[TODO: Ajouter / réviser les éléments du guide de mise en œuvre\]**

## 6.4 Ouvrez les données, les transactions et les règles métier qui sous-tendent un service

**\[TODO: Ajouter / réviser le texte d'introduction\]**

### Liste de contrôle

**\[TODO: Ajouter / modifier les éléments de la liste de contrôle\]**

### Guides d'implémentation

**\[TODO: Ajouter / réviser les éléments du guide de mise en œuvre\]**

## 6.5 Concevoir, créer et tester des services numériques de bout en bout

**\[TODO: Ajouter / réviser le texte d'introduction\]**

There are many potential benefits from the greater use of digital services, including greater convenience for users, quicker and more responsive service delivery, increased security and reliability and reduced costs. To maximize these potential benefits and avoid user reliance on less convenient ways of interacting with government, services should be designed to be digital from end-to-end.

### Liste de contrôle

**\[TODO: Ajouter / modifier les éléments de la liste de contrôle\]**

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

### Guides d'implémentation

**\[TODO: Ajouter / réviser les éléments du guide de mise en œuvre\]**

- [Quality assurance: testing your service regularly](https://www.gov.uk/service-manual/technology/quality-assurance-testing-your-service-regularly) **(Digital Service Standard (UK))**

- [Designing for different browsers and devices](https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices) **(Digital Service Standard (UK))**

- [Performance testing](https://www.gov.uk/service-manual/technology/test-your-services-performance) **(Digital Service Standard (UK))**

- [Exploratory testing](https://www.gov.uk/service-manual/technology/exploratory-testing) **(Digital Service Standard (UK))**

- [Deployment environments](https://www.gov.uk/service-manual/making-software/deployment.html) **(Digital Service Standard (UK))**

- [Vulnerability and penetration testing](https://www.gov.uk/service-manual/technology/vulnerability-and-penetration-testing) **(Digital Service Standard (UK))**

### Ressources similaires

- [10. Test the end-to-end service (Digital Service Standard (UK))](https://www.gov.uk/service-manual/service-standard/test-the-end-to-end-service)

- [4. Conception du service du début à la fin (Normes des services numériques (Ontario))](https://www.ontario.ca/page/digital-service-standard#section-5)

- [6. Tester le service de bout en bout (Normes des services numériques (Ontario))](https://www.ontario.ca/page/digital-service-standard#section-7)

- [10. Automate testing and deployments (Digital Services Playbook (US))](https://playbook.cio.gov/#play10)

## 6.6 Nuage d'abord

**\[TODO: Ajouter / réviser le texte d'introduction\]**

Our services should be deployed on flexible infrastructure, where resources can be provisioned in real-time to meet spikes in traffic and user demand. **(Digital Services Playbook (US))**

Public cloud services offer benefits that enable significant advances in the following:

- Service performance: Self-service provisioning of computing resources can dramatically reduce the time to meet a requirement. Metrics-based service levels that are contractually enforced help ensure consistent performance levels.

- Security: Cloud-service providers hold internationally recognized security certifications that are assessed by third-party security professionals. These certifications include robust security features that would be a challenge for any one consumer to fund individually.

- Innovation: New features are being continuously deployed, and the costs are amortized across a global service customer base. New technologies such as social media, mobile platforms and analytic tools are all available through subscriptions without large capital investments.

- Agility: Rapid access is available to multi-featured computing resources at the required capacity to carry out projects from planning to full operation.

- Elasticity: Commoditized services can grow and shrink with the level of demand; consumers pay only for what is needed for the time it is needed.

### Liste de contrôle

**\[TODO: Ajouter / modifier les éléments de la liste de contrôle\]**

- Ensure that resources are provisioned on demand **(OneGC product design criteria) /** Resources are provisioned on demand **(Digital Services Playbook (US))**

- Enable resources to scale based on real-time user demand **(OneGC product design criteria) /** Resources scale based on real-time user demand **(Digital Services Playbook (US))**

- Ensure resources are available in multiple regions **(OneGC product design criteria) /** Resources are available in multiple regions **(Digital Services Playbook (US))**

- Pay for only the resources that are used **(OneGC product design criteria) /** We only pay for resources we use **(Digital Services Playbook (US))**

- Design so static assets are served through a content delivery network **(OneGC product design criteria) /** Static assets are served through a content delivery network **(Digital Services Playbook (US))**

- Resources are provisioned through an API **(Digital Services Playbook (US))**

- Application is hosted on commodity hardware **(Digital Services Playbook (US))**

### Guides d'implémentation

**\[TODO: Ajouter / réviser les éléments du guide de mise en œuvre\]**

### Ressources similaires

- [9. Deploy in a flexible hosting environment (Digital Services Playbook (US))](https://playbook.cio.gov/#play9)
