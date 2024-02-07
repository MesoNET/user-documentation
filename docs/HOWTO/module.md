---
title: "Modules d'environnement"
sidebar_position: 3
---

# Gestion d'environnement d'applications et de librairies

Les environnements d'applications et de librairies sont accessibles par le biais de modules ([Environment Modules](https://modules.readthedocs.io/en/latest/) ou [Lmod](https://lmod.readthedocs.io/en/latest/)).

L'outil `module` permet aux utilisateurs de dynamiquement changer leur environnement en modifiant des variables d'environnement.
C'est le moyen privilégié pour maintenir une multitude de compilateurs, de librairies et de logiciels, souvent en différents versions sur les clusters MesoNET.

## Afficher les modules disponibles

La commande

```sh
module avail
```

permet de lister l'ensemble des modules qui peuvent être chargés directement avec `module load`.

`module avail` ne liste pas nécessairement *tous* les modules disponible - certains ne deviennent visibles qu'après avoir chargé un autre module.
C'est notamment le cas sur Turpan et sur Zen : par exemple, il faudra charger le module `nvidia` afin de voir les environnements qui en dépendent.

```sh
module avail nom_app
```

permet de lister les modules visibles dont le nom commence par *nom_app*.
Par exemple :

```
# module avail hdf
----------------------------------- /share/modules/libraries ------------------------------------
hdf5/1.14.3/intel/2024/mpi  hdf5/1.14.3/intel/2024/seq
```

## Charger et décharger des modules

La commande `module load` charge un ou plusieurs environnement(s). Par exemple,

```sh
module load openfoam/11
```

charge l'ensemble de l'environnement nécessaire à l'exécution du code OpenFOAM, compilateurs inclus.

Pour décharger le module :

```sh
module unload openfoam/11
```

Cette commande déchargera également les dépendances devenues inutiles.

Enfin, pour décharger tous les modules chargés dans votre terminal ou un script utilisez: `module purge`



## Examiner l'environnement

Avec `module list` on peut voir la liste des modules chargés actuellement.

La commande `module show nom_module` (ou `module display nom_module`) permet de voir comment le chargement d'un module modifie l'environnement.

Par exemple

```
# module show hdf5/1.14.3/intel/2024/mpi
-------------------------------------------------------------------
/share/modules/libraries/hdf5/1.14.3/intel/2024/mpi:

module-whatis   {Loading the hdf5 1.14.3 environment.}
prereq          intel/2024/compilers
prepend-path    PATH /share/libraries/hdf5/1.14.3/intel/2024/mpi/bin
prepend-path    LD_LIBRARY_PATH /share/libraries/hdf5/1.14.3/intel/2024/mpi/lib
prepend-path    CPATH /share/libraries/hdf5/1.14.3/intel/2024/mpi/include
prepend-path    INCLUDE /share/libraries/hdf5/1.14.3/intel/2024/mpi/include
-------------------------------------------------------------------
```

`module help nom_module` affiche plus d'informations sur un module (si disponible).


## Astuces

### Raccourcis

Les sous-commandes de module peuvent être raccourcis, tant qu'il n'y a pas d'ambiguïté.
Par exemple,
```sh
module avail
module avai
module ava
module av
```

font la même chose, mais `module a` est inconnu.


`module lo` est `module load` et `module li` est `module list`, mais `module l` n'est pas valide.


### ml

`ml` est un raccourci astucieux pour la commande `module`.

- Sans argument `ml` correspond à `module list`
- Suivi d'un nom de module, `ml` correspond à `module load`, c'est-à-dire `ml gcc` charge le module gcc (la version défini comme défaut).
- Suivi d'un nom de module préfixé d'un `-`, `ml` correspond à `module unload`, c'est-à-dire `ml -gcc` décharge le module gcc.
- Suivi d'une sous-commande valide, `ml`correspond à `module`, c'est-à-dire `ml av` est identique à `module avail`.





<!--
## lmod

### module spider

### ml -->
