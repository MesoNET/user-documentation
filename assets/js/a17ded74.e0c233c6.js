"use strict";(self.webpackChunkmesodocs=self.webpackChunkmesodocs||[]).push([[8851],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=i(n),d=a,b=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},425:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:n},t)}},3992:(e,t,n)=>{n.d(t,{Z:()=>x});var r=n(7462),a=n(7294),o=n(6010),l=n(2957),s=n(6550),u=n(5238),i=n(3609),c=n(2560);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=m(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,i]=b({queryString:n,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),k=(()=>{const e=u??p;return d({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),f(e)}),[i,f,o]),tabValues:o}}var k=n(1048);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:s,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),r=i[n].value;r!==s&&(p(t),u(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},l,{className:(0,o.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(g,(0,r.Z)({},e,t)))}function x(e){const t=(0,k.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},835:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>b,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(4137)),o=n(3992),l=n(425);const s={title:"Lancer un calcul",sidebar_position:4},u="Comment lancer un calcul sur Turpan ?",i={unversionedId:"arch_exp/turpan/jobs",id:"arch_exp/turpan/jobs",title:"Lancer un calcul",description:"L'utilisateur peut ex\xe9cuter un maximum de 3 jobs simultan\xe9ment, quelle que soit la partition utilis\xe9e. Dans tous les cas, il est imp\xe9ratif de respecter les contraintes sp\xe9cifiques de chaque partition, comme indiqu\xe9 ci-dessous :",source:"@site/docs/arch_exp/turpan/jobs.md",sourceDirName:"arch_exp/turpan",slug:"/arch_exp/turpan/jobs",permalink:"/documentation/user-documentation/arch_exp/turpan/jobs",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Lancer un calcul",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Le stockage",permalink:"/documentation/user-documentation/arch_exp/turpan/stockage"},next:{title:"Les r\xe8gles",permalink:"/documentation/user-documentation/arch_exp/turpan/accounting/accounting-rules"}},c={},p=[{value:"Comment lancer un script <code>sbatch</code> ?",id:"comment-lancer-un-script-sbatch-",level:2},{value:"Obtenir des informations sur un job",id:"obtenir-des-informations-sur-un-job",level:2}],m={toc:p},d="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"comment-lancer-un-calcul-sur-turpan-"},"Comment lancer un calcul sur Turpan ?"),(0,a.kt)("p",null,"L'utilisateur peut ex\xe9cuter un maximum de 3 jobs simultan\xe9ment, quelle que soit la partition utilis\xe9e. Dans tous les cas, il est imp\xe9ratif de respecter les contraintes sp\xe9cifiques de chaque partition, comme indiqu\xe9 ci-dessous :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"small")," : exclusive, 2 jobs max, pas plus de 6 noeuds par jobs, max walltime par job 4H."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"big")," : exclusive, 1 job max, pas plus de 13 noeuds par jobs, max walltime par job 2H."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"full")," : exclusive, 1 job max, au moins 14 noeuds par jobs, max walltime par job 20H"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"visu")," : non exclusive, 1 job max, max 50Go RAM max 8 cpu par job, max walltime par job 4H."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"shared")," : non exclusive, 2 jobs max, max la moiti\xe9 du noeud (40 cpu et 256G ram,1 GPU ), max walltime par job 4H.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Exclusive"),": Un job en partition exclusive r\xe9serve l\u2019int\xe9gralit\xe9 des n\u0153uds qui lui sont attribu\xe9s."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Non exclusive"),": Un job en partition non exclusive ne r\xe9serve pas l\u2019int\xe9gralit\xe9 du n\u0153ud, ce qui permet \xe0 d\u2019un autre job (d\u2019un autre utilisateur) de partager les m\xeames ressources.")),(0,a.kt)("p",{parentName:"admonition"},"Le choix de la partition d\xe9pend des besoins en ressources, notamment en termes de nombre de c\u0153urs par n\u0153ud et des limites de temps de calcul (walltime), veuillez consulter ",(0,a.kt)("a",{parentName:"p",href:"/documentation/user-documentation/arch_exp/turpan/accounting/accounting-rules#exemples-"},"les r\xe8gles de comptabilisation des ressources "),".")),(0,a.kt)("p",null,"Afin de ne pas monopoliser l\u2019ensemble des noeuds du cluster en journ\xe9e :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'la partition "full" est activ\xe9e du lundi au vendredi \xe0 18H00'),(0,a.kt)("li",{parentName:"ul"},'la partition "full" est d\xe9sactiv\xe9e du lundi au jeudi ainsi que le dimanche \xe0 partir de 22H00')),(0,a.kt)("p",null,'Lorsque la partition est d\xe9sactiv\xe9e, les soumissions sont possibles, mais les jobs sont suspendus jusqu\u2019\xe0 l\u2019activation de la partition. A la d\xe9sactivation, les jobs RUNNING sur la partition "full" ne sont pas arr\xeat\xe9s.'),(0,a.kt)("h2",{id:"comment-lancer-un-script-sbatch-"},"Comment lancer un script ",(0,a.kt)("inlineCode",{parentName:"h2"},"sbatch")," ?"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{label:"Exemple script exclusif",value:"exclusif",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"Exemple script exclusif, 2 n\u0153uds, 160 processeurs, le temps d'ex\xe9cution moins de 4H"),(0,a.kt)("blockquote",null,(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"#!/bin/bash\n#SBATCH -N 2\n#SBATCH -n 160\n#SBATCH --gres=gpu:2 \n#SBATCH -p small\n#SBATCH --ntasks-per-node=80\n#SBATCH --time=00:10:00\n\nmodule purge\nmodule load gnu/11.2.0\nmodule load openmpi/gnu/4.1.4-gpu\n\nnodeset -e ${SLURM_JOB_NODELIST} | tr ' ' '\\n' > hostfile_${SLURM_JOBID}\nmpirun -hostfile ./hostfile_${SLURM_JOBID} -n 160 ./exec\n")))),(0,a.kt)(l.Z,{label:"Exemple script shared",value:"shared",mdxType:"TabItem"},(0,a.kt)("p",null,"Exemple script shared, 1 n\u0153ud, 40 processeurs,  le temps d'ex\xe9cution moins de 4H"),(0,a.kt)("blockquote",null,(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre"},"#!/bin/bash\n#SBATCH -N 1\n#SBATCH -n 40\n#SBATCH --gres=gpu:1\n#SBATCH -p shared\n#SBATCH --ntasks-per-node=40\n#SBATCH --time=00:10:00\n\nmodule purge\nmodule load gnu/11.2.0\nmodule load openmpi/gnu/4.1.4-gpu\n\nmpirun -n 40 ./exec\n"))))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Sur Turpan, si l'application utilise ",(0,a.kt)("strong",{parentName:"p"},"MPI"),", il est n\xe9cessaire d'utiliser ",(0,a.kt)("strong",{parentName:"p"},"mpirun")," et d'\xe9viter srun, sauf si un conteneur est utilis\xe9 (",(0,a.kt)("a",{parentName:"p",href:"/documentation/user-documentation/arch_exp/turpan/logiciels/apptainer"},"voir ici"),"). Pour les autres applications ",(0,a.kt)("strong",{parentName:"p"},"sans MPI"),", srun reste valide")),(0,a.kt)("h2",{id:"obtenir-des-informations-sur-un-job"},"Obtenir des informations sur un job"),(0,a.kt)("p",null,"Il est possible pour visualiser simplement des information sur son job d'utiliser la commande ",(0,a.kt)("inlineCode",{parentName:"p"},"jobinfo <jobid>"),".Il peut \xeatre utilis\xe9 \xe0 la fin d'un script sbatch, jobinfo donnera des informations tr\xe8s utiles si vous contactez le support."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{label:"Normal",value:"simple-info",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"jobinfo 6101\n")),(0,a.kt)("blockquote",null,(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre"},"Job Infos :\n               Name : Test partition small - 4 noeuds\n               User : marteau\n          Partition : small\n             NNodes : 4\n              Nodes : turpancomp[0-3]\n              State : COMPLETED\n             Submit : 2023-04-14T16:08:02\n              Start : 2023-04-14T16:08:02\n                End : 2023-04-14T16:08:05\n  Reserved walltime : 04:00:00\n      Used walltime : 00:00:03\n      Used CPU time : 00:01.884\n% User Computation) : 0 % (00:00.658)\n     % System (I/O) : 100.00 % (00:01.225)\n       Mem reserved : 2.0T\n       Max Mem used : 24M\n     Max Disk Write : 0\n      Max Disk Read : 0\n Energy consumption : 1W.h\n")))),(0,a.kt)(l.Z,{label:"Debug / Support",value:"support-info",mdxType:"TabItem"},(0,a.kt)("blockquote",null,(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre"},'#!/bin/bash\n#SBATCH -N 2\n#SBATCH -n 160\n#SBATCH --gres=gpu:2 \n#SBATCH -p small\n#SBATCH --ntasks-per-node=80\n#SBATCH --time=00:10:00\n\n# Chargement des modules\nmodule purge\nmodule load gnu/11.2.0\nmodule load openmpi/gnu/4.1.4-gpu\n\n# Preparation de l\'environnement d\'execution\nmyProjectDir=/users/sysadmin/marteau/slurm-scripts/mpi_hello_world_project\nmyExec="mpi_hello_world"\nmyWorkDir="${SLURM_JOBID}"\nmkdir -p "${myWorkDir}"\ncd "${myWorkDir}"\ncp "${0}" .\ncp ${myProjectDir}/${myExec} .\n\nnodeset -e "${SLURM_JOB_NODELIST}" | tr \' \' \'\\n\' > "hostfile_${SLURM_JOBID}"\nmpirun -hostfile "./hostfile_${SLURM_JOBID}" -n 160 "./${myExec}"\n\njobinfo "${SLURM_JOBID}"\n'))),(0,a.kt)("p",null,"Ce qui affiche dans la sortie slurm (",(0,a.kt)("inlineCode",{parentName:"p"},"slurm-<jobid>.out"),"):"),(0,a.kt)("blockquote",null,(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre"},"[...]\nJob Infos :\n               Name : partition-small-jobinfo.sbatch\n               User : marteau\n          Partition : small\n             NNodes : 2\n              Nodes : turpancomp[0-1]\n              State : RUNNING\n             Submit : 2023-04-17T17:58:37\n              Start : 2023-04-17T17:58:37\n                End : Unknown\n  Reserved walltime : 00:10:00\n      Used walltime : 00:01:04\n      Used CPU time : 00:46.488\n% User Computation) : 41.00 % (00:19.439)\n     % System (I/O) : 58.00 % (00:27.049)\n       Mem reserved : 1008G\n       Max Mem used : 9.8G\n     Max Disk Write : 329M\n      Max Disk Read : 250M\n Energy consumption : 3W.h\n\nDebug Infos :\n          BatchHost : turpancomp0\n            Command : /users/sysadmin/marteau/slurm-scripts/partition-small-jobinfo.sbatch\n             StdOut : /tmpdir/marteau/slurm-6154.out\n             StdErr : /tmpdir/marteau/slurm-6154.out\n            WorkDir : /tmpdir/marteau\n"))))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Il peut \xeatre utile de mettre une petite temporisation avant la commande jobinfo pour permettre d'avoir les derni\xe8res valeurs de l'accounting slurm s'il est utilis\xe9 dans un script sbatch."),(0,a.kt)("blockquote",{parentName:"admonition"},(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre"},"sleep 10\njobinfo\n")))))}b.isMDXComponent=!0}}]);