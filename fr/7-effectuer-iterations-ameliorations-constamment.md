---
layout: default
title:  "7. Effectuer des itérations et des améliorations constamment (ébauche)"
lang: fr
altLang: en
altLangPage: 7-iterate-improve-frequently
---
<div class="dpgn-section-intro-standard">

**\[TODO: Ajouter / réviser le texte d'introduction\]**

</div>

<div class="dpgn-section-guidelines">

**Lignes directrices :**

<!-- markdownlint-disable MD032 -->
- TOC
{:toc}
<!-- markdownlint-enable MD032 -->

</div>

<div class="dpgn-section-guidelines-related">

**Lignes directrices connexesv:**

{% include functions/guideline-links.html guidelines="1.2, 3.3, 9.2" samePage=false includeStandardTitle=true %}

</div>

<section class="dpgn-section-guideline">

## 7.1 Construire avec agilité et améliorer constamment en réponse aux besoins des utilisateurs

<div class="dpgn-section-intro-guideline">

**\[TODO: Ajouter / réviser le texte d'introduction\]**

**Exemples d'introduction :**

**Digital Service Standard (UK):** Build your service using the agile, iterative and user-centred methods set out in the manual.

Using agile methods helps you to build services that:

- meet the needs of your users
- are easy and convenient for people to use
- you can change easily, eg if government policy or technology policy changes
- you can keep improving, eg based on user feedback
- cost less and are more accountable

**Norme de service numérique (Ontario):** Concevoir et élaborer le service en utilisant une approche agile et centrée sur l'utilisateur. Agile est une approche de la construction de services qui divise le travail en plus petits morceaux connus sous le nom d'itérations. Construire une fonctionnalité du service à la fois jusqu'à ce que l'ensemble du service est terminé.

Il s'agit d'une approche beaucoup moins risquée que l'approche traditionnelle «cascade» car les itérations fréquentes exposent les défauts du plan d'origine beaucoup plus rapidement (par exemple, ne pas obtenir les approbations, pas assez de ressources, pas les bonnes personnes). équipe, etc.)

Les méthodes centrées sur l'utilisateur, telles que la recherche par les utilisateurs et les tests d'utilisabilité, mettent l'accent sur la réalisation de services faciles à utiliser. Les services gouvernementaux traditionnels se concentrent sur la satisfaction des besoins opérationnels et l'alignement sur les objectifs stratégiques. Une approche centrée sur l'utilisateur garantit que les besoins de l'entreprise sont également équilibrés par rapport aux besoins des utilisateurs. Cela contribue à augmenter l'acceptation du service numérique.

### Pourquoi c'est important

Les méthodes agiles créent des services qui:

- peut être prototypé rapidement (et montré aux utilisateurs pour la rétroaction régulière)
- répondre aux besoins des utilisateurs
- peut changer facilement si, par exemple, la politique gouvernementale ou les changements technologiques
- peut continuer à améliorer en fonction des commentaires des utilisateurs
- peut être construit rapidement avec un minimum de fonctionnalités, et amélioré avec plus de fonctionnalités après la mise en service du service

**Digital Service Playbook (US):** Nous devrions utiliser un style de développement logiciel incrémental et rapide pour réduire le risque d'échec. Nous voulons mettre le logiciel de travail dans les mains des utilisateurs le plus tôt possible afin de permettre à l'équipe de conception et de développement de s'ajuster en fonction des commentaires des utilisateurs sur le service. Une capacité critique est de pouvoir tester et déployer automatiquement le service afin que de nouvelles fonctionnalités puissent être ajoutées fréquemment et être mises en production facilement.

**Digital Service Standard (AU):** Design and build the service using the service design and delivery process, taking an agile and user-centred approach.

Designing services in a user-centred way means that the services you deliver will be easy to use and convenient for the people who need to use them, helping them to stay in the digital channel.

Designing using agile methods allows you to be more proactive and respond easily to change, both in technology and government policy. Services should be improved frequently; they will be cheaper and more accountable to users.

**3. Review and improve services continually (Think - Digital Design Playbook (ISED)):** The [TBS Policy on Service](https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=27916) and the [TBS Management Accountability Framework (MAF)](http://www.tbs-sct.gc.ca/hgw-cgf/oversight-surveillance/maf-crg/index-eng.asp) require regular reviews of priority services in order to identify opportunities for service redesign." By reviewing services regularly, service providers can ensure that services continue to be relevant, effective and efficient, and deliver best value to clients.

Use quantitative and qualitative data to help with regular reviews of your service. User needs and technology evolve. There will always be room for improvement.

**3. Apply agile principles and be iterative. (Do - Digital Design Playbook (ISED)):** Applying agile involves continuous improvement by analyzing data, making adjustments and iterating to identify and test improvements. Core principles of agile include defining a measurable goal; sharing ownership of the problem; taking small steps with visible impact; validating ideas/solutions with the target audience (e.g., the client); measuring success; reflecting, adjusting and iterating.

Start with a representation or prototype of the solution that will be tested and revised based on feedback and insights. Each iteration improves on the previous version. Your understanding of a problem and how to address it evolves each time you refine an idea and re-craft potential solutions. Taking an iterative approach also helps you reduce risks. It makes big failures less likely and turns mistakes into learning opportunities.

</div>

<section class="dpgn-section-checklist">

### Liste de contrôle

**\[TODO: Ajouter / modifier les éléments de la liste de contrôle\]**

- {: .dpgn-onegc-architectural } Use agile **(Build It Right - OneGC Architectural Checklist (draft))**
  - Be an agile Developer: Develop in an iterative manner, with key stakeholders participation from the beginning, releasing minimum viable product as soon as possible and iteratively building out functionality
  - Be an agile administrator: Promote DEVOPS and automate, monitor and unify all platform and software construction from testing to release and infrastructure management

<section class="dpgn-section-stage dpgn-stage-alpha">

#### Stage alpha

- test hypotheses and underlying assumptions with several prototypes **(Digital Service Standard (AU))**
- follow a user-centred approach; include the user in all areas of the prototyping (design, iterations and so on) **(Digital Service Standard (AU))**
- work out incrementally what is the “right thing to build” **(Digital Service Standard (AU))**
- determine the minimum viable product (MVP). **(Digital Service Standard (AU))**

</section>

<section class="dpgn-section-stage dpgn-stage-beta dpgn-stage-live">

#### Stages bêta et en direct

- show how the service has responded to user research and usability testing **(Digital Service Standard (AU))**
- clearly describe the lifecycle of a user story, from user research to production **(Digital Service Standard (AU))**
- explain the deployment process and how you are able to support frequent deployments with minimal impact to users. **(Digital Service Standard (AU))**

</section>

<section class="dpgn-section-stage dpgn-stage-alpha dpgn-stage-beta dpgn-stage-live">

#### Stages alpha, bêta et en direct

- work in an agile way, using agile tools and techniques, continuing to do so when the service is live **(Digital Service Standard (UK)) /** work in an agile way, using agile tools and techniques, and continue to do so when the service is live **(Digital Service Standard (Ontario))**
- review and iterate the ways the team works to fix problems **(Digital Service Standard (UK)) /** ensure the team reviews and iterates the ways problems are fixed **(Digital Service Standard (Ontario))**
- use agile tools and techniques to communicate with each other **(Digital Service Standard (UK))**
- make sure the team responds to user research and usability testing **(Digital Service Standard (UK)) /** give an example of how the team has responded to user research and usability testing **(Digital Service Standard (Ontario))**
- make sure the governance is agile, based on clear and measurable goals, and has a clear focus on managing change and risk in real time **(Digital Service Standard (UK)) /** show that your service governance is agile, based on clear and measurable goals **(Digital Service Standard (Ontario))**
- document the design options you explored for your prototype and the reasons you discarded some **(Digital Service Standard (UK)) /** explore design options for your prototype and explain why some are discarded **(Digital Service Standard (Ontario))**
- document how the design of the service has changed over time because of what you found in user research **(Digital Service Standard (UK)) /** show how the design of the service has changed over time because of user research findings **(Digital Service Standard (Ontario))**
- document the design options you're considering for your assisted digital support **(Digital Service Standard (UK))**
- document any problems that you found in research which you'll have to solve to design the service, and how you plan to solve them **(Digital Service Standard (UK)) /** identify any problems found in research and solutions to improve the service **(Digital Service Standard (Ontario))**
- have a quality assurance testing and rollback plan that supports frequent iterations to the service **(Digital Service Standard (Ontario))**
- use a phased approach to test changes to part of service, when feature-based changes are not feasible **(Digital Service Standard (Ontario))**
- Ship a functioning "minimum viable product" (MVP) that solves a core user need as soon as possible, no longer than three months from the beginning of the project, using a "beta" or "test" period if needed **(Digital Service Playbook (US))**
- Run usability tests frequently to see how well the service works and identify improvements that should be made **(Digital Service Playbook (US))**
- Ensure the individuals building the service communicate closely using techniques such as launch meetings, war rooms, daily standups, and team chat tools **(Digital Service Playbook (US))**
- Keep delivery teams small and focused; limit organizational layers that separate these teams from the business owners **(Digital Service Playbook (US))**
- Release features and improvements multiple times each month **(Digital Service Playbook (US))**
- Create a prioritized list of features and bugs, also known as the "feature backlog" and "bug backlog" **(Digital Service Playbook (US))**
- Use a source code version control system **(Digital Service Playbook (US))**
- Give the entire project team access to the issue tracker and version control system **(Digital Service Playbook (US))**
- Use code reviews to ensure quality **(Digital Service Playbook (US))**
- Explore opportunities for improved usability of service. **(3. Review and improve services continually (Think - Digital Design Playbook (ISED)))**
- Review how other departments and governments approach service delivery and adapt/incorporate best practices where appropriate. **(3. Review and improve services continually (Think - Digital Design Playbook (ISED)))**
- Explore interdepartmental and/or interjurisdictional partnership arrangements to identify opportunities for joined-up services. **(3. Review and improve services continually (Think - Digital Design Playbook (ISED)))**
- Design the website or web application iteratively; the process should start with low-fidelity methods, such as quick sketches, and progressively moves to higher-fidelity methods, such as prototypes. **(3. Review and improve services continually (Think - Digital Design Playbook (ISED)))**
- Evaluate the design of the website or web application regularly and improve it throughout its life cycle through various methods such as observing users completing tasks during **(3. Review and improve services continually (Think - Digital Design Playbook (ISED)))**
- Consider other service channels, such as telephone and in-person, used to obtain information and services from the Government of Canada. **(3. Review and improve services continually (Think - Digital Design Playbook (ISED)))**
- Explore opportunities for channel integration and mobile optimization. **(3. Review and improve services continually (Think - Digital Design Playbook (ISED)))**
- Consult the TBS Technical Specifications for the Web and Mobile Presence. **(3. Review and improve services continually (Think - Digital Design Playbook (ISED)))**
- Websites and web applications are optimized for mobile devices by: **(3. Review and improve services continually (Think - Digital Design Playbook (ISED)))**
  - Using the Web Experience Toolkit (WET) for adapting the layout and design of websites and web applications for small, medium and large screen sizes, and for different input methods, such as touch input, and keyboard and mouse input.
  - Designing the content and interface of websites and web applications for small, medium and large screen sizes and for different input methods, such as touch input and keyboard and mouse input.
- Start with a prototype **(3. Apply agile principles and be iterative. (Do - Digital Design Playbook (ISED)))**
  - Create a minimum viable product, that is, a version of the service with just enough features to gather insights, test assumptions and inform future improvements. Use the prototype to capture client feedback and then make improvements until you have a version that really meets client needs.
- When iterating, focus on workable solutions over comprehensive documentation. **(3. Apply agile principles and be iterative. (Do - Digital Design Playbook (ISED)))**
  - Having a workable solution that can be tested and validated will give you useful information for improving your service. Whenever possible, focus on results rather than unnecessary documentation and reporting (while staying within policy and regulatory limits).
- When you can, use [agile tools and techniques](https://www.gov.uk/service-manual/agile-delivery/agile-tools-techniques). **(3. Apply agile principles and be iterative. (Do - Digital Design Playbook (ISED)))**
  - Techniques can include: daily stand ups, issue trackers, code reviews, rapid prototyping, design sprints, usability testing, user stories, retrospective meetings.
- Build and release a core-function oriented product that meets user needs. **(3. Apply agile principles and be iterative. (Do - Digital Design Playbook (ISED)))**
  - Focus on developing a product that takes care of the client’s task(s). Additional capacities and new features to service can be added later as long as these add-ons do not result in the service/product losing effectiveness at core functions.
- work in an agile way, based on agile values and principles, and using agile tools and techniques **(Digital Service Standard (AU))**
- review and iterate your processes to be able to respond to feedback, continue to improve and adapt to change **(Digital Service Standard (AU))**
- be able to demonstrate how your team uses agile tools and techniques to communicate with each other to increase collaboration and transparency **(Digital Service Standard (AU))**
- be able to show that your governance is appropriate to the size and scale of your service, and that it is human-centred, based on clear and measurable goals, with a clear focus on managing change and risk in real time. **(Digital Service Standard (AU))**

</section>
</section>

<section class="dpgn-section-guides">

### Guides d'implémentation

**\[TODO: Ajouter / réviser les éléments du guide de mise en œuvre\]**

- [247 different checklists for usability testing (userfocus.co.uk)](http://www.userfocus.co.uk/resources/guidelines.html)
- [Spécifications du contenu et de l’architecture de l'information pour Canada.ca](https://www.canada.ca/fr/secretariat-conseil-tresor/services/communications-gouvernementales/specifications-contenu-architecture-information-canada.html)
- [Guide de rédaction du contenu du site Canada.ca](https://www.canada.ca/fr/secretariat-conseil-tresor/services/communications-gouvernementales/guide-redaction-contenu-canada.html)
- [Spécifications techniques relatives à la présence Web et mobile (GC)](https://www.tbs-sct.gc.ca/ws-nw/mo-om/ts-st/index-fra.asp)
- [Agile tools and techniques (Service Manual (UK))](https://www.gov.uk/service-manual/agile-delivery/agile-tools-techniques)
- [Agile Principles & Practices (18F (US))](https://pages.18f.gov/agile/index.html)
- [Scrum (Scrum Alliance)](https://www.scrumalliance.org/)
- [Lean (internal to Government of Canada)](http://www.gcpedia.gc.ca/wiki/Category:Lean_process_improvement_community)
- [Kanban (David J Anderson & Associates)](http://www.djaa.com/principles-kanban-method-0)
- [GCpedia Community of Practice Agile Methods (internal to Government of Canada)](http://www.gcpedia.gc.ca/wiki/Ellen_Grove_-_Agile_Methods)
- [CRA Agile Framework (internal to Government of Canada)](http://www.gcpedia.gc.ca/wiki/Sprint_(CRA_Agile_Framework))
- [Cadre de responsabilisation de gestion (CRG) (GC)](https://www.canada.ca/fr/secretariat-conseil-tresor/services/cadre-responsabilisation-gestion.html)
  - [Processus d'évaluation du CRG](https://www.canada.ca/fr/secretariat-conseil-tresor/services/cadre-responsabilisation-gestion/processus-evaluation.html)
- [Agile delivery (Digital Service Standard (UK))](https://www.gov.uk/service-manual/agile-delivery)
- [Agile (Digital Service Standard (AU))](https://www.dta.gov.au/standard/design-guides/agile/)
- [Service design and delivery process (Digital Service Standard (AU))](https://www.dta.gov.au/standard/service-design-and-delivery-process/)
- [Manifesto for Agile Software Development (agilemanifesto.org)](http://agilemanifesto.org/)
- [Method Cards (18F (US))](https://methods.18f.gov/)
- [Is your project using ‘agilefall’? (18F (US))](https://18f.gsa.gov/2015/12/29/is-your-project-using-agilefall/)
- [Agile tools and techniques (Service Manual (UK))](https://www.gov.uk/service-manual/agile-delivery/agile-tools-techniques)
- [Agile methods: an introduction (Service Manual (UK))](https://www.gov.uk/service-manual/agile-delivery/agile-methodologies)
- [How to be agile in an non-agile environment (Government Digital Service blog (UK))](https://gds.blog.gov.uk/2015/10/09/how-to-be-agile-in-a-non-agile-environment/)
- [You can’t be half agile (Government Digital Service blog (UK))](https://gds.blog.gov.uk/2015/07/10/you-cant-be-half-agile/)

</section>

<section class="dpgn-section-similar">

### Ressources similaires

- [4. Use agile methods (Digital Service Standard (UK))](https://www.gov.uk/service-manual/service-standard/use-agile-methods)
- [8. Souplesse et orientation sur l’utilisateur](https://www.ontario.ca/fr/page/norme-des-services-numeriques#section-9)
- [4. Build the service using agile and iterative practices (Digital Services Playbook (US))](https://playbook.cio.gov/#play4)
- [3. Review and improve services continually (Think - Digital Design Playbook (ISED)) (internal to Government of Canada)](http://www.gcpedia.gc.ca/wiki/DDPlayBook_Think#3._Review_and_improve_services_continually)
- [3. Apply agile principles and be iterative. (Do - Digital Design Playbook (ISED)) (internal to Government of Canada)](http://www.gcpedia.gc.ca/wiki/DDPlayBook_Do#3._Apply_agile_principles_and_be_iterative.)
- Agile - Small chunks - Iterate (GC EA Principles)
- {: .dpgn-onegc-architectural } Use agile (OneGC Architectural Checklist - Build It Right (draft))

</section>
</section>

<section class="dpgn-section-guideline">

## 7.2 Accepter que le changement est inévitable et utiliser des stratégies et des outils adaptés pour la poursuite du développement

<div class="dpgn-section-intro-guideline">

**\[TODO: Ajouter / réviser le texte d'introduction\]**

</div>

<section class="dpgn-section-checklist">

### Liste de contrôle

**\[TODO: Ajouter / modifier les éléments de la liste de contrôle\]**

</section>

<section class="dpgn-section-guides">

### Guides d'implémentation

**\[TODO: Ajouter / réviser les éléments du guide de mise en œuvre\]**

</section>
</section>

<section class="dpgn-section-guideline">

## 7.3 Accepter les changements d’environnement et de conception pour la durabilité et y réagir

<div class="dpgn-section-intro-guideline">

**\[TODO: Ajouter / réviser le texte d'introduction\]**

Once you have designed and launched a service, there is still work to do. Treat the service as a product; it requires regular reviews, usability tests and improvements. Unlike a project that has pre-determined start and end date, a product has a life cycle that goes far beyond the launching of the service. Regularly assessing the service and welcoming opportunities for improvement will help to ensure that the service keeps pace with evolving client needs and benefits from new or improved technology. **(2. Product management, not just project management. (Assess - Digital Design Playbook (ISED)))**

</div>

<section class="dpgn-section-checklist">

### Liste de contrôle

**\[TODO: Ajouter / modifier les éléments de la liste de contrôle\]**

- Continuously measure client experience and create a customer-prioritized improvement plan. **(2. Product management, not just project management. (Assess - Digital Design Playbook (ISED)))**
- Commit to regular service reviews **(2. Product management, not just project management. (Assess - Digital Design Playbook (ISED)))**
- Identify opportunities to improve the service based on the results of regular test **(2. Product management, not just project management. (Assess - Digital Design Playbook (ISED)))**

</section>

<section class="dpgn-section-guides">

### Guides d'implémentation

**\[TODO: Ajouter / réviser les éléments du guide de mise en œuvre\]**

</section>

<section class="dpgn-section-similar">

### Ressources similaires

- [2. Product management, not just project management. (Assess - Digital Design Playbook (ISED)) (internal to Government of Canada)](http://www.gcpedia.gc.ca/wiki/DDPlayBook_Assess#2._Product_management.2C_not_just_project_management.)

</section>
</section>

<section class="dpgn-section-guideline">

## 7.4 Commencer à échelle réduite et tester continuellement les conceptions et les hypothèses, en utilisant des données probantes comme base d’itération

<div class="dpgn-section-intro-guideline">

**\[TODO: Ajouter / réviser le texte d'introduction\]**

**Exemples d'introduction:**

**Digital Service Standard (UK):** Build a service that can be iterated and improved on a frequent basis and make sure that you have the capacity, resources and technical flexibility to do so.

You need to build a service which you can iterate and keep improving so that you can:

- easily respond to changes in policy which affect the service
- make sure your service keeps meeting user needs

**1. Test the service before launching the service. (Assess - Digital Design Playbook (ISED))**: Services should be simple, inclusive and easy to use. Services should help clients achieve the outcomes that matter most. Assessing prototypes while the service is being designed will help you discover shortcomings that may deter clients from using the service or glitches that may affect the user experience. Assessing the service before it is officially launched will also help you make improvements that can go a long way in ensuring clients are satisfied when using the service. Rigorously and comprehensively testing the service from end-to-end is part of good service design.

</div>

<section class="dpgn-section-checklist">

### Liste de contrôle

**\[TODO: Ajouter / modifier les éléments de la liste de contrôle\]**

- Start small and build upon successes. **(General design principles - Digital Design Playbook (ISED))**
- Don’t wait for a fully developed service to start testing. **(1. Test the service before launching the service. (Assess - Digital Design Playbook (ISED)))**
  - Develop a prototype of the service and test it to validate ideas, to challenge assumptions and to identify opportunities for improvement.
- Define your testing objective **(1. Test the service before launching the service. (Assess - Digital Design Playbook (ISED)))**
  - Define the purpose of the test and what you want to learn? The purpose of the test is often determined by your business goals and user needs identified through feedback, analytics and other sources.
  - Identify top or critical tasks to test. Main outcomes and features your clients want to achieve should be prioritized.
- Test with clients and others **(1. Test the service before launching the service. (Assess - Digital Design Playbook (ISED)))**
  - You need to ensure that the service works from technical perspective and from the perspective of the user and the service provider (including the help desk agent who assists clients when they face challenges using the service). By testing with a diverse group and different type of users, you can capture a more comprehensive understanding of how your service is working.
  - Make sure the participants are representative of your clients.
  - Utilize user experience testing services offered by the Chief Information Office and the Communications team
- Plan and deliver client testing cycles **(1. Test the service before launching the service. (Assess - Digital Design Playbook (ISED)))**
  - Pilot your test: Make sure it all works
  - Implement the test.
  - Test often (e.g., six month or yearly intervals), apply the findings and keep on testing.
- Test under realistic conditions **(1. Test the service before launching the service. (Assess - Digital Design Playbook (ISED)))**
  - Create realistic scenarios that reflect the context and environment in which clients would use the service.
- Use different types of tests to assess the service **(1. Test the service before launching the service. (Assess - Digital Design Playbook (ISED)))**
  - Identify the best testing method based on your needs. Examples of tests include:
    - Tree Testing - A test in which participants are asked to find a resource based on a series of menus.
    - Card Sorting Testing - A reverse tree test where participants sort through items and group them together in a hierarchal manner.
    - First Click Testing - A test that observes the first item that a participant clicks on and uses the selection as an indication as to whether users are directed as intended.

<section class="dpgn-section-stage dpgn-stage-alpha dpgn-stage-beta dpgn-stage-live">

#### Stages alpha, bêta et en direct

- document what you've built in each phase and why you built it **(Digital Service Standard (UK))**
- document the lifecycle of a user story from user research to production **(Digital Service Standard (UK))**
- make sure your service is built to meet user needs **(Digital Service Standard (UK))**
- identify and prioritize insights from user research **(Digital Service Standard (UK))**
- move user stories quickly and smoothly between user research and production **(Digital Service Standard (UK))**
- make sure there is minimal risk associated with the technology you chose **(Digital Service Standard (UK))**
- make sure you have the ability to deploy software frequently with minimal disruption to users **(Digital Service Standard (UK))**
- analyze user research and use it to improve your service **(Digital Service Standard (UK))**
- solve any technical problems you've found **(Digital Service Standard (UK))**

</section>

<section class="dpgn-section-stage dpgn-stage-beta">

#### Stage bêta

- determine how long you expect your service to be in beta and why **(Digital Service Standard (UK))**
- document your way of [deploying software](https://www.gov.uk/service-manual/making-software/deployment.html), ie how you can deploy frequently with minimum impact on users **(Digital Service Standard (UK))**

</section>

<section class="dpgn-section-stage dpgn-stage-live">

#### Stage en direct

- make sure deployments have zero downtime in a way that doesn't stop users using the service **(Digital Service Standard (UK))**
- make sure you have enough staff to keep improving the service **(Digital Service Standard (UK))**

</section>
</section>

<section class="dpgn-section-guides">

### Guides d'implémentation

**\[TODO: Ajouter / réviser les éléments du guide de mise en œuvre\]**

- [Test your service's performance (Service Manual (UK))](https://www.gov.uk/service-manual/technology/test-your-services-performance)
- [Quality assurance: testing your service regularly (Service Manual (UK))](https://www.gov.uk/service-manual/technology/quality-assurance-testing-your-service-regularly)
- [Exploratory Testing (Service Manual (UK))](https://www.gov.uk/service-manual/technology/exploratory-testing)
- [Testing Cookbook (18F (US))](https://pages.18f.gov/testing-cookbook/go/)
- [TBITS 26: Software Product Evaluation, Quality Characteristics and Guidelines for their Use (GC)](https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=17283)
- [Comment définir les essais par les utilisateurs (interne au Gouvernment du Canada)](http://www.gcpedia.gc.ca/wiki/How_to_Set_Up_User_Testing/Comment_d%C3%A9finir_les_essais_par_les_utilisateurs)
- [UXWG guide to Usability Testing (internal to Government of Canada](http://www.gcpedia.gc.ca/wiki/The_UXWG_guide_to_Usability_Testing)
- [Performance Testing (Digital Service Standard (AU))](https://www.dta.gov.au/standard/design-guides/performance-testing/)
- [Testing your service (Service Manual (UK))](https://www.gov.uk/service-manual/technology#testing-your-service)

Find out more about:

- [Agile delivery](https://www.gov.uk/service-manual/agile-delivery) **(Digital Service Standard (UK))**

</section>

<section class="dpgn-section-similar">

### Ressources similaires

- [5. Iterate and improve frequently (Digital Service Standard (UK))](https://www.gov.uk/service-manual/service-standard/iterate-and-improve-frequently)
- [1. Test the service before launching the service. (Assess - Digital Design Playbook (ISED)) (internal to Government of Canada)](http://www.gcpedia.gc.ca/wiki/DDPlayBook_Assess#1._Test_the_service_before_launching_the_service.)

</section>
</section>
