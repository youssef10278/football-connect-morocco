'use client';

import { Star, Quote, Verified, Crown } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface TestimonialProps {
  name: string;
  role: string;
  club?: string;
  content: string;
  rating: number;
  isPremium?: boolean;
  avatar?: string;
}

function TestimonialCard({ name, role, club, content, rating, isPremium }: TestimonialProps) {
  return (
    <Card variant={isPremium ? 'premium' : 'default'} className="p-8 h-full">
      {/* Quote Icon */}
      <div className="mb-6">
        <Quote className="w-8 h-8 text-morocco-red-300" />
      </div>

      {/* Content */}
      <blockquote className="text-slate-700 text-lg leading-relaxed mb-6 italic">
        "{content}"
      </blockquote>

      {/* Rating */}
      <div className="flex items-center mb-6">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'text-yellow-400 fill-current' : 'text-slate-300'
            }`}
          />
        ))}
      </div>

      {/* Author */}
      <div className="flex items-center">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mr-4 ${
          isPremium 
            ? 'bg-gradient-to-br from-morocco-gold-400 to-morocco-gold-600' 
            : 'bg-gradient-to-br from-morocco-red-500 to-morocco-green-500'
        }`}>
          <span className="text-white font-bold text-lg">
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <h4 className="font-bold text-slate-900">{name}</h4>
            {isPremium && <Crown className="w-4 h-4 text-morocco-gold-500" />}
            <Verified className="w-4 h-4 text-blue-500" />
          </div>
          <p className="text-slate-600 text-sm">
            {role} {club && `• ${club}`}
          </p>
        </div>
      </div>
    </Card>
  );
}

export function PremiumTestimonials() {
  const testimonials = [
    {
      name: "Youssef Benali",
      role: "Joueur Pro",
      club: "Raja Casablanca",
      content: "Grâce à Football Connect, j'ai été repéré par mon club actuel. La plateforme m'a permis de montrer mes compétences à travers des vidéos de qualité et d'être contacté directement par les recruteurs.",
      rating: 5,
      isPremium: true
    },
    {
      name: "Coach Rachid",
      role: "Entraîneur Principal", 
      club: "Wydad Athletic Club",
      content: "Un outil révolutionnaire pour le recrutement. Je peux filtrer les joueurs selon mes critères précis et voir immédiatement leur potentiel grâce aux vidéos et statistiques détaillées.",
      rating: 5,
      isPremium: true
    },
    {
      name: "Amina Tazi",
      role: "Joueuse",
      club: "AS FAR Rabat",
      content: "L'interface est intuitive et professionnelle. J'ai pu créer un profil complet qui met en valeur mes points forts. Plusieurs coachs m'ont déjà contactée !",
      rating: 5,
      isPremium: false
    },
    {
      name: "Mohamed Alami",
      role: "Directeur Sportif",
      club: "FUS Rabat", 
      content: "La qualité des profils sur cette plateforme est exceptionnelle. Nous avons recruté 3 joueurs cette saison grâce à Football Connect. Un gain de temps considérable.",
      rating: 5,
      isPremium: true
    },
    {
      name: "Salma Idrissi",
      role: "Joueuse U21",
      club: "Olympique Safi",
      content: "Parfait pour les jeunes talents comme moi. Le système de notation des compétences est très précis et aide les coachs à comprendre rapidement notre profil de jeu.",
      rating: 5,
      isPremium: false
    },
    {
      name: "Coach Hassan",
      role: "Formateur",
      club: "Académie Mohammed VI",
      content: "Une plateforme qui révolutionne la détection de talents au Maroc. Les outils d'analyse et de recherche sont d'un niveau professionnel remarquable.",
      rating: 5,
      isPremium: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-morocco-red-100 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-morocco-green-100 rounded-full blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-morocco-gold-100 to-morocco-gold-200 border border-morocco-gold-300 mb-6">
            <Star className="w-4 h-4 text-morocco-gold-600 mr-2" />
            <span className="text-morocco-gold-800 font-semibold text-sm">Témoignages vérifiés</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Ils nous font
            <span className="gradient-text block">confiance</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Découvrez les histoires de réussite de nos joueurs et coachs qui ont trouvé leur match parfait sur notre plateforme.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-slate-700 font-medium">2,847 profils actifs</span>
            </div>
            <div className="w-px h-6 bg-slate-300" />
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-slate-700 font-medium">4.9/5 satisfaction</span>
            </div>
            <div className="w-px h-6 bg-slate-300" />
            <div className="flex items-center space-x-2">
              <Verified className="w-4 h-4 text-blue-500" />
              <span className="text-slate-700 font-medium">100% vérifié</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}