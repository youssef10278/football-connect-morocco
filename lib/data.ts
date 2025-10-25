import { User, Player, Video, Coach, PlayerWithUser, Shortlist, Like, Save } from './types';

// In-memory storage
let users: User[] = [];
let players: Player[] = [];
let videos: Video[] = [];
let coaches: Coach[] = [];
let shortlists: Shortlist[] = [];
let likes: Like[] = [];
let saves: Save[] = [];

// Seed data
export function seedData() {
  // Clear existing data
  users = [];
  players = [];
  videos = [];
  coaches = [];
  shortlists = [];
  likes = [];
  saves = [];

  // Seed main players
  const seedPlayers = [
    {
      user: { id: "u-amrabat", role: "PLAYER" as const, email: "sofyan.amrabat@example.ma", name: "Sofyan Amrabat", country: "Maroc", city: "Rabat", plan: "PRO" as const, verified: true },
      player: { userId: "u-amrabat", age: 28, heightCm: 185, weightKg: 80, dominantFoot: "RIGHT" as const, positions: ["CDM", "CM"], club: "Exemple Club", bio: "Milieu récupérateur endurant, fort dans les duels.", skills: { speed: 7, stamina: 9, technique: 7, vision: 7, finishing: 5, passing: 8, aerial: 7, defense: 9 }},
      videos: [{ id: "v-amrabat-1", playerUserId: "u-amrabat", title: "Pressing & récupération", tags: ["CDM", "duels", "pressing"], durationSec: 35, src: "/videos/amrabat.mp4", thumbnail: undefined, status: "APPROVED" as const, createdAt: "2025-10-01T10:00:00Z" }]
    },
    {
      user: { id: "u-ziyech", role: "PLAYER" as const, email: "hakim.ziyech@example.ma", name: "Hakim Ziyech", country: "Maroc", city: "Oujda", plan: "PRO" as const, verified: true },
      player: { userId: "u-ziyech", age: 31, heightCm: 181, weightKg: 68, dominantFoot: "LEFT" as const, positions: ["RW", "CAM"], club: "Exemple Club", bio: "Créateur gaucher, qualité de passe et frappe enroulée.", skills: { speed: 7, stamina: 7, technique: 9, vision: 9, finishing: 8, passing: 10, aerial: 5, defense: 4 }},
      videos: [{ id: "v-ziyech-1", playerUserId: "u-ziyech", title: "Centres & passes clés", tags: ["cross", "key-pass"], durationSec: 40, src: "/videos/ziyech.mp4", thumbnail: undefined, status: "APPROVED" as const, createdAt: "2025-10-02T10:00:00Z" }]
    },
    {
      user: { id: "u-diaz", role: "PLAYER" as const, email: "brahim.diaz@example.ma", name: "Brahim Diaz", country: "Maroc", city: "Fès", plan: "PRO" as const, verified: true },
      player: { userId: "u-diaz", age: 26, heightCm: 171, weightKg: 65, dominantFoot: "RIGHT" as const, positions: ["CAM", "RW"], club: "Exemple Club", bio: "Ailier/10 technique, conduite serrée.", skills: { speed: 8, stamina: 7, technique: 9, vision: 8, finishing: 7, passing: 8, aerial: 4, defense: 4 }},
      videos: [{ id: "v-diaz-1", playerUserId: "u-diaz", title: "Dribbles & changements de rythme", tags: ["dribble", "1v1"], durationSec: 32, src: "/videos/diaz.mp4", thumbnail: undefined, status: "APPROVED" as const, createdAt: "2025-10-03T10:00:00Z" }]
    },
    {
      user: { id: "u-ronaldo", role: "PLAYER" as const, email: "cristiano.ronaldo@example.com", name: "Cristiano Ronaldo", country: "Portugal", city: "Lisbonne", plan: "PRO" as const, verified: true },
      player: { userId: "u-ronaldo", age: 40, heightCm: 187, weightKg: 83, dominantFoot: "RIGHT" as const, positions: ["ST", "LW"], club: "Exemple Club", bio: "Attaquant complet, jeu aérien et finition.", skills: { speed: 8, stamina: 8, technique: 8, vision: 7, finishing: 10, passing: 7, aerial: 10, defense: 3 }},
      videos: [{ id: "v-ronaldo-1", playerUserId: "u-ronaldo", title: "Finition & jeu aérien", tags: ["headers", "finishing"], durationSec: 38, src: "/videos/ronaldo.mp4", thumbnail: undefined, status: "APPROVED" as const, createdAt: "2025-10-04T10:00:00Z" }]
    },
    {
      user: { id: "u-messi", role: "PLAYER" as const, email: "lionel.messi@example.com", name: "Lionel Messi", country: "Argentine", city: "Rosario", plan: "PRO" as const, verified: true },
      player: { userId: "u-messi", age: 38, heightCm: 170, weightKg: 72, dominantFoot: "LEFT" as const, positions: ["RW", "CF", "CAM"], club: "Exemple Club", bio: "Création, vision et finition pied gauche.", skills: { speed: 8, stamina: 7, technique: 10, vision: 10, finishing: 10, passing: 10, aerial: 3, defense: 4 }},
      videos: [{ id: "v-messi-1", playerUserId: "u-messi", title: "Conduite & passes décisives", tags: ["through-ball", "dribble"], durationSec: 45, src: "/videos/messi.mp4", thumbnail: undefined, status: "APPROVED" as const, createdAt: "2025-10-05T10:00:00Z" }]
    },
    {
      user: { id: "u-hakimi", role: "PLAYER" as const, email: "achraf.hakimi@example.ma", name: "Achraf Hakimi", country: "Maroc", city: "Casa", plan: "PRO" as const, verified: true },
      player: { userId: "u-hakimi", age: 27, heightCm: 181, weightKg: 73, dominantFoot: "RIGHT" as const, positions: ["RB", "RWB"], club: "Exemple Club", bio: "Latéral rapide, percussion et centres.", skills: { speed: 10, stamina: 9, technique: 8, vision: 7, finishing: 6, passing: 8, aerial: 6, defense: 7 }},
      videos: [{ id: "v-hakimi-1", playerUserId: "u-hakimi", title: "Percussions & centres", tags: ["overlap", "cross"], durationSec: 36, src: "/videos/hakimi.mp4", thumbnail: undefined, status: "APPROVED" as const, createdAt: "2025-10-06T10:00:00Z" }]
    }
  ];

  // Add seed players
  seedPlayers.forEach(({ user, player, videos: playerVideos }) => {
    users.push(user);
    players.push(player);
    videos.push(...playerVideos);
  });

  // Add coaches
  const seedCoaches = [
    { user: { id: "c-1", role: "COACH" as const, email: "coach1@club.ma", name: "Coach Anouar", country: "Maroc", city: "Casablanca", plan: "PRO" as const, verified: true }, coach: { userId: "c-1", clubName: "Club Casa", verified: true } },
    { user: { id: "c-2", role: "COACH" as const, email: "coach2@club.ma", name: "Coach Salma", country: "Maroc", city: "Rabat", plan: "FREE" as const, verified: false }, coach: { userId: "c-2", clubName: "Académie Rabat", verified: false } }
  ];

  seedCoaches.forEach(({ user, coach }) => {
    users.push(user);
    coaches.push(coach);
  });

  console.log('Data seeded successfully');
}

