---
title: "Ressources"
---

Chaque projet NOVA se voit attribuer un quota de ressources disponibles pour créer et modifier les machines virtuelles, et le réseau du projet.
Tout ce qui est effectué sur NOVA Openstack, peut se faire graphiquement via un [navigateur Web](/code_form/nova/fondamentaux/acceder_openstack) ou en ligne de commande via le [client Python Openstack](/code_form/nova/fondamentaux/installation_client).

![Vue_d_ensemble_ProjetNOVA](/img/nova/Nova_VueEnsemble.png)

Les principaux quotas de ressources portent sur :
* les instances : nombre de machines virtuelles autorisées,
* les  VCPUs (Virtual Central Processing Unit) : nombre total des processeurs virtuels qui pourront être utilisés dans les instances,
* la RAM : quantité totale de mémoire vive qui pourra être utilisées dans les instances,
* les adresses ip flottantes : nombre d'adresses ip publiques routables qui pourront être associées à des instances,
* les groupes de sécurité : nombre d'ensembles de règles de filtrage ip pour limiter les accès aux instances depuis le monde exterieur,
* les volumes : nombre de périphériques de stockage qui pourront être attachés à des instances,
* l'espace de stockage de volumes : quantité globale de stockage pour les volumes du projet.

Nous détaillons dans ce chapitre le fonctionnement des principales ressources.
