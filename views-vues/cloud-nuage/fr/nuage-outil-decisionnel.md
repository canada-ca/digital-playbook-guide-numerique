---
layout: default
title: Outil décisionnel du nuage approprié (ébauche)
lang: fr
altLang: en
altLangPage: cloud-decision-tool
collectionDirectory: views-vues/cloud-nuage
---
{% assign dataVariable = site.playbookData[page.lang] %}{%
assign dataSource = site.data[dataVariable] %}

Il vous est possible d’utiliser le modèle suivant afin de vous aider à décider du bon modèle de déploiement du nuage approprié pour votre contexte opérationnel.

<div id="right-cloud-questionnaire" class="wb-frmvld">
<form method="post" action="#">

<section>

## Mandatory

<!-- Question 1 -->
<div id="question-1" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true }, "default": { "action": "addClass", "source": ".sensitivity-result > span", "class": "hidden" } }'>
<p>Délicatesse</p>
<ul>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-sensitivity-passed, #private-cloud-sensitivity-failed, #non-cloud-sensitivity-failed", "class": "hidden" }'>Les intervenants n’ont pas soulevé des préoccupations concernant la délicatesse des données.</li>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-sensitivity-failed, #private-cloud-sensitivity-passed, #non-cloud-sensitivity-passed", "class": "hidden" }'>Les intervenants perçoivent que la délicatesse des données est élevée.</li>
</ul>
</div>

<!-- Question 2 -->
<div id="question-2" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true }, "default": { "action": "addClass", "source": ".financial-result > span", "class": "hidden" } }'>
<p>Financier</p>
<ul>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-financial-passed, #private-cloud-financial-failed, #non-cloud-financial-failed", "class": "hidden" }'>Le budget est disponible pour appuyer l’adoption d’un modèle de dépenses opérationnelles; les coûts augmenteront et chuteront avec la consommation des ressources.</li>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-financial-failed, #private-cloud-financial-passed, #non-cloud-financial-passed", "class": "hidden" }'>Le budget est disponible pour appuyer l’adoption d’un modèle de dépenses en capital; la capacité à prévoir des investissements périodiques dans une infrastructure et en innovation en évolution constante.</li>
</ul>
</div>

<!-- Question 3 -->
<div id="question-3" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true }, "default": { "action": "addClass", "source": ".legacy-result > span", "class": "hidden" } }'>
<p>Legs</p>
<ul>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-legacy-passed, #private-cloud-legacy-passed, #non-cloud-legacy-failed", "class": "hidden" }'>L’application peut fonctionner dans un environnement en nuage et le matériel virtualisé ou spécialisé requis est offert dans le cadre d’un environnement en nuage.</li>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-legacy-failed, #private-cloud-legacy-failed, #non-cloud-legacy-passed", "class": "hidden" }'>L’application doit fonctionner dans un environnement hors-nuage et il faut du matériel très spécialisé.</li>
</ul>
</div>

</section>

<section>

## Bien coté \[20 points chacun\]

<!-- Question 4 -->
<div id="question-4" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true }, "default": { "action": "addClass", "source": ".commoditized-result > span", "class": "hidden" } }'>
<p>Commercialisé</p>
<ul>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-commoditized-passed, #private-cloud-commoditized-failed, #non-cloud-commoditized-failed", "class": "hidden" }'>L’application peut fonctionner dans le cadre des offres normalisées et des ANS relatives au nuage public.</li>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-commoditized-failed, #private-cloud-commoditized-passed, #non-cloud-commoditized-passed", "class": "hidden" }'>L’application exige la personnalisation des offres et des ANS.</li>
</ul>
</div>

<!-- Question 5 -->
<div id="question-5" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true }, "default": { "action": "addClass", "source": ".location-result > span", "class": "hidden" } }'>
<p>Endroit</p>
<ul>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-location-passed, #private-cloud-location-failed, #non-cloud-location-failed", "class": "hidden" }'>L’application n’est pas susceptible aux problèmes de latence qui peuvent survenir en raison de l’achalandage qui passe par un circuit supplémentaire.</li>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-location-failed, #private-cloud-location-passed, #non-cloud-location-passed", "class": "hidden" }'>L’application est susceptible aux problèmes de latence qui peuvent survenir en raison de l’achalandage qui passe par un circuit supplémentaire.</li>
</ul>
</div>

