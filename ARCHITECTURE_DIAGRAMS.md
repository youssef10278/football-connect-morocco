# 🏗️ DIAGRAMMES D'ARCHITECTURE

## 1️⃣ ARCHITECTURE GLOBALE

```
┌─────────────────────────────────────────────────────────────┐
│                    FOOTBALL CONNECT MOROCCO                 │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              FRONTEND (Next.js 14)                   │   │
│  ├──────────────────────────────────────────────────────┤   │
│  │  Pages:                                              │   │
│  │  • / (Accueil + Pricing)                            │   │
│  │  • /coach/* (Dashboard, Terrain, Feed, Search)      │   │
│  │  • /player/onboarding (Création profil)             │   │
│  │  • /players/[userId] (Profil public)                │   │
│  │                                                      │   │
│  │  Components:                                         │   │
│  │  • PremiumField (Terrain interactif)                │   │
│  │  • VideoPlayer (Lecteur vidéo)                      │   │
│  │  • CoachHeader, CoachStats, etc.                    │   │
│  └──────────────────────────────────────────────────────┘   │
│                           ↓                                   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │           API ROUTES (Next.js Backend)              │   │
│  ├──────────────────────────────────────────────────────┤   │
│  │  GET  /api/players          (Liste + filtres)       │   │
│  │  GET  /api/players/[userId] (Détail)                │   │
│  │  GET  /api/videos           (Feed)                  │   │
│  │  POST /api/like             (Like/unlike)           │   │
│  │  POST /api/save             (Save/unsave)           │   │
│  └──────────────────────────────────────────────────────┘   │
│                           ↓                                   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │         DATA LAYER (In-Memory Storage)              │   │
│  ├──────────────────────────────────────────────────────┤   │
│  │  • users[]                                           │   │
│  │  • players[]                                         │   │
│  │  • videos[]                                          │   │
│  │  • coaches[]                                         │   │
│  │  • likes[]                                           │   │
│  │  • saves[]                                           │   │
│  │  • shortlists[]                                      │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## 2️⃣ FLUX DE DONNÉES - TERRAIN TACTIQUE

```
┌─────────────────────────────────────────────────────────────┐
│                    TERRAIN TACTIQUE                          │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  User clicks position on field                              │
│         ↓                                                    │
│  handlePositionClick(position)                              │
│         ↓                                                    │
│  fetchPlayersByPosition(position)                           │
│         ↓                                                    │
│  fetch('/api/players?position=ST&limit=9')                 │
│         ↓                                                    │
│  ┌─────────────────────────────────────────┐               │
│  │  API: Filter players by position        │               │
│  │  • Get all players                      │               │
│  │  • Filter by position                   │               │
│  │  • Apply pagination                     │               │
│  │  • Return JSON response                 │               │
│  └─────────────────────────────────────────┘               │
│         ↓                                                    │
│  setPlayers(data.players)                                   │
│         ↓                                                    │
│  Component re-renders                                       │
│         ↓                                                    │
│  Display player list on right side                          │
│         ↓                                                    │
│  User clicks player → navigate to /players/[userId]        │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## 3️⃣ FLUX DE DONNÉES - FEED VIDÉOS

```
┌─────────────────────────────────────────────────────────────┐
│                      FEED VIDÉOS                             │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  Component mounts                                            │
│         ↓                                                    │
│  useEffect → fetchVideos()                                  │
│         ↓                                                    │
│  fetch('/api/videos?limit=20')                              │
│         ↓                                                    │
│  ┌─────────────────────────────────────────┐               │
│  │  API: Get approved videos               │               │
│  │  • Get all videos                       │               │
│  │  • Filter by status=APPROVED            │               │
│  │  • Enrich with player data              │               │
│  │  • Sort by date (newest first)          │               │
│  │  • Apply pagination                     │               │
│  └─────────────────────────────────────────┘               │
│         ↓                                                    │
│  setVideos(data.videos)                                     │
│         ↓                                                    │
│  Display current video (index 0)                            │
│         ↓                                                    │
│  User scrolls (wheel/arrow keys)                            │
│         ↓                                                    │
│  setCurrentIndex(index ± 1)                                 │
│         ↓                                                    │
│  Display next/previous video                                │
│         ↓                                                    │
│  User clicks Like/Save/Share                                │
│         ↓                                                    │
│  POST /api/like or /api/save                                │
│         ↓                                                    │
│  API updates in-memory store                                │
│         ↓                                                    │
│  Response: { success: true }                                │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## 4️⃣ MODÈLE DE DONNÉES

```
┌──────────────────────────────────────────────────────────────┐
│                    ENTITÉS PRINCIPALES                       │
├──────────────────────────────────────────────────────────────┤
│                                                                │
│  ┌─────────────────┐         ┌──────────────────┐            │
│  │      USER       │         │     PLAYER       │            │
│  ├─────────────────┤         ├──────────────────┤            │
│  │ id              │◄────────│ userId (FK)      │            │
│  │ role            │         │ age              │            │
│  │ email           │         │ heightCm         │            │
│  │ name            │         │ weightKg         │            │
│  │ country         │         │ dominantFoot     │            │
│  │ city            │         │ positions[]      │            │
│  │ plan            │         │ club             │            │
│  │ verified        │         │ bio              │            │
│  └─────────────────┘         │ skills (8)       │            │
│           ▲                   └──────────────────┘            │
│           │                           │                      │
│           │                           ▼                      │
│           │                   ┌──────────────────┐            │
│           │                   │      VIDEO       │            │
│           │                   ├──────────────────┤            │
│           │                   │ id               │            │
│           │                   │ playerUserId(FK) │            │
│           │                   │ title            │            │
│           │                   │ tags[]           │            │
│           │                   │ durationSec      │            │
│           │                   │ src              │            │
│           │                   │ status           │            │
│           │                   │ createdAt        │            │
│           │                   └──────────────────┘            │
│           │                                                   │
│  ┌─────────────────┐         ┌──────────────────┐            │
│  │     COACH       │         │      LIKE        │            │
│  ├─────────────────┤         ├──────────────────┤            │
│  │ userId (FK)     │◄────────│ coachUserId (FK) │            │
│  │ clubName        │         │ videoId (FK)     │            │
│  │ verified        │         └──────────────────┘            │
│  └─────────────────┘                                          │
│           ▲                   ┌──────────────────┐            │
│           │                   │      SAVE        │            │
│           └───────────────────│ coachUserId (FK) │            │
│                               │ playerUserId(FK) │            │
│                               └──────────────────┘            │
│                                                                │
└──────────────────────────────────────────────────────────────┘
```

---

## 5️⃣ NAVIGATION UTILISATEUR

```
┌─────────────────────────────────────────────────────────────┐
│                    NAVIGATION GLOBALE                        │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│                          /                                   │
│                    (Accueil + Pricing)                       │
│                      ↙         ↘                             │
│                     /           \                            │
│            /player/onboarding   /coach                       │
│            (Création profil)    (Dashboard)                  │
│                                  ↙  ↓  ↘                    │
│                                 /   |   \                    │
│                    /coach/terrain  /coach/feed  /coach/search│
│                    (Terrain)       (Feed)       (Recherche)  │
│                         ↓                                    │
│                    /players/[userId]                         │
│                    (Profil public)                           │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## 6️⃣ COMPOSANTS HIÉRARCHIE

