'use client';

import { PlayerWithUser } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, User, Verified, Crown, Star, TrendingUp, Award } from 'lucide-react';
import { getPositionColor } from '@/lib/utils';
import Link from 'next/link';

interface PlayerCardProps {
  player: PlayerWithUser;
  variant?: 'default' | 'premium' | 'compact';
}

export function PlayerCard({ player, variant = 'default' }: PlayerCardProps) {
  const { user, positions, age, heightCm, dominantFoot, club, skills } = player;
  
  // Calculate overall rating
  const overallRating = Math.round(
    Object.values(skills).reduce((sum, skill) => sum + skill, 0) / Object.keys(skills).length
  );

  const isPremium = user.plan === 'PRO';

  return (
    <Link href={`/players/${user.id}`} className="block group">
      <Card 
        variant={isPremium ? 'premium' : 'player'} 
        className={`cursor-pointer transition-all duration-500 hover:scale-[1.02] ${
          isPremium ? 'hover:shadow-glow-gold' : 'hover:shadow-premium'
        }`}
      >
        {/* Premium Glow Effect */}
        {isPremium && (
          <div className="absolute inset-0 bg-gradient-to-r from-morocco-gold-400/10 to-morocco-gold-600/10 rounded-3xl" />
        )}

        <CardContent className="p-6 relative">
          {/* Header with Avatar and Status */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-4">
              {/* Premium Avatar */}
              <div className="relative">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                  isPremium 
                    ? 'bg-gradient-to-br from-morocco-gold-400 to-morocco-gold-600 shadow-glow-gold' 
                    : 'bg-gradient-to-br from-morocco-red-500 to-morocco-green-500 shadow-lg'
                }`}>
                  <User className="w-8 h-8 text-white" />
                </div>
                {/* Rating Badge */}
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-lg border-2 border-slate-100">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    overallRating >= 8 ? 'bg-green-500 text-white' :
                    overallRating >= 6 ? 'bg-yellow-500 text-white' :
                    'bg-slate-400 text-white'
                  }`}>
                    {overallRating}
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h3 className="font-bold text-xl text-slate-900 group-hover:text-morocco-red-600 transition-colors">
                    {user.name}
                  </h3>
                  {user.verified && (
                    <div className="relative">
                      <Verified className="w-5 h-5 text-blue-500" />
                      <div className="absolute inset-0 bg-blue-500 rounded-full blur-sm opacity-30" />
                    </div>
                  )}
                </div>
                <div className="flex items-center text-sm text-slate-600 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {user.city}, {user.country}
                </div>
                {club && (
                  <div className="flex items-center text-sm text-slate-500">
                    <Award className="w-4 h-4 mr-1" />
                    {club}
                  </div>
                )}
              </div>
            </div>

            {/* Premium Badge */}
            {isPremium && (
              <div className="badge-premium">
                <Crown className="w-3 h-3 mr-1" />
                PRO
              </div>
            )}
          </div>

          {/* Positions */}
          <div className="flex flex-wrap gap-2 mb-4">
            {positions.map((position) => (
              <Badge
                key={position}
                className={`${getPositionColor(position)} transition-all duration-300 hover:scale-105`}
                variant="secondary"
              >
                {position}
              </Badge>
            ))}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center p-3 bg-slate-50 rounded-xl">
              <div className="text-2xl font-bold text-slate-900">{age}</div>
              <div className="text-xs text-slate-600 font-medium">ans</div>
            </div>
            <div className="text-center p-3 bg-slate-50 rounded-xl">
              <div className="text-2xl font-bold text-slate-900">{heightCm}</div>
              <div className="text-xs text-slate-600 font-medium">cm</div>
            </div>
            <div className="text-center p-3 bg-slate-50 rounded-xl">
              <div className="text-lg font-bold text-slate-900">
                {dominantFoot === 'LEFT' ? 'G' : dominantFoot === 'RIGHT' ? 'D' : 'A'}
              </div>
              <div className="text-xs text-slate-600 font-medium">pied</div>
            </div>
          </div>

          {/* Skills Preview */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600 font-medium">Compétences clés</span>
              <TrendingUp className="w-4 h-4 text-green-500" />
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {Object.entries(skills)
                .sort(([,a], [,b]) => b - a)
                .slice(0, 4)
                .map(([skill, value]) => (
                  <div key={skill} className="flex justify-between items-center">
                    <span className="text-slate-600 capitalize">{skill}</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-12 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all duration-500 ${
                            value >= 8 ? 'bg-green-500' :
                            value >= 6 ? 'bg-yellow-500' :
                            'bg-slate-400'
                          }`}
                          style={{ width: `${value * 10}%` }}
                        />
                      </div>
                      <span className="font-bold text-slate-700 w-4">{value}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Videos Count */}
          {player.videos.length > 0 && (
            <div className="mt-4 pt-4 border-t border-slate-200">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Vidéos disponibles</span>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="font-bold text-slate-700">{player.videos.length}</span>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}