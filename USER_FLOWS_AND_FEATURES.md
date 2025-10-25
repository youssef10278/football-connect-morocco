# 🎬 FLUX UTILISATEUR & FONCTIONNALITÉS DÉTAILLÉES

## 👤 FLUX JOUEUR

### 1. Création de profil (Onboarding)
**Route**: `/player/onboarding`

**Étape 1: Infos personnelles**
- Nom, Email, Téléphone
- Pays (dropdown), Ville
- Validation: tous les champs requis

**Étape 2: Infos joueur**
- Âge, Taille (cm), Poids (kg)
- Pied dominant (LEFT/RIGHT/BOTH)
- Positions (multi-select): GK, CB, LB, RB, LWB, RWB, CDM, CM, CAM, LM, RM, LW, RW, ST, CF
- Club (optionnel), Bio (optionnel)

**Étape 3: Compétences**
- 8 sliders (1-10):
  - Vitesse
  - Endurance
  - Technique
  - Vision de jeu
  - Finishing
  - Passes
  - Aerial
  - Défense
- Affichage radar/graphique

**Étape 4: Résumé**
- Récapitulatif données
- Bouton "Créer profil"
- Mock submission → alert succès

### 2. Profil public joueur
**Route**: `/players/[userId]`

Affiche:
- Avatar + infos personnelles
- Stats (age, taille, poids, pied)
- Positions
- Compétences (barres visuelles)
- Vidéos uploadées
- Club actuel
- Bio

---

## 🏆 FLUX COACH

### 1. Dashboard principal
**Route**: `/coach`

**Sections**:
- Bienvenue personnalisée ("Bienvenue, Coach Anouar")
- Badge "Premium Dashboard"
- Statut en ligne
- Stats:
  - Joueurs vus cette semaine
  - Likes donnés
  - Saves effectués
  - Activité (+23% cette semaine)
- Navigation vers terrain/feed/search
- Notifications (badge avec nombre)

### 2. Terrain tactique interactif
**Route**: `/coach/terrain`

**Formations disponibles**:
1. **4-3-3 Classique** (défaut)
   - 1 GK, 2 CB, 1 LB, 1 RB, 1 CDM, 2 CM, 2 LW/RW, 1 ST
   
2. **4-4-2 Équilibré**
   - 1 GK, 2 CB, 1 LB, 1 RB, 2 LM/RM, 2 CM, 2 ST

3. **3-5-2 Premium** (badge couronne)
   - 1 GK, 3 CB, 1 LWB, 1 RWB, 2 CDM, 1 CAM, 2 ST

**Interactions**:
- Clic sur position → affiche joueurs pour ce poste
- Couleurs par zone:
  - 🔵 Défense (bleu)
  - 🟢 Milieu (vert)
  - 🔴 Attaque (rouge)
- Sélection → pulse effect + étoile or
- Hover → scale 110%

**Affichage joueurs**:
- Liste à droite (1/3 écran)
- Cartes joueur avec:
  - Avatar
  - Nom + positions
  - Âge, taille, poids
  - Compétences (barres)
  - Boutons: Like, Save, Voir profil

### 3. Feed vidéos (Reels)
**Route**: `/coach/feed`

**Navigation**:
- Molette souris (deltaY > 0 = suivant)
- Flèches clavier (↑↓)
- Dots navigation (clic direct)

**Lecteur vidéo**:
- Plein écran (h-screen)
- Lecture auto quand actif
- Pause/Play au clic
- Mute button (🔇/🔊)
- Loop automatique

**Overlay vidéo**:
- Infos joueur (avatar + nom + positions)
- Titre vidéo
- Tags (#dribble, #1v1, etc.)
- Durée

**Actions (colonne droite)**:
- ❤️ Like (POST /api/like)
- 🔖 Save (POST /api/save)
- 📤 Share (copie URL profil)
- 👤 Voir profil

**Instructions**: "Utilisez ↑↓ ou la molette pour naviguer"

### 4. Recherche avancée
**Route**: `/coach/search`

**Filtres**:
- Position (dropdown multi-select)
- Âge (min-max sliders)
- Taille (min-max)
- Pied dominant (LEFT/RIGHT/BOTH)
- Localisation (pays/ville)
- Compétences minimales

**Résultats**:
- Grille cartes joueurs
- Pagination
- Tri (par rating, age, etc.)
- Intégration terrain (sélection position)

---

## 🎥 SYSTÈME VIDÉO

### Upload (Mock)
- Accepte MP4 vertical (9:16)
- Durée: 15-60 secondes
- Stockage: `/public/videos/`

### Statuts vidéo
- **APPROVED**: Visible dans feed
- **PENDING**: En attente modération
- **REJECTED**: Rejetée

### Métadonnées
- Titre, Tags, Durée
- Thumbnail (optionnel)
- Date création

---

## 💰 SYSTÈME DE PRICING

### Plan Découverte (Gratuit)
- Profil de base
- 3 vidéos max
- Visibilité standard
- ❌ Analytics basiques

### Plan Pro (99 MAD/mois)
- ✅ Profil complet premium
- ✅ Vidéos illimitées HD
- ✅ Priorité résultats
- ✅ Analytics avancées
- ✅ Badge vérifié

### Plan Elite (199 MAD/mois)
- ✅ Tout du Pro
- ✅ Coach personnel dédié
- ✅ Mise en relation directe
- ✅ Suivi carrière premium

**Garantie**: 30 jours satisfait ou remboursé

---

## 🔐 AUTHENTIFICATION (Futur)

Actuellement: Mock avec IDs hardcodés
- Coach: `c-1` (Anouar)
- Joueurs: `u-amrabat`, `u-ziyech`, etc.

À implémenter:
- NextAuth.js
- JWT tokens
- OAuth (Google, Facebook)
- Email verification

---

## 📱 RESPONSIVE DESIGN

- **Mobile**: Stack vertical, menus hamburger
- **Tablet**: 2 colonnes
- **Desktop**: 3 colonnes (terrain + joueurs)

---

## ⚡ INTERACTIONS CLÉS

### Terrain
- Clic position → fetch `/api/players?position=X`
- Clic joueur → navigate `/players/[userId]`

### Feed
- Scroll → change currentIndex
- Like → POST `/api/like`
- Save → POST `/api/save`

### Recherche
- Filtres → fetch `/api/players?...`
- Pagination → fetch page suivante

---

## 🎯 ÉTATS & LOADING

- **Loading**: Skeleton screens
- **Empty**: Messages "Aucun résultat"
- **Error**: Toast notifications (futur)
- **Success**: Feedback utilisateur

---

## 🌍 LOCALISATION

**Actuellement**: Français (fr)
**Prévu**: Arabe (ar-MA) via next-intl

Textes clés:
- Positions (FR + AR)
- Pays (FR + AR)
- Villes marocaines (FR + AR)
- UI labels (FR + AR)

---

**Dernière mise à jour**: 2025-10-21

