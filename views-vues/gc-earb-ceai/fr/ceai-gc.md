---
layout: default
title: Comment dois-je m'assurer que mon projet respecte les exigences du CAEI GC? (ébauche)
lang: fr
altLang: en
altLangPage: gc-earb
collectionDirectory: views-vues/gc-earb-ceai
---

Les normes architecturales sur le numérique du gouvernement du Canada s’appliqueront à tous les projets et toutes les initiatives afin de bien s’harmoniser avec l’orientation numérique du gouvernement du Canada. Le Comité d’examen de l’architecture intégrée du gouvernement du Canada (CEAI GC) se servira de ces normes pour évaluer les investissements et les solutions en matière de numérique. Les normes architecturales sur le numérique viennent compléter les normes sur le numérique du gouvernement du Canada, en misant sur les pratiques exemplaires qui visent la planification architecturale et la conception.

Cette page fournit des conseils personnalisés sur la façon dont les projets peuvent répondre aux normes architecturales sur le numérique d'architecture numérique exigées du gouvernement du Canada par le Comité d’examen de l’architecture intégrée du gouvernement du Canada (CEAI GC).

<!-- markdownlint-disable MD032 -->
- TOC
{:toc .lst-spcd}
<!-- markdownlint-enable MD032 -->

<section>

## 1. Architecture d'entreprise

<section>

### Aligner sur le modèle de capacité d’affaires du GC

