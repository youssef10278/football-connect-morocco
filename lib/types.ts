export type UserRole = 'PLAYER' | 'COACH' | 'ADMIN';
export type Plan = 'FREE' | 'PRO';
export type DominantFoot = 'LEFT' | 'RIGHT' | 'BOTH';
export type VideoStatus = 'APPROVED' | 'PENDING' | 'REJECTED';

export interface User {
  id: string;
  role: UserRole;
  email: string;
  phone?: string;
  name: string;
  country: string;
  city?: string;
  plan: Plan;
  verified: boolean;
}

export interface PlayerSkills {
  speed: number;
  stamina: number;
  technique: number;
  vision: number;
  finishing: number;
  passing: number;
  aerial: number;
  defense: number;
}

export interface Player {
  userId: string;
  age: number;
  heightCm: number;
  weightKg: number;
  dominantFoot: DominantFoot;
  positions: string[];
  club?: string;
  bio?: string;
  skills: PlayerSkills;
}

export interface Video {
  id: string;
  playerUserId: string;
  title: string;
  tags: string[];
  durationSec: number;
  src: string;
  thumbnail?: string;
  status: VideoStatus;
  createdAt: string;
}

export interface Coach {
  userId: string;
  clubName?: string;
  verified: boolean;
}

export interface Shortlist {
  id: string;
  coachUserId: string;
  name: string;
  items: string[];
}

export interface Like {
  coachUserId: string;
  videoId: string;
}

export interface Save {
  coachUserId: string;
  playerUserId: string;
}

export interface PlayerWithUser extends Player {
  user: User;
  videos: Video[];
}