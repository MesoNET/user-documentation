---
title: "Résumé des commandes essentielles"
---

Les machines virtuelles OpenStack sont appelées instances.

Une instance est crée à partir d'une image avec des ressources choisies et une taille qui lui sera allouée.
La taille est redimensionnée dynamiquement au lancement de l'instance en fonction de la place qu'elle occupe réellement.


## Résumé des commandes essentielles

### 1 - Créer une instance
Création d'une instance en renseignant les ressources nécessaires.
``` bash
openstack server create \
--image <image> --flavor <gabarit> --network <réseau> --security-group <groupe de securité> --key-name <clé RSA> \
<nom de instance>
```
Ajout de l'option `--user-data <configuration-file>` pour une création personnalisée avec
[cloud-init](/code_form/nova/creer_vm/advanced.md)
et un fichier de configuration.


### 2 - Lui associer une ip flottante
Associer une adresse ip flottante pour rendre l'instance visible et accessible.
``` bash
openstack server add floating ip <instance> <ip_flottante>
```

### 3 - Acceder à l'instance
Accéder à l'instance en ssh.
``` bash
ssh <nom-utilisateur>@<ip-flottante>
```
