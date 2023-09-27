# Comment contribuer à la documentation MesoNET ? 

Si vous voulez éditer la documentation MesoNET, plusieurs options so'ffrent à vous, en fonction de vos compétences et de votre statut vis-à-vis de MesoNET. 

## Rôle vis à vis de MesoNET

### Membre de l'équipe Exploitation de MesoNET

Si vous êtes dans ce cas, vous pouvez être membre de ce projet GitLab. Créez-vous un compte externe (si vous n'êtes pas de l'UGA) sur https://gricad-gitlab.univ-grenoble-alpes.fr. Une fois fait, vous pouvez demander à rejoindre le groupe MesoNET et le projet documentation. 

### Simple utilisateur des infrastructures et services MesoNET

Dans ce cas, 2 options s'offrent à vous : 
- Soit vous vous créez un compte sur https://gricad-gitlab.univ-grenoble-alpes.fr, vous forkez le projet mesonet/documentation, vous éditez le projet forké puis vous soumettez une merge request (demande de fusion)
- Soit vous envoyezpar mail un(des) fichier(s) comportant vos éditions, [au format markdown](https://about.gitlab.com/handbook/markdown-guide/) à 

## Workflow pour les membres du projet GitLab 

Pour ceux dont le rôle est au minimum `developer` dans ce projet, vous pouvez directement contribuer au dépôt git. 

Il faut savoir qu'à chaque nouveau commit vu sur par la plateforme GitLab sur la branche principale `main` (ou groupe de commit après un `git push`), le site sera reconstruit et mis à jour. 

Voici quelques éléments à prendre en compte pour contribuer sur ce projet : 
- Si vous avez des modifications mineures à réaliser (e.g. corrections de typos, rajout d'un paragraphe dans une page déjà existante), vous pouvez directeemnt le faire sur la branche principale, en ayant, au préalable, vérifié que le site buildait bien en local (pour builder son site en local, vous pouvez voir la suite de commandes de le `.gitlab-ci.yml` du projet)
- Si vous avez des modifications plus importantes (ajout d'une section, modification de la structure, page complète demandant relecture), nous vous invitons à cérer une branche dédiée, puis quand vous êtes satisfait de votre contribution, vous soumettez une merge request. Cela permettra de faire une relecture et test de build avant intégration dans la branche principale. 

