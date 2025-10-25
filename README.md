# Football Connect Morocco - Prototype

Prototype Next.js pour connecter joueurs et coachs de football au Maroc via une interface terrain + feed vidéo type reels.

## 🚀 Fonctionnalités

### Pour les Joueurs
- ✅ Création de profil complet (onboarding en 4 étapes)
- ✅ Upload de vidéos (mock) avec métadonnées
- ✅ Profil public avec compétences et statistiques
- ✅ Support vidéo local depuis `/public/videos`

### Pour les Coachs
- ✅ Dashboard avec navigation principale
- ✅ **Terrain interactif** - Formation 4-3-3 cliquable par position
- ✅ **Feed vidéos** - Style reels avec navigation verticale
- ✅ **Recherche avancée** - Filtres par âge, position, localisation
- ✅ Actions rapides : Like, Save, Share

### Backend Mock
- ✅ API Routes Next.js avec stockage en mémoire
- ✅ Seed data avec 6 joueurs vedettes (Amrabat, Ziyech, etc.)
- ✅ Endpoints RESTful pour players, videos, likes, saves

## 🛠 Stack Technique

- **Frontend**: Next.js 14 (App Router), React, TypeScript
- **UI**: TailwindCSS + composants shadcn/ui
- **Icons**: lucide-react
- **Backend**: Next.js API Routes (in-memory)
- **Vidéos**: HTML5 `<video>` avec sources MP4 locales

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Copier les vidéos (si disponibles)
node scripts/copy-videos.js

# Lancer en développement
npm run dev
```

## 🎥 Vidéos

Le script `copy-videos.js` cherche automatiquement les fichiers vidéo :
1. D'abord dans les chemins Windows spécifiés
2. Puis dans le répertoire courant
3. Copie vers `/public/videos/` avec les noms corrects

Fichiers attendus :
- `amrabat-video.mp4` → `amrabat.mp4`
- `ziyech-video.mp4` → `ziyech.mp4`
- `diaz-video.mp4` → `diaz.mp4`
- `ronaldo-video.mp4` → `ronaldo.mp4`
- `messi-video.mp4` → `messi.mp4`
- `hakimi-video.mp4` → `hakimi.mp4`

## 🗺 Navigation

### Pages Publiques
- `/` - Page d'accueil avec hero et pricing
- `/players/[id]` - Profil public joueur

### Espace Coach
- `/coach` - Dashboard principal
- `/coach/terrain` - Terrain interactif 4-3-3
- `/coach/feed` - Feed vidéos type reels
- `/coach/search` - Recherche avec filtres

### Espace Joueur
- `/player/onboarding` - Création de profil (4 étapes)

## 🎯 API Endpoints

```
GET  /api/players          # Liste avec pagination/filtres
GET  /api/players/[userId] # Profil + vidéos
GET  /api/videos           # Feed avec filtres
POST /api/like             # Like/unlike vidéo
POST /api/save             # Save/unsave joueur
```

## 🎨 Design

- Style 2025 premium avec cards arrondies (rounded-2xl)
- Couleurs Maroc : rouge `#c1272d` et vert `#006233`
- Responsive design avec grilles TailwindCSS
- Animations fluides et hover effects

## 🌍 Localisation

- Langue principale : Français
- Devise : MAD (Dirham marocain)
- Support prévu pour l'arabe (ar-MA) via next-intl

## 📱 Fonctionnalités Clés

### Terrain Interactif
- Formation 4-3-3 visuelle sur terrain de foot
- Clic sur position → affiche joueurs pertinents
- Intégration avec la recherche

### Feed Vidéos
- Navigation verticale (molette/flèches)
- Lecture auto avec contrôles minimaux
- Actions rapides : Like, Save, Share, Voir profil

### Recherche Avancée
- Filtres : âge, taille, pied, positions, localisation
- Pagination et tri
- Intégration avec le terrain

## 🚧 Limitations (Prototype)

- Stockage en mémoire (reset à chaque redémarrage)
- Pas d'authentification réelle
- Upload vidéo en mock
- Paiements factices (affichage uniquement)
- Pas de notifications push

## 🎯 Prochaines Étapes

1. Authentification (NextAuth.js)
2. Base de données (Prisma + PostgreSQL)
3. Upload vidéo réel (Cloudinary/AWS S3)
4. Système de notifications
5. Paiements Stripe
6. PWA mobile
7. Internationalisation complète (AR)

---

**Développé pour le marché marocain** 🇲🇦