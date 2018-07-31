---
layout: default
title:  "5. Travailler ouvertement par défaut (ébauche)"
lang: fr
altLang: en
altLangPage: 5-work-in-open-by-default
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

{% include functions/guideline-links.html guidelines="3.4, 6.3, 6.4, 8.1, 10.2" samePage=false includeStandardTitle=true %}

</div>

<section class="dpgn-section-guideline">

## 5.1 Ouvrir au monde extérieur toutes les données, tous les renseignements et tout nouveau code source ouvert non sensibles pour le partage et la réutilisation sous licence ouverte

<div class="dpgn-section-intro-guideline">

**\[TODO: Ajouter / réviser le texte d'introduction\]**

**Travailler ouvertement et rendre le code source ouvert et réutilisable (anciennement ligne directrice 5.5) :**
{: .dpgn-data-ignore}

Rendre tout le code source ouvert et réutilisable sous une licence logicielle libre appropriée, afin que les autres développeurs puissent:

- profitez de votre travail et en tirer parti
- apprendre de vos expériences
- identifier des parties de votre code pour réutilisation que vous pourriez ne pas avoir reconnu vous-même

Cela implique de travailler ouvertement, de partager toutes les données et informations produites lors du développement de la solution et de rendre la solution finale disponible en tant que logiciel libre. La publication de votre code et de vos données dès le début de votre projet ou programme technologique encouragera:

- une documentation plus claire, facilitant le maintien du code par votre équipe, le suivi des modifications et l'utilisation par d'autres personnes
- code plus propre et bien structuré, plus facile à maintenir
- des processus qui vous permettront de publier en continu du code lorsqu'il est écrit
- clarté sur les données qui doivent rester protégées et comment cela est réalisé
- des suggestions sur la façon d'améliorer le code ou d'améliorer la sécurité
- d'autres à apporter des idées au fur et à mesure que le projet progresse

</div>

<section class="dpgn-section-checklist">

### Liste de contrôle

**\[TODO: Ajouter / modifier les éléments de la liste de contrôle\]**

- Work in the open - Share and collaborate in the open, plan to make data open from the start.
- Provide datasets to the public, in their entirety, through bulk downloads and APIs (application programming interfaces) **(Digital Services Playbook (US))**
- Ensure that data from the service is explicitly in the public domain, and that rights are waived globally via an international public domain dedication, such as the "Creative Commons Zero" waiver **(Digital Services Playbook (US))**
- Catalog data in the agency's enterprise data inventory and add any public datasets to the agency's public data listing **(Digital Services Playbook (US))**
- Ensure that we maintain the rights to all data developed by third parties in a manner that is releasable and reusable at no cost to the public **(Digital Services Playbook (US))**
- Data and code is shared so that clients can extract/create value. **(General design principles - Digital Design Playbook (ISED))**

**Normes architecturales sur le numérique (GC)&#160;:**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
- {: .dpgn-digital-architectural-open-standards-solutions-3} Rendre le code source ouvert et réutilisable en vertu d’une licence de logiciel à source ouverte.
- {: .dpgn-digital-architectural-open-standards-solutions-4} Exposer les données publiques afin de procéder à la mise en œuvre d’initiatives sur les données ouvertes et l’information ouverte.
{: .dpgn-digital-architectural}
- {: .dpgn-digital-architectural-maximize-reuse-5} Partager le code publiquement lorsqu’il est approprié de le faire et, lorsqu’il n’est pas pratique de le faire, le partager au sein du gouvernement du Canada.
<!-- markdownlint-enable MD032 -->

**Travailler ouvertement et rendre le code source ouvert et réutilisable (anciennement ligne directrice 5.5) :**
{: .dpgn-data-ignore}

- Travailler ouvertement et rendre le code source ouvert et réutilisable
- Héberger le code source dans un référentiel de code source internet ouvert
- Utiliser une licence approuvée par l'Open Source Initiative
- Proposer aux utilisateurs un mécanisme de signalement des bogues et des problèmes, et être réactif à ces rapports
- Gardez une trace des modifications à l'aide du contrôle de version

**Automated Decision Systems:**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
<!-- markdownlint-disable MD034 -->
- {: .dpgn-automated-decision-initiation-4 data-content-source-title="Section 7.1.4, Standard on Automated Decision-Making (draft) (GC)"} Release the final results of Algorithmic Impact Assessments in an accessible format via Government of Canada websites and services designated by the Treasury Board of Canada Secretariat pursuant to the [Directive on Open Government](https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=28108).
- {: .dpgn-automated-decision-deployment-operation data-content-source-title="Section 7.2.4, Standard on Automated Decision-Making (draft) (GC)"} Make available to the public all of the source code used for the Automated Decision Systems on a website or service designated by the Treasury Board Secretariat.
- {: .dpgn-automated-decision-deployment-operation data-content-source-title="Section 7.2.5, Standard on Automated Decision-Making (draft) (GC)"} In cases where it is deemed that source code should not be disclosed, seek the approval of the Enterprise Architecture Review Board to exempt the disclosure. In these cases, the justification as to why code was not disclosed shall be published according to the process specified in the [Directive on Open Government](https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=28108).
- {: .dpgn-automated-decision-deployment-operation data-content-source-title="Section 7.2.5, Standard on Automated Decision-Making (draft) (GC)"} Ensure that all licenses required for the Automated Decision Systems are open licenses as listed in the [Open Source Software Registry](https://drive.google.com/open?id=1xISkyXdlFVw5cZv91SKQSVJ88R5OtmPLp33NeH28PQY). In all cases, Canada must maintains the right to have access to foreground intellectual property to respond to any legal challenges.
{: data-content-source-uri="https://docs.google.com/document/d/1LdciG-UYeokx3U7ZzRng3u4T3IHrBXXk9JddjjueQok" .dpgn-automated-decision}
<!-- markdownlint-enable MD034 -->
<!-- markdownlint-enable MD032 -->

</section>

<section class="dpgn-section-guides">

### Guides d'implémentation

**\[TODO: Ajouter / réviser les éléments du guide de mise en œuvre\]**

- {: .dpgn-digital-architectural .dpgn-digital-architectural-open-standard-solutions} [Open Data (Digital Service Standard (AU))](https://www.dta.gov.au/standard/design-guides/open-data/)
- [Statistical Data Integration (Digital Service Standard (AU))](https://www.dta.gov.au/standard/design-guides/statistical-data-integration/)

**Travailler ouvertement et rendre le code source ouvert et réutilisable (anciennement ligne directrice 5.5) :**
{: .dpgn-data-ignore}

- {: .dpgn-digital-architectural .dpgn-digital-architectural-open-standard-solutions} [Making source code open and reusable (Service Manual (UK))](https://www.gov.uk/service-manual/technology/making-source-code-open-and-reusable)
- [Code sharing (Digital Service Standard (AU))](https://www.dta.gov.au/standard/design-guides/code-sharing/)
- [Choose an open source licence(choosealicense.com)](https://choosealicense.com/)
- [Liste de licences libres (Wikipédia)](https://fr.wikipedia.org/wiki/Liste_de_licences_libres)
- [Making source code open (DTA Blog (AU))](https://www.dta.gov.au/blog/making-source-code-open/)

</section>

<section class="dpgn-section-solutions">

### Solutions réutilisables

**[TODO: Ajouter / réviser les solutions réutilisables]**

</section>

<section class="dpgn-section-similar">

### Similar resources

- [Data and code is default to open (General design principles - Digital Design Playbook (ISED)) (internal to Government of Canada)](http://www.gcpedia.gc.ca/wiki/Digital_Design_Playbook)

**Normes architecturales sur le numérique (GC)&#160;:**
{: .dpgn-data-ignore}

- {: .dpgn-digital-architectural .dpgn-digital-architectural-open-standard-solutions} [1. Se servir de normes et de solutions ouvertes par défaut (Normes architecturales sur le numérique (GC))](https://canada-ca.github.io/digital-playbook-guide-numerique/views-vues/gc-earb-ceai/en/gc-earb.html#se-servir-de-normes-et-de-solutions-ouvertes-par-dfaut)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-maximize-reuse} [2. Maximiser la réutilisation (Normes architecturales sur le numérique (GC))](https://canada-ca.github.io/digital-playbook-guide-numerique/views-vues/gc-earb-ceai/fr/ceai-gc.html#maximiser-la-rutilisation)

**Travailler ouvertement et rendre le code source ouvert et réutilisable (anciennement ligne directrice 5.5)&#160;:**
{: .dpgn-data-ignore}

- [Logiciel libre - Contribution (Livre blanc ouvert en premier (GC))](https://github.com/canada-ca/Open_First_Whitepaper/blob/master/fr/4_Logiciel_libre_Contribution.md)
- [Culture ouverte (Livre blanc ouvert en premier (GC))](https://github.com/canada-ca/Open_First_Whitepaper/blob/master/fr/6_Culture_ouverte.md)
- [Logiciels libres et ouverts - Guide de référence (Québec)](https://www.tresor.gouv.qc.ca/fileadmin/PDF/ressources_informationnelles/logiciels_libres/ll.pdf)
- [Politique du libre (Montréal)](https://github.com/VilledeMontreal/politique-libre/blob/master/Politique/PolitiqueDuLibre.md)
- [8. Make all new source code open (Digital Service Standard (UK))](https://www.gov.uk/service-manual/service-standard/make-all-new-source-code-open)
- [3. Be open and use open source (Technology Code of Practice (UK))](https://www.gov.uk/guidance/be-open-and-use-open-source)
- [Politique de contribution open-source de la DINSIC (France)](https://disic.github.io/politique-de-contribution-open-source/)
- [Open Source Software (Federal Source Code Policy (US))](https://sourcecode.cio.gov/OSS/)
- [13. Default to open (Digital Services Playbook (US))](https://playbook.cio.gov/#play13)
- [18F Open Source Policy (US)](https://github.com/18F/open-source-policy/blob/master/policy.md)
- [8. Make source code open (Digital Service Standard (AU))](https://www.dta.gov.au/standard/8-make-source-code-open/)

</section>
</section>

<section class="dpgn-section-guideline">

## 5.2 Être transparent avec les objectifs et publier des données sur le rendement en temps réel

<div class="dpgn-section-intro-guideline">

**\[TODO: Ajouter / réviser le texte d'introduction\]**

</div>

<section class="dpgn-section-checklist">

### Liste de contrôle

**\[TODO: Ajouter / modifier les éléments de la liste de contrôle\]**

**Normes architecturales sur le numérique (GC)&#160;:**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
- {: .dpgn-digital-architectural-measurable-accountable-1} Publier un accord sur les niveaux de service pour chaque service.
{: .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

</section>

<section class="dpgn-section-guides">

### Guides d'implémentation

**\[TODO: Ajouter / réviser les éléments du guide de mise en œuvre\]**

</section>

<section class="dpgn-section-solutions">

### Solutions réutilisables

**[TODO: Ajouter / réviser les solutions réutilisables]**

</section>

<section class="dpgn-section-similar">

### Ressources similaires

**Normes architecturales sur le numérique (GC)&#160;:**
{: .dpgn-data-ignore}

- {: .dpgn-digital-architectural .dpgn-digital-architectural-measurable-accountable} [7. Concevoir des systèmes mesurables et responsables (Normes architecturales sur le numérique (GC))](https://canada-ca.github.io/digital-playbook-guide-numerique/views-vues/gc-earb-ceai/en/gc-earb.html#concevoir-des-systmes-mesurables-et-responsables)

</section>
</section>

<section class="dpgn-section-guideline">

## 5.3 Mesurer et surveiller l’efficacité, la valeur et les conséquences du service et en faire rapport au public

<div class="dpgn-section-intro-guideline">

**\[TODO: Ajouter / réviser le texte d'introduction\]**

Identify performance indicators for the service, including the 4 mandatory key performance indicators (KPIs) defined in the manual. Establish a benchmark for each metric and make a plan to enable improvements.

Setting performance indicators allows you to continuously improve your service by:

- learning its strengths and weaknesses
- using data to support improvements you make

**(Digital Service Standard (UK))**

</div>

<section class="dpgn-section-checklist">

### Liste de contrôle

**\[TODO: Ajouter / modifier les éléments de la liste de contrôle\]**

**Normes architecturales sur le numérique (GC)&#160;:**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
- {: .dpgn-digital-architectural-measurable-accountable-2} Veiller à ce qu’une piste d’audit soit disponible pour toutes les transactions, afin d’assurer la responsabilisation et la non-répudiation.
- {: .dpgn-digital-architectural-measurable-accountable-3} Établir des paramètres opérationnels et de la TI afin de faciliter l’atteinte de résultats opérationnels.
- {: .dpgn-digital-architectural-measurable-accountable-4} Appliquer des principes de surveillance et de gestion du cycle de vie aux investissements numériques par l’entremise de la gouvernance.
{: .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

**Automated Decision Systems:**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
<!-- markdownlint-disable MD034 -->
- {: .dpgn-automated-decision-evaluation data-content-source-title="Section 7.3.2, Standard on Automated Decision-Making (draft) (GC)"} Monitor the outcomes of Automated Decision Systems on an ongoing basis to safeguard against unintentional outcomes and to ensure compliance with institutional and program legislation, as well as the [Standard on Automated Decision-Making](https://docs.google.com/document/d/1LdciG-UYeokx3U7ZzRng3u4T3IHrBXXk9JddjjueQok).
- {: .dpgn-automated-decision-evaluation data-content-source-title="Section 7.5.1, Standard on Automated Decision-Making (draft) (GC)"} Information on the effectiveness and efficiency of the Automated Decision Systems will be published annually on websites and services designated by the Treasury Board of Canada.
{: data-content-source-uri="https://docs.google.com/document/d/1LdciG-UYeokx3U7ZzRng3u4T3IHrBXXk9JddjjueQok" .dpgn-automated-decision}
<!-- markdownlint-enable MD034 -->
<!-- markdownlint-enable MD032 -->

**Stages alpha, bêta et en direct :**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
- set a performance baseline for the old service, if there was one **(Digital Service Standard (UK))**
- plan to lower [cost per transaction](https://www.gov.uk/service-manual/measuring-success/measuring-cost-per-transaction) or equivalent, for non-transactional user journeys **(Digital Service Standard (UK))**
- plan to [improve user satisfaction](https://www.gov.uk/service-manual/measuring-success/measuring-user-satisfaction) **(Digital Service Standard (UK))**
- plan to [increase completion rate](https://www.gov.uk/service-manual/measuring-success/measuring-completion-rate) or equivalent, for non-transactional user journeys **(Digital Service Standard (UK))**
- plan to [increase digital take-up](https://www.gov.uk/service-manual/helping-people-to-use-your-service/encouraging-people-to-use-your-digital-service) and reduce reliance on assisted digital **(Digital Service Standard (UK))**
- assess the potential for channel shift and the level of assisted digital your service needs **(Digital Service Standard (UK))**
- document other metrics that you'll measure, when you'll start, and how you'll use them to improve your service **(Digital Service Standard (UK))**
- document where you're getting the data for your metrics **(Digital Service Standard (UK))**
- set up your analytics package to collect user journey data **(Digital Service Standard (UK))**
- make sure all stakeholders are actively involved in promoting or supporting digital delivery of the new service **(Digital Service Standard (UK))**
{: .dpgn-stage-alpha .dpgn-stage-beta .dpgn-stage-live}
<!-- markdownlint-enable MD032 -->

**Stage bêta :**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
- track people moving from using the offline service to the online one **(Digital Service Standard (UK))**
{: .dpgn-stage-beta}
<!-- markdownlint-enable MD032 -->

</section>

<section class="dpgn-section-guides">

### Guides d'implémentation

**\[TODO: Ajouter / réviser les éléments du guide de mise en œuvre\]**

- {: .dpgn-digital-architectural .dpgn-digital-architectural-measurable-accountable} [Using data to improve your service: an introduction (Digital Service Standard (UK))](https://www.gov.uk/service-manual/measuring-success/using-data-to-improve-your-service-an-introduction)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-measurable-accountable} [Choosing digital analytics tools (Digital Service Standard (UK))](https://www.gov.uk/service-manual/measuring-success/choosing-digital-analytics-tools)
- [Measuring digital take-up (Digital Service Standard (UK))](https://www.gov.uk/service-manual/measuring-success/measuring-digital-take-up)
- [Sharing data on the Performance Platform (Digital Service Standard (UK))](https://www.gov.uk/service-manual/measuring-success/sharing-your-data-with-the-performance-platform)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-measurable-accountable} [Measuring success (Digital Service Standard (UK))](https://www.gov.uk/service-manual/measuring-success/measuring-completion-rate)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-measurable-accountable} [Performance Testing (Digital Service Standard (AU))](https://www.dta.gov.au/standard/design-guides/performance-testing/)

**Automated Decision Systems:**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
- {: .dpgn-automated-decision-evaluation} [Standard on Automated Decision-Making](https://docs.google.com/document/d/1LdciG-UYeokx3U7ZzRng3u4T3IHrBXXk9JddjjueQok)
{: .dpgn-automated-decision}
<!-- markdownlint-enable MD032 -->

</section>

<section class="dpgn-section-solutions">

### Solutions réutilisables

**[TODO: Ajouter / réviser les solutions réutilisables]**

</section>

<section class="dpgn-section-similar">

### Ressources similaires

- [16. Identify performance indicators (Digital Service Standard (UK))](https://www.gov.uk/service-manual/service-standard/identify-performance-indicators)

**Normes architecturales sur le numérique (GC)&#160;:**
{: .dpgn-data-ignore}

- {: .dpgn-digital-architecutral .dpgn-digital-architectural-measurable-accountable} [7. Concevoir des systèmes mesurables et responsables (GC))](https://canada-ca.github.io/digital-playbook-guide-numerique/views-vues/gc-earb-ceai/fr/ceai-gc.html#concevoir-des-systmes-mesurables-et-responsables)

</section>
</section>

<section class="dpgn-section-guideline">

## 5.4 Être transparent sur la façon de travailler et justifier les décisions prises

<div class="dpgn-section-intro-guideline">

**\[TODO: Ajouter / réviser le texte d'introduction\]**

Share your experiences with colleagues across the Government of Canada, other levels of government, clients and service providers. Sharing experiences and best practices helps to raise the overall service quality. It helps to reduce duplication of effort and save costs. So share ideas, share intentions, share failures and learn together. **(Plan - Digital Design Playbook (ISED))**

</div>

<section class="dpgn-section-checklist">

### Liste de contrôle

**\[TODO: Ajouter / modifier les éléments de la liste de contrôle\]**

- Procuring goods and services in the open is an important part of an open environment **(Open Markets - Open First Whitepaper (GC))**
- When appropriate, share your development process and progress publicly **(Digital Services Playbook (US))**
- Document and show your work. **(Plan - Digital Design Playbook (ISED))**
- If you are redesigning a service document the changes and show how these changes will enhance the client experience when using the service. **(Plan - Digital Design Playbook (ISED))**
- Embrace sharing platforms (e.g., GCconnex, GCpedia, Twitter, etc.) to get inspiration and feedback on your ideas. **(Plan - Digital Design Playbook (ISED))**
- Before you start your own project, do an environmental scan to see how other programs and services are embracing digital service delivery. **(Plan - Digital Design Playbook (ISED))**
- Identify lessons learned throughout the project and not just at the end. **(Plan - Digital Design Playbook (ISED))**
- Make it easier to share data across ISED by collecting service and client information in a consistent manner and following best practices (e.g., the business number as a common identifier and practices related to Identity Management (IDM)). **(Plan - Digital Design Playbook (ISED))**

</section>

<section class="dpgn-section-guides">

### Guides d'implémentation

**\[TODO: Ajouter / réviser les éléments du guide de mise en œuvre\]**

</section>

<section class="dpgn-section-solutions">

### Solutions réutilisables

**[TODO: Ajouter / réviser les solutions réutilisables]**

</section>

<section class="dpgn-section-similar">

### Ressources similaires

- [Marchés ouverts (Livre blanc ouvert en premier (GC))](https://github.com/canada-ca/Open_First_Whitepaper/blob/master/fr/5_March%C3%A9s_ouverts.md)
- [2. Share best practices (Plan - Digital Design Playbook (ISED)) (internal to Government of Canada)](http://www.gcpedia.gc.ca/wiki/DDPlayBook_Plan#2._Share_best_practices)

</section>
</section>
