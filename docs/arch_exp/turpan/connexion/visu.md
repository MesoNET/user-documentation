---
title: Visualisation
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Visualisation graphique à distance

## Pourquoi la visualisation à distance ?
Les logiciels scientifiques génèrent souvent de grosses quantités de données, qu’il sera nécessaire de post-traiter, par exemple en utilisant des logiciels de visualisation.

Ces logiciels demandent des ressources non négligeables (carte graphique, mémoire) pas toujours disponibles dans les laboratoires. Il est par ailleurs laborieux de rapatrier systématiquement en local de gros fichiers de données.

La visualisation à distance permet de résoudre ces difficultés :

- Les fichiers n’ont pas besoin d’être transférés
- Les ressources graphiques nécessaires se trouvent à Calmip, il n’y a pas besoin de grosse station graphique au laboratoire pour visualiser les données, même en 3D, dans de bonnes conditions

:::caution

ATTENTION - VERSION DE TUBOVNC REQUISE >= 3.0.2 !

:::

## Prérequis

<Tabs>
  <TabItem label="Debian/Ubuntu(deb)" value="deb" default>

### Installation de Java
Il suffit d'installer les paquets default-jre et son greffon pour les navigateurs internet: icedtea-plugin ou icedtea-netx (en fonction de la version de la distribution)

Si vous avez des soucis avec icedtea, merci d’installer la version d’Oracle sur votre système.

- Aide détaillée d'installation : Installer java propriétaire depuis le site officiel
- La version binaire (Linux x64) de java pour cette méthode est à télécharger depuis ici
- Un résumé synthétique des commandes :


```
sudo apt-get install java-package
make-jpkg jre-8u231-linux-x64.tar.gz
sudo dpkg -i oracle-java8-jre_8u231_amd64.deb java -version
```

### Installation de TurboVNC
- Le logiciel turboVnc version >= 3.0.2 doit être installé sur votre poste de travail, vous pouvez la télécharger ici
- Installation

```
dpkg -i turbovnc_3.0.3_amd64.deb
```

- Et en cas de dépendances manquante :
```
apt-get -f install
```

- Exécution
```
/opt/TurboVNC/bin/vncviewer
```

  </TabItem>
  <TabItem label="Fedora/Redhat(rpm)" value="rpm">


Il suffit d'installer les paquets default-jre et son greffon pour les navigateurs internet: icedtea-plugin ou icedtea-netx (en fonction de la version de la distribution)

Si vous avez des soucis avec icedtea, merci d’installer la version d’Oracle sur votre système.

- Aide détaillée d'installation : Installer java propriétaire depuis le site officiel
- La version binaire (Linux x64) de java pour cette méthode est à télécharger depuis ici
- Un résumé synthétique des commandes :


```
sudo rpm -ivh jre-8u73-linux-x64.rpm
```

### Installation de TurboVNC
- Le logiciel turboVnc version >= 3.0.2 doit être installé sur votre poste de travail, vous pouvez la télécharger ici
- Installation

```
dnf install turbovnc-3.0.3.x86_64.rpm
```

- Exécution
```
/opt/TurboVNC/bin/vncviewer
```




  </TabItem>
  <TabItem label="Windows/MacOS" value="wm">

### Installation de Java

Installer la version d’Oracle sur votre système.

- La page de téléchargement du logiciel
- Double cliquer pour installer !

### Installation de TurboVNC

- Le logiciel turboVnc version >= 3.0.2 doit être installé sur votre poste de travail, vous pouvez la télécharger ici
- Double cliquer sur l'installeur pour installer
- Double cliquer sur l'icone vncviewer pour exécuter


  </TabItem>
</Tabs>





## Comment se connecter ? (en 3 petites étapes)

### Étape 1 :
Connectez-vous sur Turpan par ssh voir ici pour avoir plus de détails. Par exemple :
```
ssh username@turpanlogin
```

### Étape 2 :
Dans un terminal sur turpan executer la commande suivante pour démarrer une session de visualisation :
```
runVisuSession.sh
```
Il s’agit d’une session interactive, qui ne doit pas être interrompue : si vous l’interrompez (par CTRL-C par exemple ou en fermant la fenêtre), la connexion graphique s’interrompt.

Exemple de bannière :

```
[  1/150] Queuing and waiting for visu session resources allocation (6043) ...

Desktop 'VNC-SESSION-estana' started on display turpanvisu0:2 ...

#===========================================================================
|
| Point TurboVnc viewer on your computer to : turpanlogin.calmip.univ-toulouse.fr:5902
|            Full control one-time password : 91668926
|
+---------------------------------------------------------------------------
| From a shell on a login node, to get a new full control one-time password,
| use :
|    ssh turpanvisu0 '/opt/TurboVNC/bin/vncpasswd -o -display :2'
|
#===========================================================================
| CAUTION : DO NOT CLOSE this slurm job or this terminal !
#===========================================================================

+---------------------------------------------------------------------------
| CONNECTION INFO : xxx.xxx.xxx.xxx (FROM AN AUTHORIZED IP) [turpanvisu0]
+---------------------------------------------------------------------------
| TurboVnc 3.0.2 or later is needed on your computer to access visu session
| See https://sourceforge.net/projects/turbovnc/files/
+---------------------------------------------------------------------------

[\] - Press CTRL-C to quit
```

