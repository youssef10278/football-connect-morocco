'use client';

import { Eye, Heart, Bookmark, MessageCircle, Clock, User, Video, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

interface ActivityItem {
  id: string;
  type: 'view' | 'like' | 'save' | 'message' | 'contact';
  playerName: string;
  playerPosition: string;
  action: string;
  timestamp: string;
  avatar?: string;
  isNew?: boolean;
}

interface RecentPlayerProps {
  id: string;
  name: string;
  position: string;
  rating: number;
  club?: string;
  isOnline?: boolean;
}

function ActivityItemComponent({ item }: { item: ActivityItem }) {
  const getIcon = () => {
    switch (item.type) {
      case 'view':
        return <Eye className="w-4 h-4 text-blue-500" />;
      case 'like':
        return <Heart className="w-4 h-4 text-red-500" />;
      case 'save':
        return <Bookmark className="w-4 h-4 text-morocco-gold-500" />;
      case 'message':
        return <MessageCircle className="w-4 h-4 text-green-500" />;
      case 'contact':
        return <User className="w-4 h-4 text-purple-500" />;
      default:
        return <Clock className="w-4 h-4 text-slate-400" />;
    }
  };

  const getBgColor = () => {
    switch (item.type) {
      case 'view':
        return 'bg-blue-50 border-blue-200';
      case 'like':
        return 'bg-red-50 border-red-200';
      case 'save':
        return 'bg-morocco-gold-50 border-morocco-gold-200';
      case 'message':
        return 'bg-green-50 border-green-200';
      case 'contact':
        return 'bg-purple-50 border-purple-200';
      default:
        return 'bg-slate-50 border-slate-200';
    }
  };

  return (
    <div className="flex items-center space-x-4 p-4 hover:bg-slate-50 rounded-xl transition-colors group">
      <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${getBgColor()}`}>
        {getIcon()}
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium text-slate-900 truncate">
            {item.action}
          </p>
          {item.isNew && (
            <Badge className="bg-green-500 text-white text-xs px-2 py-0.5">
              Nouveau
            </Badge>
          )}
        </div>
        <div className="flex items-center space-x-2 mt-1">
          <span className="text-xs text-slate-600">{item.playerName}</span>
          <span className="text-xs text-slate-400">•</span>
          <span className="text-xs text-slate-500">{item.playerPosition}</span>
        </div>
      </div>
      
      <div className="text-xs text-slate-400">
        {item.timestamp}
      </div>
    </div>
  );
}

function RecentPlayerCard({ player }: { player: RecentPlayerProps }) {
  return (
    <Link href={`/players/${player.id}`} className="block group">
      <Card className="p-4 hover:scale-105 transition-all duration-300 hover:shadow-lg">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-morocco-red-500 to-morocco-green-500 rounded-2xl flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            {player.isOnline && (
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-slate-900 truncate group-hover:text-morocco-red-600 transition-colors">
              {player.name}
            </h4>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-slate-600">{player.position}</span>
              {player.club && (
                <>
                  <span className="text-slate-400">•</span>
                  <span className="text-xs text-slate-500">{player.club}</span>
                </>
              )}
            </div>
          </div>
          
          <div className="text-right">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm font-bold text-slate-700">{player.rating}</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}

export function CoachActivity() {
  const recentActivity: ActivityItem[] = [
    {
      id: '1',
      type: 'save',
      playerName: 'Youssef Benali',
      playerPosition: 'CDM',
      action: 'Joueur ajouté à la shortlist "Milieux défensifs"',
      timestamp: 'Il y a 5 min',
      isNew: true
    },
    {
      id: '2',
      type: 'like',
      playerName: 'Amina Tazi',
      playerPosition: 'RW',
      action: 'Vidéo "Dribbles et centres" likée',
      timestamp: 'Il y a 12 min'
    },
    {
      id: '3',
      type: 'view',
      playerName: 'Mohamed Alami',
      playerPosition: 'ST',
      action: 'Profil consulté',
      timestamp: 'Il y a 23 min'
    },
    {
      id: '4',
      type: 'message',
      playerName: 'Salma Idrissi',
      playerPosition: 'CB',
      action: 'Message envoyé',
      timestamp: 'Il y a 1h'
    },
    {
      id: '5',
      type: 'contact',
      playerName: 'Rachid Bennani',
      playerPosition: 'GK',
      action: 'Contact établi',
      timestamp: 'Il y a 2h'
    }
  ];

  const recentPlayers: RecentPlayerProps[] = [
    {
      id: 'p1',
      name: 'Youssef Benali',
      position: 'CDM',
      rating: 8.5,
      club: 'Raja Casa',
      isOnline: true
    },
    {
      id: 'p2',
      name: 'Amina Tazi',
      position: 'RW',
      rating: 8.2,
      club: 'AS FAR',
      isOnline: false
    },
    {
      id: 'p3',
      name: 'Mohamed Alami',
      position: 'ST',
      rating: 8.8,
      club: 'Wydad AC',
      isOnline: true
    },
    {
      id: 'p4',
      name: 'Salma Idrissi',
      position: 'CB',
      rating: 7.9,
      isOnline: false
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Recent Activity */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Activité récente</h2>
            <p className="text-sm text-slate-600">Vos dernières interactions</p>
          </div>
          <Link href="/coach/activity" className="text-sm text-morocco-red-500 hover:text-morocco-red-600 font-medium">
            Voir tout
          </Link>
        </div>
        
        <Card className="divide-y divide-slate-100">
          {recentActivity.map((item) => (
            <ActivityItemComponent key={item.id} item={item} />
          ))}
        </Card>
      </div>

      {/* Recently Viewed Players */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Joueurs récents</h2>
            <p className="text-sm text-slate-600">Derniers profils consultés</p>
          </div>
          <Link href="/coach/history" className="text-sm text-morocco-red-500 hover:text-morocco-red-600 font-medium">
            Historique
          </Link>
        </div>
        
        <div className="space-y-4">
          {recentPlayers.map((player) => (
            <RecentPlayerCard key={player.id} player={player} />
          ))}
        </div>

        {/* Quick Action */}
        <Card className="p-6 mt-6 bg-gradient-to-r from-morocco-red-50 to-morocco-green-50 border-morocco-red-200">
          <div className="text-center">
            <Video className="w-12 h-12 text-morocco-red-500 mx-auto mb-3" />
            <h3 className="font-bold text-slate-900 mb-2">Découvrir de nouveaux talents</h3>
            <p className="text-sm text-slate-600 mb-4">
              Explorez notre feed vidéo pour découvrir les derniers talents
            </p>
            <Link 
              href="/coach/feed" 
              className="inline-flex items-center px-4 py-2 bg-morocco-red-500 text-white rounded-xl font-medium hover:bg-morocco-red-600 transition-colors"
            >
              <Video className="w-4 h-4 mr-2" />
              Voir le feed
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}