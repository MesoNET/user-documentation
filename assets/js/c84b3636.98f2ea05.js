"use strict";(self.webpackChunkmesodocs=self.webpackChunkmesodocs||[]).push([[616],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=s,f=c["".concat(o,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:s,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4164:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(7462),s=(n(7294),n(4137));const r={title:"Le stockage",sidebar_position:3},i="Les espaces de travail sur Bor\xe9ale",l={unversionedId:"arch_exp/boreal/stockage",id:"arch_exp/boreal/stockage",title:"Le stockage",description:"L'utilisateur a un espace de travail personnel dans /home/project_name/username.",source:"@site/docs/arch_exp/boreal/stockage.md",sourceDirName:"arch_exp/boreal",slug:"/arch_exp/boreal/stockage",permalink:"/documentation/user-documentation/arch_exp/boreal/stockage",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Le stockage",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Se connecter \xe0 Bor\xe9ale",permalink:"/documentation/user-documentation/arch_exp/boreal/connexion"},next:{title:"Lancer un calcul",permalink:"/documentation/user-documentation/arch_exp/boreal/jobs"}},o={},u=[{value:"Gestion des donn\xe9es sur la baie de disques",id:"gestion-des-donn\xe9es-sur-la-baie-de-disques",level:2},{value:"Quelques commandes pratiques",id:"quelques-commandes-pratiques",level:3},{value:"Quelques conseils",id:"quelques-conseils",level:3},{value:"Dans les scripts de soumission...",id:"dans-les-scripts-de-soumission",level:4},{value:"Si vous d\xe9veloppez...",id:"si-vous-d\xe9veloppez",level:4},{value:"Si vous g\xe9n\xe9rez beaucoup de fichiers...",id:"si-vous-g\xe9n\xe9rez-beaucoup-de-fichiers",level:4},{value:"Quelques informations compl\xe9mentaires",id:"quelques-informations-compl\xe9mentaires",level:3}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"les-espaces-de-travail-sur-bor\xe9ale"},"Les espaces de travail sur Bor\xe9ale"),(0,s.kt)("p",null,"L'utilisateur a un espace de travail personnel dans ",(0,s.kt)("inlineCode",{parentName:"p"},"/home/project_name/username"),"."),(0,s.kt)("p",null,"Par d\xe9faut un quota disque utilisateur est positionn\xe9 \xe0 50 Go dans ",(0,s.kt)("inlineCode",{parentName:"p"},"/home")," ; la commande ",(0,s.kt)("inlineCode",{parentName:"p"},"mmlsquota gpfs2:home")," fournit le quota et la place que l'utilisateur occupe dans la partition ",(0,s.kt)("inlineCode",{parentName:"p"},"/home"),"."),(0,s.kt)("p",null,"Nous vous encourageons \xe0 calculer dans les dossiers de scratch temporaires (",(0,s.kt)("inlineCode",{parentName:"p"},"/dlocal/run/<jobid>")," disponible via la variable d'environnement ",(0,s.kt)("inlineCode",{parentName:"p"},"LOCAL_WORK_DIR"),") cr\xe9\xe9s par l'outil de batch Slurm pour chaque calcul. Un quota de 10 millions de fichiers est appliqu\xe9 sur l'arborescence ",(0,s.kt)("inlineCode",{parentName:"p"},"/dlocal")," ; la commande ",(0,s.kt)("inlineCode",{parentName:"p"},"mmlsquota gpfs1:dlocal")," fournit le quota et le nombre de fichiers vous appartenant dans l'arborescence ",(0,s.kt)("inlineCode",{parentName:"p"},"/dlocal/run"),"."),(0,s.kt)("p",null,"Si vous estimez que ces limites (quotas) sont trop contraignantes pour vous, n'h\xe9sitez pas \xe0 ouvrir un ticket aupr\xe8s du support. Celles-ci peuvent \xeatre augment\xe9es sur demande justifi\xe9e."),(0,s.kt)("h2",{id:"gestion-des-donn\xe9es-sur-la-baie-de-disques"},"Gestion des donn\xe9es sur la baie de disques"),(0,s.kt)("p",null,"Les donn\xe9es du calculateur Bor\xe9ale sont stock\xe9es sur une baie de disques accessible sur l'ensemble du cluster en GPFS. Les performances mesur\xe9es lors de la livraison sont de 3,5 Go/s pour la partition ",(0,s.kt)("inlineCode",{parentName:"p"},"/dlocal"),". Ces partitions sont optimis\xe9es pour la lecture/\xe9criture sur des gros fichiers."),(0,s.kt)("p",null,"Si vos travaux mettent en jeu une multitude de petits fichiers, prendre contact avec le support afin de mettre en place un acc\xe8s \xe0 une partition plus adapt\xe9e \xe0 ce type de traitements (voir la suite de la documentation pour les explications)."),(0,s.kt)("h3",{id:"quelques-commandes-pratiques"},"Quelques commandes pratiques"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Combien ai-je de fichiers dans /dlocal ?")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"mmlsquota\n\n")),(0,s.kt)("p",null,'lire la ligne gpfs1 dlocal, colonne "files"'),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Combien d'espace disque est-ce que je consomme ?")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"mmlsquota\n")),(0,s.kt)("p",null,'En ajoutant --block-size auto \xe0 la fin de la commande, vous obtiendrez un affichage au format "humain" (avec l\'unit\xe9 de valeur la plus adapt\xe9e pour un humain)'),(0,s.kt)("p",null,"Pour un affichage au format humain des quotas sur les espaces home et dlocal uniquement :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'mmlsquota --block-size auto | awk \'NR<3;($2=="home"||$2=="dlocal")\'\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Comment conna\xeetre la liste des dossiers temporaires de calcul de l'utilisateur nom_login ?")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"find /dlocal/run -type d -mindepth 0 -maxdepth 1 -user nom_login\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Comment conna\xeetre la liste des calculs soumis dans la partition compute entre le 1/11/2022 et le 15/11/2022 pour faire du m\xe9nage ?")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"sacct -r compute -S 2022-11-01 -E 2022-11-15\n")),(0,s.kt)("p",null,"Vous pouvez rajouter l'option -l pour afficher plus d'informations."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Comment conna\xeetre le nombre de fichiers d'un dossier chemin_dossier ?")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"find chemin_dossier -type f | wc -l\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"J'ai besoin de faire diminuer mon nombre de fichiers, mais je ne peux rien supprimer. Comment faire ?")),(0,s.kt)("p",null,"Archivez certaines arborescences avec la commande tar : une archive = 1 ",(0,s.kt)("strong",{parentName:"p"},"fichier")),(0,s.kt)("h3",{id:"quelques-conseils"},"Quelques conseils"),(0,s.kt)("h4",{id:"dans-les-scripts-de-soumission"},"Dans les scripts de soumission..."),(0,s.kt)("p",null,"Le rapatriement des donn\xe9es s'effectue avec une commande mv. Ne la remplacer surtout pas par un cp, qui duplique les donn\xe9es et qui peut \xeatre tr\xe8s longue \xe0 s'ex\xe9cuter."),(0,s.kt)("h4",{id:"si-vous-d\xe9veloppez"},"Si vous d\xe9veloppez..."),(0,s.kt)("p",null,"Privil\xe9giez les fichiers volumineux avec des formats de type HDF5 plut\xf4t qu'une multitude de petits fichiers. Vous gagnerez en performances sur les clusters de calcul avec des tailles de blocs importantes."),(0,s.kt)("h4",{id:"si-vous-g\xe9n\xe9rez-beaucoup-de-fichiers"},"Si vous g\xe9n\xe9rez beaucoup de fichiers..."),(0,s.kt)("p",null,"Surveillez votre quota. Affichez-le automatiquement lors de la connexion (via ajout appropri\xe9 dans votre fichier ",(0,s.kt)("inlineCode",{parentName:"p"},"~/.bash_profile"),")."),(0,s.kt)("h3",{id:"quelques-informations-compl\xe9mentaires"},"Quelques informations compl\xe9mentaires"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"Les partitions et leurs usages"))),(0,s.kt)("p",null,"La baie de disques est s\xe9par\xe9e en 2 parties (syst\xe8mes de fichiers) contenant chacun des sous parties (filesets)."),(0,s.kt)("p",null,"La premi\xe8re partie est la plus volumineuse et la plus performante : elle accueille ",(0,s.kt)("inlineCode",{parentName:"p"},"/dlocal"),"."),(0,s.kt)("p",null,"La deuxi\xe8me partie est plus petite mais sur disques SSD pour compenser la perte de performances de la petite taille de blocs : elle accueille ",(0,s.kt)("inlineCode",{parentName:"p"},"/soft")," et ",(0,s.kt)("inlineCode",{parentName:"p"},"/home"),"."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"/home")," contient les dossiers d'accueil des utilisateurs."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"/dlocal")," contient les dossiers temporaires des calculs (/dlocal/run) et certains dossiers de calcul permanents (",(0,s.kt)("inlineCode",{parentName:"li"},"/dlocal/home"),") quand le besoin est qualifi\xe9."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"/soft")," contient les logiciels mis \xe0 disposition par le CRIANN")),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Aucune sauvegarde n'est effectu\xe9e sur les donn\xe9es utilisateurs. Pensez \xe0 rapatrier vos codes et vos donn\xe9es dans vos laboratoires.")),(0,s.kt)("p",null,"Nous vous encourageons fortement \xe0 utiliser les outils de versioning, tel que GIT, de vos \xe9tablissements. Renseignez-vous aupr\xe8s de vos DSI."),(0,s.kt)("p",null,"Le client ",(0,s.kt)("inlineCode",{parentName:"p"},"git")," est install\xe9 sur les frontales, sans chargement de module."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"Les quotas"))),(0,s.kt)("p",null,"Afin de garantir de bonnes performances, il faut maintenir un taux de remplissage de la baie (volum\xe9trie et nombre de fichier) raisonnable. Pour cela, le CRIANN a positionn\xe9 deux types de quotas :"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"/home")," : quota par d\xe9faut de 50 Go / utilisateur"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"/dlocal")," : quota de 10 millions de fichiers")),(0,s.kt)("p",null,'Dans les 2 cas, les limites correspondent \xe0 des valeurs "soft" pouvant \xeatre d\xe9pass\xe9es temporairement (7 jours). Au del\xe0 de ce d\xe9lai, l\'usage doit redescendre en dessous de la limite soft, sinon, aucune cr\xe9ation de fichier n\'est possible. Une limite "hard" avec en g\xe9n\xe9ral 10 Go suppl\xe9mentaire est \xe9galement positionn\xe9e : elle ne peut en aucun cas \xeatre d\xe9pass\xe9e.'),(0,s.kt)("p",null,"Si vous estimez que ces limites sont trop contraignantes pour vous, n'h\xe9sitez pas \xe0 ouvrir un ticket aupr\xe8s du support. Celles-ci peuvent \xeatre augment\xe9es sur demande justifi\xe9e."),(0,s.kt)("p",null,"La commande ",(0,s.kt)("inlineCode",{parentName:"p"},"mmlsquota"),' explique en haut de cette page permet d\'afficher les quotas et les d\xe9lais de "grace" entre les quotas "soft" et "hard". Une fois le d\xe9lai de 7 jours d\xe9pass\xe9, toute demande d\'allocation de volum\xe9trie suppl\xe9mentaire est refus\xe9e. Seules les commandes permettant de revenir en dessous du quota "soft" sont permises.'),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"La probl\xe9matique du nombre de fichiers"))),(0,s.kt)("p",null,"Le CRIANN a fait le choix de conserver les dossiers temporaires des calculs (",(0,s.kt)("inlineCode",{parentName:"p"},"/dlocal/run/<jobid>"),") au del\xe0 de la vie des calculs. Ce dossier peut ainsi \xeatre utilis\xe9 comme dossier de travail du calcul suivant."),(0,s.kt)("p",null,"Ces dossiers sont supprim\xe9s automatiquement par le CRIANN, 45 jours apr\xe8s la fin du calcul correspondant. Cela a l'avantage de pouvoir permettre d'encha\xeener plusieurs calculs et \xe9galement de r\xe9cup\xe9rer des donn\xe9es qui n'auraient pas \xe9t\xe9 r\xe9cup\xe9r\xe9es en fin de calcul."),(0,s.kt)("p",null,"Pour la majeure partie des utilisateurs, en 45 jours, cela correspond \xe0 quelques milliers de fichiers. Pour certains utilisateurs de logiciels sp\xe9cifiques, cela peut repr\xe9senter plusieurs dizaines de millions de fichiers. Le quota est l\xe0 pour \xe9viter une d\xe9rive, mais la soumission de nouveaux calculs devient impossible si le quota est d\xe9pass\xe9 : il faut donc faire du m\xe9nage en compl\xe9ment du m\xe9nage automatique..."),(0,s.kt)("p",null,"Si vous avez des questions, ",(0,s.kt)("a",{parentName:"p",href:"mailto:support@criann.fr"},"merci de contacter le support"),"."))}d.isMDXComponent=!0}}]);