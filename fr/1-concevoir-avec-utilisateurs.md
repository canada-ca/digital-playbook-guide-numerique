---
layout: default
title:  "1. Concevoir avec les utilisateurs"
lang: fr
altLang: en
altLangPage: 1-design-with-users
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

**Lignes directrices connexes :**

{% include functions/guideline-links.html guidelines="2.1, 2.2, 4.2, 6.1, 6.2, 8.1, 9.1, 10.2, 10.3" samePage=false includeStandardTitle=true %}

</div>

<section class="dpgn-section-guideline">

## 1.1 Faire des recherches en collaboration avec les utilisateurs pour bien comprendre leurs besoins, ainsi que les problèmes que nous voulons régler

<div class="dpgn-section-intro-guideline">

Concentrez-vous sur les besoins de vos utilisateurs, en utilisant des méthodes agiles, itératives et centrées sur l'utilisateur lors de la construction d'un service. Commencez par une recherche et une analyse approfondies pour vous aider à comprendre qui utilise le service, quels sont ses besoins et comment le service affectera sa vie pour mieux comprendre comment le service devrait être conçu. L'absence de la voix de l'utilisateur conduit à des hypothèses qui peuvent être incorrectes et coûteuses.

Un élément clé du développement de services numériques qui fonctionnent pour les utilisateurs consiste à bien comprendre qui sont les utilisateurs, quels sont leurs besoins et comment le service affectera leur vie. Il est également important de développer une bonne compréhension des différents contextes dans lesquels les utilisateurs peuvent interagir, car les besoins et les attentes des utilisateurs peuvent varier en fonction du lieu, du moment et de la manière dont ils utilisent un service numérique.

</div>

<section class="dpgn-section-checklist">

### Liste de contrôle

**Stage alpha :**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
- Mettre en place un plan de paiement pour la recherche de l'utilisateur tout au long de la conception du service et après sa construction
- Interviewer les utilisateurs potentiels pour aider à développer les éléments suivants pour le service :
  1. Les objectifs de l'utilisateur (par exemple, en tant que \[type d'utilisateur\], je veux \[un certain mais\] de sorte que \[une raison quelconque\])
  1. Caractères de l'utilisateur (par exemple, en fonction des habitudes, de la personnalité, des attitudes et des motifs)
  1. Profils d'utilisateurs (Ex., En fonction de données démographiques telles que le sexe, l'âge, l'emplacement, le revenu et la taille de la famille)
- Utiliser une gamme de méthodes de recherche qualitative et quantitative pour déterminer les objectifs, les besoins et les comportements des personnes
- Créer et maintenir une liste des tâches prioritaires que les utilisateurs tentent de faire (c.-à-d., « User stories »)
- Document all end-to-end user journeys, including journeys that involve multiple services and external services
- Understand how will users interact with the service, optimizing the experience for online and offline interactions
{: .dpgn-stage-alpha}
<!-- markdownlint-enable MD032 -->

- Use plain language that is appropriate and easy to understand for the audience

</section>

<section class="dpgn-section-guides">

### Guides d'application

