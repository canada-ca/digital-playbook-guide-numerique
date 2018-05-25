---
layout: default
title: Views documentation
lang: en
altLang: fr
altLangPage: vues
collectionDirectory: docs
---

<!-- markdownlint-disable MD032 -->
- TOC
{:toc}
<!-- markdownlint-enable MD032 -->

## Overview

The Digital Playbook contains a lot of information but not all of it will be relevant to each task. Playbook views can make the Playbook more relevant and easier to use for certain tasks by providing only the information that is relevant to the task and ordering it in a way that makes sense for the user.

There are four steps to creating a Playbook view:

1. [Defining the view structure](#defining-the-view-structure)
1. [Tagging content that is relevant to the view](#tagging-content-that-is-relevant-to-the-view)
1. [Creating a page that retrieves and displays tagged content](#creating-a-page-that-retrieves-and-displays-tagged-content)
1. [Testing the view](#testing-the-view)

## Defining the view structure

The view structure consists of two levels of content groupings, view pages and view page sections. View pages can be used to divide up content according the logical steps for a task or scenario, helping users to focus on what is relevant for a given step. View page sections can be used to group and order content on a page to make it easier to consume for users.

### View pages

To determine which view pages are needed, consider the logical steps for the task or scenario for which the view is addressing. For instance, a task with four discrete phases could have a view page for each phase, allowing users to proceed from phase to phase, only being presented with the content that is relevant to the current phase.

For each view page, determine which content should be included. Varying sizes of blocks of content can be included, from large content sections to much smaller blocks of content such as individual list items and paragraphs. The content that will be included on a view page can be controlled by applying one or more tags to that content.

### View page sections

The Digital Playbook has the following page sections and ordering of content by default, which aligns with the structure of the [Playbook dataset](https://github.com/canada-ca/digital-playbook-guide-numerique/blob/master/_data/playbook.json): 

- Playbook overview
- Standard (one section per standard)
  - Introduction
  - Guidelines (links)
  - Related guidelines (links)
  - Guideline (one section per guideline)
    - Introduction
    - Checklist
    - Implementation guides
    - Similar resources

For more details about the dataset structure, see the [Playbook dataset schema](https://github.com/canada-ca/digital-playbook-guide-numerique/blob/master/_data/playbook_schema.json).

For simple views, the default page sections and ordering of content can be used to present the content that is included in the page. For more advanced views, the content could be reordered or combined in different ways to produce different page structures and designs.

It is recommended that any custom page sections and ordering of content be designed and tested with users to ensure that the resulting view page is easy for them to use and meets their needs. Custom page sections can be produced by using tags to create new content groupings, which don't exist in the Playbook by default, which can then be retrieved from the dataset and output to sections in the view page.

## Tagging content that is relevant to the view

Each piece of content can be tagged through the use of CSS classes, where each piece of content can have multiple tags. There is no specific naming convention for tags, but they do need to be unique. There should be a unique tags for view-level content grouping and each page-level content grouping. The tag can be either an [existing supported tag](#supported-tags) or a new tag. The suggested format for new tags is: <code>dpgn-&lt;group&gt;-&lt;item&gt;</code> (e.g., <code>dpgn-stage-alpha</code>).

Tags can be applied directly to content in the source .md files, using either the HTML class attribute (for blocks of HTML content) or through the Kramdown approach for applying CSS classes (for blocks of Markdown content).

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
      <td><pre>- List item 1
- List item 2
- List item 3
{: .dpgn-stage-alpha .dpgn-stage-live }</pre></td>
    </tr>
    <tr>
      <td>List item</td>
      <td><code>&lt;li class="dpgn-stage-alpha dpgn-stage-live"&gt;List item&lt;/li&gt;</code></td>
      <td><pre>- {: .dpgn-stage-alpha .dpgn-stage-live } List item</pre></td>
    </tr>
    <tr>
      <td>Paragraph</td>
      <td><code>&lt;p class="dpgn-stage-alpha dpgn-stage-live"&gt;Paragraph content&lt;/p&gt;</code></td>
      <td><pre>Paragraph content
{: .dpgn-stage-alpha .dpgn-stage-live }</pre></td>
    </tr>
  </tbody>
</table>

### Supported tags

The following tags are supported by default by the Digital Playbook:

**View tags:**

- <code>dpgn-stage-alpha</code>: Content is related to the alpha development stage
- <code>dpgn-stage-beta</code>: Content is related to the beta development stage
- <code>dpgn-stage-live</code>: Content is related to the live development stage

**Section tags:**

Section tags are mainly used for dataset generation and filtering. Each of these tags should only be used to identify sections or containers of the specified type.

- <code>dpgn-section-overview</code>: Contains the Playbook overview
- <code>dpgn-section-standard</code>: Contains a standard
- <code>dpgn-section-intro-standard</code>: Contains the introduction for the current standard
- <code>dpgn-section-guidelines</code>: Contains a list of links to the guidelines within the current standard
- <code>dpgn-section-guidelines-related</code>: Contains a list of links to the guidelines that are within other standards but related to the current standard
- <code>dpgn-section-guideline</code>: Contains a guideline for the current standard
- <code>dpgn-section-intro-guideline</code>: Contains the introduction for the current guideline
- <code>dpgn-section-checklist</code>: Contains the checklist(s) for the current guideline
- <code>dpgn-section-guides</code>: Contains links to the implementation guides for the current guideline
- <code>dpgn-section-similar</code>: Contains links to similar ressources for the current guideline

**Special tags:**

- <code>dpgn-data-ignore</code>: Content should be ignored when generating the dataset

## Creating a page that retrieves and displays tagged content

The Digital Playbook provides several helper functions to make it easier to to produce the desired output. This section will cover the basics of [building a view page](#building-a-view-page) and the available [helper functions](#helper-functions).

### Building a view page

1. Create English and French .md files for each view page using the template files in [views/view-template/](https://github.com/canada-ca/digital-playbook-guide-numerique/tree/master/views/view-template). These new .md files should placed in "en" and "fr" folders in the directory for the new view (<code>views/&lt;view-name&gt;</code>).</li>
1. For each .md file, update the following properties in the data at the start of the file delimited by "---":
  1. <code>title</code>: Title of the view page
  1. <code>altLangPage</code>: Filename (without extension) for the .md file in the other language
  1. <code>collectionDirectory</code>: Folder for the view (in the form <code>views/&lt;view-name&gt;</code>)
1. Build the content for each .md file:
  - **Simple views:** Update the <code>relevantTags</code> parameter in the include statement with the tags for the view page. Multiple tags should be separated with commas (e.g., <code>"dpgn-stage-alpha,dpgn-stage-live"</code>).</li>
  - **Advanced views:** use the [Playbook helper functions](#helper-functions) and/or build custom output using [Jekyll](https://jekyllrb.com/) and [Liquid](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers) on the Playbook data from <code>site.data.playbook</code> (English) or <code>site.data.guide</code> (French).

### Helper functions

## Testing the view

- gh-pages
- Travis-CI

