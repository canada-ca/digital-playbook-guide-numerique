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

<section class="dpgn-section-similar">

### Similar resources

- Tell me once - Data/Information centricity (GC EA Principles)

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

**\[TODO: Ajouter / réviser les éléments du guide de mise en œuvre\]**

- [Data on the Web Best Practices (W3C)](https://www.w3.org/TR/dwbp/)
  - [Machine-Readable Standardized Data Format (Data on the Web Best Practices (W3C))](https://www.w3.org/TR/dwbp/#MachineReadableStandardizedFormat)
  - [Local Neutral Data Representation (Data on the Web Best Practices (W3C))](https://www.w3.org/TR/dwbp/#LocaleParametersMetadata)
  - [Real Time Access (Data on the Web Best Practices (W3C))](https://www.w3.org/TR/dwbp/#AccessRealTime)

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

**Exemples d'introduction:**

**Digital Service Standard (UK):** Use tools for analysis that collect performance data. Use this data to analyse the success of the service and to translate this into features and tasks for the next phase of development.

Collecting performance data means you can continuously improve your service by:

- learning its strengths and weaknesses
- using the data to support improvements you make

**Digital Service Standard (Ontario):** Continuously capture and monitor performance data to inform ongoing service improvements.

### Why it matters

Measuring performance means continuously improving a service by:

- learning its strengths and weaknesses
- using data to support changes

**Digital Service Standard (AU):** Measure performance against KPIs set out in the guides. Report on public dashboard.

Every service must aim for continuous improvement. Metrics are an important starting point for discussions about a service’s strengths and weaknesses. By identifying and capturing the right metrics - with the right tools - you can make sure all your decisions to improve the service are supported by data.

</div>

<section class="dpgn-section-checklist">

### Liste de contrôle

**\[TODO: Ajouter / modifier les éléments de la liste de contrôle\]**

<section class="dpgn-section-stage dpgn-stage-alpha dpgn-stage-beta dpgn-stage-live">

#### Stages alpha, bêta et en direct

- determine the data you need to capture, where you need to capture it from and how you'll capture it based on the projected size and shape of the service **(Digital Service Standard (UK))** / determine data needs, sources and collection **(Digital Service Standard (Ontario))**
- have an ongoing roadmap for performance analysis and someone in the team responsible for identifying actionable data insights during alpha, including assisted digital support **(Digital Service Standard (UK))**
- use qualitative and quantitative data to help improve your understanding of user needs and identify areas for improvement **(Digital Service Standard (UK)) /** use qualitative and quantitative data to understand user needs and identify areas for change **(Digital Service Standard (Ontario))**
- choose suitable data analysis tools **(Digital Service Standard (UK))**
- address information security and privacy issues appropriately **(Digital Service Standard (UK))**
- map user journeys through the service and track them to identify completions and areas of poor performance **(Digital Service Standard (UK))**
- measure assisted digital support **(Digital Service Standard (UK))**
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

</section>

<section class="dpgn-section-stage dpgn-stage-alpha">

#### Stage alpha

- explored the data that is already available for an existing service, where it is kept and how you might access and use it, and also shared your own insights **(Digital Service Standard (AU))**
- collected baseline data for the service operation in all of its channels **(Digital Service Standard (AU))**
- estimated the number of people you expect to use the service **(Digital Service Standard (AU))**
- started creating a performance framework outlining your objectives and what metrics your team will use to demonstrate you meet them **(Digital Service Standard (AU))**
- considered the metrics you will need to measure the 4 KPIs and where the data will come from. **(Digital Service Standard (AU))**

</section>

<section class="dpgn-section-stage dpgn-stage-beta">

#### Stage bêta

- discuss a start page and feedback page with GOV.UK **(Digital Service Standard (UK))**
- which metrics and measurements you will use to monitor your KPIs **(Digital Service Standard (AU))**
- the baseline measures and the benchmarks for success **(Digital Service Standard (AU))**
- that the team is ready to report their performance on the Performance Dashboard **(Digital Service Standard (AU))**
- which tools you use for analysis and web analytics in Beta (and Alpha if appropriate) **(Digital Service Standard (AU))**
- what you have learned from qualitative and quantitative data; for example key evidence. **(Digital Service Standard (AU))**

</section>

<section class="dpgn-section-stage dpgn-stage-live">

#### Stage en direct

- collect feedback from users, during and after their user journey **(Digital Service Standard (UK))**
- use web analytics to capture information about user behaviour online **(Digital Service Standard (Ontario))**
- monitor and evaluate user feedback and complaints from the digital service and other service touch-points such as phone and in person **(Digital Service Standard (Ontario))**
- analyze performance and identify actionable data insights as early as possible **(Digital Service Standard (Ontario))**
- define performance metrics for the service up-front, early on in the design process **(Digital Service Standard (Ontario))**
- regularly review the technology used to provide the service and the processes that support the service **(Digital Service Standard (Ontario))**
- base your service review frequency on the volume of users ( e.g. 10,000 or less unique users per year = 2 year review cycle;
    10,000-100,000 = annual; 100,000-1 million = every 6 months) **(Digital Service Standard (Ontario))**
- use data to determine the cost per use for each channel, accounting for the cost to build and ongoing maintenance as well **(Digital Service Standard (Ontario))**
- demonstrate how service performance compares to other similar government and private sector services **(Digital Service Standard (Ontario))**
- share your review findings with leadership **(Digital Service Standard (Ontario))**
- Your data should show: **(Digital Service Standard (AU))**
  - user satisfaction has increased
  - digital take-up is increasing in line with service plans
  - completion rate has been maintained
  - cost per transaction is decreasing in line with service plans.

</section>
</section>

<section class="dpgn-section-guides">

### Guides d'implémentation

**\[TODO: Ajouter / réviser les éléments du guide de mise en œuvre\]**

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

<section class="dpgn-section-similar">

### Ressources similaires

- [15. Collect performance data (Digital Service Standard (UK))](https://www.gov.uk/service-manual/service-standard/collect-performance-data)
- [13. Mesurer le rendement (Normes des services numériques (Ontario))](https://www.ontario.ca/fr/page/norme-des-services-numeriques#section-14)
- [11. Measure performance (Digital Service Standard (AU))](https://www.dta.gov.au/standard/11-measure-performance/)

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
  - [Digital preservation tools (Preserving digital collections (The National Archives (UK)))](https://www.nationalarchives.gov.uk/archives-sector/advice-and-guidance/managing-your-collection/preserving-digital-collections/digital-preservation-tools/)
- [Sustainability of Digital Formats: Planning for Library of Congress Collections (US)](https://www.loc.gov/preservation/digital/formats/index.html)
  - [Formats, Evluation Factors and Relationships (Sustainability of Digital Formats: Planning for Library of Congress Collections (US))](https://www.loc.gov/preservation/digital/formats/intro/format_eval_rel.shtml)
  - [Sustainability Factors (Sustainability of Digital Formats: Planning for Library of Congress Collections (US))](https://www.loc.gov/preservation/digital/formats/sustain/sustain.shtml)

</section>
</section>

<section class="dpgn-section-guideline">

## 10.5 Assurer les données et dans la formation est complète, précise et à jour

<div class="dpgn-section-intro-guideline">

**\[TODO: Ajouter / réviser le texte d'introduction\]**

</div>

<section class="dpgn-section-checklist">

### Liste de contrôle

**\[TODO: Ajouter / modifier les éléments de la liste de contrôle\]**

- {: .dpgn-onegc-architectural } Data is the new gold **(Build It Right - OneGC Architectural Checklist (draft))**
  - Make certain that data is complete, authoritative, accurate, and timely to ensure a high level of data quality
  - Ensure data is able to be shared and can be easily accessed

</section>

<section class="dpgn-section-guides">

### Guides d'implémentation

**\[TODO: Ajouter / réviser les éléments du guide de mise en œuvre\]**

</section>

<section class="dpgn-section-similar">

### Similar resources

- Information/Data is an asset (Current GC EARB Principles)
- {: .dpgn-onegc-architectural } Data is the new gold (OneGC Architectural Checklist - Build It Right (draft))

</section>
</section>

<section class="dpgn-section-guideline">

## 10.6 Assurez-vous que les données sont bien structurées, intuitives et dans un format facile à intégrer et réutiliser par d'autres

<div class="dpgn-section-intro-guideline">

**\[TODO: Ajouter / réviser le texte d'introduction\]**

</div>

<section class="dpgn-section-checklist">

### Liste de contrôle

**\[TODO: Ajouter / modifier les éléments de la liste de contrôle\]**

- Design data to have clear and simple semantics to make common tasks easy. Rare tasks should still be possible but not the focus. Avoid being overly general, optimizing specific use cases.
- Design data to be intuitive so that a semi-experienced user can be successful with minimal assistance from the documentation and programmers can easily integrate and reuse it.
- Design data with a consistent and precise naming convention. Use plain language and recognizable patterns and concepts, avoiding abbreviations where possible.

</section>

<section class="dpgn-section-guides">

### Guides d'implémentation

**\[TODO: Ajouter / réviser les éléments du guide de mise en œuvre\]**

</section>
</section>
