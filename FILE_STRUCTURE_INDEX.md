# 📑 INDEX COMPLET DES FICHIERS

## 📊 RÉSUMÉ STATISTIQUES

- **Total fichiers**: 40+
- **Lignes de code**: 5000+
- **Composants React**: 15+
- **Pages**: 8+
- **API endpoints**: 5
- **Types TypeScript**: 10+

---

## 🗂️ STRUCTURE COMPLÈTE

### 📄 Configuration & Racine

```
package.json                 # Dépendances + scripts
tsconfig.json               # Configuration TypeScript
tailwind.config.js          # Configuration TailwindCSS (implicite)
next.config.js              # Configuration Next.js (implicite)
.eslintrc.json              # Configuration ESLint
README.md                   # Documentation projet
```

### 📁 app/ - Application principale

#### Pages
```
app/
├── page.tsx                 # Accueil (hero + pricing)
├── layout.tsx              # Layout racine
├── globals.css             # Styles globaux
├── not-found.tsx           # Page 404
│
├── coach/
│   ├── page.tsx            # Dashboard coach
│   ├── terrain/
│   │   └── page.tsx        # Terrain tactique interactif
│   ├── feed/
│   │   └── page.tsx        # Feed vidéos (reels)
│   ├── search/
│   │   └── page.tsx        # Recherche avancée
│   └── shortlists/
│       └── page.tsx        # Listes de suivi (futur)
│
├── player/
│   └── onboarding/
│       └── page.tsx        # Création profil (4 étapes)
│
└── players/
    └── [userId]/
        └── page.tsx        # Profil public joueur
```

#### API Routes
```
app/api/
├── players/
│   ├── route.ts            # GET /api/players (liste + filtres)
│   └── [userId]/
│       └── route.ts        # GET /api/players/[userId] (détail)
│
├── videos/
│   └── route.ts            # GET /api/videos (feed)
│
├── like/
│   └── route.ts            # POST /api/like (like/unlike)
│
└── save/
    └── route.ts            # POST /api/save (save/unsave)
```

### 🧩 components/ - Composants React

#### Composants Coach
```
components/
├── coach-header.tsx        # Header avec navigation
├── coach-stats.tsx         # Statistiques dashboard
├── coach-navigation.tsx    # Navigation principale
├── coach-activity.tsx      # Activité récente
│
├── premium-field.tsx       # Terrain tactique interactif
├── premium-player-list.tsx # Liste joueurs filtrés
├── premium-stats.tsx       # Stats section accueil
├── premium-testimonials.tsx # Testimonials section
├── formation-stats.tsx     # Stats formation
│
├── player-card.tsx         # Carte joueur
├── video-player.tsx        # Lecteur vidéo fullscreen
│
└── ui/
    ├── button.tsx          # Composant Button
    ├── card.tsx            # Composant Card
    ├── badge.tsx           # Composant Badge
    └── loading.tsx         # Composant Loading
```

### 📚 lib/ - Logique métier

```
lib/
├── types.ts                # Types TypeScript
│   ├── UserRole
│   ├── Plan
│   ├── DominantFoot
│   ├── VideoStatus
│   ├── User
│   ├── Player
│   ├── PlayerSkills
│   ├── Video
│   ├── Coach
│   ├── Like
│   ├── Save
│   ├── Shortlist
│   └── PlayerWithUser
│
├── data.ts                 # Seed data + in-memory storage
│   ├── seedData()
│   ├── getUsers()
│   ├── getPlayers()
│   ├── getPlayerById()
│   ├── getVideos()
│   ├── getCoaches()
│   ├── addLike()
│   ├── removeLike()
│   ├── addSave()
│   └── removeSave()
│
├── constants.ts            # Constantes
│   ├── POSITIONS
│   ├── POSITION_NAMES
│   ├── COUNTRIES
│   ├── MOROCCAN_CITIES
│   ├── SKILL_NAMES
│   └── PLANS
│
└── utils.ts                # Utilitaires
    ├── cn()
    ├── formatDuration()
    ├── formatPrice()
    ├── getPositionColor()
    ├── getSkillColor()
    ├── getRatingColor()
    ├── formatTimeAgo()
    └── getSkillName()
```

### 📁 public/ - Ressources statiques

```
public/
├── videos/
│   ├── amrabat.mp4         # Vidéo Amrabat
│   ├── ziyech.mp4          # Vidéo Ziyech
│   ├── diaz.mp4            # Vidéo Diaz
│   ├── ronaldo.mp4         # Vidéo Ronaldo
│   ├── messi.mp4           # Vidéo Messi
│   └── hakimi.mp4          # Vidéo Hakimi
│
└── [autres assets]
```

### 🔧 scripts/ - Scripts utilitaires

```
scripts/
└── copy-videos.js          # Script copie vidéos
    ├── Cherche vidéos Windows paths
    ├── Fallback répertoire courant
    └── Copie vers /public/videos/
```

### 📋 Documentation (Créée par analyse)

