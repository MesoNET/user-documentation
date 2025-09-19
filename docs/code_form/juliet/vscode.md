---
title: "Utiliser VS code server"
sidebar_position: 8
---

### Téléchargement

```
wget https://code-server.dev/install.sh
chmod +x install.sh
```

### Installation

```
sh install.sh --method standalone --prefix ${HOME}/vscode-server
```

### Lancer un serveur VS Code

Premièrement, obtenez un accès sur un noeud de calcul de Juliet (juliet2, juliet3 ou juliet4)

Nous recommandons l'utilisation de la fonction salloc détaillée [ici](https://slurm.schedmd.com/salloc.html)

Lancement avec authentification par mot de passe:
```
code-server --port 5871 --host 0.0.0.0
```
Le mot de passe à entrer se trouve au chemin ${HOME}/.config/code-server/config.yaml



Lancement sans authentification:

```
code-server --port 5871 --host 0.0.0.0 --auth none
```


### Se connecter à un serveur VS code

Premièrement, ouvrez un tunnel SSH entre un noeud de calcul (juliet2, 3 ou 4)

```
ssh -N -L 5871:{compute_node}:5871 {user}@juliet.mesonet.fr
```

Ensuite vous pouvez vous connecter via votre navigateur Web à l'adresse [http://localhost:5871](http://localhost:5871)

:::info
Le port ne peut être utilisé que par une personne à la fois. Si celui si est occupé, vous pouvez remplacer 5871 par n'importe quel nombre entre 5000 et 7999
:::