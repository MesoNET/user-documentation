---
title: "Utilisation avancée"
sidebar_position: 3
---

## Création personnalisée avec cloud-init
Il est possible de personnaliser la création d'une instance en fournissant un fichier de données utilisateur.

Cloud-init est le paquet qui gère l'initialisation d'une instance à l'aide de données utilisateur.
Les données utilisateurs sur lesquelles cloud-init peut agir doivent faire partie de l'un de ces types :

- include-once-url
- include-url
- cloud-config-archive
- upstart-job
- cloud-config
- part-handler
- shellscript
- cloud-boothook

Le type définira par quoi doit commencer le fichier de données :

- un script de données : `#!`
- un fichier include : `#include`
- un fichier de configuration de cloud (cloud-config) : `#cloud-config`
- un job upstart : `#upstart-job`
- un cloud boothook: `#cloud-boothook`
- un part handler : `#part-handler`

Dans notre cas, nous nous intéresserons plus spécialement au type cloud-config.
Mais vous pouvez en savoir plus en vous référant à la documentation de cloud-init :
[https://cloudinit.readthedocs.io/en/latest/topics/format.html](https://cloudinit.readthedocs.io/en/latest/topics/format.html)


### Fichier cloud-config
Le fichier cloud-config est un moyen assez simple pour définir des tâches à accomplir au lancement de l'instance.

{{% notice note %}}
Un fichier **cloud-config** doit être écrit avec une syntaxe **yaml** valide.
{{% /notice %}}

Pour commencer, le fichier doit débuter par `#cloud-config`.

>
```
#cloud-config
# vim: syntax=yaml
# This is a cloud-config file for user-data
```


#### Installation de paquets
L'installation de paquets se fait à l'aide du mot clé : `packages` et la mise à niveau en définissant `package_upgrade` à *'true'*.
Il suffit de faire la liste des paquets à installer sans préciser le dépôt dans lequel aller les chercher.

>
```
package_upgrade: true

packages:
  - aptitude
  - linuxlogo
  - vim
  - ssh
  - python
  - gcc
  - g++
```


#### Ajout d'utilisateurs
Avec le mot clé `users` on ajoute des utilisateurs qui pourront accéder à l'instance grâce à leur clé publique.

>
```
users:

  - name: "user1"
    gecos: "user 1"
    sudo: ['ALL=(ALL) NOPASSWD:ALL']
    groups: [ wheel , sudo ]
    homedir: "/home/user1"
    shell: "/bin/bash"
    ssh-authorized-keys: [ < public_key_user1 > ]

  - name: "ubuntu"
    sudo: ['ALL=(ALL) NOPASSWD:ALL']
    groups: [ wheel , sudo ]
    homedir: "/home/ubuntu"
    shell: "/bin/bash"
    ssh-authorized-keys: [ < public_key_user1 > , < public_key_user2 > ]

  - name: "user2"
    gecos: "user 2"
    sudo: ['ALL=(ALL) NOPASSWD:ALL']
    groups: [ wheel , sudo ]
    homedir: "/home/user2"
    shell: "/bin/bash"
    ssh-authorized-keys: [ < public_key_user2 > ]
```

#### Ecriture de fichier
Il est possible d'écrire des fichiers au premier lancement avec `write_files` en precisant son contenu, son chemin d'accès (path), ses permissions et  son propriétaire.

>
```
write_files:

  - content: |
      #!/bin/bash
      var="Hello World"
      echo "$var"
    owner: root:root
    path: /home/ubuntu/hello.sh
    permissions: '0777'

  - content: |
      #!/bin/bash
      now="$(date)"
      computer_name="$(hostname)"
      echo "Current date and time : $now"
      echo "Computer name : $computer_name"
    owner: root:root
    path: /home/ubuntu/Hello/date.sh
    permissions: '0777'
```

#### Exécution de commandes
Le mot clé `runcmd` liste les commandes à exécuter dans un terminal.

>
```
runcmd:
  # Personnalisation du bash pour user
  - echo "linuxlogo" >> /home/user/.bashrc
  - source /home/user/.bashrc
  # Execution des deux scripts ecrits plus haut
  - bash /home/ubuntu/hello.sh
  - bash /home/ubuntu/Hello/date.sh
```

#### Message final
Un message final peut être affiché dans le journal de lancement d'une instance pour montrer que tout le cloud-init s'est déroulé sans encombre.

>
```
final_message: "The system is finally up, after $UPTIME seconds"
```


### Création de l'instance
Créer une instance personnalisée se fait de la même façon que pour une instance basique mais avec une option en plus : celle du fichier de données utilisateur (`--user-data cloud-config`).
```bash
openstack server create \
    --image <image> \
    --flavor <gabarit> \
    --user-data cloud-config \
    --network <project>-int-net \
    --security-group <group> \
    --key-name <rsa-key> \
    <instance-name>
```


## Création à partir d'un volume
Il est possible de démarrer une instance à partir d'un volume plutôt que d'une image.

Pour cela, utilisez la commande de création d'instance openstack
`openstack server create` avec les options suivantes

- `--block-device` : qui permet de démarrer à partir d'une source (image, volume ou instantané) existante.
*Par exemple, démarrer l'instance à partir d'une image et lui attacher un volume non-bootable. Ou encore, créer un volume à partir d'une image puis démarrer une instance à partir de ce volume.*
- `--swap` : qui joint un disque d'échange à une instance.
- `--ephemeral` :  qui joint un disque éphémère à une instance.



:::note
Pour en savoir plus sur la création d'une instance à partir d'un volume, se référer à la documentation d'OpenStack.
<i class="fas fa-hand-point-right"></i> [Documentation d'OpenStack](https://docs.openstack.org/nova/latest/user/launch-instance-from-volume.html)
:::