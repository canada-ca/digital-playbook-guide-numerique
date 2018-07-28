---
layout: default
title: Is Agile Right for My Project? (draft)
lang: en
altLang: fr
altLangPage: agile-quand-utiliser
collectionDirectory: views-vues/agile
questions:
  "1": Customer Availability
  "1-a1": I need the customer to be available throughout the project.
  "1-a2": I do not mind if the customer is minimally involved throughout the project.
  "2": Scope / Features
  "2-a1": I welcome changes throughout my project (even at the expense of Cost, Schedule, or other features).
  "2-a2": I know the scope in advance, or when the contract terms limit changes.
  "3": Requirements
  "3-a1": I am uncertain about the requirements from the beginning of the project, and I am open to changing them along the way.
  "3-a2": I am certain about the requirements from the beginning and there is little or no likelihood of change.
  "4": Feature Prioritization
  "4-a1": I am open to prioritization by value to ensure the most valuable features are implemented first.
  "4-a2": I am looking to have a "do everything we agreed upon" approach and an "all or nothing" approach.
  "5": Team
  "5-a1": It is possible for me to have smaller, dedicated teams with a high degree of coordination and synchronization.
  "5-a2": I prefer to limit team coordination / synchronization to handoff points.
  "6": Funding
  "6-a1": I have a funding model that supports an iterative approach.
  "6-a2": I need to have funding agreements up-front.
  "7": Track Record of Success
  "7-a1": Project failure rate for previous projects managed using a waterfall approach is unacceptably high.
  "7-a2": Projects have been delivering successfully with a waterfall approach.
  "8": Software Development Project
  "8-a1": My project is a software development project.
  "8-a2": My project is not a software development project.
  "9": Co-location
  "9-a1": My team is co-located (and would benefit from daily scrums to discuss status, roadblocks and input from the product owner).
  "9-a2": My team is not co-located.
  "10": Proactive Product Owners
  "10-a1": I have a product owner that is engaged, empowered, readily available, knowledgeable and can provide the development team with constant feedback.
  "10-a2": I do not have a product owner that is very engaged, readily available, knowledgeable and can provide the development team with constant feedback.
  "11": Teamwork and Collaboration
  "11-a1": My team consists of dedicated team members, cross-functional expertise, is collaborative and show initiative.
  "11-a2": My team does not have dedicated team members, cross-functional expertise, collaborative and show initiative.
  "12": Willingness to Fail and Learn
  "12-a1": My organization (supporting management, client, etc.) are amenable to failing fast and learning faster.
  "12-a2": My organization (supporting management, client, etc.) sees failure as a negative thing.
criteriaAgilePoints: [ 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10 ]
recommendationAgileElement: Agile may be an element you want to incorporate in your project.
recommendationAgileManagingProject: You will likely want to take an agile approach in managing your project.
recommendationAgileManagingProjectAndScrum: You will likely want to take an agile approach in managing your project and consider scrum as a useful tool.
isAgileRecommended: Is Agile recommended?
agileIsRecommendedFor: Agile is recommended for
---
{% assign dataVariable = site.playbookData[page.lang] %}{%
assign dataSource = site.data[dataVariable] %}
<section>

<div class="wb-inview" data-inview="progress-overlay">

## Introduction

</div>

The goal of this questionnaire is to help determine whether Agile is right for your project. It is not intended to make the decision for you but to instead help inform that decision.

The questions in this questionnaire are inspired by the following ressources:

<!-- markdownlint-disable MD032 -->
- [Waterfall vs. Agile: Which is the Right Development Methodology for Your Project? (Segue Technologies)](https://www.seguetech.com/waterfall-vs-agile-methodology/)
- [How to Know If Agile Is Right for You (ProjectManager.com)](https://www.projectmanager.com/blog/know-agile-right)
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->

</section>

{% include views-vues/agile/agile-use-when-quand-utiliser-questionnaire.html %}

{% include views-vues/agile/agile-use-when-quand-utiliser-results-resultats.html %}
