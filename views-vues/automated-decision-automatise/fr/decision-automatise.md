---
layout: default
title: Comment dois-je mettre en place un système de décision automatisé? (ébauche)
lang: fr
altLang: en
altLangPage: automated-decision
collectionDirectory: views-vues/automated-decision-automatise
---
{% assign dataVariable = site.playbookData[page.lang] %}{%
assign dataSource = site.data[dataVariable] %}

Cette page fournit des conseils personnalisés sur la façon dont les projets peuvent mettre en œuvre un système de décision automatisé.

Le gouvernement du Canada envisage de plus en plus d’utiliser la technologie et les systèmes automatisés afin de prendre, ou aider à prendre, des décisions administratives, pour améliorer la prestation des services. Il s’engage à le faire d’une manière qui est compatible avec les principes de base du droit administratif comme la transparence, la responsabilisation, la légalité et l’équité procédurale.
{: data-dpgn-data-include='{ "standard": "8", "section": "introduction" }' data-content-source-uri="{{ site.AutomatedDecisionSystems.DirectiveURL[ page.lang ] }}" data-content-source-title="Introduction, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}" .dpgn-automated-decision}

<!-- markdownlint-disable MD032 -->
- TOC
{:toc .lst-spcd}
<!-- markdownlint-enable MD032 -->

<details>
<summary markdown="0">Filtres (spécifique à la page)</summary>
<form action="#" method="post" class="wb-contentfilter">
<fieldset>
<legend>Type de système de décision automatisé</legend>
<ul class="list-unstyled">
<li><input type="checkbox" id="dpgn-automated-decision-type-file-triage-assignment" /> <label for="dpgn-automated-decision-type-file-triage-assignment">Classer les cas en fonction du risque et de la priorité</label></li>
<li><input type="checkbox" id="dpgn-automated-decision-type-risk-scoring-categorization" /> <label for="dpgn-automated-decision-type-risk-scoring-categorization">Déterminer les cas pour l’enquête ou l’examen humain</label></li>
<li><input type="checkbox" id="dpgn-automated-decision-type-recommendation" /> <label for="dpgn-automated-decision-type-recommendation">Fournir des recommandations concernant l’approbation d’une demande</label></li>
<li><input type="checkbox" id="dpgn-automated-decision-type-full-decision" /> <label for="dpgn-automated-decision-type-full-decision">Rendre la décision administrative exhaustive</label></li>
</ul>
</fieldset>

<fieldset>
<legend>Niveau d'impact</legend>
<ul class="list-unstyled">
<li><input type="checkbox" id="dpgn-automated-decision-level-i" /> <label for="dpgn-automated-decision-level-i">Niveau I</label></li>
<li><input type="checkbox" id="dpgn-automated-decision-level-ii" /> <label for="dpgn-automated-decision-level-ii">Niveau II</label></li>
<li><input type="checkbox" id="dpgn-automated-decision-level-iii" /> <label for="dpgn-automated-decision-level-iii">Niveau III</label></li>
<li><input type="checkbox" id="dpgn-automated-decision-level-iv" /> <label for="dpgn-automated-decision-level-iv">Niveau IV</label></li>
</ul>

<details>
<summary markdown="0">Détails du niveau d'impact</summary>
<dl>
<dt>Niveau I</dt>
<dd>
<p><strong>La décision a peu ou pas de répercussions sur les droits ou les intérêts d’une personne, d’une entité ou d’un organisme gouvernemental.</strong></p>
<p>On peut raisonnablement considérer qu’une décision erronée n’entraînerait aucun dommage ou entraînerait des dommages minimes.</p>
</dd>
<dt>Niveau II</dt>
<dd>
<p><strong>La décision a une incidence modérée sur les droits ou les intérêts d’une personne, d’une entité ou d’un organisme gouvernemental.</strong></p>
<p>On peut raisonnablement considérer que la compromission entraînerait des dommages de minimes à modérés.</p>
</dd>
<dt>Niveau III</dt>
<dd>
<p><strong>La décision a une incidence élevée sur les droits ou les intérêts d’une personne, d’une entité ou d’un organisme gouvernemental.</strong></p>
<p>On peut raisonnablement considérer que la compromission entraînerait des dommages modérés à graves.</p>
</dd>
<dt>Niveau IV</dt>
<dd>
<p><strong>La décision a une incidence très élevée sur les droits ou les intérêts d’une personne, d’une entité ou d’un organisme gouvernemental.</strong></p>
<p>On peut raisonnablement considérer que la compromission entraînerait des dommages graves à catastrophiques.</p>
</dd>
</dl>
</details>
</fieldset>
<input type="button" value="{{ site.ApplyFilters[page.lang] }}" class="btn btn-primary contentfilter-button" />
</form>
</details>

