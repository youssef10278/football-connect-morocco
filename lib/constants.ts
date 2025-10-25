export const POSITIONS = [
  'GK',   // Gardien
  'CB',   // Défenseur central
  'LB',   // Arrière gauche
  'RB',   // Arrière droit
  'LWB',  // Piston gauche
  'RWB',  // Piston droit
  'CDM',  // Milieu défensif
  'CM',   // Milieu central
  'CAM',  // Milieu offensif
  'LM',   // Milieu gauche
  'RM',   // Milieu droit
  'LW',   // Ailier gauche
  'RW',   // Ailier droit
  'ST',   // Attaquant
  'CF'    // Avant-centre
];

export const POSITION_NAMES = {
  'GK': 'Gardien',
  'CB': 'Défenseur central',
  'LB': 'Arrière gauche',
  'RB': 'Arrière droit',
  'LWB': 'Piston gauche',
  'RWB': 'Piston droit',
  'CDM': 'Milieu défensif',
  'CM': 'Milieu central',
  'CAM': 'Milieu offensif',
  'LM': 'Milieu gauche',
  'RM': 'Milieu droit',
  'LW': 'Ailier gauche',
  'RW': 'Ailier droit',
  'ST': 'Attaquant',
  'CF': 'Avant-centre'
};

export const COUNTRIES = [
  'Maroc',
  'France',
  'Espagne',
  'Portugal',
  'Belgique',
  'Pays-Bas',
  'Allemagne',
  'Italie',
  'Argentine',
  'Brésil',
  'Autre'
];

export const MOROCCAN_CITIES = [
  'Casablanca',
  'Rabat',
  'Fès',
  'Marrakech',
  'Agadir',
  'Tanger',
  'Meknès',
  'Oujda',
  'Kenitra',
  'Tétouan',
  'Safi',
  'El Jadida',
  'Nador',
  'Khouribga',
  'Settat'
];

export const SKILL_NAMES = {
  speed: 'Vitesse',
  stamina: 'Endurance',
  technique: 'Technique',
  vision: 'Vision de jeu',
  finishing: 'Finishing',
  passing: 'Passes',
  aerial: 'Aerial',
  defense: 'Défense'
};

export const PLANS = {
  FREE: {
    name: 'Gratuit',
    price: 0,
    currency: 'MAD',
    features: [
      'Profil de base',
      '3 vidéos maximum',
      'Visibilité limitée'
    ]
  },
  PRO: {
    name: 'Pro',
    price: 99,
    currency: 'MAD',
    features: [
      'Profil complet',
      'Vidéos illimitées',
      'Priorité dans les résultats',
      'Analytics détaillées',
      'Badge vérifié'
    ]
  }
};