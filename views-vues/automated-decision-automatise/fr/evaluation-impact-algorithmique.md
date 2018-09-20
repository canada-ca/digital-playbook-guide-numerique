---
layout: default
title: Évaluation d'impact algorithmique (v0.2)
lang: fr
altLang: en
altLangPage: algorithmic-impact-assessment
collectionDirectory: views-vues/automated-decision-automatise
aboutRespondentSection: À propos du répondant (facultatif)
aboutDecisionSection: A propos de la décision
dataBusinessProcessSection: Données et processus métier
systemFunctionalitySection: Fonctionnalité du système
organizationalReadinessSection: Préparation organisationnelle
automatedDecisionViewTitle: Comment dois-je mettre en place un système de décision automatisé? (ébauche)
automatedDecisionViewFilename: decision-automatise
impactScore: Score d'impact
impactLevel: Niveau d'impact
relevantRequirements: Exigences pertinentes
aiaCriteria: 
  - "Impact sur les individus et les entités"
  - "Impact sur les institutions gouvernementales"
  - "Gestion de données"
  - "Équité procédurale"
  - "Complexité"
questions:
  "1": Nom du répondant
  "2": Profession
  "3": Ministère
  "3-sub": Sélectionnez une ministère
  "4": Direction générale
  "5": Titre du projet
  "6": Parlez-nous un peu de votre système
  "7": Quelles parties du processus décisionnel seront automatisées par ce système? (Cochez toutes les cases qui s'appliquent)
  "7a": La cote de risque, le profilage ou la catégorisation d'un client en termes de risque
  "7b": Recommandation de prendre un certain plan d'action
  "7c": Rendre une décision administrative complète
  "7.1": Est-ce que la recommandation ou une décision rendue par le système d'une latitude?
  "7.1.1": Décrire ce qui est de la décision discétionnaire
  "7.1.2": La décision est purement discrétionnaire? (par exemple, un examen pour des raison humanitaires)
  "7.1.3": Ont tous les points de décision qui impliquent l'exercice du pouvoir discrétionnaire humain été clairement identifiés?
  "8": "Combien de temps le système est-il censé fonctionner? (Choisissez-en un)"
  "8-one-time": Une fois seulement
  "8-limited-duration": Pour une durée limitée
  "8-indefinitely": Indéfiniment
  "9": Cette décision peut-elle entraîner la restriction du déplacement d'une personne vers, hors du Canada ou à l'intérieur du Canada?
  "10": Cette décision est une activité en ce qui concerne le passé de l'individu, actuel ou criminel potentiel?
  "10.1": Ce système automatisé peut augmenter la probabilité d'incarcération pour un individu?
  "11": Est-ce que une décision au sujet de la prestation des soins de santé à un individu, communauté ou d'une population?
  "12": Ce système peut-il permettre d'accorder ou de restreindre l'accès à un local ou à un réseau?
  "12.1": Quelle est la classification de la prémisse? (Choisissez-en un)
  "13": Est-ce que ce système fournit des fonds à une personne, une entreprise ou d'une collectivité?
  "13.1": Est-ce le financement d'un programme de soutien social pour un individu?
  "13.1.1": Si le financement devait être refusé, pourrait-il laisser le client dans une situation économique précaire? (par exemple, pourrait rendre une personne sans-abri particulier ou une entreprise de fermer)
  "13.2": Est-ce que les paiements de transfert d'émission du système à une entreprise ou d'une organisation?
  "13.2.1": Est-ce don, la contribution ou les paiements de transfert au-delà de 2.000.000 $ par paiement?
  "13.3": Ce système entraîne-t-il la délivrance d'une amende, d'une sanction administrative pécuniaire ou d'un avis de recouvrement de créances?
  "14": Ce système entraîne-t-il la délivrance d'un permis, d'une licence ou un droit de propriété intellectuelle?
  "14.1": Cela implique-t-il la collecte, le transport, le stockage, l’achat ou la vente d’un bien ou d’une substance réglementé?
  "14.1.1": Est-ce que ce produit ou cette substance réglementée est dangereux, comme une arme à feu, une toxine ou un produit dangereux?
  "14.2": Est-ce un permis de construction ou d'environnement?
  "14.3": Est-ce un brevet, une marque ou un droit d'auteur?
  "15": Est-ce une décision concernant la structure du marché (par exemple fusion ou une acquisition, une limite au nombre d'entrants sur le marché)?
  "16": Ce système confère-t-il un statut juridique qui est par ailleurs requis pour recevoir un avantage ou un service (par exemple, le statut d'Indien, le statut d'ancien combattant)?
  "17": Est-ce une décision en ce qui concerne la prestation des services consulaires?
  "18": Ce système implique-t-il la distribution de ressources humaines ou de matériel dans la gestion des urgences?
  "19": Quels sont les principaux motifs pour l'automatisation du processus décisionnel administratif? (Cochez toutes les cases)
  "19a": Les décisions immédiates du système pourraient sauver des vies
  "19b": Addresser du travail arrièré
  "19c": Améliorer la qualité globale des décisions
  "19d": Réduction des coûts de transaction d'un programme existant
  "19e": Le système exécute des tâches que les humains ne pourraient accomplir dans un délai raisonnable
  "19f": Améliorer la prestation de service à la clientèle
  "19g": Utiliser des approches innovantes
  "19h": Aucune de ces réponses
  "20": Votre système prendra-t-il des décisions concernant spécifiquement les peuples ou territoires autochtones?
  "20.1": Avez-vous engagé des consultations avec des organisations autochtones pertinentes dans la conception du système?
  "21": Qui a collecté les données utilisées pour la formation du système? (Cochez toutes les cases qui s’appliquent)
  "21a": Votre institution
  "21b": Une autre institution fédérale
  "21c": Un autre niveau de gouvernement
  "21d": Un gouvernement étranger
  "21e": Une tierce partie non gouvernementale
  "22": Qui recueille les données d'entrée utilisées par le système? (Cochez toutes les cases qui s’appliquent)
  "22a": Votre institution
  "22b": Une autre institution fédérale
  "22c": Un autre niveau de gouvernement
  "22d": Un gouvernement étranger
  "22e": Une tierce partie non gouvernementale
  "23": Avez-vous consulté des groupes de parties prenantes pertinents représentant les personnes susceptibles d’être touchées par la décision?
  "23.1": À votre connaissance, ces acteurs ne l'automatisation de support étant inclus dans la décision?
  "24": Existe-t-il un processus pour documenter comment les problèmes de qualité des données ont été résolus lors du processus de conception?
  "24.1": S'il vous plaît nous en dire plus sur ce processus
  "25-part1": Avez-vous entrepris une
  "25-link-url": "https://www.swc-cfc.gc.ca/gba-acs/approach-approche-fr.html"
  "25-link-text": analyse comparative entre les sexes en plus
  "25-part2": des données de formation?
  "25.1": Sur la base des résultats de l’ACS+, avez-vous documenté des stratégies d’atténuation?
  "26": Le système de décision automatisé utilise-t-il les informations personnelles comme données d'entrée?
  "26.1": Le programme comporte-t-il une évaluation des facteurs relatifs à la vie privée?
  "27": Avez-vous attribué des responsabilités pour la conception, le développement, la maintenance et l'amélioration du système?
  "27a": Conception
  "27b": Développement
  "27c": Entretien
  "27d": Amélioration
  "28": Quelle est la classification de sécurité le plus élevé des données d'entrée utilisées par le système? (Choisissez)
  "29": Le système nécessite-t-il l'analyse de données non structurées pour rendre une recommandation ou une décision?
  "29.1": Quel types de données non structurées (Cochez toutles les cases)?
  "29.1a": Audio
  "29.1b": Données biologiques
  "29.1c": Données géographiques
  "29.1d": Écriture
  "29.1e": Images
  "29.1f": Texte
  "29.1g": Vidéo
  "29.1h": Autre
  "29.1.1": Quels sont les autres types de données non structurées?
  "30": Votre système a besoin de données d'entrée d'un Internet- ou périphérique connecté téléphonie? (Par exemple un capteur, drone)
  "31": Votre système utilise-t-il la vision artificielle sans contact pour la reconnaissance biométrique (par exemple, visage, démarche, etc)?
  "31.1": Votre système fonctionne-t-il avec des paramètres acceptables pour toutes les couleurs de peau définies par l'échelle de type de peau Fitzpatrick ou une mesure similaire?
  "31.2": Le cas échéant, avez-vous testé pour vous assurer que le système fonctionne avec des paramètres acceptables pour les personnes ayant un handicap qui peuvent être indûment désavantagées par le composant de vision industrielle? (Par exemple, s'assurer qu'un outil d'analyse de la démarche ne désavantage pas indûment une personne qui utilise un fauteuil roulant)
  "32": Des stratégies appropriées ont-elles été élaborées pour gérer le risque que des données obsolètes ou non fiables soient utilisées pour prendre une décision automatisée?
  "32.1": Si vous le souhaitez, nous fournir plus de détails sur ces stratégies
  "33": La portée du système est-elle clairement reflétée dans la documentation du projet?
  "34": Le système est-il en interface avec d'autres systèmes informatiques?
  "34.1": Lorsque vous êtes en interface avec d'autres systèmes, avez-vous clairement identifié les processus qui se produisent entre les systèmes?
  "35": Le système permet-il à un humain d’outrepasser les décisions du système?
  "36": Le système peut-il outrepasser des décisions humaines?
  "36.1": Est-ce nécessaire par la législation ou la réglementation?
  "37": Le système peut-il outrepasser d'autres systèmes de décision automatisés?
  "38": Avez-vous des processus en place pour enregistrer les instances ou un outrepassage à eu lieu?
  "39": Avez-vous développé des processus de vérification pour tester les résultats non intentionnels?
  "39.1": Décrire les processus de vérification que vous utilisez ou d'un plan sur l'utilisation
  "40": Le système peut-il fournir une piste d'audit qui enregistre des recommandations ou des décisions?
  "40.1": La piste d'audit indique-t-elle clairement tous les points de décision pris par le système?
  "40.2": Avez-vous inclus des processus de contrôle des modifications dans la piste d'audit pour enregistrer les modifications apportées au fonctionnement ou aux performances du système?
  "40.3": La piste de vérification montre-t-elle qui est un décideur autorisé?
  "41": Le système peut produire des motifs de ses décisions ou recommandations en cas de besoin?
  "42": L'équipe de conception a-t-elle consulté les experts suivants au sein de leur organisation
  "42a": Communications
  "42b": Gestion des données et des informations
  "42c": Politique
  "42d": Ressources humaines
  "42e": Informatique / Cybersécurité
  "42f": Légal
  "42g": Service de livraison
  "42h": Protection des renseignements personnels
  "42.1": Un avis formel a-t-il été émis? 
  "42.2": Les domaines pertinents de la législation ont-ils été identifiés pendant la phase de cadrage?
  "43": Avez-vous développé des indicateurs de performance clés et des benchmarks pour mesurer et améliorer la performance du système?
  "44": Mesurez-vous spécifiquement les impacts (par exemple, sociaux, économiques, environnementaux) qui peuvent résulter du système?
  "44.1": Expliquez comment vous mesurez ces impacts
  "45": Avez-vous présenté un cas conceptuel à le Comité d’examen de l’architecture intégrée du gouvernement du Canada?
  "46": Avez-vous effectué une évaluation et une autorisation de sécurité? 
  "46.1": Est-ce que les pleins pouvoirs accordée en vertu de la SA & A?
  "47": Y a-t-il un processus en place pour accorder, surveiller et révoquer l'autorisation d'accès?
  "48": Le système utilisé par une autre partie de l'organisation que ceux qui l'ont développé?
  "49": Avez-vous élaboré des programmes de formation ou de la documentation pour vous assurer que le système est utilisé efficacement et correctement?
  "49.1": Avez-vous des moyens pour faire en sorte que les besoins de formation sont respectées?
  "50": Avez-vous développé un plan de communication externe?
  "51": Avez-vous élaboré un plan de communication interne pour aborder les changements potentiels aux pratiques de travail des agents?
  "52": Avez-vous un mécanisme pour capturer les commentaires des utilisateurs du système?
  "53": Avez-vous un processus de recours prévu ou établi pour les clients qui souhaitent contester la décision?
points:
  "7a":
    "yes": [ 0, 0, 0, 1.25, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "7b":
    "yes": [ 0, 0, 0, 1.5, 1.05 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "7c":
    "yes": [ 0, 0, 0, 5, 1.25 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "7.1":
    "yes": [ 0, 0, 0, 2.5, 1.5 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "7.1.2":
    "yes": [ 0, 0, 0, 15, 1.1 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "7.1.3":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 1.05, 2, 0 ]
  "8":
    "one-time": [ 0, 0, 0, 0, 0 ]
    "limited-duration": [ 0, 0, 1.01, 0, 0 ]
    "indefinitely": [ 0, 0, 1.05, 1.01, 1.01 ]
  "9":
    "yes": [ 30, 3, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "10":
    "yes": [ 50, 5, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "10.1":
    "yes": [ 100, 3, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "11":
    "yes": [ 50, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "12":
    "yes": [ 3, 1, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "12.1":
    "none": [ 0, 1, 0, 0, 0 ]
    "protected": [ 0, 2, 0, 0, 0 ]
    "protected-a": [ 0, 3, 0, 0, 0 ]
    "protected-b": [ 0, 4, 0, 0, 0 ]
    "protected-c": [ 0, 20, 0, 0, 0 ]
    "classified": [ 0, 2, 0, 0, 0 ]
    "confidential": [ 0, 3, 0, 0, 0 ]
    "secret": [ 0, 4, 0, 0, 0 ]
    "top-secret": [ 0, 20, 0, 0, 0 ]
  "13":
    "yes": [ 5, 2, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "13.1":
    "yes": [ 5, 2, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "13.1.1":
    "yes": [ 15, 0, 0, 1.02, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "13.2":
    "yes": [ 5, 1, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "13.2.1":
    "yes": [ 4, 12, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "13.3":
    "yes": [ 10, 2, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "14":
    "yes": [ 2, 2, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "14.1":
    "yes": [ 8, 2, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "14.1.1":
    "yes": [ 35, 10, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "14.2":
    "yes": [ 4, 2, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "14.3":
    "yes": [ 20, 2, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "15":
    "yes": [ 25, 25, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "16":
    "yes": [ 8, 8, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "17":
    "yes": [ 20, 8, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "18":
    "yes": [ 1, 6, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "19a":
    "yes": [ 0, 0, 0, -0.4, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "19b":
    "yes": [ 0, 0, 0, -0.2, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "19c":
    "yes": [ 0, 0, 0, -0.2, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "19d":
    "yes": [ 0, 0, 0, -0.05, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "19e":
    "yes": [ 0, 0, 0, -0.1, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "19f":
    "yes": [ 0, 0, 0, -0.02, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "19g":
    "yes": [ 0, 0, 0, -0.02, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "19h":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "20":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
    "unsure": [ 0, 0, 0, 1.02, 0 ]
  "20.1":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "21a":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "21b":
    "yes": [ 0, 0, 1.01, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "21c":
    "yes": [ 0, 0, 1.02, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "21d":
    "yes": [ 0, 0, 1.02, 1.02, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "21e":
    "yes": [ 0, 0, 1.05, 1.02, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "22a":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "22b":
    "yes": [ 0, 0, 1.01, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "22c":
    "yes": [ 0, 0, 1.02, 0, 1.02 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "22d":
    "yes": [ 0, 0, 1.02, 1.02, 1.02 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "22e":
    "yes": [ 0, 0, 1.05, 1.02, 1.02 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "23":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 1.05, 0 ]
  "23.1":
    "yes": [ 0, 0, 0, -0.5, 0 ]
    "no": [ 0, 0, 0, 1.5, 0 ]
    "unsure": [ 0, 0, 0, 1.05, 0 ]
  "24":
    "yes": [ 0, 0, -0.05, -0.05, 0 ]
    "no": [ 0, 0, 2.5, 1.2, 0 ]
  "25":
    "yes": [ 0, 0, -0.05, 0, 0 ]
    "no": [ 0, 0, 1.15, 0, 0 ]
    "na": [ 0, 0, 0, 0, 0 ]
  "25.1":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
    "na": [ 0, 0, 0, 0, 0 ]
  "26":
    "yes": [ 0, 0, 2.5, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "26.1":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "27a":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 1.1, 0 ]
  "27b":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 1.1, 0 ]
  "27c":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 1.5, 0 ]
  "27d":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 1.1, 0 ]
  "28":
    "protected": [ 0, 0, 0, 0, 0 ]
    "protected-a": [ 0, 0, 0, 0, 1.05 ]
    "protected-b": [ 0, 0, 0, 0, 1.1 ]
    "protected-c": [ 0, 0, 0, 0, 1.15 ]
    "classified": [ 0, 0, 0, 0, 1.02 ]
    "confidential": [ 0, 0, 0, 0, 1.05 ]
    "secret": [ 0, 0, 0, 0, 1.1 ]
    "top-secret": [ 0, 0, 0, 0, 1.15 ]
  "29":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
    "unsure": [ 0, 0, 1.05, 1.02, 0 ]
  "29.1a":
    "yes": [ 0, 0, 1.02, 0, 1.02 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "29.1b":
    "yes": [ 0, 0, 1.02, 0, 1.1 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "29.1c":
    "yes": [ 0, 0, 1.02, 0, 1.2 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "29.1d":
    "yes": [ 0, 0, 1.02, 0, 1.2 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "29.1e":
    "yes": [ 0, 0, 1.02, 0, 2 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "29.1f":
    "yes": [ 0, 0, 1.02, 0, 1.15 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "29.1g":
    "yes": [ 0, 0, 1.02, 0, 1.15 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "29.1h":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "30":
    "yes": [ 0, 0, 1.5, 0, 1.5 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "31":
    "yes": [ 0, 0, 0, 0, 1.02 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "31.1":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 1.05, 0 ]
    "na": [ 0, 0, 0, 0, 0 ]
  "31.2":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 1.05, 0 ]
    "na": [ 0, 0, 0, 0, 0 ]
  "32":
    "yes": [ 0, 0, -0.05, -0.05, 0 ]
    "no": [ 0, 0, 1.15, 1.05, 0 ]
  "33":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 1.02, 0 ]
  "34":
    "yes": [ 0, 0, 0, 0, 1.1 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "34.1":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 1.1, 0, 0 ]
  "35":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 2, 0 ]
  "36":
    "yes": [ 0, 0, 0, 2.5, 1.5 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "36.1":
    "yes": [ 0, 0, 0, -2.5, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "37":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "38":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 3, 0 ]
  "39":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 12, 0 ]
  "40":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 1.05, 0 ]
  "40.1":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 1.02, 0 ]
  "40.2":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 1.05, 1.05, 0 ]
  "40.3":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 1.02, 0 ]
  "41":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 1.8, 0 ]
  "42a":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 1.01, 0 ]
  "42b":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 1.05, 0, 0 ]
  "42c":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 1.02, 0, 0 ]
  "42d":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "42e":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 1.02, 0, 0 ]
  "42f":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 1.1, 0 ]
  "42g":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "42h":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 1.01, 1.02, 0 ]
  "42.1":
    "yes": [ 0, 0, 0, -0.05, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "42.2":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 1.05, 0 ]
  "43":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 1.05, 1.05, 0 ]
  "44":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 1.25, 0 ]
  "45":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 1.05, 0, 0 ]
    "na": [ 0, 0, 0, 0, 0 ]
  "46":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
    "na": [ 0, 0, 0, 0, 0 ]
  "46.1":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 1.25, 0, 0 ]
  "47":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 1.05, 0, 0 ]
  "48":
    "yes": [ 0, 0, 0, 0, 1.1 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "49":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 1.1, 0 ]
  "49.1":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "50":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 1.02, 0 ]
  "51":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 5, 0, 0, 0 ]
  "52":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 1.02, 0, 1.05 ]
  "53":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 2, 0 ]
impactLevelThresholds: [500, 1000, 2000]
progressPercentThreshold: 1
---
{% assign dataVariable = site.playbookData[page.lang] %}{%
assign dataSource = site.data[dataVariable] %}
<section>

<div class="wb-inview" data-inview="progress-overlay">
<!-- markdownlint-disable MD026 -->

## Qu'est-ce que l'évaluation d'impact algorithmique?

<!-- markdownlint-enable MD026 -->
</div>

L'EIA est un questionnaire conçu pour vous aider à évaluer et à atténuer les risques associés au déploiement d'un système de prise de décision automatisé. L'EIA permet également d'identifier le niveau d'impact de votre système de décision automatisé en vertu de la directive proposée sur la prise de décision automatisée. Les questions portent sur vos processus métier, vos données et vos décisions de conception de système.

</section>

<section>
<!-- markdownlint-disable MD026 -->

## Comment ça marche?

<!-- markdownlint-enable MD026 -->

Ce questionnaire vous demande environ 57 questions liées à vos processus métier, à vos données et à vos décisions en matière de système. Les résultats démontreront votre niveau d'impact ainsi qu'un lien vous permettant de connaître vos exigences en vertu de la directive. **Le questionnaire prend 35 minutes à compléter.**

</section>

<section>
<!-- markdownlint-disable MD026 -->

## Où puis-je savoir pourquoi mon système a été évalué à un certain niveau?

<!-- markdownlint-enable MD026 -->

Cliquez sur «&#160;Résultats détaillés&#160;» ci-dessous et pour une feuille de notes détaillée montrant exactement où vous avez recueilli des risques. Vous pouvez télécharger vos résultats.

</section>

<section>
<!-- markdownlint-disable MD026 -->

## Puis-je sauvegarder mes réponses et remplir le questionnaire plus tard?

<!-- markdownlint-enable MD026 -->

Oui. Vous pouvez enregistrer votre place à tout momemnt en cliquant sur «&#160;Enregistrer la progression dans un fichier&#160;». Il téléchargera un miniscule fichier JSON, que vous pourrez utiliser pour recharger vos résultats lorsque vous êtes prêt à continuer. Nous ne sauvegardons aucune de vos informations.

</section>

<section>
<!-- markdownlint-disable MD026 -->

## Est-ce que vous sauvegarder mes réponses?

<!-- markdownlint-enable MD026 -->

Non, nous ne stockons pas vos réponses. N'hésitez pas à utiliser cet outil autant de fois que nécessaire pendant le développement de votre système.

</section>

{% include views-vues/automated-decision-automatise/aia-questionnaire-eia.html %}

{% include views-vues/automated-decision-automatise/aia-results-resultats-eia.html %}
