---
layout: default
title: How should I implement an Automated Decision System? (draft)
lang: en
altLang: fr
altLangPage: decision-automatise
collectionDirectory: views-vues/automated-decision-automatise
---
{% assign dataVariable = site.playbookData[page.lang] %}{%
assign dataSource = site.data[dataVariable] %}

This page provides personalized guidance for how projects can implement an Automated Decision System.

{% assign currentStandard = dataSource.standards.content[7] %}{%
include /functions/output-content-array.html contentArray=currentStandard.introduction.content parentHeadingLevel="1" relevantTags="dpgn-automated-decision-introduction" contentStandardIndex=7 %}

<!-- markdownlint-disable MD032 -->
- TOC
{:toc .lst-spcd}
<!-- markdownlint-enable MD032 -->

<details>
<summary markdown="0">Filters (page-specific)</summary>
<form action="#" method="post" class="wb-contentfilter">
<fieldset>
<legend>Automated Decision System type</legend>
<ul class="list-unstyled">
<li><input type="checkbox" id="dpgn-automated-decision-type-classify" /> <label for="dpgn-automated-decision-type-classify">Classify cases in terms of risk and priority</label></li>
<li><input type="checkbox" id="dpgn-automated-decision-type-identify" /> <label for="dpgn-automated-decision-type-identify">Identify cases for human review or investigation</label></li>
<li><input type="checkbox" id="dpgn-automated-decision-type-recommendation" /> <label for="dpgn-automated-decision-type-recommendation">Provide overall recommendations about whether an application should be approved</label></li>
<li><input type="checkbox" id="dpgn-automated-decision-type-final" /> <label for="dpgn-automated-decision-final">Render the complete administrative decision</label></li>
</ul>
</fieldset>

<fieldset>
<legend>Impact level</legend>
<ul class="list-unstyled">
<li><input type="checkbox" id="dpgn-automated-decision-level-i" /> <label for="dpgn-automated-decision-level-i">Level I</label></li>
<li><input type="checkbox" id="dpgn-automated-decision-level-ii" /> <label for="dpgn-automated-decision-level-ii">Level II</label></li>
<li><input type="checkbox" id="dpgn-automated-decision-level-iii" /> <label for="dpgn-automated-decision-level-iii">Level III</label></li>
<li><input type="checkbox" id="dpgn-automated-decision-level-iv" /> <label for="dpgn-automated-decision-level-iv">Level IV</label></li>
</ul>

<details>
<summary markdown="0">Impact level details</summary>
<dl>
<dt>Level I</dt>
<dd>
<p><strong>The decision has a little to no impact on the rights or interests of an individual, community, organization, sociey, or the environment.</strong></p>
<p>Erroneous decision could reasonably be expected to cause nil to minimial harm.</p>
</dd>
<dt>Level II</dt>
<dd>
<p><strong>The decision has a moderate impact on the rights or interests of an individual, community, organization, sociey, or the environment.</strong></p>
<p>Compromise could reasonably be expected to cause minimal to moderate harm.</p>
</dd>
<dt>Level III</dt>
<dd>
<p><strong>The decision has a high impact on the rights or interests of an individual, community, organization, sociey, or the environment.</p>
<p>Compromise could reasonably be expected to cause moderate to serious harm.</p>
</dd>
<dt>Level IV</dt>
<dd>
<p><strong>The decision has a very high impact on the rights or interests of an individual, community, organization, sociey, or the environment.</p>
<p>Compromise could reasonably be expected to cause serious to catastrophic harm.</p>
</dd>
</dl>
</details>
</fieldset>
<input type="button" value="{{ site.ApplyFilters[page.lang] }}" class="btn btn-primary contentfilter-button" />
</form>
</details>

<section>

## 1. Initiation

{% include /functions/output-sections.html parentHeadingLevel="2" relevantTags="dpgn-automated-decision-initiation-1,dpgn-automated-decision-initiation-2,dpgn-automated-decision-initiation-3,dpgn-automated-decision-initiation-4" groupListsSeparately=true groupByTagsTags="dpgn-automated-decision-initiation-1,dpgn-automated-decision-initiation-2,dpgn-automated-decision-initiation-3,dpgn-automated-decision-initiation-4" guidelineSectionsOrder="checklist" %}

{% include /functions/output-sections.html parentHeadingLevel="2" relevantTags="dpgn-automated-decision-initiation" groupListsSeparately=true guidelineSectionsOrder="guides,solutions" %}

</section>

<section>

## 2. Analysis/Approach

{% include /functions/output-sections.html parentHeadingLevel="2" relevantTags="dpgn-automated-decision-analysis-approach" groupListsSeparately=true guidelineSectionsOrder="checklist, guides,solutions" %}

</section>

<section>

## 3. Design/Build

{% include /functions/output-sections.html parentHeadingLevel="2" relevantTags="dpgn-automated-decision-design-build" groupListsSeparately=true guidelineSectionsOrder="checklist, guides,solutions" %}

</section>

<section>

## 4. Deployment/Operation

{% include /functions/output-sections.html parentHeadingLevel="2" relevantTags="dpgn-automated-decision-deployment-operation" groupListsSeparately=true guidelineSectionsOrder="checklist, guides,solutions" %}

</section>

<section>

## 5. Evaluation

{% include /functions/output-sections.html parentHeadingLevel="2" relevantTags="dpgn-automated-decision-evaluation" groupListsSeparately=true guidelineSectionsOrder="checklist, guides,solutions" %}

</section>