<!-- Question 6 -->
<div id="question-6" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true }, "default": { "action": "addClass", "source": ".connectivity-result > span", "class": "hidden" } }'>
<p>Connectivité</p>
<ul>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-connectivity-passed, #private-cloud-connectivity-failed, #non-cloud-connectivity-failed", "class": "hidden" }'>L’application n’a pas de transaction volumineuse avec une base de données ou une application sur les lieux.</li>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-connectivity-failed, #private-cloud-connectivity-passed, #non-cloud-connectivity-passed", "class": "hidden" }'>L’application a des transactions volumineuses avec une base de données ou une application sur les lieux.</li>
</ul>
</div>

</section>

<section>

## Coté [10 points chacun]

<!-- Question 7 -->
<div id="question-7" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true }, "default": { "action": "addClass", "source": ".speed-result > span", "class": "hidden" } }'>
<p>Rapidité</p>
<ul>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-speed-passed, #private-cloud-speed-failed, #non-cloud-speed-failed", "class": "hidden" }'>On désire avoir un accès rapide aux services. Est-ce que les services requis sont accessibles sur demande?</li>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-speed-failed, #private-cloud-speed-passed, #non-cloud-speed-passed", "class": "hidden" }'>Peut tolérer le temps nécessaire afin de procéder à la mise en œuvre des services qui peuvent, à l’heure actuelle, ne pas être accessibles sur demande.</li>
</ul>
</div>

<!-- Question 8 -->
<div id="question-8" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true }, "default": { "action": "addClass", "source": ".longevity-result > span", "class": "hidden" } }'>
<p>Longévité : L’application est censée répondre à&#160;:</p>
<ul>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-longevity-passed, #private-cloud-longevity-failed, #non-cloud-longevity-failed", "class": "hidden" }'>un besoin à court terme</li>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-longevity-passed, #private-cloud-longevity-passed, #non-cloud-longevity-passed", "class": "hidden" }'>un besoin à long terme</li>
</ul>
</div>

<!-- Question 9 -->
<div id="question-9" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true }, "default": { "action": "addClass", "source": ".elasticity-result > span", "class": "hidden" } }'>
<p>Elasticité : Avec le temps, les exigences en matière de ressources de l’application&#160;:</p>
<ul>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-elasticity-passed, #private-cloud-elasticity-passed, #non-cloud-elasticity-passed", "class": "hidden" }'>demeureront stables</li>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-elasticity-passed, #private-cloud-elasticity-failed, #non-cloud-elasticity-failed", "class": "hidden" }'>croîtront et/ou diminueront</li>
</ul>
</div>

<!-- Question 10 -->
<div id="question-10" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true }, "default": { "action": "addClass", "source": ".innovation-result > span", "class": "hidden" } }'>
<p>Innovation</p>
<ul>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-innovation-passed, #private-cloud-innovation-failed, #non-cloud-innovation-failed", "class": "hidden" }'>On voudra que le projet tire profit des nouvelles tendances technologiques au fur et à mesure qu’elles sont mises en vente sur le marché.</li>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-innovation-failed, #private-cloud-innovation-passed, #non-cloud-innovation-failed", "class": "hidden" }'>On ne souhaite pas que l’application tire profit des nouvelles tendances technologiques, et celle-ci demeurera stable.</li>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-innovation-failed, #private-cloud-innovation-failed, #non-cloud-innovation-passed", "class": "hidden" }'>Aucune nouvelle technologie n’est requise.</li>
</ul>
</div>

<!-- Question 11 -->
<div id="question-11" class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"radio", "noForm": true, "base": { "live": true }, "default": { "action": "addClass", "source": ".devops-result > span", "class": "hidden" } }'>
<p>Dév. opérations</p>
<ul>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-devops-passed, #private-cloud-devops-failed, #non-cloud-devops-failed", "class": "hidden" }'>Désire un accès rapide à un ensemble d’outils pour appuyer le développement d’applications comme plateforme de services sans faire un investissement en capital.</li>
<li data-wb-fieldflow='{ "action": "removeClass", "source": "#public-cloud-devops-failed, #private-cloud-devops-passed, #non-cloud-devops-passed", "class": "hidden" }'>Est prêt investir pour déployer des outils de développement d’applications pour appuyer le projet.</li>
</ul>
</div>

