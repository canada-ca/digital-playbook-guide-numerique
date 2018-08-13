---
layout: default
title: "6. Utiliser des normes et des solutions ouvertes (ébauche)"
lang: fr
altLang: en
altLangPage: 6-use-open-standards-solutions
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

**Lignes directrices connexes:**

{% include functions/guideline-links.html guidelines="1.3, 3.4, 5.1, 10.3" samePage=false includeStandardTitle=true %}

</div>

<section class="dpgn-section-guideline">

## 6.1 Tirer parti des normes ouvertes et adopter les pratiques exemplaires, y compris l'utilisation de logiciels libres, le cas échéant

<div class="dpgn-section-intro-guideline">

**\[TODO: Ajouter / réviser le texte d'introduction\]**

Créez une technologie qui utilise des normes ouvertes pour garantir que votre système fonctionne et communique avec d'autres produits ou systèmes, et peut facilement être mis à niveau et étendu.

Adopter et utiliser des normes ouvertes signifie que vous pouvez:

- passer d'une technologie à l'autre lorsque vous en avez besoin, en évitant le verrouillage des fournisseurs
- changer rapidement et facilement votre service quand vous en avez besoin
- augmenter la compatibilité avec toutes les parties prenantes
- ouvrir la gamme des entreprises de qui vous pouvez acheter, car plus d'entre eux sont susceptibles d'utiliser la même norme que vous
- accéder à un plus large éventail de fournisseurs de logiciels libres et propriétaires

Nos choix pour l'infrastructure d'hébergement, les bases de données, les plateformes logiciels, les langages de programmation et le reste de la pile technologique devraient éviter le verrouillage des fournisseurs et correspondre à ce que les entreprises modernes de logiciels grand public choisissent aujourd'hui. En particulier, les équipes de services numériques devraient envisager d'utiliser des logiciels libres, des solutions infonuagiques et des produits de base à travers la pile technologique, en raison de leur adoption généralisée et de leur soutien par les entreprises technologiques du secteur privé.

Les logiciels libres ont tendance à utiliser et à aider à définir des normes ouvertes et des spécifications accessibles au public. Les logiciels libres sont, par nature, des spécifications accessibles au public, et la disponibilité de leur code source favorise un débat ouvert et démocratique autour de leurs spécifications, les rendant à la fois plus robustes et interopérables.

Utiliser un logiciel libre signifie que vous pouvez bénéficier de:

- résoudre les problèmes courants avec la technologie libre facilement disponible
- plus de temps et de ressources pour des solutions personnalisées pour résoudre les problèmes rares ou uniques
- réduction des coûts de mise enieuvre et de fonctionnement

**Concevoir, créer et tester des services numériques de bout en bout (anciennement ligne directrice 6.5) :**
{: .dpgn-data-ignore}

There are many potential benefits from the greater use of digital services, including greater convenience for users, quicker and more responsive service delivery, increased security and reliability and reduced costs. To maximize these potential benefits and avoid user reliance on less convenient ways of interacting with government, services should be designed to be digital from end-to-end.

</div>

<section class="dpgn-section-checklist">

### Liste de contrôle

**\[TODO: Ajouter / modifier les éléments de la liste de contrôle\]**

- Utiliser des normes ouvertes et des logiciels libres à chaque couche de la pile technologique
- Tenir compte de l'utilisation de normes ouvertes et de logiciels libres lors du calcul du coût total de possession d'une solution, y compris les coûts de sortie ou de transition
- Éviter le verrouillage à toutes les solutions propriétaires où des logiciels libres et / ou des normes ouvertes sont disponibles
- Assurez-vous que le logiciel peut être déployé sur une variété de types de matériel de base

**Concevoir, créer et tester des services numériques de bout en bout (anciennement ligne directrice 6.5) :**
{: .dpgn-data-ignore}

- Concevoir, créer et tester des services numériques de bout en bout
- assurez-vous que les prototypes intègrent l'expérience utilisateur de bout en bout **(4. Conception du service du début à la fin, Normes des services numériques (Ontario))**
- design and test your service to work with the devices and browsers your users use - find out the browsers you must test with **(Digital Service Standard (UK))**
- testez le service dans un environnement aussi semblable que possible à l'environnement de déploiement **(Normes des services numériques (Ontario))**
- adoptez un processus de test des modifications apportées au service **(Normes des services numériques (Ontario))**
- mettez en place un processus périodique de contrôle et de test du service, même quand il n'a pas subi de modifications **(Normes des services numériques (Ontario))**
- Create automated tests that verify all user-facing functionality **(Digital Services Playbook (US))**
- Create unit and integration tests to verify modules and components **(Digital Services Playbook (US))**
- Run tests automatically as part of the build process **(Digital Services Playbook (US))**
- Perform deployments automatically with deployment scripts, continuous delivery services, or similar techniques **(Digital Services Playbook (US))**
- Conduct load and performance tests at regular intervals, including before public launch **(Digital Services Playbook (US))**
- Determine how users would be affected if your service was unavailable for any length of time and how that's changed since beta **(Digital Service Standard (UK))**
- Determine the most likely ways the service could go offline and how you plan to stop them **(Digital Service Standard (UK))**
- Determine your strategy for dealing with outages, including who's responsible and the decisions they can make **(Digital Service Standard (UK))**

</section>

<section class="dpgn-section-guides">

### Guides d'implémentation

**\[TODO: Ajouter / réviser les éléments du guide de mise en œuvre\]**

- [Socle Logiciels Libres (France)](https://references.modernisation.gouv.fr/socle-logiciels-libres)
- [Logiciels libres et ouverts - Guide d'analyse de maturité (Québec)](https://www.tresor.gouv.qc.ca/fileadmin/PDF/ressources_informationnelles/logiciels_libres/pollo.pdf)
- [Logiciels libres et ouverts - Guide d'analyse du coût total de propriété (Québec)](https://www.tresor.gouv.qc.ca/fileadmin/PDF/ressources_informationnelles/logiciels_libres/ctp.pdf)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-open-standards-solutions} [Working with open standards (Service Manual (UK))](https://www.gov.uk/service-manual/technology/working-with-open-standards)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-open-standards-solutions} [Choosing technology: an introduction (Service Manual (UK))](https://www.gov.uk/service-manual/technology/choosing-technology-an-introduction)
- [Australian Government ICT Policy Guides and Procurement (AU)](http://finance.gov.au/policy-guides-procurement/)
- [Australian Government Open Source Software Policy (AU)](http://www.finance.gov.au/sites/default/files/australian-government-open-source-software-policy-2013.pdf)
- [DoD Open Source Software FAQ (US)](http://dodcio.defense.gov/Open-Source-Software-FAQ/)
- [DoD Memorandum on Guidance Regarding Open Source Software (US)](http://dodcio.defense.gov/Portals/0/Documents/OSSFAQ/2009OSS.pdf)
- [W3C Standards (W3C)](https://www.w3.org/standards/)
  - [Web Design and Applications - W3C Web design standards (W3C)](https://www.w3.org/standards/webdesign/)
  - [Web of Devices (W3C)](https://www.w3.org/standards/webofdevices/)
- [OASIS Standards (oasis-open.org)](https://www.oasis-open.org/standards)

**Concevoir, créer et tester des services numériques de bout en bout (anciennement ligne directrice 6.5) :**
{: .dpgn-data-ignore}

- [Quality assurance: testing your service regularly (Digital Service Standard (UK))](https://www.gov.uk/service-manual/technology/quality-assurance-testing-your-service-regularly)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-performance-availability-scalability} [Designing for different browsers and devices (Digital Service Standard (UK))](https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-performance-availability-scalability} [Test your service's performance (Digital Service Standard (UK))](https://www.gov.uk/service-manual/technology/test-your-services-performance)
- [Exploratory testing (Digital Service Standard (UK))](https://www.gov.uk/service-manual/technology/exploratory-testing)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-performance-availability-scalability} [Deployment environments (Digital Service Standard (UK))](https://www.gov.uk/service-manual/making-software/deployment.html)
- [Vulnerability and penetration testing (Digital Service Standard (UK))](https://www.gov.uk/service-manual/technology/vulnerability-and-penetration-testing)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-performance-availability-scalability} [Performance testing (Digital Service Standard (AU))](https://www.dta.gov.au/standard/design-guides/performance-testing/)
- [Testing your service (Service Manual (UK))](https://www.gov.uk/service-manual/technology#testing-your-service)
- [Testing Cookbook (18F (US))](https://testing-cookbook.18f.gov/)
- [Keeping your service online (Service Manual (UK))](https://www.gov.uk/service-manual/technology/uptime-and-availability-keeping-your-service-online)

</section>

<section class="dpgn-section-solutions">

### Solutions réutilisables

**[TODO: Ajouter / réviser les solutions réutilisables]**

</section>

<section class="dpgn-section-similar">

### Ressources similaires

- [Normes ouvertes (Livre blanc ouvert en premier (GC)](https://github.com/canada-ca/Open_First_Whitepaper/blob/master/fr/2_Normes_ouvertes.md)
- [Logiciels libres - Utilisation (Livre blanc ouvert en premier (GC))](https://github.com/canada-ca/Open_First_Whitepaper/blob/master/fr/3_Logiciel_libre_Utilisation.md)
- [Ressources naturelles Canada - Guide d'introduction aux licences de logiciel libre avec code source ouvert (GC)](http://ftp.maps.canada.ca/pub/nrcan_rncan/publications/ess_sst/295/295664/cgdi_ip_33_f.pdf)
- [Logiciels libres et ouverts - Guide de référence (Québec)](https://www.tresor.gouv.qc.ca/fileadmin/PDF/ressources_informationnelles/logiciels_libres/ll.pdf)
- [Politique du libre (Montréal)](https://github.com/VilledeMontreal/politique-libre/blob/master/Politique/PolitiqueDuLibre.md)
- [8. Choose a modern technology stack (Digital Services Playbook (US))](https://playbook.cio.gov/#play8)
- [18F Open Source Policy (US)](https://github.com/18F/open-source-policy/blob/master/policy.md)
- [3. Be open and use open source (Technology Code of Practice (UK))](https://www.gov.uk/guidance/be-open-and-use-open-source)
- [4. Make use of open standards (Technology Code of Practice (UK))](https://www.gov.uk/guidance/make-use-of-open-standards)
- [9. Use open standards and common platforms (Digital Service Standard (UK))](https://www.gov.uk/service-manual/service-standard/use-open-standards-and-common-platforms)
- [9. Utiliser des normes ouvertes et des plateformes communes (Normes des services numériques (Ontario))](https://www.ontario.ca/fr/page/norme-des-services-numeriques#section-9)
- [7. Use open standards and common platforms (Digital Service Standard (AU))](https://www.dta.gov.au/standard/7-open-standards-and-common-platforms/)

**Concevoir, créer et tester des services numériques de bout en bout (anciennement ligne directrice 6.5) :**
{: .dpgn-data-ignore}

- [10. Test the end-to-end service (Digital Service Standard (UK))](https://www.gov.uk/service-manual/service-standard/test-the-end-to-end-service)
- [4. Conception du service du début à la fin (Normes des services numériques (Ontario))](https://www.ontario.ca/page/digital-service-standard#section-5)
- [6. Tester le service de bout en bout (Normes des services numériques (Ontario))](https://www.ontario.ca/page/digital-service-standard#section-7)
- [10. Automate testing and deployments (Digital Services Playbook (US))](https://playbook.cio.gov/#play10)
- [10. Test the service (Digital Service Standard (AU))](https://www.dta.gov.au/standard/10-test-the-service/)
- [11. Make a plan for being offline (Digital Service Standard (UK))](https://www.gov.uk/service-manual/service-standard/make-a-plan-for-being-offline)

</section>
</section>

<section class="dpgn-section-guideline">

## 6.2 Utiliser et réutiliser les solutions, les approches et les plateformes gouvernementales éprouvées et communes

<div class="dpgn-section-intro-guideline">

**\[TODO: Ajouter / réviser le texte d'introduction\]**

In order to limit costs, avoid duplication of effort and provide a consistent client experience when using various services, the reuse and adaptation of existing technological solutions is encouraged. If the development of new solutions is required, consider the ability of others to reuse and adapt your work as this will provide additional value on an organizational level.

Using common, proven government solutions, approaches, and platforms will help the government:

- meet the needs of your users by building with proven solutions
- make users' experience of government more consistent, which generates trust
- save time and money by reusing things that are already available

</div>

<section class="dpgn-section-checklist">

### Liste de contrôle

**\[TODO: Ajouter / modifier les éléments de la liste de contrôle\]**

- Use device-agnostic and modular technology. **(2. Reuse, improve and share technological solutions where appropriate (Do - Digital Design Playbook (ISED)))**
  - Use technology that allows your service to function regardless of the device or operating system. Make sure mobile apps can function on all devices.
  - Modular technology can be reused, in part or in whole to innovate new solutions and uses for it. It also allows you to add new capabilities and capacities to your technology in response to changing operational environments.
- Follow the [Canada.ca Content Style Guide](https://www.tbs-sct.gc.ca/hgw-cgf/oversight-surveillance/communications/csc-grc-eng.asp)
- Static assets are served through a content delivery network **(Digital Services Playbook (US))**

**Stratégie d’adoption de l’informatique en nuage du gouvernement du Canada :**
{: .dpgn-data-ignore}

- Les services d’informatique en nuage sont désignés et évalués comme la principale option de prestation de services lorsqu’on procède à des investissements en matière de TI ou qu’on lance des initiatives, des stratégies et des projets de la TI.
- Pour déterminer comment gérer les risques pour la sécurité, les ministères et organismes doivent observer le contenu des documents [Approche et procédures de gestion des risques à la sécurité de l’informatique en nuage du gouvernement du Canada](https://www.canada.ca/fr/secretariat-conseil-tresor/services/technologie-information/informatique-nuage/approche-procedures-gestion-risques-securite-informatique-nuage.html) et [Orientation sur l’utilisation sécurisée des services commerciaux d’informatique en nuage : Avis de mise en œuvre de la Politique sur la sécurité (AMOPS)](https://www.canada.ca/fr/secretariat-conseil-tresor/services/acces-information-protection-reseignements-personnels/gestion-securite-identite/orientation-utilisation-securisee-services-commerciaux-informatique-nuage-amops.html).
- Les ministères et organismes peuvent déployer des solutions dont les exigences en matière de catégorisation de données ne correspondent pas à un profil de contrôle de sécurité de l’informatique en nuage donné, comme il est indiqué dans le [Profil de contrôle de sécurité pour les services de la TI du GC fondés sur l’informatique en nuage](https://www.canada.ca/fr/secretariat-conseil-tresor/services/technologie-information/informatique-nuage/profil-controle-securite-services-ti-fondes-information-nuage.html), avec des mesures d’atténuation des risques appropriées élaborées de concert avec des partenaires de la sécurité du GC.
- Pour garantir, dans la mesure du possible, l’accès continu du GC aux données de nature délicate, les ministères et organismes doivent se conformer à l’[Orientation relative à la résidence des données électroniques](https://www.canada.ca/fr/secretariat-conseil-tresor/services/technologie-information/avis-mise-oeuvre-politique/orientation-relative-residence-donnees-electroniques.html).
- Pour assurer la continuité des activités et gérer les risques, les ministères et organismes élaboreront une stratégie de retrait appropriée avant d’utiliser les services d’informatique en nuage.
- Les ministères et organismes devraient tenir compte de la transférabilité et de l’interopérabilité des services au moment d’élaborer des solutions d’informatique en nuage.

</section>

<section class="dpgn-section-guides">

### Guides d'implémentation

**\[TODO: Ajouter / réviser les éléments du guide de mise en œuvre\]**

- {: .dpgn-digital-architectural .dpgn-digital-architectural-maximize-reuse} [Spécifications du contenu et de l’architecture de l'information pour Canada.ca](https://www.canada.ca/fr/secretariat-conseil-tresor/services/communications-gouvernementales/specifications-contenu-architecture-information-canada.html)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-maximize-reuse} [Guide de rédaction du contenu du site Canada.ca](https://www.canada.ca/fr/secretariat-conseil-tresor/services/communications-gouvernementales/guide-redaction-contenu-canada.html)

<section>

#### Services d’informatique en nuage

**Nuage d'abord (anciennement ligne directrice 6.6) :**
{: .dpgn-data-ignore}

- {: .dpgn-digital-architectural .dpgn-digital-architectural-cloud-first} [Gouvernement du Canada Guide de Sélection du Nuage Approprié](https://www.canada.ca/fr/secretariat-conseil-tresor/services/technologie-information/informatique-nuage/gouvernement-canada-guide-selection-nuage-approprie.html)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-cloud-first} [Profil de contrôle de sécurité pour les services de la TI du GC fondés sur l'informatique en nuage](https://www.canada.ca/fr/secretariat-conseil-tresor/services/technologie-information/informatique-nuage/profil-controle-securite-services-ti-fondes-information-nuage.html)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-cloud-first} [Stratégie d’adoption de l’informatique en nuage du Gouvernement du Canada](https://www.canada.ca/fr/secretariat-conseil-tresor/services/technologie-information/informatique-nuage/strategie-adoption-information-nuage-gouvernement-canada.html)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-cloud-first} [Gouvernement du Canada Livre blanc : Souveraineté des données et nuage public](https://www.canada.ca/fr/secretariat-conseil-tresor/services/technologie-information/informatique-nuage/gc-livre-blanc-souverainete-donnees-nuage-public.html)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-cloud-first} [Gouvernement du Canada Approche et procédures de gestion des risques à la sécurité de l’informatique en nuage](https://www.canada.ca/fr/secretariat-conseil-tresor/services/technologie-information/informatique-nuage/approche-procedures-gestion-risques-securite-informatique-nuage.html)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-cloud-first} [Orientation sur l’utilisation sécurisée des services commerciaux d’informatique en nuage : Avis de mise en œuvre de la Politique sur la sécurité (AMOPS)](https://www.canada.ca/fr/secretariat-conseil-tresor/services/acces-information-protection-reseignements-personnels/gestion-securite-identite/orientation-utilisation-securisee-services-commerciaux-informatique-nuage-amops.html)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-cloud-first} [Orientation relative à la résidence des données électroniques](https://www.canada.ca/fr/secretariat-conseil-tresor/services/technologie-information/avis-mise-oeuvre-politique/orientation-relative-residence-donnees-electroniques.html)

</section>

</section>

<section class="dpgn-section-solutions">

### Solutions réutilisables

**[TODO: Ajouter / réviser les solutions réutilisables]**

- {: .dpgn-digital-architectural .dpgn-digital-architectural-maximize-reuse} [Boîte à outils de l’expérience Web (BOEW)](http://wet-boew.github.io/wet-boew/index-fr.html)

</section>

<section class="dpgn-section-similar">

### Ressources similaires

- [Three-Step Software Solutions Analysis (Federal Source Code Policy (US))](https://sourcecode.cio.gov/Three-Step-Software-Solutions-Analysis/)
- [1. Comply with Government of Canada acts, policies, standards and directives (Plan - Digital Design Playbook (ISED)) (internal to GC only)](http://www.gcpedia.gc.ca/wiki/DDPlayBook_Plan#1._Comply_with_Government_of_Canada_acts.2C_policies.2C_standards_and_directives)
- [2. Reuse, improve and share technological solutions where appropriate (Do - Digital Design Playbook (ISED)) (internal to GC only)](http://www.gcpedia.gc.ca/wiki/DDPlayBook_Do#2._Reuse.2C_improve_and_share_technological_solutions_where_appropriate)

**Nuage d'abord (anciennement ligne directrice 6.6) :**
{: .dpgn-data-ignore}

- [9. Deploy in a flexible hosting environment (Digital Services Playbook (US))](https://playbook.cio.gov/#play9)

</section>
</section>

<section class="dpgn-section-guideline">

## 6.3 Faire la conception en fonction de l’interopérabilité, en permettant à la collectivité de découvrir et d’exploiter les services

<div class="dpgn-section-intro-guideline">

**\[TODO: Ajouter / réviser le texte d'introduction\]**

L’interopérabilité est la capacité que possède un produit ou un système, dont les interfaces sont intégralement connues, à fonctionner avec d'autres produits ou systèmes existants ou futurs et ce sans restriction d'accès ou de mise en oeuvre. L'interopérabilité technique devrait être assurée par l'utilisation de normes ouvertes.

Les interfaces de programme d'application (API) sont un moyen par lequel les fonctionnalités métier sont exposées numériquement. Ce sont des éléments essentiels à la prestation réussie des services numériques en direct du gouvernement et à l'expansion de la prestation de services à des fournisseurs tiers. Ils peuvent également permettre une plus grande interopérabilité entre les services, optimiser les expériences entre les appareils et même mener à de nouveaux services novateurs en permettant à des produits tiers de fonctionner de façon transparente avec les systèmes du gouvernement du Canada.

</div>

<section class="dpgn-section-checklist">

### Liste de contrôle

**\[TODO: Ajouter / modifier les éléments de la liste de contrôle\]**

- Build services that are API-centric services, which execute most, if not all, functionality through API calls (e.g., connecting frontend to backend through an API)
- Plan out API access from the beginning, designing services to be able to safely and securely expose functionality to other systems and the public.
- Design APIs to be compete but also minimal, ensuring the expected functionality is provided but with as few public members per class and as few classes as possible. This makes it easier to understand, remember, debug and change the API.
- Design APIs to have clear and simple semantics to make common tasks easy. Rare tasks should still be possible but not the focus. Avoid being overly general, optimizing specific use cases.
- Design APIs to be intuitive so that a semi-experienced user can be successful with minimal assistance from the documentation and programmers can easily understand code that uses the API.
- Design APIs to be easy to memorize by implementing a consistent and precise naming convention. Use plain language and recognizable patterns and concepts, avoiding abbreviations where possible.

</section>

<section class="dpgn-section-guides">

### Guides d'implémentation

**\[TODO: Ajouter / réviser les éléments du guide de mise en œuvre\]**

- {: .dpgn-digital-architectural .dpgn-digital-architectural-open-standards-solutions .dpgn-digital-architectural-enable-interoperability} [API technical and data standards (Government Digital Service (UK))](https://www.gov.uk/guidance/gds-api-technical-and-data-standards)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-enable-interoperability} [Developing cross-government API data and technical standards (Government Digital Service Blog (UK))](https://gdstechnology.blog.gov.uk/2018/02/13/developing-cross-government-api-data-and-technical-standards/)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-open-standards-solutions .dpgn-digital-architectural-enable-interoperability} [Application Programming Interfaces (APIs) (Digital Service Standard (AU))](https://www.dta.gov.au/standard/design-guides/api/)

</section>

<section class="dpgn-section-solutions">

### Solutions réutilisables

**[TODO: Ajouter / réviser les solutions réutilisables]**

</section>
</section>

<section class="dpgn-section-guideline">

## 6.4 Ouvrir l’accès aux donnés, aux transactions et aux règles commerciales qui sous-tendent un service

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

- [Open data (Digital Service Standard (AU))](https://www.dta.gov.au/standard/design-guides/open-data/)
- [API technical and data standards (Government Digital Service (UK))](https://www.gov.uk/guidance/gds-api-technical-and-data-standards)
- [Developing cross-government API data and technical standards (Government Digital Service blog (UK))](https://gdstechnology.blog.gov.uk/2018/02/13/developing-cross-government-api-data-and-technical-standards/)
- [Application Programming Interfaces (APIs) (Digital Service Standard (AU))](https://www.dta.gov.au/standard/design-guides/api/)

</section>

<section class="dpgn-section-solutions">

### Solutions réutilisables

**[TODO: Ajouter / réviser les solutions réutilisables]**

</section>
</section>
