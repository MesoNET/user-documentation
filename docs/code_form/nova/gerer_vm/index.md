---
title: "Gérer sa VM"
---

Même si ce sont des machines virtuelles et non physiques, elles sont malgré tout hebergées sur des serveurs physiques et utilisent des ressources tant qu'elles sont en fonctionnement.

C'est pourquoi il est important de ne pas oublier de stopper les machines qui n'ont pas besoin de fonctionner en continue et de supprimer celles qui ne sont plus utiles, afin de libérer les ressources allouées.


## Résumé des commandes essentielles

### Créer un instantané
Pour sauvegarder l'état d'une instance (dans le but d'une restauration ou d'une migration), il est possible de faire un instantané.

``` bash
openstack server image create <instance> --name myInstanceSnapshot
```

{{% notice note %}}
Assurez-vous d'abord que l'instance soit bien arrêtée, sinon les données ne sont pas assurées d'être vidées sur le disque.
{{% /notice %}}


### Stopper/supprimer une instance
Stoppez une instance qui n'a pas besoin de fonctionner en continue.
``` bash
openstack server stop <instance>
```

Supprimez définitivement une instance devenue inutile pour libérer les ressources allouées.
``` bash
openstack server delete <instance>
```

{{% notice tip %}}
C'est bon pour la planète ! <i class="fas fa-leaf"></i>
{{% /notice %}}
