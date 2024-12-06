# Mise en place de la configuration SSH

Dans l'email que vous aurez reçu contenant vos certificats, vous trouverez toutes les informations nécessaires pour mettre en place votre configuration SSH. Suivez à la lettre l'email, en ne changeant pas les noms de fichiers si vous ne savez pas ce que vous faites.

:::warning

L'utilisation de certificats SSH augmente grandement la sécurité de tous les échanges. La mise en place de ceux-ci font que vous ne devriez **JAMAIS** avoir le message de SSH indiquant :

```
The authenticity of host 'XXXXX (XXXX)' can't be established.
ED25519 key fingerprint is SHA256:ghmAYFqYN+MWBnuxtcXXX....
This key is not known by any other names.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

Si vous obtenez ce message, il est impératif que vous suiviez bien la section du mail concernant le fichier ``known_hosts``.

:::