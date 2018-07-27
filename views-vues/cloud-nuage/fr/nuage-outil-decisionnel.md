---
layout: default
title: Outil décisionnel du nuage approprié (ébauche)
lang: fr
altLang: en
altLangPage: cloud-decision-tool
collectionDirectory: views-vues/cloud-nuage
cloudTypes:
 - "public-cloud"
 - "private-cloud"
 - "non-cloud"
criteriaTitles:
 - "Délicatesse"
 - "Financier"
 - "Legs"
 - "Commercialisé"
 - "Endroit"
 - "Connectivité"
 - "Rapidité"
 - "Longévité"
 - "Elasticité"
 - "Innovation"
 - "Dév. opérations"
criteriaTags:
 - "sensitivity"
 - "financial"
 - "legacy"
 - "commoditized"
 - "location"
 - "connectivity"
 - "speed"
 - "longevity"
 - "elasticity"
 - "innovation"
 - "devops"
---
{% assign dataVariable = site.playbookData[page.lang] %}{%
assign dataSource = site.data[dataVariable] %}
<div class="wb-inview" data-inview="progress-overlay">

Il vous est possible d’utiliser le modèle suivant afin de vous aider à décider du bon modèle de déploiement du nuage approprié pour votre contexte opérationnel.

</div>

<div id="right-cloud-questionnaire" class="wb-frmvld">
<form method="post" action="#">

<section>

## Obligatoire

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

<section>
<h3 class="h5 mrgn-bttm-0 mrgn-tp-0 mrgn-rght-sm pull-left">Questionnaire complété&#160;:</h3>

<p><progress id="questionnaire-progress" value="0" max="100" class="wb-calculate" data-wb-calculate='{ "eventTrigger": "addClass.action.wb-fieldflow removeClass.action.wb-fieldflow toggle.action.wb-fieldflow score-updated", "operations": [
  { "type": "percent", "decimalPlaces": 0, "outputTarget": "#questionnaire-progress-percent, #questionnaire-progress-overlay-percent", "inputs": [
    { "type": "count", "query": "#right-cloud-questionnaire fieldset input:checked" },
    { "type": "count", "query": "#right-cloud-questionnaire fieldset" }
  ] },
  { "type": "number", "outputTarget": "#questionnaire-progress, #questionnaire-progress-overlay", "outputAttribute": "value", "query": "#questionnaire-progress-percent" },
  { "type": "conditional",
    "inputs": [
      { "type": ">", "inputs": [ { "type": "number", "query": "#questionnaire-progress-percent" }, 0 ] }
    ],
    "actionsTrue": [
      { "type": "event", "outputTarget": "#questionnaire-progress, #questionnaire-progress-overlay", "outputEvent": "wb-update-wb-progress" }
    ]
  }
] }'></progress> <span id="questionnaire-progress-percent">0</span>&#160;%</p>
</section>

<section markdown="0" id="progress-overlay" class="wb-overlay modal-content overlay-def wb-bar-t">
<header>
<div class="h6 mrgn-tp-md mrgn-bttm-md">
<h3 class="h6 mrgn-tp-0 mrgn-bttm-0 mrgn-rght-sm pull-left">Questionnaire complété&#160;:</h3>
<p><progress id="questionnaire-progress-overlay" value="0" max="100"></progress> <span id="questionnaire-progress-overlay-percent">0</span>&#160;%</p>
</div>
</header>
</section>

<table class="table table-bordered table-condensed">
<thead>
<tr>
<th id="r1h1">Niveau d’incidence</th>
<th id="r1h2">Critères</th>
<th id="r1h3">Public</th>
<th id="r1h4">Privé</th>
<th id="r1h5">Hors-nuage</th>
</tr>
</thead>
<tbody>
{% for index in (0..2) %}{%
  assign headerNumber = index | plus: 2 %}{%
  assign criteriaTitle = page.criteriaTitles[ index ] %}{%
  assign criteriaTag = page.criteriaTags[ index ]
%}<tr>{%
if index == 0 %}
<th headers="r1h1" id="r2h1" rowspan="3">Obligatoire</th>{%
endif %}
<th headers="r1h2" id="r2h{{ headerNumber }}">{{ criteriaTitle }}</th>{%
  for cloudIndex in (0..2) %}{%
    assign cloudHeaderNumber = cloudIndex | plus: 3 %}{%
    assign cloudType = page.cloudTypes[ cloudIndex ] %}
