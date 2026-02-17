# Transferts de gros fichiers

:::danger

Cette page est réservée aux utilisations très précises de Phileas qui ne pourraient pas s'effectuer avec le portail. Un exemple
potentiel serait le transfert de données > 2Go vers ou depuis Phileas. Pour __toutes__ les autres utilisations, [nous vous demandons d'utiliser le portail Web](../portal/01_initial_access.md)

:::


Pour transférer des fichiers volumineux, le portail web n'est pas adapté. Pour effectuer des transferts, il faut passer par SSH. Vous avez à votre disposition une page vous permettant de demander un accès SSH temporaire : https://auth.phileas.ec-nantes.fr/if/user/#/settings

Sur cette page de paramètres, cliquez simplement sur _Save_ et vous reçevrez un email avec les informations de connexion que vous pourrez utiliser. Suivez les instructions décrites dans l'email pour continuer.

Le token que vous reçevrez est __individuel__ et vous permettra de vous connecter en SSH pour faire quelques tests simples, et de transférer vos données. Vous pourrez également utiliser n'importe quel client de transfert de fichier SSH (FileZilla, WinSCP, etc.) pour envoyer/rapatrier vos fichiers.


:::info
Ne soyez pas étonnés, votre nom d'utilisateur ressemblera à `ticket-2bc56f594b7fc05c7f480d79acb1c025e8dc181f461c3603187dad3fb093eb65` , mais il correspond bien à votre utilisateur sur Phileas.
:::
