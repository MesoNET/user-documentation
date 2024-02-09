---
title: Conda
sidebar_position: 1
---

## Conda ou miniconda ?

conda est un gestionnaire d’environnements appelé miniconda et un ensemble de paquets utiles pour les applications scientifiques. Nous avons fait le choix d’installer miniconda seul, et de définir plusieurs environnements"types" que vous pourrez utiliser en fonction de votre projet.

Si ces environnements ne vous conviennent pas, nous expliquons ici comment construire votre propre environnement

## Charger l’environnement

```shell
module purge
module load conda/22.11.1
```

## Vérifier quels sont les environnements disponibles

```shell
conda env list
```

>```
># conda environments:  
>#base                     /usr/local/miniconda/22.11.1
>python-3.10.9            /usr/local/miniconda/22.11.1/envs/python-3.10.9
>python-tools-3.10.9      /usr/local/miniconda/22.11.1/envs/python-tools-3.10.9
>```

:::info

Le caractère ’*’ montre quel est votre environnement courant

:::

## Activer un environnement

```shell
conda activate python-3.10.9
```

>```
>(python-3.10.9) [toto@turpanlogin1 ~]$
>```

## Vérifier les paquets installés dans l’environnement courant

```shell
(python-tools-3.10.9) [toto@turpanlogin1 ~]$ conda list
```

>```
># packages in environment at /usr/local/miniconda/22.11.1/envs/python-tools-3.10.9:
># 
># Name                    Version                   Build  Channel
>_libgcc_mutex             0.1                        main
>_openmp_mutex             5.1                      51_gnu
>anyio                     3.5.0           py310hd43f75c_0
>argon2-cffi               21.3.0             pyhd3eb1b0_0
>argon2-cffi-bindings      21.2.0          py310h2f4d8fa_0     
>[...]
>```

## Rechercher un paquet à installer

```shell
(python-tools-3.10.9) [toto@turpanlogin1 ~]$ conda search tensorflow
```

>```
>Loading channels: done
># Name                       Version           Build  Channel             
>tensorflow                     2.5.0 eigen_py37h1457a7e_0  pkgs/main           
>tensorflow                     2.5.0 eigen_py38h761523d_0  pkgs/main           
>tensorflow                     2.5.0 eigen_py39hf3b6bb3_0  pkgs/main
>```

## Installer des paquets dans l’environnement courant

Pour installer une version spécifique de numpy :

```shell
(python-tools-3.10.9) [toto@turpanlogin1 ~]$ conda install numpy=1.22
```

>```
>Collecting package metadata (current_repodata.json): done
>Solving environment: failed with initial frozen solve. Retrying with flexible solve.
>Collecting package metadata (repodata.json): done
>Solving environment: done
>
>==> WARNING: A newer version of conda exists. <==
>  current version: 22.11.1
>  latest version: 23.1.0
>
>Please update conda by running
>
>    $ conda update -n base -c defaults conda
>
>Or to minimize the number of packages updated during conda update use
>
>     conda install conda=23.1.0
>
>## Package Plan ##
>
>  environment location: /usr/local/miniconda/22.11.1/envs/python-tools-3.10.9
>
>  added / updated specs:
>      - numpy=1.22
>
>
>The following packages will be downloaded:
>
>    package                    |            build
>    ---------------------------|-----------------
>    numpy-1.22.3               |  py310h983bb6b_0          10 KB
>    numpy-base-1.22.3          |  py310he6496e5_0        11.0 MB
>    ------------------------------------------------------------
>                                           Total:        11.0 MB
>
>The following packages will be DOWNGRADED:
>
>  numpy                              1.23.5-py310hce24898_0 --> 1.22.3-py310h983bb6b_0 
>  numpy-base                         1.23.5-py310h5f09236_0 --> 1.22.3-py310he6496e5_0
>
>[...]
>```

## Installer un paquet avec pip

Certains logiciels s’installent avec pip et pas avec Conda. Il est tout-à-fait possible d’utiliser pip dans un environnement conda, mais nous vous recommandons de commencer par lire [cette documentation (en anglais)](https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#using-pip-in-an-environment), qui explique les précautions à prendre.

## Pour installer un environnement spécifique à partir d'un environnement existant :

```shell
(python-tools-3.10.9) [toto@turpanlogin1 ~]$ conda create -n mon_environnement --clone python-tools-3.10.9
```

>```
>Source:      /usr/local/miniconda/22.11.1/envs/python-tools-3.10.9
>Destination: /usr/local/miniconda/22.11.1/envs/mon_environnement
>Packages: 152
>Files: 0
>
>Downloading and Extracting Packages
>
>Preparing transaction: done
>Verifying transaction: done
>Executing transaction: done
>#
># To activate this environment, use
>#
>#     $ conda activate mon_environnement
>#
># To deactivate an active environment, use
>#
>#     $ conda deactivate
>```

Activer ce nouvel environnement :

```shell
(python-tools-3.10.9) [sysinst@turpanlogin1 ~]$ conda activate mon_environnement
```

:::tip Note

Afin que tout se passe bien, et notamment l’utilisation ultérieure de pip dans votre environnement, il est préférable de cloner l’environnement base, par exemple plutôt que de créer un environnement à partir de rien avec le switch --clone base

:::

Pour installer un nouveau paquet dans cet environnement :

```shell
(mon_environnement) [toto@turpanlogin1 ~]$ conda install mon_paquet
```

## Faire le ménage dans ses environnements

Pour supprimer un de mes environnements dont je n'ai plus besoin :

```shell
(mon_environnement) [sysinst@turpanlogin1 ~]$ conda deactivate
(python-tools-3.10.9) [sysinst@turpanlogin1 ~]$ conda env remove -n mon_environnement
```

>```
>Remove all packages in environment /usr/local/miniconda/22.11.1/envs/mon_environnement:
>```

:::info

Supprimer les environnements inutiles permet d'économiser l’espace disque.

:::

## Faire le ménage dans ses paquets

Toutes ces manipulations vont remplir votre home, en particulier vous vous retrouverez avec un grand nombre de fichiers .tgz qui ne servent plus à rien une fois les paquets installés. C’est ce qu’on appelle le cache. Par prudence, commencez par une commande qui ne fera rien d’autre que de vous dire ce qui sera nettoyé :

```shell
conda clean -a --dry-run
```

Si vous souhaitez garder des tgz (pour pouvoir reproduire votre installation ailleurs par exemple), c’est le moment de les mettre en lieu sûr ! Et quand vous êtes prêts :

```shell
conda clean -a
```

Si certains paquets ont été installés avec la commande pip, vous pouvez utiliser ces commandes pour supprimer les fichiers temporaires mis en cache lors de l'installation :

* Localiser le répertoire contenant le cache : `pip cache dir`
* Purger les fichiers du cache : `pip cache purge`