---
title: "Description"
sidebar_position: 1
---

import novalogo from '/img/nova/Nova_Logo_Quadri.png?width=100px';

<img src={novalogo} alt="Nova Logo" style={{width: 100}} />

## OpenStack
OpenStack est un ensemble de logiciels open source qui offre une solution pour déployer et gérer des infrastructures de cloud computing.

## Nova : plateforme de Cloud Computing de GRICAD

Nova est la plateforme OpenStack de GRICAD qui vous  propose un service de machines virtuelles **non pérennes** à la demande.
Accessible via une interface web ou des APIs, la plateforme permet de gérer des VMs, leur réseau et toutes les ressources liées au Cloud Computing.

#### Projet Nova à Grenoble

Le projet Nova met à disposition une infrastructure de cloud computing (IaaS : Infrastructure as a Service) à destination des activités recherche de l'EPE UGA.
Les Financeurs sont : CNRS, Grenoble INP, Inria, UGA, projets de recherche ou d'enseignement, Mathrice.
La plateforme est installée dans le datacentre grenoblois.

#### Caractéristiques de la plateforme Nova
- approvisionnement de serveurs virtuels à la demande,
- nombreuses options disponibles (capacité CPU, RAM, disque, etc.),
- OS disponibles :
  - Debian, Ubuntu, Cirros, etc.
  - n'importe quel OS que vous pourrez téléverser dans votre projet,
- quota et gestion par projet,
- gestion par interface web, en ligne de commande (CLI) et API (python, go, c, etc.).

Chaque projet se voit attribuer un ensemble de ressources (coeurs, mémoire, espace disque, réseau) que l'utilisateur peut utiliser pour créer et gérer des VMs à sa convenance.

#### Accéder au service

Pour accéder au service de cloud computing Nova de GRICAD, vous devez posséder un compte Perseus et faire une demande de projet.
1. Consultez [la documentation de PERSEUS]({{< relref "services/perseus-ng/" >}})
2. Comment accédez à la plateforme [Nova]({{< relref "basics/" >}}) ?

 **Attention**, un projet Nova met à disposition des ressources de type Cloud aux utilisateurs, il faudra préciser, à minima, lors de la création de votre projet Perseus :
- Nombre de VMs
- Quantité de CPU
- Quantité de RAM
- Quantité d'espace disque

## Cas d'usage
Toute utilisation qui **ne nécessite pas d'hébergement ou de stockage pérenne** dans le temps.

- Tests et validations : Laboratoires, Expérimentations, Pré-production, Maquettage (*NbGrader*)
- Formation et enseignement
- Traitement de données
- Calcul : HPC / HTC
- Développement sur GPU
- Intégration continue (*Runner gitlab*)
- etc.

{{% notice note %}}
Pour tout besoin de serveur virtuel pérenne (*serveur web*, *base de données*, *application*)
préférez l'offre de [service UGA WINTER](https://gricad.univ-grenoble-alpes.fr/winter.html).
{{% /notice %}}
