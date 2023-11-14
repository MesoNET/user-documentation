---
title: netCDF
sidebar_position: 8
hide_table_of_contents: true
---



## Versions installées sur TURPAN :

   - versions netCDF-C 4.8.1 et netCDF-Fortran 4.6.0
        - Compilée avec hdf5-gnu/1.12.2-parallel,  gcc 11.2.0 et openmpi 4.1.4
        - ATTENTION:
            - Les versions arm et nvidia C reposent sur netCDF/gnu/4.8.1
            - Pour les environnements arm et nvidia, seul netCDF-FORTRAN a été recompilé


## Comment charger FFTW avec un environnement ? 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="gnu" label="GNU" default>

Compilé avec gcc 11.2.0 et openmpi 4.1.4

```
module load fftw/gnu/3.3.10
```

  </TabItem>
  <TabItem value="arm" label="ARM">

Compilé avec armclang 22.1 et openmpi 4.1.4

```
module load fftw/arm/3.3.10
```

  </TabItem>
  <TabItem value="nvidia" label="NVIDIA">

Compilé avec nvc 22.9-0 et openmpi 4.1.4

```
module load fftw/nvidia/3.3.10
```
  </TabItem>
</Tabs>

