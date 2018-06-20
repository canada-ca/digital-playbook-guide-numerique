<!-- markdownlint-disable MD041 -->
[Français](#comment-contribuer)
<!-- markdownlint-enable MD041 -->

# How to Contribute

When contributing, post comments and discuss changes you wish to make via Issues, while respecting our [code of conduct](CODE_OF_CONDUCT.md).

Feel free to propose changes by creating Pull Requests. If you don't have write access, editing a file will create a Fork of this project for you to save your proposed changes to. Submitting a change to a file will write it to a new Branch in your Fork, so you can send a Pull Request.

If this is your first time contributing on GitHub, don't worry! Let us know if you have any questions.

## General changes

All proposed changes will go through two levels of review:

1. Automated checks (e.g., markdownlint, link checks)
1. Manual checks (e.g., manuak content review, code inspection)

Pull requests will not be merged in until after they have passed both levels of review.

## Changes to content

All of the authoring content can be found in the .md files found in the /en and /fr directories off of the repository root. These files are coded using [Kramdown](https://kramdown.gettalong.org/syntax.html), an extended version of Markdown.

Please respect the following when making content changes:

1. Content changes should be made to both official languages (where possible). Please provide the translations as part of the pull request or soon after in a separate pull request (e.g., after the translation is ready). If the translation isn't part of the original pull request, then please replicate the changes in the other official language (e.g., replicated the English changes in the French). If you need assistance with the translation and/or editing then please let us know.
1. Don't make changes to either /_data/playbook.json or /_data/guide.json. These are automatically generated from the .md files in the /en and /fr directories and from _config.yml.
1. Don't change or remove the div and section elements that have class="dpgn-section-&lt;section-name&gt;". These are used as landmarks for dataset generation.
1. Don't change the standards names or the names of the first four guidelines for each standard (e.g., 1.1, 1.2, 1.3 and 1.4). These names come directly from the Digital Standards so should be changed there first before they can be changed in the Digital Playbook.
1. The names for "Guidelines", "Related guidelines", "Checklist", "Implementation guides", "Reusable solutions" and "Similar resources" (as well as the French versions) are centrally managed. Changing them in an authoring .md file will have no effect on the rendered result.
1. Content that shouldn't be included in the dataset should be excluded by applying the <code>dpgn-data-ignore</code> class. This can be useful for breaking up the authoring .md file to make it more legible without affecting the dataset. This can also be useful for creating content groups for applying common tags (e.g., applying a tag to a whole list rather than each individual list item).
1. Before adding a section or a heading to the authoring .md file, consider if it would make sense in all cases. A section in the dataset will be output as a section across all [views](https://canada-ca.github.io/digital-playbook-guide-numerique/docs/en/views.html). This likely would be fine for the introduction but could be problematic in the checklist section. It may be more appropriate to apply tags instead (e.g., dpgn-stage-alpha applied as a CSS class) which would allow view creators to create their own view-specific sections using tags. If a section already exists in the dataset, then that could limit the options of view creators.

## Changes to views

You are welcome to submit new views and to help improve existing views. For details on how to work with views, please refer to the [Digital Playbook views documentation](https://canada-ca.github.io/digital-playbook-guide-numerique/docs/en/views.html).

Please respect the following when making view changes:

1. All views should be contained within their own directory within the views-vues directory. The directory name should be either bilingual (e.g., standards-normes) or the same in both languages. The English and French files should be separated into /en and /fr sub-directories (using English and French filenames respectively).
1. Content/code than is common between both languages can be placed in the /includes/views-vues directory in a sub-directory with a name that matches the name used for the sub-directory in the /views-vues directory (e.g., /includes/views-vues/standards-normes and /views-vues/standards-normes).

<!-- markdownlint-disable MD025 -->

# Comment contribuer

<!-- markdownlint-enable MD025 -->

Lorsque vous contribuez, veuillez également publier des commentaires et discuter des modifications que vous souhaitez apporter par l'entremise des enjeux (Issues), en respectant notre [code de conduite](CODE_OF_CONDUCT.md#charte-code-de-conduite-contributeurs).

N'hésitez pas à proposer des modifications en créant des demandes de tirage (Pull Requests). Si vous n'avez pas accès au mode de rédaction, la modification d'un fichier créera une copie (Fork) de ce projet afin que vous puissiez enregistrer les modifications que vous proposez. Le fait de proposer une modification à un fichier l'écrira dans une nouvelle branche dans votre copie (Fork), de sorte que vous puissiez envoyer une demande de tirage (Pull Request).

Si c'est la première fois que vous contribuez à GitHub, ne vous en faites pas! Faites-nous part de vos questions.

## Changements généraux

Tous les changements proposés passeront par deux niveaux d'examen&#160;:

1. Contrôles automatisés (par exemple, markdownlint, contrôles de liens)
1. Vérifications manuelles (par exemple, examen du contenu de manuak, inspection de code)

Les demandes de tirage ne seront fusionnées qu'après avoir passé les deux niveaux d'examen.

## Changements de contenu

Tout le contenu de création peut être trouvé dans les fichiers .md trouvés dans les répertoires /en et /fr hors de la racine du dépôt. Ces fichiers sont codés en utilisant [Kramdown](https://kramdown.gettalong.org/syntax.html), une version étendue de Markdown.

Veuillez respecter les points suivants lorsque vous modifiez le contenu&#160;:

1. Les changements de contenu devraient être faits dans les deux langues officielles (si possible). Veuillez fournir les traductions dans le cadre de la demande de tirage ou peu après dans une demande de tirage séparée (par exemple, après que la traduction est prête). Si la traduction ne fait pas partie de la demande d'extraction originale, veuillez répliquer les modifications dans l'autre langue officielle (par exemple, répliquer les modifications anglaises en français). Si vous avez besoin d'aide pour la traduction et / ou l'édition, communiquez avec nous.
1. N'apportez aucune modification à /_data/playbook.json ou /_data/guide.json. Ceux-ci sont générés automatiquement à partir des fichiers .md dans les répertoires /en et /fr et à partir de _config.yml.
1. Ne modifiez pas ou ne supprimez pas les éléments div et section ayant class = "dpgn-section-&lt;nom-de-section&gt;". Ils sont utilisés comme points de repère pour la génération de l'ensemble de données.
1. Ne modifiez pas les noms des normes ou les noms des quatre premières lignes directrices pour chaque norme (par exemple, 1.1, 1.2, 1.3 et 1.4). Ces noms proviennent directement des normes numériques et devraient donc être changés avant de pouvoir être changés dans le guide numérique.
1. Les noms de "Lignes directrices", "Lignes directrices connexes", "Liste de contrôle", "Guides de mise en œuvre", "Solutions réutilisables" et "Ressources similaires" (ainsi que les versions anglaises) sont gérés de manière centralisée. Les modifier dans un fichier .md de création n'aura aucun effet sur le résultat rendu.
1. Le contenu qui ne devrait pas être inclus dans l'ensemble de données doit être exclu en appliquant la classe <code>dpgn-data-ignore</code>. Cela peut être utile pour décomposer le fichier .md de création afin de le rendre plus lisible sans affecter l'ensemble de données. Cela peut également être utile pour créer des groupes de contenu pour appliquer des étiquettes communes (par exemple, appliquer une étiquette à une liste entière plutôt qu'à chaque élément de liste individuel).
1. Avant d'ajouter une section ou un en-tête au fichier .md de création, déterminez si cela aurait du sens dans tous les cas. Une section de l'ensemble de données sera affichée en tant que section dans toutes les [vues](https://canada-ca.github.io/digital-playbook-guide-numerique/docs/fr/vues.html). Ce serait probablement bien pour l'introduction, mais pourrait être problématique dans la section de la liste de contrôle. Il peut être plus approprié d'appliquer des balises à la place (par exemple, dpgn-stage-alpha appliqué en tant que classe CSS) qui permettrait aux créateurs de vues de créer leurs propres sections spécifiques à la vue à l'aide de balises. Si une section existe déjà dans l'ensemble de données, cela peut limiter les options des créateurs de vues.

## Changements des vues

Vous êtes invités à soumettre de nouvelles vues et à améliorer les vues existantes. Pour plus de détails sur la façon de travailler avec des vues, veuillez vous reporter à la [documentation pour les vues du guide numérique](https://canada-ca.github.io/digital-playbook-guide-numerique/docs/fr/vues.html).

Veuillez respecter les points suivants lorsque vous modifiez les vues:

1. Toutes les vues doivent être contenues dans leur propre répertoire dans le répertoire views-vues. Le nom du répertoire doit être bilingue (par exemple, standrds-normes) ou le même dans les deux langues. Les fichiers anglais et français doivent être séparés en sous-répertoires /en et /fr (en utilisant les noms de fichiers anglais et français respectivement).
1. Le contenu / code qui est commun entre les deux langues peut être placé dans le répertoire /includes/views-vues dans un sous-répertoire avec un nom correspondant au nom utilisé pour le sous-répertoire dans le répertoire /views-vues (par exemple, /includes/views-vues/standards-normes et /views-vues/standards-normes).
