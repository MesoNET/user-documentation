"use strict";(self.webpackChunkmesodocs=self.webpackChunkmesodocs||[]).push([[631],{4137:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return t?n.createElement(f,i(i({ref:r},c),{},{components:t})):n.createElement(f,i({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2605:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=t(7462),a=(t(7294),t(4137));const o={title:"MAP",sidebar_position:3},i="Profiler votre code avec map sur Turpan",l={unversionedId:"arch_exp/turpan/performance/map",id:"arch_exp/turpan/performance/map",title:"MAP",description:"Pour profiler votre code, vous devez travailler en deux temps :",source:"@site/docs/arch_exp/turpan/performance/map.md",sourceDirName:"arch_exp/turpan/performance",slug:"/arch_exp/turpan/performance/map",permalink:"/documentation/user-documentation/arch_exp/turpan/performance/map",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"MAP",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"LWP",permalink:"/documentation/user-documentation/arch_exp/turpan/performance/lwp"},next:{title:"NSIGHT",permalink:"/documentation/user-documentation/arch_exp/turpan/performance/nsight"}},p={},s=[{value:"Profiler son code avec map",id:"profiler-son-code-avec-map",level:3},{value:"Voir les r\xe9sultats avec map",id:"voir-les-r\xe9sultats-avec-map",level:3}],c={toc:s},u="wrapper";function d(e){let{components:r,...o}=e;return(0,a.kt)(u,(0,n.Z)({},c,o,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"profiler-votre-code-avec-map-sur-turpan"},"Profiler votre code avec map sur Turpan"),(0,a.kt)("p",null,"Pour profiler votre code, vous devez travailler en deux temps :"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Ex\xe9cuter le code en lan\xe7ant les instructions de profilage. Cette op\xe9ration g\xe9n\xe9rera un fichier de donn\xe9es."),(0,a.kt)("li",{parentName:"ol"},"Utilisez l'outil de visualisation pour lire les donn\xe9es acquises \xe0 l'\xe9tape 1")),(0,a.kt)("p",null,"Il est recommand\xe9 de compiler son code avec le switch -g pour corr\xe9ler les diff\xe9rentes phases du profil observ\xe9 avec le code. Mais \xe0 l'inverse de ce qui est recommand\xe9 pour la phase de d\xe9bogage (voir ici ",(0,a.kt)("a",{parentName:"p",href:"/documentation/user-documentation/arch_exp/turpan/performance/ddt"},"ddt")," , il est utile de garder les options d'optimisation pour avoir un profil correct."),(0,a.kt)("h3",{id:"profiler-son-code-avec-map"},"Profiler son code avec map"),(0,a.kt)("p",null,"Dans le fichier de soumission sbatch, il vous suffit de modifier l\u2019appel srun par :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"module load arm-forge/22.1.4\nmap --profile srun mon_appli...\n")),(0,a.kt)("h3",{id:"voir-les-r\xe9sultats-avec-map"},"Voir les r\xe9sultats avec map"),(0,a.kt)("p",null,"La commande ci-dessus produira un fichier dont le nom ressemblera \xe0 : mon_appli.map"),(0,a.kt)("p",null,"Il suffit alors d'ouvrir le visualiseur par :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"map mon_appli.map\n")),(0,a.kt)("p",null,"Il s'agit d'un outil graphique, vous devrez donc ouvrir une session X11 :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Vous connecter avec ssh -X"),(0,a.kt)("li",{parentName:"ul"},"Si le d\xe9bit r\xe9seau est insuffisant, ssh -XC permet d\u2019am\xe9liorer la fluidit\xe9 de l'affichage"),(0,a.kt)("li",{parentName:"ul"},"Si cela ne suffit pas, utilisez une session graphique")),(0,a.kt)("p",null,"La partie sup\xe9rieure de l'\xe9cran ressemblera \xe0 la figure ci-dessous. Si vous avez compil\xe9 votre code avec le switch -g, et si map est capable de trouver les sources de votre programme, vous pourrez alors \xe9tablir une corr\xe9lation entre le profil affich\xe9 en haut de l'\xe9cran et le code (qui sera affich\xe9 en bas de l\u2019\xe9cran)."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Capture d&#39;\xe9cran du formulaire d&#39;engistrement dans le SSO Mesonet",src:t(403).Z,width:"1835",height:"1047"})),(0,a.kt)("p",null,"Le menu Metrics permet de choisir ce qu'on regarde : les entr\xe9es-sorties, les appels mpi, etc."))}d.isMDXComponent=!0},403:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/map-3ec05a1361b9959b0494fcdf0c1ec422.png"}}]);