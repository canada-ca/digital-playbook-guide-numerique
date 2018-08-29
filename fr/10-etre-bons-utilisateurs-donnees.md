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

</section>

<section class="dpgn-section-guides">

### Guides d'implémentation

- {: .dpgn-digital-architectural .dpgn-digital-architectural-keep-data-organized} [Data on the Web Best Practices (W3C)](https://www.w3.org/TR/dwbp/)
  - [Machine-Readable Standardized Data Format (Data on the Web Best Practices (W3C))](https://www.w3.org/TR/dwbp/#MachineReadableStandardizedFormat)
  - {: .dpgn-digital-architectural .dpgn-digital-architectural-keep-data-organized} [Local Neutral Data Representation (Data on the Web Best Practices (W3C))](https://www.w3.org/TR/dwbp/#LocaleParametersMetadata)
  - {: .dpgn-digital-architectural .dpgn-digital-architectural-keep-data-organized} [Real Time Access (Data on the Web Best Practices (W3C))](https://www.w3.org/TR/dwbp/#AccessRealTime)
- [Preserving digital collections (The National Archives (UK))](https://www.nationalarchives.gov.uk/archives-sector/advice-and-guidance/managing-your-collection/preserving-digital-collections/)
  - [How to get started (Preserving digital collections (The National Archives (UK)))](https://www.nationalarchives.gov.uk/archives-sector/advice-and-guidance/managing-your-collection/preserving-digital-collections/how-to-get-started/)
  - [Developing a digital preservation strategy and policy (Preserving digital collections (The National Archives (UK)))](https://www.nationalarchives.gov.uk/archives-sector/advice-and-guidance/managing-your-collection/preserving-digital-collections/developing-a-digital-preservation-strategy-and-policy/)
- [Sustainability of Digital Formats: Planning for Library of Congress Collections (US)](https://www.loc.gov/preservation/digital/formats/index.html)
  - [Formats, Evaluation Factors and Relationships (Sustainability of Digital Formats: Planning for Library of Congress Collections (US))](https://www.loc.gov/preservation/digital/formats/intro/format_eval_rel.shtml)
  - [Sustainability Factors (Sustainability of Digital Formats: Planning for Library of Congress Collections (US))](https://www.loc.gov/preservation/digital/formats/sustain/sustain.shtml)

</section>

<section class="dpgn-section-solutions">

### Solutions réutilisables

- [Digital preservation tools (Preserving digital collections (The National Archives (UK)))](https://www.nationalarchives.gov.uk/archives-sector/advice-and-guidance/managing-your-collection/preserving-digital-collections/digital-preservation-tools/)

</section>

<section class="dpgn-section-similar">

### Ressources similaires

- [12. Use data to drive decisions (Digital Services Playbook (US))](https://playbook.cio.gov/#play12)

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

- Assurez-vous que les données sont bien structurées, intuitives et dans un format facile à intégrer et réutiliser par d'autres
- Design data to have clear and simple semantics to make common tasks easy. Rare tasks should still be possible but not the focus. Avoid being overly general, optimizing specific use cases.
- Design data to be intuitive so that a semi-experienced user can be successful with minimal assistance from the documentation and programmers can easily integrate and reuse it.
- Design data with a consistent and precise naming convention. Use plain language and recognizable patterns and concepts, avoiding abbreviations where possible.

</section>

<section class="dpgn-section-guides">

### Guides d'implémentation

- [Trousse de la qualité des données (Statistique Canada (GC))](https://www.statcan.gc.ca/fra/trousse-qualite-donnees)
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

- [Liste de contrôle d'autoévaluation de la qualité des producteurs de données (Trousse de la qualité des données (Statistique Canada (GC)))](https://www.statcan.gc.ca/fra/trousse-qualite-donnees/producteurs-donnees)
- [Liste de contrôle de l'évaluation de la qualité des utilisateurs de données (Trousse de la qualité des données (Statistique Canada (GC)))](https://www.statcan.gc.ca/fra/trousse-qualite-donnees/utilisateurs-donnees)

</section>

<section class="dpgn-section-similar">

### Ressources similaires

- [15. Collect performance data (Digital Service Standard (UK))](https://www.gov.uk/service-manual/service-standard/collect-performance-data)
- [13. Mesurer le rendement (Normes des services numériques (Ontario))](https://www.ontario.ca/fr/page/norme-des-services-numeriques#section-13)

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

- [Preserving digital collections (The National Archives (UK))](https://www.nationalarchives.gov.uk/archives-sector/advice-and-guidance/managing-your-collection/preserving-digital-collections/)
  - [How to get started (Preserving digital collections (The National Archives (UK)))](https://www.nationalarchives.gov.uk/archives-sector/advice-and-guidance/managing-your-collection/preserving-digital-collections/how-to-get-started/)
  - [Developing a digital preservation strategy and policy (Preserving digital collections (The National Archives (UK)))](https://www.nationalarchives.gov.uk/archives-sector/advice-and-guidance/managing-your-collection/preserving-digital-collections/developing-a-digital-preservation-strategy-and-policy/)
- [Sustainability of Digital Formats: Planning for Library of Congress Collections (US)](https://www.loc.gov/preservation/digital/formats/index.html)
  - [Formats, Evaluation Factors and Relationships (Sustainability of Digital Formats: Planning for Library of Congress Collections (US))](https://www.loc.gov/preservation/digital/formats/intro/format_eval_rel.shtml)
  - [Sustainability Factors (Sustainability of Digital Formats: Planning for Library of Congress Collections (US))](https://www.loc.gov/preservation/digital/formats/sustain/sustain.shtml)

</section>

<section class="dpgn-section-solutions">

### Solutions réutilisables

- [Digital preservation tools (Preserving digital collections (The National Archives (UK)))](https://www.nationalarchives.gov.uk/archives-sector/advice-and-guidance/managing-your-collection/preserving-digital-collections/digital-preservation-tools/)

</section>
</section>
