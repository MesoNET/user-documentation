---
title: "Créer une VM"
sidebar_position: 1
---

## Lister les instances
Listez les instances avec la commande
``` bash
openstack server list
```
Cela permet notamment de résumer les informations des instances et de vérifier leur état (*status*), c'est-à-dire si elles sont actives (*ACTIVE*), éteintes (*SHUTOFF*), en état d'erreur (*ERROR*), etc.

>
Exemple :
>
``` bash
openstack server list
+--------------------------------------+----------------+---------+---------------------------------------------+----------------------------+-----------+
| ID                                   | Name           | Status  | Networks                                    | Image                      | Flavor    |
+--------------------------------------+----------------+---------+---------------------------------------------+----------------------------+-----------+
| 94d7d331-2c8d-4494-b49f-6eb8d3398d5b | youpi4         | BUILD   |                                             |                            | m1.small  |
| 31ed9e4f-93e6-451f-b3d6-c84194c3a12f | youpi3         | PAUSED  | perseus2-int-net=192.168.0.5                |                            | m1.small  |
| 486ec418-2a71-454d-b488-f912ca768600 | youpi2         | ERROR   |                                             |                            | m1.small  |
| 1af59776-a42f-4acb-b58e-84ed5bbc66ca | youpi0         | ACTIVE  | perseus2-int-net=192.168.0.8, 129.88.195.94 | ubuntu-19.10-eoan-x86_64   | m1.medium |
| 793edd3d-1947-4dad-834e-794216d9d8f3 | youpi          | SHUTOFF | perseus2-int-net=192.168.0.11               | ubuntu-18.04-bionic-x86_64 | m1.small  |
| 8b0a16ad-4c8a-44ef-bea1-c724533352e8 | virtualmachine | ACTIVE  | perseus2-int-net=192.168.0.4, 129.88.195.91 |                            | m1.medium |
+--------------------------------------+----------------+---------+---------------------------------------------+----------------------------+-----------+
```
>
L'instance *youpi0* est active et fonctionne correctement (*Status = ACTIVE*).
L'instance *youpi* est éteinte (*Status = SHUTOFF*).
L'instance *youpi2* n'a pas réussie à se construire correctement donc elle est en état d'erreur (*Status = ERROR*).
L'instance *youpi3* a été mise en pause ou suspendue (*Status = PAUSED*).
L'instance *youpi4* est en construction (*Status = BUILD*).



## Créer une nouvelle instance
Pour créer une nouvelle instance, il faut préciser l'image source, le gabarit, le réseau, le groupe de sécurité et éventuellement la clé ssh à utiliser.
``` bash
openstack server create \
    --image <image> \
    --flavor <gabarit> \
    --network <réseau> \
    --security-group <groupe de securité> \
    --key-name <clé RSA> \
    <nom de instance>
```
:::note
Utilisez **toujours** le réseau [**default-net**](/code_form/nova/ressources/reseau#réseau-privé) pour lancer vos instances !
:::


>
**Sur un exemple :**
>
On veut créer une instance appelée my-instance qui aura les caracteristiques suivantes :
>
- l'image: ubuntu-18.04-bionic-x86_64
- le gabarit: m1.small
- le réseau: default-net
- le groupe de sécurité: default
- la clé ssh: my-key
>
Maintenant que les caractéristiques de l'instance sont rassemblées, pour la construire, on exécute
>
``` bash
openstack server create --image ubuntu-18.04-bionic-x86_64 --flavor m1.small --network project-int-net --security-group default --key-name my-key my-instance
```

:::warning Attention
Certaines images sont disponibles sous différents formats et donc portent le même nom.
Dans ce cas utilisez l'ID de l'image souhaitée pour éviter tout conflit à la création de l'instance :
`--image <IMAGE_ID>`
:::
:::note
La source à partir de laquelle on construit une instance n'est pas obligatoirement une image. Cela peut être un instantané ou même un volume bootable mais ce sont des cas particuliers qui seront traités [plus tard](/code_form/nova/creer_vm/advanced#création-à-partir-dun-volume).
:::