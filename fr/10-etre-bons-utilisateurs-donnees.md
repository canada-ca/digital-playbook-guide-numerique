---
layout: default
title:  "10. Être de bons utilisateurs de données (ébauche)"
lang: fr
altLang: en
altLangPage: 10-be-good-data-stewards
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

{% include functions/guideline-links.html guidelines="1.4, 5.1, 5.2, 5.3, 5.4, 6.1, 6.2, 6.4, 9.2" samePage=false includeStandardTitle=true %}

</div>

<section class="dpgn-section-guideline">

## 10.1 Recueillir les données une seule fois pour éviter le double emploi

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

<section class="dpgn-section-solutions">

### Solutions réutilisables

**[TODO: Ajouter / réviser les solutions réutilisables]**

</section>
</section>

<section class="dpgn-section-guideline">

## 10.2 Rendre facilement accessibles l’information et les données gouvernementales pertinentes pour faciliter la prise de décisions

<div class="dpgn-section-intro-guideline">

**\[TODO: Ajouter / réviser le texte d'introduction\]**

At every stage of a project, we should measure how well our service is working for our users. This includes measuring how well a system performs and how people are interacting with it in real-time. Our teams and agency leadership should carefully watch these metrics to find issues and identify which bug fixes and improvements should be prioritized. Along with monitoring tools, a feedback mechanism should be in place for people to report issues directly. **(Digital Services Playbook (US))**

</div>

<section class="dpgn-section-checklist">

### Liste de contrôle

**\[TODO: Ajouter / modifier les éléments de la liste de contrôle\]**

- Monitor system-level resource utilization in real time **(Digital Services Playbook (US))**
- Monitor system performance in real-time (e.g. response time, latency, throughput, and error rates) **(Digital Services Playbook (US))**
- Ensure monitoring can measure median, 95th percentile, and 98th percentile performance **(Digital Services Playbook (US))**
- Create automated alerts based on this monitoring **(Digital Services Playbook (US))**
- Track concurrent users in real-time, and monitor user behaviors in the aggregate to determine how well the service meets user needs **(Digital Services Playbook (US))**
- Publish metrics internally **(Digital Services Playbook (US))**
- Publish metrics externally **(Digital Services Playbook (US))**
- Use an experimentation tool that supports multivariate testing in production **(Digital Services Playbook (US))**

**Digital Architectural Standards (GC):**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
- {: .dpgn-digital-architectural-keep-data-organized-1} Decouple Master Data from applications and host using the appropriate system of record.
- {: .dpgn-digital-architectural-keep-data-organized-2} Systems of record shall be authoritative central sources.
- {: .dpgn-digital-architectural-keep-data-organized-4} Data Resiliency shall be designed in accordance with GC policies and standards.
- {: .dpgn-digital-architectural-keep-data-organized-5} Publish Master Data Management to appropriate stakeholders.
{: .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

**Assurer les données et dans la formation est complète, précise et à jour (anciennement ligne directrice 10.5):**
{: .dpgn-data-ignore}

- Assurer les données et dans la formation est complète, précise et à jour

**Automated Decision Systems:**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
<!-- markdownlint-disable MD034 -->
- {: .dpgn-automated-decision-evaluation data-content-source-title="Section 7.3.3, Standard on Automated Decision-Making (draft) (GC)"} Ensure that data being used by the Automated Decision System is routinely tested to ensure that it is still relevant, accurate and up-to-date and follow any applicable policy or guidelines with regards to data management practices.
- {: .dpgn-automated-decision-evaluation data-content-source-title="Section 7.5.2, Standard on Automated Decision-Making (draft) (GC)"} When requested, information on the achievement of the expected results of the Automated Decision System and compliance with this Standard will be provided to the Treasury Board of Canada Secretariat.
{: data-content-source-uri="https://docs.google.com/document/d/1LdciG-UYeokx3U7ZzRng3u4T3IHrBXXk9JddjjueQok" .dpgn-automated-decision}
<!-- markdownlint-enable MD034 -->
<!-- markdownlint-enable MD032 -->

</section>

<section class="dpgn-section-guides">

### Guides d'implémentation

**\[TODO: Ajouter / réviser les éléments du guide de mise en œuvre\]**

- [Data on the Web Best Practices (W3C)](https://www.w3.org/TR/dwbp/)
  - [Machine-Readable Standardized Data Format (Data on the Web Best Practices (W3C))](https://www.w3.org/TR/dwbp/#MachineReadableStandardizedFormat)
  - {: .dpgn-digital-architectural .dpgn-digital-architectural-keep-data-organized} [Local Neutral Data Representation (Data on the Web Best Practices (W3C))](https://www.w3.org/TR/dwbp/#LocaleParametersMetadata)
  - {: .dpgn-digital-architectural .dpgn-digital-architectural-keep-data-organized} [Real Time Access (Data on the Web Best Practices (W3C))](https://www.w3.org/TR/dwbp/#AccessRealTime)

**Assurer les données et dans la formation est complète, précise et à jour (anciennement ligne directrice 10.5):**
{: .dpgn-data-ignore}

- [Preserving digital collections (The National Archives (UK))](https://www.nationalarchives.gov.uk/archives-sector/advice-and-guidance/managing-your-collection/preserving-digital-collections/)
  - [How to get started (Preserving digital collections (The National Archives (UK)))](https://www.nationalarchives.gov.uk/archives-sector/advice-and-guidance/managing-your-collection/preserving-digital-collections/how-to-get-started/)
  - [Developing a digital preservation strategy and policy (Preserving digital collections (The National Archives (UK)))](https://www.nationalarchives.gov.uk/archives-sector/advice-and-guidance/managing-your-collection/preserving-digital-collections/developing-a-digital-preservation-strategy-and-policy/)
- [Sustainability of Digital Formats: Planning for Library of Congress Collections (US)](https://www.loc.gov/preservation/digital/formats/index.html)
  - [Formats, Evaluation Factors and Relationships (Sustainability of Digital Formats: Planning for Library of Congress Collections (US))](https://www.loc.gov/preservation/digital/formats/intro/format_eval_rel.shtml)
  - [Sustainability Factors (Sustainability of Digital Formats: Planning for Library of Congress Collections (US))](https://www.loc.gov/preservation/digital/formats/sustain/sustain.shtml)

</section>

<section class="dpgn-section-solutions">

### Solutions réutilisables

**[TODO: Ajouter / réviser les solutions réutilisables]**

**Assurer les données et dans la formation est complète, précise et à jour (anciennement ligne directrice 10.5):**
{: .dpgn-data-ignore}

- [Digital preservation tools (Preserving digital collections (The National Archives (UK)))](https://www.nationalarchives.gov.uk/archives-sector/advice-and-guidance/managing-your-collection/preserving-digital-collections/digital-preservation-tools/)

</section>

<section class="dpgn-section-similar">

### Ressources similaires

- [12. Use data to drive decisions (Digital Services Playbook (US))](https://playbook.cio.gov/#play12)

**Digital Architectural Standards (GC):**
{: .dpgn-data-ignore}

- {: .dpgn-digital-architectural .dpgn-digital-architectural-keep-data-organized} [8. Keep Data Organized (Digital Architectural Standards (GC))](https://canada-ca.github.io/digital-playbook-guide-numerique/views-vues/gc-earb-ceai/fr/ceai-gc.html#keep-data-organized)

</section>
</section>

<section class="dpgn-section-guideline">

## 10.3 Veiller à ce que les données soient recueillies de façon normalisée pour qu’elles soient facilement intégrables et réutilisables par les autres

<div class="dpgn-section-intro-guideline">

**\[TODO: Ajouter / réviser le texte d'introduction\]**

Enregistrez et surveillez en permanence les données de rendement afin d’éclairer les améliorations du service en cours.

La mesure du rendement permet d’améliorer en continu un service en :

- montrant ses forces et ses faiblesses
- fournissant des données sur lesquelles s’appuyer pour effectuer des modifications

**(Normes des services numériques (Ontario))**

</div>

<section class="dpgn-section-checklist">

### Liste de contrôle

**\[TODO: Ajouter / modifier les éléments de la liste de contrôle\]**

**Digital Architectural Standards (GC):**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
- {: .dpgn-digital-architectural-keep-data-organized-3} Custodians shall ensure data is correct, consistent, and complete.
{: .dpgn-digital-architectural}
<!-- markdownlint-enable MD032 -->

**Assurez-vous que les données sont bien structurées, intuitives et dans un format facile à intégrer et réutiliser par d'autres (anciennement ligne directrice 10.6):**
{: .dpgn-data-ignore}

- Assurez-vous que les données sont bien structurées, intuitives et dans un format facile à intégrer et réutiliser par d'autres
- Design data to have clear and simple semantics to make common tasks easy. Rare tasks should still be possible but not the focus. Avoid being overly general, optimizing specific use cases.
- Design data to be intuitive so that a semi-experienced user can be successful with minimal assistance from the documentation and programmers can easily integrate and reuse it.
- Design data with a consistent and precise naming convention. Use plain language and recognizable patterns and concepts, avoiding abbreviations where possible.

**Stages alpha, bêta et en direct :**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
- définissez les besoins, les sources et la collecte en matière de données **(Normes des services numériques (Ontario / UK))**
- have an ongoing roadmap for performance analysis and someone in the team responsible for identifying actionable data insights during alpha, including assisted digital support **(Digital Service Standard (UK))**
- utilisez des données qualitatives et quantitatives en vue de comprendre les besoins des utilisateurs et de repérer des domaines où des modifications pourraient être apportées **(Normes des services numériques (Ontario / UK))**
- choose suitable data analysis tools **(Digital Service Standard (UK))**
- address information security and privacy issues appropriately **(Digital Service Standard (UK))**
- map user journeys through the service and track them to identify completions and areas of poor performance **(Digital Service Standard (UK))**
- document the next user story related to performance analysis **(Digital Service Standard (UK))**
- All services must, at a minimum, measure 4 KPIs. **(Digital Service Standard (AU))**
  - User satisfaction - to help continually improve the user experience of your service
  - Digital take-up - to show how many people are using the service and to help encourage users to choose the digital service
  - Completion rate - to show which parts of the service you need to fix
  - Cost per transaction - to make your service more cost efficient
- There will be other metrics your service needs to measure and monitor to understand how it is performing, such as: **(Digital Service Standard (AU))**
  - error rates
  - time to completion
  - costs, benefits and return on investment
  - content metrics (readability, length).
{: .dpgn-stage-alpha .dpgn-stage-beta .dpgn-stage-live}
<!-- markdownlint-enable MD032 -->

**Stage alpha :**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
- explored the data that is already available for an existing service, where it is kept and how you might access and use it, and also shared your own insights **(Digital Service Standard (AU))**
- collected baseline data for the service operation in all of its channels **(Digital Service Standard (AU))**
- estimated the number of people you expect to use the service **(Digital Service Standard (AU))**
- started creating a performance framework outlining your objectives and what metrics your team will use to demonstrate you meet them **(Digital Service Standard (AU))**
- considered the metrics you will need to measure the 4 KPIs and where the data will come from. **(Digital Service Standard (AU))**
{: .dpgn-stage-alpha}
<!-- markdownlint-enable MD032 -->

**Stage bêta :**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
- which metrics and measurements you will use to monitor your KPIs **(Digital Service Standard (AU))**
- the baseline measures and the benchmarks for success **(Digital Service Standard (AU))**
- which tools you use for analysis and web analytics in Beta (and Alpha if appropriate) **(Digital Service Standard (AU))**
{: .dpgn-stage-beta}
<!-- markdownlint-enable MD032 -->

**Stage en direct :**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
- collect feedback from users, during and after their user journey **(Digital Service Standard (UK))**
- utilisez une analytique Web afin d’enregistrer des données concernant le comportement des utilisateurs en ligne **(Normes des services numériques (Ontario))**
- surveillez et évaluez les commentaires et les plaintes des utilisateurs concernant le service numérique et les autres points de contact du service (par téléphone, en personne) **(Normes des services numériques (Ontario))**
- analysez le rendement et identifiez le plus tôt possible les données exploitables **(Normes des services numériques (Ontario))**
- définissez des mesures du rendement dès le début du service, en amont dans le processus de conception **(Normes des services numériques (Ontario))**
- réexaminez régulièrement la technologie servant à fournir le service et les processus le soutenant **(Normes des services numériques (Ontario))**
- établissez la fréquence de vos réexamens du service selon le nombre d’utilisateurs (p. ex. 10 000 utilisateurs uniques ou moins par an = cycle de réexamen de 2 ans; 10 000-100 000 = annuel; 100 000-1 million = aux 6 mois) **(Normes des services numériques (Ontario))**
- use data to determine the cost per use for each channel, accounting for the cost to build and ongoing maintenance as well **(Digital Service Standard (Ontario))**
- utilisez les données pour déterminer le coût par utilisation de chaque avenue, en tenant compte aussi du coût de création et de maintenance continue **(Normes des services numériques (Ontario))**
- Your data should show: **(Digital Service Standard (AU))**
  - user satisfaction has increased
  - digital take-up is increasing in line with service plans
  - completion rate has been maintained
  - cost per transaction is decreasing in line with service plans.
{: .dpgn-stage-live}
<!-- markdownlint-enable MD032 -->

</section>

<section class="dpgn-section-guides">

### Guides d'implémentation

**\[TODO: Ajouter / réviser les éléments du guide de mise en œuvre\]**

- [Trousse de la qualité des données (Statistique Canada (GC))](https://www.statcan.gc.ca/fra/trousse-qualite-donnees)
- [Using data to improve your service: an introduction (Digital Service Standard (UK))](https://www.gov.uk/service-manual/measuring-success/using-data-to-improve-your-service-an-introduction)
- [Choosing digital analytics tools (Digital Service Standard (UK))](https://www.gov.uk/service-manual/measuring-success/choosing-digital-analytics-tools)
- [Measuring digital take-up (Digital Service Standard (UK))](https://www.gov.uk/service-manual/measuring-success/measuring-digital-take-up)
- [Measuring user satisfaction (Digital Service Standard (UK))](https://www.gov.uk/service-manual/measuring-success/measuring-user-satisfaction)
- [Measuring cost per transaction (Digital Service Standard (UK))](https://www.gov.uk/service-manual/measuring-success/measuring-cost-per-transaction)
- [Measuring completion rate (Digital Service Standard (UK))](https://www.gov.uk/service-manual/measuring-success/measuring-completion-rate)
- [Sharing data on the Performance Platform (Digital Service Standard (UK))](https://www.gov.uk/service-manual/measuring-success/sharing-your-data-with-the-performance-platform)
- [Measuring service performance (Digital Service Standard (AU))](https://www.dta.gov.au/standard/measuring-performance/)
- [Benefits of User-centered Design (Usability.gov (US))](https://www.usability.gov/what-and-why/benefits-of-ucd.html)
- [Measuring success (Service manual (UK))](https://www.gov.uk/service-manual/measuring-success)

</section>

<section class="dpgn-section-solutions">

### Solutions réutilisables

**[TODO: Ajouter / réviser les solutions réutilisables]**

- [Liste de contrôle d'autoévaluation de la qualité des producteurs de données (Trousse de la qualité des données (Statistique Canada (GC)))](https://www.statcan.gc.ca/fra/trousse-qualite-donnees/producteurs-donnees)
- [Liste de contrôle de l'évaluation de la qualité des utilisateurs de données (Trousse de la qualité des données (Statistique Canada (GC)))](https://www.statcan.gc.ca/fra/trousse-qualite-donnees/utilisateurs-donnees)

</section>

<section class="dpgn-section-similar">

### Ressources similaires

- [15. Collect performance data (Digital Service Standard (UK))](https://www.gov.uk/service-manual/service-standard/collect-performance-data)
- [13. Mesurer le rendement (Normes des services numériques (Ontario))](https://www.ontario.ca/fr/page/norme-des-services-numeriques#section-13)
- [11. Measure performance (Digital Service Standard (AU))](https://www.dta.gov.au/standard/11-measure-performance/)

**Digital Architectural Standards (GC):**
{: .dpgn-data-ignore}

- {: .dpgn-digital-architectural .dpgn-digital-architectural-keep-data-organized} [8. Keep Data Organized (Digital Architectural Standards (GC))](https://canada-ca.github.io/digital-playbook-guide-numerique/views-vues/gc-earb-ceai/fr/ceai-gc.html#keep-data-organized)

</section>
</section>

<section class="dpgn-section-guideline">

## 10.4 Tenir compte de la préservation et de la conservation numériques

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

- [Preserving digital collections (The National Archives (UK))](https://www.nationalarchives.gov.uk/archives-sector/advice-and-guidance/managing-your-collection/preserving-digital-collections/)
  - [How to get started (Preserving digital collections (The National Archives (UK)))](https://www.nationalarchives.gov.uk/archives-sector/advice-and-guidance/managing-your-collection/preserving-digital-collections/how-to-get-started/)
  - [Developing a digital preservation strategy and policy (Preserving digital collections (The National Archives (UK)))](https://www.nationalarchives.gov.uk/archives-sector/advice-and-guidance/managing-your-collection/preserving-digital-collections/developing-a-digital-preservation-strategy-and-policy/)
- [Sustainability of Digital Formats: Planning for Library of Congress Collections (US)](https://www.loc.gov/preservation/digital/formats/index.html)
  - [Formats, Evaluation Factors and Relationships (Sustainability of Digital Formats: Planning for Library of Congress Collections (US))](https://www.loc.gov/preservation/digital/formats/intro/format_eval_rel.shtml)
  - [Sustainability Factors (Sustainability of Digital Formats: Planning for Library of Congress Collections (US))](https://www.loc.gov/preservation/digital/formats/sustain/sustain.shtml)

</section>

<section class="dpgn-section-solutions">

### Solutions réutilisables

**[TODO: Ajouter / réviser les solutions réutilisables]**

- [Digital preservation tools (Preserving digital collections (The National Archives (UK)))](https://www.nationalarchives.gov.uk/archives-sector/advice-and-guidance/managing-your-collection/preserving-digital-collections/digital-preservation-tools/)

</section>
</section>