<td headers="r1h{{ cloudHeaderNumber}} r2h1 r2h{{ headerNumber }}" class="{{ criteriaTag }}-result"><span id="{{ cloudType }}-{{ criteriaTag }}-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> Passé</span><span id="{{ cloudType }}-{{ criteriaTag }}-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> Échoué</span></td>{%
  endfor %}
</tr>{%
endfor %}

{% for index in (3..5) %}{%
  assign headerNumber = index | minus: 1 %}{%
  assign criteriaTitle = page.criteriaTitles[ index ] %}{%
  assign criteriaTag = page.criteriaTags[ index ]
%}<tr>{%
if index == 3 %}
<th headers="r1h1" id="r3h1" rowspan="3">Bien coté<br /> [20 points chacun]</th>{%
endif %}
<th headers="r1h2" id="r3h{{ headerNumber }}">{{ criteriaTitle }}</th>{%
  for cloudIndex in (0..2) %}{%
    assign cloudHeaderNumber = cloudIndex | plus: 3 %}{%
    assign cloudType = page.cloudTypes[ cloudIndex ] %}
<td headers="r1h{{ cloudHeaderNumber }} r3h1 r3h{{ headerNumber }}" class="{{ criteriaTag }}-result"><span id="{{ cloudType }}-{{ criteriaTag }}-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 20 points</span><span id="{{ cloudType }}-{{ criteriaTag }}-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>{%
  endfor %}
</tr>{%
endfor %}

{% for index in (6..10) %}{%
  assign headerNumber = index | minus: 4 %}{%
  assign criteriaTitle = page.criteriaTitles[ index ] %}{%
  assign criteriaTag = page.criteriaTags[ index ]
%}<tr>{%
if index == 6 %}
<th headers="r1h1" id="r4h1" rowspan="5">Coté<br /> [10 points chacun]</th>{%
endif %}
<th headers="r1h2" id="r4h{{ headerNumber }}">{{ criteriaTitle }}</th>{%
  for cloudIndex in (0..2) %}{%
    assign cloudHeaderNumber = cloudIndex | plus: 3 %}{%
    assign cloudType = page.cloudTypes[ cloudIndex ] %}
<td headers="r1h{{ cloudHeaderNumber }} r4h1 r4h{{ headerNumber }}" class="{{ criteriaTag }}-result"><span id="{{ cloudType }}-{{ criteriaTag }}-passed" class="hidden"><span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> 10 points</span><span id="{{ cloudType }}-{{ criteriaTag }}-failed" class="hidden"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> 0 points</span></td>{%
  endfor %}
</tr>{%
endfor %}

<tr>
<th headers="r1h1" id="r5h1" rowspan="2">Sommaire</th>
<th headers="r1h2" id="r5h2">Obligatoire respecté</th>{%
for index in (0..2) %}{%
  assign headerNumber = index | plus: 3 %}{%
  assign cloudType = page.cloudTypes[ index ] %}
