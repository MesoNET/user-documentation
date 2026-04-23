---
title: "Images"
---

Les images sont des modèles de volume système qui servent à l'instanciation d'une VM.
Une nouvelle VM ne fait pas une installation mais elle va se baser sur une image pour initialiser le contenu du volume système avant de le personnaliser.

## Images disponibles (novembre 2024)
Quelques images de systèmes GNU/Linux standards sont mises à disposition et peuvent être listées grâce à la commande `openstack image list` :
```bash
openstack image list
+--------------------------------------+----------------------------------------------+--------+
| ID                                   | Name                                         | Status |
+--------------------------------------+----------------------------------------------+--------+
| 19a1d9f1-d397-492f-9428-0167779cda0f | cirros-0.5.2-x86_64                          | active |
| b7368135-2aae-4ce5-9a00-c7fea4a637ad | debian-10-buster-x86_64                      | active |
| 0040734d-a17d-400b-b18c-efc60b4c636f | debian-10-x86_64                             | active |
| d56a0d26-b3b8-4db9-937a-1e7f1691d304 | debian-11-bullseye-x86_64                    | active |
| 54e3e595-162b-4a5e-b141-481ad70c1204 | debian-12-bookworm-x86_64                    | active |
| b1effd7d-28ee-4897-9d16-2b77fb18d9ef | debian-12-generic-amd64-nvidia-gpu-drivers   | active |
| 8ebf61ed-f060-4d92-83ad-49145bcef6a8 | ubuntu-18.04-bionic-x86_64                   | active |
| 62254e4b-86f6-4cec-871f-8ce47db3e99c | ubuntu-18.04-docker-x86_64                   | active |
| 830d0019-70c9-4c19-993b-fb221f478a97 | ubuntu-18.04.4-bionic-x86_64-unet            | active |
| 880c4d5b-a96b-4a41-bcfc-d9590d73641c | ubuntu-18.10-cosmic-x86_64                   | active |
| 20981160-045e-4264-8726-aacc10148e6a | ubuntu-19.10-eoan-x86_64                     | active |
| de3e88ed-ea89-4936-a8e9-2c3ef2c29425 | ubuntu-19.10-eoan-x86_64                     | active |
| b891cdbb-9083-4fb1-879b-48630a0ab05a | ubuntu-20.04-focal-x86_64                    | active |
| d0e60a55-3e2c-4fdd-a503-e97a10142dad | ubuntu-20.04-focal-x86_64-nvidia-gpu-drivers | active |
| 74147e8f-bc38-4135-8a9e-628f92a6cb15 | ubuntu-22.04-jammy-x86_64                    | active |
| c76f8140-6d7b-4078-b19d-d385d8c3be05 | ubuntu-22.04-jammy-x86_64-nvidia-gpu-drivers | active |
| c3a4c629-4654-4258-87b0-72215608016d | ubuntu-22.04-jammy-x86_64-nvidia-gpu-drivers | active |
| 67b9652e-a0d1-4b05-9782-aea086b66b01 | ubuntu-24.04-noble-x86_64                    | active |
| 12702ee5-2340-42de-becb-26f53cb0bd7a | ubuntu-24.04-noble-x86_64-nvidia-gpu-drivers | active |
+--------------------------------------+----------------------------------------------+--------+
```

## Créer sa propre image
Il est également possible de créer sa propre image avec `openstack image create`
``` bash
openstack image create \
    --public \
    --disk-format qcow2 \
    --container-format bare \
    --file /tmp/hurd-sid-i386.img  \
    hurd-sid-i386.img
```
:::note
Pour être démarrée directement, celle-ci doit-être *cloud-ready* (avec cloud-init).
:::
