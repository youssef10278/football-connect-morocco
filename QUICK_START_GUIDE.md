# 🚀 GUIDE DE DÉMARRAGE RAPIDE

## 📋 PRÉREQUIS

- Node.js 18+ (LTS recommandé)
- npm ou yarn
- Git
- Éditeur de code (VS Code recommandé)

---

## 🔧 INSTALLATION

### 1. Cloner le repository
```bash
git clone <repository-url>
cd 29-prototype-football-player-coaches-connexion
```

### 2. Installer les dépendances
```bash
npm install
# ou
yarn install
```

### 3. Copier les vidéos (optionnel)
```bash
npm run copy-videos
# Cherche vidéos MP4 dans chemins Windows spécifiés
# Fallback: répertoire courant
```

### 4. Lancer le serveur de développement
```bash
npm run dev
# Serveur démarre sur http://localhost:3000
```

---

## 🌐 ACCÉDER À L'APPLICATION

### Pages principales
- **Accueil**: http://localhost:3000
- **Dashboard Coach**: http://localhost:3000/coach
- **Terrain Tactique**: http://localhost:3000/coach/terrain
- **Feed Vidéos**: http://localhost:3000/coach/feed
- **Recherche**: http://localhost:3000/coach/search
- **Onboarding Joueur**: http://localhost:3000/player/onboarding
- **Profil Joueur**: http://localhost:3000/players/u-amrabat

---

## 🎮 TESTER LES FONCTIONNALITÉS

### 1. Terrain Tactique
1. Aller à `/coach/terrain`
2. Cliquer sur une position (ex: ST)
3. Voir les joueurs pour ce poste
4. Cliquer sur un joueur pour voir le profil

### 2. Feed Vidéos
1. Aller à `/coach/feed`
2. Utiliser ↑↓ ou molette pour naviguer
3. Cliquer sur ❤️ pour liker
4. Cliquer sur 🔖 pour sauvegarder
5. Cliquer sur 📤 pour partager

### 3. Recherche
1. Aller à `/coach/search`
2. Appliquer filtres (position, age, etc.)
3. Voir résultats filtrés

### 4. Onboarding Joueur
1. Aller à `/player/onboarding`
2. Remplir 4 étapes
3. Cliquer "Créer profil"

---

## 📁 STRUCTURE FICHIERS CLÉS

```
app/
├── page.tsx                 # Accueil
├── layout.tsx              # Layout racine
├── globals.css             # Styles globaux
├── api/
│   ├── players/route.ts    # API joueurs
│   ├── videos/route.ts     # API vidéos
│   ├── like/route.ts       # API likes
│   └── save/route.ts       # API saves
├── coach/
│   ├── page.tsx            # Dashboard
│   ├── terrain/page.tsx    # Terrain
│   ├── feed/page.tsx       # Feed
│   └── search/page.tsx     # Recherche
└── player/
    └── onboarding/page.tsx # Onboarding

components/
├── premium-field.tsx       # Terrain interactif
├── video-player.tsx        # Lecteur vidéo
├── coach-*.tsx             # Composants coach
└── ui/                     # Composants UI

lib/
├── types.ts                # Types TypeScript
├── data.ts                 # Seed data + storage
├── constants.ts            # Constantes
└── utils.ts                # Utilitaires
```

---

## 🔍 EXPLORER LE CODE

### Ajouter un nouveau joueur
```typescript
// lib/data.ts - seedData()
const seedPlayers = [
  {
    user: { 
      id: "u-newplayer", 
      name: "Nouveau Joueur",
      // ... autres champs
    },
    player: { 
      userId: "u-newplayer",
      age: 25,
      positions: ["ST"],
      // ... autres champs
    },
    videos: [...]
  }
];
```

### Ajouter une nouvelle position
```typescript
// lib/constants.ts
export const POSITIONS = [
  // ... positions existantes
  'NEW_POS'
];

export const POSITION_NAMES = {
  // ... noms existants
  'NEW_POS': 'Nouvelle Position'
};
```

