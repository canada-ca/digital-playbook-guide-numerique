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

To ensure that the Digital Playbook is as easy to use as possible, contributors/reviewers would work with their respective communities to determine how to make the Digital Playbook more applicable to their day-to-day work, including for which tasks/scenarios personalized “views” of the Digital Playbook should be provided. 

There are two parts to creating a Playbook view:

1. [Tagging content that is relevant to the view](#tagging-content-that-is-relevant-to-the-view)
1. [Creating a page that displays tagged content in the desired fashion](#creating-a-page-that-displays-tagged-content-in-the-desired-fashion)

## Tagging content that is relevant to the view

Each piece of content can be tagged through the use of CSS classes, where each piece of content can have multiple tags. There is no specific naming convention for tags, but they do need to be unique. The suggested format is: <code>dpgn-&lt;group&gt;-&lt;item&gt;</code> (e.g., <code>dpgn-stage-alpha</code>). The following tags are already supported:

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

## Creating a page that displays tagged content in the desired fashion

<ol>
  <li>Create a view page for each language:
    <ol>
      <li>Go the the <code>views</code> directory</li>
      <li>Click the "Create new file" button</li>
      <li>Add "<view-directory>/<lang-code>/<filename>" to "Name your file..." (<code>lang-code</code> is "en" for English and "fr" for French)</li>
      <li>Add the following front-matter, replacing "&lt;...&gt;" with the required content
<pre>
---
layout: default
title: &lt;Page title&gt;
lang: &lt;lang-code&gt;
altLang: &lt;other-lang-code&gt;
altLangPage: &lt;filename without extension&gt;
collectionDirectory: views/&lt;view-directory&gt;
---
</pre>
      </li>
      <li></li>
    </ol>
  </li>
</ol>
## Supported tags

### View tags

- <code>dpgn-stage-alpha</code>: Content is related to the alpha development stage
- <code>dpgn-stage-beta</code>: Content is related to the beta development stage
- <code>dpgn-stage-live</code>: Content is related to the live development stage

### Section tags

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

### Special tags

- <code>dpgn-data-ignore</code>: Content should be ignored when generating the dataset
