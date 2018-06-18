---
layout: default
title: Documentation pour les vues du guide numérique
lang: fr
altLang: en
altLangPage: views
collectionDirectory: docs
---

<!-- markdownlint-disable MD032 -->
- TOC
{:toc .lst-spcd}
<!-- markdownlint-enable MD032 -->

## Aperçu

Le guide numérique contient beaucoup d'informations mais elles ne seront pas toutes pertinentes pour chaque tâche. Les vues du guide numérique sont générés à partir du [jeu de données du guide numérique](https://github.com/canada-ca/digital-playbook-guide-numerique/blob/master/_data/guide.json) et peuvent rendre le guide numérique plus pertinent et plus facile à utiliser pour certaines tâches en fournissant uniquement les informations pertinentes à la tâche et en les ordonnant d'une manière logique pour l'utilisateur.

There are four steps to creating a Playbook view:

<!-- markdownlint-disable MD032 -->
1. [Defining the view structure](#defining-the-view-structure)
1. [Tagging content that is relevant to the view](#tagging-content-that-is-relevant-to-the-view)
1. [Creating a page that retrieves and displays tagged content](#creating-a-page-that-retrieves-and-displays-tagged-content)
1. [Testing the view](#testing-the-view)
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

## Defining the view structure

The view structure consists of two levels of content groupings, view pages and view page sections. View pages can be used to divide up content according the logical steps for a task or scenario, helping users to focus on what is relevant for a given step. View page sections can be used to group and order content on a page to make it easier to consume for users.

### View pages

To determine which view pages are needed, consider the logical steps for the task or scenario for which the view is addressing. For instance, a task with four discrete phases could have a view page for each phase, allowing users to proceed from phase to phase, only being presented with the content that is relevant to the current phase.

For each view page, determine which content should be included. Varying sizes of blocks of content can be included, from large content sections to much smaller blocks of content such as individual list items and paragraphs. The content that will be included on a view page can be controlled by applying one or more tags to that content.

### View page sections

The Digital Playbook has the following page sections and ordering of content by default, which aligns with the structure of the [Playbook dataset](https://github.com/canada-ca/digital-playbook-guide-numerique/blob/master/_data/playbook.json):

<!-- markdownlint-disable MD032 -->
- Playbook overview
- Standard (one section per standard)
  - Introduction
  - Guidelines (links)
  - Related guidelines (links)
  - Guideline (one section per guideline)
    - Introduction
    - Checklist
    - Implementation guides
    - Reusable solutions
    - Similar resources
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

For more details about the dataset structure, see the [Playbook dataset schema](https://github.com/canada-ca/digital-playbook-guide-numerique/blob/master/_data/playbook_schema.json).

For simple views, the default page sections and ordering of content can be used to present the content that is included in the page. For more advanced views, the content could be reordered or combined in different ways to produce different page structures and designs.

It is recommended that any custom page sections and ordering of content be designed and tested with users to ensure that the resulting view page is easy for them to use and meets their needs. Custom page sections can be produced by using tags to create new content groupings, which don't exist in the Playbook by default, which can then be retrieved from the dataset and output to sections in the view page.

## Tagging content that is relevant to the view

Each piece of content can be tagged through the use of CSS classes, where each piece of content can have multiple tags. There is no specific naming convention for tags, but they do need to be unique. There should be a unique tags for view-level content grouping and each page-level content grouping. The tag can be either an [existing supported tag](#supported-tags) or a new tag. The suggested format for new tags is: <code>dpgn-&lt;group&gt;-&lt;item&gt;</code> (e.g., <code>dpgn-stage-alpha</code>).

Tags can be applied directly to content in the source .md files, using either the HTML class attribute (for blocks of HTML content) or through the Kramdown approach for applying CSS classes (for blocks of Markdown content). Tags applied to a parent container (e.g., list) will also apply to the child items.

<!-- markdownlint-disable MD032 -->
<table>
  <thead>
    <tr>
      <th>Content type</th>
      <th>HTML example</th>
      <th>Markdown (Kramdown) example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Section / container</td>
      <td><code>&lt;section class="dpgn-stage-alpha dpgn-stage-live"&gt;...&lt;/section&gt;</code></td>
      <td>n/a</td>
    </tr>
    <tr>
      <td>List</td>
      <td><code>&lt;ul class="dpgn-stage-alpha dpgn-stage-live"&gt;...&lt;/ul&gt;</code></td>
      <td><pre>&lt;!-- markdownlint-disable MD032 --&gt;
- List item 1
- List item 2
- List item 3
{: .dpgn-stage-alpha .dpgn-stage-live}
&lt;!-- markdownlint-enable MD032 --&gt;</pre></td>
    </tr>
    <tr>
      <td>List item</td>
      <td><code>&lt;li class="dpgn-stage-alpha dpgn-stage-live"&gt;List item&lt;/li&gt;</code></td>
      <td><pre>- {: .dpgn-stage-alpha .dpgn-stage-live} List item</pre></td>
    </tr>
    <tr>
      <td>Table</td>
      <td><code>&lt;table class="dpgn-stage-alpha dpgn-stage-live"&gt;</code></td>
      <td><pre>
| Header 1 | Header 2 |
|----------|----------|
| Data 1   | Data 2   |
{: .dpgn-stage-alpha .dpgn-stage-live}</pre></td>
    </tr>
    <tr>
      <td>Table row</td>
      <td><code>&lt;tr class="dpgn-stage-alpha dpgn-stage-live"&gt;</code></td>
      <td>n/a</td>
    </tr>
    <tr>
      <td>Table cell</td>
      <td><code>&lt;td class="dpgn-stage-alpha dpgn-stage-live"&gt;Table cell&lt;/td&gt;</code></td>
      <td>n/a</td>
    </tr>
    <tr>
      <td>Paragraph</td>
      <td><code>&lt;p class="dpgn-stage-alpha dpgn-stage-live"&gt;Paragraph content&lt;/p&gt;</code></td>
      <td><pre>Paragraph content
{: .dpgn-stage-alpha .dpgn-stage-live}</pre></td>
    </tr>
  </tbody>
</table>
<!-- markdownlint-enable MD032 -->

### Supported tags

The following tags are supported by default by the Digital Playbook:

**View tags:**

<!-- markdownlint-disable MD032 -->
- <code>dpgn-stage-alpha</code>: Content is related to the alpha development stage
- <code>dpgn-stage-beta</code>: Content is related to the beta development stage
- <code>dpgn-stage-live</code>: Content is related to the live development stage
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

**Section tags:**

Section tags are mainly used for dataset generation and filtering. Each of these tags should only be used to identify sections or containers of the specified type.

<!-- markdownlint-disable MD032 -->
- <code>dpgn-section-overview</code>: Contains the Playbook overview
- <code>dpgn-section-standard</code>: Contains a standard
- <code>dpgn-section-intro-standard</code>: Contains the introduction for the current standard
- <code>dpgn-section-guidelines</code>: Contains a list of links to the guidelines within the current standard
- <code>dpgn-section-guidelines-related</code>: Contains a list of links to the guidelines that are within other standards but related to the current standard
- <code>dpgn-section-guideline</code>: Contains a guideline for the current standard
- <code>dpgn-section-intro-guideline</code>: Contains the introduction for the current guideline
- <code>dpgn-section-checklist</code>: Contains the checklist(s) for the current guideline
- <code>dpgn-section-guides</code>: Contains links to the implementation guides for the current guideline
- <code>dpgn-section-solutions</code>: Contains links to the reusable solutions for the current guideline
- <code>dpgn-section-similar</code>: Contains links to similar ressources for the current guideline
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

**Special tags:**

<!-- markdownlint-disable MD032 -->
- <code>dpgn-data-ignore</code>: Content should be ignored when generating the dataset
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

## Creating a page that retrieves and displays tagged content

The Digital Playbook provides several helper functions to make it easier to produce the desired output. This section will cover the basics of [building a view page](#building-a-view-page) and the available [helper functions](#helper-functions).

### Building a view page

<!-- markdownlint-disable MD032 -->
1. Create English and French .md files for each view page using the template files in [views-vues/view-template-modele-vue/](https://github.com/canada-ca/digital-playbook-guide-numerique/tree/master/views-vues/view-template-modele-vue). These new .md files should placed in "en" and "fr" folders in the directory for the new view (<code>views/&lt;view-name&gt;</code>).</li>
1. For each .md file, update the following properties in the data at the start of the file delimited by "---":
    1. <code>title</code>: Title of the view page
    2. <code>altLangPage</code>: Filename (without extension) for the .md file in the other language
    3. <code>collectionDirectory</code>: Folder for the view (in the form <code>views/&lt;view-name&gt;</code>)
1. Build the content for each .md file:
    - **Simple views:** Update the <code>relevantTags</code> parameter in the include statement with the tags for the view page. Multiple tags should be separated with commas (e.g., <code>"dpgn-stage-alpha,dpgn-stage-live"</code>).</li>
    - **Advanced views:** Use the [Playbook helper functions](#helper-functions) and/or build custom output using [Jekyll](https://jekyllrb.com/) and [Liquid](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers) on the Playbook data from <code>site.data.playbook</code> (English) or <code>site.data.guide</code> (French).
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

### Helper functions

The following are three of the more commonly used helper functions. For the rest of the functions, see [&#95;includes/functions](https://github.com/canada-ca/digital-playbook-guide-numerique/tree/master/_includes/functions) (each function has usage instructions in the comments at the beginning of the file).

#### filtered-standard-guideline-content.html

<!-- markdownlint-disable MD032 -->
- **Overview:** Outputs filtered and ordered content from the dataset according to the specified tags.
- **Example usage:** <code>&#123;% include /functions/filtered-standard-guideline-content.html relevantTags="dpgn-group-group1,dpgn-group-group2" relevantSections="dpgn-section-guidelines,dpgn-section-guideline,dpgn-section-checklist" %&#125;</code>
- **Parameters:**
  -  <code>standards</code>: {Number} Optional (default to all) Comma-separated indexes or array of indexes of standards to display.
  - <code>relevantTags</code>: {String} Optional (defaults to all). Comma-separated tag requirements or an array of tag requirements for which content to display. Each requirement can include multiple criteria, separated by "+" (e.g., "string1,string2+string3). This means that the target array must have an entry that either matches string1 or entries that match string2 and string 3. Partial match criteria (contains) start with "~" (e.g., string1+~string2). Can be overridden by irrelevantTags.
  - <code>irrelevantTags</code>: {String} Optional (defaults to none).  Comma-separated tag requirements or an array of tag requirements for which content to filter out. Each requirement can include multiple criteria, separated by "+" (e.g., "string1,string2+string3). This means that the target array must have an entry that either matches string1 or entries that match string2 and string 3. Partial match criteria (contains) start with "~" (e.g., string1+~string2). Can be overridden by irrelevantTags.  - <code>groupByTagsTags</code>: {String/Array} Optional (defaults to none). Comma-separated tags or array of tags that will be used to create filtered sub-sections for each tag, with a final section for anything that doesn't match any of the tags (to filter out content completely, use relevantTags instead). If a title is provided for the final section, that final section will be put at the end, otherwise the content will be put at the start.
  - <code>groupByTagsTitles</code>: {String/Array} Optional (defaults to none). Semi-colon-separated subsection titles or array of subsection titles. Used to provide titles for the subsections for each tag in groupByTagsTags. Provide an extra title (at the end) to group everything else in a final section at the end (otherwise anything that doesn't match will be put at the start). Must have at minimum the same number of entries in the same order as groupByTagsTags.
  - <code>relevantSections</code>: {String/Array} Optional (defaults to all sections). Comma-separated section tags or array of section tags that sections must have at least one of to be displayed.
  - <code>guidelineSectionsOrder</code>: {String/Array} Optional (defaults to site.guidelineSectionsOrder). Comma-separated section keys or array of section keys determining the order to display the sections (omitting a section will prevent it from being displayed).
  - <code>standardsListClasses</code> {String} Optional. Classes (separated by a space) to add to the standards list.
  - <code>standardsListItemClasses</code> {String} Optional. Classes (separated by a space)vto add to the standards list items.
  - <code>standardsLinkClasses</code> {String} Optional. Classes (separated by a space) to add to the standards list item links.
  - <code>standardsSubLinkClasses</code> {String} Optional. Classes (separated by a space) to add to the standards list item link content.
  - <code>guidelinesListClasses</code> {String} Optional. Classes (separated by a space) to add to the guidelines list.
  - <code>guidelinesListItemClasses</code> {String} Optional. Classes (separated by a space)vto add to the guidelines list items.
  - <code>guidelinesLinkClasses</code> {String} Optional. Classes (separated by a space) to add to the guidelines list item links.
  - <code>guidelinesSubLinkClasses</code> {String} Optional. Classes (separated by a space) to add to the guidelines list item link content.
- **Returns:** {String} Outputs standard and guideline content with a tag that matches at least one of relevantTags.
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

#### output-standard.html

<!-- markdownlint-disable MD032 -->
- **Overview:** Outputs the content for a standard.
- **Example usage:** <code>&#123;% include /functions/output-standard.html standard="1" relevantGuidelines="1.2,1.4,1.6" relevantRelatedGuidelines="3.4,5.2,6.2" relevantTags="dpgn-group-group1,dpgn-group-group2" relevantSections="dpgn-section-guidelines,dpgn-section-guideline,dpgn-section-checklist" %&#125;</code>
- **Parameters:**
  - <code>standardIndex</code>: {Number} Standard number (not index), which is used to retrieve the Standard object.
  - <code>includeStandardTitle</code>: {Boolean} Optional (defaults to false). Whether or not to output a heading for the Standard (such as when there are multiple standards on the same page).
  - <code>currentHeadingLevel</code> {Number} Optional (defaults to 1). Heading level of the current section.
  - <code>relevantGuidelines</code>: {String/Array} Optional (defaults to all). Comma-separated guideline indexes or an array of guideline objects. Guidelines for the current standard that should be displayed.
  - <code>relevantRelatedGuidelines</code>: {String/Array} Optional (defaults to all). Comma-separated guideline numbers (e.g., "3.4,4.2") or an array of guidelines numbers. Guidelines that should be displayed if they are related to this standard.
  - <code>relevantTags</code>: {String} Optional (defaults to all). Comma-separated tag requirements or an array of tag requirements for which content to display. Each requirement can include multiple criteria, separated by "+" (e.g., "string1,string2+string3). This means that the target array must have an entry that either matches string1 or entries that match string2 and string 3. Partial match criteria (contains) start with "~" (e.g., string1+~string2). Can be overridden by irrelevantTags.
  - <code>irrelevantTags</code>: {String} Optional (defaults to none).  Comma-separated tag requirements or an array of tag requirements for which content to filter out. Each requirement can include multiple criteria, separated by "+" (e.g., "string1,string2+string3). This means that the target array must have an entry that either matches string1 or entries that match string2 and string 3. Partial match criteria (contains) start with "~" (e.g., string1+~string2). Can be overridden by irrelevantTags.  - <code>groupByTagsTags</code>: {String/Array} Optional (defaults to none). Comma-separated tags or array of tags that will be used to create filtered sub-sections for each tag, with a final section for anything that doesn't match any of the tags (to filter out content completely, use relevantTags instead). If a title is provided for the final section, that final section will be put at the end, otherwise the content will be put at the start.
  - *********
  - <code>groupByTagsTags</code>: {String/Array} Optional (defaults to none). Comma-separated tags or array of tags that will be used to create filtered sub-sections for each tag, with a final section for anything that doesn't match any of the tags (to filter out content completely, use relevantTags instead). If a title is provided for the final section, that final section will be put at the end, otherwise the content will be put at the start.
  - <code>groupByTagsTitles</code>: {String/Array} Optional (defaults to none). Semi-colon-separated subsection titles or array of subsection titles. Used to provide titles for the subsections for each tag in groupByTagsTags. Provide an extra title (at the end) to group everything else in a final section at the end (otherwise anything that doesn't match will be put at the start). Must have at minimum the same number of entries in the same order as groupByTagsTags.
  - <code>relevantSections</code>: {String/Array} Optional (defaults to all). Comma-separated section tags or array of section tags that content must have at least one of to be displayed.
  - <code>guidelineSectionsOrder</code>: {String/Array} Optional (defaults to site.guidelineSectionsOrder). Comma-separated section keys or array of section keys determining the order to display the sections (omitting a section will prevent it from being displayed).
  - <code>guidelinesDetailsSummary</code> {Boolean} Optional (defaults to true). Whether guidelines list should be in details/summary.
  - <code>guidelinesListClasses</code> {String} Optional. Classes (separated by a space) to add to the guidelines list.
  - <code>guidelinesListItemClasses</code> {String} Optional. Classes (separated by a space)vto add to the guidelines list items.
  - <code>guidelinesLinkClasses</code> {String} Optional. Classes (separated by a space) to add to the guidelines list item links.
  - <code>guidelinesSubLinkClasses</code> {String} Optional. Classes (separated by a space) to add to the guidelines list item link content.
- **Returns:** {String} Outputs the content for the standard and the included guidelines
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

#### output-guideline.html

<!-- markdownlint-disable MD032 -->
- **Overview:** Outputs the content for a guideline.
- **Example usage:** <code>&#123;% include /functions/output-standard.html guidelineHeadingLevel="2" standardIndex="1" guidelineIndex="4" relevantGuidelines="1.2,1.4,1.6" relevantRelatedGuidelines="3.4,5.2,6.2" relevantTags="dpgn-group-group1,dpgn-group-group2" relevantSections="dpgn-section-guidelines,dpgn-section-guideline,dpgn-section-checklist" %&#125;</code>
- **Parameters:**
  - <code>guidelineHeadingLevel</code>: {Number} Heading level of the guideline section header.
  - <code>standard</code>: {Number} Index of the standard that is the parent of the guideline to process.
  - <code>guideline</code>: {Number} Index of the guideline to process.
  - <code>relevantTags</code>: {String} Optional (defaults to all). Comma-separated tag requirements or an array of tag requirements for which content to display. Each requirement can include multiple criteria, separated by "+" (e.g., "string1,string2+string3). This means that the target array must have an entry that either matches string1 or entries that match string2 and string 3. Partial match criteria (contains) start with "~" (e.g., string1+~string2). Can be overridden by irrelevantTags.
  - <code>irrelevantTags</code>: {String} Optional (defaults to none).  Comma-separated tag requirements or an array of tag requirements for which content to filter out. Each requirement can include multiple criteria, separated by "+" (e.g., "string1,string2+string3). This means that the target array must have an entry that either matches string1 or entries that match string2 and string 3. Partial match criteria (contains) start with "~" (e.g., string1+~string2). Can be overridden by irrelevantTags.  - <code>groupByTagsTags</code>: {String/Array} Optional (defaults to none). Comma-separated tags or array of tags that will be used to create filtered sub-sections for each tag, with a final section for anything that doesn't match any of the tags (to filter out content completely, use relevantTags instead). If a title is provided for the final section, that final section will be put at the end, otherwise the content will be put at the start.
  - <code>groupByTagsTags</code>: {String/Array} Optional (defaults to none). Comma-separated tags or array of tags that will be used to create filtered sub-sections for each tag, with a final section for anything that doesn't match any of the tags (to filter out content completely, use relevantTags instead). If a title is provided for the final section, that final section will be put at the end, otherwise the content will be put at the start.
  - <code>groupByTagsTitles</code>: {String/Array} Optional (defaults to none). Semi-colon-separated subsection titles or array of subsection titles. Used to provide titles for the subsections for each tag in groupByTagsTags. Provide an extra title (at the end) to group everything else in a final section at the end (otherwise anything that doesn't match will be put at the start). Must have at minimum the same number of entries in the same order as groupByTagsTags.
  - <code>relevantSections</code>: {String/Array} Optional (defaults to all). Comma-separated section tags or array of section tags that content must have at least one of to be displayed.
  - <code>guidelineSectionsOrder</code>: {String/Array} Optional (defaults to site.guidelineSectionsOrder). Comma-separated section keys or array of section keys determining the order to display the sections (omitting a section will prevent it from being displayed).
- **Returns:** {String} Outputs the content for the guideline.
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

#### output-content-array.html

<!-- markdownlint-disable MD032 -->
- **Overview:** Iterates over an array of content blocks, including nested content arrays, outputting the relevant content.
- **Example usage:** <code>&#123;% include /functions/output-content-array.html contentArray=site.data.playbook.standards.content[0].guidelines.content[2].checklist.content relevantTags="dpgn-group-group1,dpgn-group-group2" %&#125;</code>
- **Parameters:**
  - <code>contentArray</code>: {Array} Array of content blocks to process.
  - <code>currHeadingLevel</code>: (Integer} Preceding heading level (i.e., heading level for the section that contentArray is contained within).
  - <code>relevantTags</code>: {String} Optional (defaults to all). Comma-separated tag requirements or an array of tag requirements for which content to display. Each requirement can include multiple criteria, separated by "+" (e.g., "string1,string2+string3). This means that the target array must have an entry that either matches string1 or entries that match string2 and string 3. Partial match criteria (contains) start with "~" (e.g., string1+~string2). Can be overridden by irrelevantTags.
  - <code>irrelevantTags</code>: {String} Optional (defaults to none).  Comma-separated tag requirements or an array of tag requirements for which content to filter out. Each requirement can include multiple criteria, separated by "+" (e.g., "string1,string2+string3). This means that the target array must have an entry that either matches string1 or entries that match string2 and string 3. Partial match criteria (contains) start with "~" (e.g., string1+~string2). Can be overridden by irrelevantTags.
- **Returns:** {String} Returns the processed output from the content array.
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

## Testing the view

<!-- markdownlint-disable MD034 -->
<!-- markdownlint-disable MD032 -->
1. If not already done, set up GitHub pages for your repository:
    1. Go to the repository settings
    1. In the GitHub pages section, set "Source" to "gh-pages branch"
1. Create a new "gh-pages" branch from the branch used to create the view
1. Go to your branches page. Refresh the page periodically until the gh-pages build for the gh-pages branch either passes (green checkmark) or fails (red x).
1. If the build passes, the view can be found at https:&#47;&#47;&lt;github-handle&gt;.github.io/digital-playbook-guide-numerique/views-vues/&lt;view-directory&gt;/en/&lt;filename&gt;.html
1. If the build fails, review your code and correct the error. To get the build error messages, you can use Travis-CI by:
    1. Going to the [Travis-CI website](https://travis-ci.org/)
    1. Sign in using your GitHub account
    1. Go to your profile (upper-right corner)
    1. Click the "Sync account"
    1. Enable integration for the &lt;username&gt;/digital-playbook-guide-numerique repository
    1. Do a new push to the branch used to create the view (e.g., make a change and commit it).
    1. Go to the branches page and wait for the Travis-CI build to complete. If the build fails then review the Travis-CI log (can either be reached through the Travis-CI website or by clicking the red "x" and then clicking Travis-CI).
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->
<!-- markdownlint-enable MD034 -->
