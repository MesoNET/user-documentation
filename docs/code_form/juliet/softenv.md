---
title: "Environnements logiciels"
sidebar_position: 5
---

# Environnements logiciels

## Spack

Spack est pris en charge sur Juliet.

Pour charger un *module* à une certaine *version* avec un *compilateur* à une certaine *version_complilateur* vous pouvez utiliser la commande:

```
spack load module@version%compilateur@version_compilateur

```

:::info

Le compilateur est en général gcc.

:::

Pour trouver les modules installés vous pouvez utiliser la commande: 

```
spack find
```
ou, avec le nom de *module*

```
spack find module
```