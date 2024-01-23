---
title: "Intro"
sidebar_position: 1
---
# Gestion de travaux avec Slurm

Sur pratiquement tous les supercalculateurs les calculs s'effectuent par l'intermédiaire d'un gestionnaire de travaux qui gère une file d'attente contenant les travaux d'utilisateurs et les ressources dispponibles.

Le gestionnaire de travaux installé sur toutes les machines MesoNET est [Slurm](https://slurm.schedmd.com/documentation.html).

:::caution

Rappel : Il est strictement interdit de calculer directement sur les nœuds de login!

:::

Au lieu d'exécuter directement son programme, l'utilisateur soumet donc des scripts à Slurm.
Ces scripts spécifient les ressources demandées - quel(s) machine(s) pour combien de temps? - et les commandes à exécuter sur la (les) machine(s) allouée(s).

Il est donc très important que les ressources demandées soient adéquates pour le code à executer.

<!-- Tant que les ressources demandées ne sont pas disponibles, le script ne démarrera pas (demander trop est donc inutile, en plus d'être peu respectueux des autres utilisateurs) - et si les ressources sont insuffisantes, alors le code ne pourra pas s'exécuter correctement. -->

Slurm fournit une vingtaine de commandes, des fichiers de configuration et des gestionnaires de services.
Heureusement, il suffit de connaître un petit nombre de commandes et d'options pour la plupart des cas d'utilisation.
Ce document fournit éléments nécessaires pour soumettre des scripts Slurm adaptés à vos besoins et pour surveiller et gérer vos travaux.

:::info

Chaque machine MesoNET est configuré différemment. Il se peut que le comportement de certaines commandes décrites ici soit différent sur la machine que vous utilisez. L'objectif de ce document est de fournir une introduction générale à Slurm.

:::

Une *cheat sheet* slurm est disponible [ici (pdf, 2 pages)](https://slurm.schedmd.com/pdfs/summary.pdf).
