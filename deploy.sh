#!/bin/bash

# Script de déploiement pour Railway
echo "🚀 Déploiement Football Connect Morocco sur Railway"

# Vérifier que git est initialisé
if [ ! -d ".git" ]; then
    echo "📦 Initialisation du repository Git..."
    git init
    git branch -M main
fi

# Ajouter tous les fichiers
echo "📁 Ajout des fichiers..."
git add .

# Commit
echo "💾 Commit des changements..."
git commit -m "Deploy: Football Connect Morocco prototype ready for Railway"

# Vérifier si remote origin existe
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "⚠️  Veuillez ajouter votre remote GitHub:"
    echo "git remote add origin https://github.com/VOTRE_USERNAME/football-connect-morocco.git"
    exit 1
fi

# Push vers GitHub
echo "🌐 Push vers GitHub..."
git push -u origin main

echo "✅ Prêt pour Railway !"
echo ""
echo "Prochaines étapes:"
echo "1. Aller sur https://railway.app"
echo "2. Se connecter avec GitHub"
echo "3. Cliquer sur 'New Project'"
echo "4. Sélectionner 'Deploy from GitHub repo'"
echo "5. Choisir votre repository"
echo ""
echo "🎯 Votre app sera disponible sur: https://VOTRE_APP.railway.app"
