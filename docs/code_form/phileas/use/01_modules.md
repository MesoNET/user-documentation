# Logiciels

Sur Phileas, vous devez utiliser le programme `module` pour charger les différents logiciels dont vous avez besoin.

Vous pouvez voir la liste de tous les logiciels disponibles sur Phileas avec la commande :
```bash
$ module avail
--------------------------------------------------------------- /usr/share/Modules/modulefiles/libraries ---------------------------------------------------------------
ucx/1.17.0  

--------------------------------------------------------------- /usr/share/Modules/modulefiles/compilers ---------------------------------------------------------------
gcc-14.1.0  go-1.22.4  

----------------------------------------------------------------- /usr/share/Modules/modulefiles/tools -----------------------------------------------------------------
apptainer-1.3.2  

--------------------------------------------------------------- /usr/share/Modules/modulefiles/parallel ----------------------------------------------------------------
openmpi-4.1.6_ucx-1.17.0_gcc-8.5.0
```


Une fois que vous avez décidé du module à charger, utiliser la commande suivante pour l'ajouter à votre environnement (persiste uniquement pour la session SSH en cours):
```bash
module load apptainer-1.3.2
```

:::info
Notez bien que si vous souhaitez utiliser un programme dans vos scripts Slurm, il faudra ajouter la ligne `module load xxxxx` dans votre script, pour que le logiciel soit chargé dans votre job.
:::