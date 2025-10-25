# 📊 ANALYSE COMPLÈTE DU PROJET - Football Connect Morocco

## 🎯 Vue d'ensemble du projet

**Nom**: Football Connect Morocco - Prototype  
**Version**: 0.1.0  
**Type**: Plateforme SaaS de recrutement sportif  
**Marché cible**: Maroc (avec support international)  
**Statut**: Prototype fonctionnel

### Objectif principal
Connecter les **joueurs de football** avec les **coachs professionnels** via une plateforme premium avec:
- Profils joueurs détaillés avec vidéos
- Feed vidéo type TikTok/Reels
- Terrain tactique interactif
- Système de recherche avancée
- Gestion des favoris et likes

---

## 🏗️ ARCHITECTURE TECHNIQUE

### Stack technologique
```
Frontend:     Next.js 14 (App Router) + React 18 + TypeScript
UI:           TailwindCSS 3.3 + Lucide Icons
State:        Zustand 4.4.6 (préparation)
Localisation: next-intl 3.0 (FR/AR)
Backend:      Next.js API Routes (in-memory)
Base données: Aucune (mock data en mémoire)
```

### Structure des dossiers
```
app/
├── api/                    # API Routes Next.js
│   ├── players/           # GET /api/players (liste + filtres)
│   ├── videos/            # GET /api/videos (feed)
│   ├── like/              # POST /api/like (like/unlike)
│   └── save/              # POST /api/save (save/unsave)
├── coach/                 # Espace coach
│   ├── page.tsx          # Dashboard principal
│   ├── terrain/          # Terrain tactique interactif
│   ├── feed/             # Feed vidéos (reels)
│   └── search/           # Recherche avancée
├── player/               # Espace joueur
│   └── onboarding/       # Création profil (4 étapes)
├── players/              # Pages publiques
│   └── [userId]/         # Profil public joueur
├── page.tsx              # Accueil (hero + pricing)
└── layout.tsx            # Layout racine

components/
├── coach-*.tsx           # Composants coach
├── premium-*.tsx         # Composants premium
├── video-player.tsx      # Lecteur vidéo
├── ui/                   # Composants shadcn/ui

lib/
├── types.ts              # Types TypeScript
├── data.ts               # Seed data + in-memory storage
├── constants.ts          # Constantes (positions, pays, etc.)
└── utils.ts              # Utilitaires
```

---

## 📊 MODÈLE DE DONNÉES

### Entités principales

**User** (Utilisateur)
- id, role (PLAYER|COACH|ADMIN), email, phone, name
- country, city, plan (FREE|PRO), verified

**Player** (Joueur)
- userId, age, heightCm, weightKg, dominantFoot
- positions[], club, bio
- skills (8 attributs: speed, stamina, technique, vision, finishing, passing, aerial, defense)

**Video** (Vidéo)
- id, playerUserId, title, tags[], durationSec
- src (chemin MP4), thumbnail, status (APPROVED|PENDING|REJECTED)
- createdAt

**Coach** (Coach)
- userId, clubName, verified

**Like** (Like vidéo)
- coachUserId, videoId

**Save** (Favori joueur)
- coachUserId, playerUserId

**Shortlist** (Liste de suivi)
- id, coachUserId, name, items[]

---

## 🎮 FONCTIONNALITÉS PRINCIPALES

