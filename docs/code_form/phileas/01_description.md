---
title: Description
---

## Noeuds de calcul

| Node Name | Number of nodes | Node specification | RAM | Cores | GPUs? |
|---|---|---|---|---|---|
|mnode[201-230]|30|2x Intel Xeon 48c @2.1GHz|256 Go|96 cores|❌ No
|mnode[2001-2002]|2|2x Intel Xeon 48c @2.1GHz|2048 Go|96 cores|❌ No
|mvisu[1-2]|2|2x Intel Xeon 48c @2.1GHz|512 Go|96 cores|✅ 2x Nvidia A40 48Go
|TOTAL|34 nodes||12800 Go|3264 cores||


## Réseau

| Network technology | Network speed | Network usage |
|---|---|---|
|InfiniBand|200 Gb/s|Fast interconnect for HPC storage and MPI communications
|Ethernet|1Gb/s|SSH Network to access compute nodes


## Stockage

| Storage technology | Storage capacity | Storage usage |
|---|---|---|
|IBM Spectrum Scale (formerly GPFS)|713To|HPC short-term storage

## Répertoires
| Path | Usage 
|---|---|
|`/home/<your_username>`|Home storage for lightweight data (codes, etc.)
|`/projects/<your_project>`|Project storage for lightweight data to share with your team (codes, etc.)
|`/scratch/<your_username>`|Computing scratch for temporary data when running jobs
|`/softs`|Read-only directory to host installed software on Phileas