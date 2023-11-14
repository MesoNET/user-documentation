---
title: parallel netCDF
sidebar_position: 9
hide_table_of_contents: true
---


## Versions installées sur TURPAN :

   - versions pnetCDF 1.12.3
        - Compilée avec netCDF 4.8.1


## Comment charger pnetCDF avec un environnement ? 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="gnu" label="GNU" default>

pnetCDF Fortran 1.12.3 compilé avec gcc 11.2.0

```
module load pnetcdf/gnu/1.12.3
```

  </TabItem>
  <TabItem value="arm" label="ARM">

pnetCDF Fortran 1.12.3 compilé avec armflang 22.1

```
module load pnetcdf/arm/1.12.3
```

  </TabItem>
  <TabItem value="nvidia" label="NVIDIA">

pnetCDF Fortran 1.12.3 compilé avec nvhpc 22.9

```
module load pnetcdf/nvidia/1.12.3
```
  </TabItem>
</Tabs>

