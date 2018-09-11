---
layout: default
title:  "6. Intégrer l’accessibilité dès le départ (ébauche)"
lang: fr
altLang: en
altLangPage: 6-build-in-accessibility-from-start
---
<div class="dpgn-section-intro-standard">

Building in accessibility from the start is key to ensuring that your programs, service, tools and applications can be used by everyone, including those living with a permanent disability, but also by those who may have a temporary limitation or disability due to illness, accident, environmental changes or technological difficulties.

Worldwide, over a billion people, about 15% of the world's population, have some form of disability. Between 110 million and 190 million adults have significant difficulties in functioning (<a href="http://www.who.int/news-room/fact-sheets/detail/disability-and-health">World Health Organization</a>).

In Canada:

- 14% of the population (4.9 million Canadians) identify as a person with a disability
- 30% of the population have a disability if you include “invisible” disabilities (e.g., colour blindness, cognitive, mental health or chronic pain-related)
- 50% of the population have a disability if you take into account age-related impairments (e.g., low vision, low hearing or cognitive impairments)
- At least once in a person’s lifetime, they may also have a temporary disability brought on through accident, illness, repetitive strain or lifecycle changes (pregnancy).

<section>

## Curb Cut Effect

Curb cuts are intended to help wheelchairs get up on sidewalks, but they also help bicyclists, parents with strollers, delivery people, and many other non-disabled groups. This benefit to others became known as the “Curb-Cut Effect”.

When inclusive and accessible design is in place, it is a benefit for all and seamlessly meets the needs of individuals across the board, including people without disabilities.

</section>
<section>

## Situational Limitations

Sometimes people are in situations that limit their ability to hear, see, use their hands, concentrate, understand instructions, etc. Sometimes they are using devices that have limitations in size, input interface, etc. For example:

