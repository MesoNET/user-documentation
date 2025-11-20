---
title: "Arrêt/Suppression de VM"
sidebar_position: 1
---



## Arrêt d'une instance

Pensez à arrêter les instances n'effectuant plus de traitement pour ne pas faire tourner de machines virtuelles inutillement.

``` bash
openstack server stop <instance>
```


## Suppression d'une instance

:::warning Attention
Si vous avez associé une IP flottante à votre VM et que celle-ci contient un nom de domaine, il faut dissocier votre IP flottante avant la suppression.   
Sinon, vous perdrez votre déclaration DNS et vous devrez créer une nouvelle IP flottante en indiquant votre nom de domaine.
:::

Pensez à supprimer les instances dont vous n'avez plus l'usage.

``` bash
openstack server delete <instance>
```
Cela permettra de libérer des ressources pour créer de nouvelles instances.


:::tip
En plus, c'est bon pour la planète ! <i class="fas fa-leaf"></i>
:::