<section>

## 1. Initiation

<!-- markdownlint-disable MD032 -->
<!-- markdownlint-disable MD034 -->
- {: data-dpgn-data-include='{ "guideline": "8.2", "section": "checklist" }' data-content-source-title="Section 6.1.1, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Mener une [{{ site.AutomatedDecisionSystems.ImpactAssessment[ page.lang ] | downcase }}]({{ site.AutomatedDecisionSystems.ImpactAssessmentURL[ page.lang ] }}) avant la production tout système décisionnel automatisé.
- {: data-dpgn-data-include='{ "guideline": "8.3", "section": "checklist" }' data-content-source-title="Section 6.1.2, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Appliquer les exigences suivanteses, comme l'a déterminé l'[{{ site.AutomatedDecisionSystems.ImpactAssessment[ page.lang ] | downcase }}]({{ site.AutomatedDecisionSystems.ImpactAssessmentURL[ page.lang ] }}):
  - {: data-content-source-title="Annexe C, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Exigence d'approbation&#160;:
    - {: .dpgn-automated-decision-level-i} **Niveau I :** Aucune
    - {: .dpgn-automated-decision-level-ii} **Niveau II :** Conseil d'examen de l'architecture intégrée du gouvernement du Canada
    - {: .dpgn-automated-decision-level-iii} **Niveau III :** Conseil d'examen de l'architecture intégrée du gouvernement du Canada
    - {: .dpgn-automated-decision-level-iv} **Niveau IV :**
      - Conseil d'examen de l'architecture intégrée du gouvernement du Canada
      - Exige une autorisaton particulière du Conseil du Trésor
- {: data-dpgn-data-include='{ "guideline": "8.2", "section": "checklist" }' data-content-source-title="Section 6.1.3, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} S'assurer que l'[{{ site.AutomatedDecisionSystems.ImpactAssessment[ page.lang ] | downcase }}]({{ site.AutomatedDecisionSystems.ImpactAssessmentURL[ page.lang ] }}) demeure à jour et tient compte de manière exacte des fonctionnalités du système décisionnel automatisé.
- {: data-dpgn-data-include='{ "guideline": "5.1", "section": "checklist" }' data-content-source-title="Section 6.1.4, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Diffuser les résultats finaux des évaluations d'impact algorithmique dans un format accessible au moyen des sites Web et des services du gouvernement du Canada et des services désignés par le Sécretariat du Conseil du Trésor du Canada (SCT) conformément à la [Directive sur le gouvernement ouvert](https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=28108).
{: data-content-source-uri="{{ site.AutomatedDecisionSystems.DirectiveURL[ page.lang ] }}" .dpgn-automated-decision-initiation .dpgn-automated-decision}
<!-- markdownlint-enable MD034 -->
<!-- markdownlint-enable MD032 -->

{% include /functions/output-sections.html parentHeadingLevel="2" relevantTags="dpgn-automated-decision-initiation" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>

<section>

## 2. Analyse / approche

<!-- markdownlint-disable MD032 -->
<!-- markdownlint-disable MD034 -->
- {: data-dpgn-data-include='{ "guideline": "8.3", "section": "checklist" }' data-content-source-title="Section 6.3.8, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Consulter l'unité des services jurisdiques de l'institution, pour veiller à ce que l'utilisation du système décisionnel automatisé soit conforme aux exigences juridiques applicables.
- {: data-dpgn-data-include='{ "guideline": "9.4", "section": "checklist" }' data-content-source-title="Section 6.3.7, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Effectuer des évaluations des risques tout au long de l'élaboration du système et s'assurer des mesures de protection appropriées à appliquer, conformément à la [Politique sur la sécurité du gouvernement](https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=16578).
{: data-content-source-uri="{{ site.AutomatedDecisionSystems.DirectiveURL[ page.lang ] }}" .dpgn-automated-decision-analysis-approach .dpgn-automated-decision}
<!-- markdownlint-enable MD034 -->
<!-- markdownlint-enable MD032 -->

{% include /functions/output-sections.html parentHeadingLevel="2" relevantTags="dpgn-automated-decision-analysis-approach" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>

<section>

## 3. Conception / construction

<!-- markdownlint-disable MD032 -->
<!-- markdownlint-disable MD034 -->
- {: data-dpgn-data-include='{ "guideline": "3.1", "section": "checklist" }' data-content-source-title="Section 6.3.4 et Annexe C, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Conserver les experts suivants pour examiner le système décisionnel automatisé, en fonction du niveau d'évaluation de l'impact&#160;:
  - {: .dpgn-automated-decision-level-i} **Niveau I :** Aucune
  - {: .dpgn-automated-decision-level-ii} **Niveau II :** Au moins l'une des suivantes&#160;:
    - Expert qualifié d'une institution gouvernementale fédérale, provinciale, territoriale ou municipale
    - Membres qualifiés d'une faculté d'un établissement postsecondaire
    - Chercheurs qualifiés d'une organisation non gouvernementale pertinente
    - Tiers fournisseur à forfait avec une spécialisation connexe
    - Publication des spécifications du système décisionnel automatisé dans une revue à comité de lecture
  - {: .dpgn-automated-decision-level-iii} **Niveau III :** Au moins l'une des suivantes&#160;:
    - Expert qualifié d'une institution gouvernementale fédérale, provinciale, territoriale ou municipale
    - Membres qualifiés d'une faculté d'un établissement postsecondaire
    - Chercheurs qualifiés d'une organisation non gouvernementale pertinente
    - Tiers fournisseur à forfait avec une spécialisation connexe
    - Publication des spécifications du système décisionnel automatisé dans une revue à comité de lecture
  - {: .dpgn-automated-decision-level-iv} **Niveau IV :** Au moins deux des suivantes&#160;:
    - Experts qualifiés du Conseil national de recherches du Canada ou de Statistique Canada
    - Membres qualifiés d'une faculté d'un établissement postsecondaire
    - Chercheurs qualifiés d'une organisation non gouvernementale pertinente
    - Tiers fournisseur à forfait avec une spécialisation connexe
    - **OU :** Publication des spécifications du système décisionnel automatisé dans une revue à comité de lecture
- {: data-dpgn-data-include='{ "guideline": "4.1", "section": "checklist" } data-content-source-title="Section 6.3.5 et Annexe C, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} S'assurer que les employés pertinents sont suffisament formés lors de la conception, de la fonction et de la mise en œuvre du système décisionnel automatisé pour être en mesure d'examiner, d'expliquer et de superviser le processus décisionnel automatisé, comme il est prescrit dans ce qui suit&#160;:
  - {: .dpgn-automated-decision-level-i} **Niveau I :** Aucune
  - {: .dpgn-automated-decision-level-ii} **Niveau II :** Documents sur la conception et la fonctionnalité du système
  - {: .dpgn-automated-decision-level-iii} **Niveau III :**
    - Documents sur la conception et la fonctionnalité du système
    - Il faut suive des cours de formation.
  - {: .dpgn-automated-decision-level-iv} **Niveau IV :**
    - Documents sur la conception et la fonctionnalité du système
    - Cours de formation récurrents.
    - Un moyen de vérifier que la formation a été suivie.
{: data-content-source-uri="{{ site.AutomatedDecisionSystems.DirectiveURL[ page.lang ] }}" .dpgn-automated-decision-design-build .dpgn-automated-decision}
<!-- markdownlint-enable MD034 -->
<!-- markdownlint-enable MD032 -->

{% include /functions/output-sections.html parentHeadingLevel="2" relevantTags="dpgn-automated-decision-design-build" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>

<section>

## 4. Déploiement / opération

<!-- markdownlint-disable MD032 -->
<!-- markdownlint-disable MD034 -->
- {: data-dpgn-data-include='{ "guideline": "5.1", "section": "checklist" } data-content-source-title="Section 6.2.3, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Mettre à la disposition du public tous les codes sources utilisés pour le système décisionnel automatisé sur l'[Échange de ressources ouvert](https://canada-ca.github.io/ore-ero/accueil.html).
- {: data-dpgn-data-include='{ "guideline": "5.1", "section": "checklist" } data-content-source-title="Section 6.2.4, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Dans les cas où l'on considère le code source ne devrait pas être divulgué, obtenir l'approbation du Comité d'examen de l'architecture intégrée de l'exonérer de la divulgatio. Dans ces cas, la justification pour expliquer pourquoi le code n'a pas été divulgué doit être publiée selon la processus prévu dans la [Directive sur le gouvernement ouvert](https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=28108).
- {: data-dpgn-data-include='{ "guideline": "5.1", "section": "checklist" } data-content-source-title="Section 6.2.5, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Le code source pour les systèmes qui sont classés SECRET ou TRÈS SECRET est exempté de le mettre à la dispostion du public sur l'Échange de ressources ouvert.
- {: data-dpgn-data-include='{ "guideline": "5.1", "section": "checklist" } data-content-source-title="Section 6.2.6, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} S'assurer que toutes les licences nécessaires pour les systèmes décisionnels automaisés sont ouvertes comme énumérées dans le [Registre des logiciels de source libre](https://drive.google.com/open?id=1xISkyXdlFVw5cZv91SKQSVJ88R5OtmPLp33NeH28PQY).
- {: data-dpgn-data-include='{ "guideline": "5.1", "section": "checklist" } data-content-source-title="Section 6.2.7, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Veiller à ce que le Canada conserve le droit d'avoir accès à une propriété intellectuelle originale pour répondre à toutes les contestations judiciaires.
- {: data-dpgn-data-include='{ "guideline": "6.1", "section": "checklist" } data-content-source-title="Section 6.3.1, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Avant d'entrer en production, élaborer les processus appropriés afin de s'assurer que les données d'apprentissage sont évaluées pour la présence de biais imprévus dans les données et d'autres facteurs qui pourraient influencer injustement les résultats.
- {: data-dpgn-data-include='{ "guideline": "8.1", "section": "checklist" } data-content-source-title="Section 6.2.1 et Annexe C, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Informer les personnes touchées que la décision rendue sera prise en totalité ou en partie par un système décisionnel automatisé comme prescrit dans ce qui suit&#160;:
  - {: .dpgn-automated-decision-level-i} **Niveau I :** Aucune
  - {: .dpgn-automated-decision-level-ii} **Niveau II :** Avis en langage simple affiché sur le site Web du programme ou du service.
  - {: .dpgn-automated-decision-level-iii} **Niveau III :**
    - Avis en langage simple affiché sur le site Web du programme ou du service.
    - Si le service comprend une demande en ligne, l'avis doit être fait au moment de la présentation de la demande.
    - Le site Web doit renvoyer à des renseignements supplémentaires où des renseignements sur le système l'information sont fournis, y compris&#160;:
      - le rôle que le système décisionnel automatisé a dans le processus décisonnel;
      - une description des données d'apprentissage ou un lien vers les données d'apprentissage anonymisées si ces données sont publiquement disponibles;
      - une description des critères utilisés pour rendre la décision, y compris les règles administratives pertinentes.
  - {: .dpgn-automated-decision-level-iv} **Niveau IV :**
    - Avis en langage simple affiché sur le site Web du programme ou du service.
    - Si le service comprend une demande en ligne, l'avis doit être fait au moment de la présentation de la demande.
    - Le site Web doit renvoyer à des renseignements supplémentaires où des renseignements sur le système l'information sont fournis, y compris&#160;:
      - le rôle que le système décisionnel automatisé a dans le processus décisonnel;
      - une description des données d'apprentissage ou un lien vers les données d'apprentissage anonymisées si ces données sont publiquement disponibles;
      - une description des critères utilisés pour rendre la décision, y compris les règles administratives pertinentes.
- {: data-dpgn-data-include='{ "guideline": "8.1", "section": "checklist" } data-content-source-title="Section 6.2.2, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Fournir une explication significative aux personnes touchées de la façon dont la décision a été prise et de la raison pour laquelle elle a été prise, comme le prescrit ce qui suit&#160;:
  - {: .dpgn-automated-decision-type-file-triage-assignment .dpgn-automated-decision-type-risk-scoring-categorization data-content-source-title="Annexe C, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Explication de l'exigence pour la recommendation&#160;:
    - {: .dpgn-automated-decision-level-i} **Niveau I :** Aucune
    - {: .dpgn-automated-decision-level-ii} **Niveau II :** Aucune
    - {: .dpgn-automated-decision-level-iii} **Niveau III :** Explication significative fournie sur demande fondée sur l'examen mené par une machine ou un humain.
    - {: .dpgn-automated-decision-level-iv} **Niveau IV :**
      - Explication significative, y compris les variables utilisées dans la décision, fournie avec la décision prise.
      - L'explication peut être générée par un humain ou une machine.
  - {: .dpgn-automated-decision-type-recommendation .dpgn-automated-decision-type-full-decision data-content-source-title="Annexe C, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Explication de l'exigence pour les décisions&#160;:
    - {: .dpgn-automated-decision-level-i} **Niveau I :** Une explication fournie sur demande fondée sur l'examen mené par une machine ou un humain. Cela peut inclure la section de la foire aux questions d'un site Web.
    - {: .dpgn-automated-decision-level-ii} **Niveau II :** Explication significative fournie sur demande fondée sur l'examen mené par une machine ou un humain.
    - {: .dpgn-automated-decision-level-iii} **Niveau III :**
      - Explication significative, y compris les variables utilisées dans la décision, fournie avec la décision prise.
      - L'explication peut être générée par un humain ou une machine.
    - {: .dpgn-automated-decision-level-iv} **Niveau IV :**
      - Explication significative, y compris les variables utilisées dans la décision, fournie avec la décision prise.
      - L'explication peut être générée par un humain ou une machine.
- {: data-dpgn-data-include='{ "guideline": "8.3", "section": "checklist" } data-content-source-title="Section 6.4.1, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Fournir aux personnes concernées des renseignements sur les options qui s'offrent à eux pour des recours afin de contester la décision ou la recommendation automatisée.
- {: data-dpgn-data-include='{ "guideline": "8.4", "section": "checklist" } data-content-source-title="Section 6.3.6 and Appendix C, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Sous réservé des exigences prescrites dans ce qui suit, veiller à ce que des processus ou des systèmes d'urgence soient disponibles si le système décisionnel automatisé est indisponible pour une période prolongée&#160;:
  - {: .dpgn-automated-decision-level-i} **Niveau I :** Aucune
  - {: .dpgn-automated-decision-level-ii} **Niveau II :** Aucune
  - {: .dpgn-automated-decision-level-iii} **Niveau III :** Veiller à ce que des plans d'urgence ou des systèmes de secours soient disponibles si le système décisionnel automatisé est indisponible.
  - {: .dpgn-automated-decision-level-iv} **Niveau IV :** Veiller à ce que des plans d'urgence ou des systèmes de secours soient disponibles si le système décisionnel automatisé est indisponible.
{: data-content-source-uri="{{ site.AutomatedDecisionSystems.DirectiveURL[ page.lang ] }}" .dpgn-automated-decision-deployment-operation .dpgn-automated-decision}
<!-- markdownlint-enable MD034 -->
<!-- markdownlint-enable MD032 -->

{% include /functions/output-sections.html parentHeadingLevel="2" relevantTags="dpgn-automated-decision-deployment-operation" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}
</section>

<section>

## 5. Évaluation

<!-- markdownlint-disable MD032 -->
<!-- markdownlint-disable MD034 -->
- {: data-dpgn-data-include='{ "guideline": "5.3", "section": "checklist" } data-content-source-title="Section 6.3.2, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Surveiller les résultats des systèmes décisionnels automatisés de façon continue afin de prévenir les résultats non intentionnels et assurer la conformité aux lois liées aux institutions et aux programmes, ainsi qu'à la [{{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}]({{ site.AutomatedDecisionSystems.DirectiveURL[ page.lang ] }}).
- {: data-dpgn-data-include='{ "guideline": "5.3", "section": "checklist" } data-content-source-title="Section 6.5.1, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Publier des renseignements sur le'efficacité et l'efficience des systèmes décisionnels automatisés chaqu année dans un site Web ou un service désigné par le Conseil du Trésor du Canada.
- {: data-dpgn-data-include='{ "guideline": "10.2", "section": "checklist" } data-content-source-title="Section 6.3.3, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Veiller à ce que les données utilisées par le système décisionnel automatisé soient régulièrement mises à l'essai pour s'assurer qu'elles sont toujours pertinentes, exactes et à jour, et respectent toute politique ou directive liée aux pratiques de gestion des données conformément à la [Politique sur la gestion de l'information](https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=12742).
- {: data-dpgn-data-include='{ "guideline": "10.2", "section": "checklist" } data-content-source-title="Section 6.5.2, {{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}"} Sur demande, fournir des renseignements sur l'atteinte des résultats escomptés du système décisionnel automatisé et la conformité à la [{{ site.AutomatedDecisionSystems.Directive[ page.lang ] }}]({{ site.AutomatedDecisionSystems.DirectiveURL[ page.lang ] }}) au SCT.
{: data-content-source-uri="{{ site.AutomatedDecisionSystems.DirectiveURL[ page.lang ] }}" .dpgn-automated-decision-evaluation .dpgn-automated-decision}
<!-- markdownlint-enable MD034 -->
<!-- markdownlint-enable MD032 -->

{% include /functions/output-sections.html parentHeadingLevel="2" relevantTags="dpgn-automated-decision-evaluation" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>
