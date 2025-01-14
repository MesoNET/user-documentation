"use strict";(self.webpackChunkmesodocs=self.webpackChunkmesodocs||[]).push([[7368],{4137:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>f});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),s=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},l=function(e){var n=s(e.components);return t.createElement(u.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=s(r),m=o,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||i;return r?t.createElement(f,a(a({ref:n},l),{},{components:r})):t.createElement(f,a({ref:n},l))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=e,p[c]="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=r[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6913:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var t=r(7462),o=(r(7294),r(4137));const i={title:"NSIGHT",sidebar_position:4},a=void 0,p={unversionedId:"arch_exp/turpan/performance/nsight",id:"arch_exp/turpan/performance/nsight",title:"NSIGHT",description:"Pour utiliser nsys, c'est tr\xe8s simple.",source:"@site/docs/arch_exp/turpan/performance/nsight.md",sourceDirName:"arch_exp/turpan/performance",slug:"/arch_exp/turpan/performance/nsight",permalink:"/documentation/user-documentation/arch_exp/turpan/performance/nsight",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"NSIGHT",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"MAP",permalink:"/documentation/user-documentation/arch_exp/turpan/performance/map"},next:{title:"NEON",permalink:"/documentation/user-documentation/arch_exp/turpan/performance/neon"}},u={},s=[{value:"Exemple de rapport simple n\u0153ud",id:"exemple-de-rapport-simple-n\u0153ud",level:2},{value:"Visualisation de rapport simple n\u0153ud",id:"visualisation-de-rapport-simple-n\u0153ud",level:2}],l={toc:s},c="wrapper";function d(e){let{components:n,...i}=e;return(0,o.kt)(c,(0,t.Z)({},l,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pour utiliser nsys, c'est tr\xe8s simple."),(0,o.kt)("p",null,"D'abord, il faut aller sur le n\u0153ud de calcul pour g\xe9n\xe9rer un rapport avec votre application (n\u0153ud unique ou n\u0153uds multiples)."),(0,o.kt)("p",null,"Ensuite, il faut aller sur le TurboVNC ouvrez une interface graphique nsys pour visualiser votre rapport."),(0,o.kt)("h2",{id:"exemple-de-rapport-simple-n\u0153ud"},"Exemple de rapport simple n\u0153ud"),(0,o.kt)("p",null,"La directive ",(0,o.kt)("inlineCode",{parentName:"p"},"#nvprofiling")," est responsable de la configuration de l\u2019environnement n\xe9cessaire pour NSIGHT."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#!/usr/bin/bash\n#SBATCH -N 1 \n#SBATCH -n 2 \n#SBATCH --ntasks-per-node=2\n#SBATCH --gres=gpu:2\n#SBATCH --time=00:30:00\n#SBATCH -p small \n#nvprofiling\n\nmodule purge\nmodule load nvidia \nmodule load nvhpc/22.9\nmodule load amgx/nvidia/2.4.0-nvhpc231-system\nmodule load dcgm/system\nmodule list\n\nworkdir=RUN/${SLURM_JOBID}\nmkdir ${workdir}\ncd ../${workdir}/\ncp $0 .\n\nnodeset -e ${SLURM_JOB_NODELIST} | tr ' ' '\\n' > hostfile_${SLURM_JOBID}\n\n# Nsight profiling\nnsys profile \\\n  -t mpi,ucx,openmp,openacc,oshmem,cuda,opengl,nvtx,osrt \\\n  -o report-mpirun-singlenode \\\n  mpirun -hostfile ./hostfile_${SLURM_JOBID} \\\n         -np ${SLURM_NTASKS} \\\n         --map-by ppr:${SLURM_NTASKS_PER_NODE}:socket:PE=2 \\\n         ./mon_projet\n")),(0,o.kt)("h2",{id:"visualisation-de-rapport-simple-n\u0153ud"},"Visualisation de rapport simple n\u0153ud"),(0,o.kt)("p",null,"Connectez-vous sur Turpan par ssh ",(0,o.kt)("a",{parentName:"p",href:"/documentation/user-documentation/arch_exp/turpan/connexion/visu"},"voir ici"),". Vous ouvrez un terminal sur le TurboVNC:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"module load nvidia\nmodule load nvhpc/23.1\n\ncd /usr/local/arch-x86/nvidia/nvhpc/Linux_x86_64/23.1/profilers/Nsight_Systems/host-linux-x64/\n\n./nsys-ui.vglrun.wrapper\n")),(0,o.kt)("p",null,'Pour visualiser un rapport dans l\'interface graphique de NSYS, utilisez la "open" dans Nsight pour ouvrir le fichier situ\xe9 \xe0 : /tmpdir/username/mon_project/mon_project.nsys-rep.\n',(0,o.kt)("img",{alt:"Capture d&#39;\xe9cran du formulaire d&#39;engistrement dans le SSO MesoNET",src:r(8021).Z,width:"1916",height:"1191"})))}d.isMDXComponent=!0},8021:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/nsight-ab1121f3fcd79e58e9a0bdd50cf4eb26.png"}}]);