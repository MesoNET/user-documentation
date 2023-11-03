"use strict";(self.webpackChunkmesodocs=self.webpackChunkmesodocs||[]).push([[128],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=i(r),m=a,f=l["".concat(u,".").concat(m)]||l[m]||d[m]||o;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[l]="string"==typeof e?e:a,s[1]=c;for(var i=2;i<o;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},90:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var n=r(7462),a=(r(7294),r(4137));const o={title:"Description",sidebar_position:1},s="Turpan, la machine ARM de MEsoNET",c={unversionedId:"arch_exp/turpan/description",id:"arch_exp/turpan/description",title:"Description",description:"Le supercalculateur Turpan dispose de 15 n\u0153uds de calcul. Dans un n\u0153ud, L\u2019architecture d\xe9taill\xe9e est la suivante : autour du CPU, on a 512Go RAM r\xe9partis en 8 barrettes de 64Go sur des canaux ind\xe9pendants, deux cartes GPU Nvidia A100-80, connect\xe9es en PCI express x16, 2 cartes r\xe9seaux infiniband 200 Gb/s chacune, \xe9galement connect\xe9es en PCI express x16, 6To de stockage local, et de la connectique standard (USB, Ethernet etc).",source:"@site/docs/arch_exp/turpan/description.md",sourceDirName:"arch_exp/turpan",slug:"/arch_exp/turpan/description",permalink:"/documentation/user-documentation/arch_exp/turpan/description",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Description",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"G\xe9rer ses cl\xe9s SSH",permalink:"/documentation/user-documentation/acces/ssh"},next:{title:"Se connecter \xe0 Turpan",permalink:"/documentation/user-documentation/arch_exp/turpan/connexion"}},u={},i=[{value:"Faire appel au support",id:"faire-appel-au-support",level:2}],p={toc:i},l="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"turpan-la-machine-arm-de-mesonet"},"Turpan, la machine ARM de MEsoNET"),(0,a.kt)("p",null,"Le supercalculateur Turpan dispose de 15 n\u0153uds de calcul. Dans un n\u0153ud, L\u2019architecture d\xe9taill\xe9e est la suivante : autour du CPU, on a 512Go RAM r\xe9partis en 8 barrettes de 64Go sur des canaux ind\xe9pendants, deux cartes GPU Nvidia A100-80, connect\xe9es en PCI express x16, 2 cartes r\xe9seaux infiniband 200 Gb/s chacune, \xe9galement connect\xe9es en PCI express x16, 6To de stockage local, et de la connectique standard (USB, Ethernet etc)."),(0,a.kt)("p",null,"Dans un n\u0153ud de Turpan, le processeur est un Ampere Altra Q80-30, qui comporte 80 c\u0153urs \xe0 3GHz, qui impl\xe9mente une architecture ARM version 8.2, la vitesse de transfert des donn\xe9es est de 3200 MT/s. La puissance de calcul est de 1,9 TF/s par socket. Par ailleurs Turpan poss\xe8de 2 acc\xe9l\xe9rateurs GPU Nvidia A100-80, chaque GPU propose 6912 Streaming Multiprocessors (SM). La performance peak d'un GPU est de 19,5 Tflops. Au total, en charge maximale, quand on utilise 80 coeurs CPU et 2 acc\xe9l\xe9rateurs GPU, la performance peak est de 40,9 Tflops. En th\xe9orie, avec 15 n\u0153uds, Turpan dispose d\u2019une puissance de 613,5 Tflops."),(0,a.kt)("p",null,"Concernant le stockage, la machine Turpan dispose de 343 To sur des disques m\xe9caniques pour le stockage scratch et projet. Et 17 To de SSD qui serve de cache pour acc\xe9l\xe9rer les entres sorties. Physiquement on a 60 disques m\xe9caniques de 8To, 11 disques SSD de 3,8To."),(0,a.kt)("h2",{id:"faire-appel-au-support"},"Faire appel au support"),(0,a.kt)("p",null,"Si quelque chose ne fonctionne pas et que vous n'arrivez pas \xe0 vous en sortir, vouis pouvez envoyer un courriel \xe0 ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@mesonet.fr"},"cette adresse"),", en pr\xe9cisant : "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Chemin du r\xe9pertoire d\u2019appel"),(0,a.kt)("li",{parentName:"ul"},"Chemin du script d\u2019appel"),(0,a.kt)("li",{parentName:"ul"},"Num\xe9ro du job concern\xe9")))}d.isMDXComponent=!0}}]);