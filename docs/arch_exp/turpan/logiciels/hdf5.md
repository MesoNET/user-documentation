---
title: HDF5
sidebar_position: 4
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Versions installées sur TURPAN :

    version 1.12.2
        Compilées avec szlib 2.1.1, zlib 1.2.13
        Pour les versions parallel, compilées avec openmpi 4.1.4

## Utilitaires associés à hdf5:

    hdfview (il est préférable d’utiliser la connexion graphique) - PAS ENCORE
    h5xxxx : utilisables dès qu’un module hdf5 est chargé.

## Les variantes
<Tabs>
  <TabItem value="gnu" label="gnu" default>

### Version séquentielle:

Compilée avec gcc 11.2.0
```
module load hdf5/gnu/1.12.2-seq
```

### Version parallèle:

Compilée avec gcc 11.2.0 et openmpi 4.1.4
```
module load hdf5/gnu/parallel
```
  </TabItem>

  <TabItem value="arm" label="arm" default>

### Version séquentielle:

Compilée avec armclang 22.1
```
module load hdf5/arm/1.12.2-seq
```

### Version parallèle:

Compilée avec armclang 22.1 et openmpi 4.1.4
```
module load hdf5/arm/parallel
```
  </TabItem>

  <TabItem value="nvidia" label="nvidia" default>
 

### Version séquentielle:

Compilée avec nvc 22.9-0
```
module load hdf5/nvidia/1.12.2-seq
```

### Version parallèle:

Compilée avec nvc 22.9-0 et openmpi 4.1.4
```
module load hdf5/nvidia/parallel
```
  </TabItem>
</Tabs>




