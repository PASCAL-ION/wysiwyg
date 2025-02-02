Éditeur WYSIWYG - Rush Projet Groupe

# Introduction

Bienvenue dans ce rush où nous avons développé un éditeur WYSIWYG (What You See Is What You Get) sous la forme d’un module JavaScript.

L’objectif de cet éditeur est de permettre la création et la mise en forme de texte de manière visuelle, en générant automatiquement du code HTML structuré. Il fonctionne de manière similaire aux éditeurs WYSIWYG que l'on retrouve sur les forums en ligne et les plateformes de gestion de contenu.

Nous avons conçu cet éditeur en nous inspirant de solutions existantes comme CKEditor, TinyMCE ou Redactor, tout en respectant les contraintes du projet en développant une solution entièrement codée en JavaScript moderne (ES6+), sans dépendance externe.

Ce projet a été réalisé en équipe de 4 personnes, et l'organisation et la collaboration étaient des critères essentiels. Chaque membre devait être capable de travailler sur toutes les parties du projet, garantissant une bonne compréhension globale.

Pour assurer une gestion efficace, nous avons utilisé GitHub pour la gestion des branches et des merges, ainsi qu'un outil de suivi des tâches (Trello) afin de répartir le travail efficacement.

# Restrictions et Contraintes:

Afin de garantir la qualité du projet et préparer aux projets futurs, certaines règles doivent être respectées.

 Obligations:
 -----------
 

Le projet doit être développé sous forme de module JavaScript.L'utilisation des fonctionnalités ES6+ (ECMAScript 2015 et versions ultérieures) est obligatoire. Un pré-processeur JavaScript (comme Babel) doit être utilisé. L'organisation en équipe est un critère d'évaluation avec une bonne gestion du versionnement et des tâches.

 Interdictions:
 -------------

 L’éditeur doit obligatoirement être présenté sous forme de module JavaScript (pas de script en dur dans le HTML). L’utilisation de document.execCommand est interdite, car cette méthode est dépréciée. L’utilisation d’outils externes non mentionnés dans le sujet est interdite.

Fonctionnalités demandées :
-------------------------

L’éditeur doit permettre aux utilisateurs de modifier du texte en direct et de générer du HTML structuré.

 # Affichage automatique d’une barre d’outils personnalisable :

La barre d'outils s’affiche près de chaque élément ayant l’id="textarea".

Possibilité de choisir quels boutons afficher lors de l’appel du plugin.

# Mise en forme du texte :

Gras, Italique, Barré, Souligné.

Changement de couleur du texte.

Modification de la taille de police.

Ajout de liens cliquables.

# Gestion des sauts de ligne :

Un nouveau paragraphe  est généré automatiquement lorsqu’on appuie sur "Entrée".

# Annulation des styles appliqués :

Si un texte est déjà en gras, un second clic sur le bouton "Gras" doit retirer ce style.

Idem pour italique, souligné, barré, etc..

 # Sauvegarde et récupération du texte :

Le contenu doit être sauvegardé dans le localStorage.

Au rechargement de la page, l’éditeur doit restaurer le dernier contenu enregistré.

Une alerte de fermeture doit s'afficher si l'utilisateur quitte la page sans sauvegarder.

Personnalisation de l’interface à l’appel du plugin.
