# How to Contribute

When contributing, post comments and discuss changes you wish to make via Issues.

Feel free to propose changes by creating Pull Requests. If you don't have write access, editing a file will create a Fork of this project for you to save your proposed changes to. Submitting a change to a file will write it to a new Branch in your Fork, so you can send a Pull Request.

If this is your first time contributing on GitHub, don't worry! Let us know if you have any questions.

## General changes

All proposed changes will go through two levels of review:

1. Automated checks (e.g., markdownlint, link checks)
1. Manual checks (e.g., manuak content review, code inspection)

Pull requests will not be merged in until after they have passed both levels of review.

## Content changes

All of the authoring content can be found in the .md files found in the /en and /fr directories off of the repository root. These files are coded using [Kramdown](https://kramdown.gettalong.org/syntax.html), an extended version of Markdown.

Please respect the following when making content changes:

1. Content changes should be made to both official languages (where possible). Please provide the translations as part of the pull request or soon after in a separate pull request (e.g., after the translation is ready). If the translation isn't part of the original pull request, then please replicate the changes in the other official language (e.g., replicated the English changes in the French). If you need assistance with the translation and/or editing then please let us know.
1. Don't make changes to either /_data/playbook.json or /_data/guide.json. These are automatica;;y generated from the .md files in the /en and /fr directories and from _config.yml.
1. Don't change or remove the div and section elements that have class="dpgn-section-&lt;section-name&gt;". These are used as landmarks for dataset generation.
1. Don't change the standards names or the names of the first four guidelines for each standard (e.g., 1.1, 1.2, 1.3 and 1.4). These names come directly from the Digital Standards so should be changed there first before they can be changed in the Digital Playbook.
1. The names for "Guidelines", "Related guidelines", "Checklist", "Implementation guides", "Reusable solutions" and "Similar ressources" (as well as the French versions) are centrally managed. Changing them in an authoring .md file will have no effect on the rendered result.
1. Content that shouldn't be included in the dataset should be excluded by applying the <code>dpgn-data-ignore</code> class. This can be useful for breaking up the authoring .md file to make it more legible without affecting the dataset. This can also be useful for creating content groups for applying common tags (e.g., applying a tag to a whole list rather than each individual list item).
1. Before adding a section or a heading to the authoring .md file, consider if it would make sense in all cases. A section in the dataset will be output as a section across all [views](https://canada-ca.github.io/digital-playbook-guide-numerique/docs/en/views.html). This likely would be fine for the introduction but could be problematic in the checklist section. It may be more appropriate to apply tags instead (e.g., dpgn-stage-alpha applied as a CSS class) which would allow view creators to create their own view-specific sections using tags. If a section already exists in the dataset, then that could limit the options of view creators.

## View changes

You are welcome to submit new views and to help improve existing views. For details on how to work with views, please refer to the [Digital Playbook views documentation](https://canada-ca.github.io/digital-playbook-guide-numerique/docs/en/views.html).

Please respect the following when making view changes:

1. All views should be contained within their own directory within the views-vues directory. The directory name should be either bilingual (e.g., standards-normes) or the same in both languages. The English and French files should be separated into /en and /fr sub-directories (using English and French filenames respectively).
1. Content/code than is common between both languages can be placed in the /includes/views-vues directory in a sub-directory with a name that matches the name used for the sub-directory in the /views-vues directory (e.g., /includes/views-vues/standards-normes and /views-vues/standards-normes).

<!-- markdownlint-disable MD025 -->

# Comment contribuer

<!-- markdownlint-enable MD025 -->

Lorsque vous contribuez, veuillez également publier des commentaires et discuter des modifications que vous souhaitez apporter par l'entremise des enjeux (Issues).

N'hésitez pas à proposer des modifications en créant des demandes de tirage (Pull Requests). Si vous n'avez pas accès au mode de rédaction, la modification d'un fichier créera une copie (Fork) de ce projet afin que vous puissiez enregistrer les modifications que vous proposez. Le fait de proposer une modification à un fichier l'écrira dans une nouvelle branche dans votre copie (Fork), de sorte que vous puissiez envoyer une demande de tirage (Pull Request).

Si c'est la première fois que vous contribuez à GitHub, ne vous en faites pas! Faites-nous part de vos questions.

## General changes

All proposed changes will go through two levels of review:

1. Automated checks (e.g., markdownlint, link checks)
1. Manual checks (e.g., manuak content review, code inspection)

Pull requests will not be merged in until after they have passed both levels of review.

## Content changes

All of the authoring content can be found in the .md files found in the /en and /fr directories off of the repository root. These files are coded using [Kramdown](https://kramdown.gettalong.org/syntax.html), an extended version of Markdown.

Please respect the following when making content changes:

1. Content changes should be made to both official languages (where possible). Please provide the translations as part of the pull request or soon after in a separate pull request (e.g., after the translation is ready). If the translation isn't part of the original pull request, then please replicate the changes in the other official language (e.g., replicated the English changes in the French). If you need assistance with the translation and/or editing then please let us know.
1. Don't make changes to either /_data/playbook.json or /_data/guide.json. These are automatica;;y generated from the .md files in the /en and /fr directories and from _config.yml.
1. Don't change or remove the div and section elements that have class="dpgn-section-&lt;section-name&gt;". These are used as landmarks for dataset generation.
1. Don't change the standards names or the names of the first four guidelines for each standard (e.g., 1.1, 1.2, 1.3 and 1.4). These names come directly from the Digital Standards so should be changed there first before they can be changed in the Digital Playbook.
1. The names for "Guidelines", "Related guidelines", "Checklist", "Implementation guides", "Reusable solutions" and "Similar ressources" (as well as the French versions) are centrally managed. Changing them in an authoring .md file will have no effect on the rendered result.
1. Content that shouldn't be included in the dataset should be excluded by applying the <code>dpgn-data-ignore</code> class. This can be useful for breaking up the authoring .md file to make it more legible without affecting the dataset. This can also be useful for creating content groups for applying common tags (e.g., applying a tag to a whole list rather than each individual list item).
1. Before adding a section or a heading to the authoring .md file, consider if it would make sense in all cases. A section in the dataset will be output as a section across all [views](https://canada-ca.github.io/digital-playbook-guide-numerique/docs/en/views.html). This likely would be fine for the introduction but could be problematic in the checklist section. It may be more appropriate to apply tags instead (e.g., dpgn-stage-alpha applied as a CSS class) which would allow view creators to create their own view-specific sections using tags. If a section already exists in the dataset, then that could limit the options of view creators.

## View changes

You are welcome to submit new views and to help improve existing views. For details on how to work with views, please refer to the [Digital Playbook views documentation](https://canada-ca.github.io/digital-playbook-guide-numerique/docs/en/views.html).

Please respect the following when making view changes:

1. All views should be contained within their own directory within the views-vues directory. The directory name should be either bilingual (e.g., standards-normes) or the same in both languages. The English and French files should be separated into /en and /fr sub-directories (using English and French filenames respectively).
1. Content/code than is common between both languages can be placed in the /includes/views-vues directory in a sub-directory with a name that matches the name used for the sub-directory in the /views-vues directory (e.g., /includes/views-vues/standards-normes and /views-vues/standards-normes).
