# 🏗️ ARCHITECTURE TECHNIQUE DÉTAILLÉE

## 📐 PATTERNS & CONVENTIONS

### 1. Next.js App Router
- **Routing**: File-based routing (`app/` directory)
- **Layouts**: Nested layouts avec `layout.tsx`
- **API Routes**: `app/api/[route]/route.ts`
- **Dynamic Routes**: `app/players/[userId]/page.tsx`

### 2. React Patterns
- **Client Components**: `'use client'` pour interactivité
- **Server Components**: Défaut pour performance
- **Hooks**: useState, useEffect, useRef
- **Custom Hooks**: Potentiel pour logique réutilisable

### 3. TypeScript
- **Strict mode**: Activé dans tsconfig.json
- **Interfaces**: Définies dans `lib/types.ts`
- **Type Safety**: Tous les props typés

---

## 🗂️ STRUCTURE DE DONNÉES

### In-Memory Storage (`lib/data.ts`)
```typescript
let users: User[] = [];
let players: Player[] = [];
let videos: Video[] = [];
let coaches: Coach[] = [];
let shortlists: Shortlist[] = [];
let likes: Like[] = [];
let saves: Save[] = [];
```

**Initialisation**: `seedData()` appelée au module load

**Limitations**:
- Reset à chaque redémarrage
- Pas de persistance
- Pas de transactions
- Pas de concurrence

### Seed Data
6 joueurs + 2 coachs pré-chargés avec:
- Infos personnelles
- Stats joueur
- Compétences (1-10)
- 1 vidéo par joueur

---

## 🔌 API ARCHITECTURE

### Pattern RESTful
```
GET    /api/players              → Liste + filtres
GET    /api/players/[userId]     → Détail
GET    /api/videos               → Feed
POST   /api/like                 → Like/unlike
POST   /api/save                 → Save/unsave
```

### Filtrage côté serveur
```typescript
// /api/players
- position: string
- minAge, maxAge: number
- country, city: string
- dominantFoot: string
- page, limit: number (pagination)
```

### Réponses JSON
```json
{
  "players": [...],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 6,
    "totalPages": 1
  }
}
```

---

## 🎨 COMPOSANTS UI

### Hiérarchie
```
Layout (layout.tsx)
├── Header (coach-header.tsx)
├── Main Content
│   ├── Cards (card.tsx)
│   ├── Buttons (button.tsx)
│   ├── Badges (badge.tsx)
│   └── Loading (loading.tsx)
└── Footer
```

### Composants Réutilisables
- **Button**: Variants (default, premium, secondary, ghost)
- **Card**: Wrapper avec styles premium
- **Badge**: Labels avec couleurs
- **Loading**: Skeleton screens

### Composants Spécialisés
- **PremiumField**: Terrain tactique interactif
- **VideoPlayer**: Lecteur vidéo fullscreen
- **PremiumPlayerList**: Liste joueurs filtrés
- **CoachHeader**: Header avec notifications
- **FormationStats**: Stats formation

---

## 🎯 STATE MANAGEMENT

### Actuellement
- **useState**: Local component state
- **useEffect**: Side effects (fetch, listeners)
- **useRef**: DOM references (video player)

### Préparation Zustand
- `zustand` installé mais non utilisé
- Prêt pour global state (auth, user, filters)

### Flux données
```
Component State
    ↓
fetch() API
    ↓
setData()
    ↓
Re-render
```

---

## 🎨 STYLING SYSTEM

### TailwindCSS
- **Config**: Couleurs Maroc custom
- **Plugins**: Shadows, animations custom
- **Utilities**: Responsive classes

### Couleurs Custom
```javascript
// tailwind.config.js (implicite)
morocco-red-500: #c1272d
morocco-green-500: #006233
morocco-gold-500: #d4af37
```

### Animations Custom
```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in-up { animation: fadeInUp 0.6s ease-out; }
```

### Shadows Custom
```css
.shadow-premium: 0 25px 50px -12px rgba(193, 39, 45, 0.15)
.shadow-glow: 0 0 30px rgba(193, 39, 45, 0.4)
```

---

## 📦 DÉPENDANCES CLÉS

| Package | Version | Usage |
|---------|---------|-------|
| next | 14.0.0 | Framework |
| react | ^18 | UI library |
| typescript | ^5 | Type safety |
| tailwindcss | ^3.3 | Styling |
| lucide-react | ^0.294 | Icons |
| zustand | ^4.4.6 | State (prep) |
| next-intl | ^3.0 | i18n |
| clsx | ^2.0 | Class merging |
| tailwind-merge | ^2.0 | Tailwind merge |

---

## 🔄 FLUX DE DONNÉES

### Fetch Players
```
User clicks position on field
    ↓
handlePositionClick(position)
    ↓
fetchPlayersByPosition(position)
    ↓
fetch('/api/players?position=ST')
    ↓
API filters + returns
    ↓
setPlayers(data.players)
    ↓
Component re-renders with list
```

### Like Video
```
User clicks heart icon
    ↓
handleLike()
    ↓
fetch('/api/like', {
  method: 'POST',
  body: { coachUserId, videoId }
})
    ↓
API: addLike() to in-memory store
    ↓
Response: { success: true }
```

---

## 🚀 PERFORMANCE

### Optimisations
- **Next.js Image**: Pas utilisé (vidéos locales)
- **Code Splitting**: Automatique par route
- **Lazy Loading**: Composants dynamiques (futur)
- **Caching**: Headers HTTP (futur)

### Bottlenecks
- In-memory storage (pas scalable)
- Pas de pagination côté client
- Pas de virtualization (listes longues)

---

## 🔐 SÉCURITÉ (Actuellement)

### Manques
- ❌ Authentification
- ❌ Authorization
- ❌ CORS
- ❌ Rate limiting
- ❌ Input validation
- ❌ SQL injection (N/A)

### À implémenter
- ✅ NextAuth.js
- ✅ JWT tokens
- ✅ CORS middleware
- ✅ Input sanitization
- ✅ Rate limiting

---

## 📊 MONITORING & LOGGING

### Actuellement
- `console.log()` pour debug
- Pas de error tracking
- Pas de analytics

### À ajouter
- Sentry pour error tracking
- Google Analytics
- Custom logging service

---

## 🧪 TESTING (Non implémenté)

### À ajouter
- Jest pour unit tests
- React Testing Library
- Cypress pour e2e
- API tests

---

## 🔧 BUILD & DEPLOYMENT

### Build Process
```bash
npm run build
  ↓
node scripts/copy-videos.js
  ↓
next build
  ↓
.next/ folder
```

### Deployment
- Vercel (recommandé pour Next.js)
- Docker (futur)
- Environment variables (futur)

---

## 📝 CONVENTIONS DE CODE

### Naming
- Components: PascalCase (VideoPlayer.tsx)
- Functions: camelCase (handleLike)
- Constants: UPPER_SNAKE_CASE (POSITIONS)
- Files: kebab-case (coach-header.tsx)

### Imports
- Absolute imports: `@/components/...`
- Relative imports: `../lib/...`

### Comments
- JSDoc pour functions
- Inline comments pour logique complexe

---

**Dernière mise à jour**: 2025-10-21

