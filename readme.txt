Ce projet contient les étapes de mise en place d'un nouveau projet et son lien avec Git, ainsi que l'utilisation de Visual Studio Code et Git Bash pour la gestion du code.

Initialisation du repository Git : Pour démarrer le suivi de version avec Git, utilisez la commande suivante :

- git init

Récupération du dossier sur l'ordinateur et faire le lien avec le repository : Après avoir initialisé le repository Git, récupérez le dossier sur votre ordinateur et placez les fichiers du projet à l'intérieur. Vous pouvez ensuite faire le lien entre le dossier local et le repository distant à l'aide de la commande suivante :

- git remote add origin 'adresse_du_repository'

Utilisation de Visual Studio Code et Git Bash : Utilisez Visual Studio Code comme éditeur de code principal et Git Bash comme terminal pour exécuter les commandes Git.

Initialisation npm puis installation de Gulp / Création d'un fichier gulpfile.js : Utilisez la commande suivante pour initialiser le gestionnaire de paquets npm et installez Gulp :

- npm init
- npm install gulp --save-dev

Créez ensuite un fichier gulpfile.js à la racine du projet pour définir les tâches Gulp.

Création d'un fichier index.html : Créez un fichier index.html dans le répertoire principal du projet pour démarrer la construction de votre application web.

Création des dossiers js et css et des fichiers script.js et style.css : Créez les dossiers js et css, et placez les fichiers script.js et style.css respectivement dans ces dossiers. Vous pouvez les lier à votre index.html pour inclure les scripts JavaScript et les feuilles de style CSS dans votre page.

Création d'un dossier imgs pour les images minifiées : Créez un dossier imgs à la racine du projet pour y placer toutes les images minifiées que vous utiliserez dans votre application web.

Création d'un fichier minify pour les fichiers minifiés : Créez un fichier minify pour lister les fichiers minifiés nécessaires au bon fonctionnement de votre projet.

Pour ajouter tous les fichiers au suivi de Git :

- git add .

Pour créer un commit avec un message descriptif :

- git commit -m 'descriptif'

Pour pousser vos modifications vers le repository distant (branche "master") pour la première fois :

- git push -u origin master