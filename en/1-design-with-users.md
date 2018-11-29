---
layout: default
title:  "1. Design with users"
lang: en
altLang: fr
altLangPage: 1-concevoir-avec-utilisateurs
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

{% include functions/guideline-links.html guidelines="2.1, 2.2, 4.2, 6.1, 6.2, 8.1, 9.1, 10.2, 10.3" samePage=false includeStandardTitle=true %}

</div>

<section class="dpgn-section-guideline">

## 1.1 Research with users to understand their needs and the problems we want them to solve

<div class="dpgn-section-intro-guideline">

Focus on the needs of your users, using agile, iterative and user-centred methods when building a service. Start with extensive research and analysis to help understand who is using the service, what their needs are and how the service will affect their lives to better understand how the service should be designed. The absence of the user voice leads to assumptions that may be incorrect and costly.

A key part of building digital services that work for users is developing a good understanding of who are the users, what are their needs and how the service will affect their lives. It is equally important to develop a good understanding of the different contexts in which users could be interacting, since user needs and expectations can vary depending upon where, when and how they use a digital service.

</div>

<section class="dpgn-section-checklist">

### Checklist

**Alpha stage:**
{: .dpgn-data-ignore}

<!-- markdownlint-disable MD032 -->
- Put in place a plan to pay for user research throughout the design of the service and after it's built
- Interview potential users to help develop the following for the service:
  1. User goals (e.g., As a \[user type\], I want \[some goal\] so that \[some reason\])
  1. User personas (e.g., based on habits, personality, attitudes and motives)
  1. User profiles (e.g., based on demographics such as gender, age, location, income and family size)
- Use a range of qualitative and quantitative research methods to determine people's goals, needs, and behaviours
- Create and maintain a list of priority tasks that users are trying to accomplish (i.e., "user stories")
- Document all end-to-end user journeys, including journeys that involve multiple services and external services
- Understand how will users interact with the service, optimizing the experience for online and offline interactions
{: .dpgn-stage-alpha}
<!-- markdownlint-enable MD032 -->

- Use plain language that is appropriate and easy to understand for the audience

</section>

<section class="dpgn-section-guides">

### Implementation guides

