---
title: "Noeud de visulation"
sidebar_position: 6
---

# Utilisation du noeud de visualisation 

Ce noeud permet de visualiser vos résultats de calcul à distance, directement sur le cluster et évite de les copier sur votre poste de travail. 
L’accès se fait en deux étape :

## Création d'une session 

Elle s’effectue depuis la frontale de connexion, par l’intermédiaire de la commande svisu.
```
# svisu -h
usage: svisu [-h] [--debug] [--verbose] [--desktop {xfce4,gnome}] [--geometry GEOMETRY] [--view-only-users]
             [--account {b1001}] [--time TIME] [--exclusive] [--extra-args EXTRA_ARGS]

Start TurboVNC/VirtualGL server through Slurm.

optional arguments:
  -h, --help            show this help message and exit
  --debug, -d           Debug mode. No VNC server will be executed here.
  --verbose, -v         Verbose mode.
  --desktop {xfce4,gnome}, -b {xfce4,gnome}
                        Select desktop environment.
  --geometry GEOMETRY, -g GEOMETRY
                        Select screen resolution.
  --view-only-users, -u
                        Allow view-only user(s) to connect on the session.
  --account {b1001}, -A {b1001}
                        Use the specified project.
  --time TIME, -t TIME  Select time limit (default: 00:30:00, max: 04:00:00 or 02:00:00 for exclusive mode).
  --exclusive, -n       Allocate nodes in exclusive mode.
  --extra-args EXTRA_ARGS, -B EXTRA_ARGS
                        Add extra Slurm options (ex: -B="--reservation=username_1").

```

Sans paramètres additionnels, la commande réserver une session en utilisation patagée (6 cœurs, 6 Go/coeur, pour une durée de 30 minutes).

## Accès à la session 

Il s’effectue par l’intermédiaire d’un client vnc installé sur votre poste de travail (TurboVNC ou TigerVNC par exemple).

Les paramètres de connexion (adresse IP, port de connexionVNC, mot de passe) sont communiqués par la commande svisu. 
