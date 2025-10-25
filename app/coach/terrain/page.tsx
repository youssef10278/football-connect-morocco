'use client';

import { useState, useEffect } from 'react';
import { PlayerWithUser } from '@/lib/types';
import { CoachHeader } from '@/components/coach-header';
import { PremiumField } from '@/components/premium-field';
import { PremiumPlayerList } from '@/components/premium-player-list';
import { FormationStats } from '@/components/formation-stats';
import { ChevronLeft, Sparkles, Target, TrendingUp, Zap } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CoachTerrainPage() {
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);
  const [selectedFormation, setSelectedFormation] = useState<string>('4-3-3');
  const [players, setPlayers] = useState<PlayerWithUser[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPlayersByPosition = async (position: string) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/players?position=${position}&limit=9`);
      const data = await response.json();
      setPlayers(data.players);
    } catch (error) {
      console.error('Error fetching players:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePositionClick = (position: string) => {
    if (selectedPosition === position) {
      setSelectedPosition(null);
      setPlayers([]);
    } else {
      setSelectedPosition(position);
      fetchPlayersByPosition(position);
    }
  };

  const handleFormationChange = (formation: string) => {
    setSelectedFormation(formation);
    setSelectedPosition(null);
    setPlayers([]);
  };

  const handlePlayerAction = (playerId: string, action: 'like' | 'save' | 'view') => {
    console.log(`Action ${action} on player ${playerId}`);
    // Implement actual API calls here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-morocco-red-100 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-morocco-gold-100/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Header Premium */}
      <CoachHeader 
        coachName="Coach Anouar"
        clubName="Club Casa Premium"
        isPremium={true}
        notifications={3}
      />

      <div className="relative z-10">
        {/* Breadcrumb & Title */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 sm:mb-8 space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/coach">
                <Button variant="ghost" size="sm" className="hover:bg-slate-100 w-fit">
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
              </Link>

              <div className="animate-fade-in-up">
                <div className="flex items-center space-x-3 mb-2">
                  <Sparkles className="w-5 h-5 text-morocco-gold-500" />
                  <span className="text-xs sm:text-sm font-semibold text-morocco-gold-600 bg-morocco-gold-100 px-2 sm:px-3 py-1 rounded-full">
                    Terrain Premium
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900">
                  Terrain Tactique
                  <span className="gradient-text block text-xl sm:text-2xl md:text-3xl">Interactif</span>
                </h1>

                <p className="text-sm sm:text-base text-slate-600 mt-2">
                  Explorez les formations et découvrez les talents par position
                </p>
              </div>
            </div>

            {/* Quick Actions - Mobile & Desktop */}
            <div className="flex lg:hidden items-center justify-between bg-white/80 backdrop-blur-sm rounded-xl p-3 border border-slate-200">
              <div className="text-left">
                <p className="text-xs font-semibold text-slate-700">Formation active</p>
                <p className="text-xs text-slate-500">{selectedFormation}</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs text-slate-600">Temps réel</span>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-3">
              <div className="text-right">
                <p className="text-sm font-semibold text-slate-700">Formation active</p>
                <p className="text-xs text-slate-500">{selectedFormation}</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-slate-600">Temps réel</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
            {/* Football Field - Full width on mobile, 2/3 on desktop */}
            <div className="xl:col-span-2 space-y-4 sm:space-y-6">
              <div className="animate-fade-in-up">
                <PremiumField
                  selectedPosition={selectedPosition}
                  onPositionClick={handlePositionClick}
                  selectedFormation={selectedFormation}
                  onFormationChange={handleFormationChange}
                />
              </div>

              {/* Formation Stats - Hidden on mobile, shown on tablet+ */}
              <div className="hidden sm:block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <FormationStats
                  selectedFormation={selectedFormation}
                  selectedPosition={selectedPosition}
                  totalPlayers={players.length}
                />
              </div>
            </div>

            {/* Players List - Full width on mobile, 1/3 on desktop */}
            <div className="space-y-4 sm:space-y-6">
              <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <PremiumPlayerList
                  selectedPosition={selectedPosition}
                  players={players}
                  loading={loading}
                  onPlayerAction={handlePlayerAction}
                />
              </div>

              {/* Formation Stats - Mobile only */}
              <div className="sm:hidden animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <FormationStats
                  selectedFormation={selectedFormation}
                  selectedPosition={selectedPosition}
                  totalPlayers={players.length}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons - Responsive */}
      <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50 flex flex-col space-y-2 sm:space-y-3">
        <Link href="/coach/search">
          <button className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl shadow-premium hover:shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group">
            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:rotate-12 transition-transform" />
          </button>
        </Link>

        <Link href="/coach/feed">
          <button className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-morocco-red-500 to-morocco-red-600 rounded-xl sm:rounded-2xl shadow-premium hover:shadow-glow flex items-center justify-center transition-all duration-300 hover:scale-110 group">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:rotate-12 transition-transform" />
          </button>
        </Link>
      </div>
    </div>
  );
}