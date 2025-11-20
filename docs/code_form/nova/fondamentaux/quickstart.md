---
title: "Quickstart"
sidebar_position: 4
---

Dans ce quickstart, nous allons créer une première machine virtuelle (VM) du début à la fin, en utilisant l'interface graphique (Horizon) via un navigateur Web.
Après la connexion, vous allez pouvoir commencer par créer votre paire de clés, qui servira à vous connecter à vos machines virtuelles.

## Prérequis

* Avoir un projet Nova actif et donc un accès à l'interface Web avec vos identifiants PERSEUS (voir [Accéder à Openstack](/code_form/nova/fondamentaux/acceder_openstack)).
* Avoir généré une paire de clés SSH sur votre machine (voir [SSH]({{< relref "../basics/ssh#création-dune-paire-de-clé" >}}))

## Créer sa paire de clés

Après vous être connecté à l'interface web Openstack, rendez vous dans l'onglet à gauche *Projet > Compute > Paires de clés*, cliquez sur *Importer un clé publique* :

![screen_keypair](/img/nova/nova_keypair.png?classes=shadow)

Choisissez un nom pour votre clé.
Choisissez *Clé SSH* pour le *Type de clé*.
Enfin, vous avez le choix entre :
* Sélectionner le fichier correspondant à votre clé **publique**, il s'agit du fichier généré lors des prérequis et qui se termine par **.pub**, par exemple, *id_rsa.pub*.
* Copier coller le contenu du fichier correspondant à votre clé publique

*Rappel : par défaut, ce fichier est situé dans le dossier **~/.ssh***

## Autoriser l'accès SSH

Il faut, à présent, autoriser les requêtes SSH en provenance de l'extérieur. Il s'agit de modifier le *Groupe de sécurité* par défaut.
Pour cela, rendez vous dans l'onglet à gauche *Projet > Réseau > Groupes de sécurité*, cliquez sur *Gérer les Règles* :

![screen_secgroup_rule](/img/nova/nova_secgroup_rule.png?classes=shadow)

Ensuite, cliquez sur *Ajouter une règle* :

![screen_secgroup_rule_create](/img/nova/nova_secgroup_rule_create.png?classes=shadow)

Pour *Règle*, choisissez *SSH* :

![screen_secgroup_rule_create_ssh](/img/nova/nova_secgroup_rule_create_ssh.png?classes=shadow)

Il faut ensuite choisir la source du *SSH* qui sera autorisée. Vous pouvez laisser les valeurs par défaut *CIDR* et *0.0.0.0/0*, qui correspondent à tout le monde.
**Attention**, plus tard, par mesure de sécurité, il est préférable de remplacer le *0.0.0.0/0*, par votre adresse IP, pour que vous seul puissiez accéder à votre machine virtuelle (VM). En effet, il est conseillé de restreindre au maximum les accès via *SSH*, du fait des nombreuses tentatives de connexion malveillantes.


![screen_secgroup_rule_create_ssh2](/img/nova/nova_secgroup_rule_create_ssh2.png?classes=shadow)


## Créer son instance

Nous pouvons maintenant passer à l'étape la plus importante, créer une *instance*, c'est le nom donné à une machine virtuelle par Openstack.
Pour cela, rendez vous dans l'onglet à gauche *Projet > Compute > Instances*, cliquez sur *Lancer une instance* :

![screen_instance](/img/nova/nova_vm_create.png?classes=shadow)

* Dans l'onglet *Détails*
    * Choisissez un nom pour votre instance. Vous pouvez également ajouter une description.
    * Pour le reste, laissez les valeurs par défaut

![screen_details](/img/nova/nova_vm_create_1.png?classes=shadow)

* Dans l'onglet *Source*
    * Choisissez le système d'exploitation que vous souhaitez, dans la version que vous souhaitez, par exemple *debian-12-bookworm-x86_64*.
    * Vous pouvez augmenter la taille du volume créé si vous le souhaitez. Par défaut, sa taille est de **20 Go**. Dans tous les cas, il sera possible d'ajouter un volume supplémentaire à cette instance après sa création, comme on branche un disque dur à une machine physique.

![screen_source](/img/nova/nova_vm_create_2.png?classes=shadow)

* Dans l'onglet *Gabarit*
    * Choisissez les ressources que vous allouez à votre instance : la quantité de CPUs, de RAM, et de disque.

![screen_flavor](/img/nova/nova_vm_create_3.png?classes=shadow)

* Dans l'onglet *Réseaux*
    * Le réseau créé par défaut *default-net* est, normalement, déjà sélectionné. Si ce n'est pas le cas, sélectionnez-le.