</section>

</form>
</div>

<!--Results-->
<section>

## Résultats

**Progrès sur le questionnaire&#160;:**

<p markdown="0" class="wb-inview" data-inview="progress-bottom"><progress id="questionnaire-progress" value="0" max="100" class="wb-calculate" data-wb-calculate='{ "eventTrigger": "removeClass.action.wb-fieldflow", "operations": [
  { "type": "percent", "decimalPlaces": 0, "outputTarget": "#questionnaire-progress, #questionnaire-progress-bottom", "outputAttribute": "value", "inputs": [
    { "type": "count", "query": "#right-cloud-questionnaire fieldset input:checked" },
    { "type": "count", "query": "#right-cloud-questionnaire fieldset" }
  ] },
  { "type": "percent", "decimalPlaces": 0, "outputTarget": "#questionnaire-progress-percent, #questionnaire-progress-percent-bottom", "inputs": [
    { "type": "count", "query": "#right-cloud-questionnaire fieldset input:checked" },
    { "type": "count", "query": "#right-cloud-questionnaire fieldset" }
  ] },
  { "type": "conditional",
    "inputs": [
      { "type": ">", "inputs": [ { "type": "number", "query": "#questionnaire-progress-percent" }, 0 ] }
    ],
    "actions": [ 
      { "type": "event", "outputTarget": "#questionnaire-progress", "outputEvent": "wb-update-wb-progress" }
    ] 
  }
] }'></progress> <span id="questionnaire-progress-percent">0</span>%</p>

<section markdown="0" id="progress-bottom" class="wb-overlay modal-content overlay-def wb-bar-b">
<header>
<div class="mrgn-tp-md mrgn-bttm-sm h5">
<h3 class="mrgn-tp-0 mrgn-bttm-0 mrgn-rght-md h5 pull-left">Progrès sur le questionnaire</h3>
<progress id="questionnaire-progress-bottom" value="0" max="100"></progress> <span id="questionnaire-progress-percent-bottom">0</span>%
</div>
</header>
</section>

<table class="table table-bordered table-condensed">
<thead>
<tr>
<th id="r1h1">Niveau d’incidence</th>
<th id="r1h2">Critères</th>
<th id="r1h3"><strong>Public</strong></th>
<th id="r1h4"><strong>Privé</strong></th>
<th id="r1h5"><strong>Hors-nuage</strong></th>
</tr>
</thead>
<tbody>
<tr>
<th headers="r1h1" id="r2h1" rowspan="3"><strong>Obligatoire</strong></th>
<th headers="r1h2" id="r2h2"><strong>Délicatesse</strong></th>
<td headers="r1h3 r2h1 r2h2" class="sensitivity-result"><span id="public-cloud-sensitivity-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> Passé</span><span id="public-cloud-sensitivity-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> Échoué</span></td>
<td headers="r1h4 r2h1 r2h2" class="sensitivity-result"><span id="private-cloud-sensitivity-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> Passé</span><span id="private-cloud-sensitivity-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> Échoué</span></td>
<td headers="r1h5 r2h1 r2h2" class="sensitivity-result"><span id="non-cloud-sensitivity-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> Passé</span><span id="non-cloud-sensitivity-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> Échoué</span></td>
</tr>

<tr>
<th headers="r1h2" id="r2h3"><strong>Financier</strong></th>
<td headers="r1h3 r2h1 r2h3" class="financial-result"><span id="public-cloud-financial-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> Passé</span><span id="public-cloud-financial-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> Échoué</span></td>
<td headers="r1h4 r2h1 r2h3" class="financial-result"><span id="private-cloud-financial-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> Passé</span><span id="private-cloud-financial-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> Échoué</span></td>
<td headers="r1h5 r2h1 r2h3" class="financial-result"><span id="non-cloud-financial-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> Passé</span><span id="non-cloud-financial-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> Échoué</span></td>
</tr>

