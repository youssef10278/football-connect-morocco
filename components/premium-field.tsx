'use client';

import { useState } from 'react';
import { Target, Users, Zap, Crown, Star, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

interface FieldPosition {
  x: number;
  y: number;
  zone?: 'defense' | 'midfield' | 'attack';
}

interface Formation {
  name: string;
  positions: Record<string, FieldPosition[]>;
  description: string;
  isPremium?: boolean;
}

interface PremiumFieldProps {
  selectedPosition: string | null;
  onPositionClick: (position: string) => void;
  selectedFormation: string;
  onFormationChange: (formation: string) => void;
}

const FORMATIONS: Record<string, Formation> = {
  '4-3-3': {
    name: '4-3-3 Classique',
    description: 'Formation offensive avec ailiers larges',
    positions: {
      GK: [{ x: 50, y: 90, zone: 'defense' }],
      CB: [{ x: 35, y: 75, zone: 'defense' }, { x: 65, y: 75, zone: 'defense' }],
      LB: [{ x: 15, y: 70, zone: 'defense' }],
      RB: [{ x: 85, y: 70, zone: 'defense' }],
      CDM: [{ x: 50, y: 55, zone: 'midfield' }],
      CM: [{ x: 35, y: 45, zone: 'midfield' }, { x: 65, y: 45, zone: 'midfield' }],
      LW: [{ x: 20, y: 25, zone: 'attack' }],
      RW: [{ x: 80, y: 25, zone: 'attack' }],
      ST: [{ x: 50, y: 15, zone: 'attack' }]
    }
  },
  '4-4-2': {
    name: '4-4-2 Équilibré',
    description: 'Formation équilibrée avec deux attaquants',
    positions: {
      GK: [{ x: 50, y: 90, zone: 'defense' }],
      CB: [{ x: 35, y: 75, zone: 'defense' }, { x: 65, y: 75, zone: 'defense' }],
      LB: [{ x: 15, y: 70, zone: 'defense' }],
      RB: [{ x: 85, y: 70, zone: 'defense' }],
      LM: [{ x: 20, y: 45, zone: 'midfield' }],
      CM: [{ x: 40, y: 50, zone: 'midfield' }, { x: 60, y: 50, zone: 'midfield' }],
      RM: [{ x: 80, y: 45, zone: 'midfield' }],
      ST: [{ x: 40, y: 20, zone: 'attack' }, { x: 60, y: 20, zone: 'attack' }]
    }
  },
  '3-5-2': {
    name: '3-5-2 Premium',
    description: 'Formation moderne avec pistons',
    isPremium: true,
    positions: {
      GK: [{ x: 50, y: 90, zone: 'defense' }],
      CB: [{ x: 30, y: 75, zone: 'defense' }, { x: 50, y: 78, zone: 'defense' }, { x: 70, y: 75, zone: 'defense' }],
      LWB: [{ x: 15, y: 55, zone: 'midfield' }],
      RWB: [{ x: 85, y: 55, zone: 'midfield' }],
      CDM: [{ x: 40, y: 50, zone: 'midfield' }, { x: 60, y: 50, zone: 'midfield' }],
      CAM: [{ x: 50, y: 35, zone: 'midfield' }],
      ST: [{ x: 40, y: 18, zone: 'attack' }, { x: 60, y: 18, zone: 'attack' }]
    }
  }
};

function FormationSelector({ 
  selectedFormation, 
  onFormationChange 
}: { 
  selectedFormation: string; 
  onFormationChange: (formation: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {Object.entries(FORMATIONS).map(([key, formation]) => (
        <button
          key={key}
          onClick={() => onFormationChange(key)}
          className={`relative px-4 py-3 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
            selectedFormation === key
              ? 'border-morocco-red-500 bg-morocco-red-50 shadow-glow'
              : 'border-slate-200 bg-white hover:border-morocco-red-300'
          }`}
        >
          <div className="flex items-center space-x-2">
            <span className={`font-bold ${
              selectedFormation === key ? 'text-morocco-red-700' : 'text-slate-700'
            }`}>
              {formation.name}
            </span>
            {formation.isPremium && (
              <Crown className="w-4 h-4 text-morocco-gold-500" />
            )}
          </div>
          <p className={`text-xs mt-1 ${
            selectedFormation === key ? 'text-morocco-red-600' : 'text-slate-500'
          }`}>
            {formation.description}
          </p>
        </button>
      ))}
    </div>
  );
}

function PositionButton({ 
  position, 
  pos, 
  index, 
  isSelected, 
  onClick,
  zone 
}: { 
  position: string; 
  pos: FieldPosition; 
  index: number; 
  isSelected: boolean; 
  onClick: () => void;
  zone?: string;
}) {
  const getZoneColor = () => {
    switch (zone) {
      case 'defense':
        return isSelected 
          ? 'bg-blue-600 shadow-glow border-blue-400' 
          : 'bg-blue-500 hover:bg-blue-600 border-blue-300';
      case 'midfield':
        return isSelected 
          ? 'bg-morocco-green-600 shadow-glow-green border-morocco-green-400' 
          : 'bg-morocco-green-500 hover:bg-morocco-green-600 border-morocco-green-300';
      case 'attack':
        return isSelected 
          ? 'bg-morocco-red-600 shadow-glow border-morocco-red-400' 
          : 'bg-morocco-red-500 hover:bg-morocco-red-600 border-morocco-red-300';
      default:
        return isSelected 
          ? 'bg-slate-600 shadow-lg border-slate-400' 
          : 'bg-slate-500 hover:bg-slate-600 border-slate-300';
    }
  };

  return (
    <button
      onClick={onClick}
      className={`absolute w-14 h-14 rounded-2xl border-2 border-white/50 flex flex-col items-center justify-center text-white font-bold text-xs transition-all duration-300 hover:scale-110 hover:rotate-3 group ${getZoneColor()}`}
      style={{
        left: `${pos.x}%`,
        top: `${pos.y}%`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <span className="text-[10px] leading-tight">{position}</span>
      {isSelected && (
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-morocco-gold-500 rounded-full flex items-center justify-center">
          <Star className="w-2 h-2 text-white" />
        </div>
      )}
      
      {/* Pulse effect when selected */}
      {isSelected && (
        <div className="absolute inset-0 rounded-2xl bg-white/20 animate-pulse" />
      )}
    </button>
  );
}

export function PremiumField({ 
  selectedPosition, 
  onPositionClick, 
  selectedFormation, 
  onFormationChange 
}: PremiumFieldProps) {
  const [hoveredPosition, setHoveredPosition] = useState<string | null>(null);
  
  const formation = FORMATIONS[selectedFormation];

  return (
    <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 flex items-center space-x-2">
            <Target className="w-6 h-6 text-morocco-red-500" />
            <span>Terrain Tactique Premium</span>
          </h2>
          <p className="text-slate-600">Cliquez sur une position pour découvrir les talents</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <Badge variant="premium">
            <Zap className="w-3 h-3 mr-1" />
            Mode Pro
          </Badge>
          <div className="text-right">
            <p className="text-sm font-semibold text-slate-700">Formation active</p>
            <p className="text-xs text-slate-500">{formation.name}</p>
          </div>
        </div>
      </div>

      {/* Formation Selector */}
      <FormationSelector 
        selectedFormation={selectedFormation}
        onFormationChange={onFormationChange}
      />

      {/* Football Field */}
      <div className="relative">
        <div 
          className="bg-gradient-to-b from-green-400 via-green-500 to-green-600 rounded-3xl p-8 relative shadow-premium overflow-hidden"
          style={{ aspectRatio: '2/3', minHeight: '700px' }}
        >
          {/* Grass texture overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          {/* Field markings */}
          <div className="absolute inset-6 border-4 border-white/80 rounded-2xl shadow-inner">
            {/* Center circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-white/80 rounded-full">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg" />
            </div>
            
            {/* Center line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/80 shadow-sm" />
            
            {/* Penalty areas */}
            <div className="absolute top-0 left-1/4 right-1/4 h-20 border-4 border-white/80 border-t-0 rounded-b-2xl" />
            <div className="absolute bottom-0 left-1/4 right-1/4 h-20 border-4 border-white/80 border-b-0 rounded-t-2xl" />
            
            {/* Goal areas */}
            <div className="absolute top-0 left-2/5 right-2/5 h-12 border-4 border-white/80 border-t-0 rounded-b-xl" />
            <div className="absolute bottom-0 left-2/5 right-2/5 h-12 border-4 border-white/80 border-b-0 rounded-t-xl" />

            {/* Corner arcs */}
            <div className="absolute top-0 left-0 w-8 h-8 border-r-4 border-b-4 border-white/80 rounded-br-full" />
            <div className="absolute top-0 right-0 w-8 h-8 border-l-4 border-b-4 border-white/80 rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-r-4 border-t-4 border-white/80 rounded-tr-full" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-l-4 border-t-4 border-white/80 rounded-tl-full" />
          </div>

          {/* Player positions */}
          {Object.entries(formation.positions).map(([position, positions]) =>
            positions.map((pos, index) => (
              <PositionButton
                key={`${position}-${index}`}
                position={position}
                pos={pos}
                index={index}
                isSelected={selectedPosition === position}
                onClick={() => onPositionClick(position)}
                zone={pos.zone}
              />
            ))
          )}

          {/* Zone labels */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-white text-xs font-semibold">ATTAQUE</span>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-white text-xs font-semibold">MILIEU</span>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-white text-xs font-semibold">DÉFENSE</span>
          </div>
        </div>

        {/* Field Info */}
        <div className="mt-6 text-center">
          {!selectedPosition ? (
            <div className="space-y-2">
              <p className="text-slate-600 font-medium">
                Cliquez sur une position pour découvrir les joueurs disponibles
              </p>
              <div className="flex items-center justify-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full" />
                  <span className="text-slate-600">Défense</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-morocco-green-500 rounded-full" />
                  <span className="text-slate-600">Milieu</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-morocco-red-500 rounded-full" />
                  <span className="text-slate-600">Attaque</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-lg font-bold text-morocco-red-600 flex items-center justify-center space-x-2">
                <Target className="w-5 h-5" />
                <span>Position sélectionnée: {selectedPosition}</span>
              </p>
              <p className="text-slate-600">
                Découvrez les meilleurs talents pour ce poste
              </p>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}