---
layout: default
title:  "7. Iterate and improve frequently (draft)"
lang: en
altLang: fr
altLangPage: 7-effectuer-iterations-ameliorations-constamment
---
<div class="dpgn-section-intro-standard">

**[TODO: Add/revise introductory text]**

</div>

<div class="dpgn-section-guidelines">

**Guidelines:**

<!-- markdownlint-disable MD032 -->
- TOC
{:toc}
<!-- markdownlint-enable MD032 -->

</div>

<div class="dpgn-section-guidelines-related">

**Related guidelines:**

{% include functions/guideline-links.html guidelines="1.2, 3.3, 9.2" samePage=false includeStandardTitle=true %}

</div>

<section class="dpgn-section-guideline">

## 7.1 Build in an agile manner and continuously improve in response to user needs

<div class="dpgn-section-intro-guideline">

**[TODO: Add/revise introductory text]**

**Introduction examples:**

**Digital Service Standard (UK):** Build your service using the agile, iterative and user-centred methods set out in the manual.

Using agile methods helps you to build services that:

- meet the needs of your users
- are easy and convenient for people to use
- you can change easily, eg if government policy or technology policy changes
- you can keep improving, eg based on user feedback
- cost less and are more accountable

**Digital Service Standard (Ontario):** Design and build the service using an agile and user-centred approach. Agile is an approach to building services that breaks the work into smaller chunks known as iterations. Build one feature of the service at a time until the entire service is complete.

It is a much lower risk approach than traditional build-it-all-at-once approach known as waterfall because frequent iterations expose any flaws in the original plan much faster (e.g. not getting approvals, not enough resources, not the right people on the team, etc.)

User-centred methods such as user research and usability testing put the focus on making services that are easy-to-use. Traditional government services focus on meeting business needs and aligning with policy goals. A user-centred approach ensures business needs are also balanced against user needs. This helps to increase digital service uptake.

### Why it matters

Agile methods build services that:

- can be prototyped quickly (and shown to users for regular feedback)
- meet the needs of users
- can change easily if, for example, government policy or technology changes
- can keep improving based on user feedback
- can be built quickly with a minimum set of features, and enhanced with more features after the service goes live

**Digital Service Playbook (US):** We should use an incremental, fast-paced style of software development to reduce the risk of failure. We want to get working software into users' hands as early as possible to give the design and development team opportunities to adjust based on user feedback about the service. A critical capability is being able to automatically test and deploy the service so that new features can be added often and be put into production easily.

**Digital Service Standard (AU):** Design and build the service using the service design and delivery process, taking an agile and user-centred approach.

Designing services in a user-centred way means that the services you deliver will be easy to use and convenient for the people who need to use them, helping them to stay in the digital channel.

Designing using agile methods allows you to be more proactive and respond easily to change, both in technology and government policy. Services should be improved frequently; they will be cheaper and more accountable to users.

