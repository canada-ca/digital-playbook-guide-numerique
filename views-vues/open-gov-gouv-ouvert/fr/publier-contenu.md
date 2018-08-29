---
layout: default
title: Comment puis-je décider de publier du contenu dans le Portail du gouvernement ouvert? (ébauche)
lang: fr
altLang: en
altLangPage: release-content
collectionDirectory: views-vues/open-gov-gouv-ouvert
step1:
  title: "Étape 1 : Déterminer si le contenu a une valeur opérationnelle"
  q1Label: Le contenu contribue-t-il à expliquer qui vous êtes? (P. ex., le contenu décrit-il ce que votre ministère ou organisme accomplit? Présente-t-il des explications sur leur gouvernance constitutionnelle et juridique? Fournit-il une liste de personnes-ressources ou indique-t-il l'emplacement de votre ministère ou organisme?)
  q2Label: Le contenu porte-t-il sur les programmes ou les services que vous offrez? (P. ex., décrit-il les services offerts? Comprend-il des conseils et une orientation? Comprend-il des publications ou des communiqués de presse, des données administratives ou des renseignements sur les opérations ou les subventions et les contributions?)
  q3Label: Le contenu porte-t-il sur vos finances, sur combien et comment vous dépensez? (P. ex., inclut-il les recettes et les dépenses prévues et réelles ou les dépenses annuelles du bureau du ministre? Le contenu est-il lié à des appels d'offres, à de l'approvisionnent, à des marchés, à des déplacements, à l'accueil ou à la reclassification des postes?)
  q4Label: Le contenu porte-t-il sur vos priorités et votre façon de les respecter? (P. ex., inclue-t-il des évaluations, des examens des lettres de mandat ministériels, des rapports déposés au parlement?)
  q5Label: Le contenu porte-t-il sur vos politiques et vos procédures? (P. ex., explique-t-il la façon dont vous assumez vos responsabilités? Comprend-il des propositions de politiques et des annonces? Comprend-il des mises à jour sur les processus de prise de décisions et sur les consultations?)
  q6Label: Le contenu porte-t-il sur des listes ou des registres dont votre organisation est responsable? (P. ex., s'agit-il de listes ou des registres requis par la loi ou liés à vos fonctions? Comprend-il des sommaires de demandes complètes d'accès à l'information?)
  q7Label: Le contenu profitera-t-il aux Canadiens soit en améliorant les services soit en favorisant l'innovation et la croissance économique?
  q8Label: Le contenu a-t-il fréquemment fait l'objet de demandes au titre d'accès à l'information?
  q9Label: Le contenu aidera-t-il le public à mieux comprendre les priorités et les engagements du gouvernement du Canada?
  q10Label: Le contenu aidera-t-il d'autres institutions du gouvernement du Canada à fournir des services plus efficaces?
  q11Label: Le contenu fournit-il des renseignements utiles aux chercheurs, aux étudiants, aux universitaires ou aux citoyens intéressés?
  failTitle: Ne peut pas être publié
  failBody: D'après vos réponses, le contenu ne peut pas être pubilé tel quel.
step2:
  title: "Étape 2 : Déterminer si le contenu fait l'objet de restrictions"
  q1Label: Le contenu comprend-il de l'information classifiée ou protégée?
  q2Label1: Le contenu comprend-il des renseignements personnels
  q2Label2: sur une personne tels que les suivants?
  q2Sub1Label: a. Race
  q2Sub2Label: b. Origine nationale ou ethnique
  q2Sub3Label: c. Religion
  q2Sub4Label: d. Âge
  q2Sub5Label: e. État matrimonial
  q2Sub6Label: f. Dossier médical, antécédents criminels ou professionels
  failTitle: Fait l'objet de restrictions
  failBody: D'après votre dernière réponse, le contenu fait l'objet de restrictions; il n'est donc pas prêt aux fins de publication.
step3:
  title: "Étape 3 : Déterminer si le contenu est prêt è être publié"
  q1Label1: Le contenu est-il disponible dans un format accessible qui respecte les exigences de la
  q1LabelLinkText: Norme sur l'accessibilité des sites Web
  q1LabelLinkURL: https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=23601
  q1Label2: (P. ex., CSV, XML, HTML, PDF/UA)
  q2Label: Le contenu est-il disponible dans les deux langues officielles?
  q3Label: Le contenu peut-il être publié conformément à la
  q3LabelLinkText: Licence du gouvernement ouvert
  q3LabelURL: https://ouvert.canada.ca/fr/licence-du-gouvernement-ouvert-canada
  q4Label: Le contenu a-t-il fait l'objet d'une évaluation et d'une vérification de la qualité? (P. ex., exhaustivité, exactitude, pertinence, cohérence)
  q5Label: A-t-on élaboré un dictionnaire des données pour décrire les éléments dans le contenu?
  q6Label: Le dirigeant principal de l'information ou le cadre supérieur responsable de la gestion de l'information a-t-il approuvé la publication du contenu?
  failTitle: N'est pas prêt à être publié
  failBody: D'après votre dernière réponse, le contenu n'est pas prêt aux fins de publication.
fail:
  help1: Pour obtenir des renseignements sur les changements qu'il faut apporter afin que votre contenu puisse être publié, veuillez procéder comme suit
  helpConsult: veuillez consulter le 
  helpOr: ou
  helpContact: veuillez communiquer avec
guidebook:
  linkText: Open Government Guidebook
  url: "https://open.canada.ca/ckan/en/dataset/9eaa6d0e-4b8c-5241-acf7-c6885294b8c1"
contactEmail: open-ouvert@tbs-scgt.gc.ca
---
{% assign dataVariable = site.playbookData[page.lang] %}{%
assign dataSource = site.data[dataVariable] %}

Conformément à la [Directive sur le gouvernement ouvert](https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=28108), le gouvernement du Canada s'est engagé à maximiser la publication de l'information et des données du gouvernement ayant une valeur opérationnelle, afin de favoriser la transparence, la responsabilisation, la mobilisation des citoyens et les avantages socioéconomiques.

Cette page vous aidera à décider de publier ou non du contenu, à savoir un ensemble de données (information stucturée) ou des ressources documentaires (information non structurée), dans le site Web ouvert.canada.ca.

Le processus comporte triois étapes, soit&#160;:

- Étape 1 : Déterminer si le contenu a une valeur opérationnelle
- Étape 2 : Déterminer si le contenu fait l'objet de restrictions
- Étape 3 : Déterminer si le contenu est prêt à être publié

{% include views-vues/open-gov-gouv-ouvert/release-content-publier-contenu-questionnaire.html %}

<!-- No questions to answer, just instructions for releasing the content on open.canada.ca. -->
<section id="step4-section" class="hidden">

<div class="panel panel-success">
<header class="panel-heading">
<h2 class="panel-title">Votre contenu est prêt à être publié dans le site Web ouvert.canada.ca</h2>
</header>
<div class="panel-body">

Votre contenu est prêt à être publié dans le site Web [ouvert.canada.ca](https://ouvert.canada.ca), il vous faudra procéder comme suit&#160;:

- Créer un document de métadonnées décrivant le contenu dans le Registre du governement ouvert — le [Guide sur le Registre du gouvernement ouvert](https://ouvert.canada.ca/ckan/fr/dataset/c2529700-2728-5c39-9107-1102e9cfb7bb) explique la façon de créer ce document.
- Envoyer un courriel à <{{ page.contactEmail }}> afin de demander que le document de métadonnées soit examiné et ensuite publié dans le site Web [ouvert.canada.ca](https://ouvert.canada.ca).
- Publier le contenu — le [{{ page.guidebook.linkText }}]({{ page.guidebook.url }}) explique la façon de publier votre ensemble de données ou votre ressource documentaire dans le site Web [ouvert.canada.ca](https://ouvert.canada.ca).

Pour obtenir d'autres renseignements, veuillez communiquer avec le Groupe du governement ouvert à  <{{ page.contactEmail }}>.

Guide de mise en œuvre&#160;: [{{ page.guidebook.linkText }}]({{ page.guidebook.url }})

</div>
</div>

</section>

</div>

<aside id="footnotes-aside" class="wb-fnote hidden" role="note">
<h3 id="fn">{{ site.Footnotes[ page.lang ] }}</h3>
<dl>
<dt>{{ site.Footnote[ page.lang ] }} 1</dt>
<dd id="fn1">
<p>Au termes de la [Loi sur la protection des renseignements personnels](http://laws-lois.justice.gc.ca/fra/lois/P-21/index.html), les renseignements personnels sont <q cite="http://laws-lois.justice.gc.ca/fra/lois/P-21/page-1.html#h-3">&#171;&#160;Les renseignements, quels que soient leur forme et leur support, concernant un individu identifiable&#160;&#187;.</q> Pour obtenir d'autres précisions, veuillez consulter l'article 3 de la Loi.</p>
<p class="fn-rtn"><a href="#fn1-rf"><span class="wb-inv">{{ site.ReturnToFootnote[ page.lang ] }} </span>1{% if page.lang == "en" %}<span class="wb-inv"> referrer</span>{% endif %}</a></p>
</dd>
</dl>
</aside>

</div>

</form>
</div>
