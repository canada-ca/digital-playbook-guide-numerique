---
layout: default
title: Évaluation d'impact algorithmique (draft)
lang: fr
altLang: en
altLangPage: algorithmic-impact-assessment
collectionDirectory: views-vues/automated-decision-automatise
aboutRespondantSection: À propos du répondant (facultatif)
fieldName: Nom
fieldDepartment: Ministère
selectDepartment: Sélectionnez une ministère
fieldBranch: Direction générale
aboutDecisionSection: A propos de la décision
dataBusinessProcessSection: Données et processus métier
systemFunctionalitySection: Fonctionnalité du système
organizationalReadinessSection: Préparation organisationnelle
automatedDecisionViewTitle: Comment dois-je mettre en place un système de décision automatisé? (ébauche)
automatedDecisionViewFilename: decision-automatise
aiaCriteria: 
  - "Impact sur les individus et les entités"
  - "Impact sur les institutions gouvernementales"
  - "Gestion de données"
  - "Équité procédurale"
  - "Complexité"
questions:
  "1": Quelles parties du processus décisionnel seront automatisées par ce système? (Cochez toutes les cases qui s'appliquent)
  "1a": Classer les cas en fontion du rique et de la priorité
  "1b": Déterminer les cas pour l'enquête ou l'examen humain
  "1c": Fournir des recommandations concernant l'approbation d'une demande
  "1d": Rendre la décision administrative exhaustive
  "1.1": La recommandation ou la décision prise par le système implique-t-elle un pouvoir discrétionnaire?
  "1.1.1": La décision est-elle purement discrétionnaire? (par exemple, une révision pour motifs de compassion)
  "1.2": Tous les points de décision impliquant l'exercice du pouvoir discrétionnaire ou du jugement ont-ils été clairement identifiés?
  "2": "Combien de temps le système est-il censé fonctionner? (Choisissez-en un)"
  "2-one-time": Une fois seulement
  "2-duration-project": Pour la durée d'un projet
  "2-indefinitely": Indéfiniment
  "3": Ce système automatisé peut-il entraîner la restriction du déplacement d'une personne vers, hors du Canada ou à l'intérieur du Canada?
  "4": Ce système peut-il inférer ou prévoir une activité criminelle potentielle?
  "5": Ce système peut-il permettre d'accorder ou de restreindre l'accès à un local ou à un réseau?
  "5.1": Quelle est la classification de la prémisse? (Choisissez-en un)
  "6": Ce système fournit-il des fonds à un individu, une entreprise ou une communauté?
  "6.1": Ce financement est-il destiné à un programme de soutien social ou économique?
  "6.1.1": Si le financement devait être refusé, pourrait-il laisser le client dans une situation économique précaire? (par exemple, pourrait rendre une personne sans abri ou une entreprise à fermer)
  "6.2": Le système émet-il des paiements de transfert?
  "6.2.1": Est-ce que cette subvention, contribution ou paiement de transfert dépasse 5 000 000 $?
  "7": Ce système entraîne-t-il la délivrance d'une amende, d'une sanction administrative pécuniaire ou d'un avis de recouvrement de créances?
  "8": Ce système entraîne-t-il la délivrance d'un permis, d'une licence, d'un brevet ou d'une marque?
  "8.1": Cela implique-t-il la collecte, le transport, le stockage, l’achat ou la vente d’un bien ou d’une substance réglementé?
  "8.1.1": Est-ce que ce produit ou cette substance réglementée est dangereux, comme une arme à feu, une toxine ou un produit dangereux?
  "8.2": Est-ce un permis de construction ou d'environnement?
  "8.3": Est-ce un brevet ou une marque?
  "9": Ce système confère-t-il un statut juridique qui est par ailleurs requis pour recevoir un avantage ou un service (par exemple, le statut d'Indien, le statut d'ancien combattant)?
  "10": Ce système implique-t-il la distribution de ressources humaines ou de matériel dans la gestion des urgences?
  "11": Quels sont les principaux motifs pour l'automatisation du processus décisionnel administratif? (Cochez toutes les cases)
  "11a": Addresser d travail arrièré
  "11b": Améliorer la qualité globale des décisions
  "11c": Réduction des coûts de transaction d'un programme existant
  "11d": Le système exécute des tâches que les humains ne pourraient accomplir dans un délai raisonnable
  "11e": Améliorer la prestation de service à la clientèle
  "11f": Utiliser des approches innovantes
  "11g": Aucune de ces réponses
  "12": Votre système prendra-t-il des décisions concernant spécifiquement les peuples ou territoires autochtones?
  "12.1": Avez-vous engagé des consultations avec des organisations autochtones pertinentes dans la conception du système?
  "13": Qui a collecté les données utilisées pour la formation du système? (Cochez toutes les cases qui s’appliquent)
  "13a": Votre institution
  "13b": Une autre institution fédérale
  "13c": Un autre niveau de gouvernement
  "13d": Un gouvernement étranger
  "13e": Une tierce partie non gouvernementale
  "14": Qui recueille les données d'entrée utilisées par le système? (Cochez toutes les cases qui s’appliquent)
  "14a": Votre institution
  "14b": Une autre institution fédérale
  "14c": Un autre niveau de gouvernement
  "14d": Un gouvernement étranger
  "14e": Une tierce partie non gouvernementale
  "15": Avez-vous consulté des groupes de parties prenantes pertinents représentant les personnes susceptibles d’être touchées par la décision?
  "16": Existe-t-il un processus pour documenter comment les problèmes de qualité des données ont été résolus lors du processus de conception?
  "17-part1": Avez-vous entrepris une
  "17-link-url": "https://www.swc-cfc.gc.ca/gba-acs/approach-approche-fr.html"
  "17-link-text": analyse comparative entre les sexes en plus
  "17-part2": des données de formation?
  "17.1": Sur la base des résultats de l’ACS+, les stratégies d’atténuation ont-elles été prises?
  "18": Le système de décision automatisé utilise-t-il les informations personnelles comme données d'entrée?
  "18.1": Le programme comporte-t-il une évaluation des facteurs relatifs à la vie privée?
  "19": Avez-vous attribué des responsabilités pour la conception, le développement, la maintenance et l'amélioration du système?
  "20": Quelle est la classification de sécurité des données d'entrée utilisées par le système? (Sélectionnez-en un)
  "21": Avez-vous un processus en place pour tester et vérifier les règles?
  "22": Le système nécessite-t-il l'analyse de données non structurées pour rendre une recommandation ou une décision?
  "23": La portée du système est-elle clairement reflétée dans la documentation du projet?
  "24": Des stratégies appropriées ont-elles été élaborées pour gérer le risque que des données obsolètes ou non fiables soient utilisées pour prendre une décision automatisée?
  "25": Votre système utilise-t-il la vision artificielle sans contact pour la reconnaissance biométrique (par exemple, visage, démarche, etc)?
  "25.1": Votre système fonctionne-t-il avec des paramètres acceptables pour toutes les couleurs de peau définies par l'échelle de type de peau Fitzpatrick ou une mesure similaire?
  "25.2": Le cas échéant, avez-vous testé pour vous assurer que le système fonctionne avec des paramètres acceptables pour les personnes ayant un handicap qui peuvent être indûment désavantagées par le composant de vision industrielle? (Par exemple, s'assurer qu'un outil d'analyse de la démarche ne désavantage pas indûment une personne qui utilise un fauteuil roulant)
  "26": Le système est-il en interface avec d'autres systèmes informatiques?
  "26.1": Lorsque vous êtes en interface avec d'autres systèmes, avez-vous clairement identifié les processus qui se produisent entre les systèmes?
  "27": Laquelle des informations suivantes sur la fonctionnalité du système prévoyez-vous de rendre accessible au public? (Cochez toutes les cases qui s’appliquent).
  "27a": Formation des sources de données
  "27b": Arbres de décision
  "27c": Les seuils de confiance
  "27d": Modèles prédéfinis
  "27e": Critères
  "27f": Structures de classification
  "27g": Aucune de ces réponses
  "28": Le système permet-il à un humain d’outrepasser les décisions du système?
  "29": Le système peut-il outrepasser des décisions humaines?
  "30": Le système peut-il outrepasser d'autres systèmes de décision automatisés?
  "31": Avez-vous des processus en place pour enregistrer les instances ou un outrepassage à eu lieu?
  "32": Avez-vous développé des processus de vérification pour tester les résultats non intentionnels?
  "33": Le système peut-il fournir une piste d'audit qui enregistre des recommandations ou des décisions?
  "33.1": La piste d'audit indique-t-elle clairement tous les points de décision pris par le système?
  "33.2": Avez-vous inclus des processus de contrôle des modifications dans la piste d'audit pour enregistrer les modifications apportées au fonctionnement ou aux performances du système?
  "33.3": La piste de vérification montre-t-elle qui est un décideur autorisé?
  "34": Le système est-il capable d'incorporer des recommandations ou des décisions dans une déclaration, des raisons ou d'autres avis écrits, le cas échéant?
  "35": L'équipe de conception a-t-elle consulté les experts suivants au sein de leur organisation
  "35a": Communications
  "35b": Gestion des données et des informations
  "35c": Architecture d'entreprise
  "35d": Ressources humaines
  "35e": Informatique / Cybersécurité
  "35f": Légal
  "35g": Service de livraison
  "35h": Protection des renseignements personnels
  "35.1": Un avis formel a-t-il été émis? 
  "35.2": Les domaines pertinents de la législation ont-ils été identifiés pendant la phase de cadrage?
  "36": Avez-vous développé des indicateurs de performance clés et des benchmarks pour mesurer et améliorer la performance du système?
  "36.1": Mesurez-vous spécifiquement les impacts (par exemple, sociaux, économiques, environnementaux) qui peuvent résulter du système?
  "37": Avez-vous présenté un cas conceptuel à le Comité d’examen de l’architecture intégrée du gouvernement du Canada?
  "38": Avez-vous effectué une évaluation et une autorisation de sécurité? 
  "39": Y a-t-il un processus en place pour surveiller et accorder l'autorisation d'accès?
  "40": Le système est-il utilisé par une partie différente de l'organisation que ceux qui l'ont développé?
  "41": Avez-vous élaboré des programmes de formation ou de la documentation pour vous assurer que le système est utilisé efficacement et correctement?
  "41.1": Avez-vous les moyens de vous assurer que les exigences en matière de formation sont respectées?
  "42": Si le système est destiné à entreprendre des tâches actuellement effectuées par du personnel humain, avez-vous engagé les ressources humaines de votre département?
  "43": Avez-vous développé un plan de communication externe?
  "44": Avez-vous élaboré un plan de communication interne pour aborder les changements potentiels aux pratiques de travail des agents?
  "45": Avez-vous un mécanisme pour capturer les commentaires des utilisateurs du système?
  "46": Avez-vous un processus de recours prévu ou établi pour les clients qui souhaitent contester la décision?
points:
  "1a":
    "yes": [ 1, 1, 0, 1, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "1b":
    "yes": [ 3, 2, 0, 2, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "1c":
    "yes": [ 5, 2, 0, 3, 1 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "1d":
    "yes": [ 7, 3, 0, 4, 2 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "1.1":
    "yes": [ 4, 0, 0, 8, 3 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "1.1.1":
    "yes": [ 33, 0, 0, 7, 4 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "1.2":
    "yes": [ -2, 0, 0, -2, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "2":
    "one-time": [ 0, -5, 0, 0, 0 ]
    "duration-project": [ 0, 0, 0, 0, 0 ]
    "indefinitely": [ 5, 0, 0, 0, 0 ]
  "3":
    "yes": [ 25, 3, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "4":
    "yes": [ 30, 5, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "5":
    "yes": [ 1, 1, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "5.1":
    "none": [ 0, 0, 0, 0, 0 ]
    "protected": [ 0, 1, 0, 0, 0 ]
    "protected-a": [ 0, 3, 0, 0, 0 ]
    "protected-b": [ 0, 4, 0, 0, 0 ]
    "protected-c": [ 0, 5, 0, 0, 0 ]
    "classified": [ 0, 2, 0, 0, 0 ]
    "confidential": [ 0, 3, 0, 0, 0 ]
    "secret": [ 0, 4, 0, 0, 0 ]
    "top-secret": [ 0, 5, 0, 0, 0 ]
  "6":
    "yes": [ 5, 2, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "6.1":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "6.1.1":
    "yes": [ 8, 0, 0, 2, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "6.2":
    "yes": [ 0, 1, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "6.2.1":
    "yes": [ 4, 2, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "7":
    "yes": [ 8, 2, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "8":
    "yes": [ 2, 2, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "8.1":
    "yes": [ 8, 2, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "8.1.1":
    "yes": [ 15, 9, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "8.2":
    "yes": [ 4, 2, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "8.3":
    "yes": [ 15, 2, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "9":
    "yes": [ 3, 2, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "10":
    "yes": [ 1, 6, 0, 0, 1 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "11a":
    "yes": [ -1, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "11b":
    "yes": [ -1, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "11c":
    "yes": [ 0, -1, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "11d":
    "yes": [ 0, -1, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "11e":
    "yes": [ -1, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "11f":
    "yes": [ 0, -1, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "11g":
    "yes": [ 0, 1, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "12":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "12.1":
    "yes": [ -1, 0, 0, 0, 0 ]
    "no": [ 3, 1, 0, 0, 0 ]
  "13a":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "13b":
    "yes": [ 0, 0, 1, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "13c":
    "yes": [ 0, 0, 2, 1, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "13d":
    "yes": [ 0, 0, 2, 2, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "13e":
    "yes": [ 0, 0, 3, 2, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "14a":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "14b":
    "yes": [ 0, 0, 1, 0, 1 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "14c":
    "yes": [ 0, 0, 2, 1, 2 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "14d":
    "yes": [ 0, 0, 2, 2, 2 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "14e":
    "yes": [ 0, 0, 3, 2, 2 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "15":
    "yes": [ -2, 0, 0, 0, 0 ]
    "no": [ 5, 0, 0, 3, 0 ]
  "16":
    "yes": [ 0, 0, -1, -1, 0 ]
    "no": [ 0, 2, 7, 6, 0 ]
  "17":
    "yes": [ -1, 0, -1, 0, 0 ]
    "no": [ 2, 0, 4, 0, 0 ]
  "17.1":
    "yes": [ -1, 0, 0, 0, 0 ]
    "no": [ 1, 0, 0, 0, 0 ]
    "na": [ 0, 0, 0, 0, 0 ]
  "18":
    "yes": [ 0, 0, 4, 0, 1 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "18.1":
    "yes": [ 0, 0, -1, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "19":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 2, 0, 3, 1 ]
  "20":
    "protected": [ 0, 0, 0, 0, 0 ]
    "protected-a": [ 0, 0, 0, 0, 3 ]
    "protected-b": [ 0, 0, 0, 0, 4 ]
    "protected-c": [ 0, 0, 0, 0, 5 ]
    "classified": [ 0, 0, 0, 0, 2 ]
    "confidential": [ 0, 0, 0, 0, 3 ]
    "secret": [ 0, 0, 0, 0, 4 ]
    "top-secret": [ 0, 0, 0, 0, 5 ]
  "21":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 1, 1, 2, 0 ]
  "22":
    "yes": [ 0, 0, 2, 0, 3 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "23":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 1, 1, 2, 1 ]
  "24":
    "yes": [ 0, 0, -4, -3, 0 ]
    "no": [ 1, 1, 4, 3, 0 ]
  "25":
    "yes": [ 2, 0, 0, 0, 2 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "25.1":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 2, 0, 0, 0, 0 ]
  "25.2":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 2, 0, 0, 0, 0 ]
  "26":
    "yes": [ 0, 0, 0, 0, 2 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "26.1":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 3, 3, 0, 0 ]
  "27a":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "27b":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "27c":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "27d":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "27e":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "27f":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "27g":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "28":
    "yes": [ 0, -2, 0, -1, 1 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "29":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "30":
    "yes": [ 0, -1, 0, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "31":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 1, 2, 0 ]
  "32":
    "yes": [ 0, 0, 0, 2, 0 ]
    "no": [ 6, 0, 1, 12, 0 ]
  "33":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 1, 0, 3, 1 ]
  "33.1":
    "yes": [ 0, -1, 0, 0, 0 ]
    "no": [ 0, 0, 0, 2, 1 ]
  "33.2":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 1, 3, 1 ]
  "33.3":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 1, 0, 2, 0 ]
  "34":
    "yes": [ -2, -1, 0, -2, 1 ]
    "no": [ 0, 0, 0, 4, 0 ]
  "35a":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 1, 0, 0, 0 ]
  "35b":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 1, 2, 0, 0 ]
  "35c":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 1, 0, 0, 0 ]
  "35d":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 1, 0, 0, 0 ]
  "35e":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 2, 0, 0, 0 ]
  "35f":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 2, 0, 4, 0 ]
  "35g":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 1, 0, 0, 0 ]
  "35h":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 1, 0, 0, 0 ]
  "35.1":
    "yes": [ 0, -1, 0, -1, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "35.2":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 1, 0, 2, 0 ]
  "36":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 1, 4, 1, 0, 0 ]
  "36.1":
    "yes": [ -3, 0, -1, -1, 1 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "37":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 1, 1, 0, 0 ]
  "38":
    "yes": [ 0, 0, -1, 0, 0 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "39":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 0, 2, 0, 0 ]
  "40":
    "yes": [ 0, 0, 0, 0, 1 ]
    "no": [ 0, 0, 0, 0, 0 ]
  "41":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 2, 0, 0, 0 ]
  "41.1":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 1, 0, 0, 0 ]
  "42":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 1, 0, 0, 0 ]
    "na": [ 0, 0, 0, 0, 0 ]
  "43":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 2, 0, 0, 0 ]
  "44":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 2, 0, 0, 0 ]
  "45":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 0, 2, 0, 0, 0 ]
  "46":
    "yes": [ 0, 0, 0, 0, 0 ]
    "no": [ 5, 0, 0, 6, 0 ]
criteriaThresholds:
  - [15, 40, 70]
  - [25, 50, 75]
  - [30, 60, 80]
  - [30, 60, 80]
  - [25, 50, 75]
multipliers:
  - []
  - []
  - [0.9, 1, 2]
  - [0.9, 1, 2]
  - [1, 1.15, 1.25, 1.5]
progressPercentThreshold: 1
---
{% assign dataVariable = site.playbookData[page.lang] %}{%
assign dataSource = site.data[dataVariable] %}
<section>

<div class="wb-inview" data-inview="progress-overlay">

## Introduction

</div>

L'objectif de l'évaluation d'impact algorithmique (ÉIA) est de développer un cadre qui aidera les institutions à mieux comprendre et atténuer les risques associés aux systèmes décisionnels automatisés.

En élaborant l'ÉIA, nous avons souligné trois objectifs clés&#160;:

- Accroître la capacité d'évaluer l'impact des systèmes de décision automatisés, y compris les enjeux juridiques et éthiques;
- Atténuer les risques asociés aux systèmes décisionnels automatisés en fournissant des exigences de governance, de suveillance et exigences en matière de rapports; et
- Fournir un mécanisme qui encourage l'ouverture, la transparence et la consultation publique en ce qui concerne le déploiement de systèmes de décision automatisés dans le secteur publique.

</section>

{% include views-vues/automated-decision-automatise/aia-questionnaire-eia.html %}

{% include views-vues/automated-decision-automatise/aia-results-resultats-eia.html %}
