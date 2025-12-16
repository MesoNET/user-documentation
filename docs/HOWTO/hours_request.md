---
title: "Comptabilisation heures de calcul sur une machine"
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Calculer le nombre d'heures à demander sur une machine.

:::caution
Cette page est une ébauche et est susceptible de changer à l'avenir.
:::

## TURPAN (CPU)

Le détail du décompte est décrit dans  [la section "accounting" de la documentation TURPAN](https://www.mesonet.fr/documentation/user-documentation/arch_exp/turpan/accounting/accounting-rules//documentation/user-documentation/arch_exp/turpan/accounting/accounting-rules)

Les heures à demander sont des heures CPU. Une heure de calcul CPU correspond à la réservation d'un coeur CPU unique pendant une heure. Le décompte est effectué différemment selon les partitions.

<Tabs>
  <TabItem label="Partitions small big et full" value="notshared" default>

Pour une réservation sur ces partitions, les nœuds sont attribués dans leur intégralité (i.e les 80 cœurs de chaque nœud et les 2 cartes GPU sont réservés). Tout nœud réservé est comptabilisé de la manière suivante :

:::info

(nombre de **nœuds réservés**) \* (**80 cœurs**) \* (**temps** de réservation **effectivement utilisé**)

:::

Pour chaque heure d'utilisation du noeud, il faut donc demander 80 heures CPU. Par exemple, pour utiliser un noeud pendant 24 heures, il faut réserver 24*80 heures CPU, soit 1920 heures.

  </TabItem>


  <TabItem label="Partition share et visu" value="shared">

Pour une réservation sur les partition shared ou visu, le nœud est partagé entre plusieurs utilisateurs. Tout nœud réservé est comptabilisé de la manière suivante :

:::info

(nombre de **cœurs réservés**) * (**temps** de réservation **effectivement utilisé**)

:::

  </TabItem>
</Tabs>

## Boréale (VE)

 1 heure de calcul décomptée correspond à 1 heure de calcul sur un Vector Engine (VE). Les Vector Engine peuvent être réservés séparément ou par noeud. Un noeud contenant 8 VE, une heure de calcul sur un noeud complet correspond à 8 heures à demander.

## Juliet (GPU)

:::info

Les règles exactes de comptabilité sur Juliet sont encore en cours de développement, cette page peut être amenée à évoluer.

:::
Sur Juliet la comptabilisation se fait en heures GPU. Pour utiliser un GPU pendant une heure, il faut compter une heure GPU. Les noeuds sont partagés par défauts. Pour réserver un noeud complet, le nombre d'heures à demander correspond à 8 fois le nombre d'heures de calcul.

## Vesta (GPU)

Sur Vesta, la comptabilisation se fait en heures GPU. Pour utiliser un GPU pendant une heure, il faut compte une heure GPU. Un nœud contenant 10 GPU, une heure de calcul sur un nœud complet correspond donc à 10 heures à demander.

## Zen (CPU)
:::info

Les règles exactes de comptabilité sur Zen sont encore en cours de développement, cette page peut être amenée à évoluer.

:::

Sur Zen la comptabilisation se fait en heures CPU. Pour réserver un nœud complet, le nombre d'heures à demander correspond à 128 fois le nombre d'heures de calcul.

## Arctic (CPU et GPU)

Qu'un travail exploite des CPU ou des GPU, sa consommation de ressource décomptée est le nombre d'heures.cœurs qu'il réserve : (cœurs de CPU) x (durée de temps elapsed).
