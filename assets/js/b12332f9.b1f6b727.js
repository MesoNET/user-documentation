"use strict";(self.webpackChunkmesodocs=self.webpackChunkmesodocs||[]).push([[2818],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=i(n),m=a,b=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(b,s(s({ref:t},c),{},{components:n})):r.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},425:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7294),a=n(6010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,s),hidden:n},t)}},3992:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(7462),a=n(7294),o=n(6010),s=n(2957),l=n(6550),u=n(5238),i=n(3609),c=n(2560);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,i]=b({queryString:n,groupId:r}),[p,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),f=(()=>{const e=u??p;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),i(e),v(e)}),[i,v,o]),tabValues:o}}var f=n(1048);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:l,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=i[n].value;r!==l&&(p(t),u(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},s,{className:(0,o.Z)("tabs__item",h.tabItem,s?.className,{"tabs__item--active":l===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=v(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(g,(0,r.Z)({},e,t)))}function T(e){const t=(0,f.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},5997:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=n(7462),a=(n(7294),n(4137));n(3992),n(425);const o={title:"Tensorboard",sidebar_position:8},s=void 0,l={unversionedId:"arch_exp/turpan/logiciels/envpython/tensorboard",id:"arch_exp/turpan/logiciels/envpython/tensorboard",title:"Tensorboard",description:"Il est possible d'utiliser Tensorboard pour visualiser ses donn\xe9es sur Turpan.",source:"@site/docs/arch_exp/turpan/logiciels/envpython/tensorboard.md",sourceDirName:"arch_exp/turpan/logiciels/envpython",slug:"/arch_exp/turpan/logiciels/envpython/tensorboard",permalink:"/documentation/user-documentation/arch_exp/turpan/logiciels/envpython/tensorboard",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Tensorboard",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Notebook jupyter",permalink:"/documentation/user-documentation/arch_exp/turpan/logiciels/envpython/jupyterlab"},next:{title:"Les conteneurs",permalink:"/documentation/user-documentation/arch_exp/turpan/logiciels/apptainer"}},u={},i=[{value:"Comment demander une session interactive de Tensorboard",id:"comment-demander-une-session-interactive-de-tensorboard",level:2},{value:"Pour tester",id:"pour-tester",level:2},{value:"Comment arr\xeater une session interactive Tensorboard",id:"comment-arr\xeater-une-session-interactive-tensorboard",level:2},{value:"Si \xe7a ne fonctionne pas",id:"si-\xe7a-ne-fonctionne-pas",level:2}],c={toc:i},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Il est possible d'utiliser Tensorboard pour visualiser ses donn\xe9es sur Turpan."),(0,a.kt)("h2",{id:"comment-demander-une-session-interactive-de-tensorboard"},"Comment demander une session interactive de Tensorboard"),(0,a.kt)("p",null,"Lorsque vous \xeates connect\xe9 sur une frontale de Turpan, ex\xe9cutez le script :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"runTensorboardSession.sh --logdir /path/to/my/dataset\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},'Le r\xe9pertoire par d\xe9faut pour les datasets, si vous ne le pr\xe9cisez pas est "${HOME}/.tensorboard/logs"')),(0,a.kt)("p",null,"Laissez le script d\xe9marrer (cela prend quelques secondes, soyez patient...), puis vous devriez voir un affichage de ce style :"),(0,a.kt)("blockquote",null,(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre"},"[  4/150] Queuing and waiting for Tensorboard session resources initialization (18531) ...\n\ntensorboard session ...\n\n#===========================================================================\n|\n| Your tensorboard session is now available. \n|  \n| You must now open a TERMINAL on YOUR laptop and execute the command : \n|\n|     ssh -L 6006:/users/mxxxxx/uyyyyy/.tensorboard/tensorboard-WW.XX.YY.ZZ-JJJJJ.sock -n uyyyyy@WW.XX.YY.ZZ 'si-init.sh'\n| \n| Then from your browser, visit the following url :\n|     \n|     http://localhost:6006\n|\n#===========================================================================\n| CAUTION : DO NOT CLOSE this slurm job or this terminal !\n#===========================================================================\n\n+---------------------------------------------------------------------------\n| CONNECTION INFO :\n|   * Job ID                 : JJJJJ\n|   * Client                 : WWW.XXX.YYY.ZZZ (FROM THE MOON)\n|   * Target                 : WW.XX.YY.ZZ (turpancompY)\n|   * Tensorboard URL        : http://localhost:6006\n|   * SSH tunnel socket path : /users/mxxxxx/uyyyyy/.tensorboard/tensorboard-WW.XX.YY.ZZ-JJJJJ.sock\n+---------------------------------------------------------------------------\n\n[/] - Press CTRL-C to quit\n"))),(0,a.kt)("p",null,"Sur ",(0,a.kt)("strong",{parentName:"p"},"un second terminal")," sur ",(0,a.kt)("strong",{parentName:"p"},"votre poste de travail"),", ex\xe9cuter la commande ssh donn\xe9e par le script :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -L 6006:/users/mxxxxx/uyyyyy/.tensorboard/tensorboard-WW.XX.YY.ZZ-JJJJJ.sock -n uyyyyy@WW.XX.YY.ZZ 'si-init.sh'\n")),(0,a.kt)("p",null,"Patientez l\xe0 encore quelques secondes et vous devriez obtenir le message suivant :"),(0,a.kt)("blockquote",null,(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre"},"#===========================================================================\n|\n| ssh tunnel established.\n|\n#===========================================================================\n| CAUTION : DO NOT CLOSE this terminal !\n#===========================================================================\n"))),(0,a.kt)("admonition",{title:"DO NOT CLOSE TERMINALS",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Comme les 2 messages l'indiquent, ne fermez pas la fen\xeatre de demande de session interactive sur Turpan, ni celle du tunnel ssh sur votre poste de travail.")),(0,a.kt)("p",null,"Enfin, vous pouvez utiliser Tensorboard en utilisant ",(0,a.kt)("strong",{parentName:"p"},"le navigateur de votre poste de travail"),' et copier/coller l\'URL fournie par le script "http://localhost:6006".'),(0,a.kt)("h2",{id:"pour-tester"},"Pour tester"),(0,a.kt)("p",null,'Vous pouvez g\xe9n\xe9rer des donn\xe9es en suivant le tutoriel "',(0,a.kt)("a",{parentName:"p",href:"https://www.tensorflow.org/tensorboard/get_started"},"Premiers pas avec TensorBoard"),'", dans ',(0,a.kt)("a",{parentName:"p",href:"/documentation/user-documentation/arch_exp/turpan/logiciels/envpython/jupyterlab"},"une session interractive de notebook jupyter")," par exemple, puis visualiser les donn\xe9es en utilisant la commande suivant pour pointer vers le dataset g\xe9n\xe9r\xe9 :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"runTensorboardSession.sh --logdir ${HOME}/logs/fit\n")),(0,a.kt)("h2",{id:"comment-arr\xeater-une-session-interactive-tensorboard"},"Comment arr\xeater une session interactive Tensorboard"),(0,a.kt)("p",null,"Vous pouvez arr\xeater la session interactive Tensorboard en allant sur le terminal dans lequel vous avez lanc\xe9 runJupyterSession.sh, et en tapant :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```bash\nCTRL-C\n```\n")),(0,a.kt)("h2",{id:"si-\xe7a-ne-fonctionne-pas"},"Si \xe7a ne fonctionne pas"),(0,a.kt)("p",null,"Avant de contacter le support, vous pouvez essayer les actions suivantes :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"V\xe9rifier que le terminal contenant la session est toujours actif"),(0,a.kt)("li",{parentName:"ul"},"V\xe9rifier que le terminal contenant le tunnel SSH est toujours actif"),(0,a.kt)("li",{parentName:"ul"},"V\xe9rifier que vous n'avez pas de session de notebook jupyter en local sur votre poste de travail qui utilise d\xe9j\xe0 le port 8888"),(0,a.kt)("li",{parentName:"ul"},"Tuer toutes vos connexions ssh \xe0 destination de Turpan et recommencer une session interactive"),(0,a.kt)("li",{parentName:"ul"},"Si vous \xeates sous windows, relancer votre session mobaxterm")))}d.isMDXComponent=!0}}]);