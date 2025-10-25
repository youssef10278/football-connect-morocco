# API Documentation

## Endpoints disponibles

### Players

#### GET /api/players
Récupère la liste des joueurs avec pagination et filtres.

**Query Parameters:**
- `page` (number): Numéro de page (défaut: 1)
- `limit` (number): Nombre d'éléments par page (défaut: 10)
- `position` (string): Filtrer par position (GK, CB, LB, etc.)
- `minAge` (number): Âge minimum
- `maxAge` (number): Âge maximum
- `country` (string): Filtrer par pays
- `city` (string): Filtrer par ville
- `dominantFoot` (string): LEFT, RIGHT, ou BOTH

**Response:**
```json
{
  "players": [
    {
      "userId": "u-amrabat",
      "age": 28,
      "heightCm": 185,
      "weightKg": 80,
      "dominantFoot": "RIGHT",
      "positions": ["CDM", "CM"],
      "club": "Exemple Club",
      "bio": "Milieu récupérateur endurant...",
      "skills": {
        "speed": 7,
        "stamina": 9,
        // ...
      },
      "user": {
        "id": "u-amrabat",
        "name": "Sofyan Amrabat",
        "country": "Maroc",
        "city": "Rabat",
        "verified": true,
        "plan": "PRO"
      },
      "videos": [...]
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 30,
    "totalPages": 3
  }
}
```

#### GET /api/players/[userId]
Récupère le profil complet d'un joueur.

**Response:**
```json
{
  "userId": "u-amrabat",
  "user": {...},
  "videos": [...],
  // ... autres propriétés du joueur
}
```

### Videos

#### GET /api/videos
Récupère le feed de vidéos avec filtres.

**Query Parameters:**
- `page`, `limit`: Pagination
- `position`: Filtrer par position du joueur
- `dominantFoot`: Filtrer par pied dominant
- `minAge`, `maxAge`: Filtrer par âge du joueur

**Response:**
```json
{
  "videos": [
    {
      "id": "v-amrabat-1",
      "playerUserId": "u-amrabat",
      "title": "Pressing & récupération",
      "tags": ["CDM", "duels", "pressing"],
      "durationSec": 35,
      "src": "/videos/amrabat.mp4",
      "status": "APPROVED",
      "createdAt": "2025-10-01T10:00:00Z",
      "player": {
        // Données du joueur enrichies
      }
    }
  ],
  "pagination": {...}
}
```

### Interactions

#### POST /api/like
Like/unlike une vidéo.

**Body:**
```json
{
  "coachUserId": "c-1",
  "videoId": "v-amrabat-1",
  "action": "like" // ou "unlike"
}
```

#### POST /api/save
Sauvegarder/retirer un joueur.

**Body:**
```json
{
  "coachUserId": "c-1",
  "playerUserId": "u-amrabat",
  "action": "save" // ou "unsave"
}
```

## Données de seed

Le système se lance avec 6 joueurs vedettes :
- Sofyan Amrabat (CDM/CM)
- Hakim Ziyech (RW/CAM)
- Brahim Diaz (CAM/RW)
- Cristiano Ronaldo (ST/LW)
- Lionel Messi (RW/CF/CAM)
- Achraf Hakimi (RB/RWB)

Chaque joueur a :
- Profil complet avec compétences (0-10)
- Au moins une vidéo approuvée
- Données réalistes (âge, taille, pied dominant)

## Stockage

- **Type**: En mémoire (reset à chaque redémarrage)
- **Seed**: Automatique au démarrage
- **Persistance**: Aucune (prototype)

## Limitations

- Pas d'authentification
- Pas de validation des données
- Stockage temporaire uniquement
- Endpoints mock pour les actions (like, save)