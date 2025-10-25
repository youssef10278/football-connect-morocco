import { CoachHeader } from '@/components/coach-header';
import { CoachStats } from '@/components/coach-stats';
import { CoachNavigation } from '@/components/coach-navigation';
import { CoachActivity } from '@/components/coach-activity';
import { Sparkles, TrendingUp, Zap } from 'lucide-react';

export default function CoachDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-morocco-red-50/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-morocco-red-100 rounded-full blur-3xl opacity-10 animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-morocco-green-100 rounded-full blur-3xl opacity-10 animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-morocco-gold-100/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Header Premium */}
      <CoachHeader 
        coachName="Coach Anouar"
        clubName="Club Casa Premium"
        isPremium={true}
        notifications={5}
      />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome Section Premium */}
          <div className="mb-12">
            <div className="flex items-center justify-between">
              <div className="animate-fade-in-up">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-6 h-6 text-morocco-gold-500" />
                    <span className="text-sm font-semibold text-morocco-gold-600 bg-morocco-gold-100 px-3 py-1 rounded-full">
                      Premium Dashboard
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm text-slate-600">En ligne</span>
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-3">
                  Bienvenue, 
                  <span className="gradient-text block">Coach Anouar</span>
                </h1>
                
                <p className="text-xl text-slate-600 max-w-2xl">
                  Découvrez les meilleurs talents du football marocain avec vos outils premium de recrutement
                </p>
              </div>

              {/* Quick Actions */}
              <div className="hidden lg:flex flex-col space-y-3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center space-x-2 text-sm">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span className="text-slate-600">Activité: </span>
                  <span className="font-semibold text-green-600">+23% cette semaine</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Zap className="w-4 h-4 text-morocco-gold-500" />
                  <span className="text-slate-600">Statut: </span>
                  <span className="font-semibold text-morocco-gold-600">Premium Actif</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <CoachStats />
          </div>

          {/* Navigation Section */}
          <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <CoachNavigation />
          </div>

          {/* Activity Section */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <CoachActivity />
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-14 h-14 bg-gradient-to-r from-morocco-red-500 to-morocco-red-600 rounded-2xl shadow-premium hover:shadow-glow flex items-center justify-center transition-all duration-300 hover:scale-110 group">
          <Zap className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
        </button>
      </div>
    </div>
  );
}