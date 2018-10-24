---
layout: default
title: Approches expérimentales et composants réutilisables
lang: fr
altLang: en
altLangPage: experimental-approaches-reusable-components
collectionDirectory: docs
---
{::options toc_levels="2..3" /}

L'un des objectifs du guide numérique était d'expérimenter avec de nouvelles approches tout en réutilisant le plus que possible. L'objectif était d'être agnostique sur les platformes, en se concentrant sur le HTML, le CSS et JavaScript tout en exploitant au maximum la [Boîte à outils de l'expérience Web (BOEW)](https://wet-boew.github.io/wet-boew/index-fr.html). Lorsque les exigences ont dépassé ce qui a été offert par la BOEW, l'objectif était de développer des composants réutilisables qui pourraient être contribués à la BOEW pour les autres à utiliser.

Les sections suivantes incluent des exemples d'approches expérimentales et de composants réutilisables résultant des travaux sur le guide numérique.

<!-- markdownlint-disable MD032 -->
- TOC
{:toc .lst-spcd}
<!-- markdownlint-enable MD032 -->

## Composants d'interface

Les composants d'interface de cette section utilisent des fonctions JavaScript réutilisables et sont contrôlés via des données JSON imbriquées dans un balisage HTML.

### Enregistrer la progression du formulaire dans un fichier

#### Composants impliqués

<!-- markdownlint-disable MD032 -->
- handleEvent (assets-atouts/js/format-gen.js) - Si déclenché par un événement
- outputFile (assets-atouts/js/format-gen.js)
- getFormFieldStatus (assets-atouts/js/format-gen.js) - Si la progression du formulaire doit être extrait en utilisant l'état actuel des champs de formulaire
- retrieveData (assets-atouts/js/format-gen.js) - Si la progresion du formulaire doit être extrait de sessionStorage, localStorage ou d'un attribute de données
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

#### Exemple d'implémentation

<!-- markdownlint-disable MD032 -->
- [Évaluation d'impact algorithmique]({{ site.baseurl }}/views-vues/automated-decision-automatise/fr/evaluation-impact-algorithmique.html) - Extraire la progression du formulaire en utilisant l'état actuel des champs de formulaire
- [Outil de categorisation de sécurité]({{ site.baseurl }}/views-vues/security-securite/fr/outil-categorisation.html) - Extraire la progression du formulaire de sessionStorage
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

### Restaurer la progression du formulaire à partir d'un fichier

#### Composants impliqués

<!-- markdownlint-disable MD032 -->
- handleEvent (assets-atouts/js/format-gen.js) - Si déclenché par un événement
- inputFile (assets-atouts/js/format-gen.js)
- setFormFieldStatus (assets-atouts/js/format-gen.js) - Si vous restaurez la progression directement dans un formulaire HTML
- storeData (assets-atouts/js/format-gen.js) - Si vous restaurez la progression via sessionStorage ou localStorage (où l'état de la forme dépend du stockage)
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

#### Exemple d'implémentation

<!-- markdownlint-disable MD032 -->
- [Évaluation d'impact algorithmique]({{ site.baseurl }}/views-vues/automated-decision-automatise/fr/evaluation-impact-algorithmique.html) - Restoring progress directly through an HTML form
- [Outil de categorisation de sécurité]({{ site.baseurl }}/views-vues/security-securite/fr/outil-categorisation.html) - Restoring progress through sessionStorage
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

### Téléchargement de données sous forme de fichier

#### Composants impliqués

<!-- markdownlint-disable MD032 -->
- handleEvent (assets-atouts/js/format-gen.js) - Si déclenché par un événement
- outputFile (assets-atouts/js/format-gen.js)
- retrieveData (assets-atouts/js/format-gen.js) - Si les données doit être extrait de sessionStorage, localStorage ou un attribut de données
- dataToTableArray (assets-atouts/js/format-gen.js) - Si vous convertissez un objet de données multidimensionnel au format CSV (les donées sont préparées avec generateTableRows)
- generateTableRows (assets-atouts/js/format-gen.js) - Si vous exportez des données stockées au format CSV
- htmlToCSV (assets-atouts/js/format-gen.js) - Si les données doit être extrait directement à partir du balisage HTML et les exportez au format CSV
- htmlToJSON (assets-atouts/js/format-gen.js) - Si les données doit être extrait directement à partir du balisage HTML et les exportez au format JSON
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

#### Exemple d'implémentation

<!-- markdownlint-disable MD032 -->
- [Évaluation d'impact algorithmique]({{ site.baseurl }}/views-vues/automated-decision-automatise/fr/evaluation-impact-algorithmique.html) - Extraire des données directement à partir du balisage HTML et les télécharger sous forme de fichier CSV
- [Outil de categorisation de sécurité]({{ site.baseurl }}/views-vues/security-securite/fr/outil-categorisation.html) - Extraire un objet de données multidimensionnel à partir de sessionStorage et le télécharger sous forme de fichier CSV
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

### Générer une table HTML à partir d'un objet multidimensionnel

#### Composants impliqués

<!-- markdownlint-disable MD032 -->
- handleEvent (assets-atouts/js/format-gen.js) - Si déclenché par un événement
- inputStorage (assets-atouts/js/format-gen.js)
- retrieveData (assets-atouts/js/format-gen.js)
- dataToTableArray (assets-atouts/js/format-gen.js)
- findData (assets-atouts/js/format-gen.js)
- flattenArray (assets-atouts/js/format-gen.js)
- filterArray (assets-atouts/js/format-gen.js)
- getNestedArrayElementCounts (assets-atouts/js/format-gen.js)
- generateTableRows (assets-atouts/js/format-gen.js)
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

### Exemple d'implémentation

<!-- markdownlint-disable MD032 -->
- [Outil de categorisation de sécurité]({{ site.baseurl }}/views-vues/security-securite/fr/outil-categorisation.html) - La section Rapport détaillé affiche la sortie de toutes les données tandis que la section Rapport sommaire affiche la sortie de parties spécifiques des données, y compris le filtrage.
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

### Ajouter, éditer et supprimer des données imbriquées

#### Composants impliqués

<!-- markdownlint-disable MD032 -->
- handleEvent (assets-atouts/js/format-gen.js) - Si déclenché par un événement
- outputStorage (assets-atouts/js/format-gen.js)
- retrieveData (assets-atouts/js/format-gen.js)
- retrieveValue (assets-atouts/js/format-gen.js)
- findData (assets-atouts/js/format-gen.js)
- storeData (assets-atouts/js/format-gen.js)
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

#### Exemple d'implémentation

<!-- markdownlint-disable MD032 -->
- [Outil de categorisation de sécurité]({{ site.baseurl }}/views-vues/security-securite/fr/outil-categorisation.html) - Ajouter, enregistrer, éditer et supprimer des éléments.
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

### Calcul dynamique des résultats à l'aide des données de la page

#### Composants impliqués

<!-- markdownlint-disable MD032 -->
- handleEvent (assets-atouts/js/calcul.js) - Si déclenché par un événement
- iterate (assets-atouts/js/calcul.js)
- calculate (assets-atouts/js/calcul.js)
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

#### Exemple d'implémentation

<!-- markdownlint-disable MD032 -->
- [Évaluation d'impact algorithmique]({{ site.baseurl }}/views-vues/automated-decision-automatise/fr/evaluation-impact-algorithmique.html) - Calcul du pourcentage de questionnaire rempli, le score et du pourcentage pour chaque critère, ainsi que le niveau d'impact résultant.
- [Est-ce que Agile est juste pour mon projet?]({{ site.baseurl }}/views-vues/agile/fr/agile-quand-utiliser.html) - Calcul du pourcentage de questionnaire rempli, des scores agiles, hybrides et non agiles ainsi que de la recommandation finale.
- [Outil décisionnel du nuage approprié]({{ site.baseurl }}/views-vues/cloud-nuage/fr/nuage-outil-decisionnel.html) - Calcul du pourcentage de questionnaire complété ainsi que les scores publics, privés et autres.
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

### Déclenchement et gestion d'événements

#### Composants impliqués

<!-- markdownlint-disable MD032 -->
- handleEvent (assets-atouts/js/format-gen.js, assets-atouts/js/calcul.js)
- calculate (assets-atouts/js/calcul.js) - Pour déclencher les événements
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

#### Exemple d'implémentation

<!-- markdownlint-disable MD032 -->
- [Évaluation d'impact algorithmique]({{ site.baseurl }}/views-vues/automated-decision-automatise/fr/evaluation-impact-algorithmique.html) - Gérer l'ordre des mises à jour des sections de résultats initiaux et des résultats finaux, mettre à jour le questionnaire rempli, naviguer entre les sections du formulaire, afficher / masquer les questions et gérer les autres modifications apportées au formulaire.
- [Outil de categorisation de sécurité]({{ site.baseurl }}/views-vues/security-securite/fr/outil-categorisation.html) - Navigation entre les sections de formulaire, gestion des fonctionnalités d'ajout, de suppression, de modification et de suppression, mise à jour des rapports détaillés et de sommaire, ainsi que gestion des fonctionnalités d'enregistrement, de restauration et de téléchargement.
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

### Logique conditionnelle et les actions résultantes

#### Composants impliqués

<!-- markdownlint-disable MD032 -->
- handleEvent (assets-atouts/js/calcul.js) - Si déclenché par un événement
- calculate (assets-atouts/js/calcul.js)
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

#### Exemple d'implémentation

<!-- markdownlint-disable MD032 -->
- [Évaluation d'impact algorithmique]({{ site.baseurl }}/views-vues/automated-decision-automatise/fr/evaluation-impact-algorithmique.html) - L'affichage / masquage des questions via les changements de case à cocher, la détermination du niveau d'impact, le contrôle de la chaîne de requête du lien filtré vers la Directive sur la prise de décision automatisée.
- [Est-ce que Agile est juste pour mon projet?]({{ site.baseurl }}/views-vues/agile/fr/agile-quand-utiliser.html) - Détermination de la recommandation finale.
- [Outil décisionnel du nuage approprié]({{ site.baseurl }}/views-vues/cloud-nuage/fr/nuage-outil-decisionnel.html) - Déterminer si les exigences obligatoires ont été remplies et afficher le résultat.
- [Outil de categorisation de sécurité]({{ site.baseurl }}/views-vues/security-securite/fr/outil-categorisation.html) - Activer / désactiver les boutons d'interface et contrôler les résultats des clics sur les boutons et afficher / masquer les liens d'emplacement actuels.
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

## Composants de création et de gestion de contenu

Les composants de création et de gestion de contenu de cette section sont implémentés à l'aide de Jekyll, Liquid et Ruby, mais ils peuvent être portés vers tout autre langage de script côté serveur.

### Génération d'un jeu de données JSON à partir du contenu Markdown créé

#### Composants impliqués

<!-- markdownlint-disable MD032 -->
- convert-to-data-set.rb
- en/\*.md and /fr/\*.md (Front Matter et contenu)
- Contenu spécifique extrait de :
  - views-vues/automated-decision-automatise/en/automated-decision.md
  - views-vues/automated-decision-automatise/fr/decision-automatise.md
  - views-vues/gc-earb-ceai/gc-earb.md
  - views-vues/gc-earb-ceai/ceai-gc.md
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

#### Exemple d'implémentation

<!-- markdownlint-disable MD032 -->
- _data/guide.json - Générée à partir de /fr/\*.md
- _data/playbook.json - Générée à partir de /en/\*.md
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

### Génération de vues différentes à l'aide du contenu extrait d'un jeu de données en utilisant la structure et les balises

#### Composants impliqués

<!-- markdownlint-disable MD032 -->
- _data/guide.json - Français
- _data/playbook.json - Anglais
- _includes/functions/class-from-tags.html
- _includes/functions/filtered-standard-guideline-content.html
- _includes/functions/find-array-match.html
- _includes/functions/find-relevant-content.html
- _includes/functions/find-relevant-standards-guidelines.html
- _includes/functions/generate-id.html
- _includes/functions/guideline-links.html
- _includes/functions/output-content-array.html
- _includes/functions/output-content-details.html
- _includes/functions/output-guidelne.html
- _includes/functions/output-section-content.html
- _includes/functions/output-section-heading.html
- _includes/functions/output-sections.html
- _includes/functions/output-standard.html
- _includes/functions/page-title.html
- _includes/functions/retrieve-data.html
- _includes/functions/standard-links.html
- _includes/functions/store-data.html
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

#### Exemple d'implémentation

<!-- markdownlint-disable MD032 -->
- [1. Design with users]({{ site.baseurl }}/digital-playbook-guide-numerique/views-vues/standards-normes/en/1-design-with-users.html)
- [Digital Standards - Single page view]({{ site.baseurl }}/views-vues/single-page-seule/en/digital-standards.html)
- [Development stages]({{ site.baseurl }}/views-vues/dev-stages/en/development-stages.html)
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

### Récupérer à distance un jeu de données en ligne et l'utiliser pour remplir un élément select

#### Composants impliqués

<!-- markdownlint-disable MD032 -->
- import-department-name.rb
- departments.json - Générée à partir de import-department-name.rb
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

#### Exemple d'implémentation

<!-- markdownlint-disable MD032 -->
- [Évaluation d'impact algorithmique]({{ site.baseurl }}/views-vues/automated-decision-automatise/fr/evaluation-impact-algorithmique.html) - Élément select Ministère (question 3)
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->
