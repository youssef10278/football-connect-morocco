# 🚀 Déploiement sur Railway

## Prérequis

1. Compte GitHub
2. Compte Railway (gratuit)
3. Code pushé sur GitHub

## Étapes de déploiement

### 1. Préparer le repository GitHub

```bash
# Initialiser git (si pas déjà fait)
git init

# Ajouter tous les fichiers
git add .

# Commit initial
git commit -m "Initial commit - Football Connect Morocco prototype"

# Ajouter remote GitHub
git remote add origin https://github.com/VOTRE_USERNAME/football-connect-morocco.git

# Push vers GitHub
git push -u origin main
```

### 2. Déployer sur Railway

1. Aller sur [railway.app](https://railway.app)
2. Se connecter avec GitHub
3. Cliquer sur "New Project"
4. Sélectionner "Deploy from GitHub repo"
5. Choisir votre repository `football-connect-morocco`
6. Railway détectera automatiquement Next.js

### 3. Configuration automatique

Railway va automatiquement :
- Détecter Next.js
- Installer les dépendances (`npm install`)
- Exécuter le build (`npm run build`)
- Démarrer l'application (`npm start`)

### 4. Variables d'environnement (optionnel)

Si vous avez des variables d'environnement :
1. Aller dans l'onglet "Variables"
2. Ajouter vos variables :
   - `NODE_ENV=production`
   - Autres variables si nécessaire

### 5. Domaine personnalisé (optionnel)

1. Aller dans l'onglet "Settings"
2. Section "Domains"
3. Ajouter votre domaine personnalisé

## URLs de déploiement

- **URL Railway** : `https://VOTRE_APP.railway.app`
- **URL personnalisée** : Votre domaine si configuré

## Commandes utiles

```bash
# Build local pour tester
npm run build

# Démarrer en mode production
npm start

# Linter
npm run lint
```

## Troubleshooting

### Problème de build
- Vérifier que toutes les dépendances sont dans `package.json`
- Vérifier les erreurs TypeScript

### Problème de vidéos
- Les vidéos ne sont pas incluses dans le déploiement
- Utiliser un service de stockage externe (Cloudinary, AWS S3) pour la production

### Problème de performance
- Activer la compression dans `next.config.js`
- Optimiser les images

## Monitoring

Railway fournit :
- Logs en temps réel
- Métriques de performance
- Alertes de santé

## Coûts

- **Plan gratuit** : 500 heures/mois
- **Plan Pro** : $5/mois pour usage illimité

## Support

- Documentation Railway : https://docs.railway.app
- Support Railway : https://railway.app/help
