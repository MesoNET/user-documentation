# Comment contribuer à la documentation MesoNET ? 

Si vous voulez éditer la documentation MesoNET, plusieurs options so'ffrent à vous, en fonction de vos compétences et de votre statut vis-à-vis de MesoNET. 

## Rôle vis à vis de MesoNET

### Membre de l'équipe *Support mutualisé* de MesoNET

Si vous êtes dans ce cas, vous pouvez être membre de ce projet GitHub. Une fois fait, vous pouvez demander à rejoindre le groupe MesoNET et le projet documentation. 

### Simple utilisateur des infrastructures et services MesoNET

Dans ce cas, 2 options s'offrent à vous : 
- Vous forkez le projet mesonet/documentation sur Github, vous éditez le projet forké puis vous soumettez une pull request (demande de fusion)
- Soit [vous envoyez par mail](mailto:support@mesonet.fr) un(des) fichier(s) comportant vos éditions, [au format markdown](https://about.gitlab.com/handbook/markdown-guide/)

## Workflow pour les membres du projet GitLab 

Pour ceux dont le rôle est au minimum `developer` dans ce projet, vous pouvez directement contribuer au dépôt git. 

La génération dus ite se fait via le processus suivant : Sur le serveur qui publie le site, une tâche CRON réalsie un `git pull` toutes les heures et relance le build du site à partir de la branche `main`. Ainsi, tout changement sur la branche `main` est répercuté dans l'heure qui suit sur le site web publié. 

**Voici quelques éléments à prendre en compte pour contribuer sur ce projet :**

- Si vous avez des modifications mineures à réaliser (e.g. corrections de typos, rajout d'un paragraphe dans une page déjà existante), vous pouvez directement le faire sur la branche principale, en ayant, au préalable (*i.e.* avant `git push`), vérifier que le site buildait bien en local
- Si vous avez des modifications plus importantes (ajout d'une section, modification de la structure, page complète demandant relecture), nous vous invitons à cérer une branche dédiée, puis quand vous êtes satisfait de votre contribution, vous soumettez un pull request. Cela permettra de faire une relecture et test de build avant intégration dans la branche principale. 
- Si vous n'êtes pas sûr, n'hésitez pas à en parler au niveau du groupe *Support Mutualisé*. 
