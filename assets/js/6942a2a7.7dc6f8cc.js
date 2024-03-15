"use strict";(self.webpackChunkmesodocs=self.webpackChunkmesodocs||[]).push([[7934],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},425:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:n},t)}},3992:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(7462),a=n(7294),o=n(6010),i=n(2957),s=n(6550),l=n(5238),u=n(3609),c=n(2560);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,u]=h({queryString:n,groupId:r}),[p,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),f=(()=>{const e=l??p;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),v(e)}),[u,v,o]),tabValues:o}}var f=n(1048);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==s&&(p(t),l(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function g(e){const t=v(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function T(e){const t=(0,f.Z)();return a.createElement(g,(0,r.Z)({key:String(t)},e))}},5037:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var r=n(7462),a=(n(7294),n(4137)),o=n(3992),i=n(425);const s={title:"PyTorch",sidebar_position:4},l=void 0,u={unversionedId:"arch_exp/turpan/logiciels/envpython/pytorch",id:"arch_exp/turpan/logiciels/envpython/pytorch",title:"PyTorch",description:"L'installation de PyTorch par pip ou conda sur l'architecture ARM (aarch64) installe uniquement une version CPU. Pour permettre une utilisation GPU, nous avons cr\xe9\xe9 un conteneur apptainer en adaptant pour TURPAN le conteneur pytorch de Nvidia depuis le NGC. Il contient l'ensemble des programmes et librairies d\xe9crit ici//docs.nvidia.com/deeplearning/frameworks/pytorch-release-notes/rel-24-02.html",source:"@site/docs/arch_exp/turpan/logiciels/envpython/pytorch.md",sourceDirName:"arch_exp/turpan/logiciels/envpython",slug:"/arch_exp/turpan/logiciels/envpython/pytorch",permalink:"/documentation/user-documentation/arch_exp/turpan/logiciels/envpython/pytorch",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"PyTorch",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Python tools",permalink:"/documentation/user-documentation/arch_exp/turpan/logiciels/envpython/python-tools"},next:{title:"TensorFlow",permalink:"/documentation/user-documentation/arch_exp/turpan/logiciels/envpython/tensorflow"}},c={},p=[{value:"Utilisation du conteneur pytorch",id:"utilisation-du-conteneur-pytorch",level:2},{value:"Pour plus d&#39;information",id:"pour-plus-dinformation",level:2},{value:"Pytorch et modules python suppl\xe9mentaires",id:"pytorch-et-modules-python-suppl\xe9mentaires",level:2}],d={toc:p},m="wrapper";function h(e){let{components:t,...s}=e;return(0,a.kt)(m,(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"L'installation de PyTorch par pip ou conda sur l'architecture ARM (aarch64) installe uniquement une version CPU. Pour permettre une utilisation GPU, nous avons cr\xe9\xe9 un conteneur apptainer en adaptant pour TURPAN le conteneur pytorch de Nvidia depuis le NGC. Il contient l'ensemble des programmes et librairies d\xe9crit ici : ",(0,a.kt)("a",{parentName:"p",href:"https://docs.nvidia.com/deeplearning/frameworks/pytorch-release-notes/rel-24-02.html"},"https://docs.nvidia.com/deeplearning/frameworks/pytorch-release-notes/rel-24-02.html")),(0,a.kt)("h2",{id:"utilisation-du-conteneur-pytorch"},"Utilisation du conteneur pytorch"),(0,a.kt)("p",null,"Il y a deux fa\xe7ons d'utiliser ce conteneur :"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{label:"Mode sbatch",value:"sbatch",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"Vous pouvez utiliser le conteneur dans un script sbatch. Dans l'exemple ci-dessous avec une r\xe9servation de 1 c\u0153ur CPU et 1 GPU :"),(0,a.kt)("blockquote",null,(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre"},"#!/bin/bash\n#SBATCH -J mon_job\n#SBATCH -p shared\n#SBATCH --nodes 1\n#SBATCH --ntasks 1\n#SBATCH --time=0:15:00\n#SBATCH --gres=gpu:1\n\napptainer exec --bind /tmpdir,/work --nv /work/conteneurs/sessions-interactives/pytorch-24.02-py3-calmip-si.sif python mon_script.py\n")))),(0,a.kt)(i.Z,{label:"Mode interractif",value:"interractif",mdxType:"TabItem"},(0,a.kt)("p",null,"Vous pouvez utiliser le conteneur interactif (pour tester ou installer d'autres outils ou configurer votre environnement). Dans l'exemple ci-dessous avec une demande de ressources de 1 c\u0153ur CPU et 1 GPU :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'srun -p shared -n1 --gres=gpu:1 --pty apptainer shell --bind /tmpdir,/work --nv /work/conteneurs/sessions-interactives/pytorch-24.02-py3-calmip-si.sif\nApptainer> python\nPython 3.10.12 (main, Jun 11 2023, 05:26:28) [GCC 11.4.0] on linux\nType "help", "copyright", "credits" or "license" for more information.\n>>> import torch\n>>> # Pour v\xe9rifier que vos ressources GPU sont bien visibles depuis pytorch\n>>> torch.cuda.current_device()\n0\n>>> torch.cuda.device(0)\n<torch.cuda.device object at 0x4000154a7580>\n>>> torch.cuda.device_count()\n1\n>>> torch.cuda.get_device_name(0)\n\'NVIDIA A100 80GB PCIe\'\n>>> torch.cuda.is_available()\nTrue\n[...]\n>>> # Vos commandes python\n[...]\n')))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Le conteneur n'a acc\xe8s par d\xe9faut qu'\xe0 votre espace $HOME. Si vous avez besoin des espaces WORK ",(0,a.kt)("inlineCode",{parentName:"p"},"/work")," ou SCRATCH ",(0,a.kt)("inlineCode",{parentName:"p"},"/tmpdir")," vous pouvez les accrocher en utilisant l'option ",(0,a.kt)("inlineCode",{parentName:"p"},"--bind")," d'Apptainer par exemple :"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apptainer exec --bind /tmpdir,/work  --nv ...\n"))),(0,a.kt)("p",null,"Exemple de script sbatch pour utiliser pytorch avec le lanceur torchrun en multi-noeuds sur Turpan :"),(0,a.kt)("blockquote",null,(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre"},'#!/bin/bash\n\n#SBATCH --job-name=multinode-example\n#SBATCH --nodes=2\n#SBATCH --ntasks=4\n#SBATCH --ntasks-per-node=2\n#SBATCH --gres=gpu:2\n#SBATCH --cpus-per-task=1\n\nset -x\nsleep 10\n\nexport MASTER_PORT=$(echo "${SLURM_JOB_ID} % 100000 % 50000 + 30000" | bc)\nexport MASTER_ADDR=$(hostname --ip-address)\necho "MASTER_ADDR:MASTER_PORT="${MASTER_ADDR}:${MASTER_PORT}\nexport LOGLEVEL=DEBUG\n\necho "HOSTNAME: $(hostname)"\necho "NODES : ${SLURM_JOB_NODELIST}"\n\nsrun apptainer exec --bind /tmpdir,/work --nv /work/conteneurs/sessions-interactives/pytorch-24.02-py3-calmip-si.sif torchrun \\\n--nnodes 2 \\\n--nproc_per_node 2 \\\n--rdzv_id ${RANDOM} \\\n--rdzv_backend c10d \\\n--rdzv_endpoint "${MASTER_ADDR}:${MASTER_PORT}" \\\n./multinode.py 50 10\n'))),(0,a.kt)("p",null,"Le script et le dataset d'exemple est disponible ici : ",(0,a.kt)("a",{target:"_blank",href:n(401).Z},"torchrun-turpan.tgz (TGZ - 2 ko)")),(0,a.kt)("h2",{id:"pour-plus-dinformation"},"Pour plus d'information"),(0,a.kt)("p",null,"Pour plus d'information sur l'utilisation des conteneurs Apptainer :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"La documentation de l'",(0,a.kt)("a",{parentName:"li",href:"/documentation/user-documentation/arch_exp/turpan/logiciels/apptainer"},"utilisation des conteneurs Apptainer sur Turpan")),(0,a.kt)("li",{parentName:"ul"},"La documentation officeille d'Apptainer : ",(0,a.kt)("a",{parentName:"li",href:"https://apptainer.org/docs/user/1.1/"},"https://apptainer.org/docs/user/1.1/"))),(0,a.kt)("h2",{id:"pytorch-et-modules-python-suppl\xe9mentaires"},"Pytorch et modules python suppl\xe9mentaires"),(0,a.kt)("admonition",{title:"Attention",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"L'utilisation de ce conteneur est incompatible avec l'utilisation des environnements conda !")),(0,a.kt)("p",null,"N\xe9anmoins, vous pouvez ajouter des modules avec pip depuis le conteneur en se positionnant sur une frontale de connexion pour  l'installation (les noeuds de calcul n'ont pas d'acc\xe8s \xe0 internet) :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apptainer shell --nv /work/conteneurs/sessions-interactives/pytorch-24.02-py3-calmip-si.sif\n")),(0,a.kt)("p",null,"Puis, vous pouvez installer les modules souhait\xe9s avec obligatoirement l'option ",(0,a.kt)("inlineCode",{parentName:"p"},"--user")," afin de les installer dans votre home :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Apptainer> pip install --user wandb\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Les paquets seront install\xe9s dans votre environnement pip par d\xe9faut. Si vous souhaitez les installer dans un environnemnt sp\xe9cifique, vous devrez positionner cette variable d'environnement pour l'installation, et la param\xe9trer pour l'ex\xe9cution du conteneur :"),(0,a.kt)("p",{parentName:"admonition"},"Lors de l'installation du paquet"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'export PYTHONUSERBASE="${HOME}/myenv3"\nApptainer> pip install --user wandb\n')),(0,a.kt)("p",{parentName:"admonition"},"Puis lors de l'ex\xe9cution du conteneur :"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'apptainer exec --env "PYTHONUSERBASE=${HOME}/myenv3" --nv ...\n'))))}h.isMDXComponent=!0},401:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/torchrun-turpan-6ccba7ae124a7581713cfeea4fae29cc.tgz"}}]);