- Watching TV in a noisy environment (limits one's ability to hear, but closed captionning helps by conveying audio messages through text)
- Driving limits one's ability to concentrate on multiple things and limits the use of their hands. When drivers are lost, they often rely upon their smartphone for directions. To avoid getting tickets for distracting driving, taking one's eyes off the road or taking one's hands off the wheel, drivers can use voice recognition to ask the smartphone directions and have the directions read aloud.
- Walking around with small children (e.g., curb cuts for stollers, hands full, concentrate, understand instructions)
- Having one's hands full may require relying on smart speakers for instructions (e.g., getting recipe details while cooking, getting step-by-step instructions while fixing things around the home)
- Using a small mobile phone in bright sunlight, where the glare reduces visibility, while browsing the Web with only one hand (e.g., carrying a bag in the other hand) on a slow Internet connection
- Having to interact in another language

These limitations are sometimes mentioned as an example of how accessible design helps everyone, including people without disabilities.

</section>
<section>

## Added Benefits

- findability; when content is accessible it increases its findability
- understandable content for all users that is also machine-readable

</section>

</div>

<div class="dpgn-section-guidelines">

**Lignes directrices :**

<!-- markdownlint-disable MD032 -->
- TOC
{:toc}
<!-- markdownlint-enable MD032 -->

</div>

<div class="dpgn-section-guidelines-related">

**Lignes directrices connexes :**

{% include functions/guideline-links.html guidelines="1.1, 1.2, 2.1, 9.1, 10.2, 10.3" samePage=false includeStandardTitle=true %}

</div>

<section class="dpgn-section-guideline">

## 2.1 Les services devraient respecter ou dépasser les normes d’accessibilité

<div class="dpgn-section-intro-guideline">

**\[TODO: Ajouter / réviser le texte d'introduction\]**

Le gouvernement du Canada est déterminé à faire en sorte qu'un niveau élevé d'accessibilité soit uniformément appliqué à tous ses canaux de prestation de services. Les technologies et les normes évoluent constamment et l'accessibilité joue un rôle majeur pour rendre le gouvernement du Canada plus efficace et inclusif. Une plus cohérente, pratique, clair et facile utilisateur expérience lors de l'utilisation des services gouvernementaux en ligne construit la confiance.

Le développement de services numériques accessibles (indépendamment de la capacité, de l'appareil ou de l'environnement) améliore l'expérience globale pour tout le monde en améliorant et en simplifiant la conception globale.

</div>

<section class="dpgn-section-checklist">

### Liste de contrôle

**\[TODO: Ajouter / modifier les éléments de la liste de contrôle\]**

- {: .dpgn-accessibility} meet the [Standard on Web Accessibility](https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=23601)
- Design the service to be as easy to use as possible. Usability is critical to making a service accessible for people with disabilities and limitations.
- {: .dpgn-accessibility-usability} effectuez des recherches et des tests pour vous assurer que le service est accessible à tous les utilisateurs, quelles que soient leurs capacités et la manière dont ils ont accédé au service **(Normes des services numériques (Ontario))**
- Utilisez des recherches, des tests et des analyses en continu pour évaluer et améliorer continuellement l'accessibilité du service.
- S'assurer que les ressources de conception et de développement possèdent les connaissances et l'expertise nécessaires pour créer des services accessibles et résoudre les problèmes d'accessibilité.
- former le personnel développeur sur la navigation par clavier seulement et veiller à la mise à l’essai régulière des nouvelles fonctions **(Normes des services numériques (Ontario))**
- S'assurer que les ressources de test et d'assurance qualité possèdent les connaissances et l'expertise nécessaires pour identifier les problèmes d'accessibilité.
- S'assurer que les ressources de soutien sont formées pour aider les personnes handicapées à accomplir les tâches et à accéder à l'information.
- Faites en sorte qu'il soit facile pour tous les utilisateurs (y compris les personnes handicapées) de fournir des commentaires, de résoudre les problèmes et de demander de l'aide pour utiliser le service.
- Concevoir le service pour qu'il fonctionne avec une variété de navigateurs et d'appareils, y compris les appareils et accessoires fonctionnels      .
- Assurez-vous que les processus de test incluent des tests de conformité au niveau AA WCAG 2.0 et des tests avec une variété de navigateurs, de périphériques et d'appareils fonctionnels.
- s’assurer, lorsque des plateformes technologiques sont prises en considération, qu’il existe une transparence au sujet des problèmes connus liés aux Règles pour l'accessibilité des contenus Web (WCAG 2.0) AA et que l’on s’efforce de mettre en oeuvre les Règles d'accessibilité pour les outils d'édition (ATAG) 2.0 - parties A et B **(Normes des services numériques (Ontario))**
- Designing for users on the autistic spectrum ([Dos and don'ts on designing for accessibility (Government Digital Service blog (UK))](https://accessibility.blog.gov.uk/2016/09/02/dos-and-donts-on-designing-for-accessibility/))
  - Do:
    - use simple colours
    - write in plain English
    - use simple sentences and bullets
    - make buttons descriptive - for example, Attach files
    - build simple and consistent layouts
  - Don't:
    - use bright contrasting colours
    - use figures of speech and idioms
    - create a wall of text
    - make buttons vague and unpredictable - for example, Click here
    - build complex and cluttered layouts
- Designing for users of screen readers ([Dos and don'ts on designing for accessibility (Government Digital Service blog (UK))](https://accessibility.blog.gov.uk/2016/09/02/dos-and-donts-on-designing-for-accessibility/))
  - Do:
    - describe images and provide transcripts for video
    - follow a linear, logical layout
    - structure content using HTML5
    - build for keyboard use only
    - write descriptive links and heading - for example, Contact us
  - Don't:
    - only show information in an image or video
    - spread content all over a page
    - rely on text size and placement for structure
    - force mouse or screen use
    - write uninformative links and heading - for example, Click here
- Designing for users with low vision ([Dos and don'ts on designing for accessibility (Government Digital Service blog (UK))](https://accessibility.blog.gov.uk/2016/09/02/dos-and-donts-on-designing-for-accessibility/))
  - Do:
    - use good contrasts and a readable font size
    - publish all information on web pages (HTML)
    - use a combination of colour, shapes and text
    - follow a linear, logical layout -and ensure text flows and is visible when text is magnified to 200%
    - put buttons and notifications in context
  - Don't:
    - use low colour contrasts and small font size
    - bury information in downloads
    - only use colour to convey meaning
    - spread content all over a page -and force user to scroll horizontally when text is magnified to 200%
    - separate actions from their context
- Designing for users with physical or motor disabilities ([Dos and don'ts on designing for accessibility (Government Digital Service blog (UK))](https://accessibility.blog.gov.uk/2016/09/02/dos-and-donts-on-designing-for-accessibility/))
  - Do:
    - make large clickable actions
    - give form fields space
    - design for keyboard or speech only use
    - design with mobile and touch screen in mind
    - provide shortcuts
  - Don't:
    - demand precision
    - bunch interactions together
    - make dynamic content that requires a lot of mouse movement
    - have short time out windows
    - tire users with lots of typing and scrolling
    - View poster for physical or motor disabilities
- Designing for users who are D/deaf or hard of hearing ([Dos and don'ts on designing for accessibility (Government Digital Service blog (UK))](https://accessibility.blog.gov.uk/2016/09/02/dos-and-donts-on-designing-for-accessibility/))
  - Do:
    - write in plain English
    - use subtitles or provide transcripts for video
    - use a linear, logical layout
    - break up content with sub-headings, images and videos
    - let users ask for their preferred communication support when booking appointments
  - Don't:
    - use complicated words or figures of speech
    - put content in audio or video only
    - make complex layouts and menus
    - make users read long blocks of content
    - don't make telephone the only means of contact for users
- Designing for users with dyslexia ([Dos and don'ts on designing for accessibility (Government Digital Service blog (UK))](https://accessibility.blog.gov.uk/2016/09/02/dos-and-donts-on-designing-for-accessibility/))
  - Do:
    - use images and diagrams to support text
    - align text to the left and keep a consistent layout
    - consider producing materials in other formats (for example, audio and video)
    - keep content short, clear and simple
    - let users change the contrast between background and text
  - Don't:
    - use large blocks of heavy text
    - underline words, use italics or write capitals
    - force users to remember things from previous pages - give reminders and prompts
    - rely on accurate spelling - use autocorrect or provide suggestions
    - put too much information in one place

</section>

<section class="dpgn-section-guides">

### Guides d'implémentation

- [Dos and don'ts on designing for accessibility (Government Digital Service blog (UK))](https://accessibility.blog.gov.uk/2016/09/02/dos-and-donts-on-designing-for-accessibility/)
- {: .dpgn-digital-architectural .dpgn-digital-architectural-design-for-users-first} [Web Content Accessibility Guidelines (WCAG) 2.1 (W3C)](https://www.w3.org/TR/WCAG21/)
- [Accessible Rich Internet Applications (WAI-ARIA) 1.1 (W3C)](https://www.w3.org/TR/wai-aria-1.1/)
- [Diversity of Web Users (W3C)](https://www.w3.org/WAI/intro/people-use-web/diversity)
- [Designing for Inclusion (W3C)](https://www.w3.org/WAI/users/)
- [Mobile Accessibility: How WCAG 2.0 and Other W3C/WAI Guidelines Apply to Mobile (W3C)](https://www.w3.org/TR/mobile-accessibility-mapping/)
- [Guidance on Applying WCAG 2.0 to Non-Web Information and Communications Technologies (WCAG2ICT) (W3C)](https://www.w3.org/TR/wcag2ict/)
- [Norme sur l'accessibilité des sites Web](https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=23601)
- [Inclusive services (Digital Service Standard (AU))](https://www.dta.gov.au/standard/design-guides/inclusive-services/)
- [18F Accessibility Guide (18F (US))](https://accessibility.18f.gov/index.html)
- [The A11y Project (a11yproject.com/)](https://a11yproject.com/)
- [Making your service accessible (Service Manual (UK))](https://www.gov.uk/service-manual/helping-people-to-use-your-service/making-your-service-accessible-an-introduction)

</section>

<section class="dpgn-section-solutions">

### Solutions réutilisables

- {: .dpgn-digital-architectural .dpgn-digital-architectural-design-for-users-first} [Boîte à outils de l’expérience Web (BOEW)](http://wet-boew.github.io/wet-boew/index-fr.html)

</section>

<section class="dpgn-section-similar">

### Ressources similaires

- [7. Rendre le service accessible (Normes des services numériques (Ontario))](https://www.ontario.ca/fr/page/norme-des-services-numeriques#section-7)
- [9. Make it accessible (Digital Service Standard (AU))](https://www.dta.gov.au/standard/9-make-it-accessible/)

</section>
</section>

<section class="dpgn-section-guideline">

## 6.2 Les utilisateurs ayant des besoins distincts doivent être engagés dès le départ pour s’assurer que tout ce qui est livré fonctionnera pour tout le monde

<div class="dpgn-section-intro-guideline">

**\[TODO: Ajouter / réviser le texte d'introduction\]**

Involving users early in projects helps you understand real-world accessibility issues, such as how people with disabilities and older people use the web with adaptive strategies and assistive technologies.

Involving users early helps you implement more effective accessibility solutions. It also broadens your perspective in a way that can lead you to discover new ways of thinking about your product that will make it work better for more people in more situations.

This applies when designing and developing:

- Websites and web applications
- Browsers, media players, and assistive technologies
- Authoring tools such as content management systems (CMS), blog software, and WYSIWYG editors
- Accessibility standards and policies
- Web technologies and technical specifications, such as HTML

**([Involving Users in Web Projects for Better, Easier Accessibility](https://www.w3.org/WAI/users/involving))**

</div>

<section class="dpgn-section-checklist">

### Liste de contrôle

**\[TODO: Ajouter / modifier les éléments de la liste de contrôle\]**

- Including Users to Understand the Issues ([Involving Users in Web Projects for Better, Easier Accessibility (W3C)](https://www.w3.org/WAI/users/involving))
  - As early as possible in your project:
    - Learn the basics of how people with disabilities use the web by reading online resources and watching videos.
    - Find people with disabilities, with a range of characteristics. See Getting a Range of Users and Working with Users below.
    - Early on, learn about general issues related to what you are developing, e.g., websites, web tools, standards, or other products. Ask people to show you websites or related products that work well for them. Then, ask them to show you problems in products that do not work well. Ask lots of questions to help you understand the accessibility issues.
- Including Users in Implementation ([Involving Users in Web Projects for Better, Easier Accessibility (W3C)](https://www.w3.org/WAI/users/involving))
  - For example, for websites, web applications, and web tools:
    - When you are considering a specific design aspect, such as expanding/collapsing navigation, find other products that are already doing it and have users explore with you what works well and what does not.
    - Throughout your design and development, ask users to review prototypes. Give them specific tasks to complete and see how the different aspects of the design and coding could be improved. Ask lots of questions.
- Carefully Consider Input ([Involving Users in Web Projects for Better, Easier Accessibility (W3C)](https://www.w3.org/WAI/users/involving))
  - **Caution:** Carefully consider all input and **avoid assuming that input from one person with a disability applies to all people with disabilities**. A person with a disability does not necessarily know how other people with the same disability interact with the web, nor know enough about other disabilities to provide valid guidance on other accessibility issues. Getting input from a range of users is best.
- Getting a Range of Users ([Involving Users in Web Projects for Better, Easier Accessibility (W3C)](https://www.w3.org/WAI/users/involving))
  - People with disabilities are as diverse as any people. They have diverse experiences, expectations, and preferences. They use diverse interaction techniques, adaptive strategies, and assistive technology configurations. People have different disabilities: auditory, cognitive, neurological, physical, speech, and visual — and some have multiple disabilities. Even within one category, there is extreme variation; for example, "visual disability" includes people who have been totally blind since birth, people who have distortion in their central vision from age-related degeneration, and people who temporarily have blurry vision from an injury or disease.
  - Include users with a variety of disabilities and user characteristics. Most projects have limited time and budget and cannot include many different users. Selecting the optimum number of users with the best suited characteristics can be difficult. There are resources on the web that provide guidance on selecting participants with disabilities; for example, determining participant characteristicslinks off WAI website and finding participants with disabilitieslinks off WAI website.
- Users' Experience Interacting with the Web ([Involving Users in Web Projects for Better, Easier Accessibility (W3C)](https://www.w3.org/WAI/users/involving))
  - A primary consideration in selecting users is their experience interacting with the web. For example, some assistive technologies (AT) are complicated and difficult to learn. A user with insufficient experience may not know how to use the AT effectively. On the other hand, a very advanced user might know uncommon work-arounds to overcome problems in a website that the "average" user would not be able to handle.
  - In the early stages when you are first learning how people with disabilities interact with the web, it is usually best to get people with a fairly high experience level.
- Working with Users ([Involving Users in Web Projects for Better, Easier Accessibility (W3C)](https://www.w3.org/WAI/users/involving))
  - Follow common practices for working with people informally and formally, for example:
    - Develop appropriate relationships with your users. For example, spending time talking informally over lunch may help you work together more comfortably.
    - Ensure informed consent and other research ethics. For example, participants in studies should be told that they are free to stop at any time.
    - Treat people with disabilities and older users with the respect you would any other users. For example, respect their time and provide appropriate compensation.
- Combine User Involvement with Standards ([Involving Users in Web Projects for Better, Easier Accessibility (W3C)](https://www.w3.org/WAI/users/involving))
  - While including users with disabilities and older users with accessibility needs is key to making your accessibility efforts more effective and more efficient, that alone cannot address all issues. Even large projects cannot cover the diversity of disabilities, adaptive strategies, and assistive technologies. That is the role of accessibility standards.
  - For websites and web applications, using comprehensive standards such as Web Content Accessibility Guidelines (WCAG) 2.0 helps ensure that you address all issues. Combine user involvement with evaluating conformance to WCAG to ensure that accessibility is provided to users with a range of disabilities and situations.
  - For authoring tools such as content management systems (CMS), blog software, and WYSIWYG editors, follow Authoring Tool Accessibility Guidelines (ATAG).
  - For browsers, media players, and other 'user agents', follow User Agent Accessibility Guidelines (UAAG).

</section>

<section class="dpgn-section-guides">

### Guides d'implémentation

- [Involving Users in Web Projects for Better, Easier Accessibility (W3C)](https://www.w3.org/WAI/users/involving)
- [Diversity of Web Users (W3C)](https://www.w3.org/WAI/intro/people-use-web/diversity)
- [Designing for Inclusion (W3C)](https://www.w3.org/WAI/users/)
- [Planning and Managing Web Accessibility (W3C)](https://www.w3.org/WAI/impl/Overview.html)
- [Determining participant characteristics (uiaccess.com)](http://www.uiaccess.com/accessucd/ut_plan.html#characteristics)
- [Finding participants with disabilities (uiaccess.com)](http://www.uiaccess.com/accessucd/ut_plan.html#recruiting)
- [Involving Users in Evaluating Web Accessibility (W3C)](https://www.w3.org/WAI/users/involving)
- [Analyzing Accessibility Issues (W3C)](http://www.w3.org/WAI/eval/users#analyz)
- [Drawing Conclusions and Reporting (W3C)](http://www.w3.org/WAI/eval/users#drawing)
- [Interacting with People with Disabilities (uiaccess.com)](http://uiaccess.com/accessucd/interact.html)
- [Assistive Technology and Location (uiaccess.com)](http://www.uiaccess.com/accessucd/involve.html#atloc)
- [The RESPECT Code of Practice (respectproject.org)](http://www.respectproject.org/code/charm.php?id=)
- [Just Ask: Integrating Accessibility Throughout Design (uiaccess.com)](http://www.uiaccess.com/accessucd/overview.html)
- [Incorporating Accessibility Early and Throughout (uiaccess.com)](http://uiaccess.com/accessucd/early.html)
- [A checklist for digital inclusion - if we do these things, we’re doing digital inclusion (Government Digital Service Blog (UK))](https://gds.blog.gov.uk/2014/01/13/a-checklist-for-digital-inclusion-if-we-do-these-things-were-doing-digital-inclusion/)
- [Consider the range of people that will use your product or service (Government Digital Service blog (UK))](https://accessibility.blog.gov.uk/2016/05/16/consider-the-range-of-people-that-will-use-your-product-or-service/)

</section>

<section class="dpgn-section-solutions">

### Solutions réutilisables

- [Boîte à outils de l’expérience Web (BOEW)](http://wet-boew.github.io/wet-boew/index-fr.html)

</section>
</section>
