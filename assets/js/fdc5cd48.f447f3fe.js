"use strict";(self.webpackChunkmesodocs=self.webpackChunkmesodocs||[]).push([[4112],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=n,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2595:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(4137));const o={title:"Maqao",sidebar_position:6},i=void 0,l={unversionedId:"arch_exp/turpan/performance/maqao",id:"arch_exp/turpan/performance/maqao",title:"Maqao",description:"MAQAO (Modular Assembly Quality Analyzer and Optimizer) est un outil d'analyse et d'optimisation des performances. Contrairement aux profileurs traditionnels qui se concentrent uniquement sur la surveillance des performances, MAQAO fournit des informations d\xe9taill\xe9es sur la mani\xe8re dont le code interagit avec le mat\xe9riel et sugg\xe8re des optimisations exploitables. Il fournit des rapports d\xe9taill\xe9s pour am\xe9liorer l'efficacit\xe9, telles que l'optimisation de l'utilisation de la m\xe9moire, la vectorisation et le parall\xe9lisme, aidant ainsi les d\xe9veloppeurs \xe0 maximiser les performances des applications.",source:"@site/docs/arch_exp/turpan/performance/maqao.md",sourceDirName:"arch_exp/turpan/performance",slug:"/arch_exp/turpan/performance/maqao",permalink:"/documentation/user-documentation/arch_exp/turpan/performance/maqao",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Maqao",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"NEON",permalink:"/documentation/user-documentation/arch_exp/turpan/performance/neon"},next:{title:"Tutoriaux",permalink:"/documentation/user-documentation/category/tutoriaux"}},s={},p=[{value:"Profiler son code avec MAQAO",id:"profiler-son-code-avec-maqao",level:2},{value:"Voir les r\xe9sultats",id:"voir-les-r\xe9sultats",level:2},{value:"Pour aller plus loin :",id:"pour-aller-plus-loin-",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"MAQAO (Modular Assembly Quality Analyzer and Optimizer) est un outil d'analyse et d'optimisation des performances. Contrairement aux profileurs traditionnels qui se concentrent uniquement sur la surveillance des performances, MAQAO fournit des informations d\xe9taill\xe9es sur la mani\xe8re dont le code interagit avec le mat\xe9riel et sugg\xe8re des optimisations exploitables. Il fournit des rapports d\xe9taill\xe9s pour am\xe9liorer l'efficacit\xe9, telles que l'optimisation de l'utilisation de la m\xe9moire, la vectorisation et le parall\xe9lisme, aidant ainsi les d\xe9veloppeurs \xe0 maximiser les performances des applications."),(0,n.kt)("p",null,"Pour profiler votre code avec maqao sur Turpan, vous devez travailler en deux temps :"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Ex\xe9cuter le code en lan\xe7ant les instructions de profilage, Cette op\xe9ration g\xe9n\xe9rera un fichier de donn\xe9es. "),(0,n.kt)("li",{parentName:"ol"},"Utilisez l\u2019outil de visualisation pour lire les donn\xe9es acquises \xe0 l\u2019\xe9tape 1")),(0,n.kt)("p",null,"Il est recommand\xe9 de compiler son code avec le switch ",(0,n.kt)("inlineCode",{parentName:"p"},"-g")," pour corr\xe9ler les diff\xe9rentes phases du profil observ\xe9 avec le code. Mais \xe0 l\u2019inverse de ce qui est recommand\xe9 pour la phase de d\xe9bogage (",(0,n.kt)("a",{parentName:"p",href:"/documentation/user-documentation/arch_exp/turpan/performance/ddt"},"voir ici"),"), il est utile de garder ",(0,n.kt)("em",{parentName:"p"},"les options d\u2019optimisation")," pour avoir un profil correct."),(0,n.kt)("h2",{id:"profiler-son-code-avec-maqao"},"Profiler son code avec MAQAO"),(0,n.kt)("p",null,"Dans le cadre de l'ex\xe9cution de MAQAO pour le profilage, il est recommand\xe9 de d\xe9finir explicitement le nombre de threads de chaque processus. Cela permet \xe0 MAQAO de prendre en compte cette configuration lors du profilage de l'ex\xe9cution. Sans cette sp\xe9cification, il est possible de rencontrer des probl\xe8mes lors de l'ex\xe9cution du profilage ou d'obtenir des r\xe9sultats erron\xe9s, en particulier lorsqu'un grand nombre de processus est utilis\xe9."),(0,n.kt)("blockquote",null,(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre"},'module load maqao/2.19.0\nOMP_NUM_THREADS=1 maqao oneview -R1 --mpi-command="mpirun --mca mpi_cuda_support 0 -hostfile ./hostfile_${SLURM_JOBID} -np ${SLURM_NTASKS}  \\\n-map-by ppr:${SLURM_NTASKS_PER_NODE}" -- ./mon_projet \n'))),(0,n.kt)("p",null,"Vous pouvez \xe9galement configurer la variable d'environnement directement dans votre script.  "),(0,n.kt)("blockquote",null,(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre"},"export OMP_NUM_THREADS=1 # une application mono-thread\nmaqao oneview -R1 .... \n"))),(0,n.kt)("h2",{id:"voir-les-r\xe9sultats"},"Voir les r\xe9sultats"),(0,n.kt)("p",null,"Dans le r\xe9pertoire d'ex\xe9cution, maqao cr\xe9e un r\xe9pertoire "),(0,n.kt)("p",null,"Si votre script produit une sortie standard (via des instructions comme print), celle-ci sera sauvegard\xe9e dans un fichier au chemin suivant :"),(0,n.kt)("blockquote",null,(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre"},".../maqao_timestamp/logs/run_0/log.txt\n"))),(0,n.kt)("p",null,"Exemple de r\xe9pertoire contenant les sorties de maqao :"),(0,n.kt)("p",null,"Les r\xe9sultats d\u2019analyse de performance sont disponibles sous forme de rapports HTML, accessibles dans le r\xe9pertoire suivant :"),(0,n.kt)("blockquote",null,(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre"},".../maqao_timestamp/RESULTS/mon_project_html/index.html\n"))),(0,n.kt)("p",null,"Pour visualiser les sorties, Vous disposez de deux options principales :"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Si vous utilisez Visual Studio Code sur votre machine locale et \xeates connect\xe9 \xe0 turpan via SSH (",(0,n.kt)("a",{parentName:"p",href:"../connexion/#se-connecter-en-utilisant-vscode"},"voir ici"),"), vous pouvez visualiser le fichier ",(0,n.kt)("inlineCode",{parentName:"p"},"index.html")," en utilisant l'extension ",(0,n.kt)("strong",{parentName:"p"},"Live Server")," (\xe0 installer dans VScode). Cette m\xe9thode vous permet d\u2019afficher directement les rapports dans votre navigateur, sans avoir besoin de copier les fichiers localement.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Copiez le dossier g\xe9n\xe9r\xe9 par MAQAO vers votre machine locale (",(0,n.kt)("a",{parentName:"p",href:"/documentation/user-documentation/arch_exp/turpan/connexion/transfert"},"voir ici"),"), puis ouvrez le fichier HTML des r\xe9sultats avec un navigateur web. Par exemple :"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"firefox .../maqao_timestamp/RESULTS/mon_project_html/index.html \n")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Capture d&#39;\xe9cran des r\xe9sultats Maqao ",src:r(621).Z,width:"1839",height:"932"})),(0,n.kt)("p",null,"L'image montre les r\xe9sultats de profilage des performances MAQAO avec plusieurs onglets. Global fournit un aper\xe7u des indicateurs de performances cl\xe9s et des opportunit\xe9s d'acc\xe9l\xe9ration potentielles. Fonctions se concentre sur les donn\xe9es de performances au niveau de la fonction, aidant \xe0 identifier les inefficacit\xe9s. Boucles met en \xe9vidence les performances au niveau de la boucle, montrant o\xf9 des optimisations peuvent \xeatre effectu\xe9es."),(0,n.kt)("p",null,"D'autres onglets comme Application, Topologie et autres fournissent des d\xe9tails suppl\xe9mentaires sur la configuration du syst\xe8me, la configuration mat\xe9rielle et les param\xe8tres d'exp\xe9rimentation. Ces fonctionnalit\xe9s aident ensemble \xe0 comprendre les performances globales et \xe0 identifier les domaines d'optimisation."),(0,n.kt)("admonition",{title:"Note",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"MAQAO ne prend pas en charge, pour le moment, le profilage sur GPU.")),(0,n.kt)("h2",{id:"pour-aller-plus-loin-"},"Pour aller plus loin :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Les tutoriaux (1) et (2) MAQAO lors du 43rd VI-HPS sur Turpan (29 Janvier-1er F\xe9vrier 2024)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.vi-hps.org/cms/upload/material/tw43/MAQAO.pdf"},"MAQAO performance analysis tools")," (C\xe9dric Valensi, Hugo Bollor\xe9 & Emmanuel Oseret, UVSQ)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.vi-hps.org/cms/upload/material/tw43/MAQAO_Handson.pdf"},"MAQAO hands-on exercises")," (",(0,n.kt)("a",{parentName:"li",href:"https://www.vi-hps.org/cms/upload/material/tw43/MAQAO_QuickReferenceSheet.pdf"},"MAQAO quick reference"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"http://www.maqao.org/documentation.html"},"La documentation officielle sur MAQAO")))))}m.isMDXComponent=!0},621:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/maqao_output-4ca8bdd61e14aa35b8c23f6822125f83.png"}}]);