<!-- markdownlint-disable MD032 -->
- {: data-dpgn-data-include='{ "guideline": "6.2", "section": "checklist" }'} Définir les services de programme en tant que fonctionnalités métier permettant d'établir un vocabulaire commun entre les activités, le développement et les opérations
- {: data-dpgn-data-include='{ "guideline": "6.2", "section": "checklist" }'} Identifier les fonctionnalités communes à l'entreprise GC et pouvant être partagées et réutilisées
- {: data-dpgn-data-include='{ "guideline": "6.1", "section": "checklist" }'} Modélisation des processus métier à l'aide du langage de modélisation unifiée pour identifier les processus d'entreprise communs
{: .dpgn-digital-architectural-align-gc-business-capability-model .dpgn-business-architecture .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

{% include /functions/output-sections.html parentHeadingLevel="2" relevantTags="dpgn-digital-architectural-align-gc-business-capability-model" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>

<section>

### Concevoir pour les utilisateurs d’abord et assurer la prestation à l’aide d’équipes multidisciplinaires

<!-- markdownlint-disable MD032 -->
- {: data-dpgn-data-include='{ "guideline": "1.2", "section": "checklist" }'} Miser sur les besoins des utilisateurs; se servir de méthodes agiles, itératives et axées sur l’utilisateur
- {: data-dpgn-data-include='{ "guideline": "2.2", "section": "checklist" }'} Se conformer aux exigences en matière d’accessibilité et de langues officielles
- {: data-dpgn-data-include='{ "guideline": "3.1", "section": "checklist" }'} Tenir compte de toutes les compétences nécessaires à la prestation, y compris celles qui ont trait aux exigences, à la conception, à l’élaboration et aux opérations
- {: data-dpgn-data-include='{ "guideline": "4.4", "section": "checklist" }'} Travailler de façon à couvrir le cycle de vie tout entier de l’application, de son élaboration à sa mise à l’essai, et du déploiement aux opérations
- {: data-dpgn-data-include='{ "guideline": "4.3", "section": "checklist" }'} Veiller à ce que l’on tienne compte de la qualité tout au long du cycle de vie d’élaboration du logiciel
- {: data-dpgn-data-include='{ "guideline": "4.3", "section": "checklist" }'} Encourager et adopter le développement piloté par les tests (DPT) pour améliorer la confiance qui règne entre les entreprises et la TI
{: .dpgn-digital-architectural-design-for-users-first .dpgn-digital-architectural-multidisciplinary-teams .dpgn-business-architecture .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

{% include /functions/output-sections.html parentHeadingLevel="2" relevantTags="dpgn-digital-architectural-design-for-users-first,dpgn-digital-architectural-multidisciplinary-teams" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>
</section>

<section>

## 2. Architecture d'information

<section>

### Veiller à l’organisation des données

<!-- markdownlint-disable MD032 -->
- {: data-dpgn-data-include='{ "guideline": "10.2", "section": "checklist" }'} Dissocier les données de base des applications et de l’hôte au sein d’un système d’enregistrement approprié
- {: data-dpgn-data-include='{ "guideline": "10.2", "section": "checklist" }'} Veiller à ce que les systèmes d’enregistrement des sources centrales fassent autorité
- {: data-dpgn-data-include='{ "guideline": "10.2", "section": "checklist" }'} Assigner des gardiens des données afin de veiller à ce que les données soient précises, uniformes et intégrales
- {: data-dpgn-data-include='{ "guideline": "10.2", "section": "checklist" }'} Concevoir la résilience des données conformément aux politiques et normes du GC
- {: data-dpgn-data-include='{ "guideline": "10.2", "section": "checklist" }'} Se servir de la gestion des données de base pour fournir un point de référence unique à l’intention des intervenants pertinents
{: .dpgn-digital-architectural-keep-data-organized .dpgn-information-architecture .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

{% include /functions/output-sections.html parentHeadingLevel="2" relevantTags="dpgn-digital-architectural-keep-data-organized" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>

<section>

### Permettre l’interopérabilité

<!-- markdownlint-disable MD032 -->
- {: data-dpgn-data-include='{ "guideline": "6.3", "section": "checklist" }'} Exposer toutes les fonctionnalités en tant que services
- {: data-dpgn-data-include='{ "guideline": "6.3", "section": "checklist" }'} Se servir de microservices ayant été conçus autour des capacités opérationnelles. Concevoir chaque servir à une fin particulière
- {: data-dpgn-data-include='{ "guideline": "6.3", "section": "checklist" }'} Exploiter chaque service selon son propre processus, et veiller à ce qu’il communique avec les autres services par l’entremise d’une interface bien définie, comme une Interface de programmation d’applications (IPA) axée sur un protocole HTTPS
- {: data-dpgn-data-include='{ "guideline": "6.2", "section": "checklist" }'} Faire rouler les applications en conteneurs
- {: data-dpgn-data-include='{ "guideline": "6.2", "section": "checklist" }'} Tirer parti des composantes intégrées d’échange numérique comme le Bus de service du GC, la plateforme d’échange numérique, et le magasin IPA, conçu à des fins d’utilisation sur mesure
{: .dpgn-digital-architectural-enable-interoperability .dpgn-information-architecture .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

{% include /functions/output-sections.html parentHeadingLevel="2" relevantTags="dpgn-digital-architectural-enable-interoperability" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>
</section>

<section>

## 3. Architecture d'application

<section>

### Se servir de normes et de solutions ouvertes par défaut

<!-- markdownlint-disable MD032 -->
- {: data-dpgn-data-include='{ "guideline": "6.1", "section": "checklist" }'} Se servir de normes, solutions, composantes et pratiques de pointe en matière de source ouverte
- {: data-dpgn-data-include='{ "guideline": "6.1", "section": "checklist" }'} Préconiser cet ordre de préférences : source ouverte d’abord, puis les logiciels disponibles sur le marché qui sont indifférents à la plateforme, puis les logiciels disponibles sur le marché exclusifs, puis en dernier lieu, les logiciels conçus sur mesure
- {: data-dpgn-data-include='{ "guideline": "5.1", "section": "checklist" }'} Rendre le code source ouvert et réutilisable en vertu d’une licence de logiciel à source ouverte
- {: data-dpgn-data-include='{ "guideline": "5.1", "section": "checklist" }'} Exposer les données publiques afin de procéder à la mise en œuvre d’initiatives sur les données ouvertes et l’information ouverte
{: .dpgn-digital-architectural-open-standards-solutions .dpgn-application-architecture .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

{% include /functions/output-sections.html parentHeadingLevel="2" relevantTags="dpgn-digital-architectural-open-standards-solutions" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>

<section>

### Maximiser la réutilisation

<!-- markdownlint-disable MD032 -->
- {: data-dpgn-data-include='{ "guideline": "6.2", "section": "checklist" }'} Tirer parti et réutiliser les solutions, composantes et processus qui existent déjà
- {: data-dpgn-data-include='{ "guideline": "6.2", "section": "checklist" }'} Sélectionner des solutions intégrées et regroupées avant d’opter pour des solutions spécifiques à un ministère
- {: data-dpgn-data-include='{ "guideline": "6.2", "section": "checklist" }'} Réaliser la simplification en minimisant le dédoublement des composantes et en s’en tenant aux normes pertinentes
- {: data-dpgn-data-include='{ "guideline": "6.2", "section": "checklist" }'} Informer le CEAI GC des investissements et des innovations ministériels
- {: data-dpgn-data-include='{ "guideline": "5.1", "section": "checklist" }'} Partager le code publiquement lorsqu’il est approprié de le faire et, lorsqu’il n’est pas pratique de le faire, le partager au sein du gouvernement du Canada
{: .dpgn-digital-architectural-maximize-reuse .dpgn-application-architecture .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

{% include /functions/output-sections.html parentHeadingLevel="2" relevantTags="dpgn-digital-architectural-maximize-reuse" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>
</section>

<section>

## 4. Architecture de la technologie

<section>

### Se servir du nuage d’abord

<!-- markdownlint-disable MD032 -->
- {: data-dpgn-data-include='{ "guideline": "6.2", "section": "checklist" }'} Préconiser cet ordre de préférences : Logiciel comme service (SaaS) d’abord, puis Plateforme comme service (PaaS), et en dernier lieu, l’Infrastructure comme service (IaaS)
- {: data-dpgn-data-include='{ "guideline": "6.2", "section": "checklist" }'} Préconiser cet ordre de préférences : Le nuage public d’abord, ensuite, le nuage hybride, puis le nuage privé et, en dernier lieu, les solutions non nuagiques (sur site)
- {: data-dpgn-data-include='{ "guideline": "6.2", "section": "checklist" }'} Concevoir en vue d’une mobilité nuagique, et élaborer une stratégie de sortie afin d’éviter l’enfermement propriétaire
{: .dpgn-digital-architectural-cloud-first .dpgn-technology-architecture .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

{% include /functions/output-sections.html parentHeadingLevel="2" relevantTags="dpgn-digital-architectural-cloud-first" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>

<section>

### Concevoir à des fins de rendement, de disponibilité et d’échelonnabilité

<!-- markdownlint-disable MD032 -->
- {: data-dpgn-data-include='{ "guideline": "6.1", "section": "checklist" }'} Concevoir à des fins de résilience
- {: data-dpgn-data-include='{ "guideline": "6.1", "section": "checklist" }'} Veiller à ce que les temps de réponse répondent aux besoins des utilisateurs, et que les services critiques soient grandement disponibles
- {: data-dpgn-data-include='{ "guideline": "6.1", "section": "checklist" }'} Appuyer les déploiements sans temps morts, dans les cas de maintenance planifiée et non planifiée
- {: data-dpgn-data-include='{ "guideline": "6.1", "section": "checklist" }'} Se servir d’architectures distribuées, en présumant que des échecs se produiront, traiter des erreurs avec dignité, et surveiller activement
{: .dpgn-digital-architectural-performance-availability-scalability .dpgn-technology-architecture .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

{% include /functions/output-sections.html parentHeadingLevel="2" relevantTags="dpgn-digital-architectural-performance-availability-scalability" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>
</section>

<section>

## 5. Architecture de sécurité et de la protection des renseignements personnels

<section>

### Concevoir en vue de la sécurité et de la protection des renseignements personnels

<!-- markdownlint-disable MD032 -->
- {: data-dpgn-data-include='{ "guideline": "9.4", "section": "checklist" }'} Procéder à la mise en œuvre de la sécurité à l’échelle de tous les niveaux de l’architecture
- {: data-dpgn-data-include='{ "guideline": "9.4", "section": "checklist" }'} Catégoriser les données correctement afin de déterminer les mécanismes de protection qui s’imposent
- {: data-dpgn-data-include='{ "guideline": "9.4", "section": "checklist" }'} Mener une Évaluation des facteurs relatifs à la vie privée (ÉFVP) lorsque des renseignements personnels sont en jeu
- {: data-dpgn-data-include='{ "guideline": "9.4", "section": "checklist" }'} Équilibrer les besoins des utilisateurs aux besoins organisationnels en se dotant de mesures de sécurité proportionnelles
{: .dpgn-digital-architectural-security-privacy .dpgn-security-architecture-privacy .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

{% include /functions/output-sections.html parentHeadingLevel="2" relevantTags="dpgn-digital-architectural-security-privacy" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>

<section>

### Concevoir des systèmes mesurables et responsables

<!-- markdownlint-disable MD032 -->
- {: data-dpgn-data-include='{ "guideline": "5.2", "section": "checklist" }'} Publier un accord sur les niveaux de service pour chaque service
- {: data-dpgn-data-include='{ "guideline": "5.3", "section": "checklist" }'} Veiller à ce qu’une piste d’audit soit disponible pour toutes les transactions, afin d’assurer la responsabilisation et la non-répudiation
- {: data-dpgn-data-include='{ "guideline": "5.3", "section": "checklist" }'} Établir des paramètres opérationnels et de la TI afin de faciliter l’atteinte de résultats opérationnels
- {: data-dpgn-data-include='{ "guideline": "5.3", "section": "checklist" }'} Appliquer des principes de surveillance et de gestion du cycle de vie aux investissements numériques par l’entremise de la gouvernance
{: .dpgn-digital-architectural-measurable-accountable .dpgn-security-architecture-privacy .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

{% include /functions/output-sections.html parentHeadingLevel="2" relevantTags="dpgn-digital-architectural-measurable-accountable" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>
</section>
