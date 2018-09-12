---
layout: default
title:  "Government of Canada Digital Playbook (draft)"
lang: en
altLang: fr
altLangPage: apercu
---
{% assign dataVariable = site.playbookData[page.lang] %}
{% assign dataSource = site.data[dataVariable] %}
<section class="dpgn-section-overview">

## Overview (draft)

Provides practical and detailed guidance to assist the Government of Canada in digital transformation and augmented service delivery, including becoming more agile, open and user-focused. Includes task-specific views and interactive features to make it easier to find relevant guidance and to apply it to day-to-day work.
{: .dpgn-overview-start}

{% include views-vues.html lang=page.lang %}

<section class="dpgn-overview-end">

### About the Digital Playbook

<section class="dpgn-overview-end">
  
#### Improving government services in the digital age

Our goal is to provide public services to Canadians which are simple to use and trustworthy. This Digital Playbook, and the Digital Standards it is built upon, form the foundation of the Government of Canada’s shift to becoming more agile, open, and user-focused. While overall accountability for delivery of digital services rests with deputy heads, these standards and the Digital Playbook will guide teams in designing digital services in a way that best serves Canadians.

The goal is to co-create this Digital Playbook with the public and key stakeholder groups. This is a living playbook and will continue to evolve over time as we better understand the complexities involved in putting it into practice.

The Government of Canada Digital Playbook is available under the [Open Government Licence - Canada](http://open.canada.ca/en/open-government-licence-canada), except where otherwise stated.

</section>

<section class="dpgn-overview-end">

#### Structure of the Digital Playbook (draft)

The Digital Playbook is composed of multiple different views which are designed for certain tasks by providing only the information that is relevant to the task and ordering it in a way that makes sense for the user. Each of these views could be composed of one or more of the following:

- **Standards** are strategic and describe the expected behaviour.
- **Guidelines** are tactical and describe in general terms how to behave according to the standards.
- **Checklists** include items that are operational and describe in specific terms how to meet the guideline.
- **Implementation guides** provide additional, detailed information on specific sub-topics to assist with implementing the guideline.
- **Reusable solutions** include templates, tools and other solutions to assist with implementing the guideline.
- **Similar resources** are sources of information (e.g., standards from other jurisdictions) that are similar to the guideline.

</section>

<section class="dpgn-overview-end">

#### Implementation approach

The approach to developing and releasing the Digital Playbook will be similar to the Web Experience Toolkit and HTML5, where the Digital Playbook continuously evolves on GitHub and stable snapshots of that work are released as formal versions through Canada.ca. This enables the Digital Playbook to be both agile and ever-improving on GitHub while also providing a stable version through Canada.ca that can be relied upon for guidance.

Community feedback and contributions to the Digital Playbook are encouraged, with designated reviewers for each part of the Digital Playbook being responsible for reviewing, responding to, requesting changes (as needed) and eventually approving or declining the feedback and contributions. The primary reviewers are individuals from the related policy areas and areas of expertise, and are also responsible for contributing content and engaging with their respective communities.

To ensure that the Digital Playbook is as easy to use as possible, contributors/reviewers would work with their respective communities to determine how to make the Digital Playbook more applicable to their day-to-day work, including for which tasks/scenarios personalized [Digital Playbook views]({{ site.baseurl }}/docs/{{ page.lang }}/views{{ site.RenderedFileExtension }}) should be provided.

</section>
</section>