<tr>
<th headers="r1h2" id="r2h4"><strong>Legs</strong></th>
<td headers="r1h3 r2h1 r2h4" class="legacy-result"><span id="public-cloud-legacy-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> Passé</span><span id="public-cloud-legacy-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> Échoué</span></td>
<td headers="r1h4 r2h1 r2h4" class="legacy-result"><span id="private-cloud-legacy-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> Passé</span><span id="private-cloud-legacy-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> Échoué</span></td>
<td headers="r1h5 r2h1 r2h4" class="legacy-result"><span id="non-cloud-legacy-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> Passé</span><span id="non-cloud-legacy-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> Échoué</span></td>
</tr>

<tr>
<th headers="r1h1" id="r3h1" rowspan="3"><strong>Bien coté</strong><br /> [20 points chacun]</th>
<th headers="r1h2" id="r3h2"><strong>Commercialisé</strong></th>
<td headers="r1h3 r3h1 r3h2" class="commoditized-result"><span id="public-cloud-commoditized-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 20 points</span><span id="public-cloud-commoditized-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
<td headers="r1h4 r3h1 r3h2" class="commoditized-result"><span id="private-cloud-commoditized-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 20 points</span><span id="private-cloud-commoditized-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
<td headers="r1h5 r3h1 r3h2" class="commoditized-result"><span id="non-cloud-commoditized-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 20 points</span><span id="non-cloud-commoditized-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
</tr>

<tr>
<th headers="r1h2" id="r3h3"><strong>Endroit</strong></th>
<td headers="r1h3 r3h1 r3h3" class="location-result"><span id="public-cloud-location-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 20 points</span><span id="public-cloud-location-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
<td headers="r1h4 r3h1 r3h3" class="location-result"><span id="private-cloud-location-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 20 points</span><span id="private-cloud-location-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
<td headers="r1h5 r3h1 r3h3" class="location-result"><span id="non-cloud-location-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 20 points</span><span id="non-cloud-location-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
</tr>

<tr>
<th headers="r1h2" id="r3h4"><strong>Connectivité</strong></th>
<td headers="r1h3 r3h1 r3h4" class="connectivity-result"><span id="public-cloud-connectivity-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 20 points</span><span id="public-cloud-connectivity-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
<td headers="r1h4 r3h1 r3h4" class="connectivity-result"><span id="private-cloud-connectivity-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 20 points</span><span id="private-cloud-connectivity-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
<td headers="r1h5 r3h1 r3h4" class="connectivity-result"><span id="non-cloud-connectivity-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 20 points</span><span id="non-cloud-connectivity-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
</tr>

<tr>
<th headers="r1h1" id="r4h1" rowspan="5"><strong>Coté</strong><br /> [10 points chacun]</th>
<th headers="r1h2" id="r4h2"><strong>Rapidité</strong></th>
<td headers="r1h3 r4h1 r4h2" class="speed-result"><span id="public-cloud-speed-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 10 points</span><span id="public-cloud-speed-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
<td headers="r1h4 r4h1 r4h2" class="speed-result"><span id="private-cloud-speed-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 10 points</span><span id="private-cloud-speed-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
<td headers="r1h5 r4h1 r4h2" class="speed-result"><span id="non-cloud-speed-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 10 points</span><span id="non-cloud-speed-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
</tr>

<tr>
<th headers="r1h2" id="r4h3"><strong>Longévité</strong></th>
<td headers="r1h3 r4h1 r4h3" class="longevity-result"><span id="public-cloud-longevity-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 10 points</span><span id="public-cloud-longevity-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
<td headers="r1h4 r4h1 r4h3" class="longevity-result"><span id="private-cloud-longevity-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 10 points</span><span id="private-cloud-longevity-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
<td headers="r1h5 r4h1 r4h3" class="longevity-result"><span id="non-cloud-longevity-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 10 points</span><span id="non-cloud-longevity-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
</tr>

