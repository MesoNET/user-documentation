# Jupyter
Il est possible d'avoir accès Jupyter via le portail d'accès Phileas.

Demandez les ressources que vous souhaitez dans vos applications interactives, et sélectionnez l'environnement micromamba qui vous intéresse.

Il y a 3 niveaux de détails dans les environnements :
1. Les environnements _GLOBAL_, disponibles pour tous les utilisateurs, par les administrateurs
2. Les environnements _TEAM_, disponibles uniquement pour les utilisateurs d'un même projet
3. Les environnements _USER_, disponibles uniquement pour vous



Il est possible de créer des environnements avec micromamba, en fournissant un fichier YAML de définition d'environnement permettant de décrire les dépendances.

Une fois ce fichier créé, vous pourrez créer votre environnement avec :

Pour un environnement USER :
```bash
micromamba create --file="myenvironment.yml" --name="myenvironment" --root-prefix=/micromamba/$USER/
```


Pour un environnement TEAM (pour l'équipe xxx) :
```bash
micromamba create --file="myenvironment.yml" --name="myenvironment" --root-prefix=/micromamba/teams/xxx/
```


Des exemples de fichiers d'environnement sont décrits ci-dessous.


:::info
Pour que votre environnement soit visible dans Jupyter, il faut que les paquets suivants soient installés :
- jupyter
- jupyterlab
- ipykernel
- ipywidgets
:::


## Environnements globaux
### Data-science
```yml
name: data-science

channels:
  - conda-forge

dependencies:
  # Required dependencies
  - python=3.13
  - jupyter
  - jupyterlab
  - ipykernel
  - ipywidgets
  # Additional libraries
  - numpy
  - scipy
  - pandas
  - scikit-learn
  - scikit-image
  - matplotlib
  - seaborn
  - plotly
  - bokeh
  - altair
  - sympy
  - numba
  - cython
  - dask
  - pytables
  - pillow
  - openpyxl
```

### Pytorch
```yml
name: pytorch

channels:
  - conda-forge

dependencies:
  # Required dependencies
  - python=3.13
  - jupyter
  - jupyterlab
  - ipykernel
  - ipywidgets
  # Additional libraries
  - numpy
  - scipy
  - pandas
  - scikit-learn
  - scikit-image
  - matplotlib
  - seaborn
  - plotly
  - bokeh
  - altair
  - numba
  - cython
  - pip:
      - torch
      - torchvision
```
