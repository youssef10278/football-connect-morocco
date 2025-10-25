'use client';

import { useState } from 'react';
import { PlayerWithUser } from '@/lib/types';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  User, 
  MapPin, 
  Star, 
  Heart, 
  Bookmark, 
  Eye, 
  TrendingUp, 
  Crown,
  Filter,
  SortDesc,
  Grid,
  List as ListIcon,
  Play
} from 'lucide-react';
import Link from 'next/link';
import { getPositionColor, getRatingColor, getSkillName } from '@/lib/utils';

interface PremiumPlayerListProps {
  selectedPosition: string | null;
  players: PlayerWithUser[];
  loading: boolean;
  onPlayerAction: (playerId: string, action: 'like' | 'save' | 'view') => void;
}

interface PlayerCardProps {
  player: PlayerWithUser;
  onAction: (action: 'like' | 'save' | 'view') => void;
  viewMode: 'grid' | 'list';
}

function PlayerMiniCard({ player, onAction, viewMode }: PlayerCardProps) {
  const overallRating = Math.round(
    Object.values(player.skills).reduce((sum, skill) => sum + skill, 0) / Object.keys(player.skills).length
  );

  const isPremium = player.user.plan === 'PRO';

  if (viewMode === 'list') {
    return (
      <Link href={`/players/${player.userId}`}>
        <Card className="p-4 hover:scale-[1.01] transition-all duration-300 hover:shadow-lg group cursor-pointer hover:border-morocco-red-300 bg-white">
          <div className="flex items-center space-x-4">
            {/* Avatar simple */}
            <div className="relative flex-shrink-0">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                isPremium
                  ? 'bg-gradient-to-br from-morocco-gold-400 to-morocco-gold-600'
                  : 'bg-gradient-to-br from-morocco-red-500 to-morocco-green-500'
              }`}>
                <User className="w-7 h-7 text-white" />
              </div>

              {/* Badge PRO */}
              {isPremium && (
                <div className="absolute -top-1 -right-1 bg-morocco-gold-500 text-white px-1 py-0.5 rounded text-xs font-bold">
                  PRO
                </div>
              )}

              {/* Indicateur en ligne */}
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
            </div>

            {/* Informations principales */}
            <div className="flex-1 min-w-0">
              {/* Nom */}
              <h4 className="text-lg font-bold text-slate-900 group-hover:text-morocco-red-600 transition-colors truncate">
                {player.user.name}
              </h4>

              {/* Localisation */}
              <div className="flex items-center text-slate-500 text-sm mb-2">
                <MapPin className="w-3 h-3 mr-1" />
                <span className="truncate">{player.user.city}, {player.user.country}</span>
              </div>

              {/* Stats en ligne */}
              <div className="flex items-center space-x-4 text-sm text-slate-600 mb-2">
                <span className="font-medium">{player.age} ans</span>
                <span>•</span>
                <span className="font-medium">{player.heightCm}cm</span>
                <span>•</span>
                <span className="font-medium">{player.dominantFoot === 'LEFT' ? 'Gauche' : 'Droit'}</span>
              </div>

              {/* Positions */}
              <div className="flex flex-wrap gap-1">
                {player.positions.slice(0, 3).map(position => (
                  <span
                    key={position}
                    className={`px-2 py-0.5 rounded text-xs font-medium ${getPositionColor(position)}`}
                  >
                    {position}
                  </span>
                ))}
              </div>
            </div>

            {/* Compétences et actions */}
            <div className="flex flex-col items-end space-y-2 flex-shrink-0">
              {/* Top compétences */}
              <div className="text-right">
                {Object.entries(player.skills)
                  .sort(([,a], [,b]) => b - a)
                  .slice(0, 2)
                  .map(([skill, value]) => (
                    <div key={skill} className="flex items-center space-x-2 mb-1">
                      <span className="text-xs text-slate-600">{getSkillName(skill)}</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-8 h-1 bg-slate-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              value >= 8 ? 'bg-green-500' :
                              value >= 6 ? 'bg-yellow-500' :
                              'bg-slate-400'
                            }`}
                            style={{ width: `${value * 10}%` }}
                          />
                        </div>
                        <span className="text-xs font-bold text-slate-900 w-4">{value}</span>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onAction('save');
                  }}
                  className="p-1.5 hover:bg-morocco-gold-50"
                >
                  <Heart className="w-4 h-4 text-slate-400" />
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onAction('like');
                  }}
                  className="p-1.5 hover:bg-red-50"
                >
                  <Bookmark className="w-4 h-4 text-slate-400" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    );
  }

  // Grid view - Design premium optimisé pour l'affichage complet
  return (
    <Link href={`/players/${player.userId}`}>
      <Card className="p-4 hover:scale-[1.02] transition-all duration-300 hover:shadow-premium group bg-white/95 backdrop-blur-sm min-h-[420px] flex flex-col cursor-pointer hover:border-morocco-red-300">
        {/* Premium Glow */}
        {isPremium && (
          <div className="absolute inset-0 bg-gradient-to-r from-morocco-gold-400/10 to-morocco-gold-600/10 rounded-3xl" />
        )}

      <div className="flex flex-col h-full relative">
        {/* Header avec Avatar et Badge PRO */}
        <div className="flex items-start justify-between mb-4">
          <div className="relative">
            {/* Avatar Premium */}
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
              isPremium
                ? 'bg-gradient-to-br from-morocco-gold-400 to-morocco-gold-600 shadow-glow-gold'
                : 'bg-gradient-to-br from-morocco-red-500 to-morocco-green-500 shadow-lg'
            }`}>
              <User className="w-6 h-6 text-white" />
            </div>
            {/* Indicateur en ligne */}
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg" />
          </div>

          {/* Badge PRO */}
          {isPremium && (
            <div className="bg-gradient-to-r from-morocco-gold-400 to-morocco-gold-500 text-slate-900 px-2 py-1 rounded-xl text-xs font-bold shadow-lg">
              PR
            </div>
          )}
        </div>

        {/* Nom du joueur */}
        <div className="mb-3">
          <div className="flex items-start justify-between mb-1">
            <h3 className="text-lg font-black text-slate-900 group-hover:text-morocco-red-600 transition-colors leading-tight line-clamp-2 flex-1">
              {player.user.name}
            </h3>
            <Eye className="w-4 h-4 text-slate-400 group-hover:text-morocco-red-500 transition-colors ml-2 flex-shrink-0" />
          </div>

          {/* Localisation */}
          <div className="flex items-center text-slate-500 mb-2">
            <MapPin className="w-3 h-3 mr-1 flex-shrink-0" />
            <span className="font-medium text-sm truncate">{player.user.city}</span>
          </div>

          {/* Infos physiques - Layout vertical pour plus d'espace */}
          <div className="text-slate-600 text-sm">
            <div className="flex items-center justify-between">
              <span className="font-semibold">{player.age} ans</span>
              <span className="font-semibold">{player.heightCm}cm</span>
              <span className="font-semibold">{player.dominantFoot === 'LEFT' ? 'G' : 'D'}</span>
            </div>
          </div>
        </div>

        {/* Positions */}
        <div className="flex flex-wrap gap-1 mb-4">
          {player.positions.slice(0, 2).map(position => (
            <div
              key={position}
              className={`px-2 py-1 rounded-xl text-xs font-semibold ${getPositionColor(position)} transition-all duration-300`}
            >
              {position}
            </div>
          ))}
        </div>

        {/* Top compétences - Optimisé pour l'espace */}
        <div className="flex-1 space-y-2 mb-4">
          <h4 className="text-slate-700 font-semibold text-xs">Top compétences</h4>
          {Object.entries(player.skills)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 2)
            .map(([skill, value]) => (
              <div key={skill} className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 font-medium text-xs truncate">{getSkillName(skill)}</span>
                  <span className="text-sm font-black text-slate-900 ml-2">{value}</span>
                </div>
                <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      value >= 8 ? 'bg-green-500' :
                      value >= 6 ? 'bg-yellow-500' :
                      'bg-slate-400'
                    }`}
                    style={{ width: `${value * 10}%` }}
                  />
                </div>
              </div>
            ))}
        </div>

        {/* Actions - En bas de la carte */}
        <div className="flex justify-center items-center gap-2 pt-3 border-t border-slate-100 mt-auto">
          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onAction('save');
            }}
            className="p-2 hover:bg-morocco-gold-50 hover:text-morocco-gold-600 rounded-xl transition-all duration-300 hover:scale-110"
          >
            <Heart className="w-4 h-4 text-slate-400 hover:text-morocco-gold-600" />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onAction('like');
            }}
            className="p-2 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all duration-300 hover:scale-110"
          >
            <Eye className="w-4 h-4 text-slate-400 hover:text-red-600" />
          </Button>
        </div>
      </div>
    </Card>
    </Link>
  );
}

