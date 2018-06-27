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

Provides practical and measurable guidance to assist individual projects with becoming more agile, open and user-focused.
{: .dpgn-overview-start}

<section class="dpgn-overview-start">

### Structure of the Digital Playbook (draft)

The Government of Canada Digital Playbook provides practical and measurable guidance to assist individual projects with becoming more agile, open and user-focused by applying the Digital Standards. For each standard the Playbook offers a set of guidelines. For each guideline, the Playbook provides a checklist for meeting the guideline, a list of guides and other content to assist with implementation.

- **Standards** are strategic and describe the expected behaviour.
- **Guidelines** are tactical and describe in general terms how to behave according to the standards.
- **Checklists** include items that are operational and describe in specific terms how to meet the guideline.
- **Implementation guides** provide additional, detailed information on specific sub-topics to assist with implementing the guideline.
- **Reusable solutions** include templates, tools and other solutions to assist with implementing the guideline.
- **Similar resources** are sources of information (e.g., standards from other jurisdictions) that are similar to the guideline.

The Government of Canada Digital Playbook is available under the [Open Government Licence - Canada](http://open.canada.ca/en/open-government-licence-canada), except where otherwise stated.

</section>

<section class="dpgn-data-ignore">

<!-- markdownlint-disable MD022 -->
### {{ dataSource.standards.title }}
{: .dpgn-data-ignore}
<!-- markdownlint-enable MD022 -->
  
{% include /functions/standard-links.html samePage=false listClasses="colcount-md-2 list-unstyled dpgn-data-ignore" linkClasses="btn btn-default btn-lg mrgn-bttm-md" subLinkClasses="btn-block text-left" %}

</section>

{% include views-vues.html lang=page.lang %}

<section class="dpgn-overview-end">

### About the Digital Playbook

<section class="dpgn-overview-end">
  
#### Objective

The objective of the Digital Playbook is to provide detailed guidance for implementing the Digital Standards, whose purpose is to guide the Government of Canada in digital transformation and augmented service delivery. The Digital Playbook is intended to be flexible and adaptable, helping users to focus on the guidance that is most relevant to them.

**Improving government services in the digital age.** Our goal is to provide easily accessible, integrated, and trusted public services to Canadians. As a government, we need to move away from monolithic projects with rigid designs that are built in silos with minimal input from the user community. This Digital Playbook, and the Digital Standards it is built upon, will form the foundation of the Government of Canada’s shift to becoming more agile, open, and user-focused. It’s a journey.

**It takes a village.** The goal is to co-create this Digital Playbook with the public and key stakeholder groups to help government build and deliver excellent services for its citizens. We believe it will take a community of individuals, with varying backgrounds and perspectives, to come together and help define and share guidance, direction, approaches, tools and stories. We hope to make the playbook as collaborative as possible. And of course the foundation will be built upon the Government Canada Digital Standards and the pioneering work of the UK, the United States, Australia, and the province of Ontario. Thank you.

**Together we’ll make them better.** This will be a living playbook and we will continue to update and evolve it over time as we better understand the complexities involved in putting it into practice. We expect the community to provide input to help refine it. This playbook will reflect how we will design for ourselves as well as how we will design for others, diving into the details and providing guidance and direction. We can’t do this alone.

</section>

<section class="dpgn-overview-end">

#### Implementation approach

The approach to developing and releasing the Digital Playbook will be similar to the Web Experience Toolkit and HTML5, where the Digital Playbook continuously evolves on GitHub and stable snapshots of that work are released as formal versions through Canada.ca. This enables the Digital Playbook to be both agile and ever-improving on GitHub while also providing a stable version through Canada.ca that can be relied upon for guidance.

Community feedback and contributions to the Digital Playbook are encouraged, with designated reviewers for each part of the Digital Playbook being responsible for reviewing, responding to, requesting changes (as needed) and eventually approving or declining the feedback and contributions. The primary reviewers are individuals from the related policy areas and areas of expertise, and are also responsible for contributing content and engaging with their respective communities.

To ensure that the Digital Playbook is as easy to use as possible, contributors/reviewers would work with their respective communities to determine how to make the Digital Playbook more applicable to their day-to-day work, including for which tasks/scenarios personalized [Digital Playbook views]({{ site.baseurl }}/docs/{{ page.lang }}/views{{ site.RenderedFileExtension }}) should be provided.

</section>
</section>
