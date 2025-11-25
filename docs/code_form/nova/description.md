---
title: "Description"
sidebar_position: 1
---

import novalogo from '/img/nova/Nova_Logo_Quadri.png?width=100px';

<img src={novalogo} alt="Nova Logo" style={{width: 100}} />

## OpenStack
OpenStack est un ensemble de logiciels open source qui offre une solution pour déployer et gérer des infrastructures de cloud computing. Pour plus d'informations, vous pouvez visiter le [site officiel](https://www.openstack.org/) ainsi que la [documentation officielle](https://docs.openstack.org/2024.2/).

## Nova : plateforme de Cloud Computing de GRICAD

Nova est la plateforme OpenStack de GRICAD, hébergée à Grenoble. Celle-ci vous propose un service de machines virtuelles à la demande.
Accessible via une interface web ou une API, la plateforme permet de gérer des VMs, leur réseau et toutes les ressources liées au Cloud Computing.

#### Projet Nova à Grenoble

Le projet Nova met à disposition une infrastructure de cloud computing (IaaS : Infrastructure as a Service) à destination des activités recherche de l'EPE UGA.
Avec Mesonet, Nova met désormais ses ressources à disposition de tout l'ESR français.

#### Caractéristiques de la plateforme Nova
- approvisionnement de machines virtuelles à la demande,
- nombreuses options disponibles (capacité CPU, RAM, disque, GPU, etc.),
- OS disponibles :
  - Debian, Ubuntu, Cirros, etc.
  - n'importe quel OS que vous pourrez téléverser dans votre projet,
- quota et gestion par projet,
- gestion par interface web, en ligne de commande (CLI) et API.

Chaque projet se voit attribuer un ensemble de ressources (coeurs, mémoire, GPUs, espace disque, réseau) que l'utilisateur peut utiliser pour créer et gérer des VMs à sa convenance.

#### Accéder au service

Pour accéder au service de cloud computing Nova de GRICAD, vous devez posséder un compte **IAM** et faire partie d'un projet **Nova-Cloud** sur le [portail](/acces/portail).

## Cas d'usage

- Tests et validations : Laboratoires, Expérimentations, Pré-production, Maquettage (*NbGrader*)
- Formation et enseignement
- Traitement de données
- Calcul : HPC / HTC
- Développement sur GPU
- Intégration continue (*Runner gitlab*)
- Serveur Web
- etc.
