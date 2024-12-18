"use strict";(self.webpackChunkmesodocs=self.webpackChunkmesodocs||[]).push([[1265],{4137:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),d=r,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||a;return t?o.createElement(f,l(l({ref:n},u),{},{components:t})):o.createElement(f,l({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9536:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=t(7462),r=(t(7294),t(4137));const a={title:"Environnement logiciel",sidebar_position:6},l=void 0,i={unversionedId:"code_form/zen/software",id:"code_form/zen/software",title:"Environnement logiciel",description:"Modules d'environnement",source:"@site/docs/code_form/zen/software.md",sourceDirName:"code_form/zen",slug:"/code_form/zen/software",permalink:"/documentation/user-documentation/code_form/zen/software",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Environnement logiciel",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Lancer un calcul",permalink:"/documentation/user-documentation/code_form/zen/jobs"},next:{title:"Phileas, la machine Code-Formation CPU Intel",permalink:"/documentation/user-documentation/code_form/phileas/"}},s={},p=[{value:"Modules d&#39;environnement",id:"modules-denvironnement",level:2},{value:"Organisation hierarchique",id:"organisation-hierarchique",level:2},{value:"<code>module spider</code>",id:"module-spider",level:2}],u={toc:p},c="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"modules-denvironnement"},"Modules d'environnement"),(0,r.kt)("p",null,"Le syst\xe8me d'exploitation install\xe9 sur tous les n\u0153uds est Rocky Linux 8.7."),(0,r.kt)("p",null,"Pour faciliter la gestion des environnements logiciels Zen utilise ",(0,r.kt)("a",{parentName:"p",href:"https://lmod.readthedocs.io/en/latest/"},"lmod"),", dont le fonctionnement est tr\xe8s proche d'",(0,r.kt)("a",{parentName:"p",href:"https://modules.readthedocs.io/en/latest/"},"environment-modules"),"."),(0,r.kt)("p",null,"Pour se familiariser avec l'outil, vous pouvez consulter ",(0,r.kt)("a",{parentName:"p",href:"/documentation/user-documentation/HOWTO/module"},"ce tutoriel"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Si un module d'environnement vous manque, envoyez un courriel \xe0 ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@mesonet.fr"},"support@mesonet.fr")," (en sp\xe9cifiant que votre demande concerne le cluster Zen).")),(0,r.kt)("h2",{id:"organisation-hierarchique"},"Organisation hierarchique"),(0,r.kt)("p",null,"Les modules d'environnement sont organis\xe9s de fa\xe7on hierarchique."),(0,r.kt)("p",null,"La commande\n",(0,r.kt)("inlineCode",{parentName:"p"},"module avail"),'\nmontre les modules "core" disponibles sans d\xe9pendance. Ils peuvent \xeatre charg\xe9s directement.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ml av\n\n----------------------------------------------------------------------------------- /bxfs/modules/core -----------------------------------------------------------------------------------\n   aocc/4.0.0        apptainer/1.2.4      gcc/13.2.0               go/1.21.1              miniconda3/23.5.2.py311    openjdk/21.0.1      pgi/19.10 (D)\n   aocc/4.1.0 (D)    gaussian/g16.C.01    gnu-parallel/20230922    intel-oneapi/2023.2    nodejs/18.18.2             pgi/19.10.nollvm\n")),(0,r.kt)("p",null,"Pour voir le module ",(0,r.kt)("inlineCode",{parentName:"p"},"openmpi/4.1.6")," qui d\xe9pend de ",(0,r.kt)("inlineCode",{parentName:"p"},"gcc/13.2.0")," il faut au pr\xe9alable charger cette d\xe9pendance."),(0,r.kt)("p",null,"Apr\xe8s avoir charg\xe9 ",(0,r.kt)("inlineCode",{parentName:"p"},"gcc")," la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"module avail")," montrera alors les modules qui en d\xe9pendent."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"--------------------------------------------------------------------------- /bxfs/modules/compiler/gcc/13.2.0 ----------------------------------------------------------------------------\n   fftw/3.3.10    gmp/6.3.0    hdf5/1.14.2.mpi    hdf5/1.14.2.seq    hdf5/1.14.2.threadsafe (D)    openblas/0.3.24    openmpi/4.1.6\n")),(0,r.kt)("h2",{id:"module-spider"},(0,r.kt)("inlineCode",{parentName:"h2"},"module spider")),(0,r.kt)("p",null,"La commande ",(0,r.kt)("inlineCode",{parentName:"p"},"module spider")," affiche tous les modules disponibles. Par exemple, il y a la ligne"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"openmpi: openmpi/3.1.3, openmpi/4.1.5, openmpi/4.1.6\n")),(0,r.kt)("p",null,"La tentative de charger directement un de ces modules donne une erreur. Pour savoir comment les charger:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'module spider openmpi/4.1.6\n\n--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n  openmpi: openmpi/4.1.6\n--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n    You will need to load all module(s) on any one of the lines below before the "openmpi/4.1.6" module is available to load.\n\n      gcc/13.2.0\n\n    Help:\n      This module loads the OpenMPI-4.1.6 library build with gcc-13.2.0\n')),(0,r.kt)("p",null,"Pour utiliser ",(0,r.kt)("inlineCode",{parentName:"p"},"openmpi/4.1.6")," il faut donc le charger ainsi"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"module load gcc/13.2.0\nmodule load openmpi/4.1.6\n")),(0,r.kt)("p",null,"Ou, en utilisant les ",(0,r.kt)("a",{parentName:"p",href:"/HOWTO/module#ml"},"raccourcis"),' et le fait que les deux versions sont marqu\xe9s "(D)efault", simplement'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ml gcc openmpi\n")))}m.isMDXComponent=!0}}]);