export function PremiumPlayerList({ 
  selectedPosition, 
  players, 
  loading, 
  onPlayerAction 
}: PremiumPlayerListProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'rating' | 'age' | 'name'>('rating');

  const sortedPlayers = [...players].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        const ratingA = Object.values(a.skills).reduce((sum, skill) => sum + skill, 0) / Object.keys(a.skills).length;
        const ratingB = Object.values(b.skills).reduce((sum, skill) => sum + skill, 0) / Object.keys(b.skills).length;
        return ratingB - ratingA;
      case 'age':
        return a.age - b.age;
      case 'name':
        return a.user.name.localeCompare(b.user.name);
      default:
        return 0;
    }
  });

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <Card className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-3 sm:space-y-0">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center space-x-2">
              {selectedPosition ? (
                <>
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-morocco-red-500" />
                  <span className="text-sm sm:text-base">Joueurs - {selectedPosition}</span>
                </>
              ) : (
                <>
                  <User className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500" />
                  <span className="text-sm sm:text-base">Sélectionnez une position</span>
                </>
              )}
            </h3>
            {selectedPosition && (
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {players.length} talent{players.length > 1 ? 's' : ''} disponible{players.length > 1 ? 's' : ''}
              </p>
            )}
          </div>

          {selectedPosition && (
            <div className="flex items-center space-x-3">
              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 border border-slate-200 rounded-xl text-sm focus:border-morocco-red-300 focus:ring-2 focus:ring-morocco-red-100"
              >
                <option value="rating">Note globale</option>
                <option value="age">Âge</option>
                <option value="name">Nom</option>
              </select>

              {/* View Mode */}
              <div className="flex items-center bg-slate-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-white text-morocco-red-500 shadow-sm' 
                      : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-white text-morocco-red-500 shadow-sm' 
                      : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  <ListIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {!selectedPosition && (
          <div className="text-center py-8">
            <User className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-600 mb-2">
              Cliquez sur une position du terrain pour voir les joueurs disponibles pour ce poste.
            </p>
            <p className="text-sm text-slate-500">
              Utilisez les formations tactiques pour explorer différentes configurations.
            </p>
          </div>
        )}
      </Card>

      {/* Loading State */}
      {loading && (
        <div className="space-y-4">
          {[...Array(viewMode === 'grid' ? 6 : 4)].map((_, i) => (
            <Card key={i} className="p-4">
              <div className="animate-pulse">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-2xl" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-slate-200 rounded w-1/3" />
                    <div className="h-3 bg-slate-200 rounded w-1/2" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* No Players */}
      {selectedPosition && !loading && players.length === 0 && (
        <Card className="p-8 text-center">
          <TrendingUp className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h4 className="text-lg font-semibold text-slate-700 mb-2">
            Aucun joueur trouvé
          </h4>
          <p className="text-slate-500 mb-4">
            Aucun talent disponible pour la position {selectedPosition} actuellement.
          </p>
          <Link href="/coach/search">
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Recherche avancée
            </Button>
          </Link>
        </Card>
      )}

      {/* Players Grid/List */}
      {selectedPosition && !loading && players.length > 0 && (
        <>
          <div className={
            viewMode === 'grid'
              ? 'grid grid-cols-1 gap-4'
              : 'space-y-3'
          }>
            {sortedPlayers.map((player) => (
              <PlayerMiniCard
                key={player.userId}
                player={player}
                onAction={(action) => onPlayerAction(player.userId, action)}
                viewMode={viewMode}
              />
            ))}
          </div>

          {/* View All Link */}
          <Card className="p-6 text-center bg-gradient-to-r from-morocco-red-50 to-morocco-green-50 border-morocco-red-200">
            <h4 className="font-bold text-slate-900 mb-2">Découvrir plus de talents</h4>
            <p className="text-sm text-slate-600 mb-4">
              Explorez tous les joueurs {selectedPosition} avec des filtres avancés
            </p>
            <Link href={`/coach/search?position=${selectedPosition}`}>
              <Button variant="default">
                <Filter className="w-4 h-4 mr-2" />
                Voir tous les {selectedPosition}
              </Button>
            </Link>
          </Card>
        </>
      )}
    </div>
  );
}