'use client';

import Link from 'next/link';
import { Target, Search, Video, List, ArrowRight, Sparkles, Zap, Users, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface NavigationCardProps {
  href: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: 'red' | 'green' | 'blue' | 'purple' | 'gold';
  badge?: string;
  stats?: {
    label: string;
    value: string;
  };
  isNew?: boolean;
  isPremium?: boolean;
}

function NavigationCard({ 
  href, 
  title, 
  description, 
  icon, 
  color, 
  badge, 
  stats, 
  isNew = false, 
  isPremium = false 
}: NavigationCardProps) {
  const colorClasses = {
    red: {
      bg: 'from-morocco-red-500 to-morocco-red-600',
      shadow: 'hover:shadow-glow',
      light: 'bg-morocco-red-50 border-morocco-red-200',
      text: 'text-morocco-red-600'
    },
    green: {
      bg: 'from-morocco-green-500 to-morocco-green-600',
      shadow: 'hover:shadow-glow-green',
      light: 'bg-morocco-green-50 border-morocco-green-200',
      text: 'text-morocco-green-600'
    },
    blue: {
      bg: 'from-blue-500 to-blue-600',
      shadow: 'hover:shadow-lg',
      light: 'bg-blue-50 border-blue-200',
      text: 'text-blue-600'
    },
    purple: {
      bg: 'from-purple-500 to-purple-600',
      shadow: 'hover:shadow-lg',
      light: 'bg-purple-50 border-purple-200',
      text: 'text-purple-600'
    },
    gold: {
      bg: 'from-morocco-gold-500 to-morocco-gold-600',
      shadow: 'hover:shadow-glow-gold',
      light: 'bg-morocco-gold-50 border-morocco-gold-200',
      text: 'text-morocco-gold-600'
    }
  };

  return (
    <Link href={href} className="block group">
      <Card className={`p-6 h-full transition-all duration-500 hover:scale-105 ${colorClasses[color].shadow} relative overflow-hidden`}>
        {/* Premium Glow Effect */}
        {isPremium && (
          <div className="absolute inset-0 bg-gradient-to-r from-morocco-gold-400/5 to-morocco-gold-600/5 rounded-3xl" />
        )}

        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClasses[color].bg} ${colorClasses[color].shadow} flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
            {icon}
          </div>
          
          <div className="flex flex-col items-end space-y-2">
            {isNew && (
              <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white text-xs">
                <Sparkles className="w-3 h-3 mr-1" />
                Nouveau
              </Badge>
            )}
            {isPremium && (
              <Badge className="badge-premium text-xs">
                Premium
              </Badge>
            )}
            {badge && !isNew && !isPremium && (
              <Badge variant="secondary" className="text-xs">
                {badge}
              </Badge>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3 mb-4">
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-morocco-red-600 transition-colors">
            {title}
          </h3>
          <p className="text-slate-600 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Stats */}
        {stats && (
          <div className={`p-3 rounded-xl border ${colorClasses[color].light} mb-4`}>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600">{stats.label}</span>
              <span className={`font-bold ${colorClasses[color].text}`}>{stats.value}</span>
            </div>
          </div>
        )}

        {/* Arrow */}
        <div className="flex items-center justify-end">
          <div className="flex items-center space-x-2 text-slate-500 group-hover:text-morocco-red-500 transition-colors">
            <span className="text-sm font-medium">Accéder</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Card>
    </Link>
  );
}

export function CoachNavigation() {
  const navigationItems = [
    {
      href: "/coach/terrain",
      title: "Terrain Interactif",
      description: "Visualisez les joueurs par position sur un terrain 3D interactif avec formations tactiques",
      icon: <Target className="w-8 h-8 text-white" />,
      color: "green" as const,
      stats: {
        label: "Formations disponibles",
        value: "12"
      },
      isPremium: true
    },
    {
      href: "/coach/search",
      title: "Recherche Avancée",
      description: "Filtrez et trouvez les joueurs selon vos critères précis avec IA de matching",
      icon: <Search className="w-8 h-8 text-white" />,
      color: "blue" as const,
      stats: {
        label: "Filtres disponibles",
        value: "25+"
      },
      isNew: true
    },
    {
      href: "/coach/feed",
      title: "Feed Vidéos Premium",
      description: "Parcourez les vidéos des joueurs en format vertical avec analytics avancées",
      icon: <Video className="w-8 h-8 text-white" />,
      color: "purple" as const,
      stats: {
        label: "Nouvelles vidéos",
        value: "47"
      },
      badge: "Populaire"
    },
    {
      href: "/coach/shortlists",
      title: "Shortlists Intelligentes",
      description: "Gérez vos listes de joueurs favoris avec système de notation et comparaison",
      icon: <List className="w-8 h-8 text-white" />,
      color: "red" as const,
      stats: {
        label: "Joueurs sauvés",
        value: "24"
      }
    }
  ];

  const quickActions = [
    {
      href: "/coach/analytics",
      title: "Analytics Pro",
      description: "Tableaux de bord et métriques avancées",
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      color: "gold" as const,
      isPremium: true
    },
    {
      href: "/coach/messages",
      title: "Messages",
      description: "Conversations avec les joueurs",
      icon: <Users className="w-6 h-6 text-white" />,
      color: "blue" as const,
      badge: "3 nouveaux"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Main Navigation */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Outils de recrutement</h2>
            <p className="text-slate-600">Accédez à tous vos outils de découverte de talents</p>
          </div>
          <div className="flex items-center space-x-2">
            <Zap className="w-5 h-5 text-morocco-gold-500" />
            <span className="text-sm font-semibold text-morocco-gold-600">Mode Premium Actif</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {navigationItems.map((item, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <NavigationCard {...item} />
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-4">Actions rapides</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quickActions.map((action, index) => (
            <NavigationCard key={index} {...action} />
          ))}
        </div>
      </div>
    </div>
  );
}