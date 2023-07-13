# comparateur-solutions-epargne

Consigne de l’exercice

Vous devez concevoir un petit outil de comparateur de solutions d’épargne avec un certain nombre
de produits bancaires retournés par une API.
Technologie attendue : JS + React

Notes :

- Pas besoin de base de données, l’API peut renvoyer des données fixes et fictives
- Les descriptions des produits peuvent être un simple Lorem Ipsum.

Caractéristiques attendues d’un produit bancaire :

- Un titre (ex : Livret A, LDD...)
- Un taux d’intérêt
- Un versement initial
- Un plafond
- L’objectif de l’utilité de l’épargne
- Une catégorie :
- La nature du placement : court terme, long terme

Les fonctionnalités attendues sont :

- D’afficher une page de comparatif d’offres, ergonomique et responsive, avec des filtres et
  des tris pratiques
  - Chaque produit peut être sélectionné, ce qui redirige vers la fiche dédiée du produit
    (ex : /nos-produits/livret-a)
  - Chaque produit peut être directement ajouté au panier
- Sur la fiche produit, il est possible :
  - D’afficher une modal de contact permettant d’envoyer un message de demande
    d’infos
  - D’ajouter un produit au panier
  - Si le produit est déjà dans le panier, cela doit apparaitre sur la page.
- Sur chaque page, le nom de l’utilisateur sera affiché dynamiquement
