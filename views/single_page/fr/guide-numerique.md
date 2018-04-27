---
layout: default
title:  "Guide numérique du gouvernement du Canada (ébauche)"
lang: fr
altLang: en
altLangPage: digital-playbook
---
<section class="{{ site.data.playbook.introduction.tags | join: ' ' }}">

## {{ site.data.guide.introduction.title }}

{% include /functions/output-content-array.html contentArray=site.data.playbook.introduction.content currHeadingLevel="2" %}

**Normes numériques :**

<ul>
{% for standard in site.data.playbook.standards %}{% capture standardId %}{% include /functions/generate-id.html string=standard.title %}{% endcapture %}<li class="{{ standard.tags | join: ' ' }}"><a href="#{{ standardId | strip }}">{{ standard.title }}</a></li>
{% endfor %}</ul>

**Comparaison du guide numérique à des ressources similaires :**

- [Tableau comparatif du guide numérique du gouvernement du Canada](https://pjackson28.github.io/digital-playbook-guide-numerique/fr/tableau-comparatif-guide-numerique-gc.html)

</section>

{% for standard in site.data.playbook.standards %}
<section class="{{ standard.tags | join: ' ' }}">

## {{ standard.title }}

<div class="{{ standard.introduction.tags | join: ' ' }}">

{% include /functions/output-content-array.html contentArray=standard.introduction.content currHeadingLevel="2" %}

</div>

<div class="dpgn-section-guidelines">

**Lignes directrices :**

<ul>
{% for guideline in standard.guidelines %}{% capture guidelineId %}{% include /functions/generate-id.html string=guideline.title %}{% endcapture %}<li class="{{ guideline.tags | join: ' ' }}"><a href="#{{ guidelineId | strip }}">{{ guideline.title }}</a></li>
{% endfor %}</ul>

</div>

<div class="dpgn-section-guidelines-related">

**Lignes directrices connexes :**

<ul>
{% for guideline in standard.relatedguidelines %}{% assign standardIndex = guideline.standard | minus: 1 %}{% assign guidelineIndex = guideline.guideline | minus: 1 %}{% assign related = site.data.playbook.standards[standardIndex].guidelines[guidelineIndex] %}{% capture relatedId %}{% include /functions/generate-id.html string=related.title %}{% endcapture %}<li class="{{ related.tags | join: ' ' }}"><a href="#{{ relatedId | strip }}">{{ related.title }}</a></li>
{% endfor %}</ul>

</div>

{% for guideline in standard.guidelines %}
<section class="{{ guideline.tags | join: ' ' }}">

### {{ guideline.title }}

<div class="{{ guideline.introduction.tags | join: ' ' }}">

{% include /functions/output-content-array.html contentArray=guideline.introduction.content currHeadingLevel="3" %}

</div>

{% if guideline.checklist.size > 0 %}
<section class="dpgn-section-checklist">

#### Liste de contrôle

{% include /functions/output-content-array.html contentArray=guideline.checklist currHeadingLevel="4" %}

</section>
{% endif %}

{% if guideline.guides.size > 0 %}
<section class="dpgn-section-guides">

#### Guides d’application

{% include /functions/output-content-array.html contentArray=guideline.guides currHeadingLevel="4" %}

</section>
{% endif %}

{% if guideline.similar.size > 0 %}
<section class="dpgn-section-similar">

#### Ressources similaires

{% include /functions/output-content-array.html contentArray=guideline.similar currHeadingLevel="4" %}

</section>
{% endif %}

</section>

{% endfor %}

</section>

{% endfor %}
