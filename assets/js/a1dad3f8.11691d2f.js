"use strict";(self.webpackChunkmesodocs=self.webpackChunkmesodocs||[]).push([[5108],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:o,l[1]=s;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4999:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(4137));const a={title:"Lancer un calcul",sidebar_position:5},l=void 0,s={unversionedId:"code_form/zen/jobs",id:"code_form/zen/jobs",title:"Lancer un calcul",description:"Pour effectuer des calculs sur Zen il faut obligatoirement utiliser le gestionnaire de travaux slurm.",source:"@site/docs/code_form/zen/jobs.md",sourceDirName:"code_form/zen",slug:"/code_form/zen/jobs",permalink:"/documentation/user-documentation/code_form/zen/jobs",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Lancer un calcul",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Stockage",permalink:"/documentation/user-documentation/code_form/zen/stockage"},next:{title:"Environnement logiciel",permalink:"/documentation/user-documentation/code_form/zen/software"}},i={},u=[],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pour effectuer des calculs sur Zen il faut obligatoirement utiliser le gestionnaire de travaux ",(0,o.kt)("inlineCode",{parentName:"p"},"slurm"),"."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Pour rappel, il est strictement interdit de lancer des calculs directement sur la frontale. C\xe9pendant, vous pouvez y compiler vos codes et \xe9diter des scripts.")),(0,o.kt)("p",null,"Si vous n'\xeates pas familier avec slurm il est vivement conseill\xe9 de suivre cette ",(0,o.kt)("a",{parentName:"p",href:"/HOWTO/slurm"},"introduction g\xe9n\xe9rale \xe0 ",(0,o.kt)("inlineCode",{parentName:"a"},"slurm")," ici"),"."),(0,o.kt)("p",null,"Cette page se concentre sur les particularit\xe9s du cluster Zen."),(0,o.kt)("h1",{id:"lancer-un-job-sur-zen"},"Lancer un job sur Zen"),(0,o.kt)("p",null,"Pour ex\xe9cuter votre code sur les n\u0153uds calcul il faut soumettre un script via la commande ",(0,o.kt)("inlineCode",{parentName:"p"},"sbatch"),"."),(0,o.kt)("p",null,"Voici un exemple minimal de script slurm:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"#!/bin/bash\n#SBATCH --nodes=1\n#SBATCH --time=00:10:00\n\nhostname\nsleep 600\n")),(0,o.kt)("p",null,"Pour cr\xe9er ce script sur la frontale de Zen, vous pouvez l'\xe9diter directement sur le n\u0153ud ",(0,o.kt)("inlineCode",{parentName:"p"},"login")," (par ex. avec vi, vim, emacs, nano) ou bien l'\xe9diter localement et le copier de votre machine sur Zen (par ex. avec rsync ou scp)."),(0,o.kt)("p",null,"Supposons que votre script s'appelle ",(0,o.kt)("inlineCode",{parentName:"p"},"job.slurm"),". Vous pouvez le soumettre avec"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sbatch job.slurm\n")),(0,o.kt)("p",null,"et slurm vous repondra en donnant un identifiant unique \xe0 votre job."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"Submitted batch job 56540\n")),(0,o.kt)("p",null,"Avec la commande ",(0,o.kt)("inlineCode",{parentName:"p"},"squeue")," vous pouvez suivre l'\xe9tat de votre job et ",(0,o.kt)("inlineCode",{parentName:"p"},"scancel")," permet de l'arr\xeater."),(0,o.kt)("p",null,"Cliquez ",(0,o.kt)("a",{parentName:"p",href:"/HOWTO/slurm"},"ici")," pour aller plus loin avec slurm."),(0,o.kt)("h1",{id:"jobs-interactifs"},"Jobs interactifs"),(0,o.kt)("p",null,"Il n'est pas possible de se connecter directement par ssh aux n\u0153uds de calcul, m\xeame si le n\u0153ud est allum\xe9."),(0,o.kt)("p",null,"Vous obtenez alors le message suivant"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"Access denied by pam_slurm_adopt: you have no active jobs on this node\nConnection closed by 10.30.0.1 port 22\n")),(0,o.kt)("p",null,"Par contre, vous pouvez vous connecter par ssh aux n\u0153uds o\xf9 vous avez une r\xe9servation active."),(0,o.kt)("h1",{id:"powersave"},"D\xe9marrage des n\u0153uds"),(0,o.kt)("p",null,"A des fins d'\xe9conomie d'\xe9nergie, les n\u0153uds de calcul de Zen s'arr\xeatent compl\xe8tement au bout de 3 heures d'inactivit\xe9."),(0,o.kt)("p",null,"Si les seuls n\u0153uds pour satisfaire votre requ\xeate sont \xe9teints, alors votre job se lancera seulement apr\xe8s environ 5 minutes, le temps n\xe9cessaire au serveur pour d\xe9marrer."))}m.isMDXComponent=!0}}]);