![screen_network](/img/nova/nova_vm_create_4.png?classes=shadow)

* Dans l'onglet *Groupes de sécurité*
    * Le groupe de sécurité créé par défaut *default* est, normalement, déjà sélectionné. Si ce n'est pas le cas, sélectionnez-le.

![screen_secgroupvm](/img/nova/nova_vm_create_7.png?classes=shadow)


* Dans l'onglet *Key Pair*
    * Vous retrouvez la paire de clés que nous avons créée au début de ce tutoriel dans la partie [Créer sa paire de clés](#créer-sa-paire-de-clés), elle est déjà sélectionnée. Si ce n'est pas le cas, sélectionnez-la.

![screen_keypair2](/img/nova/nova_vm_create_6.png?classes=shadow)

**La création de la machine virtuelle est terminée !** Nous pouvons passez à l'étape suivante.

## Rendre la machine virtuelle accessible depuis l'extérieur

Pour le moment, notre machine virtuelle est créée mais n'est pas accessible depuis notre machine. Pour la rendre accessible, nous allons lui associer une adresse IP publique flottante.
Rendez vous dans l'onglet à gauche *Projet > Réseau > IP flottantes* :

![screen_ipcreate](/img/nova/nova_vm_ip_create.png?classes=shadow)

* On sélectionne *public* pour le pool d'IPs
* Vous pouvez ajouter une description à votre adresse IP
* **Obligatoire** : Pour le nom de domaine DNS, seule une liste de noms est autorisée : **nova.u-ga.fr.**, **u-ga.fr.** et **univ-grenoble-alpes.fr.**
**Attention** au **.** à la fin, il est important.
* Choisissez ensuite un nom DNS pour votre IP. Ce nom sera concaténé avec le nom de domaine précédent. Au final, vous pourrez, par exemple, accéder à votre machine virtuelle avec le nom *ma-vm.u-ga.fr*.

![screen_ipcreatesettings](/img/nova/nova_vm_ip_create_settings.png?classes=shadow)

Il ne reste plus qu'à associer cette IP avec la machine virtuelle créée précédemment. Pour cela, cliquez sur *Associer* à côté de l'IP qui vient d'être créée.

{{% notice warning %}}
Attention, si vous souhaitez conserver votre déclaration DNS au moment de la suppression de votre VM, il faudra penser à dissocier votre IP flottante avant la suppression.
{{% /notice %}}

![screen_ipassociate](/img/nova/nova_vm_ip_associate.png?classes=shadow)

Enfin, sélectionnez le port de votre machine virtuelle, à associer à votre IP, dans notre exemple, la machine virtuelle s'appelle *exemple* et son IP privé est *192.168.1.43*.

![screen_ipassociatesettings](/img/nova/nova_vm_ip_associate_settings.png?classes=shadow)

Ça y est ! Notre machine virtuelle est accessible depuis notre machine.

## Tester l'accès à la VM

<!-- On vérifie qu'on arrive à atteindre la VM avec la commande *ping* :

![screen_ping](/img/nova/nova_vm_ping.png?classes=shadow)

*Remarque* : on peut aussi utiliser directement l'adresse IP sans passer par le DNS :

![screen_pingip](/img/nova/nova_vm_ping_ip.png?classes=shadow) -->

Il ne reste plus qu'à se connecter à la machine virtuelle en SSH pour en profiter :
**Attention**, l'utilisateur par défaut est *ubuntu* pour un système d'exploitation Ubuntu, et *debian* pour un système d'exploitation Debian. De plus, il faut être connecté au réseau de l'UGA ou au VPN pour se connecter aux instances.

```bash
user@user-gricad:~$ ssh debian@ma-vm.u-ga.fr
```

*Remarque* : Vous pouvez également utiliser directement l'adresse IP au lieu du nom DNS.

```bash
user@user-gricad:~$ ssh debian@129.88.204.55
```

Pour rendre accessible un service en dehors du réseau de l'UGA, vous devez vous adresser à un administrateur systèmes et réseaux proche de votre structure.   
Pour un site web (port 443), la demande est facilitée et peut être effectuée ici :
https://formulaires.univ-grenoble-alpes.fr/fr/declaration-site-web.

## Pour aller plus loin

**Attention**, pour rappel, votre machine virtuelle est accessible depuis n'importe quelle adresse IP, il est préférable de filtrer les IPs autorisées. Pour cela, voir [Groupes de sécurité]({{< relref "../basics" >}}).
