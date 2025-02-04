---
title: "Réserver des noeuds de calcul sur Juliet"
sidebar_position: 7
---

En cas de besoin de la machine à un moment donné, par exemple pour une séance de TP en formation, vous avez la possibilité de réserver un ou plusieurs noeuds de la machine Juliet. 

Lorsque la réservation est validée, seuls les membres de projets faisant partie de la réservation peuvent lancer un calcul sur un noeud réservé pendant la durée réservée.

## Faire une demande de réservation

Pour faire une demande de réservation, le gestionnaire d'un projet peut ouvrir [un ticket MesoNET](https://tickets.mesonet.fr) en spécifiant la catégorie `Juliet` contenant les informations suivantes.

```
- Nom du proje concerné:
- Nombre de noeuds requis
- Date de début de réservation
- Date de fin de réservation
```

:::caution

Les jobs peuvent durer jusqu'à 10 jours sur Juliet et les programmes déjà tournant au moment où la réservation est ajoutée et débordant sur le temps de réservation ne seront pas arrêtés. 

Par conséquent, nous vous recommandons de faire vos demandes de réservation au moins 12 jours à l'avance afin d'avoir la certitude de disposer de l'intégralité des ressources réservées. 

Les réservations faites plus tard seront traitées, mais sans garantie que vous disposerez de l'intégralité des ressources au moment souhaité.

:::
## Accéder à un noeud de calcul réservé

Le paramètre `--reservation=xxx` vous permettra d'utiliser les noeuds alloués à la réservation xxx. Il suffit d'ajouter ce paramètre à votre commande ou votre fichier sbatch.