// API functions
export function getUsers(): User[] {
  return users;
}

export function getPlayers(): PlayerWithUser[] {
  return players.map(player => {
    const user = users.find(u => u.id === player.userId)!;
    const playerVideos = videos.filter(v => v.playerUserId === player.userId);
    return { ...player, user, videos: playerVideos };
  });
}

export function getPlayerById(userId: string): PlayerWithUser | null {
  const player = players.find(p => p.userId === userId);
  if (!player) return null;
  
  const user = users.find(u => u.id === userId)!;
  const playerVideos = videos.filter(v => v.playerUserId === userId);
  return { ...player, user, videos: playerVideos };
}

export function getVideos(): Video[] {
  return videos;
}

export function getCoaches(): Coach[] {
  return coaches;
}

export function addLike(like: Like): void {
  const existingIndex = likes.findIndex(l => l.coachUserId === like.coachUserId && l.videoId === like.videoId);
  if (existingIndex === -1) {
    likes.push(like);
  }
}

export function removeLike(coachUserId: string, videoId: string): void {
  const index = likes.findIndex(l => l.coachUserId === coachUserId && l.videoId === videoId);
  if (index !== -1) {
    likes.splice(index, 1);
  }
}

export function addSave(save: Save): void {
  const existingIndex = saves.findIndex(s => s.coachUserId === save.coachUserId && s.playerUserId === save.playerUserId);
  if (existingIndex === -1) {
    saves.push(save);
  }
}

export function removeSave(coachUserId: string, playerUserId: string): void {
  const index = saves.findIndex(s => s.coachUserId === coachUserId && s.playerUserId === playerUserId);
  if (index !== -1) {
    saves.splice(index, 1);
  }
}

// Initialize data on module load
seedData();