"use strict";(self.webpackChunkmesodocs=self.webpackChunkmesodocs||[]).push([[2998],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,v=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(v,s(s({ref:t},c),{},{components:n})):r.createElement(v,s({ref:t},c))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},425:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7294),a=n(6010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,s),hidden:n},t)}},3992:(e,t,n)=>{n.d(t,{Z:()=>x});var r=n(7462),a=n(7294),o=n(6010),s=n(2957),i=n(6550),u=n(5238),l=n(3609),c=n(2560);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,l]=v({queryString:n,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),h=(()=>{const e=u??p;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),l(e),f(e)}),[l,f,o]),tabValues:o}}var h=n(1048);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=l[n].value;r!==i&&(p(t),u(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},l.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},s,{className:(0,o.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":i===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},a.createElement(g,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function x(e){const t=(0,h.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},1570:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>v,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(4137)),o=n(3992),s=n(425);const i={title:"Se connecter \xe0 Turpan",sidebar_position:2},u="Comment se connecter \xe0 Turpan",l={unversionedId:"arch_exp/turpan/connexion/index",id:"arch_exp/turpan/connexion/index",title:"Se connecter \xe0 Turpan",description:"La connexion sur la machine de prototypage Turpan se fait obligatoirement par cl\xe9 SSH.",source:"@site/docs/arch_exp/turpan/connexion/index.md",sourceDirName:"arch_exp/turpan/connexion",slug:"/arch_exp/turpan/connexion/",permalink:"/documentation/user-documentation/arch_exp/turpan/connexion/",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Se connecter \xe0 Turpan",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Description",permalink:"/documentation/user-documentation/arch_exp/turpan/description"},next:{title:"Visualisation",permalink:"/documentation/user-documentation/arch_exp/turpan/connexion/visu"}},c={},p=[{value:"\xc0 partir d&#39;une adresse non autoris\xe9e",id:"\xe0-partir-dune-adresse-non-autoris\xe9e",level:2},{value:"Se connecter en utilisant Vscode",id:"se-connecter-en-utilisant-vscode",level:2},{value:"Se connecter aux \xe9quipements graphiques",id:"se-connecter-aux-\xe9quipements-graphiques",level:2},{value:"Transf\xe9rer des fichiers entre Turpan et votre poste de travail",id:"transf\xe9rer-des-fichiers-entre-turpan-et-votre-poste-de-travail",level:2},{value:"Changer son mot de passe",id:"changer-son-mot-de-passe",level:2}],d={toc:p},m="wrapper";function v(e){let{components:t,...i}=e;return(0,a.kt)(m,(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"comment-se-connecter-\xe0-turpan"},"Comment se connecter \xe0 Turpan"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"La connexion sur la machine de prototypage Turpan se fait obligatoirement par cl\xe9 SSH."))),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"linux",label:"GNU Linux/MacOS",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"Ce qui suit suppose que vous avez g\xe9n\xe9r\xe9 et d\xe9ploy\xe9 une cl\xe9 ssh sur votre compte Turpan. La g\xe9n\xe9ration est expliqu\xe9 en d\xe9tail sur ",(0,a.kt)("a",{parentName:"p",href:"/documentation/user-documentation/acces/ssh"},"la page d\xe9di\xe9e \xe0 l'utilisation du portail"),"."),(0,a.kt)("p",null,"\xc9crivez un fichier appel\xe9 ",(0,a.kt)("inlineCode",{parentName:"p"},".ssh/config")," (ou compl\xe9tez-le s'il existe d\xe9j\xe0 !) de la mani\xe8re suivante:"),(0,a.kt)("blockquote",null,(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# La configuration suivante est indispensable pour utiliser les outils\n# runVisuSession, runJupyterSession, runTensorboardSession sur turpan\nHost turpan turpanlogin turpanlogin.calmip.univ-toulouse.fr\n  Hostname turpanlogin.calmip.univ-toulouse.fr\n  IdentityFile ~/.ssh/votre_cle_ssh_privee\n  IdentitiesOnly=yes\n  User votre_nom_d_utilisateur\n\n# Configuration par frontale\nHost turpanlogin1\n  Hostname turpanlogin1.calmip.univ-toulouse.fr\n  IdentityFile ~/.ssh/votre_cle_ssh_privee\n  IdentitiesOnly=yes\n  User votre_nom_d_utilisateur\n\nHost turpanlogin2\n  Hostname turpanlogin2.calmip.univ-toulouse.fr\n  IdentityFile ~/.ssh/votre_cle_ssh_privee\n  IdentitiesOnly=yes\n  User votre_nom_d_utilisateur\n"))),(0,a.kt)("p",null,"Bien s\xfbr vous devrez remplacer ",(0,a.kt)("inlineCode",{parentName:"p"},"votre_nom_d_utilisateur")," par le nom d'utilisateur qui vous a \xe9t\xe9 donn\xe9 sur Turpan."),(0,a.kt)("p",null,"Et vous devrez remplacer ",(0,a.kt)("inlineCode",{parentName:"p"},"votre_cle_ssh_privee")," par le nom de fichier que vous avez choisi lors de la cr\xe9ation de votre cl\xe9 ssh."),(0,a.kt)("p",null,"D\xe8s lors, \xe0 partir des r\xe9seaux locaux autoris\xe9s, vous pouvez vous connecter sur Turpan par:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ssh -XY turpanlogin\n")),(0,a.kt)("p",null,"Une fois connect\xe9 vous \xeates sur une des frontales de connexion de Turpan.")),(0,a.kt)(s.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,a.kt)("p",null,"Sous Windows vous devez installer un client ssh. CALMIP recommande l'usage de MobaXterm (Home Edition). "),(0,a.kt)("p",null,"T\xe9l\xe9chargez la version portable sur ce site : ",(0,a.kt)("a",{parentName:"p",href:"https://mobaxterm.mobatek.net"},"https://mobaxterm.mobatek.net")," puis il vous suffit d'extraire les fichiers contenus dans l'archive .zip \xe0 l'emplacement de votre choix. Lancez ensuite l'application en double-cliquant sur le fichier MobaXterm_Personal_22.x.zip."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"En t\xe9l\xe9chargement sur ",(0,a.kt)("a",{parentName:"p",href:"http://mobaxterm.mobatek.net/downlo"},"http://mobaxterm.mobatek.net/downlo"),".... Une version portable est disponible, il n\u2019est pas n\xe9cessaire d\u2019\xeatre administrateur de son poste de travail pour l\u2019installer. On peut aussi utiliser putty associ\xe9 \xe0 Xwin32")),(0,a.kt)("p",null,"Cliquez sur le bouton 'Session' puis sur le bouton SSH. Remplissez les informations de la connexion ssh :"),(0,a.kt)("blockquote",null,(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre"},"Remote Host : turpanlogin.calmip.univ-toulouse.fr\n"))),(0,a.kt)("p",null,"Specify Username : monloginturpan (\xe0 remplacer par votre propre nom d'utilisateur)"),(0,a.kt)("p",null,"Cliquez sur l'onglet 'Advanced SSH settings' et cochez la case 'Use private key'. S\xe9lectionnez alors le fichier .ppk que ",(0,a.kt)("a",{parentName:"p",href:"/documentation/user-documentation/acces/ssh"},"vous avez sauvegard\xe9 lors de la cr\xe9ation de votre cl\xe9 ssh.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Capture d&#39;\xe9cran de MobaXTerm",src:n(7368).Z,width:"899",height:"598"})),(0,a.kt)("p",null,"Cliquez sur OK."),(0,a.kt)("p",null,"Vous pouvez d\xe9sormais lancer une session SSH sur Turpan en double-cliquant sur le Bookmark ainsi cr\xe9\xe9 :"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Capture d&#39;\xe9cran de g\xe9n\xe9ration de cl\xe9",src:n(2374).Z,width:"797",height:"337"})))),(0,a.kt)("h2",{id:"\xe0-partir-dune-adresse-non-autoris\xe9e"},"\xc0 partir d'une adresse non autoris\xe9e"),(0,a.kt)("p",null,"Si votre adresse IP n\u2019est pas autoris\xe9e, ",(0,a.kt)("strong",{parentName:"p"},"vous ne pouvez pas vous connecter"),". Normalement vous d\xe9pendez d'un laboratoire de recherche : si vous \xeates dans votre laboratoire l'adresse IP de celui-ci est probablement autoris\xe9e, si ce n'est pas le cas veuillez nous contacter."),(0,a.kt)("p",null,"Si vous \xeates \xe0 l'ext\xe9rieur, connectez-vous au vpn de votre laboratoire, votre adresse IP sera d\xe8s lors autoris\xe9e."),(0,a.kt)("h2",{id:"se-connecter-en-utilisant-vscode"},"Se connecter en utilisant Vscode"),(0,a.kt)("p",null,"Utiliser Visual Studio Code Remote - SSH avec Turpan simplifie votre flux de travail en permettant l'\xe9dition directe de code avec toutes les fonctionnalit\xe9s de VS Code, telles qu\u2019IntelliSense, le d\xe9bogage et les extensions. Le terminal int\xe9gr\xe9 vous permet d'ex\xe9cuter des scripts SLURM et de g\xe9rer les fichiers directement sur Turpan sans changer d\u2019outil."),(0,a.kt)("p",null,"Cette configuration \xe9limine les transferts de fichiers fr\xe9quents, car vous pouvez \xe9diter et tester les fichiers directement sur turpan. Cette approche am\xe9liore la productivit\xe9 et simplifie la gestion des fichiers."),(0,a.kt)("p",null,"Visual Studio Code doit \xeatre install\xe9 sur votre machine locale. Apr\xe8s avoir transf\xe9r\xe9 votre projet une premi\xe8re fois, comme d\xe9crit pr\xe9c\xe9demment, vous pouvez ensuite effectuer des modifications continues en utilisant:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"code --remote ssh-remote+turpanlogin /path/on/turpan/mon_projet\n")),(0,a.kt)("h2",{id:"se-connecter-aux-\xe9quipements-graphiques"},"Se connecter aux \xe9quipements graphiques"),(0,a.kt)("p",null,"Vous pouvez visualiser vos donn\xe9es ou r\xe9sultats de calculs sans devoir les d\xe9placer de la machine Turpan \xe0 l'aide de ",(0,a.kt)("a",{parentName:"p",href:"/documentation/user-documentation/arch_exp/turpan/connexion/visu"},"cette documentation"),"."),(0,a.kt)("h2",{id:"transf\xe9rer-des-fichiers-entre-turpan-et-votre-poste-de-travail"},"Transf\xe9rer des fichiers entre Turpan et votre poste de travail"),(0,a.kt)("p",null,"La proc\xe9dure pour envoyer des fichiers sur Turpan, ou r\xe9cup\xe9rer sur votre poste de travail les fichiers d\xe9pos\xe9s sur Turpan ",(0,a.kt)("a",{parentName:"p",href:"/documentation/user-documentation/arch_exp/turpan/connexion/transfert"},"est ici")," (la proc\xe9dure est la m\xeame que pour le calculateur Olympe Du CALMIP)."),(0,a.kt)("h2",{id:"changer-son-mot-de-passe"},"Changer son mot de passe"),(0,a.kt)("p",null,"On ne peut pas se connecter sur Turpan avec un mot de passe, il faut utiliser une ",(0,a.kt)("a",{parentName:"p",href:"/documentation/user-documentation/acces/ssh"},"cl\xe9 ssh")))}v.isMDXComponent=!0},2374:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Moba_bookmark-4fb626d88d653f886bbc870f481d332b.png"},7368:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Moba_session-a3e04441c095fb43459a00f980363069.png"}}]);