### 1️⃣ Page d'accueil (/)
- Hero section premium avec CTA
- Section "Comment ça marche" (3 étapes)
- Pricing (3 plans: Découverte/Pro/Elite)
- Testimonials
- FAQ
- Design 2025 avec gradients Maroc (rouge #c1272d, vert #006233)

### 2️⃣ Espace Coach (/coach)
**Dashboard** (/coach)
- Bienvenue personnalisée
- Stats (joueurs vus, likes, saves)
- Navigation vers terrain/feed/search
- Notifications

**Terrain Tactique** (/coach/terrain)
- Formation 4-3-3 / 4-4-2 / 3-5-2 (premium)
- Clic sur position → affiche joueurs
- Couleurs par zone (défense/milieu/attaque)
- Liste joueurs filtrés à droite

**Feed Vidéos** (/coach/feed)
- Navigation verticale (molette/flèches)
- Lecture auto avec contrôles
- Actions: Like, Save, Share, Voir profil
- Style TikTok/Reels

**Recherche** (/coach/search)
- Filtres: âge, taille, pied, positions, localisation
- Pagination
- Intégration terrain

### 3️⃣ Espace Joueur (/player)
**Onboarding** (/player/onboarding)
- Étape 1: Infos personnelles
- Étape 2: Infos joueur (age, taille, poids, pied, positions)
- Étape 3: Compétences (8 sliders)
- Étape 4: Résumé + confirmation

**Profil Public** (/players/[userId])
- Infos joueur + stats
- Vidéos
- Compétences visuelles

---

## 🔌 API ENDPOINTS

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/players` | Liste joueurs (filtres: position, age, pays, pied) |
| GET | `/api/players/[userId]` | Profil joueur + vidéos |
| GET | `/api/videos` | Feed vidéos (filtres: position, age, pied) |
| POST | `/api/like` | Like/unlike vidéo |
| POST | `/api/save` | Save/unsave joueur |

### Exemple requête
```bash
GET /api/players?position=ST&minAge=20&maxAge=30&limit=10&page=1
GET /api/videos?position=CM&dominantFoot=LEFT&limit=20
POST /api/like { coachUserId, videoId, action? }
```

---

## 🎨 DESIGN & BRANDING

### Couleurs Maroc
- **Rouge**: #c1272d (attaque, CTA)
- **Vert**: #006233 (défense, nature)
- **Or**: #d4af37 (premium, luxe)

### Composants UI
- Cards arrondies (rounded-2xl/3xl)
- Shadows premium (shadow-premium, shadow-glow)
- Gradients fluides
- Animations fade-in-up
- Glass morphism (backdrop-blur)

### Typographie
- Font: Inter (Google Fonts)
- Mono: JetBrains Mono
- Tailles: text-hero (5xl-7xl), text-premium

---

## 📦 DONNÉES SEED

6 joueurs vedettes pré-chargés:
1. **Sofyan Amrabat** (Maroc) - CDM/CM
2. **Hakim Ziyech** (Maroc) - RW/CAM
3. **Brahim Diaz** (Maroc) - CAM/RW
4. **Cristiano Ronaldo** (Portugal) - ST/LW
5. **Lionel Messi** (Argentine) - RW/CF/CAM
6. **Achraf Hakimi** (Maroc) - RB/RWB

2 coachs:
- Coach Anouar (Club Casa, Premium)
- Coach Salma (Académie Rabat, Free)

---

## 🚀 SCRIPTS & CONFIGURATION

### npm scripts
```json
"dev": "node scripts/copy-videos.js && next dev"
"build": "node scripts/copy-videos.js && next build"
"start": "next start"
"lint": "next lint"
"copy-videos": "node scripts/copy-videos.js"
```

### copy-videos.js
- Cherche vidéos MP4 dans chemins Windows spécifiés
- Fallback: répertoire courant
- Copie vers `/public/videos/` avec noms corrects
- Fichiers attendus: amrabat.mp4, ziyech.mp4, diaz.mp4, ronaldo.mp4, messi.mp4, hakimi.mp4

---

## ⚠️ LIMITATIONS (Prototype)

- ❌ Stockage en mémoire (reset à chaque redémarrage)
- ❌ Pas d'authentification réelle
- ❌ Upload vidéo en mock
- ❌ Paiements factices
- ❌ Pas de notifications push
- ❌ Pas de base de données persistante
- ❌ Pas de système de messaging

---

## 🎯 PROCHAINES ÉTAPES

1. **Authentification**: NextAuth.js + JWT
2. **Base de données**: Prisma + PostgreSQL
3. **Upload vidéo**: Cloudinary/AWS S3
4. **Notifications**: Système temps réel
5. **Paiements**: Stripe integration
6. **PWA**: Mobile app
7. **Internationalisation**: Support arabe complet
8. **Analytics**: Tracking utilisateur

---

## 📝 NOTES IMPORTANTES

- **Langue**: Français (support arabe prévu)
- **Devise**: MAD (Dirham marocain)
- **Responsive**: Mobile-first design
- **Performance**: Next.js 14 optimisé
- **TypeScript**: Strict mode activé
- **Linting**: ESLint + Next.js config

---

**Dernière mise à jour**: 2025-10-21  
**Développé pour**: Marché marocain 🇲🇦

