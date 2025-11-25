---
title: "IP Flottante"
---

## 1- Principe de fonctionnement
Comme vu précédemment pour une configuration réseau classique sur NOVA, chaque instance possède une interface avec une adresse IP privée fixe.
Si elle permet de communiquer vers l'extérieur via la translation d'adresse du routeur, elle ne suffit pas pour être jointe depuis l'extérieur du projet.
Pour cela, il faut recourir à une IP flottante du réseau **public**.
Une IP flottante est un objet du projet, en lien avec le sous-réseau du réseau **public** et avec son quota de ressources.
Elle doit être allouée avant d'être associée ou dissociée d'une interface réseau d'instance.
Elle peut enfin être libérée.

Exécutez la commande suivante pour voir la liste des adresses IP flottantes allouées dans le projet.
``` bash
openstack floating ip list
```

## 2- Déclaration DNS automatique {#declarationDNS}

Une déclaration associant l'adresse IP publique de l'IP flottante à un nom (déclaration DNS de type A) est automatiquement tentée sur le serveur DNS de l'UGA (API IPAM).
Pour utiliser cette fonctionnalité, il faut renseigner, à l'allocation de l'IP flottante, les attributs _dns_name_ et _dns_domain_.
_dns_name_ est la partie gauche avant le premier "." du Fully Qualified Domain Name.
_dns_domain_ est la partie droite après le premier "." du FQDN et jusqu'au "." final compris qui est obligatoire.
Les domaines autorisés sont limités à "**nova.u-ga.fr.**", "**u-ga.fr.**" et "**univ-grenoble-alpes.fr.**".
Comme il s'agit de donner un nom public aux instances de calcul, le domaine technique "**u-ga.fr.**" est tout indiqué.
Le sous-domaine "**nova.u-ga.fr.**" est à disposition pour réduire le risque de conflit avec un nom DNS existant.
Car en cas de conflit, les déclarations échouent en silence sans interrompre l'allocation de l'IP flottante.
Une suggestion pour lever tout conflit potentiel : choisir _dns_domain_ "**nova.u-ga.fr.**" avec comme _dns_name_ TODO.

L'allocation de l'IP flottante déclenche aussi la déclaration DNS inverse de type PTR.
Ces déclarations sont automatiquement supprimées lors de la libération de l'IP flottante et lorsqu'elle est encore associée à une instance au moment de sa destruction.

:::warning Attention
Si vous souhaitez conserver votre déclaration DNS au moment de la suppression de votre VM, il faudra penser à dissocier votre IP flottante avant la suppression
:::

## 3- Allouer une IP flottante {#allouerIpFlottante}
Pour allouer une IP flottante au projet, il faut créer une adresse dans le sous-réseau **public**.
Pour cela, executez la commande :
```bash
openstack floating ip create \
--dns-name <nomDNS> --dns-domain nova.u-ga.fr. \
public
```

## 4- Associer une IP flottante à une instance
L'association peut se faire lors de l'instanciation de la VM ou après coup,
voir [Accès aux VMs](/code_form/nova/creer_vm/acces_vm#associerIpFlottante).