---
title: "Environnements logiciels"
sidebar_position: 5
---

# L'environnement logiciel sur Boréale

## Logiciels disponibles

Les environnements d'applications et de librairies sont accessibles par le biais de [modules](https://services.criann.fr/services/hpc/mesonet-project/guide/modules/) (cf. commandes `module help`, `module avail`).

Pour les librairies, le chargement d'un module active les variables d'environnement pouvant être incluses dans un Makefile : se référer à la page de documentation sur les [modules](https://services.criann.fr/services/hpc/mesonet-project/guide/modules/).

Les bibliothèques ou logiciels compilés pour l'architecture vectorielle ont leur module dans le répertoire `/soft/Modules/Modules-boreale/vecto` de l'arborescence de modules (obtenue par `module avail`). Le reste permet l'usage des CPU des machines hôtes, pour les modes de calcul hybride VH-VE ou purement CPU.

### Simulation atomistique

- Quantum Espresso 6.4 pour VE, avec et sans ELPA (Eigenvalue soLvers for Petaflop Application)

### Bibliothèques de format de données

- HDF5 1.10.5, séquentielle et parallèle, pour VE et VH (version CPU compilée par Gnu et NEC MPI)
- NETCDF C 4.7.4 et NETCDF FORTRAN 4.5.3, séquentielle et parallèle, pour VE et VH (version CPU compilée par Gnu et NEC MPI)

### NEC Numeric Library Collection (NLC)

Le SDK de NEC pour l'architecture VE comprend la suite NLC, qui inclut notamment des versions optimisées de BLAS, LAPACK, SCALAPACK et FFTW (séquentielle, OpenMP ou MPI) :

- https://sxauroratsubasa.sakura.ne.jp/Documentation
- https://sxauroratsubasa.sakura.ne.jp/documents/sdk/SDK_NLC/UsersGuide/main/en/index.html


## Compilation
 
Pour l'architecture CPU (x86), les environnements du compilateur et de la librairie MPI d'Intel, OneAPI, et le compilateur de Gnu en version de 12.2.0 sont disponibles (taper `module avail`).

Pour l'architecture vectorielle NEC, un module `compilers/nec/3.5.1` est disponible pour le compilateur (commandes `nfort` / `ncc` / `nc++` pour FORTRAN / C / C++).

Pour MPI, les trois modules suivants permettent la compilation (wrappers `mpinfort` / `mpincc` / `mpinc++` pour FORTRAN / C / C++) et l'exécution (`mpirun` dans les scripts de soumission par Slurm), respectivement pour le mode hybride (VE-VH) ou VH avec le compilateur de Gnu, hybride ou VH avec le compilateur d'Intel et natif (VE) :

```
[login@boreale-front1 ~]$ module avail mpi/nec
----------------------------------------------------- /soft/Modules/Modules-boreale/vecto -----------------------------------------------------
mpi/nec/hybrid-gnu/3.0.0  mpi/nec/hybrid-intel/3.0.0  mpi/nec/native/3.0.0  

```

Pour les parties de code MPI compilées pour VH, l'option de compilation `-vh` est nécessaire avec NEC MPI.

### Echantillon d'options de compilation utiles avec le compilateur de NEC

***Optimisation de troisième niveau, interprétation de directives OpenMP et diagnostics du compilateur (rapport de vectorisation en fichiers de suffixe `.L`)***

- `-O3 -fopenmp -report-all -fdiag-vector=3`

***Ajout du profilage à l'exécution (ftrace)***

- `-O3 -fopenmp -report-all -fdiag-vector=3 -ftrace`

Le document de la formation à la prise en main de Boréale fournit davantage d'informations sur l'usage de ces options de compilation et de profilage.

La documentation de référence sur ces sujets figure sur https://sxauroratsubasa.sakura.ne.jp/Documentation#SDK