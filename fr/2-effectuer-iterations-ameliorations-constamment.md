---
layout: default
title:  "2. Effectuer des itérations et des améliorations constamment (ébauche)"
lang: fr
altLang: en
altLangPage: 2-iterate-improve-frequently
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

{% include functions/guideline-links.html guidelines="1.2, 3.3, 5.1, 6.2" samePage=false includeStandardTitle=true %}

</div>

<section class="dpgn-section-guideline">

## 2.1 Développer des services à l'aide de méthodes agiles, itératives et centrées sur l'utilisateur

<div class="dpgn-section-intro-guideline">

**\[TODO: Ajouter / réviser le texte d'introduction\]**

**Norme de service numérique (Ontario):** Concevoir et élaborer le service en utilisant une approche agile et centrée sur l'utilisateur. Agile est une approche de la construction de services qui divise le travail en plus petits morceaux connus sous le nom d'itérations. Construire une fonctionnalité du service à la fois jusqu'à ce que l'ensemble du service est terminé.

Il s'agit d'une approche beaucoup moins risquée que l'approche traditionnelle «cascade» car les itérations fréquentes exposent les défauts du plan d'origine beaucoup plus rapidement (par exemple, ne pas obtenir les approbations, pas assez de ressources, pas les bonnes personnes). équipe, etc.)

Les méthodes centrées sur l'utilisateur, telles que la recherche par les utilisateurs et les tests d'utilisabilité, mettent l'accent sur la réalisation de services faciles à utiliser. Les services gouvernementaux traditionnels se concentrent sur la satisfaction des besoins opérationnels et l'alignement sur les objectifs stratégiques. Une approche centrée sur l'utilisateur garantit que les besoins de l'entreprise sont également équilibrés par rapport aux besoins des utilisateurs. Cela contribue à augmenter l'acceptation du service numérique.

</div>

<section class="dpgn-section-checklist">

### Liste de contrôle

**\[TODO: Ajouter / modifier les éléments de la liste de contrôle\]**

**Stages alpha, bêta et en direct :**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
- travaillez de façon agile, à l’aide d’outils et de techniques agiles, et continuez de la sorte une fois que le service est opérationnele **(Normes des services numériques (Ontario / UK / AU))**
- assurez-vous que l’équipe examine et met à jour de façon incrémentielle les façons de résoudre les problèmes **(Normes des services numériques (Ontario / UK / AU))**
- montrez que votre service est géré de façon agile, en s’appuyant sur des objectifs clairs et mesurables  **(Normes des services numériques (Ontario / UK / AU))**
- examinez les options de conception pour votre prototype et expliquez pourquoi certaines sont écartées **(Normes des services numériques (Ontario / UK))**
- Start with a prototype **(3. Apply agile principles and be iterative. (Do - Digital Design Playbook (ISED)))**
  - Create a minimum viable product, that is, a version of the service with just enough features to gather insights, test assumptions and inform future improvements. Use the prototype to capture client feedback and then make improvements until you have a version that really meets client needs.
- When iterating, focus on workable solutions over comprehensive documentation. **(3. Apply agile principles and be iterative. (Do - Digital Design Playbook (ISED)))**
  - Having a workable solution that can be tested and validated will give you useful information for improving your service. Whenever possible, focus on results rather than unnecessary documentation and reporting (while staying within policy and regulatory limits).
