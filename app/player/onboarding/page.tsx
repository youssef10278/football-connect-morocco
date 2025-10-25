'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Target, User, Video, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const POSITIONS = ['GK', 'CB', 'LB', 'RB', 'LWB', 'RWB', 'CDM', 'CM', 'CAM', 'LW', 'RW', 'ST', 'CF'];

export default function PlayerOnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Info
    name: '',
    email: '',
    phone: '',
    country: 'Maroc',
    city: '',
    
    // Player Info
    age: '',
    heightCm: '',
    weightKg: '',
    dominantFoot: 'RIGHT',
    positions: [] as string[],
    club: '',
    bio: '',
    
    // Skills
    skills: {
      speed: 5,
      stamina: 5,
      technique: 5,
      vision: 5,
      finishing: 5,
      passing: 5,
      aerial: 5,
      defense: 5
    }
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSkillChange = (skill: string, value: number) => {
    setFormData(prev => ({
      ...prev,
      skills: { ...prev.skills, [skill]: value }
    }));
  };

  const handlePositionToggle = (position: string) => {
    setFormData(prev => ({
      ...prev,
      positions: prev.positions.includes(position)
        ? prev.positions.filter(p => p !== position)
        : [...prev.positions, position]
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    // Mock submission
    console.log('Player data:', formData);
    alert('Profil créé avec succès ! (Mock)');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center">
              <Link href="/" className="mr-4">
                <ChevronLeft className="w-6 h-6 text-gray-600 hover:text-gray-900" />
              </Link>
              <div className="flex items-center">
                <Target className="h-8 w-8 text-morocco-red mr-3" />
                <h1 className="text-2xl font-bold text-gray-900">Créer mon profil joueur</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  step <= currentStep ? 'bg-morocco-red text-white' : 'bg-gray-200 text-gray-600'
                }`}
              >
                {step < currentStep ? <CheckCircle className="w-5 h-5" /> : step}
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-morocco-red h-2 rounded-full transition-all"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step 1: Personal Info */}
        {currentStep === 1 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="w-6 h-6 mr-2" />
                Informations personnelles
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom complet *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                    placeholder="Votre nom complet"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                    placeholder="+212 6XX XXX XXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pays *</label>
                  <select
                    value={formData.country}
                    onChange={(e) => handleInputChange('country', e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                  >
                    <option value="Maroc">Maroc</option>
                    <option value="France">France</option>
                    <option value="Espagne">Espagne</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ville</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                    placeholder="Casablanca, Rabat, etc."
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Player Info */}
        {currentStep === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>Informations footballistiques</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Âge *</label>
                  <input
                    type="number"
                    value={formData.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                    placeholder="25"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Taille (cm) *</label>
                  <input
                    type="number"
                    value={formData.heightCm}
                    onChange={(e) => handleInputChange('heightCm', e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                    placeholder="180"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Poids (kg)</label>
                  <input
                    type="number"
                    value={formData.weightKg}
                    onChange={(e) => handleInputChange('weightKg', e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                    placeholder="75"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pied dominant *</label>
                <div className="flex space-x-4">
                  {['LEFT', 'RIGHT', 'BOTH'].map((foot) => (
                    <label key={foot} className="flex items-center">
                      <input
                        type="radio"
                        name="dominantFoot"
                        value={foot}
                        checked={formData.dominantFoot === foot}
                        onChange={(e) => handleInputChange('dominantFoot', e.target.value)}
                        className="mr-2"
                      />
                      {foot === 'LEFT' ? 'Gauche' : foot === 'RIGHT' ? 'Droit' : 'Ambidextre'}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Positions (sélectionnez au moins une) *</label>
                <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                  {POSITIONS.map((position) => (
                    <button
                      key={position}
                      type="button"
                      onClick={() => handlePositionToggle(position)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        formData.positions.includes(position)
                          ? 'bg-morocco-red text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {position}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Club actuel</label>
                <input
                  type="text"
                  value={formData.club}
                  onChange={(e) => handleInputChange('club', e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2"
                  placeholder="Nom de votre club (optionnel)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                <textarea
                  value={formData.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2"
                  rows={3}
                  placeholder="Décrivez votre style de jeu, vos points forts..."
                />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Skills */}
        {currentStep === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>Évaluez vos compétences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {Object.entries(formData.skills).map(([skill, value]) => (
                <div key={skill}>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-medium text-gray-700 capitalize">
                      {skill === 'speed' ? 'Vitesse' : 
                       skill === 'stamina' ? 'Endurance' : 
                       skill === 'technique' ? 'Technique' : 
                       skill === 'vision' ? 'Vision de jeu' : 
                       skill === 'finishing' ? 'Finition' : 
                       skill === 'passing' ? 'Passes' : 
                       skill === 'aerial' ? 'Jeu aérien' : 'Défense'}
                    </label>
                    <span className="text-sm font-semibold text-morocco-red">{value}/10</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={value}
                    onChange={(e) => handleSkillChange(skill, parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Step 4: Confirmation */}
        {currentStep === 4 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="w-6 h-6 mr-2 text-green-600" />
                Récapitulatif
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 mb-2">Profil prêt à être créé !</h3>
                <p className="text-green-700">
                  Votre profil sera visible par les coachs une fois validé. 
                  Vous pourrez ensuite ajouter vos vidéos depuis votre espace personnel.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Informations personnelles</h4>
                  <p><strong>Nom:</strong> {formData.name}</p>
                  <p><strong>Email:</strong> {formData.email}</p>
                  <p><strong>Localisation:</strong> {formData.city}, {formData.country}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Profil joueur</h4>
                  <p><strong>Âge:</strong> {formData.age} ans</p>
                  <p><strong>Taille:</strong> {formData.heightCm} cm</p>
                  <p><strong>Positions:</strong> {formData.positions.join(', ')}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button
            onClick={prevStep}
            variant="outline"
            disabled={currentStep === 1}
            className="flex items-center"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Précédent
          </Button>

          {currentStep < 4 ? (
            <Button onClick={nextStep} className="flex items-center">
              Suivant
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700">
              Créer mon profil
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}