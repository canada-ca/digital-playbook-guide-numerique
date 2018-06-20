---
layout: default
title:  "7. Iterate and improve frequently (draft)"
lang: en
altLang: fr
altLangPage: 7-effectuer-iterations-ameliorations-constamment
---
<div class="dpgn-section-guidelines-related">

**Related guidelines:**

{% include functions/guideline-links.html guidelines="1.2, 3.3, 9.2" samePage=false includeStandardTitle=true %}

</div>

<section class="dpgn-section-guideline">

## 7.1  Build in an agile manner and continuously improve in response to user needs

<div class="dpgn-section-intro-guideline">

Design and build services using an agile and user-centred approach. Agile is an approach to building services that breaks the work into smaller chunks known as iterations. Build one feature of the service at a time until the entire service is complete.  It is a much lower risk approach than traditional build-it-all-at-once approach known as waterfall because frequent iterations expose any flaws in the original plan much faster (e.g. not getting approvals, not enough resources, not the right people on the team, etc.) **(Digital Service Standard (Ontario))**

### Why it matters

Agile methods build services that:

- are prototyped quickly, and enhanced with more features after the service goes live
- can be changed quickly if, for example, government policy or technology changes
- keep improving based on continual user feedback **(Digital Service Standard (Ontario))**

</div>

<section class="dpgn-section-checklist">

### Checklist

<!-- markdownlint-disable MD032 -->
- Work in an agile way
  - Use agile tools and techniques, and continue to do so even after the service has been released 
- follow a user-centred approach
  - Include the user in all areas of the prototyping (design, iterations and so on)
  - Clearly describe the lifecycle of a user story, from user research to production
  - Ensure the team responds to user research and usability testing
  - Explore opportunities for mobile optimization.
- Minimum Viable Product (MVP): a product with just enough features to satisfy early customers and to provide feedback for future product development
  - Determine the MVP
  - Ship a functioning MVP that solves a core user need as soon as possible using a “beta” or “test” period if needed
- Quality Assurance:
  - Have a quality assurance testing and rollback plan that supports frequent iterations to the service
  - Release features and improvements as soon as possible
  - Create a prioritized list of features and bugs, also known as the “feature backlog” and “bug backlog” 
- Teams:
  - Keep delivery teams small and focused; limit organizational layers that separate these teams from the business owners
  - Use a source code version control system (?) 
  - Give the entire project team access to the issue tracker and version control system
- Lessons Learned:
  - Review how other organizations approach service delivery and adapt/incorporate best practices where appropriate.
  - Explore interdepartmental and/or interjurisdictional partnership arrangements to identify opportunities for joined-up services. 
<!-- markdownlint-enable MD032 -->
</section>

<section class="dpgn-section-similar">

### Other Ressources