- When you can, use [agile tools and techniques](https://www.gov.uk/service-manual/agile-delivery/agile-tools-techniques). **(3. Apply agile principles and be iterative. (Do - Digital Design Playbook (ISED)))**
  - Techniques can include: daily stand ups, issue trackers, code reviews, rapid prototyping, design sprints, usability testing, user stories, retrospective meetings.
- make sure you have the ability to deploy software frequently with minimal disruption to users **(Digital Service Standard (UK))**
{: .dpgn-stage-alpha .dpgn-stage-beta .dpgn-stage-live}
<!-- markdownlint-enable MD032 -->

**Live stage:**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
- make sure deployments have zero downtime in a way that doesn't stop users using the service **(Digital Service Standard (UK))**
- make sure you have enough staff to keep improving the service **(Digital Service Standard (UK))**
{: .dpgn-stage-live}
<!-- markdownlint-enable MD032 -->

- Start small and build upon successes. **(General design principles - Digital Design Playbook (ISED))**
- Don’t wait for a fully developed service to start testing. **(1. Test the service before launching the service. (Assess - Digital Design Playbook (ISED)))**
  - Develop a prototype of the service and test it to validate ideas, to challenge assumptions and to identify opportunities for improvement.

</section>

<section class="dpgn-section-guides">

### Guides d'implémentation

- [247 different checklists for usability testing (userfocus.co.uk)](http://www.userfocus.co.uk/resources/guidelines.html)
- [Agile Principles & Practices (18F (US))](https://pages.18f.gov/agile/index.html)
- [Scrum (Scrum Alliance)](https://www.scrumalliance.org/)
- [Lean (internal to Government of Canada)](http://www.gcpedia.gc.ca/wiki/Category:Lean_process_improvement_community)
- [Kanban (development) (Wikipedia)](https://en.wikipedia.org/wiki/Kanban_(development))
- [GCpedia Community of Practice Agile Methods (internal to Government of Canada)](http://www.gcpedia.gc.ca/wiki/Ellen_Grove_-_Agile_Methods)
- [CRA Agile Framework (internal to Government of Canada)](http://www.gcpedia.gc.ca/wiki/Sprint_(CRA_Agile_Framework))
- [Agile delivery (Digital Service Standard (UK))](https://www.gov.uk/service-manual/agile-delivery)
- [Agile (Digital Service Standard (AU))](https://www.dta.gov.au/standard/design-guides/agile/)
- [Service design and delivery process (Digital Service Standard (AU))](https://www.dta.gov.au/standard/service-design-and-delivery-process/)
- [Manifesto for Agile Software Development (agilemanifesto.org)](http://agilemanifesto.org/)
- [Is your project using ‘agilefall’? (18F (US))](https://18f.gsa.gov/2015/12/29/is-your-project-using-agilefall/)
- [Agile methods: an introduction (Service Manual (UK))](https://www.gov.uk/service-manual/agile-delivery/agile-methodologies)
- [How to be agile in an non-agile environment (Government Digital Service blog (UK))](https://gds.blog.gov.uk/2015/10/09/how-to-be-agile-in-a-non-agile-environment/)
- [You can’t be half agile (Government Digital Service blog (UK))](https://gds.blog.gov.uk/2015/07/10/you-cant-be-half-agile/)
- [Agile delivery (Digital Service Standard (UK))](https://www.gov.uk/service-manual/agile-delivery)

</section>

<section class="dpgn-section-solutions">

### Solutions réutilisables

- [Method Cards (18F (US))](https://methods.18f.gov/)
- [Agile tools and techniques (Service Manual (UK))](https://www.gov.uk/service-manual/agile-delivery/agile-tools-techniques)

</section>

<section class="dpgn-section-similar">

### Ressources similaires

- [4. Use agile methods (Digital Service Standard (UK))](https://www.gov.uk/service-manual/service-standard/use-agile-methods)
- [5. Iterate and improve frequently (Digital Service Standard (UK))](https://www.gov.uk/service-manual/service-standard/iterate-and-improve-frequently)
- [8. Souplesse et orientation sur l’utilisateur](https://www.ontario.ca/fr/page/norme-des-services-numeriques#section-8)
- [4. Build the service using agile and iterative practices (Digital Services Playbook (US))](https://playbook.cio.gov/#play4)
- [3. Agile and user-centred process (Digital Service Standard (AU))](https://www.dta.gov.au/standard/3-agile-and-user-centred/)
- [3. Apply agile principles and be iterative. (Do - Digital Design Playbook (ISED)) (internal to Government of Canada)](http://www.gcpedia.gc.ca/wiki/DDPlayBook_Do#3._Apply_agile_principles_and_be_iterative.)
- [2. Product management, not just project management. (Assess - Digital Design Playbook (ISED)) (internal to Government of Canada)](http://www.gcpedia.gc.ca/wiki/DDPlayBook_Assess#2._Product_management.2C_not_just_project_management.)

</section>
</section>

<section class="dpgn-section-guideline">

## 2.2 Améliorer continuellement en réponse aux besoins des utilisateurs

<div class="dpgn-section-intro-guideline">

**\[TODO: Ajouter / réviser le texte d'introduction\]**

Once you have designed and launched a service, there is still work to do. Treat the service as a product; it requires regular reviews, usability tests and improvements. Unlike a project that has pre-determined start and end date, a product has a life cycle that goes far beyond the launching of the service. Regularly assessing the service and welcoming opportunities for improvement will help to ensure that the service keeps pace with evolving client needs and benefits from new or improved technology. **(2. Product management, not just project management. (Assess - Digital Design Playbook (ISED)))**

At every stage of a project, we should measure how well our service is working for our users. This includes measuring how well a system performs and how people are interacting with it in real-time. Our teams and agency leadership should carefully watch these metrics to find issues and identify which bug fixes and improvements should be prioritized. Along with monitoring tools, a feedback mechanism should be in place for people to report issues directly. **(Digital Services Playbook (US))**

Enregistrez et surveillez en permanence les données de rendement afin d’éclairer les améliorations du service en cours.

La mesure du rendement permet d’améliorer en continu un service en :

- montrant ses forces et ses faiblesses
- fournissant des données sur lesquelles s’appuyer pour effectuer des modifications

**(Normes des services numériques (Ontario))**

</div>

<section class="dpgn-section-checklist">

### Liste de contrôle

**\[TODO: Ajouter / modifier les éléments de la liste de contrôle\]**

- dotez-vous d’un plan de vérification de la qualité et de correction qui soutient des modifications fréquentes du service **(Normes des services numériques (Ontario))**
- utilisez une approche par étapes pour tester les modifications apportées à une partie du service, lorsque des modifications basées sur les caractéristiques ne sont pas réalisables **(Normes des services numériques (Ontario))**
- Define your testing objective **(1. Test the service before launching the service. (Assess - Digital Design Playbook (ISED)))**
  - Define the purpose of the test and what you want to learn? The purpose of the test is often determined by your business goals and user needs identified through feedback, analytics and other sources.
  - Identify top or critical tasks to test. Main outcomes and features your clients want to achieve should be prioritized.
- Test under realistic conditions **(1. Test the service before launching the service. (Assess - Digital Design Playbook (ISED)))**
  - Create realistic scenarios that reflect the context and environment in which clients would use the service.
- testez le service dans un environnement aussi semblable que possible à l'environnement de déploiement **(Normes des services numériques (Ontario))**
- Commit to regular service reviews **(2. Product management, not just project management. (Assess - Digital Design Playbook (ISED)))**
- Identify opportunities to improve the service based on the results of regular test **(2. Product management, not just project management. (Assess - Digital Design Playbook (ISED)))**
- {: .dpgn-stage-alpha .dpgn-stage-beta .dpgn-stage-live} analyze user research and use it to improve your service **(Digital Service Standard (UK))**
- Use different types of tests to assess the service **(1. Test the service before launching the service. (Assess - Digital Design Playbook (ISED)))**
  - Identify the best testing method based on your needs. Examples of tests include:
    - Tree Testing - A test in which participants are asked to find a resource based on a series of menus.
    - Card Sorting Testing - A reverse tree test where participants sort through items and group them together in a hierarchical manner.
    - First Click Testing - A test that observes the first item that a participant clicks on and uses the selection as an indication as to whether users are directed as intended.
- adoptez un processus de test des modifications apportées au service **(Normes des services numériques (Ontario))**
- mettez en place un processus périodique de contrôle et de test du service, même quand il n'a pas subi de modifications **(Normes des services numériques (Ontario))**
- Create automated tests that verify all user-facing functionality **(Digital Services Playbook (US))**
- Create unit and integration tests to verify modules and components **(Digital Services Playbook (US))**
- Run tests automatically as part of the build process **(Digital Services Playbook (US))**
- Conduct load and performance tests at regular intervals, including before public launch **(Digital Services Playbook (US))**
- Monitor system-level resource utilization in real time **(Digital Services Playbook (US))**
- Monitor system performance in real-time (e.g. response time, latency, throughput, and error rates) **(Digital Services Playbook (US))**
- Ensure monitoring can measure median, 95th percentile, and 98th percentile performance **(Digital Services Playbook (US))**
- Create automated alerts based on this monitoring **(Digital Services Playbook (US))**
- Track concurrent users in real-time, and monitor user behaviors in the aggregate to determine how well the service meets user needs **(Digital Services Playbook (US))**
- Use an experimentation tool that supports multivariate testing in production **(Digital Services Playbook (US))**

</section>

<section class="dpgn-section-guides">

### Guides d'implémentation

- [Test your service's performance (Service Manual (UK))](https://www.gov.uk/service-manual/technology/test-your-services-performance)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-performance-availability-scalability} [Performance testing (Digital Service Standard (AU))](https://www.dta.gov.au/standard/design-guides/performance-testing/)
- [Quality assurance: testing your service regularly (Service Manual (UK))](https://www.gov.uk/service-manual/technology/quality-assurance-testing-your-service-regularly)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-performance-availability-scalability} [Test your service's performance (Digital Service Standard (UK))](https://www.gov.uk/service-manual/technology/test-your-services-performance)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-performance-availability-scalability} [Deployment environments (Digital Service Standard (UK))](https://www.gov.uk/service-manual/making-software/deployment.html)
- [Vulnerability and penetration testing (Digital Service Standard (UK))](https://www.gov.uk/service-manual/technology/vulnerability-and-penetration-testing)
- [Testing your service (Service Manual (UK))](https://www.gov.uk/service-manual/technology#testing-your-service)
- [NCTTI 26 : Évaluation de logiciels – Caractéristiques de la qualité d'un logiciel et directives d'utilisation – Critères d'applicabilité (GC)](https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=17283)
- [Exploratory Testing (Service Manual (UK))](https://www.gov.uk/service-manual/technology/exploratory-testing)
- [Testing Cookbook (18F (US))](https://pages.18f.gov/testing-cookbook/go/)
- [Using data to improve your service: an introduction (Digital Service Standard (UK))](https://www.gov.uk/service-manual/measuring-success/using-data-to-improve-your-service-an-introduction)
- [Choosing digital analytics tools (Digital Service Standard (UK))](https://www.gov.uk/service-manual/measuring-success/choosing-digital-analytics-tools)
- [Measuring digital take-up (Digital Service Standard (UK))](https://www.gov.uk/service-manual/measuring-success/measuring-digital-take-up)
- [Measuring user satisfaction (Digital Service Standard (UK))](https://www.gov.uk/service-manual/measuring-success/measuring-user-satisfaction)
- [Measuring cost per transaction (Digital Service Standard (UK))](https://www.gov.uk/service-manual/measuring-success/measuring-cost-per-transaction)
- [Measuring completion rate (Digital Service Standard (UK))](https://www.gov.uk/service-manual/measuring-success/measuring-completion-rate)
- [Benefits of User-centered Design (Usability.gov (US))](https://www.usability.gov/what-and-why/benefits-of-ucd.html)
- [Measuring success (Service manual (UK))](https://www.gov.uk/service-manual/measuring-success)

</section>

<section class="dpgn-section-solutions">

### Solutions réutilisables

**[TODO: Ajouter / réviser les solutions réutilisables]**

</section>

<section class="dpgn-section-similar">

### Ressources similaires

- [1. Test the service before launching the service. (Assess - Digital Design Playbook (ISED)) (internal to Government of Canada)](http://www.gcpedia.gc.ca/wiki/DDPlayBook_Assess#1._Test_the_service_before_launching_the_service.)
- [3. Review and improve services continually (Think - Digital Design Playbook (ISED)) (internal to Government of Canada)](http://www.gcpedia.gc.ca/wiki/DDPlayBook_Think#3._Review_and_improve_services_continually)
- [10. Test the end-to-end service (Digital Service Standard (UK))](https://www.gov.uk/service-manual/service-standard/test-the-end-to-end-service)
- [6. Tester le service de bout en bout (Normes des services numériques (Ontario))](https://www.ontario.ca/page/digital-service-standard#section-7)
- [10. Automate testing and deployments (Digital Services Playbook (US))](https://playbook.cio.gov/#play10)
- [15. Collect performance data (Digital Service Standard (UK))](https://www.gov.uk/service-manual/service-standard/collect-performance-data)
- [13. Mesurer le rendement (Normes des services numériques (Ontario))](https://www.ontario.ca/fr/page/norme-des-services-numeriques#section-13)
- [12. Use data to drive decisions (Digital Services Playbook (US))](https://playbook.cio.gov/#play12)

</section>
</section>
