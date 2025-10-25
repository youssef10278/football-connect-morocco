'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Users, 
  Target, 
  Shield, 
  Zap, 
  Star,
  BarChart3,
  Activity
} from 'lucide-react';

interface FormationStatsProps {
  selectedFormation: string;
  selectedPosition: string | null;
  totalPlayers: number;
}

interface StatItemProps {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  color: 'red' | 'green' | 'blue' | 'gold';
  trend?: string;
}

function StatItem({ label, value, icon, color, trend }: StatItemProps) {
  const colorClasses = {
    red: 'text-morocco-red-600 bg-morocco-red-100',
    green: 'text-morocco-green-600 bg-morocco-green-100',
    blue: 'text-blue-600 bg-blue-100',
    gold: 'text-morocco-gold-600 bg-morocco-gold-100'
  };

  return (
    <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-xl">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${colorClasses[color]}`}>
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-sm text-slate-600">{label}</p>
        <div className="flex items-center space-x-2">
          <p className="text-lg font-bold text-slate-900">{value}</p>
          {trend && (
            <span className="text-xs text-green-600 font-medium">+{trend}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export function FormationStats({ selectedFormation, selectedPosition, totalPlayers }: FormationStatsProps) {
  const formationData = {
    '4-3-3': {
      style: 'Offensif',
      strengths: ['Largeur offensive', 'Pressing haut', 'Transitions rapides'],
      weaknesses: ['Milieu en infériorité', 'Vulnérable aux contre-attaques'],
      popularity: 85,
      effectiveness: 88
    },
    '4-4-2': {
      style: 'Équilibré',
      strengths: ['Solidité défensive', 'Équilibre', 'Simplicité tactique'],
      weaknesses: ['Manque de créativité', 'Milieu parfois dépassé'],
      popularity: 72,
      effectiveness: 82
    },
    '3-5-2': {
      style: 'Moderne',
      strengths: ['Contrôle du milieu', 'Flexibilité', 'Supériorité numérique'],
      weaknesses: ['Complexité tactique', 'Dépendance aux pistons'],
      popularity: 68,
      effectiveness: 85
    }
  };

  const currentFormation = formationData[selectedFormation as keyof typeof formationData];

  const positionStats = {
    'GK': { available: 45, avgRating: 7.2, topSkill: 'Réflexes' },
    'CB': { available: 128, avgRating: 7.5, topSkill: 'Défense' },
    'LB': { available: 67, avgRating: 7.3, topSkill: 'Vitesse' },
    'RB': { available: 71, avgRating: 7.4, topSkill: 'Centres' },
    'CDM': { available: 89, avgRating: 7.6, topSkill: 'Passes' },
    'CM': { available: 156, avgRating: 7.4, topSkill: 'Vision' },
    'CAM': { available: 78, avgRating: 7.8, topSkill: 'Technique' },
    'LW': { available: 92, avgRating: 7.7, topSkill: 'Dribbles' },
    'RW': { available: 88, avgRating: 7.6, topSkill: 'Vitesse' },
    'ST': { available: 134, avgRating: 7.9, topSkill: 'Finition' }
  };

  return (
    <div className="space-y-6">
      {/* Formation Overview */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
            <BarChart3 className="w-5 h-5 text-morocco-red-500" />
            <span>Analyse Formation</span>
          </h3>
          <Badge variant="premium">
            {selectedFormation}
          </Badge>
        </div>

        {currentFormation && (
          <div className="space-y-4">
            {/* Style & Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <StatItem
                label="Style de jeu"
                value={currentFormation.style}
                icon={<Target className="w-5 h-5" />}
                color="red"
              />
              <StatItem
                label="Popularité"
                value={`${currentFormation.popularity}%`}
                icon={<TrendingUp className="w-5 h-5" />}
                color="blue"
                trend="3%"
              />
            </div>

            {/* Strengths & Weaknesses */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-semibold text-green-700 mb-2 flex items-center space-x-1">
                  <Shield className="w-4 h-4" />
                  <span>Points forts</span>
                </h4>
                <ul className="space-y-1">
                  {currentFormation.strengths.map((strength, index) => (
                    <li key={index} className="text-sm text-slate-600 flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-orange-700 mb-2 flex items-center space-x-1">
                  <Zap className="w-4 h-4" />
                  <span>Points d'attention</span>
                </h4>
                <ul className="space-y-1">
                  {currentFormation.weaknesses.map((weakness, index) => (
                    <li key={index} className="text-sm text-slate-600 flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                      <span>{weakness}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </Card>

      {/* Position Stats */}
      {selectedPosition && (
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <Activity className="w-5 h-5 text-morocco-green-500" />
              <span>Statistiques - {selectedPosition}</span>
            </h3>
            <Badge variant="verified">
              Position active
            </Badge>
          </div>

          {positionStats[selectedPosition as keyof typeof positionStats] && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <StatItem
                label="Joueurs disponibles"
                value={positionStats[selectedPosition as keyof typeof positionStats].available}
                icon={<Users className="w-5 h-5" />}
                color="blue"
                trend="12"
              />
              <StatItem
                label="Note moyenne"
                value={positionStats[selectedPosition as keyof typeof positionStats].avgRating}
                icon={<Star className="w-5 h-5" />}
                color="gold"
              />
              <StatItem
                label="Compétence clé"
                value={positionStats[selectedPosition as keyof typeof positionStats].topSkill}
                icon={<Target className="w-5 h-5" />}
                color="green"
              />
            </div>
          )}
        </Card>
      )}

      {/* Quick Stats */}
      <Card className="p-6 bg-gradient-to-r from-slate-50 to-slate-100">
        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-morocco-red-500" />
          <span>Aperçu global</span>
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-black text-morocco-red-600 mb-1">{totalPlayers}</div>
            <div className="text-xs text-slate-600">Joueurs totaux</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-black text-morocco-green-600 mb-1">87%</div>
            <div className="text-xs text-slate-600">Taux de réponse</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-black text-blue-600 mb-1">24</div>
            <div className="text-xs text-slate-600">En shortlist</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-black text-morocco-gold-600 mb-1">156</div>
            <div className="text-xs text-slate-600">Vues cette semaine</div>
          </div>
        </div>
      </Card>
    </div>
  );
}