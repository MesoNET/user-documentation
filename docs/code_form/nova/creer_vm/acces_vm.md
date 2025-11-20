---
title: "Accès à la VM"
sidebar_position: 2
---

## Rendre possible l'accès distant
L'accès aux instances créées se fait en ssh.
Pour cela, il est nécessaire que chaque instance ait une adresse ip qui la rende visible et accessible depuis l'extérieur.

Assurez-vous d'abord d'avoir des adresses ip flottantes allouées au projet et qui ne sont pas déjà associée à une instance.

### Associer une ip à une instance {#associerIpFlottante}
Utilisez la commande suivante pour associer une adresse ip flottante à une instance en utilisant :
``` bash
openstack server add floating ip <instance> <ip_flottante>
```
{{% notice note %}}
Cette commande ne produit aucune sortie si tout se passe correctement
{{% /notice %}}

>
**Par exemple :**
>
Admettons que la création d'une nouvelle adresse au projet nous a fourni l'ip flottante __*129.88.195.12*__.
On souhaite associer cette adresse ip à une instance appelée __*VM*__.
``` bash
openstack server add floating ip VM 129.88.195.12
```

### Dissocier une ip d'une instance {#dissocierIpFlottante}
Exécutez la commande suivante pour dissocier une ip flottante d'une instance.
Cette ip pourra être réutilisée en l'associant à une autre instance selon les besoins du projet.
``` bash
openstack server remove floating ip <instance> <ip_flottante>
```


## Accès en ssh
Si le groupe de sécurité est correctement configuré, vous pouvez vous connecter en ssh avec votre clé à l'instance.

``` bash
ssh <nom-utilisateur>@<ip-flottante>
```

Si vous avez créé l'instance sans créer d'utilisateur alors le nom d'utilisateur est celui par défaut.

{{% notice note %}}
Par défaut, le nom d'utilisateur dépend de la distribution.
En général, il s'agit du nom de la distribution... c'est le cas pour debian, ubuntu, nixos et cirros.
{{% /notice %}}

>
Par exemple:
Je viens de créer une instance *Ubuntu 18.04.3* à laquelle j'ai associé l'adresse ip *129.88.195.91*.
Pour y accéder en ssh, je dois taper
``` bash
ssh ubuntu@129.88.195.91
```

## Accès en dehors du réseau de l'UGA

Pour rendre accessible un service en dehors du réseau de l'UGA, vous devez vous adresser à un administrateur systèmes et réseaux proche de votre structure.   
Pour un site web (port 443), la demande est facilitée et peut être effectuée ici :
https://formulaires.univ-grenoble-alpes.fr/fr/declaration-site-web.
