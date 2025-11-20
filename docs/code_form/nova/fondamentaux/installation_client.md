---
title: "Installation du client Openstack"
sidebar_position: 2
---

Pour utiliser OpenStack en ligne de commande il faut installer le client **openstack** sur votre machine, qui est un programme Python.

## Virtualenv

{{% notice note %}}
L'installation dans un environnement virtuel spécifique est facultative mais recommandée par les bonnes pratiques.
{{% /notice %}}

Le module venv est habituellement installé dans les versions récentes de Python. Créez votre environnement virtuel, par exemple gricad-nova-env.
``` bash
python -m venv gricad-nova-env
```

Enfin, activez cet environnement virtuel.
```bash
source gricad-nova-env/bin/activate
```
Vous pouvez ajouter cette commande à la fin du fichier RC.

## Client Openstack

Installez le client openstack, [documentation du module](https://pypi.org/project/python-openstackclient/).
``` bash
pip install python-openstackclient
```

Vous pouvez vérifier que le client est fonctionnel .

``` bash
openstack --version
```

Un exemple pour tester votre authentification à NOVA, la commande suivante permet de lister les projets dont vous faites partie.
``` bash
openstack project list
```
    +----------------------------------+---------------+
    | ID                               | Name          |
    +----------------------------------+---------------+
    | 88ddbfbb9b7f4fe981ce214be524d401 | jupyter       |
    | b9e236db1d344c3a83b9dafb9a10a2e6 | gitlab-runner |
    | d1e48b72350f4e90bb0255e12e6ed602 | ciment-nix-ci |
    +----------------------------------+---------------+

#### Mise à jour de modules
Il faudra de temps en temps mettre à jour les modules de votre environnement car ils ne sont pas gérés par la distribution.
``` bash
pip install -U MODULE_NAME
```