- {: .dpgn-digital-architectural .dpgn-digital-architectural-design-for-users-first} [User research (Service Manual (UK))](https://www.gov.uk/service-manual/user-research)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-design-for-users-first .dpgn-stage-alpha} [How user research improves service design (Service Manual (UK))](https://www.gov.uk/service-manual/user-research/how-user-research-improves-service-design)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-design-for-users-first .dpgn-stage-alpha} [Start by learning user needs (Service Manual (UK))](https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs)
- [Understanding users who don't use digital services (Service Manual (UK))](https://www.gov.uk/service-manual/user-research/understanding-users-who-dont-use-digital-services)
- [How Users Read (Writing for GOV.UK)](https://www.gov.uk/guidance/content-design/writing-for-gov-uk#how-people-read)

</section>

<section class="dpgn-section-solutions">

### Solutions réutilisables

- {: .dpgn-digital-architectural .dpgn-digital-architectural-design-for-users-first} [Method Cards (18F (US))](https://methods.18f.gov/index.html)

</section>

<section class="dpgn-section-similar">

### Ressources similaires

- [1. Understand user needs (Digital Service Standard (UK))](https://www.gov.uk/service-manual/service-standard/understand-user-needs)
- [1. Comprendre les utilisateurs et leurs besoins (Normes des services numériques (Ontario))](https://www.ontario.ca/fr/page/norme-des-services-numeriques#section-1)
- [1. Understand what people need (Digital Services Playbook (US))](https://playbook.cio.gov/#play1)
- [1. Understand user needs (Digital Service Standard (AU))](https://www.dta.gov.au/standard/1-user-needs/)
- [1. Understand client needs (Think - Digital Design Playbook (ISED)) (internal to Government of Canada)](http://www.gcpedia.gc.ca/wiki/DDPlayBook_Think#1._Understand_client_needs)
- [2. Do ongoing user research (Digital Service Standard (UK))](https://www.gov.uk/service-manual/service-standard/do-ongoing-user-research)
- [12. Make sure users succeed first time (Digital Service Standard (UK))](https://www.gov.uk/service-manual/service-standard/create-a-service-thats-simple)

</section>
</section>

<section class="dpgn-section-guideline">

## 1.2 Effectuer des tests continus avec les utilisateurs pour éclairer la conception et la mise en œuvre

<div class="dpgn-section-intro-guideline">

Les besoins des utilisateurs évoluent constamment, c'est pourquoi il est important de planifier la recherche continue des utilisateurs et les tests d'utilisabilité. Impliquer les utilisateurs à toutes les étapes, en recherchant continuellement des commentaires pour s'assurer que le service aide les utilisateurs à accomplir leurs tâches et continuer à améliorer le service pour mieux répondre aux besoins des utilisateurs.

Les utilisateurs doivent être impliqués tout au long du cycle de vie du service, les recherches et les tests des utilisateurs informant les premières phases de la conception jusqu'à des améliorations continues après le lancement du service.

When designing a service, it is important to determine the problems that the service needs to solve and how it will help users to achieve their goals. The focus shouldn't be just on the service itself, but also how the service fits in the overall user journey. The service should be designed to seamlessly integrate into the overall user journey and regularly measured to ensure that it is meeting user needs.

</div>

<section class="dpgn-section-checklist">

### Liste de contrôle

- Mettre en place un plan de paiement pour les tests d'utilisabilité tout au long de la conception du service et après sa construction
- {: .dpgn-stage-beta .dpgn-stage-live} Utiliser des données qualitatives et quantitatives pour vous aider à mieux comprendre les besoins des utilisateurs et identifier les points à améliorer
- Rendre les services simples, intuitifs et cohérents
- For multi-step processes, provide users with clear information about where they are in the process and the ability to exit and the ability to exit and return later without losing progress

**Stages bêta et en direct :**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
- Tester régulièrement avec les utilisateurs lors de la construction du service et après le lancement du service pour vérifier qu'il répond aux besoins de l'utilisateur et pour identifier les parties du service que les utilisateurs peuvent trouver difficiles
- Continuously measure client experience and create a customer-prioritized improvement plan. **(2. Product management, not just project management. (Assess - Digital Design Playbook (ISED)))**
- Test with clients and others **(1. Test the service before launching the service. (Assess - Digital Design Playbook (ISED)))**
  - You need to ensure that the service works from technical perspective and from the perspective of the user and the service provider (including the help desk agent who assists clients when they face challenges using the service). By testing with a diverse group and different type of users, you can capture a more comprehensive understanding of how your service is working.
  - Make sure the participants are representative of your clients.
  - Utilize user experience testing services offered by the Chief Information Office and the Communications team
- Plan and deliver client testing cycles **(1. Test the service before launching the service. (Assess - Digital Design Playbook (ISED)))**
  - Pilot your test: Make sure it all works
  - Implement the test.
  - Test often (e.g., six month or yearly intervals), apply the findings and keep on testing.
- Regularly assess the service, indentifying and fixing problem areas that are degrading the user experience
- Regularly measure how well the service is meeting user needs at each step of the service and for the end-to-end experience
- Fournir un mécanisme aux utilisateurs permettant de recevoir une rétroaction et de régler en temps opportun les problèmes de services (comme l'exige la [Politique sur les services](https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=27916#cha7))
{: .dpgn-stage-beta .dpgn-stage-live}
<!-- markdownlint-enable MD032 -->

</section>

<section class="dpgn-section-guides">

### Guides d'application

- {: .dpgn-stage-beta .dpgn-stage-live} [Looking at the different ways to test content (18F (US))](https://18f.gsa.gov/2016/04/19/looking-at-the-different-ways-to-test-content/)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-design-for-users-first} [Introduction to User-centred Design (usabilityfirst.com)](http://www.usabilityfirst.com/about-usability/introduction-to-user-centered-design/)
- [Designing government services (Service Manual (UK))](https://www.gov.uk/service-manual/design/introduction-designing-government-services)
- [How to Set Up User Testing (internal to Government of Canada)](http://www.gcpedia.gc.ca/wiki/How_to_Set_Up_User_Testing/Comment_d%C3%A9finir_les_essais_par_les_utilisateurs)
- [UXWG guide to Usability Testing (internal to Government of Canada)](http://www.gcpedia.gc.ca/wiki/The_UXWG_guide_to_Usability_Testing)

</section>

<section class="dpgn-section-solutions">

### Solutions réutilisables

- [Boîte à outils de l’expérience Web (BOEW)](http://wet-boew.github.io/wet-boew/index-fr.html)

</section>

<section class="dpgn-section-similar">

### Ressources similaires

- [5. Réussite assurée dès le premier essai des utilisateurs (Normes des services numériques (Ontario))](https://www.ontario.ca/fr/page/norme-des-services-numeriques#section-5)
- [4. Conception du service du début à la fin (Normes des services numériques (Ontario))](https://www.ontario.ca/page/digital-service-standard#section-5)
- [2. Address the whole experience, from start to finish (Digital Services Playbook (US))](https://playbook.cio.gov/#play2)
- [3. Make it simple and intuitive (Digital Services Playbook (US))](https://playbook.cio.gov/#play3)
- [12. Soutien aux personnes qui en ont besoin (Normes des services numériques (Ontario))](https://www.ontario.ca/fr/page/norme-des-services-numeriques#section-12)

</section>
</section>