<tr>
<th headers="r1h2" id="r4h4"><strong>Élasticité</strong></th>
<td headers="r1h3 r4h1 r4h4" class="elasticity-result"><span id="public-cloud-elasticity-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 10 points</span><span id="public-cloud-elasticity-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
<td headers="r1h4 r4h1 r4h4" class="elasticity-result"><span id="private-cloud-elasticity-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 10 points</span><span id="private-cloud-elasticity-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
<td headers="r1h5 r4h1 r4h4" class="elasticity-result"><span id="non-cloud-elasticity-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 10 points</span><span id="non-cloud-elasticity-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
</tr>

<tr>
<th headers="r1h2" id="r4h5"><strong>Innovation</strong></th>
<td headers="r1h3 r4h1 r4h5" class="innovation-result"><span id="public-cloud-innovation-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 10 points</span><span id="public-cloud-innovation-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
<td headers="r1h4 r4h1 r4h5" class="innovation-result"><span id="private-cloud-innovation-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 10 points</span><span id="private-cloud-innovation-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
<td headers="r1h5 r4h1 r4h5" class="innovation-result"><span id="non-cloud-innovation-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 10 points</span><span id="non-cloud-innovation-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
</tr>

<tr>
<th headers="r1h2" id="r4h6"><strong>Dév. opérations</strong></th>
<td headers="r1h3 r4h1 r4h6" class="devops-result"><span id="public-cloud-devops-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 10 points</span><span id="public-cloud-devops-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
<td headers="r1h4 r4h1 r4h6" class="devops-result"><span id="private-cloud-devops-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 10 points</span><span id="private-cloud-devops-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
<td headers="r1h5 r4h1 r4h6" class="devops-result"><span id="non-cloud-devops-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 10 points</span><span id="non-cloud-devops-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>
</tr>

