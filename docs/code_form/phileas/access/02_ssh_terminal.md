# Accéder via SSH

:::info
Cette méthode d'accès est préconisée pour les enseignants, chercheurs, et toute autre personne étant habituée à la connexion SSH avec son PC. Pour tout autre utilisateur, nous recommandons __très fortement__ d'utiliser le Shell disponible [directement sur le portail](./portal/05_cluster.md)
:::


Sur Phileas, inutile de gérer des clés SSH. Toute connexion avec SSH se fait via une authentification via le Web. Ainsi, sans aucune configuration de votre côté, vous pouvez simplement faire :

```bash
ssh <myusername>:Login@warpgate.phileas.ec-nantes.fr

# Exemple
ssh pbondial@ec-nantes.fr:Login@warpgate.phileas.ec-nantes.fr
```

En remplaçant `<myusername>` par votre nom d'utilisateur de la fédération Renater (ou votre nom d'utilisateur IAM local). __Le suffixe `:Login` est nécessaire.


:::info
Vous pouvez également ajouter ce bloc dans votre configuration SSH :

```
Host Phileas
  Hostname warpgate.phileas.ec-nantes.fr
  User <myusername>:Login
```

Pour ensuite vous connecter avec `ssh Phileas`.

:::

Une fois la commande lancée, vous verrez un lien de connexion apparaître et une clé de sécurité :

```
[pablo@pcici02:~]$ ssh pbondial@ec-nantes.fr:Login@warpgate.phileas.ec-nantes.fr
Warpgate authentication
-----------------------------------------------------------------------
Please verify the SSH authentication request in your browser.
https://warpgate.phileas.ec-nantes.fr/@warpgate#/login/474e9734-87b8-4b10-ae8d-bb83ca46b231

Make sure you're seeing this security key: A D D 6
-----------------------------------------------------------------------

(pbondial@ec-nantes.fr:Login@warpgate.phileas.ec-nantes.fr) Press Enter when done: 
```

Cliquez sur le lien pour vous authentifier, vérifiez que vous voyez bien la même clé de sécurité :

![Modifier les fichiers](/img/phileas/warpgate_code.png)

Et cliquez sur _approve_. De retour dans votre terminal, appuyez sur la touche _Entrée_  et vous serez connecté.
