---
title: "Environnements logiciels"
sidebar_position: 4
---

# Environnements logiciels d'Arctic
## IA - Deep Learning
Les logiciels sont installés sous environnements python3, pour l'architecture des GPU NVIDIA d'Arctic (A100 et H200) :
- Frameworks de deep learning **PyTorch** et **TensorFlow**
- Framework de machine learning **scikit-learn**
- Outils de traitement d'image **OpenCV** et **scikit-image**
- Outils d'analyse de données **pandas**

Une [page dédiée](https://services.criann.fr/services/hpc/cluster-austral/guide/ia-deep-learning/) recense les différentes versions et leurs modules asscociés (commande utile : `module avail aidl`) 

## HPC
### Compliation
Les liens suivants décrivent les environnements spécifiques (Cray Programming Environment) disponibles sur Arctic :
- pour la [compilation de codes CPU](https://services.criann.fr/services/hpc/cluster-austral/guide/#compilation)
- pour la [compilation de codes GPU](https://services.criann.fr/services/hpc/cluster-austral/guide/compil-gpu/)

Les GPU AMD sont consacrés à des codes de simulation programmés par API HIP, OpenACC (FORTRAN et Cray Compiler uniquement), OpenMP target, SYCL ou OpenCL.

### Applications
Des codes métier de référence sont aussi disponibles pour différents domaines tels que mécanique et CFD (exemple : **OpenFOAM**), climat (exemple : **WRF**), simulation atomistique (exemple : **Gromacs**) ou mathématiques (exemple : **R**).

Voir les [commandes utiles](https://services.criann.fr/services/hpc/cluster-austral/guide/#logiciels-disponibles) (telles que `module load cfd_fem`, `module load atomic_simu`) permettant de lister les logicels disponibles par catégorie scientifique ou technique.
