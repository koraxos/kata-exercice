# Exercice

### Démarrage du projet

- se placer à la racine
- npm install
- Pour lancer l'interface, npm run start
- Pour lancer les tests npm run test

### Organisation du projet

Le projet possède une architecture basique.

Il y a un AppComponent / Module.

Dans le template de ce composant sont instanciés les 3 exercices.
Les types utilisés sont définis dans *src/app/model/Product.ts*

Les données pour chaque exerice sont définis dans *src/app/data* .
Ces données sont réutilisés pour les tests unitaires jouant aussi le rôle de mock pour les tests.

Il n'y pas de test unitaires dans les composants exerice 1 , 2 et 3.

Par contre il y a un service qui regroupe les fonctions pour le calcul des prix,
dans *src/app/service/compute-price.service.ts*

Dans le fichier *compute-price.service.spec.ts*
On trouve des tests unitaires qui représentent chaque exercice.

On a des tests sur le calcul du prix des produits,
ET des tests sur le calul de la taxes appliquées à chaque produit.

Comme je n'ai pas réussi à obtenir les bons chiffres,
je n'ai pas été jusqu'à testé le total.

### Commentaire

Bien que le tests passent, ils ne correspondent pas aux valeurs attendues.
Il y a des erreurs sur la méthode que j'utilise pour calculer le prix.

Les test sont configurés avec Jest.
TailWind est installé dans le projet.
