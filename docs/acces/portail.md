# Comment accéder au portail Mesonet ? 

Pour accéder au portail MesoNet, il faut au préalable se créer un compte. 

## Demander un compte Mesonet

Pour demander un compte mesonet, faites pointer votre navigateur sur l'URL: https://iam.mesonet.fr/

1. Si vous le pouvez, **connectez-vous avec vos identifiants institutionnels** (CNRS, université, institutions de recherche étrangères ,etc.) en cliquant sur le **bouton EduGAIN**. Si vous n'avez pas d'identifiants institutionnels (entreprises, ...) et seulement dans ce cas, ouvrez un compte local. Pour cela, visitez l'URL https://iam.mesonet.fr/start-registration pour vous créer un compte.
2. Dans tous les cas, vous serez redirigés vers l'écran suivant : 

![Capture d'écran du formulaire d'engistrement dans le SSO Mesonet](/img/portail_register.png)

- Vérifiez et corrigez si nécessaire votre adresse mail, votre prénom et nom
- Choisissez-vous un Username:
  - De préférence prenom_nom: jean_dupont
  - Ou alors prenom_compose_nom_compose: jean_marie_de_la_riviere (les contraintes sont les mêmes que pour un nom d'utilisateur unix: ne mettez pas de caractères accentués, ni de caractères spéciaux, 32 caractères max !)
- Expliquez brièvement qui vous êtes dans la note, en particulier indiquez votre institut/laboratoire de rattachement
- Cliquez sur Register

:::note

Durant tout ce processus, Il peut arriver que vous soyez confronté à une erreur comme ci-dessous: dans ce cas, veuillez arrêter puis redémarrer votre navigateur.

![Capture d'écran du formulaire d'engistrement dans le SSO Mesonet](/img/portail_err.png)

:::

## Valider son adresse email

Vous allez recevoir un mail à l'adresse que vous avez renseignée, vous devrez cliquer sur le lien présent dans le mail afin de la valider:

```
Dear Jean Dupont,

you have requested to be a member of MesoNET SSO.

In order for the registration to proceed, please confirm this
request by going to the following URL:

https://iam.mesonet.fr/registration/verify/xxxxxxx-yyyy-yyyy-yyyy-yyyyyyyyy

The MesoNET SSO registration service
```

Un administrateur de mesonet devra alors valider votre compte, à la suite de quoi vous recevrez le message suivant :

```
Dear Jean Dupont,

your registration request has been approved.

The username for your account is:

jean_dupont

You can set your local MesoNET SSO password by following this link:

https://iam.mesonet.fr/iam/password-reset/token/xxxxxxx-yyyy-yyyy-yyyy-yyyyyyyyy

Note that this step is not needed if you are using an external identity provider
to log into MesoNET SSO, your account is already active.

The MesoNET SSO registration service
```

**Si vous vous identifiez via Edugain, vous ne DEVEZ PAS définir de mot de passe.** Mais si vous avez créé un compte local, vous devrez cliquer sur le lien pour vous choisir un mot de passe.

## Accéder aux ressources Mesonet

Maintenant que vous avez votre compte mesonet, vous êtes en mesure de demander des ressources de calcul, pour l'instant seulement sur Boréale ou Turpan.

1/ Pour cela, rendez-vous sur https://acces.mesonet.fr. Cliquez sur le bouton **connexion**" en haut à droite, et identifiez vous de la même façon que lors de la création de votre compte, typiquement via eduGAIN, enfin complétez votre profil.

2/ Cliquez alors sur le bouton **Demandeur** pour arriver à l'écran de vos projets : si vous êtes déclaré comme collaborateur d'un projet, vous le verrez apparaître. Si vous êtes reconnu comme chercheur ou ingénieur permanent, vous pourrez aussi démarrer un nouveau projet et inviter des collègues à y collaborer. Pour cela, cliquez sur le bouton bouton **nouveau projet**

### Répondre à une invitation

Peut-être avez-vous été "invité à mesonet" par un collègue, responsable de projet. Cela signifie que vous avez reçu un mail tel que celui-ci :

```
Bonjour Jean Dupont

Vous avez été invité-e par le responsable de projet Alice User sur la plateforme
d'attribution de ressources de MESONET.

Si vous n'avez pas encore de compte Mesonet,
nous vous invitons à vous créer un compte en suivant les instructions suivantes: https://www.calmip.univ-toulouse.fr/demander-un-compte-mesonet

Ensuite, connectez-vous à
 https://acces.mesonet.fr/gramc-meso/xxxxxxyyyyyyyyzzzzzzzzzzzzzzzz/repinvit et renseignez complètement votre profil.

ATTENTION L'invitation expire le 31-12-2022

Cordialement,
L'équipe MESONET
```

Dans ce cas, vous devrez :
1. Ouvrir votre compte mesonet comme indiqué ci-dessus.
2. Puis, suivre le second lien afin de mettre en relation votre compte mesonet et l'invitation.
