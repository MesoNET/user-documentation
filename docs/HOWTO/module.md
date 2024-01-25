---
title: "Modules d'environnement"
sidebar_position: 3
---

La commande `module` permet de lister et d'utiliser simplement des logiciels, librairies ou utilitaires installés sur les machines MesoNET.

L'outil 'Environment Modules' (ou 'Lmod' dont le fonctionnement est très similaire) permet aux utilisateurs de dynamiquement changer leur environnement en modifiant des variables d'environnement.

C'est le moyen privilégié pour maintenir une multitude de compilateurs, de librairies et de logiciels, souvent en différents versions sur les clusters MesoNET.

- [Environment Modules](https://modules.readthedocs.io/en/latest/)
- [Lmod](https://lmod.readthedocs.io/en/latest/)


## Environment modules / lmod

- La commande

```shell
module avail
```

permet de lister l'ensemble des modules qui peuvent être chargés directement avec `module load`.

`module avail` ne liste pas nécessairement *tous* les modules disponible - certains ne deviennent visibles qu'après avoir chargé un autre module.
C'est notamment le cas sur Turpan et sur Zen : par exemple, il faudra charger le module `nvidia` afin de voir les environnements qui en dépendent.

- La commande `module load` charge un ou plusieurs environnement(s). Par exemple,

```shell
module load vasp/6.3.0
```

charge l'ensemble de l'environnement nécessaire à l'exécution du code VASP, compilateurs inclus.

- Pour voir ce que fait `module load` on peut utiliser la commande `module show`.

- Pour lister les modules chargés actuellement : `module list`

- Pour décharger un module : `module unload vasp/6.3.0`

Cette commande va décharger l'ensemble des modules chargés par le module vasp/6.3.0, dépendances  inclus.

- Pour décharger tous les modules chargés dans votre terminal ou un script : `module purge`



Enfin, certains modules peuvent avoir des greffons (bibliothèques supplémentaires). Pour avoir des informations sur les bibliothèques supplémentaires installées dans un module, il faut utiliser la commande module help :


<!--
## lmod

### module spider

### ml -->
