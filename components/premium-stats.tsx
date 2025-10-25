'use client';

import { TrendingUp, Users, Trophy, Star, Zap, Crown } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  trend?: string;
  color: 'red' | 'green' | 'gold' | 'blue';
}

function StatItem({ icon, value, label, trend, color }: StatItemProps) {
  const colorClasses = {
    red: 'from-morocco-red-500 to-morocco-red-600 shadow-glow',
    green: 'from-morocco-green-500 to-morocco-green-600 shadow-glow-green', 
    gold: 'from-morocco-gold-500 to-morocco-gold-600 shadow-glow-gold',
    blue: 'from-blue-500 to-blue-600 shadow-lg'
  };

  return (
    <div className="relative group">
      <div className="card p-6 text-center hover:scale-105 transition-all duration-500">
        <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${colorClasses[color]} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
          {icon}
        </div>
        <div className="text-4xl font-black text-slate-900 mb-2">{value}</div>
        <div className="text-slate-600 font-semibold mb-1">{label}</div>
        {trend && (
          <div className="flex items-center justify-center text-sm text-green-600">
            <TrendingUp className="w-4 h-4 mr-1" />
            {trend}
          </div>
        )}
      </div>
    </div>
  );
}

export function PremiumStats() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-morocco-gold-100 to-morocco-gold-200 border border-morocco-gold-300 mb-6">
            <Trophy className="w-4 h-4 text-morocco-gold-600 mr-2" />
            <span className="text-morocco-gold-800 font-semibold text-sm">Statistiques en temps réel</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            La plateforme qui
            <span className="gradient-text block">fait la différence</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Des milliers de talents découverts, des centaines de contrats signés, une communauté qui grandit chaque jour.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatItem
            icon={<Users className="w-8 h-8 text-white" />}
            value="2,500+"
            label="Joueurs actifs"
            trend="+15% ce mois"
            color="red"
          />
          <StatItem
            icon={<Crown className="w-8 h-8 text-white" />}
            value="150+"
            label="Coachs PRO"
            trend="+8% ce mois"
            color="gold"
          />
          <StatItem
            icon={<Trophy className="w-8 h-8 text-white" />}
            value="350+"
            label="Contrats signés"
            trend="+22% ce mois"
            color="green"
          />
          <StatItem
            icon={<Star className="w-8 h-8 text-white" />}
            value="4.9/5"
            label="Satisfaction"
            trend="Note moyenne"
            color="blue"
          />
        </div>

        {/* Premium Features Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-morocco-red-100 to-morocco-red-200 flex items-center justify-center">
              <Zap className="w-10 h-10 text-morocco-red-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Matching IA Premium</h3>
            <p className="text-slate-600">
              Notre algorithme intelligent connecte automatiquement les joueurs avec les coachs qui correspondent à leur profil.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-morocco-green-100 to-morocco-green-200 flex items-center justify-center">
              <Trophy className="w-10 h-10 text-morocco-green-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Réseau Vérifié</h3>
            <p className="text-slate-600">
              Tous nos coachs sont vérifiés et représentent des clubs officiels au Maroc et à l'international.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-morocco-gold-100 to-morocco-gold-200 flex items-center justify-center">
              <Star className="w-10 h-10 text-morocco-gold-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Suivi Personnalisé</h3>
            <p className="text-slate-600">
              Accompagnement premium avec conseils personnalisés pour optimiser votre profil et vos performances.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}