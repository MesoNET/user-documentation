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

netCDF Fortran 4.8.1 compilé avec gcc 11.2.0

```
module load netcdf/gnu/4.8.1
```

  </TabItem>
  <TabItem value="arm" label="ARM">

netCDF Fortran 4.8.1 compilé avec armflang 22.1

```
module load netcdf/arm/4.8.1
```

  </TabItem>
  <TabItem value="nvidia" label="NVIDIA">

netCDF Fortran 4.8.1 compilé avec nvhpc 22.9

```
module load netcdf/nvidia/4.8.1
```
  </TabItem>
</Tabs>