### Étape 3 :
Sur votre poste, lancez l’exécutable suivant de turboVNC :
```
vncviewer
```

- Entrez dans le champ VNC Server l’adresse donnée par le script ci-dessus : turpanlogin.calmip.univ-toulouse.fr:5902 (dans notre exemple)

![Capture d'écran du formulaire d'engistrement dans le SSO MesoNET](/img/turpan/turbo_1.png)

- Entrez dans le champ Password le jeton d'authentification donné par le script ci-dessus : 91668926 (dans notre exemple)

![Capture d'écran du formulaire d'engistrement dans le SSO MesoNET](/img/turpan/turbo_2.png)

- Le gestionnaire de fenêtre utilisé est gnome-classic. Cliquer sur "Applications" pour faire appaître le menu des applications.

:::caution

Si vous avez un écran noire avec l'heure, pressez la touche "entrée" de votre clavier

:::

- Si vous fermez la fenêtre du vncviewer, vous devrez générer de nouveau un jeton d'authentification avec la commande donnée par le script ci-dessus (dans notre exemple) : 
```
ssh turpanvisu0 '/opt/TurboVNC/bin/vncpasswd -o -display :2'
```

:::caution

Toutes les communications entre votre poste de travail et le nœud graphique sont chiffrées

:::

- Pour avoir accès aux caractères de contrôle, passer en plein écran, etc. pressez sur la touche F8 pour afficher le menu VNC (Ctrl-Alt-MAJ F pour quitter le plein écran)

## Autres informations utiles

### Quelques raccourcis clavier:
Par défaut les touches de contrôle ne sont pas utilisables car elles sont interceptées par votre poste de travail. Mais cela peut être modifié (à condition d’utiliser 4 doigts !) par :
```
CTRL-SHIFT-ALT G
```

Attention dans ce cas la session graphique a tout le contrôle de votre clavier, du coup c’est votre poste de travail qui ne répondra pas à votre clavier ni dans certains cas à la souris (on a l’impression qu’il est planté, mais ce n’est pas vrai). Dans ce cas, pressez à nouveau sur CTRL-SHIFT-ALT G pour retrouver le fonctionnement normal.

Si vous travaillez longtemps sur la visualisation, vous aimerez probablement passer en plein écran :

```
CTRL-SHIFT-ALT F
```

### Plus de résolution, plus de mémoire, plus de processeurs:
Pour la quantité de mémoire allouée (5000Mo par défaut) ou le nombre de cœurs utilisés (1 cœur par défaut), vous pouvez utiliser les options suivantes avec la commande runVisuSession.sh :

- --mem XM (max 50000M)
- --cpus-per-task Z (max 8 cœurs)
- -h Affiche l’aide

### En cas d’accès réseau difficiles:
Si vous travaillez sur un site distant, ou via une liaison de mauvaise qualité, vous aurez peut-être de mauvaises performances graphiques, au moins en 3D.

Vous avez alors la possibilité de dégrader la qualité de l’image afin d’améliorer son interactivité :

- Cliquez sur le bouton en haut à gauche de la fenêtre TurboVnc

![Capture d'écran du formulaire d'engistrement dans le SSO MesoNET](/img/turpan/turbo_3.png)


- Une fenêtre s’ouvre, vous donnant accès à deux outils permettant de jouer sur la compression jpeg : le premier diminue ou supprime les couleurs, le second joue sur la résolution

![Capture d'écran du formulaire d'engistrement dans le SSO MesoNET](/img/turpan/turbo_4.png)

### Partager sa session graphique
Il est possible de partager la session graphique : cliquez sur l’option du menu "Sharing your session", une fenêtre s’ouvrira et vous donnera la possibilité de disposer d’un mot de passe à usage unique que vous pourrez envoyer à votre correspondant pour lui permettre de travailler :

- en lecture seule : vous travaillez et vos correspondants peuvent suivre ce que vous faites, mais ils ne peuvent pas intervenir
- en lecture-écriture : travail à plusieurs sur la même session. Attention, vous donnez ainsi à votre correspondant accès à tout votre compte sur Turpan !

Vous pouvez partager la session plusieurs fois, autant de fois que de partages simultanés souhaités. Pour chaque correspondant vous devrez générer un nouveau mot de passe.

### En cas d'erreur :
Merci de décrire précisément votre problème et de mettre l'intégralité de la bannière de connexion afin que le support dispose de l'ensemble des informations nécessaires pour la résolution du problème.
S'il s'agit d'un problème de filtrage, merci de vérifier que les flux suivant sont autorisés en sortie de votre réseau :

- Depuis votre réseau vers turpanlogin1.calmip.univ-toulouse.fr (194.57.114.216) sur le port 22 (ssh) et les ports 5901 à 5932 (VNC)
- Depuis votre réseau vers turpanlogin2.calmip.univ-toulouse.fr (194.57.114.217) sur le port 22 (ssh) et les ports 5901 à 5932 (VNC)

### Comment ça marche ?
Tout cela fonctionne grâce à :

- Un nœud graphique de 220 Gb de mémoire et 14 cœurs et 1 carte NVIDIA A40 (2 noeuds au total sont disponibles)
- Le logiciel virtualGL

![Capture d'écran du formulaire d'enregistrement dans le SSO MesoNET](/img/turpan/schema.jpg)

