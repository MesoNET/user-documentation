---
title: "Description"
sidebar_position: 1
---

# Vesta, la machine IA/GPU AMD de MesoNET
## Description matérielle générale
### Frontales d'accès

Les deux frontales d'accès sont des serveurs [HPE ProLiant DL385 Gen10+
v2](https://buy.hpe.com/us/en/compute/proliant-rack-servers/proliant-dl300-servers/proliant-dl385-server/hpe-proliant-dl385-gen10-plus-v2-server/p/1013291283) chacun étant composé de :

| Composant           | Modèle                                                | Quantité | Réf. HPE                                                                                                                                                                                                          |
| ------------------- | ----------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Processeur          | [AMD EPYC 7313](https://www.amd.com/en/product/10991) | 2        | [P38669-B21](https://buy.hpe.com/us/en/options/processors/amd-epyc-processors/amd-epyc-processors/amd-epyc-7313-3-0ghz-16-core-155w-processor-for-hpe/p/p38669-b21)                                               |
| Mémoire             | HPE 32 Go DDR4-3200                                   | 8        | [P07646-B21](https://buy.hpe.com/us/en/options/enterprise-memory/server-memhttpsory/server-memory/hpe-32gb-1x32gb-dual-rank-x4-ddr4-3200-cas-22-22-22-registered-smart-memory-kit/p/p07646-b21)                   |
| Stockage SSD        | HPE 960 Go SAS12                                      | 2        | [P40510-B21](https://buy.hpe.com/us/en/options/drives-storage/server-solid-state-drives/server-solid-state-drives/hpe-960gb-sas-12g-mixed-use-sff-bc-value-sas-multi-vendor-ssd/p/p40510-b21)                     |
| Stockage HDD        | HPE 18 To SAS12                                       | 16       | [P37669-B21](https://buy.hpe.com/us/en/options/drives-storage/server-hard-drives/server-hard-drives/hpe-18tb-sas-12g-business-critical-7-2k-lff-lp-1-year-warranty-helium-512e-ise-multi-vendor-hdd/p/p37669-b21) |
| Contrôleur RAID SSD | Broadcom MegaRAID MR416i-a                            | 1        | [P26279-B21](https://buy.hpe.com/us/en/options/controller-controller-options/storage-raid-controllers/storage-raid-controllers/hpe-mr416i-a-gen10-plus-x16-lanes-4gb-cache-nvme-sas-12g-controller/p/p26279-b21)  |
| Contrôleur RAID HDD | Broadcom MegaRAID MR416i-p                            | 1        | [P06367-B21](https://buy.hpe.com/us/en/options/controller-controller-options/storage-raid-controllers/storage-raid-controllers/hpe-mr416i-a-gen10-plus-x16-lanes-4gb-cache-nvme-sas-12g-controller/p/p26279-b21)  |
| Adaptateur réseau   | Intel E810-XXVDA4 10/25Gb                             | 4        | [P08458-B21](https://buy.hpe.com/us/en/options/adapters/host-adapters/proliant-host-adapters/intel-e810-xxvda4-ethernet-10-25gb-4-port-sfp28-adapter-for-hpe/p/p08458-b21)                                        |

### Nœuds de calcul

Les trois nœuds de calcul sont des serveurs [HPE Apollo 6500 XL675d
Gen10+](https://buy.hpe.com/us/en/compute/apollo-systems/apollo-6500-system/apollo-6500-system/hpe-apollo-6500-gen10-plus-system/p/1013092236) chacun étant composé de :

| Composant                 | Modèle                                                                                              | Quantité | Réf. HPE                                                                                                                                                                                                                                                 |
| ------------------------- | --------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Processeur                | [AMD EPYC 7643](https://www.amd.com/en/product/10926)                                               | 2        | [P40591-B21](https://buy.hpe.com/us/en/options/processors/amd-epyc-processors/amd-epyc-processors/amd-epyc-7643-2-3ghz-48-core-225w-processor-kit-for-hpe-apollo-6500-gen10-plus/p/p40591-b21)                                                           |
| Mémoire                   | HPE 64 Go DDR4-3200                                                                                 | 32       | [P07650-H21](https://buy.hpe.com/us/en/options/enterprise-memory/server-memory/server-memory/hpe-64gb-1x64gb-dual-rank-x4-ddr4-3200-cas-22-22-22-registered-smart-memory-kit/p/p07650-h21)                                                               |
| Carte graphique           | [AMD Instinct MI210](https://www.amd.com/en/products/server-accelerators/amd-instinct-mi210)        | 10       | [R6V51A    ](https://buy.hpe.com/us/en/options/server-accelerators/computational-graphics-accelerators-for-servers/computational-graphics-accelerators-for-proliant-servers/amd-instinct-mi210-pcie-accelerator-for-hpe/p/r6v51a)                        |
| Bridge                    | [AMD Infinity Link fabric 4-way](https://www.amd.com/en/support/tech-docs/amd-infinity-fabric-link) | 2        | [R6B51A    ](https://buy.hpe.com/us/en/options/enterprise-networking-products/bridge-modules/bridge-management-modules/amd-3rd-generation-infinity-fabric-4-way-bridge-for-hpe/p/r9b39a)                                                                 |
| Stockage SSD              | HPE 480 Go                                                                                          | 2        | [P18422-H21](https://buy.hpe.com/us/en/options/drives-storage/server-solid-state-drives/server-solid-state-drives/hpe-480gb-sata-6g-read-intensive-sff-sc-multi-vendor-ssd/p/p18422-h21)                                                                 |
| Stockage NVMe             | HPE 7,68 To                                                                                         | 2        | [P47843-H21](https://buy.hpe.com/us/en/options/drives-storage/server-solid-state-drives/server-solid-state-drives/hpe-7-68tb-nvme-gen4-mainstream-performance-read-intensive-sff-sc-u-3-static-multi-vendor-ssd/p/p47843-h21)                            |
| Contôleur RAID            | HPE Smart Array E208i-a                                                                             | 1        | [804326-B21](https://buy.hpe.com/us/en/options/controller-controller-options/smart-array-controllers-smart-host-bus-adapters/smart-array-controllers/hpe-smart-array-e208i-a-sr-gen10-8-internal-lanes-no-cache-12g-sas-modular-controller/p/804326-b21) |
| Adaptateur réseau         | Intel E810-XXVDA4 10/25Gb                                                                           | 1        | [P08458-B21](https://buy.hpe.com/us/en/options/adapters/host-adapters/proliant-host-adapters/intel-e810-xxvda4-ethernet-10-25gb-4-port-sfp28-adapter-for-hpe/p/p08458-b21)                                                                               |
| Adaptateur faible latence | HPE InfiniBand HDR100                                                                               | 1        | [P23665-H21](https://buy.hpe.com/us/en/options/adapters/host-adapters/proliant-host-adapters/hpe-infiniband-hdr100-ethernet-100gb-1-port-qsfp56-pcie4-x16-mcx653105a-ecat-adapter/p/p23665-h21)                                                          |

### Commutateur Infiniband

Les nœuds de calculs sont reliés entre eux via un fabric Infiniband utilisant le commutateur suivant :

| Composant              | Modèle                                   | Réf. HPE                                                                                                                                                                                                                                          |
| ---------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Commutateur Infiniband | Mellanox InfiniBand EDR 100 Gbit/s v2 36 | [834978-B22](https://buy.hpe.com/fr/fr/options/enterprise-networking-products/switches/infiniband-switches/commutateur-g%C3%A9r%C3%A9-mellanox-infiniband-edr-100-gbit-s-v2-36-ports-c%C3%B4t%C3%A9-alimentation-flux-d'air-entrant/p/834978-b22) |

## Système d'exploitation

Le système d'exploitation Red Hat Enterprise Linux (RHEL) 8.7 est installé sur l'ensemble des nœuds du cluster.  
Voici les certifications de compatibilité matérielle avec le système d'exploitation RHEL 8.7 :
- Frontales d'accès : [HPE ProLiant DL385 Gen10+
  v2](https://catalog.redhat.com/hardware/servers/detail/117005)
- Nœuds de calcul : [HPE Apollo 6500 XL675d
  Gen10+](https://catalog.redhat.com/hardware/servers/detail/71325)

## Description du stockage
### Stockage SSD

Sur les frontales d'accès comme sur les nœuds de calcul les disques SSD sont configurés en RAID1 (miroir) via un contrôleur matériel. Ils sont destinés à l'installation du système d'exploitation.

#### Frontales d'accès

Sur les frontales d'accès, les disques SSD sont connectés au contrôleur RAID via
un BUS SAS 12G. Le contrôleur RAID est quant à lui connecté sur la carte mère
via un BUS PCIe 8X GEN4.  
Les performances théoriques des disques SSD [P40510-B21](https://buy.hpe.com/my/en/options/drives-storage/server-solid-state-drives/server-solid-state-drives/hpe-960gb-sas-12g-mixed-use-sff-bc-value-sas-multi-vendor-ssd/p/p40510-b21) sont listées ci-dessous :

| Opération                            | Valeur  | Unité |
| ------------------------------------ | ------- | ----- |
| Max Seq. Reads Throughput            | 790     | MiB/s |
| Max Seq. Writes Throughput           | 635     | MiB/s |
| Random Read Avg. Latency (4KiB, Q1)  | 130     | uSec  |
| Random Write Avg. Latency (4KiB, Q1) | 35      | uSec  |
| Random Read (4KiB, Q16)              | 105,000 | IOPS  |
| Random Write (4KiB, Q16)             | 47,000  | IOPS  |
| Max Random Read (4KiB, Q32)          | 155,000 | IOPS  |
| Max Random Wirte (4KiB, Q4)          | 48,000  | IOPS  |
Pour la source cliquer [ici](https://www.hpe.com/psnow/doc/a00001288enw.html?jumpid=in_pdp-psnow-qs).

#### Noeuds de calcul

Sur les nœuds de calcul, les disques SSD sont connectés au contrôleur RAID via un BUS SAS 6G. Le contrôleur RAID est quant à lui connecté sur la carte mère via un BUS PCIe 8X GEN3.  
Les performances théoriques des disques SSD [P18422-H21](https://buy.hpe.com/us/en/options/drives-storage/server-solid-state-drives/server-solid-state-drives/hpe-480gb-sata-6g-read-intensive-sff-sc-multi-vendor-ssd/p/p18422-h21) sont listées ci-dessous :

| Opération                            | Valeur | Unité |
| ------------------------------------ | ------ | ----- |
| Max Seq. Reads Throughput            | 510    | MiB/s |
| Max Seq. Writes Throughput           | 300    | MiB/s |
| Random Read Avg. Latency (4KiB, Q1)  | 125    | uSec  |
| Random Write Avg. Latency (4KiB, Q1) | 75     | uSec  |
| Random Read (4KiB, Q16)              | 63,000 | IOPS  |
| Random Write (4KiB, Q16)             | 15,000 | IOPS  |
| Max Random Read (4KiB, Q32)          | 65,500 | IOPS  |
| Max Random Wirte (4KiB, Q1)          | 15,400 | IOPS  |

Pour la source cliquer [ici](https://www.hpe.com/psnow/doc/a00001288enw.html?jumpid=in_pdp-psnow-qs).

## Stockage NVMe
### Frontales d'accès

Les frontales d'accès ne disposent d'aucun disque NVMe.

### Noeuds de calcul

Sur les nœuds de calcul le stockage NVMe est utilisé pour le montage de la partition `scratch`. Une répartition physique d'un disque NVMe par socket CPU est utilisée. Afin d'avoir un unique point de montage `/scratch` les deux disques NVMe sont configurés au niveau logiciel via LVM comme un unique volume logique `lv-stratch` stripé utilisant un RAID0.  
Pour les nœuds de calcul les performances théoriques du stockage NVMe [P47843-H21](https://buy.hpe.com/us/en/options/drives-storage/server-solid-state-drives/server-solid-state-drives/hpe-7-68tb-nvme-gen4-mainstream-performance-read-intensive-sff-sc-u-3-static-multi-vendor-ssd/p/p47843-h21) connecté sur une interface PCIe 4x GEN4 sont listées ci-dessous :

| Opération                            | Valeur  | Unité |
| ------------------------------------ | ------- | ----- |
| Max Seq. Reads Throughput            | 5900    | MiB/s |
| Max Seq. Writes Throughput           | 3650    | MiB/s |
| Random Read Avg. Latency (4KiB, Q1)  | 107     | uSec  |
| Random Write Avg. Latency (4KiB, Q1) | 29      | uSec  |
| Random Read (4KiB, Q16)              | 155,000 | IOPS  |
| Random Write (4KiB, Q16)             | 85,000  | IOPS  |
| Max Random Read (4KiB, Q256)         | 880,000 | IOPS  |
| Max Random Write (4KiB, Q128)        | 85,000  | IOPS  |

Pour la source cliquer [ici](https://www.hpe.com/psnow/doc/a00001288enw.html?jumpid=in_pdp-psnow-qs).

## Stockage HDD
## Frontales d'accès

Sur les frontales d'accès le stockage HDD est configuré en RAID6 (double parité) via le contrôleur matériel. Le contrôleur matériel utilise une interface PCIe x16 GEN4 avec la carte mère. Les HDD utilisent quant à eux une interface SAS 12G avec le contrôleur RAID. Tous les disques HDD sont identiques [P37669-B21](https://buy.hpe.com/us/en/options/drives-storage/server-hard-drives/server-hard-drives/hpe-18tb-sas-12g-business-critical-7-2k-lff-lp-1-year-warranty-helium-512e-ise-multi-vendor-hdd/p/p37669-b21)  
La configuration RAID6 est basée sur la création d'un unique volume RAID contenant 15 HDD physiques sur les 16 disponnibles. Le dernier disque est utilisé comme disque de récupération "global spare". Du fait de l'utilisation d'un RAID6 nous avons par frontale d'accès :
  - Un stockage utile de (18 x 15 - 2) = 234 To
  - Une tolérance aux pannes de deux disques
  - Une résilience supplémentaire du fait de l'utilisation d'un disque de
   "global spare". En effet cela permet au RAID6 de reconstruire les
   données perdues sur le disque de "global spare", garantissant ainsi la
   disponibilité continue des données en cas de double panne de disque.

Les volumes sont partagés par NFS sur l'ensemble des machines du cluster.  
Sur la seconde frontale d'accès, le stockage HDD est configuré de manière équivalente à celui de la première frontale, il sert de sauvegarde aux données de la première frontale.

## Réseau ethernet

Afin d'augmenter la bande passante utile lors de multiples connexions TCP
simulatanées, nous utilisons de l'agrégation de liens (LACP) sur les cartes
réseau ethernet.

## Réseau Infiniband

La taille maximale de la MTU pour le commutateur IB est de 4 KB.
