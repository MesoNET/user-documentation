---
title: Les règles
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Les règles d’accounting en vigueur sur Turpan

Pour rappel Turpan est un Cluster qui interconnecte des nœuds de calcul. Chaque nœud de Turpan dispose de 80 cœurs et 2 cartes accélératrices GPU.


## Accounting par type de partition

Plusieurs cas de figure se présentent en fonction de la partition utilisée :

<Tabs>
  <TabItem label="Partitions small big et full" value="notshared" default>

Pour une réservation sur ces partitions, les nœuds sont attribués dans leur intégralité (i.e les 80 cœurs de chaque nœud et les 2 cartes GPU sont réservés). Tout nœud réservé est comptabilisé de la manière suivante :

:::info

(nombre de **nœuds réservés**) * (**80 cœurs**) * (**temps** de réservation **effectivement utilisé**)

:::

  </TabItem>
  <TabItem label="Partition share et visu" value="shared">

Pour une réservation sur les partition shared ou visu, le nœud est partagé entre plusieurs utilisateurs. Tout nœud réservé est comptabilisé de la manière suivante :

:::info

(nombre de **cœurs réservés**) * (**temps** de réservation **effectivement utilisé**)

:::

  </TabItem>
</Tabs>

:::tip Note

Bien que leur consommation soit affichée, la consommation des cartes GPU n'est pas prise en compte dans la comptabilisation.

:::

## Exemples :

<Tabs>
  <TabItem label="Partitions small big et full" value="notshared" default>

* Je lance un job sur 2 nœuds, en lançant 80 tâches par nœud.
* Mon job met 15h à tourner.
* L’en-tête de mon script SLURM ressemblera à quelque chose comme :

>```
>#SBATCH -N 2
>#SBATCH -n 160
>#SBATCH -p small
>#SBATCH --ntasks-per-node=80
>#SBATCH --ntasks-per-core=1
>#SBATCH --time=20:00:00
>```

Il me sera décompté (2 nœuds) * (80 cpus) * (15 h) = 2400 h_cpus Pour rappel : 80 cœurs de calculs par noeud de Turpan.

  </TabItem>
  <TabItem label="Partitions small big et full (dépleuplé)" value="notshared-sparse">

* Je lance un job sur 2 nœuds en dépeuplé, en lançant 40 tâches par nœud.
* Mon job met 15h à tourner.
* L’en-tête de mon script SLURM ressemblera à quelque chose comme :

>```
>#SBATCH -N 2
>#SBATCH -n 160
>#SBATCH -p small
>#SBATCH --ntasks-per-node=40
>#SBATCH --ntasks-per-core=1
>#SBATCH --time=20:00:00
>```

Il me sera décompté (2 nœuds) * (80 cpus) * (15 h) = 2400 h_cpus Pour rappel : 80 cœurs de calculs par noeud de Turpan.

  </TabItem>
  <TabItem label="Partitions shared et visu" value="shared">

* Je lance un job utilisant 4 cpu
* Mon job met 15h à tourner.
* L’en-tête de mon script SLURM ressemblera à quelque chose comme :

>```
>#SBATCH -N 1
>#SBATCH -n 4
>#SBATCH -p shared
>#SBATCH --ntasks-per-node=4
>#SBATCH --ntasks-per-core=1
>#SBATCH --gres=gpu:1
>#SBATCH --mem=20000
>#SBATCH --time=20:00:00
>```

Il me sera décompté (4 cpus) * (15 h) = 60 h_cpus

  </TabItem>
</Tabs>

## Et si mon quota est épuisé ?

Un job n’est comptabilisé que lorsqu’il est terminé. En cas de dépassement de quota :

* Aucun job ne peut plus être soumis au gestionnaire de batch
* Les jobs en attente sont supprimés
* Les jobs en cours continuent leur exécution.
* Je peux encore accéder à mes espaces de fichier pendant encore 1 an
* Mon responsable de projet peut demander une extension en allant dans l'application GRAMC (https://acces.mesonet.fr)