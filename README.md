Éditeur WYSIWYG - Rush Projet Groupe

Dans ce rush nous avons développé un éditeur WYSIWYG (What You See Is What You Get) sous la forme d’un module JavaScript.

L’objectif de cet éditeur est de permettre la création et la mise en forme de texte de manière visuelle, en générant automatiquement du code HTML structuré. Il fonctionne de manière similaire aux éditeurs WYSIWYG que l'on retrouve sur les forums en ligne et les plateformes de gestion de contenu.

Nous avons codé cet éditeur en JS en nous inspirant de solutions existantes comme CKEditor, TinyMCE ou Redactor.

Ce projet, dans sa version finale, sera compilé avec Babel.

Fonctionnalités :
-------------------------

L’éditeur permet aux utilisateurs de modifier du texte en direct. Les fonctionnalitées Bold et Italic sont disponibles ainsi que le reverse.

Il est également possible de generer une barre d'outils a côté d'un element contenant l'id "textarea" et de le rendre editable.

Possibilité de choisir quels boutons afficher lors de l’appel du plugin.

Un nouveau paragraphe  est généré automatiquement lorsqu’on appuie sur "Entrée".

 # Sauvegarde et récupération du texte :

Le contenu est sauvegardé dans le localStorage.

Au rechargement de la page, l’éditeur restaure le dernier contenu enregistré.

Une alerte de fermeture s'affiche si l'utilisateur quitte la page sans sauvegarder.
