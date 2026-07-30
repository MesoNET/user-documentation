---
title: "Clés SSH"
---

Pour se connecter aux instances de machines virtuelles, vous devez déposer la partie publique de votre clé ssh.

## Liste des clés disponibles
Vous pouvez afficher la liste des clés ssh disponibles avec la commande
``` bash
openstack keypair list
```
*Si vous venez de vous authentifier pour la première fois, il est normal qu'aucune clé ne s'affiche : vous ne l'avez pas encore déposé.*

## Déposer sa clé publique
Déposez votre clé publique ssh :
``` bash
openstack keypair create --public-key ~/.ssh/id_rsa_nova.pub tascan-rsa
+-------------+-------------------------------------------------+
| Field       | Value                                           |
+-------------+-------------------------------------------------+
| fingerprint | 9e:33:58:35:62:df:be:4b:47:4b:ba:bc:0e:8d:d9:26 |
| name        | tascan-rsa                                      |
| user_id     | b8b092a17bce4974b0cbd83179014f01                |
+-------------+-------------------------------------------------+
```
Cette fois, lorsqu'on liste les clés disponibles, votre clé apparaît.
``` bash
openstack keypair list
+------------+-------------------------------------------------+
| Name       | Fingerprint                                     |
+------------+-------------------------------------------------+
| tascan-rsa | 9e:33:58:35:62:df:be:4b:47:4b:ba:bc:0e:8d:d9:26 |
+------------+-------------------------------------------------+
```