- {: .dpgn-digital-architectural .dpgn-digital-architectural-design-for-users-first} [User research (Service Manual (UK))](https://www.gov.uk/service-manual/user-research)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-design-for-users-first .dpgn-stage-alpha} [How user research improves service design (Service Manual (UK))](https://www.gov.uk/service-manual/user-research/how-user-research-improves-service-design)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-design-for-users-first .dpgn-stage-alpha} [Start by learning user needs (Service Manual (UK))](https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs)
- [Understanding users who don't use digital services (Service Manual (UK))](https://www.gov.uk/service-manual/user-research/understanding-users-who-dont-use-digital-services)
- [How Users Read (Writing for GOV.UK)](https://www.gov.uk/guidance/content-design/writing-for-gov-uk#how-people-read)

</section>

<section class="dpgn-section-solutions">

### Reusable solutions

- {: .dpgn-digital-architectural .dpgn-digital-architectural-design-for-users-first} [Method Cards (18F (US))](https://methods.18f.gov/index.html)

</section>

<section class="dpgn-section-similar">

### Similar resources

- [1. Understand user needs (Digital Service Standard (UK))](https://www.gov.uk/service-manual/service-standard/understand-user-needs)
- [1. Understand users and their needs (Digital Service Standard (Ontario))](https://www.ontario.ca/page/digital-service-standard#section-1)
- [1. Understand what people need (Digital Services Playbook (US))](https://playbook.cio.gov/#play1)
- [1. Understand user needs (Digital Service Standard (AU))](https://guides.service.gov.au/digital-service-standard/1-understand-user-needs/)
- [1. Understand client needs (Think - Digital Design Playbook (ISED)) (internal to GC only)](http://www.gcpedia.gc.ca/wiki/DDPlayBook_Think#1._Understand_client_needs)
- [2. Do ongoing user research (Digital Service Standard (UK))](https://www.gov.uk/service-manual/service-standard/do-ongoing-user-research)
- [12. Make sure users succeed first time (Digital Service Standard (UK))](https://www.gov.uk/service-manual/service-standard/create-a-service-thats-simple)

</section>
</section>

<section class="dpgn-section-guideline">

## 1.2 Conduct ongoing testing with users to guide design and development

<div class="dpgn-section-intro-guideline">

User needs are constantly evolving which it is why it is important to plan for ongoing user research and usability testing. Engage users at all stages, continuously seeking feedback to ensure the service helps users to accomplish their tasks and to keep improving the service to better meet user needs.

Users should be involved throughout the lifecycle of the service, with user research and testing informing the earliest design phases through to continuous improvements after the service has launched.

When designing a service, it is important to determine the problems that the service needs to solve and how it will help users to achieve their goals. The focus shouldn't be just on the service itself, but also how the service fits in the overall user journey. The service should be designed to seamlessly integrate into the overall user journey and regularly measured to ensure that it is meeting user needs.

</div>

<section class="dpgn-section-checklist">

### Checklist

- Put in place a plan to pay for usability tests throughout the design of the service and after it's built
- {: .dpgn-stage-beta .dpgn-stage-live} Use qualitative and quantitative data to help improve your understanding of user needs and identify areas for improvement
- Make services simple, intuitive and consistent
- For multi-step processes, provide users with clear information about where they are in the process and the ability to exit and the ability to exit and return later without losing progress

**Beta and live stages:**

<!-- markdownlint-disable MD032 -->
- Regularly test with users when building the service and after the service has been launched to ensure it meets the needs of user and to identify any parts of the service that users may find difficult
- Continuously measure client experience and create a customer-prioritized improvement plan. **(2. Product management, not just project management. (Assess - Digital Design Playbook (ISED)))**
- Test with clients and others **(1. Test the service before launching the service. (Assess - Digital Design Playbook (ISED)))**
  - You need to ensure that the service works from technical perspective and from the perspective of the user and the service provider (including the help desk agent who assists clients when they face challenges using the service). By testing with a diverse group and different type of users, you can capture a more comprehensive understanding of how your service is working.
  - Make sure the participants are representative of your clients.
  - Utilize user experience testing services offered by the Chief Information Office and the Communications team
- Plan and deliver client testing cycles **(1. Test the service before launching the service. (Assess - Digital Design Playbook (ISED)))**
  - Pilot your test: Make sure it all works
  - Implement the test.
  - Test often (e.g., six month or yearly intervals), apply the findings and keep on testing.
- Regularly assess the service, indentifying and fixing problem areas that are degrading the user experience
- Regularly measure how well the service is meeting user needs at each step of the service and for the end-to-end experience
- Provide a mechanism for users to provide feedback and to address service issues in a timely manner (as required by the [Policy on Service](https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=27916#cha7)).
{: .dpgn-stage-beta .dpgn-stage-live}
<!-- markdownlint-enable MD032 -->

</section>

<section class="dpgn-section-guides">

### Implementation guides

- {: .dpgn-stage-beta .dpgn-stage-live} [Looking at the different ways to test content (18F (US))](https://18f.gsa.gov/2016/04/19/looking-at-the-different-ways-to-test-content/)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-design-for-users-first} [Introduction to User-centred Design (usabilityfirst.com)](http://www.usabilityfirst.com/about-usability/introduction-to-user-centered-design/)
- [Designing government services (Service Manual (UK))](https://www.gov.uk/service-manual/design/introduction-designing-government-services)
- [How to Set Up User Testing (internal to Government of Canada)](http://www.gcpedia.gc.ca/wiki/How_to_Set_Up_User_Testing/Comment_d%C3%A9finir_les_essais_par_les_utilisateurs)
- [UXWG guide to Usability Testing (internal to Government of Canada)](http://www.gcpedia.gc.ca/wiki/The_UXWG_guide_to_Usability_Testing)

</section>

<section class="dpgn-section-solutions">

### Reusable solutions

- [Web Experience Toolkit (WET)](http://wet-boew.github.io/wet-boew/index-en.html)

</section>

<section class="dpgn-section-similar">

### Similar resources

- [5. Ensure users succeed the first time (Digital Service Standard (Ontario))](https://www.ontario.ca/page/digital-service-standard#section-5)
- [4. Design the service from start to finish (Digital Service Standard (Ontario))](https://www.ontario.ca/page/digital-service-standard#section-4)
- [2. Address the whole experience, from start to finish (Digital Services Playbook (US))](https://playbook.cio.gov/#play2)
- [3. Make it simple and intuitive (Digital Services Playbook (US))](https://playbook.cio.gov/#play3)
- [12. Support those who need it (Digital Service Standard (Ontario))](https://www.ontario.ca/page/digital-service-standard#section-12)

</section>
</section>
