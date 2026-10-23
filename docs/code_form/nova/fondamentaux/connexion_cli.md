---
title: "Connexion avec le CLI"
sidebar_position: 3
---


Pour utiliser OpenStack en ligne de commande il faut installer le client **openstack** sur votre machine, qui est un programme Python.

# Environnement virtuel

:::note
L'installation dans un environnement virtuel spécifique est facultative mais recommandée par les bonnes pratiques.
:::

Le module *venv* est habituellement installé dans les versions récentes de Python. Créez votre environnement virtuel, par exemple gricad-nova-env.
``` bash
python -m venv gricad-nova-env
```

Enfin, activez cet environnement virtuel.
```bash
source gricad-nova-env/bin/activate
```
   

# CLI Openstack

## Installation du client

Installez le client openstack, [documentation du module](https://pypi.org/project/python-openstackclient/).
``` bash
pip install python-openstackclient
```

Vous pouvez vérifier que le client est fonctionnel .

``` bash
openstack --version
```

## Authentification

:::info
Vous trouverez tous les détails de la configuration du client pour s'authentifier à OpenStack [ici](https://docs.openstack.org/python-openstackclient/latest/configuration/index.html#configuration-files).
:::

Pour vous connecter avec le CLI ou via les APIs, deux méthodes existent :

- **Variables d'environnement / fichier RC** : un fichier RC est téléchargeable sur *Horizon* (menu utilisateur en haut à droite). Il suffit de le sourcer. Cette méthode est pratique en interactif, mais le fichier RC s'appuie sur l'authentification OIDC de votre compte et n'est pas adapté à un usage non interactif (CI, runner, cron).
- **Fichier `clouds.yaml` avec une Application Credential** : méthode recommandée pour le CLI, les scripts et les runners. Le fichier se place dans `~/.config/openstack/clouds.yaml`.

:::warning Le clouds.yaml du profil utilisateur ne suffit pas
Le fichier `clouds.yaml` téléchargeable depuis le menu utilisateur en haut à droite d'Horizon (profil) n'est **pas** utilisable directement pour le CLI non interactif : il dépend de la session OIDC et renvoie souvent `HTTP 401`. Pour le CLI et l'automatisation, utilisez le `clouds.yaml` généré lors de la création d'une **Application Credential** (voir ci-dessous).
:::

### Créer une Application Credential et récupérer le `clouds.yaml`

Pour en savoir plus sur les Application Credentials : [documentation OpenStack](https://docs.openstack.org/keystone/latest/user/application_credentials.html).

1. Dans Horizon : **Identité > Identifiants d'application**.
2. Cliquez sur **Créer un identifiant d'application**.
3. Choisissez un nom et le rôle :
   - `member` pour un usage complet (création/suppression de ressources) ;
   - `reader` pour un usage en lecture seule.
4. À la création, Horizon propose de **télécharger le fichier `clouds.yaml`** pré-rempli. Téléchargez-le immédiatement : le secret de l'Application Credential n'est affiché qu'une seule fois.
5. Placez-le dans `~/.config/openstack/clouds.yaml` sur la machine où vous exécutez le CLI (votre poste ou le runner).
6. Vérifiez le nom du cloud (la clé sous `clouds:`) et testez :

```bash
openstack --os-cloud <nom_du_cloud> token issue
```

Si la commande renvoie un token, l'authentification fonctionne. Vous pouvez ensuite lancer vos commandes :

```bash
openstack --os-cloud <nom_du_cloud> server list
openstack --os-cloud <nom_du_cloud> floating ip list
```

![Création d'un identifiant d'application](/img/nova/nova_creer_app_cred.png?classes=shadow)

![Choix du rôle](/img/nova/nova_creer_app_cred2.png?classes=shadow)

![Téléchargement du clouds.yaml](/img/nova/nova_creer_app_cred3.png?classes=shadow)

### En cas de `HTTP 401`

- Vérifiez que le fichier s'appelle bien `clouds.yaml` (et non `clouds.yml`) et qu'il est dans `~/.config/openstack/`.
- Vérifiez que vous êtes bien l'utilisateur qui lance la commande : le fichier doit être dans son `$HOME` (`echo $HOME`), pas dans celui d'un autre compte.
- Vérifiez qu'il n'y a pas un autre `clouds.yaml` dans le répertoire courant ou dans `/etc/openstack/` qui serait chargé à la place.
- Vérifiez que `--os-cloud <nom_du_cloud>` correspond à la clé sous `clouds:` dans le fichier.
- Vérifiez qu'aucune variable `OS_*` ou `OS_CLOUD` ne vient écraser la configuration : `env | grep OS_`.
- Vérifiez que l'Application Credential n'a pas expiré et qu'elle a bien le rôle `member` (ou `reader`).
- Si le 401 persiste, recréez l'Application Credential et remplacez le `clouds.yaml`.
- Le `clouds.yaml` du profil utilisateur (menu en haut à droite) ne convient pas : utilisez celui de l'Application Credential.

### Où placer le `clouds.yaml` ?

- **Sur votre poste local** : pour diagnostiquer et lancer le CLI manuellement.
- **Sur le runner GitLab** : uniquement si le job exécute Terraform ou le CLI OpenStack. Ne commitez jamais le `clouds.yaml` dans le dépôt. Utilisez les variables CI/CD GitLab (`OS_AUTH_TYPE=v3applicationcredential`, `OS_AUTH_URL`, `OS_APPLICATION_CREDENTIAL_ID`, `OS_APPLICATION_CREDENTIAL_SECRET`, etc.) ou générez le fichier au moment du job à partir de variables protégées.

### Récupérer le fichier RC (méthode interactive)

Le fichier RC reste utile pour un usage interactif. Cliquez sur votre login en haut à droite de l'interface web, puis téléchargez le fichier RC.

![fichierRC](/img/nova/Nova_fichierRC.png?classes=shadow)

Puis sourcez-le :

```bash
source <fichier_rc>.sh
```

:::note
Le fichier RC utilise l'authentification OIDC. Il peut donc demander une authentification interactive et n'est pas adapté aux jobs CI ou aux runners.
:::

## Mise à jour de modules

Il faudra de temps en temps mettre à jour les modules de votre environnement car ils ne sont pas gérés par la distribution.
``` bash
pip install -U MODULE_NAME
```
