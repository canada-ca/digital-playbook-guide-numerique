---
layout: default
title: Digital Playbook views documentation
lang: en
altLang: fr
altLangPage: vues
collectionDirectory: docs
---

<!-- markdownlint-disable MD032 -->
- TOC
{:toc .lst-spcd}
<!-- markdownlint-enable MD032 -->

## Overview

The Digital Playbook contains a lot of information but not all of it will be relevant to each task. Digital Playbook views are generated from the [Digital Playbook dataset](https://github.com/canada-ca/digital-playbook-guide-numerique/blob/master/_data/playbook.json) and can make the Digital Playbook more relevant and easier to use for certain tasks by providing only the information that is relevant to the task and ordering it in a way that makes sense for the user.

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

Each piece of content can be tagged through the use of CSS classes, where each piece of content can have multiple tags. There is no specific naming convention for tags, but they do need to be unique. There should be a unique tags for view-level content grouping and each page-level content grouping. The tag can be either an [existing supported tag](#supported-tags) or a new tag. The suggested format for new tags is: ``dpgn-&lt;group&gt;-&lt;item&gt;`` (e.g., ``dpgn-stage-alpha``).

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
      <td>``&lt;section class="dpgn-stage-alpha dpgn-stage-live"&gt;...&lt;/section&gt;``</td>
      <td>n/a</td>
    </tr>
    <tr>
      <td>List</td>
      <td>``&lt;ul class="dpgn-stage-alpha dpgn-stage-live"&gt;...&lt;/ul&gt;``</td>
      <td><pre>&lt;!-- markdownlint-disable MD032 --&gt;
- List item 1
- List item 2
- List item 3
{: .dpgn-stage-alpha .dpgn-stage-live}
&lt;!-- markdownlint-enable MD032 --&gt;</pre></td>
    </tr>
    <tr>
      <td>List item</td>
      <td>``&lt;li class="dpgn-stage-alpha dpgn-stage-live"&gt;List item&lt;/li&gt;``</td>
      <td><pre>- {: .dpgn-stage-alpha .dpgn-stage-live} List item</pre></td>
    </tr>
    <tr>
      <td>Table</td>
      <td>``&lt;table class="dpgn-stage-alpha dpgn-stage-live"&gt;``</td>
      <td><pre>
| Header 1 | Header 2 |
|----------|----------|
| Data 1   | Data 2   |
{: .dpgn-stage-alpha .dpgn-stage-live}</pre></td>
    </tr>
    <tr>
      <td>Table row</td>
      <td>``&lt;tr class="dpgn-stage-alpha dpgn-stage-live"&gt;``</td>
      <td>n/a</td>
    </tr>
    <tr>
      <td>Table cell</td>
      <td>``&lt;td class="dpgn-stage-alpha dpgn-stage-live"&gt;Table cell&lt;/td&gt;``</td>
      <td>n/a</td>
    </tr>
    <tr>
      <td>Paragraph</td>
      <td>``&lt;p class="dpgn-stage-alpha dpgn-stage-live"&gt;Paragraph content&lt;/p&gt;``</td>
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
- ``dpgn-standards-hide``: Content should be hidden from the standards-normes and single-page-seule views
- ``dpgn-stage-alpha``: Content is related to the alpha development stage
- ``dpgn-stage-beta``: Content is related to the beta development stage
- ``dpgn-stage-live``: Content is related to the live development stage
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

**Section tags:**

Section tags are mainly used for dataset generation and filtering. Each of these tags should only be used to identify sections or containers of the specified type.

<!-- markdownlint-disable MD032 -->
- ``dpgn-section-overview``: Contains the Playbook overview
- ``dpgn-section-standard``: Contains a standard
- ``dpgn-section-intro-standard``: Contains the introduction for the current standard
- ``dpgn-section-guidelines``: Contains a list of links to the guidelines within the current standard
- ``dpgn-section-guidelines-related``: Contains a list of links to the guidelines that are within other standards but related to the current standard
- ``dpgn-section-guideline``: Contains a guideline for the current standard
- ``dpgn-section-intro-guideline``: Contains the introduction for the current guideline
- ``dpgn-section-checklist``: Contains the checklist(s) for the current guideline
- ``dpgn-section-guides``: Contains links to the implementation guides for the current guideline
- ``dpgn-section-solutions``: Contains links to the reusable solutions for the current guideline
- ``dpgn-section-similar``: Contains links to similar ressources for the current guideline
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

**Special tags:**

<!-- markdownlint-disable MD032 -->
- ``dpgn-data-ignore``: Content should be ignored when generating the dataset
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

## Creating a page that retrieves and displays tagged content

The Digital Playbook provides several helper functions to make it easier to produce the desired output. This section will cover the basics of [building a view page](#building-a-view-page) and the available [helper functions](#helper-functions).

### Building a view page

<!-- markdownlint-disable MD032 -->
1. Create English and French .md files for each view page using the template files in [views-vues/view-template-modele-vue/](https://github.com/canada-ca/digital-playbook-guide-numerique/tree/master/views-vues/view-template-modele-vue). These new .md files should placed in "en" and "fr" folders in the directory for the new view (``views/&lt;view-name&gt;``).</li>
1. For each .md file, update the following properties in the data at the start of the file delimited by "---":
    1. ``title``: Title of the view page
    2. ``altLangPage``: Filename (without extension) for the .md file in the other language
    3. ``collectionDirectory``: Folder for the view (in the form ``views/&lt;view-name&gt;``)
1. Build the content for each .md file:
    - **Simple views:** Update the ``relevantTags`` parameter in the include statement with the tags for the view page. Multiple tags should be separated with commas (e.g., ``"dpgn-stage-alpha,dpgn-stage-live"``).</li>
    - **Advanced views:** Use the [Playbook helper functions](#helper-functions) and/or build custom output using [Jekyll](https://jekyllrb.com/) and [Liquid](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers) on the Playbook data from ``site.data.playbook`` (English) or ``site.data.guide`` (French).
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

### Helper functions

The following are three of the more commonly used helper functions. For the rest of the functions, see [&#95;includes/functions](https://github.com/canada-ca/digital-playbook-guide-numerique/tree/master/_includes/functions) (each function has usage instructions in the comments at the beginning of the file).

#### filtered-standard-guideline-content.html

<!-- markdownlint-disable MD032 -->
- **Overview:** Outputs filtered and ordered content from the dataset according to the specified tags.
- **Example usage:** ``&#123;% include /functions/filtered-standard-guideline-content.html relevantTags="dpgn-group-group1,dpgn-group-group2" relevantSections="dpgn-section-guidelines,dpgn-section-guideline,dpgn-section-checklist" %&#125;``
- **Parameters:**
  - ``standardIndexes`` {String/Array} Optional (default to all) Comma-separated indexes or array of indexes of standards to display.
  - ``relevantTags`` {String/Array} Optional (defaults to all). Comma-separated tag requirements or an array of tag requirements for which content to display. Each requirement can include multiple criteria, separated by "``+``" (e.g., ``"string1,string2+string3"``). This means that the target array must have an entry that either matches ``string1`` or entries that match ``string2`` and ``string3``. Partial match criteria (contains) start with "``~``" (e.g., ``"string1+~string2"``). Can be overridden by ``irrelevantTags``.
  - ``irrelevantTags`` {String/Array} Optional (defaults to none). Comma-separated tag requirements or an array of tag requirements for which content to filter out. Each requirement can include multiple criteria, separated by "``+``" (e.g., ``"string1,string2+string3"``). This means that the target array must have an entry that either matches ``string1`` or entries that match ``string2`` and ``string3``. Partial match criteria (contains) start with "``~``" (e.g., ``"string1+~string2"``). Can be overridden by ``irrelevantTags``.
  - ``groupByTagsTags`` {String/Array} Optional (defaults to none). Comma-separated tags or array of tags that will be used to create filtered sub-sections for each tag, with a final section for anything that doesn't match any of the tags (to filter out content completely, use relevantTags instead). If a title is provided for the final section, that final section will be put at the end, otherwise the content will be put at the start.
  - ``groupByTagsTitles`` {String/Array} Optional (defaults to none). Semi-colon-separated subsection titles or array of subsection titles. Used to provide titles for the subsections for each tag in ``groupByTagsTags``. Provide an extra title (at the end) to group everything else in a final section at the end (otherwise anything that doesn't match will be put at the start). Must have at minimum the same number of entries in the same order as ``groupByTagsTags``.
  - ``relevantSections`` {String/Array} Optional (defaults to all sections). Comma-separated section tags or array of section tags that sections must have at least one of to be displayed.
  - ``guidelineSectionsOrder`` {String/Array} Optional (defaults to ``site.guidelineSectionsOrder``). Comma-separated section keys or array of section keys determining the order to display the sections (omitting a section will prevent it from being displayed).
  - ``standardsListClasses`` {String} Optional. Classes (separated by a space) to add to the standards list.
  - ``standardsListItemClasses`` {String} Optional. Classes (separated by a space) to add to the standards list items.
  - ``standardsLinkClasses`` {String} Optional. Classes (separated by a space) to add to the standards list item links.
  - ``standardsSubLinkClasses`` {String} Optional. Classes (separated by a space) to add to the standards list item link content.
  - ``guidelinesListClasses`` {String} Optional. Classes (separated by a space) to add to the guidelines list.
  - ``guidelinesListItemClasses`` {String} Optional. Classes (separated by a space) to add to the guidelines list items.
  - ``guidelinesLinkClasses`` {String} Optional. Classes (separated by a space) to add to the guidelines list item links.
  - ``guidelinesSubLinkClasses`` {String} Optional. Classes (separated by a space) to add to the guidelines list item link content.
- **Returns:** {String} Outputs filtered and ordered content from the dataset according to the specified tags.
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

#### output-guideline.html

<!-- markdownlint-disable MD032 -->
- **Overview:** Outputs the content for a guideline.
- **Example usage:** ``&#123;% include /functions/output-standard.html guidelineHeadingLevel="2" standardIndex="1" guidelineIndex="4" relevantGuidelines="1.2,1.4,1.6" relevantRelatedGuidelines="3.4,5.2,6.2" relevantTags="dpgn-group-group1,dpgn-group-group2" relevantSections="dpgn-section-guidelines,dpgn-section-guideline,dpgn-section-checklist" %&#125;``
- **Parameters:**
  - ``guidelineHeadingLevel`` {Number} Heading level of the guideline section header.
  - ``standardIndex`` {Number} Index of the standard that is the parent of the guideline to process.
  - ``guidelineIndex`` {Number} Index of the guideline to process.
  - ``relevantTags`` {String/Array} Optional (defaults to all). Comma-separated tag requirements or an array of tag requirements for which content to display. Each requirement can include multiple criteria, separated by "``+``" (e.g., ``"string1,string2+string3"``). This means that the target array must have an entry that either matches ``string1`` or entries that match ``string2`` and ``string3``. Partial match criteria (contains) start with "``~``" (e.g., ``"string1+~string2"``). Can be overridden by ``irrelevantTags``.
  - ``irrelevantTags`` {String/Array} Optional (defaults to none).  Comma-separated tag requirements or an array of tag requirements for which content to filter out. Each requirement can include multiple criteria, separated by "``+``" (e.g., ``"string1,string2+string3"``). This means that the target array must have an entry that either matches ``string1`` or entries that match ``string2`` and ``string3``. Partial match criteria (contains) start with "``~``" (e.g., ``"string1+~string2"``). Can be overridden by ``irrelevantTags``.
  - ``groupByTagsTags`` {String/Array} Optional (defaults to none). Comma-separated tags or array of tags that will be used to create filtered sub-sections for each tag, with a final section for anything that doesn't match any of the tags (to filter out content completely, use relevantTags instead). If a title is provided for the final section, that final section will be put at the end, otherwise the content will be put at the start.
  - ``groupByTagsTitles`` {String/Array} Optional (defaults to none). Semi-colon-separated subsection titles or array of subsection titles. Used to provide titles for the subsections for each tag in ``groupByTagsTags``. Provide an extra title (at the end) to group everything else in a final section at the end (otherwise anything that doesn't match will be put at the start). Must have at minimum the same number of entries in the same order as ``groupByTagsTags``.
  - ``relevantSections`` {String/Array} Optional (defaults to all). Comma-separated section tags or array of section tags that content must have at least one of to be displayed.
  - ``guidelineSectionsOrder`` {String/Array} Optional (defaults to ``site.guidelineSectionsOrder``). Comma-separated section keys or array of section keys determining the order to display the sections (omitting a section will prevent it from being displayed)
- **Returns:** {String} Outputs the content for a guideline.
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

#### output-sections.html

<!-- markdownlint-disable MD032 -->
- **Overview:** Outputs the guideline sections.
- **Example usage:** ``&#123;% include /functions/output-sections.html parentHeadingLevel="2" relevantTags="dpgn-digital-architectural" groupListsSeparately=true guidelineSectionsOrder="checklist,guides,solutions" %&#125;``
- **Parameters:**
  - ``parentHeadingLevel`` {Number} Heading level for the current section.
  - ``standardIndex`` {Number} Optional (required if guideline is provided, defaults to all standards). Index of the standard that is the parent of the guideline to process.
  - ``guidelineIndex`` {Number} Optional (defaults to all guidelines) Index of the guideline to process.
  - ``relevantTags`` {String/Array} Optional (defaults to all). Comma-separated tag requirements or an array of tag requirements for which content to display. Each requirement can include multiple criteria, separated by "``+``" (e.g., ``"string1,string2+string3"``). This means that the target array must have an entry that either matches ``string1`` or entries that match ``string2`` and ``string3``. Partial match criteria (contains) start with "``~``" (e.g., ``"string1+~string2"``). Can be overridden by ``irrelevantTags``.
  - ``irrelevantTags`` {String/Array} Optional (defaults to none).  Comma-separated tag requirements or an array of tag requirements for which content to filter out. Each requirement can include multiple criteria, separated by "``+``" (e.g., ``"string1,string2+string3"``). This means that the target array must have an entry that either matches ``string1`` or entries that match ``string2`` and ``string3``. Partial match criteria (contains) start with "``~``" (e.g., ``"string1+~string2"``). Can be overridden by ``irrelevantTags``.
  - ``groupListsSeparately`` {Boolean} Optional (defaults to false). When enabled, top-level lists will be grouped and merged together, followed by the rest of the content.
  - ``groupByTagsTags`` {String/Array} Optional (defaults to none). Comma-separated tags or array of tags that will be used to create filtered sub-sections for each tag, with a final section for anything that doesn't match any of the tags (to filter out content completely, use relevantTags instead). If a title is provided for the final section, that final section will be put at the end, otherwise the content will be put at the start.
  - ``groupByTagsTitles`` {String/Array} Optional (defaults to none). Semi-colon-separated subsection titles or array of subsection titles. Used to provide titles for the subsections for each tag in ``groupByTagsTags``. Provide an extra title (at the end) to group everything else in a final section at the end (otherwise anything that doesn't match will be put at the start). Must have at minimum the same number of entries in the same order as ``groupByTagsTags``.
  - ``relevantSections`` {String/Array} Optional (defaults to all). Comma-separated section tags or array of section tags that content must have at least one of to be displayed.
  - ``guidelineSectionsOrder`` {String/Array} Optional (defaults to ``site.guidelineSectionsOrder``). Comma-separated section keys or array of section keys determining the order to display the sections (omitting a section will prevent it from being displayed).
  - ``collapseSubsections`` {Boolean} Optional (defaults to true). Collapses subsections, preventing the output of the section element and heading without affecting content of the subsections.
- **Returns:** {String} Outputs the guideline sections.
<!-- markdownlint-enable MD032 -->

#### output-section-content.html

<!-- markdownlint-disable MD032 -->
- **Overview:** Outputs the content for the guideline section.
- **Example usage:** ``&#123;% include /functions/output-sections.html parentHeadingLevel="2" relevantTags="dpgn-digital-architectural" groupListsSeparately=true guidelineSectionsOrder="checklist,guides,solutions" %&#125;``
- **Parameters:**
  - ``parentHeadingLevel`` {Number} Heading level for the current section.
  - ``sectionKey`` {String} Dataset property name of the guideline section to process.
  - ``standardIndex`` {Number} Optional (required if guideline is provided, defaults to all standards). Index of the standard that is the parent of the guideline to process.
  - ``guidelineIndex`` {Number} Optional (defaults to all guidelines) Index of the guideline to process.
  - ``relevantTags`` {String/Array} Optional (defaults to all). Comma-separated tag requirements or an array of tag requirements for which content to display. Each requirement can include multiple criteria, separated by "``+``" (e.g., ``"string1,string2+string3"``). This means that the target array must have an entry that either matches ``string1`` or entries that match ``string2`` and ``string3``. Partial match criteria (contains) start with "``~``" (e.g., ``"string1+~string2"``). Can be overridden by ``irrelevantTags``.
  - ``irrelevantTags`` {String/Array} Optional (defaults to none). Comma-separated tag requirements or an array of tag requirements for which content to filter out. Each requirement can include multiple criteria, separated by "``+``" (e.g., ``"string1,string2+string3"``). This means that the target array must have an entry that either matches ``string1`` or entries that match ``string2`` and ``string3``. Partial match criteria (contains) start with "``~``" (e.g., ``"string1+~string2"``). Can be overridden by ``irrelevantTags``.
  - ``relevantSourceElements`` {String/Array} Optional (defaults to all). Comma-separated source elements or an array of source elements for which content to display (e.g., ``"ul,ol"``). Can be overridden by ``irrelevantSourceElements``. Only affects content at the current level (i.e., doesn't affect nested content for parent content that isn't filtered out).
  - ``irrelevantSourceElements`` {String/Array} Optional (defaults to none). Comma-separated source elements or an array of source elements for which content not to display (e.g., ``"ul,ol"``). Overrides ``relevantSourceElements``. Only affects content at the current level (i.e., doesn't affect nested content for parent content that isn't filtered out).
  - ``suppressParentListElement`` {Boolean} Optional (defaults to false). Prevents the output of the parent list element (useful when used with ``relevantSourceElements`` to merge lists together). Only affects lists at the current level (i.e., doesn't affect descendant lists).
  - ``collapseSubsections`` {Boolean} Optional (defaults to true). Collapses subsections, preventing the output of the section element and heading without affecting content of the subsections.
- **Returns:** {String} Outputs the guideline sections.
<!-- markdownlint-enable MD032 -->

#### output-content-array.html

<!-- markdownlint-disable MD032 -->
- **Overview:** Iterates over an array of content blocks, including nested content arrays, outputting the relevant content.
- **Example usage:** ``&#123;% include /functions/output-content-array.html contentArray=site.data.playbook.standards.content[0].guidelines.content[2].checklist.content relevantTags="dpgn-group-group1,dpgn-group-group2" %&#125;``
- **Parameters:**
  - ``contentArray`` {Array} Array of content blocks to process.
  - ``parentHeadingLevel`` (Integer} Preceding heading level (i.e., heading level for the section that contentArray is contained within).
  - ``relevantTags`` {String/Array} Optional (defaults to all). Comma-separated tag requirements or an array of tag requirements for which content to display. Each requirement can include multiple criteria, separated by "``+``" (e.g., ``"string1,string2+string3"``). This means that the target array must have an entry that either matches ``string1`` or entries that match ``string2`` and ``string3``. Partial match criteria (contains) start with "``~``" (e.g., ``"string1+~string2"``). Can be overridden by ``irrelevantTags``.
  - ``irrelevantTags`` {String/Array} Optional (defaults to none).  Comma-separated tag requirements or an array of tag requirements for which content to filter out. Each requirement can include multiple criteria, separated by "``+``" (e.g., ``"string1,string2+string3"``). This means that the target array must have an entry that either matches ``string1`` or entries that match ``string2`` and ``string3``. Partial match criteria (contains) start with "``~``" (e.g., ``"string1+~string2"``). Can be overridden by ``irrelevantTags``.
  - ``relevantSourceElements`` {String/Array} Optional (defaults to all). Comma-separated source elements or an array of source elements for which content to display (e.g., ``"ul,ol"``). Can be overridden by ``irrelevantSourceElements``. Only affects content at the current level (i.e., doesn't affect nested content for parent content that isn't filtered out).
  - ``irrelevantSourceElements`` {String/Array} Optional (defaults to none). Comma-separated source elements or an array of source elements for which content not to display (e.g., ``"ul,ol"``). Overrides ``relevantSourceElements``. Only affects content at the current level (i.e., doesn't affect nested content for parent content that isn't filtered out).
  - ``suppressParentListElement`` {Boolean} Optional (defaults to false). Prevents the output of the parent list element (useful when used with ``relevantSourceElements`` to merge lists together). Only affects lists at the current level (i.e., doesn't affect descendant lists).
  - ``collapseSubsections`` {Boolean} Optional (defaults to true). Collapses subsections, preventing the output of the section element and heading without affecting content of the subsections.
  - ``contentStandardIndex`` {Number} Optional (required if guideline is provided, defaults to none). Index of the standard that is an ancestor of the content being processed.
  - ``contentGuidelineIndex`` {Number} Optional (defaults to none) Index of the guideline that is an ancestor of the content being processed.
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
