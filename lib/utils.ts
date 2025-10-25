import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export function formatPrice(amount: number, currency = 'MAD'): string {
  return `${amount} ${currency}`;
}

export function getPositionColor(position: string): string {
  const colors: Record<string, string> = {
    'GK': 'bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 border-yellow-300',
    'CB': 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 border-blue-300',
    'LB': 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 border-blue-300',
    'RB': 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 border-blue-300',
    'LWB': 'bg-gradient-to-r from-cyan-100 to-cyan-200 text-cyan-800 border-cyan-300',
    'RWB': 'bg-gradient-to-r from-cyan-100 to-cyan-200 text-cyan-800 border-cyan-300',
    'CDM': 'bg-gradient-to-r from-green-100 to-green-200 text-green-800 border-green-300',
    'CM': 'bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-800 border-emerald-300',
    'CAM': 'bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 border-purple-300',
    'LM': 'bg-gradient-to-r from-teal-100 to-teal-200 text-teal-800 border-teal-300',
    'RM': 'bg-gradient-to-r from-teal-100 to-teal-200 text-teal-800 border-teal-300',
    'LW': 'bg-gradient-to-r from-morocco-red-100 to-morocco-red-200 text-morocco-red-800 border-morocco-red-300',
    'RW': 'bg-gradient-to-r from-morocco-red-100 to-morocco-red-200 text-morocco-red-800 border-morocco-red-300',
    'ST': 'bg-gradient-to-r from-red-100 to-red-200 text-red-800 border-red-300',
    'CF': 'bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 border-orange-300',
  };
  return colors[position] || 'bg-gradient-to-r from-slate-100 to-slate-200 text-slate-800 border-slate-300';
}

export function getSkillColor(value: number): string {
  if (value >= 8) return 'text-green-600 bg-green-100';
  if (value >= 6) return 'text-yellow-600 bg-yellow-100';
  if (value >= 4) return 'text-orange-600 bg-orange-100';
  return 'text-red-600 bg-red-100';
}

export function getRatingColor(rating: number): string {
  if (rating >= 8.5) return 'bg-gradient-to-r from-green-500 to-green-600';
  if (rating >= 7.5) return 'bg-gradient-to-r from-yellow-500 to-yellow-600';
  if (rating >= 6.5) return 'bg-gradient-to-r from-orange-500 to-orange-600';
  return 'bg-gradient-to-r from-red-500 to-red-600';
}

export function formatTimeAgo(date: string): string {
  const now = new Date();
  const past = new Date(date);
  const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);
  
  if (diffInSeconds < 60) return 'À l\'instant';
  if (diffInSeconds < 3600) return `Il y a ${Math.floor(diffInSeconds / 60)} min`;
  if (diffInSeconds < 86400) return `Il y a ${Math.floor(diffInSeconds / 3600)}h`;
  return `Il y a ${Math.floor(diffInSeconds / 86400)} jour(s)`;
}

export function getSkillName(skill: string): string {
  const skillNames: Record<string, string> = {
    speed: 'Vitesse',
    stamina: 'Endurance', 
    technique: 'Technique',
    vision: 'Vision de jeu',
    finishing: 'Finishing',
    passing: 'Passes',
    aerial: 'Aerial',
    defense: 'Défense'
  };
  return skillNames[skill] || skill;
}