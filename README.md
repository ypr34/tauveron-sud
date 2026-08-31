# Tauveron Sud

Site vitrine Tauveron Sud (photovoltaïque, électricité et maintenance) avec espace professionnel protégé par un contrôle serveur.

## Déploiement

Projet statique compatible Vercel. L’API `/api/pro-login` valide le code d’accès côté serveur.

En production, définir `PRO_ACCESS_HASH` dans les variables d’environnement Vercel pour remplacer le hash de compatibilité embarqué.
