---
title: Liste des conteneurs
sidebar_position: 2
---

Tous les conteneurs se trouvent dans le répertoire `/work/conteneurs`.  
Pour consulter en détail la liste des paquets installés dans un conteneur, utilisez la commande suivante :
```shell
apptainer exec /work/conteneurs/path_to/continer_name.sif pip list
```

<table>
  <thead>
    <tr>
      <th style={{ width: '5%' }}>Nom</th>
      <th style={{ width: '75%' }}>Packages principaux</th>
      <th style={{ width: '20%' }}>Chemin</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="../envpython/pytorch">PyTorch</a></td>
      <td>
        <>
          - torch (PyTorch – framework principal pour l’apprentissage profond)<br />
          - torchvision (vision par ordinateur pour PyTorch)<br />
          - torch-geometric (réseaux de neurones pour graphes)<br />
          - flash_attn (mécanismes d’attention optimisés)<br />
          - nvfuser (compilateur de fusion de NVIDIA pour PyTorch)<br />
          - cuda-python (accès direct à l’API CUDA)
        </>
      </td>
      <td>sessions-interactives/pytorch-25.03-py3-calmip-si-latest.sif</td>
    </tr>
    <tr>
      <td><a href="../envpython/tensorflow">TensorFlow</a></td>
      <td>
        <>
          - tensorflow (framework principal pour l’apprentissage profond)<br />
          - keras (API haut niveau pour TensorFlow)<br />
          - tensorrt (optimiseur d’inférence NVIDIA)<br />
          - horovod (entraînement distribué)<br />
          - jax (calcul numérique accéléré)<br />
          - tensorflow-io-gcs-filesystem (prise en charge du stockage Google Cloud)
        </>
      </td>
      <td>sessions-interactives/tensorflow-24.02-tf2-py3-calmip-si-latest.sif</td>
    </tr>
    <tr>
      <td><a href="../envpython/scikit-learn">Scikit-learn</a></td>
      <td>
        <>
          - cudf (bibliothèque de DataFrames sur GPU)<br />
          - cuml (apprentissage automatique accéléré sur GPU)<br />
          - cugraph (analyse de graphes sur GPU)<br />
          - cupy (tableaux de type NumPy sur GPU)<br />
          - dask-cuda (calcul distribué GPU avec Dask)<br />
          - xgboost (boosting de gradient accéléré GPU)
        </>
      </td>
      <td>sessions-interactives/rapids-notebooks-24.02-cuda12.0-py3.10-calmip-si-latest.sif</td>
    </tr>
    <tr>
      <td><a href="../envpython/modulus">Modulus</a></td>
      <td>
        <>
          - nvidia-modulus (framework principal pour la physique basée sur l’IA)<br />
          - nvidia-modulus.sym (extensions symboliques pour Modulus)<br />
          - onnxruntime-gpu (inférence ONNX sur GPU)<br />
          - tinycudann (réseaux de neurones rapides sur CUDA)<br />
          - torch (backend PyTorch pour Modulus)<br />
          - sympy (mathématiques symboliques)
        </>
      </td>
      <td>sessions-interactives/modulus-24.01-calmip-si-latest.sif</td>
    </tr>
    <tr>
      <td>Triton</td>
      <td>
        <>
          - Basé sur le conteneur PyTorch (tous les packages PyTorch sont inclus)<br />
          - Triton (compilateur de noyaux GPU pour l’IA/l’apprentissage automatique)<br />
          - Triton utilise LLVM pour générer du code PTX pour les GPU NVIDIA
        </>
      </td>
      <td>sessions-interactives/triton-llvm-3.3.0-calmip-si-latest.sif</td>
    </tr>
    <tr>
      <td>cuquantum_arrayfire</td>
      <td>
        <>
          - Basé sur le conteneur PyTorch (tous les packages PyTorch sont inclus)<br />
          - cuquantum-python (cuQuantum de NVIDIA)<br />
          - arrayfire (backend GPU/CPU, GPU par défaut sur les nœuds de calcul)<br />
          - pytest (framework de test Python)<br />
          - pytest-benchmark (mesures de performance)<br />
          - mpi4py (interface MPI pour Python)<br />
          - petsc (bibliothèque scientifique pour solveurs)<br />
          - petsc4py (liaison Python pour PETSc)<br />
          - slepc (bibliothèque pour problèmes de valeurs propres)<br />
          - primme (solveur PRIMME)<br />
          - slepc4py (liaison Python pour SLEPc)<br />
          - cupy (NumPy sur GPU)
        </>
      </td>
      <td>calmip/custom_users/cuquantum_arrayfire.sif</td>
    </tr>
  </tbody>
</table>
