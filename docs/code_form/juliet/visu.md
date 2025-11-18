---
title: "Utiliser les noeuds de visualisation Juliet visu"
sidebar_position: 10
---

## Prérequis

Pour pouvoir lancer des sessions de visualisation sur Juliet, vous devez avoir demandé un compte sur Juliet visu (la case doit être cochée dans l'onglet ). Vous devez également faire partie d'un projet ayant demandé des heures de visualisation sur Juliet.

## Lancement d'une machine virtuelle de visualisation

Pour lancer une machine virtuelle, chaque utilisateur doit lancer la commande 

```
visu
```

Vous ouvrez ainsi le système de réservation. Vous choisissez ensuite :

- Le type de machine virtuelle 
- Les ressources (CPUs, RAM, Mémoire GPU)
- Durée de la session
- Date de démarrage (immédiat ou retardé)
- L'Account, le projet auquel décompter les heures d'utilisation de la CM
- L'email de l'utilisateur, auquel les codes d'accès de la VM seront envoyés.

Une fois ces informations remplies, la soumission à slurm est automatique 


### Résumé visuel

![Sommaire animé des étapes](/img/juliet/connexion_visu.gif)


## Connexion à la machine virtuelle

Pour accéder à la machine virtuelle, ouvrez un navigateur web à l'adresse

```
https://use.univ-reims.fr/
```

et cliquez sur `Join`.

Pour accéder à votre machine entrez ensuite

L'adresse e-mail de la forme `visuXXXX@univ-reims.fr` et le mot de passe  **qui vous ont été envoyés par mail** ainsi qu'un nom d'affichage

:::caution

Il ne s'agit pas de votre propre e-mail ni du mot de passe d'accès au portail MesoNET mais bien d'identifiants spécifiques qui vous ont été envoyés par mail.

:::