<tr>
<th headers="r1h1" id="r5h1" rowspan="2"><strong>Summary</strong></th>
<th headers="r1h2" id="r5h2"><strong>Obligatoire respecté</strong></th>
<td headers="r1h3 r5h1 r5h2" class="wb-calculate" data-wb-calculate='{ "eventTrigger": "removeClass.action.wb-fieldflow", "operations": [
  { "type": "count", "increment": 1, "query": "#public-cloud-sensitivity-passed:not(.hidden), #public-cloud-financial-passed:not(.hidden), #public-cloud-legacy-passed:not(.hidden)", "outputTarget": "#tally-mandatory-public-cloud" },
  { "type": "percent", "decimalPlaces": 1, "inputs": [{ "type": "number", "query": "#tally-mandatory-public-cloud" }, 3], "outputTarget": "#percent-mandatory-public-cloud" },
  { "type": "conditional", "inputs": [
      { "type": ">=", "inputs": [{ "type": "count", "query": "fieldset[data-wb-fieldflow-source=question-1] input:checked" }, 1] },
      { "type": ">=", "inputs": [{ "type": "count", "query": "fieldset[data-wb-fieldflow-source=question-2] input:checked" }, 1] },
      { "type": ">=", "inputs": [{ "type": "count", "query": "fieldset[data-wb-fieldflow-source=question-3] input:checked" }, 1] }
    ],
    "actions": [
      { "type": "conditional", "inputs": [{ "type": "==", "inputs": [{ "type": "number", "query": "#tally-mandatory-public-cloud"}, 3] }], "actions": [{ "type": "addClass", "class": "hidden", "outputTarget": "#mandatory-public-cloud-failed"}, { "type":  "removeClass", "class": "hidden", "outputTarget": "#mandatory-public-cloud-passed"}] },
      { "type": "conditional", "inputs": [{ "type": "!=", "inputs": [{ "type": "number", "query": "#tally-mandatory-public-cloud"}, 3] }], "actions": [{ "type": "addClass", "class": "hidden", "outputTarget": "#mandatory-public-cloud-passed"}, { "type": "removeClass", "class": "hidden", "outputTarget": "#mandatory-public-cloud-failed"}] }
    ]
  }
] }'><span id="tally-mandatory-public-cloud">0</span> / 3 (<span id="percent-mandatory-public-cloud">0</span>&#160;%)<span id="mandatory-public-cloud-passed" class="hidden mrgn-lft-md"> <span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> Passé</span><span id="mandatory-public-cloud-failed" class="hidden mrgn-lft-md"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> Échoué</span></td>
<td headers="r1h4 r5h1 r5h2" class="wb-calculate" data-wb-calculate='{ "eventTrigger": "removeClass.action.wb-fieldflow", "operations": [
  { "type": "count", "increment": 1, "query": "#private-cloud-sensitivity-passed:not(.hidden), #private-cloud-financial-passed:not(.hidden), #private-cloud-legacy-passed:not(.hidden)", "outputTarget": "#tally-mandatory-private-cloud" },
  { "type": "percent", "decimalPlaces": 1, "inputs": [{ "type": "number", "query": "#tally-mandatory-private-cloud" }, 3], "outputTarget": "#percent-mandatory-private-cloud" },
  { "type": "conditional", "inputs": [
      { "type": ">=", "inputs": [{ "type": "count", "query": "fieldset[data-wb-fieldflow-source=question-1] input:checked" }, 1] },
      { "type": ">=", "inputs": [{ "type": "count", "query": "fieldset[data-wb-fieldflow-source=question-2] input:checked" }, 1] },
      { "type": ">=", "inputs": [{ "type": "count", "query": "fieldset[data-wb-fieldflow-source=question-3] input:checked" }, 1] }
    ],
    "actions": [
      { "type": "conditional", "inputs": [{ "type": "==", "inputs": [{ "type": "number", "query": "#tally-mandatory-private-cloud"}, 3] }], "actions": [{ "type": "addClass", "class": "hidden", "outputTarget": "#mandatory-private-cloud-failed"}, { "type": "removeClass", "class": "hidden", "outputTarget": "#mandatory-private-cloud-passed"}] },
      { "type": "conditional", "inputs": [{ "type": "!=", "inputs": [{ "type": "number", "query": "#tally-mandatory-private-cloud"}, 3] }], "actions": [{ "type": "addClass", "class": "hidden", "outputTarget": "#mandatory-private-cloud-passed"}, { "type": "removeClass", "class": "hidden", "outputTarget": "#mandatory-private-cloud-failed"}] }
    ]
  }
] }'><span id="tally-mandatory-private-cloud">0</span> / 3 (<span id="percent-mandatory-private-cloud">0</span>&#160;%)<span id="mandatory-private-cloud-passed" class="hidden mrgn-lft-md"> <span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> Passé</span><span id="mandatory-private-cloud-failed" class="hidden mrgn-lft-md"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> Échoué</span></td>
<td headers="r1h5 r5h1 r5h2" class="wb-calculate" data-wb-calculate='{ "eventTrigger": "removeClass.action.wb-fieldflow", "operations": [
  { "type": "count", "increment": 1, "query": "#non-cloud-sensitivity-passed:not(.hidden), #non-cloud-financial-passed:not(.hidden), #non-cloud-legacy-passed:not(.hidden)", "outputTarget": "#tally-mandatory-non-cloud" },
  { "type": "percent", "decimalPlaces": 1, "inputs": [{ "type": "number", "query": "#tally-mandatory-non-cloud" }, 3], "outputTarget": "#percent-mandatory-non-cloud" },
  { "type": "conditional", "inputs": [
      { "type": ">=", "inputs": [{ "type": "count", "query": "fieldset[data-wb-fieldflow-source=question-1] input:checked" }, 1] },
      { "type": ">=", "inputs": [{ "type": "count", "query": "fieldset[data-wb-fieldflow-source=question-2] input:checked" }, 1] },
      { "type": ">=", "inputs": [{ "type": "count", "query": "fieldset[data-wb-fieldflow-source=question-3] input:checked" }, 1] }
    ],
    "actions": [
      { "type": "conditional", "inputs": [{ "type": "==", "inputs": [{ "type": "number", "query": "#tally-mandatory-non-cloud"}, 3] }], "actions": [{ "type": "addClass", "class": "hidden", "outputTarget": "#mandatory-non-cloud-failed"}, { "type": "removeClass", "class": "hidden", "outputTarget": "#mandatory-non-cloud-passed"}] },
      { "type": "conditional", "inputs": [{ "type": "!=", "inputs": [{ "type": "number", "query": "#tally-mandatory-non-cloud"}, 3] }], "actions": [{ "type": "addClass", "class": "hidden", "outputTarget": "#mandatory-non-cloud-passed"}, { "type": "removeClass", "class": "hidden", "outputTarget": "#mandatory-non-cloud-failed"}] }
    ]
  }
] }'><span id="tally-mandatory-non-cloud">0</span> / 3 (<span id="percent-mandatory-non-cloud">0</span>&#160;%)<span id="mandatory-non-cloud-passed" class="hidden mrgn-lft-md"> <span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> Passé</span><span id="mandatory-non-cloud-failed" class="hidden mrgn-lft-md"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> Échoué</span></td>
</tr>

