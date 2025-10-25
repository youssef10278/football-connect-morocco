'use client';

import { Users, Video, List, TrendingUp, Eye, Heart, Bookmark, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: React.ReactNode;
  color: 'red' | 'green' | 'blue' | 'purple' | 'gold';
  description?: string;
}

function StatCard({ title, value, change, changeType = 'neutral', icon, color, description }: StatCardProps) {
  const colorClasses = {
    red: {
      bg: 'from-morocco-red-500 to-morocco-red-600',
      shadow: 'shadow-glow',
      light: 'bg-morocco-red-50 border-morocco-red-200'
    },
    green: {
      bg: 'from-morocco-green-500 to-morocco-green-600',
      shadow: 'shadow-glow-green',
      light: 'bg-morocco-green-50 border-morocco-green-200'
    },
    blue: {
      bg: 'from-blue-500 to-blue-600',
      shadow: 'shadow-lg',
      light: 'bg-blue-50 border-blue-200'
    },
    purple: {
      bg: 'from-purple-500 to-purple-600',
      shadow: 'shadow-lg',
      light: 'bg-purple-50 border-purple-200'
    },
    gold: {
      bg: 'from-morocco-gold-500 to-morocco-gold-600',
      shadow: 'shadow-glow-gold',
      light: 'bg-morocco-gold-50 border-morocco-gold-200'
    }
  };

  const changeColors = {
    positive: 'text-green-600 bg-green-100',
    negative: 'text-red-600 bg-red-100',
    neutral: 'text-slate-600 bg-slate-100'
  };

  return (
    <Card className="p-6 hover:scale-105 transition-all duration-500 group">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colorClasses[color].bg} ${colorClasses[color].shadow} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
          {icon}
        </div>
        {change && (
          <div className={`px-2 py-1 rounded-full text-xs font-semibold ${changeColors[changeType]}`}>
            {changeType === 'positive' && '+'}
            {change}
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-slate-600">{title}</h3>
        <p className="text-3xl font-black text-slate-900">{value}</p>
        {description && (
          <p className="text-xs text-slate-500">{description}</p>
        )}
      </div>
    </Card>
  );
}

export function CoachStats() {
  const stats = [
    {
      title: "Joueurs disponibles",
      value: "2,847",
      change: "12%",
      changeType: "positive" as const,
      icon: <Users className="w-7 h-7 text-white" />,
      color: "red" as const,
      description: "Nouveaux profils cette semaine"
    },
    {
      title: "Vidéos vues",
      value: "156",
      change: "8%",
      changeType: "positive" as const,
      icon: <Video className="w-7 h-7 text-white" />,
      color: "purple" as const,
      description: "Cette semaine"
    },
    {
      title: "Joueurs en shortlist",
      value: "24",
      change: "3",
      changeType: "positive" as const,
      icon: <List className="w-7 h-7 text-white" />,
      color: "blue" as const,
      description: "Ajoutés récemment"
    },
    {
      title: "Taux de réponse",
      value: "87%",
      change: "5%",
      changeType: "positive" as const,
      icon: <TrendingUp className="w-7 h-7 text-white" />,
      color: "green" as const,
      description: "Contacts établis"
    }
  ];

  const activityStats = [
    {
      title: "Profils consultés",
      value: "43",
      icon: <Eye className="w-5 h-5 text-white" />,
      color: "blue" as const,
      description: "Aujourd'hui"
    },
    {
      title: "Vidéos likées",
      value: "18",
      icon: <Heart className="w-5 h-5 text-white" />,
      color: "red" as const,
      description: "Cette semaine"
    },
    {
      title: "Joueurs sauvés",
      value: "7",
      icon: <Bookmark className="w-5 h-5 text-white" />,
      color: "gold" as const,
      description: "Ce mois"
    },
    {
      title: "Temps passé",
      value: "2h 34m",
      icon: <Clock className="w-5 h-5 text-white" />,
      color: "purple" as const,
      description: "Aujourd'hui"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Main Stats */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Statistiques principales</h2>
            <p className="text-slate-600">Vue d'ensemble de votre activité de recrutement</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-slate-500">Dernière mise à jour</p>
            <p className="text-sm font-semibold text-slate-700">Il y a 5 minutes</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <StatCard {...stat} />
            </div>
          ))}
        </div>
      </div>

      {/* Activity Stats */}
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-4">Activité récente</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {activityStats.map((stat, index) => (
            <Card key={index} className="p-4 hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${
                  stat.color === 'red' ? 'from-morocco-red-500 to-morocco-red-600' :
                  stat.color === 'blue' ? 'from-blue-500 to-blue-600' :
                  stat.color === 'gold' ? 'from-morocco-gold-500 to-morocco-gold-600' :
                  'from-purple-500 to-purple-600'
                } flex items-center justify-center`}>
                  {stat.icon}
                </div>
                <div>
                  <p className="text-lg font-bold text-slate-900">{stat.value}</p>
                  <p className="text-xs text-slate-600">{stat.title}</p>
                  <p className="text-xs text-slate-500">{stat.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}