---
title: "Réseaux"
---

## Réseau

NOVA vous permet de créer la topologie réseau souhaitée à l'intérieur de votre projet.
Le trafic interne entre les instances du projet est isolé des autres projets et de l'extérieur de NOVA.
Chaque projet contient deux types de réseaux - network : privé et publique.

### Réseau privé

À la création d'un projet, un réseau privé est créé d'office pour vous aider :
**default-net**, avec des adresses en 192.168.1.0/24.
Mais vous pouvez en créer autant que vous voulez.

C'est dans un réseau privé (le "default-net" par exemple) que seront créées les VMs.
Elles auront accès à l'extérieur grâce à un mécanisme de SNAT, mais ne seront pas visibles depuis l'extérieur.
Les VMs pouront par ailleurs communiquer entre elles au sein des réseaux privés d'un même projet.


### Réseau public

Pour chaque projet, il y a un réseau public : **public**, qui est un réseau routé sur le backbone UGA.
C'est dans ce réseau public que vous pourrez allouer des _adresses ip flottantes_.
Ces _ip flottantes_ pourront alors être associées aux VMs que vous aurez créées, pour les rendre accessibles.


## Sous-réseau

La liste des sous-réseaux du projet est donnée par la commande :
``` bash
openstack subnet list
```
qui renvoie le sous-réseau du réseau privé par défaut, *default-subnet*.

:::note
NOVA utilse l'adressage IPv4. Pour utiliser l'adressage IPv6, nous contacter.
:::