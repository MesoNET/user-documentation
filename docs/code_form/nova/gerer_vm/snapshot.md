---
title: "Instantané de VM"
sidebar_position: 1
---

Faire un instantané - snapshot - d'une instance peut être utile si on souhaite garder une certaine version d'une instance.
Cela permet par exemple de relancer une instance depuis une version précédente, ou bien de migrer une instance vers un autre projet.

## Création d'instantané
Avant de prendre un instantané, assurez-vous que la machine virtuelle soit arrêtée.
:::warning
Si l'instance n'est pas arrêtée, les données ne sont pas assurées d'être vidées sur le disque.
:::
   
Prenez l'instantané en utilisant la commande
``` bash
openstack server image create <instance> --name myInstanceSnapshot
```
Cela produit une image du nom de *myInstanceSnapshot*.

>
``` bash
openstack image list
+------------+---------------------------------+--------+
| ID         | Name                            | Status |
+------------+---------------------------------+--------+
| id-image-1 | cirros-0.3.5-x86_64-uec         | active |
| id-image-2 | cirros-0.3.5-x86_64-uec-kernel  | active |
| id-image-3 | cirros-0.3.5-x86_64-uec-ramdisk | active |
| id-image-4 | myInstanceSnapshot              | active |
+------------+---------------------------------+--------+
```

## Cas d'usage

#### Lancer une instance depuis un instantané
Lancer une nouvelle instance en utilisant un instantané en guise d'image.
``` bash
openstack server create --flavor <gabarit> --image <instantané> <instance>
```

#### Migrer vers un autre projet
Si on veut migrer une instance vers un autre projet OpenStack, il faut

1. télécharger l'instantané sous forme d'image
2. importer l'image dans le nouveau projet
3. lancer une nouvelle instance en utilisant l'instantané importé comme image


:::note
Pour en savoir plus sur les instantanés, se référer à la page de [documentation d'OpenStack](https://docs.openstack.org/nova/latest/admin/migrate-instance-with-snapshot.html).
:::