**3. Review and improve services continually (Think - Digital Design Playbook (ISED)):** The [TBS Policy on Service](https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=27916) and the [TBS Management Accountability Framework (MAF)](http://www.tbs-sct.gc.ca/hgw-cgf/oversight-surveillance/maf-crg/index-eng.asp) require regular reviews of priority services in order to identify opportunities for service redesign." By reviewing services regularly, service providers can ensure that services continue to be relevant, effective and efficient, and deliver best value to clients.

Use quantitative and qualitative data to help with regular reviews of your service. User needs and technology evolve. There will always be room for improvement.

**3. Apply agile principles and be iterative. (Do - Digital Design Playbook (ISED)):** Applying agile involves continuous improvement by analyzing data, making adjustments and iterating to identify and test improvements. Core principles of agile include defining a measurable goal; sharing ownership of the problem; taking small steps with visible impact; validating ideas/solutions with the target audience (e.g., the client); measuring success; reflecting, adjusting and iterating.

Start with a representation or prototype of the solution that will be tested and revised based on feedback and insights. Each iteration improves on the previous version. Your understanding of a problem and how to address it evolves each time you refine an idea and re-craft potential solutions. Taking an iterative approach also helps you reduce risks. It makes big failures less likely and turns mistakes into learning opportunities.

</div>

<section class="dpgn-section-checklist">

### Checklist

**[TODO: Add/revise checklist items]**

- {: .dpgn-digital-architectural} Use agile **({{ site.DigitalArchitectural.en }})**
  - Be an agile Developer: Develop in an iterative manner, with key stakeholders participation from the beginning, releasing minimum viable product as soon as possible and iteratively building out functionality
  - Be an agile administrator: Promote DEVOPS and automate, monitor and unify all platform and software construction from testing to release and infrastructure management

**Alpha stage:**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
- test hypotheses and underlying assumptions with several prototypes **(Digital Service Standard (AU))**
- follow a user-centred approach; include the user in all areas of the prototyping (design, iterations and so on) **(Digital Service Standard (AU))**
- work out incrementally what is the “right thing to build” **(Digital Service Standard (AU))**
- determine the minimum viable product (MVP). **(Digital Service Standard (AU))**
{: .dpgn-stage-alpha}
<!-- markdownlint-enable MD032 -->

**Beta and live stages:**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
- show how the service has responded to user research and usability testing **(Digital Service Standard (AU))**
- clearly describe the lifecycle of a user story, from user research to production **(Digital Service Standard (AU))**
- explain the deployment process and how you are able to support frequent deployments with minimal impact to users. **(Digital Service Standard (AU))**
{: .dpgn-stage-beta .dpgn-stage-live}
<!-- markdownlint-enable MD032 -->

**Alpha, beta and live stages:**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
- work in an agile way, using agile tools and techniques, and continue to do so when the service is live **(Digital Service Standard (Ontario / UK / AU))**
- ensure the team reviews and iterates the ways problems are fixed **(Digital Service Standard (Ontario / UK / AU))**
- use agile tools and techniques to communicate with each other **(Digital Service Standard (UK / AU))**
- ensure the team responds to user research and usability testing **(Digital Service Standard (Ontario / UK))**
- show that your service governance is agile, based on clear and measurable goals **(Digital Service Standard (Ontario / UK / AU))**
- explore design options for your prototype and explain why some are discarded **(Digital Service Standard (Ontario / UK))**
- show how the design of the service has changed over time because of user research findings **(Digital Service Standard (Ontario / UK))**
- document the design options you're considering for your assisted digital support **(Digital Service Standard (UK))**
- identify any problems found in research and solutions to improve the service **(Digital Service Standard (Ontario / UK))**
- have a quality assurance testing and rollback plan that supports frequent iterations to the service **(Digital Service Standard (Ontario))**
- use a phased approach to test changes to part of service, when feature-based changes are not feasible **(Digital Service Standard (Ontario))**
- Ship a functioning "minimum viable product" (MVP) that solves a core user need as soon as possible, no longer than three months from the beginning of the project, using a "beta" or "test" period if needed **(Digital Service Playbook (US))**
- Run usability tests frequently to see how well the service works and identify improvements that should be made **(Digital Service Playbook (US))**
- Ensure the individuals building the service communicate closely using techniques such as launch meetings, war rooms, daily standups, and team chat tools **(Digital Service Playbook (US))**
- Keep delivery teams small and focused; limit organizational layers that separate these teams from the business owners **(Digital Service Playbook (US))**
- Release features and improvements multiple times each month **(Digital Service Playbook (US))**
- Create a prioritized list of features and bugs, also known as the "feature backlog" and "bug backlog" **(Digital Service Playbook (US))**
- Use a source code version control system **(Digital Service Playbook (US))**
- Give the entire project team access to the issue tracker and version control system **(Digital Service Playbook (US))**
- Use code reviews to ensure quality **(Digital Service Playbook (US))**
- Explore opportunities for improved usability of service. **(3. Review and improve services continually (Think - Digital Design Playbook (ISED)))**
- Review how other departments and governments approach service delivery and adapt/incorporate best practices where appropriate. **(3. Review and improve services continually (Think - Digital Design Playbook (ISED)))**
- Explore interdepartmental and/or interjurisdictional partnership arrangements to identify opportunities for joined-up services. **(3. Review and improve services continually (Think - Digital Design Playbook (ISED)))**
- Design the website or web application iteratively; the process should start with low-fidelity methods, such as quick sketches, and progressively moves to higher-fidelity methods, such as prototypes. **(3. Review and improve services continually (Think - Digital Design Playbook (ISED)))**
- Evaluate the design of the website or web application regularly and improve it throughout its life cycle through various methods such as observing users completing tasks during **(3. Review and improve services continually (Think - Digital Design Playbook (ISED)))**
- Consider other service channels, such as telephone and in-person, used to obtain information and services from the Government of Canada. **(3. Review and improve services continually (Think - Digital Design Playbook (ISED)))**
- Explore opportunities for channel integration and mobile optimization. **(3. Review and improve services continually (Think - Digital Design Playbook (ISED)))**
- Consult the TBS Technical Specifications for the Web and Mobile Presence. **(3. Review and improve services continually (Think - Digital Design Playbook (ISED)))**
- Websites and web applications are optimized for mobile devices by: **(3. Review and improve services continually (Think - Digital Design Playbook (ISED)))**
  - Using the Web Experience Toolkit (WET) for adapting the layout and design of websites and web applications for small, medium and large screen sizes, and for different input methods, such as touch input, and keyboard and mouse input.
  - Designing the content and interface of websites and web applications for small, medium and large screen sizes and for different input methods, such as touch input and keyboard and mouse input.
- Start with a prototype **(3. Apply agile principles and be iterative. (Do - Digital Design Playbook (ISED)))**
  - Create a minimum viable product, that is, a version of the service with just enough features to gather insights, test assumptions and inform future improvements. Use the prototype to capture client feedback and then make improvements until you have a version that really meets client needs.
- When iterating, focus on workable solutions over comprehensive documentation. **(3. Apply agile principles and be iterative. (Do - Digital Design Playbook (ISED)))**
  - Having a workable solution that can be tested and validated will give you useful information for improving your service. Whenever possible, focus on results rather than unnecessary documentation and reporting (while staying within policy and regulatory limits).
- When you can, use [agile tools and techniques](https://www.gov.uk/service-manual/agile-delivery/agile-tools-techniques). **(3. Apply agile principles and be iterative. (Do - Digital Design Playbook (ISED)))**
  - Techniques can include: daily stand ups, issue trackers, code reviews, rapid prototyping, design sprints, usability testing, user stories, retrospective meetings.
- Build and release a core-function oriented product that meets user needs. **(3. Apply agile principles and be iterative. (Do - Digital Design Playbook (ISED)))**
  - Focus on developing a product that takes care of the client’s task(s). Additional capacities and new features to service can be added later as long as these add-ons do not result in the service/product losing effectiveness at core functions.
{: .dpgn-stage-alpha .dpgn-stage-beta .dpgn-stage-live}
<!-- markdownlint-enable MD032 -->

</section>

<section class="dpgn-section-guides">

### Implementation guides

**[TODO: Add/revise implementation guide items]**

- [247 different checklists for usability testing (userfocus.co.uk)](http://www.userfocus.co.uk/resources/guidelines.html)
- [Agile Principles & Practices (18F (US))](https://pages.18f.gov/agile/index.html)
- [Scrum (Scrum Alliance)](https://www.scrumalliance.org/)
- [Lean (internal to Government of Canada)](http://www.gcpedia.gc.ca/wiki/Category:Lean_process_improvement_community)
- [Kanban (développement) (Wikipédia)](https://fr.wikipedia.org/wiki/Kanban_(d%C3%A9veloppement))
- [GCpedia Community of Practice Agile Methods (internal to Government of Canada)](http://www.gcpedia.gc.ca/wiki/Ellen_Grove_-_Agile_Methods)
- [CRA Agile Framework (internal to Government of Canada)](http://www.gcpedia.gc.ca/wiki/Sprint_(CRA_Agile_Framework))
- [Agile delivery (Digital Service Standard (UK))](https://www.gov.uk/service-manual/agile-delivery)
- [Agile (Digital Service Standard (AU))](https://www.dta.gov.au/standard/design-guides/agile/)
- [Service design and delivery process (Digital Service Standard (AU))](https://www.dta.gov.au/standard/service-design-and-delivery-process/)
- [Manifesto for Agile Software Development (agilemanifesto.org)](http://agilemanifesto.org/)
- [Is your project using ‘agilefall’? (18F (US))](https://18f.gsa.gov/2015/12/29/is-your-project-using-agilefall/)
- [Agile methods: an introduction](https://www.gov.uk/service-manual/agile-delivery/agile-methodologies) **(Service Manual (UK))**
- [How to be agile in an non-agile environment (Government Digital Service blog (UK))](https://gds.blog.gov.uk/2015/10/09/how-to-be-agile-in-a-non-agile-environment/)
- [You can’t be half agile (Government Digital Service Blog (UK))](https://gds.blog.gov.uk/2015/07/10/you-cant-be-half-agile/)

</section>

<section class="dpgn-section-solutions">

### Reusable solutions

**[TODO: Add/revise reusable solutions]**

- [Method Cards (18F (US))](https://methods.18f.gov/)
- [Agile tools and techniques (Service Manual (UK))](https://www.gov.uk/service-manual/agile-delivery/agile-tools-techniques)

</section>

<section class="dpgn-section-similar">

### Similar ressources

- [4. Use agile methods (Digital Service Standard (UK))](https://www.gov.uk/service-manual/service-standard/use-agile-methods)
- [8. Be agile and user-centred (Digital Service Standard (Ontario))](https://www.ontario.ca/page/digital-service-standard#section-9)
- [4. Build the service using agile and iterative practices (Digital Services Playbook (US))](https://playbook.cio.gov/#play4)
- [3. Agile and user-centred process (Digital Service Standard (AU))](https://www.dta.gov.au/standard/3-agile-and-user-centred/)
- [3. Review and improve services continually (Think - Digital Design Playbook (ISED)) (internal to Government of Canada)](http://www.gcpedia.gc.ca/wiki/DDPlayBook_Think#3._Review_and_improve_services_continually)
- [3. Apply agile principles and be iterative. (Do - Digital Design Playbook (ISED)) (internal to Government of Canada)](http://www.gcpedia.gc.ca/wiki/DDPlayBook_Do#3._Apply_agile_principles_and_be_iterative.)
- Agile - Small chunks - Iterate (GC EA Principles)
- {: .dpgn-digital-architectural} Use agile ({{ site.DigitalArchitectural.en }})

</section>
</section>

<section class="dpgn-section-guideline">

## 7.2 Accept that change is inevitable and use adaptive strategies and tools for new development

<div class="dpgn-section-intro-guideline">

**[TODO: Add/revise introductory text]**

</div>

<section class="dpgn-section-checklist">

### Checklist

**[TODO: Add/revise checklist items]**

</section>

<section class="dpgn-section-guides">

### Implementation guides

**[TODO: Add/revise implementation guide items]**

</section>

<section class="dpgn-section-solutions">

### Reusable solutions

**[TODO: Add/revise reusable solutions]**

</section>
</section>

<section class="dpgn-section-guideline">

## 7.3 Embrace and react to changes in the environment and design for sustainability

<div class="dpgn-section-intro-guideline">

**[TODO: Add/revise introductory text]**

Once you have designed and launched a service, there is still work to do. Treat the service as a product; it requires regular reviews, usability tests and improvements. Unlike a project that has pre-determined start and end date, a product has a life cycle that goes far beyond the launching of the service. Regularly assessing the service and welcoming opportunities for improvement will help to ensure that the service keeps pace with evolving client needs and benefits from new or improved technology. **(2. Product management, not just project management. (Assess - Digital Design Playbook (ISED)))**

</div>

<section class="dpgn-section-checklist">

### Checklist

**[TODO: Add/revise checklist items]**

- Continuously measure client experience and create a customer-prioritized improvement plan. **(2. Product management, not just project management. (Assess - Digital Design Playbook (ISED)))**
- Commit to regular service reviews **(2. Product management, not just project management. (Assess - Digital Design Playbook (ISED)))**
- Identify opportunities to improve the service based on the results of regular test **(2. Product management, not just project management. (Assess - Digital Design Playbook (ISED)))**

</section>

<section class="dpgn-section-guides">

### Implementation guides

**[TODO: Add/revise implementation guide items]**

</section>

<section class="dpgn-section-solutions">

### Reusable solutions

**[TODO: Add/revise reusable solutions]**

</section>

<section class="dpgn-section-similar">

### Similar resources

- [2. Product management, not just project management. (Assess - Digital Design Playbook (ISED)) (internal to Government of Canada)](http://www.gcpedia.gc.ca/wiki/DDPlayBook_Assess#2._Product_management.2C_not_just_project_management.)

</section>
</section>

<section class="dpgn-section-guideline">

## 7.4 Start small and test designs and assumptions continually, using evidence as the basis for iteration

<div class="dpgn-section-intro-guideline">

**[TODO: Add/revise introductory text]**

**Introduction examples:**

**Digital Service Standard (UK):** Build a service that can be iterated and improved on a frequent basis and make sure that you have the capacity, resources and technical flexibility to do so.

You need to build a service which you can iterate and keep improving so that you can:

- easily respond to changes in policy which affect the service
- make sure your service keeps meeting user needs

**1. Test the service before launching the service. (Assess - Digital Design Playbook (ISED))**: Services should be simple, inclusive and easy to use. Services should help clients achieve the outcomes that matter most. Assessing prototypes while the service is being designed will help you discover shortcomings that may deter clients from using the service or glitches that may affect the user experience. Assessing the service before it is officially launched will also help you make improvements that can go a long way in ensuring clients are satisfied when using the service. Rigorously and comprehensively testing the service from end-to-end is part of good service design.

</div>

<section class="dpgn-section-checklist">

### Checklist

**[TODO: Add/revise checklist items]**

- Start small and build upon successes. **(General design principles - Digital Design Playbook (ISED))**
- Don’t wait for a fully developed service to start testing. **(1. Test the service before launching the service. (Assess - Digital Design Playbook (ISED)))**
  - Develop a prototype of the service and test it to validate ideas, to challenge assumptions and to identify opportunities for improvement.
- Define your testing objective **(1. Test the service before launching the service. (Assess - Digital Design Playbook (ISED)))**
  - Define the purpose of the test and what you want to learn? The purpose of the test is often determined by your business goals and user needs identified through feedback, analytics and other sources.
  - Identify top or critical tasks to test. Main outcomes and features your clients want to achieve should be prioritized.
- Test with clients and others **(1. Test the service before launching the service. (Assess - Digital Design Playbook (ISED)))**
  - You need to ensure that the service works from technical perspective and from the perspective of the user and the service provider (including the help desk agent who assists clients when they face challenges using the service). By testing with a diverse group and different type of users, you can capture a more comprehensive understanding of how your service is working.
  - Make sure the participants are representative of your clients.
  - Utilize user experience testing services offered by the Chief Information Office and the Communications team
- Plan and deliver client testing cycles **(1. Test the service before launching the service. (Assess - Digital Design Playbook (ISED)))**
  - Pilot your test: Make sure it all works
  - Implement the test.
  - Test often (e.g., six month or yearly intervals), apply the findings and keep on testing.
- Test under realistic conditions **(1. Test the service before launching the service. (Assess - Digital Design Playbook (ISED)))**
  - Create realistic scenarios that reflect the context and environment in which clients would use the service.
- Use different types of tests to assess the service **(1. Test the service before launching the service. (Assess - Digital Design Playbook (ISED)))**
  - Identify the best testing method based on your needs. Examples of tests include:
    - Tree Testing - A test in which participants are asked to find a resource based on a series of menus.
    - Card Sorting Testing - A reverse tree test where participants sort through items and group them together in a hierarchal manner.
    - First Click Testing - A test that observes the first item that a participant clicks on and uses the selection as an indication as to whether users are directed as intended.

**Alpha, beta and live stages:**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
- document what you've built in each phase and why you built it **(Digital Service Standard (UK))**
- document the lifecycle of a user story from user research to production **(Digital Service Standard (UK))**
- make sure your service is built to meet user needs **(Digital Service Standard (UK))**
- identify and prioritize insights from user research **(Digital Service Standard (UK))**
- move user stories quickly and smoothly between user research and production **(Digital Service Standard (UK))**
- make sure there is minimal risk associated with the technology you chose **(Digital Service Standard (UK))**
- make sure you have the ability to deploy software frequently with minimal disruption to users **(Digital Service Standard (UK))**
- analyze user research and use it to improve your service **(Digital Service Standard (UK))**
- solve any technical problems you've found **(Digital Service Standard (UK))**
{: .dpgn-stage-alpha .dpgn-stage-beta .dpgn-stage-live}
<!-- markdownlint-enable MD032 -->

**Beta stage:**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
- determine how long you expect your service to be in beta and why **(Digital Service Standard (UK))**
- document your way of [deploying software](https://www.gov.uk/service-manual/making-software/deployment.html), ie how you can deploy frequently with minimum impact on users **(Digital Service Standard (UK))**
{: .dpgn-stage-beta}
<!-- markdownlint-enable MD032 -->

**Live stage:**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
- make sure deployments have zero downtime in a way that doesn't stop users using the service **(Digital Service Standard (UK))**
- make sure you have enough staff to keep improving the service **(Digital Service Standard (UK))**
{: .dpgn-stage-live}
<!-- markdownlint-enable MD032 -->

</section>

<section class="dpgn-section-guides">

### Implementation guides

**[TODO: Add/revise implementation guide items]**

- [Test your service's performance (Service Manual (UK))](https://www.gov.uk/service-manual/technology/test-your-services-performance)
- [Quality assurance: testing your service regularly (Service Manual (UK))](https://www.gov.uk/service-manual/technology/quality-assurance-testing-your-service-regularly)
- [Exploratory Testing (Service Manual (UK))](https://www.gov.uk/service-manual/technology/exploratory-testing)
- [Testing Cookbook (18F (US))](https://pages.18f.gov/testing-cookbook/go/)
- [TBITS 26: Software Product Evaluation, Quality Characteristics and Guidelines for their Use (GC)](https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=17283)
- [How to Set Up User Testing (internal to Government of Canada)](http://www.gcpedia.gc.ca/wiki/How_to_Set_Up_User_Testing/Comment_d%C3%A9finir_les_essais_par_les_utilisateurs)
- [UXWG guide to Usability Testing (internal to Government of Canada)](http://www.gcpedia.gc.ca/wiki/The_UXWG_guide_to_Usability_Testing)
- [Performance Testing (Digital Service Standard (AU))](https://www.dta.gov.au/standard/design-guides/performance-testing/)
- [Testing your service (Service Manual (UK))](https://www.gov.uk/service-manual/technology#testing-your-service)
- [Agile delivery (Digital Service Standard (UK))](https://www.gov.uk/service-manual/agile-delivery)

</section>

<section class="dpgn-section-solutions">

### Reusable solutions

**[TODO: Add/revise reusable solutions]**

</section>

<section class="dpgn-section-similar">

### Similar resources

- [5. Iterate and improve frequently (Digital Service Standard (UK))](https://www.gov.uk/service-manual/service-standard/iterate-and-improve-frequently)
- [1. Test the service before launching the service. (Assess - Digital Design Playbook (ISED)) (internal to Government of Canada)](http://www.gcpedia.gc.ca/wiki/DDPlayBook_Assess#1._Test_the_service_before_launching_the_service.)

</section>
</section>
