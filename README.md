# Projet GitLab du site de documentation Mesonet. 

Le site web de la documentation est construit à l'aide de [Docusaurus 2](https://docusaurus.io/), un générateur de site statique, basé sur nodejs. 

Le contenu, en markdown (avec possibilité d'inclure du html) est situé dans le dossier `/docs`.

Les images sont à stocker dans le dossier `/static/img/`. Pour linker une image dans le contenu markdown, il faut utiliser le chemin `/img/...`. 


### Édition et prévisualisation locale 

#### Prérequis
 
* `nodejs >=16.14` : https://nodejs.org/en/download/package-manager
* `yarn` ou `npm` installés sur la machine cible. 

#### HOWTO

- On clone ce dépôt : `git clone https://gricad-gitlab.univ-grenoble-alpes.fr/mesonet/documentation.git mesodoc` 
- on installe docusaurus : `cd mesodoc && yarn install` ou `cd mesodoc && npm install`
- On édite ce que l'on souhaite
- On construit le site et lance un serveur web localement pour le prévisualiser : `yarn serve` ou `npm run serve`