### Ajouter une nouvelle formation
```typescript
// components/premium-field.tsx
const FORMATIONS = {
  // ... formations existantes
  '5-3-2': {
    name: '5-3-2 Défensif',
    description: 'Formation défensive',
    positions: {
      GK: [{ x: 50, y: 90, zone: 'defense' }],
      // ... positions
    }
  }
};
```

---

## 🐛 DEBUGGING

### Voir les logs
```bash
# Terminal où npm run dev tourne
# Voir console.log() de l'app
```

### Inspecter API
```bash
# Ouvrir DevTools (F12)
# Aller à Network tab
# Faire une action (like, search, etc.)
# Voir requête/réponse
```

### Tester API directement
```bash
# Terminal
curl http://localhost:3000/api/players
curl http://localhost:3000/api/videos
curl http://localhost:3000/api/players?position=ST
```

---

## 🎨 PERSONNALISER LE DESIGN

### Changer couleurs Maroc
```css
/* app/globals.css */
/* Modifier les couleurs custom */
```

### Ajouter une animation
```css
/* app/globals.css */
@keyframes myAnimation {
  from { /* ... */ }
  to { /* ... */ }
}

.animate-my-animation {
  animation: myAnimation 0.6s ease-out;
}
```

### Modifier TailwindCSS
```javascript
// tailwind.config.js (créer si n'existe pas)
module.exports = {
  theme: {
    extend: {
      colors: {
        'custom': '#123456'
      }
    }
  }
}
```

---

## 📦 BUILD & DEPLOYMENT

### Build pour production
```bash
npm run build
# Crée .next/ folder
```

### Tester build localement
```bash
npm run build
npm run start
# Serveur sur http://localhost:3000
```

### Déployer sur Vercel
```bash
# 1. Push sur GitHub
git push origin main

# 2. Connecter Vercel à GitHub
# https://vercel.com/new

# 3. Vercel build automatiquement
# Déploiement en ~2 minutes
```

---

## 🔐 VARIABLES D'ENVIRONNEMENT

### Créer .env.local
```bash
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:3000
# Ajouter autres variables au besoin
```

### Variables pour production
```bash
# .env.production
NEXT_PUBLIC_API_URL=https://yourdomain.com
DATABASE_URL=postgresql://...
STRIPE_SECRET_KEY=sk_...
```

---

## 📚 RESSOURCES UTILES

### Documentation
- Next.js: https://nextjs.org/docs
- React: https://react.dev
- TailwindCSS: https://tailwindcss.com/docs
- TypeScript: https://www.typescriptlang.org/docs

### Outils
- VS Code: https://code.visualstudio.com
- Vercel: https://vercel.com
- GitHub: https://github.com

### Extensions VS Code recommandées
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin
- Prettier - Code formatter

---

## ❓ TROUBLESHOOTING

### Port 3000 déjà utilisé
```bash
# Utiliser un autre port
npm run dev -- -p 3001
```

### Erreur "Module not found"
```bash
# Réinstaller dépendances
rm -rf node_modules package-lock.json
npm install
```

### Vidéos ne se chargent pas
```bash
# Vérifier que /public/videos/ existe
# Vérifier que vidéos MP4 sont présentes
npm run copy-videos
```

### Styles TailwindCSS ne s'appliquent pas
```bash
# Vérifier que globals.css est importé dans layout.tsx
# Vérifier que tailwind.config.js existe
# Redémarrer serveur dev
```

---

## 🎯 PROCHAINES ÉTAPES

1. **Explorer le code**: Lire PROJECT_ANALYSIS.md
2. **Comprendre l'architecture**: Lire TECHNICAL_ARCHITECTURE.md
3. **Voir les améliorations**: Lire RECOMMENDATIONS_AND_IMPROVEMENTS.md
4. **Commencer à développer**: Créer une branche feature

---

## 💬 BESOIN D'AIDE ?

- Lire la documentation Next.js
- Consulter les commentaires du code
- Vérifier les console logs
- Utiliser DevTools du navigateur

---

**Bon développement ! 🚀**