<tr>
<th headers="r1h2" id="r5h3"><strong>Totaux cotés</strong></th>
<td headers="r1h3 r5h1 r5h3" class="wb-calculate" data-wb-calculate='{ "eventTrigger": "removeClass.action.wb-fieldflow", "operations": [
  { "type": "add", "inputs": [{ "type": "count", "increment": 20, "query": "#public-cloud-commoditized-passed:not(.hidden), #public-cloud-location-passed:not(.hidden), #public-cloud-connectivity-passed:not(.hidden)" }, { "type": "count", "increment": 10, "query": "#public-cloud-speed-passed:not(.hidden), #public-cloud-longevity-passed:not(.hidden), #public-cloud-elasticity-passed:not(.hidden), #public-cloud-innovation-passed:not(.hidden), #public-cloud-devops-passed:not(.hidden)" }], "outputTarget": "#tally-rated-public-cloud" },
  { "type": "percent", "decimalPlaces": 1, "inputs": [{ "type": "number", "query": "#tally-rated-public-cloud" }, 110], "outputTarget": "#percent-rated-public-cloud" }
] }'><span id="tally-rated-public-cloud">0</span> / 110 (<span id="percent-rated-public-cloud">0</span>&#160;%)</td>
<td headers="r1h4 r5h1 r5h3" class="wb-calculate" data-wb-calculate='{ "eventTrigger": "removeClass.action.wb-fieldflow", "operations": [
  { "type": "add", "inputs": [{ "type": "count", "increment": 20, "query": "#private-cloud-commoditized-passed:not(.hidden), #private-cloud-location-passed:not(.hidden), #private-cloud-connectivity-passed:not(.hidden)" }, { "type": "count", "increment": 10, "query": "#private-cloud-speed-passed:not(.hidden), #private-cloud-longevity-passed:not(.hidden), #private-cloud-elasticity-passed:not(.hidden), #private-cloud-innovation-passed:not(.hidden), #private-cloud-devops-passed:not(.hidden)" }], "outputTarget": "#tally-rated-private-cloud" },
  { "type": "percent", "decimalPlaces": 1, "inputs": [{ "type": "number", "query": "#tally-rated-private-cloud" }, 110], "outputTarget": "#percent-rated-private-cloud" }
] }'><span id="tally-rated-private-cloud">0</span> / 110 (<span id="percent-rated-private-cloud">0</span>&#160;%)</td>
<td headers="r1h5 r5h1 r5h3" class="wb-calculate" data-wb-calculate='{ "eventTrigger": "removeClass.action.wb-fieldflow", "operations": [
  { "type": "add", "inputs": [{ "type": "count", "increment": 20, "query": "#non-cloud-commoditized-passed:not(.hidden), #non-cloud-location-passed:not(.hidden), #non-cloud-connectivity-passed:not(.hidden)" }, { "type": "count", "increment": 10, "query": "#non-cloud-speed-passed:not(.hidden), #non-cloud-longevity-passed:not(.hidden), #non-cloud-elasticity-passed:not(.hidden), #non-cloud-innovation-passed:not(.hidden), #non-cloud-devops-passed:not(.hidden)" }], "outputTarget": "#tally-rated-non-cloud" },
  { "type": "percent", "decimalPlaces": 1, "inputs": [{ "type": "number", "query": "#tally-rated-non-cloud" }, 110], "outputTarget": "#percent-rated-non-cloud" }
] }'><span id="tally-rated-non-cloud">0</span> / 110 (<span id="percent-rated-non-cloud">0</span>&#160;%)</td>
</tr>
</tbody>
</table>

</section>
