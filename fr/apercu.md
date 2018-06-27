---
layout: default
title:  "Guide numérique du gouvernement du Canada (ébauche)"
lang: fr
altLang: en
altLangPage: overview
---
{% assign dataVariable = site.playbookData[page.lang] %}
{% assign dataSource = site.data[dataVariable] %}
<section class="dpgn-section-overview">

## Aperçu (ébauche)

Fournit des conseils pratiques et des projets pour aider les projets individuels à devenir plus agiles, ouverts et axés sur l'utilisateur.
{: .dpgn-overview-start}

<section class="dpgn-overview-start">

### Structure du guide numérique (ébauche)

Le guide numérique du gouvernement du Canada fournit des conseils pratiques et des projets pour aider les projets individuels à devenir plus agiles, ouverts et axés sur l'utilisateur en appliquant les normes numériques. Pour chaque norme, le guide propose un ensemble de directives. Pour chaque ligne directrice, le guide fournit une liste de contrôle pour respecter les lignes directrices, une liste de guides et d'autre contenu pour faciliter la mise en œuvre.

- **Normes** sont stratégiques et décrivent le comportement attendu.
- **Lignes directrices** sont tactiques et décrivent en termes généraux comment se passant selon les normes.
- **Listes de contrôle** comprennent des éléments qui sont opérationnels et décrivent en termes spécifiques pour faciliter la mise en œuvre de la ligne directrice.
- **Guides de mise en œuvre** fournissent des informations supplémentaires et détaillées sur des sous-thèmes spécifiques pour faciliter la mise en œuvre de la ligne directrice.
- **Solutions réutilisables** comprennent des modèles, des outils et d'autres solutions pour faciliter la mise en œuvre de la ligne directrice.
- **Ressources similaires** sont des sources d'informations (par exemple, des normes d'autres juridictions) qui sont similaires à la ligne directrice.

Le Guide numérique du gouvernement du Canada est disponible sous la [licence du gouvernement ouvert du Canada](https://ouvert.canada.ca/fr/licence-du-gouvernement-ouvert-canada), sauf indication contraire.

</section>

<section class="dpgn-data-ignore">

<!-- markdownlint-disable MD022 -->
### {{ dataSource.standards.title }}
{: .dpgn-data-ignore}
<!-- markdownlint-enable MD022 -->
  
{% include /functions/standard-links.html samePage=false listClasses="colcount-md-2 list-unstyled dpgn-data-ignore" linkClasses="btn btn-default btn-lg mrgn-bttm-md" subLinkClasses="btn-block text-left" %}

</section>

</section>

{% include views-vues.html lang=page.lang %}

<section class="dpgn-overview-end">

### À propos du guide numérique

<section class="dpgn-overview-end">
  
#### Objectif

L'objectif du guide numérique est de fournir des conseils détaillés sur la mise en œuvre des normes numériques, dont le but est de guider le gouvernement du Canada dans la transformation numérique et la prestation accrue de services. Le guide numérique est conçu pour être flexible et adaptable, aidant les utilisateurs à se concentrer sur les conseils les plus pertinents pour eux.

**Améliorer les services gouvernementaux à l’ère numérique.** Notre objectif est de fournir aux Canadiens des services publics facilement accessibles, intégrés et dignes de confiance. As a government, we need to move away from monolithic projects with rigid designs that are built in silos with minimal input from the user community. Ce guide numérique, ainsi que les normes numériques sur lesquels ce guide est fondé, constituent le fondement du virage du gouvernement du Canada vers une plus grande souplesse, une plus grande ouverture et une plus grande attention sur l’utilisateur. C’est un cheminement.

**Il faut tout un village.** Le but est de créer ce guide numérique conjointement avec le public et des groupes d’intervenants clés afin d’aider le gouvernement à concevoir et à offrir d’excellents services à ses citoyens. Nous avons la conviction qu’il sera nécessaire qu’une communauté d’individus ayant des antécédents et des points de vue différents se rassemble pour définir et contribuer à des conseils, des lignes directrices, des approches, des outils, et des histoires. Nous espérons faire de ce guide une œuvre aussi collaborative que possible. Et bien sûr, nous avons établi nos fondations en nous inspirant du travail de pionnier réalisé au Royaume-Uni, aux États-Unis, en Australie et dans la province de l’Ontario. Merci.

**Ensemble nous le ferons mieux.** Ceci est un guide vivant, et nous continuerons de le mettre à jour et de le faire évoluer au fil du temps à mesure que nous comprendrons mieux les complexités de leur mise en pratique. Nous nous attendons à ce que la communauté participe à l'amélioration du guide. Ce guide reflètera la façon dont nous ferons des conceptions pour nous-mêmes et pour les autres. Nous n’y arriverons pas seuls.

</section>

<section class="dpgn-overview-end">
  
#### Approche de mise en œuvre

L'approche du développement et de la diffusion du guide numérique sera similaire à celle de la Boîte à outils de l'expérience Web et de HTML5, où le guide numérique évolue constamment sur GitHub et où des clichés stables de ce travail sont publiés sous forme de versions officielles sur Canada.ca. Cela permet au guide numérique d'être agile et de s'améliorer constamment sur GitHub tout en offrant une version stable à travers Canada.ca sur laquelle on peut compter pour obtenir des conseils.

Les réactions de la communauté et les contributions au guide numérique sont encouragées, les réviseurs désignés pour chaque partie du guide numérique étant chargés d'examiner, de répondre, de demander des changements (au besoin) et d'approuver ou de refuser les commentaires et les contributions. Les examinateurs principaux sont des personnes provenant des secteurs de politiques connexes et des domaines d'expertise, et sont également chargés de contribuer au contenu et de s'engager auprès de leurs communautés respectives.

Pour s'assurer que le guide numérique soit aussi facile à utiliser que possible, les contributeurs / réviseurs travailleront avec leurs communautés respectives pour déterminer comment rendre le guide numérique plus applicable à leur travail quotidien, y compris pour quelles tâches / scénarios personnalisés les [vues du guide numérique](/digital-playbook-guide-numerique/docs/fr/vues.html) doivent être fournies.

</section>
</section>
