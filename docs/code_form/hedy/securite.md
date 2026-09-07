---
title: Exigences de sécurité d'Aix-Marseille Université
sidebar_position: 2
---
# Identification 

Les utilisteurs devront avoir une adresse e-mail institutionnelles.

# SSH

Les clefs ssh devront être de types suivants :
 - ED25519
```
ssh-keygen -t ed25519
```
 - RSA avec 4096 bits ou plus
```
ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_rsa_4096
```