<td headers="r1h{{ headerNumber }} r5h1 r5h2" class="wb-calculate" data-wb-calculate='{ "eventTrigger": "removeClass.action.wb-fieldflow", "operations": [
  { "type": "count", "increment": 1, "query": "#{{ cloudType }}-sensitivity-passed:not(.hidden), #{{ cloudType }}-financial-passed:not(.hidden), #{{ cloudType }}-legacy-passed:not(.hidden)", "outputTarget": "#tally-mandatory-{{ cloudType }}" },
  { "type": "percent", "decimalPlaces": 1, "inputs": [ { "type": "number", "query": "#tally-mandatory-{{ cloudType }}" }, 3 ], "outputTarget": "#percent-mandatory-{{ cloudType }}" },
  { "type": "number", "decimalPlaces": 0, "query": "#percent-mandatory-{{ cloudType }}", "outputTarget": "#progress-mandatory-{{ cloudType }}", "outputAttribute": "value" },
  { "type": "conditional",
    "inputs": [
      { "type": ">", "inputs": [ { "type": "number", "query": "#percent-mandatory-{{ criteriaNumber }}" }, 0 ] }
    ],
    "actionsTrue": [
      { "type": "event", "outputTarget": "#progress-mandatory-{{ cloudType }}", "outputEvent": "wb-update-wb-progress" }
    ]
  },
  { "type": "conditional",
    "inputs": [
      { "type": ">=",
        "inputs": [
          { "type": "count", "query": "fieldset[data-wb-fieldflow-source=question-1] input:checked" }, 1
        ]
      },
      { "type": ">=",
        "inputs": [
          { "type": "count", "query": "fieldset[data-wb-fieldflow-source=question-2 ] input:checked" }, 1
        ]
      },
      { "type": ">=",
        "inputs": [
          { "type": "count", "query": "fieldset[data-wb-fieldflow-source=question-3 ] input:checked" }, 1
        ]
      }
    ],
    "actionsTrue": [
      { "type": "conditional",
        "inputs": [
          { "type": "==",
            "inputs": [
              { "type": "number", "query": "#tally-mandatory-{{ cloudType }}" }, 3
            ]
          }
        ],
        "actionsTrue": [
          { "type": "addClass", "class": "hidden", "outputTarget": "#mandatory-{{ cloudType }}-failed"},
          { "type":  "removeClass", "class": "hidden", "outputTarget": "#mandatory-{{ cloudType }}-passed"}
        ]
      },
      { "type": "conditional",
        "inputs": [
          { "type": "!=",
            "inputs": [
              { "type": "number", "query": "#tally-mandatory-{{ cloudType }}" }, 3
            ]
          }
        ],
        "actionsTrue": [
          { "type": "addClass", "class": "hidden", "outputTarget": "#mandatory-{{ cloudType }}-passed"},
          { "type": "removeClass", "class": "hidden", "outputTarget": "#mandatory-{{ cloudType }}-failed"}
        ]
      }
    ]
  }
] }'><span id="tally-mandatory-{{ cloudType }}">0</span> {{ site.OutOf[ page.lang ] }} 3 (<span id="percent-mandatory-{{ cloudType }}">0</span>&#160;%)<span id="mandatory-{{ cloudType }}-passed" class="hidden mrgn-lft-md"> <span class="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> Passé</span><span id="mandatory-{{ cloudType }}-failed" class="hidden mrgn-lft-md"><span class="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span> Échoué</span><div><progress id="progress-mandatory-{{ cloudType }}" value="0" max="100"></progress></div></td>{%
endfor %}
</tr>

<tr>
<th headers="r1h2" id="r5h3">Totaux cotés</th>{%
for index in (0..2) %}{%
  assign headerNumber = index | plus: 3 %}{%
  assign cloudType = page.cloudTypes[ index ] %}
<td headers="r1h{{ headerNumber }} r5h1 r5h3" class="wb-calculate" data-wb-calculate='{ "eventTrigger": "removeClass.action.wb-fieldflow", "operations": [
  { "type": "add",
    "inputs": [
      { "type": "count", "increment": 20, "query": "#{{ cloudType }}-commoditized-passed:not(.hidden), #{{ cloudType }}-location-passed:not(.hidden), #{{ cloudType }}-connectivity-passed:not(.hidden)" },
      { "type": "count", "increment": 10, "query": "#{{ cloudType }}-speed-passed:not(.hidden), #{{ cloudType }}-longevity-passed:not(.hidden), #{{ cloudType }}-elasticity-passed:not(.hidden), #{{ cloudType }}-innovation-passed:not(.hidden), #{{ cloudType }}-devops-passed:not(.hidden)" }
    ],
    "outputTarget": "#tally-rated-{{ cloudType }}"
  },
  { "type": "percent", "decimalPlaces": 1,
    "inputs": [
      { "type": "number", "query": "#tally-rated-{{ cloudType }}" }, 110
    ],
    "outputTarget": "#percent-rated-{{ cloudType }}"
  },
  { "type": "number", "decimalPlaces": 0, "query": "#percent-rated-{{ cloudType }}", "outputTarget": "#progress-rated-{{ cloudType }}", "outputAttribute": "value" },
  { "type": "conditional", "inputs": [ { "type": ">", "inputs": [ { "type": "number", "query": "#percent-rated-{{ criteriaNumber }}" }, 0 ] } ],
    "actionsTrue": [ { "type": "event", "outputTarget": "#progress-rated-{{ cloudType }}", "outputEvent": "wb-update-wb-progress" } ]
  }
] }'><span id="tally-rated-{{ cloudType }}">0</span> {{ site.OutOf[ page.lang ] }} 110 (<span id="percent-rated-{{ cloudType }}">0</span>&#160;%)<div><progress id="progress-rated-{{ cloudType }}" value="0" max="100"></progress></div></td>{%
endfor %}
</tr>
</tbody>
</table>

</section>