```
PROJECT_ANALYSIS.md                    # Analyse technique complète
USER_FLOWS_AND_FEATURES.md            # Flux utilisateur détaillés
TECHNICAL_ARCHITECTURE.md              # Architecture technique
RECOMMENDATIONS_AND_IMPROVEMENTS.md    # Recommandations
EXECUTIVE_SUMMARY.md                   # Résumé exécutif
QUICK_START_GUIDE.md                   # Guide démarrage rapide
ARCHITECTURE_DIAGRAMS.md               # Diagrammes architecture
FILE_STRUCTURE_INDEX.md                # Ce fichier
```

---

## 📊 FICHIERS PAR CATÉGORIE

### Pages (8)
- app/page.tsx
- app/coach/page.tsx
- app/coach/terrain/page.tsx
- app/coach/feed/page.tsx
- app/coach/search/page.tsx
- app/player/onboarding/page.tsx
- app/players/[userId]/page.tsx
- app/layout.tsx

### Composants (15+)
- coach-header.tsx
- coach-stats.tsx
- coach-navigation.tsx
- coach-activity.tsx
- premium-field.tsx
- premium-player-list.tsx
- premium-stats.tsx
- premium-testimonials.tsx
- formation-stats.tsx
- player-card.tsx
- video-player.tsx
- button.tsx
- card.tsx
- badge.tsx
- loading.tsx

### API Routes (5)
- app/api/players/route.ts
- app/api/players/[userId]/route.ts
- app/api/videos/route.ts
- app/api/like/route.ts
- app/api/save/route.ts

### Logique métier (4)
- lib/types.ts
- lib/data.ts
- lib/constants.ts
- lib/utils.ts

### Configuration (5)
- package.json
- tsconfig.json
- app/globals.css
- .eslintrc.json
- scripts/copy-videos.js

---

## 🔍 FICHIERS CLÉS PAR FONCTIONNALITÉ

### Terrain Tactique
- components/premium-field.tsx (Composant principal)
- app/coach/terrain/page.tsx (Page)
- lib/constants.ts (Positions)

### Feed Vidéos
- components/video-player.tsx (Lecteur)
- app/coach/feed/page.tsx (Page)
- app/api/videos/route.ts (API)

### Recherche
- app/coach/search/page.tsx (Page)
- app/api/players/route.ts (API)

### Onboarding
- app/player/onboarding/page.tsx (Page)
- lib/types.ts (Types)

### Profil Joueur
- app/players/[userId]/page.tsx (Page)
- app/api/players/[userId]/route.ts (API)

### Dashboard Coach
- app/coach/page.tsx (Page)
- components/coach-header.tsx
- components/coach-stats.tsx
- components/coach-navigation.tsx
- components/coach-activity.tsx

### Accueil
- app/page.tsx (Page)
- components/premium-stats.tsx
- components/premium-testimonials.tsx

---

## 📈 TAILLE DES FICHIERS (Estimé)

| Fichier | Lignes | Taille |
|---------|--------|--------|
| app/page.tsx | 406 | ~12 KB |
| components/premium-field.tsx | 317 | ~10 KB |
| app/player/onboarding/page.tsx | 389 | ~12 KB |
| app/coach/terrain/page.tsx | 169 | ~5 KB |
| app/coach/feed/page.tsx | 161 | ~5 KB |
| lib/data.ts | 137 | ~4 KB |
| lib/types.ts | 79 | ~2 KB |
| lib/constants.ts | 103 | ~3 KB |
| components/video-player.tsx | 147 | ~4 KB |
| app/globals.css | 249 | ~8 KB |

---

## 🔗 DÉPENDANCES ENTRE FICHIERS

### Imports courants
```
app/page.tsx
  ├── @/components/premium-stats
  ├── @/components/premium-testimonials
  └── lucide-react

app/coach/terrain/page.tsx
  ├── @/components/premium-field
  ├── @/components/premium-player-list
  ├── @/components/formation-stats
  ├── @/lib/types
  └── lucide-react

components/premium-field.tsx
  ├── @/components/ui/badge
  ├── @/components/ui/card
  └── lucide-react

lib/data.ts
  └── @/lib/types
```

---

## 🎯 FICHIERS À MODIFIER POUR AJOUTER UNE FONCTIONNALITÉ

### Ajouter une nouvelle position
1. lib/constants.ts (POSITIONS, POSITION_NAMES)
2. components/premium-field.tsx (FORMATIONS)

### Ajouter un nouveau joueur
1. lib/data.ts (seedData)
2. public/videos/ (ajouter vidéo)

### Ajouter une nouvelle page
1. app/[route]/page.tsx (créer page)
2. components/coach-header.tsx (ajouter lien nav)

### Ajouter un nouvel endpoint API
1. app/api/[route]/route.ts (créer endpoint)
2. lib/data.ts (ajouter logique)

---

## 📝 CONVENTIONS DE NOMMAGE

- **Pages**: kebab-case (coach-header.tsx)
- **Composants**: PascalCase (PremiumField.tsx)
- **Fonctions**: camelCase (handlePositionClick)
- **Constantes**: UPPER_SNAKE_CASE (POSITIONS)
- **Types**: PascalCase (PlayerWithUser)
- **Fichiers API**: route.ts

---

**Dernière mise à jour**: 2025-10-21