#### Canada
- [Be agile and user-centred (Digital Service Standard (Ontario))](https://www.ontario.ca/page/digital-service-standard#section-9)
- [Review and improve services continually (Think - Digital Design Playbook (ISED)) (internal to Government of Canada)](http://www.gcpedia.gc.ca/wiki/DDPlayBook_Think#3._Review_and_improve_services_continually)
- [Apply agile principles and be iterative. (Do - Digital Design Playbook (ISED)) (internal to Government of Canada)](http://www.gcpedia.gc.ca/wiki/DDPlayBook_Do#3._Apply_agile_principles_and_be_iterative.)

#### UK
- [Agile methods: an introduction (Service Manual (UK)](https://www.gov.uk/service-manual/agile-delivery/agile-methodologies)
- [Use agile methods (Digital Service Standard (UK))](https://www.gov.uk/service-manual/service-standard/use-agile-methods)
- [Agile delivery (Digital Service Standard (UK))](https://www.gov.uk/service-manual/agile-delivery)
- [247 different checklists for usability testing (userfocus.co.uk)](http://www.userfocus.co.uk/resources/guidelines.html)
- [How to be agile in an non-agile environment (Government Digital Service blog (UK))](https://gds.blog.gov.uk/2015/10/09/how-to-be-agile-in-a-non-agile-environment/)
- [You can’t be half agile (Government Digital Service Blog (UK))](https://gds.blog.gov.uk/2015/07/10/you-cant-be-half-agile/)
- [Agile tools and techniques (Service Manual (UK))](https://www.gov.uk/service-manual/agile-delivery/agile-tools-techniques)

#### US
- [Build the service using agile and iterative practices (Digital Services Playbook (US))](https://playbook.cio.gov/#play4)
- [Agile Principles & Practices (18F (US))](https://pages.18f.gov/agile/index.html)
- [Is your project using ‘agilefall’? (18F (US))](https://18f.gsa.gov/2015/12/29/is-your-project-using-agilefall/)
- [Method Cards (18F (US))](https://methods.18f.gov/)

#### AU
- [Agile and user-centred process (Digital Service Standard (AU))](https://www.dta.gov.au/standard/3-agile-and-user-centred/)
- [Agile (Digital Service Standard (AU))](https://www.dta.gov.au/standard/design-guides/agile/)
- [Service design and delivery process (Digital Service Standard (AU))](https://www.dta.gov.au/standard/service-design-and-delivery-process/)

#### Other
- [Scrum (Scrum Alliance)](https://www.scrumalliance.org/)
- [Lean (internal to Government of Canada)](http://www.gcpedia.gc.ca/wiki/Category:Lean_process_improvement_community)
- [GCpedia Community of Practice Agile Methods (internal to Government of Canada)](http://www.gcpedia.gc.ca/wiki/Ellen_Grove_-_Agile_Methods)
- [CRA Agile Framework (internal to Government of Canada)](http://www.gcpedia.gc.ca/wiki/Sprint_(CRA_Agile_Framework))
- [Manifesto for Agile Software Development (agilemanifesto.org)](http://agilemanifesto.org/)
)
</section>
</section>

<section class="dpgn-section-guideline">

## 7.2 Start small and test designs and assumptions continually, using evidence as the basis for iteration

<div class="dpgn-section-intro-guideline">

Services should be simple, inclusive and easy to use. Services should help clients achieve the outcomes that matter most. Assessing prototypes while the service is being designed will help you discover shortcomings that may deter clients from using the service or glitches that may affect the user experience. Assessing the service before it is officially launched will also help you make improvements that can go a long way in ensuring clients are satisfied when using the service. Rigorously and comprehensively testing the service from end-to-end is part of good service design.

</div>

<section class="dpgn-section-checklist">

### Checklist

- Testing
  - Don’t wait for a fully developed service to start testing.  Develop a prototype of the service and test it to validate ideas, to challenge assumptions and to identify opportunities for improvement.
  - Testing objective
    - Define the purpose of the test and what you want to learn? The purpose of the test is often determined by your business goals and user needs identified through feedback, analytics and other sources.
  - Testing audience
    - You need to ensure that the service works from technical perspective and from the perspective of the user and the service provider (including the help desk agent who assists clients when they face challenges using the service). By testing with a diverse group and different type of users, you can capture a more comprehensive understanding of how your service is working.
    - Make sure the participants are representative of your clients.
    - Utilize user experience testing services offered by the Chief Information Office and the Communications team
    - Create realistic scenarios that reflect the context and environment in which clients would use the service.
  - Testing Methodology
    - Identify the best testing method based on your needs. Examples of tests include:
      - Tree Testing - A test in which participants are asked to find a resource based on a series of menus.
      - Card Sorting Testing - A reverse tree test where participants sort through items and group them together in a hierarchal manner.
      - First Click Testing - A test that observes the first item that a participant clicks on and uses the selection as an indication as to whether users are directed as intended.
  - Analyse the Results
    - identify and prioritize insights from user research
    - analyze user research and use it to improve your service
- Documentation is important
  - document what you've built in each phase and why you built it (can be implemented in the style of a Change Log)
  - document the lifecycle of a user story from user research to production
- Service Deployment
  - make sure you have the ability to deploy software frequently with minimal disruption to users
  - determine how long you expect your service to be in beta and why
  - document your way of [deploying software](https://www.gov.uk/service-manual/making-software/deployment.html), ie how you can deploy frequently with minimum impact on users

</section>

<section class="dpgn-section-similar">

### Other resources


#### Canada
- [Test the service before launching the service. (Assess - Digital Design Playbook (ISED)) (internal to Government of Canada)](http://www.gcpedia.gc.ca/wiki/DDPlayBook_Assess#1._Test_the_service_before_launching_the_service.)
- [How to Set Up User Testing (internal to Government of Canada)](http://www.gcpedia.gc.ca/wiki/How_to_Set_Up_User_Testing/Comment_d%C3%A9finir_les_essais_par_les_utilisateurs)
- [UXWG guide to Usability Testing (internal to Government of Canada)](http://www.gcpedia.gc.ca/wiki/The_UXWG_guide_to_Usability_Testing)
- [TBITS 26: Software Product Evaluation, Quality Characteristics and Guidelines for their Use (GC)](https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=17283)

#### UK
- [Iterate and improve frequently (Digital Service Standard (UK))](https://www.gov.uk/service-manual/service-standard/iterate-and-improve-frequently)
- [Test your service's performance (Service Manual (UK))](https://www.gov.uk/service-manual/technology/test-your-services-performance)
- [Quality assurance: testing your service regularly (Service Manual (UK))](https://www.gov.uk/service-manual/technology/quality-assurance-testing-your-service-regularly)
- [Exploratory Testing (Service Manual (UK))](https://www.gov.uk/service-manual/technology/exploratory-testing)

#### US
- [Testing Cookbook (18F (US))](https://pages.18f.gov/testing-cookbook/go/)
- [Testing your service (Service Manual (UK))](https://www.gov.uk/service-manual/technology#testing-your-service)
- [Agile delivery (Digital Service Standard (UK))](https://www.gov.uk/service-manual/agile-delivery)

#### AU
- [Performance Testing (Digital Service Standard (AU))](https://www.dta.gov.au/standard/design-guides/performance-testing/)

#### Other
</section>
</section>