```
┌─────────────────────────────────────────────────────────────┐
│                    COMPOSANTS REACT                          │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  RootLayout                                                  │
│  ├── Header                                                  │
│  ├── Main Content                                            │
│  │   ├── Page Component                                      │
│  │   │   ├── CoachHeader                                     │
│  │   │   ├── CoachStats                                      │
│  │   │   ├── CoachNavigation                                 │
│  │   │   ├── CoachActivity                                   │
│  │   │   ├── PremiumField                                    │
│  │   │   │   ├── FormationSelector                           │
│  │   │   │   ├── PositionButton (x9)                         │
│  │   │   │   └── FieldInfo                                   │
│  │   │   ├── PremiumPlayerList                               │
│  │   │   │   └── PlayerCard (x9)                             │
│  │   │   ├── VideoPlayer                                     │
│  │   │   └── FormationStats                                  │
│  │   └── UI Components                                       │
│  │       ├── Button                                          │
│  │       ├── Card                                            │
│  │       ├── Badge                                           │
│  │       └── Loading                                         │
│  └── Footer                                                  │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## 7️⃣ CYCLE DE VIE COMPOSANT - TERRAIN

```
┌─────────────────────────────────────────────────────────────┐
│              CYCLE DE VIE - TERRAIN TACTIQUE                 │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  1. Component Mount                                          │
│     ├── useState(selectedPosition = null)                    │
│     ├── useState(selectedFormation = '4-3-3')               │
│     ├── useState(players = [])                               │
│     └── useState(loading = false)                            │
│                                                               │
│  2. Render Initial                                           │
│     ├── PremiumField (empty)                                 │
│     ├── FormationStats (no selection)                        │
│     └── PremiumPlayerList (empty)                            │
│                                                               │
│  3. User Interaction                                         │
│     ├── Click position → handlePositionClick()              │
│     ├── setSelectedPosition(position)                        │
│     ├── setLoading(true)                                     │
│     └── fetchPlayersByPosition(position)                     │
│                                                               │
│  4. API Call                                                 │
│     ├── fetch('/api/players?position=...')                  │
│     ├── Wait for response                                    │
│     └── setPlayers(data.players)                             │
│                                                               │
│  5. Re-render                                                │
│     ├── PremiumField (position highlighted)                  │
│     ├── FormationStats (updated)                             │
│     └── PremiumPlayerList (populated)                        │
│                                                               │
│  6. User clicks player                                       │
│     └── navigate('/players/[userId]')                        │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## 8️⃣ STACK TECHNOLOGIQUE

```
┌─────────────────────────────────────────────────────────────┐
│                    TECH STACK                                │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  Frontend Layer                                              │
│  ├── Next.js 14 (Framework)                                  │
│  ├── React 18 (UI Library)                                   │
│  ├── TypeScript (Type Safety)                                │
│  └── TailwindCSS (Styling)                                   │
│                                                               │
│  UI Components                                               │
│  ├── Lucide Icons (Icons)                                    │
│  ├── shadcn/ui (Component Library)                           │
│  └── Custom Components                                       │
│                                                               │
│  State Management                                            │
│  ├── React Hooks (useState, useEffect)                       │
│  └── Zustand (Prepared)                                      │
│                                                               │
│  Backend Layer                                               │
│  ├── Next.js API Routes                                      │
│  └── In-Memory Storage                                       │
│                                                               │
│  Utilities                                                   │
│  ├── clsx (Class Merging)                                    │
│  ├── tailwind-merge (Tailwind Merge)                         │
│  └── next-intl (i18n)                                        │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

**Dernière mise à jour**: 2025-10-21

