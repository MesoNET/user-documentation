"use strict";(self.webpackChunkmesodocs=self.webpackChunkmesodocs||[]).push([[3751],{4137:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=u(r),m=s,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,i=new Array(a);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:s,i[1]=o;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7262:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var n=r(7462),s=(r(7294),r(4137));const a={},i="Obtenir vos certificats SSH",o={unversionedId:"code_form/phileas/access/get_ssh_certificates",id:"code_form/phileas/access/get_ssh_certificates",title:"Obtenir vos certificats SSH",description:"Pour des raisons de s\xe9curit\xe9, Phileas n'utilise pas vos cl\xe9s SSH renseign\xe9es sur le portail MesoNET.",source:"@site/docs/code_form/phileas/access/02_get_ssh_certificates.md",sourceDirName:"code_form/phileas/access",slug:"/code_form/phileas/access/get_ssh_certificates",permalink:"/documentation/user-documentation/code_form/phileas/access/get_ssh_certificates",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Demande d'acc\xe8s",permalink:"/documentation/user-documentation/code_form/phileas/access/request_access"},next:{title:"Mise en place de la configuration SSH",permalink:"/documentation/user-documentation/code_form/phileas/access/setup_ssh_configuration"}},c={},u=[{value:"Renseigner la(les) adresse(s) IP de connexion pour vos certificats",id:"renseigner-lales-adresses-ip-de-connexion-pour-vos-certificats",level:2}],l={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,s.kt)(p,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"obtenir-vos-certificats-ssh"},"Obtenir vos certificats SSH"),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Pour des raisons de s\xe9curit\xe9, Phileas n'utilise ",(0,s.kt)("strong",{parentName:"p"},"pas")," vos cl\xe9s SSH renseign\xe9es sur le portail MesoNET.")),(0,s.kt)("p",null,"Une fois que votre compte aura \xe9t\xe9 activ\xe9 sur Phileas, vous recevrez un email. Dans cet email, vous trouverez les instructions suivantes pour obtenir vos certificats SSH."),(0,s.kt)("p",null,"Voyez les certificats SSH comme \xe9tant une cl\xe9 SSH publique, mais avec une s\xe9curit\xe9 tr\xe8s largement augment\xe9e, avec une dur\xe9e de validit\xe9 maximale, des adresses IP autoris\xe9es \xe0 l'utiliser, etc. Etant donn\xe9 le caract\xe8re public de ce certificat, vous pouvez le transmettre sans risque aux \xe9quipes du support. ",(0,s.kt)("strong",{parentName:"p"},"La cl\xe9 priv\xe9e en revanche doit \xeatre strictement personnelle"),"."),(0,s.kt)("h2",{id:"renseigner-lales-adresses-ip-de-connexion-pour-vos-certificats"},"Renseigner la(les) adresse(s) IP de connexion pour vos certificats"),(0,s.kt)("p",null,"Afin de garantir une s\xe9curit\xe9 maximale, nous for\xe7ons le renseignement d'une adresse IP de connexion pour SSH."),(0,s.kt)("p",null,"Rendez vous sur ",(0,s.kt)("a",{parentName:"p",href:"https://auth.phileas.ec-nantes.fr"},"https://auth.phileas.ec-nantes.fr")," et connectez vous avec ",(0,s.kt)("strong",{parentName:"p"},"MesoNET"),"."),(0,s.kt)("p",null,"Une fois connect\xe9, rendez-vous sur l'ic\xf4ne de param\xe8tres en haut a droite :"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"img alt",src:r(7052).Z,width:"794",height:"174"})),(0,s.kt)("p",null,"Ici, vous trouverez une zone de texte ou vous pourrez rentrer les adresses IPs ",(0,s.kt)("strong",{parentName:"p"},"publiques")," que vous souhaitez utiliser pour vous connecter \xe0 Phileas. Afin de vous aider \xe0 d\xe9terminer laquelle utiliser, nous avons mis en \xe9vidence l'adresse IP depuis laquelle vous acc\xe9dez actuellement \xe0 la page (dans la capture d'\xe9cran, 192.168.11.200). Notez qu'il est \xe9videmment pr\xe9f\xe9rable de choisir une adresse IP fixe (\xe9vitez les adresses sur un partage de connexion 4G, sur la box internet d'un ami, etc.)"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"img alt",src:r(9726).Z,width:"1137",height:"427"})),(0,s.kt)("p",null,"Sauvegardez vos choix, et patientez quelques instants. Vous devriez re\xe7evoir un mail avec votre certificat SSH pr\xeat \xe0 l'emploi."),(0,s.kt)("admonition",{type:"warning"},(0,s.kt)("p",{parentName:"admonition"},"Les certificats g\xe9n\xe9r\xe9s sont par d\xe9faut valides pendant 60 jours. Si votre certificat \xe0 expir\xe9 ou si vous souhaitez mettre \xe0 jour les adresses IPs d'acc\xe8s, vous \xeates autonomes sur l'adresse ",(0,s.kt)("a",{parentName:"p",href:"https://auth.phileas.ec-nantes.fr."},"https://auth.phileas.ec-nantes.fr.")," Vous recevrez automatiquement un nouveau certificat lorsque vous cliquerez sur \"Save\". Cette manipulation est n\xe9cessaire pour garantir que vous v\xe9rifiez p\xe9riodiquement vos adresses IPs autoris\xe9es, et que vous supprimiez celles dont vous n'avez plus besoin. Vous pouvez v\xe9rifier vous-m\xeame le contenu de votre certificat SSH (date d'expiration, adresses IP valides, etc.) avec la commande suivante :"),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'$ ssh-keygen -L -f ./phileas_key-cert.pub\n\n./phileas_key-cert.pub:\n        Type: ssh-ed25519-cert-v01@openssh.com user certificate\n        Public key: ED25519-CERT SHA256:UdLlHCFe008eXtSiSFKAt8DPR6uRDAZRhdwwN7Zvr8g\n        Signing CA: ED25519 SHA256:S9GJbecpkIwhdEDY1iLOIrZxPZGKqQOJ9eP+sWfqVec (using ssh-ed25519)\n        Key ID: "pbondial@ec-nantes.fr-external"\n        Serial: 2712428235499462096\n        Valid: from 2024-11-13T15:48:33 to 2024-12-13T15:49:03\n        Principals: \n                pbondial@ec-nantes.fr\n        Critical Options: \n                source-address 130.66.120.1/32,130.66.159.6/32\n        Extensions: \n                permit-X11-forwarding\n                permit-agent-forwarding\n                permit-port-forwarding\n                permit-pty\n'))))}d.isMDXComponent=!0},9726:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/authentik_ips-21754edccf10b98d0734f607cf3918ec.png"},7052:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/authentik_settings-4ce880bce7943a2fb10c8946f3f42b92.png"}}]);