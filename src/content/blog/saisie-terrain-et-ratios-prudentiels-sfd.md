---
title: "SFD : pourquoi la saisie terrain décide de vos ratios"
description: Vos ratios prudentiels sont bâtis sur des écritures faites au pas d'une porte. Si elles sont reconstituées le soir, le ratio est une estimation avec une virgule.
date: 2026-10-01
author: Vasool Team
tags: [Collections, Guides]
keywords: logiciel de gestion de microfinance, logiciel sfd, ratios prudentiels sfd, portefeuille à risque microfinance, collecte terrain microfinance
---

Un SFD répond de ses ratios prudentiels, de son référentiel comptable sectoriel et de son portefeuille à risque. Ce sont des obligations de siège, produites par des états de siège, discutées lors de réunions de siège.

Or aucun de ces chiffres ne naît au siège. Chacun est assemblé à partir d'écritures qu'un agent a faites au pas d'une porte, souvent plusieurs jours avant que quiconque au bureau ne les voie.

C'est la raison pour laquelle le premier critère d'un logiciel de gestion de microfinance n'est pas la richesse de ses états, mais la fidélité de sa saisie.

## Une écriture reconstituée est une estimation

Considérez le trajet réel d'un versement. Un membre remet 5 000 francs à un agent sur un marché à onze heures. L'agent note un chiffre sur une fiche. Le soir, chez lui, il ressaisit sa journée. Le lendemain, l'agence intègre les données. En fin de mois, le portefeuille à risque est calculé.

À chaque étape, la même question : **d'où vient ce chiffre ?** Si la réponse est « de la mémoire de l'agent, six heures après », alors le ratio bâti dessus n'est pas faux par malveillance. Il est simplement approximatif, avec une précision décimale qui n'a jamais existé.

> Un portefeuille à risque calculé sur des saisies du soir n'est pas un indicateur de risque. C'est une estimation présentée avec deux chiffres après la virgule.

Une écriture faite devant le membre ne demande aucune reconstitution. Elle porte le montant réel, l'heure réelle, l'identité de l'agent et le canal de paiement. Le membre repart avec un reçu, le siège voit l'écriture dans la seconde, et les deux enregistrements concordent parce qu'ils sont le même.

## Ce qu'il faut saisir au pas de la porte

Quatre éléments, et ils doivent tous être obligatoires à la saisie plutôt que renseignés plus tard :

1. **Le membre**, reconnu et confirmé à l'écran avant enregistrement — pas un nom ressaisi de mémoire.
2. **Le montant**, exactement tel qu'il est remis, sans arrondi implicite.
3. **Le canal** — espèces, Orange Money, MTN MoMo, Wave, Moov Money ou virement — avec sa **référence de transaction** lorsqu'il s'agit d'un paiement mobile.
4. **L'agent et la tournée**, rattachés automatiquement plutôt que déclarés.

La référence de transaction mérite une mention particulière. Un membre qui paie par mobile conserve un reçu sur son téléphone. Sans référence dans votre écriture, le rapprochement compare des totaux — et des totaux concordent pour de mauvaises raisons en permanence. Avec la référence, le rapprochement compare des transactions, et un écart se désigne lui-même.

## Le frein réel : la vitesse

Un agent avec une sacoche dans une main et une file d'attente derrière lui ne remplira pas un formulaire étroit en plein soleil. Il reportera la saisie au soir — et le soir est précisément l'endroit où elle se perd.

C'est pourquoi la dictée compte davantage sur le terrain qu'au guichet : l'agent énonce le versement, le système reconnaît le membre et affiche la correspondance pour confirmation, et la tournée continue. La confirmation à l'écran est le contrôle ; elle traite le seul risque réel d'un versement de routine, qui est d'avoir mal entendu.

## L'argent appartient aux membres

Dans une institution commerciale, une erreur est un problème interne. Dans un SFD, une erreur porte sur l'épargne d'un membre. C'est une différence de nature, pas de degré, et elle décide de deux choses.

**Première conséquence : épargne et crédit ne se compensent jamais.** Un membre peut épargner et emprunter en même temps. Son épargne est une dette que vous lui devez ; son capital restant dû est ce qu'il vous doit. Deux enregistrements distincts, deux historiques distincts. Un système qui compense les deux pour afficher un solde net fait disparaître l'information la plus importante de la relation.

**Seconde conséquence : les modifications conséquentes doivent porter un nom.** Un rééchelonnement, une remise, une réécriture de taux, un passage en perte — chacune de ces opérations change ce qu'un membre doit ou détient. Elles sont rares et lourdes de conséquences, à l'inverse d'un versement qui est fréquent et anodin.

D'où la répartition qui fonctionne :

| Opération | Fréquence | Risque | Traitement |
|---|---|---|---|
| Versement de routine | Des dizaines par jour | Mauvaise écoute | Enregistré après confirmation |
| Rééchelonnement | Rare | Jugement | Retenu pour validation |
| Réécriture d'un taux | Rare | Jugement ou intention | Retenu pour validation |
| Nouveau membre saisi sur le terrain | Rare | Absence de regard du siège | Retenu pour validation |

Rapide là où le volume se trouve, lent là où la conséquence se trouve. C'est l'objet d'une [validation à double regard](/voice-approval-workflow), paramétrée par rôle et par ressource pour éviter d'avoir à choisir entre ralentir tous les agents et ne rien contrôler.

## L'arrêté quotidien par agent

Un écart constaté en fin de mois ne désigne personne. Un écart constaté le soir même désigne une personne, une tournée et une journée.

L'arrêté doit donc être **par agent** et non globalisé, **quotidien** et non hebdomadaire, et comparé à une collecte **attendue** issue des échéanciers — pas seulement au montant déclaré par l'agent. Associez-y une tournée planifiée, affectée et suivie par GPS, et l'arrêté du soir devient un rapprochement plutôt qu'une discussion.

L'objet n'est pas d'attraper des fraudeurs. C'est qu'un agent honnête à qui il manque 12 000 francs puisse en expliquer la raison le mardi soir, ce qu'il ne pourra plus faire le 31.

## Ce que le logiciel ne décide pas

Votre agrément, vos fonds propres, votre gouvernance, votre tarification, votre information à la clientèle et vos déclarations relèvent de la loi régionale et de votre supervision — la BCEAO au niveau régional, la structure ministérielle de suivi au niveau national. Aucun paramétrage ne crée une autorisation que vous n'avez pas.

Ce qu'un logiciel peut faire est plus étroit et reste décisif : enregistrer l'écriture là où elle se produit, la rattacher à une personne, tenir l'épargne séparée du crédit, et arrêter la tournée le jour même. Vos ratios cessent alors d'être des estimations et deviennent des mesures.

---

Si vous évaluez un [logiciel de gestion de microfinance](/logiciel-gestion-microfinance) aujourd'hui, posez une seule question avant toutes les autres : où et quand l'écriture est-elle créée ? Tout le reste en découle.
