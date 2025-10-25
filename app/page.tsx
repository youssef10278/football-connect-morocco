import Link from 'next/link';
import { Users, Target, Video, Star, Sparkles, Trophy, Zap, Shield, Crown, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PremiumStats } from '@/components/premium-stats';
import { PremiumTestimonials } from '@/components/premium-testimonials';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-morocco-red-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-morocco-red-100 rounded-full blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-morocco-green-100 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-morocco-gold-100/20 to-transparent rounded-full blur-3xl" />
      </div>
      {/* Header Premium */}
      <header className="relative z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center group">
              <div className="relative">
                <Target className="h-10 w-10 text-morocco-red-500 transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-morocco-red-500 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-black text-slate-900">Football Connect</h1>
                <p className="text-xs text-morocco-gold-600 font-semibold tracking-wide">MOROCCO PREMIUM</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-slate-600 hover:text-morocco-red-500 font-medium transition-colors duration-300">Comment ça marche</Link>
              <Link href="#pricing" className="text-slate-600 hover:text-morocco-red-500 font-medium transition-colors duration-300">Tarifs</Link>
              <Link href="#faq" className="text-slate-600 hover:text-morocco-red-500 font-medium transition-colors duration-300">FAQ</Link>
              <Button variant="premium" size="sm" className="group premium-button">
                <Crown className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>Connexion Pro</span>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section Premium */}
      <section className="relative py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative z-10">
            {/* Premium Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-morocco-gold-100 to-morocco-gold-200 border border-morocco-gold-300 mb-8 animate-fade-in-up">
              <Sparkles className="w-4 h-4 text-morocco-gold-600 mr-2" />
              <span className="text-morocco-gold-800 font-semibold text-sm">Plateforme Premium #1 au Maroc</span>
            </div>

            {/* Hero Title */}
            <h1 className="text-hero mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Crée ta vitrine
              <span className="block gradient-text">de champion</span>
            </h1>
            
            <p className="text-2xl text-slate-600 mb-4 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              La première plateforme premium qui connecte les <span className="font-bold text-morocco-red-500">talents du football marocain</span> avec les coachs professionnels.
            </p>
            
            <p className="text-lg text-slate-500 mb-16 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              Montre tes compétences, sois découvert, décroche ton contrat pro.
            </p>
            
            {/* CTA Buttons Premium */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <Button asChild variant="default" size="xl" className="group w-full sm:w-auto max-w-xs">
                <Link href="/player/onboarding" className="cta-button">
                  <Users className="w-6 h-6 transition-transform group-hover:scale-110" />
                  <span className="font-semibold whitespace-nowrap">Je suis joueur</span>
                  <Zap className="w-5 h-5 opacity-70" />
                </Link>
              </Button>

              <Button asChild variant="premium" size="xl" className="group w-full sm:w-auto max-w-xs">
                <Link href="/coach" className="cta-button">
                  <Crown className="w-6 h-6 transition-transform group-hover:scale-110" />
                  <span className="font-semibold whitespace-nowrap">Je suis coach PRO</span>
                  <Shield className="w-5 h-5 opacity-70" />
                </Link>
              </Button>
            </div>

            {/* Stats Premium */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-20 animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <div className="text-center">
                <div className="text-4xl font-black text-morocco-red-500 mb-2">500+</div>
                <div className="text-slate-600 font-medium">Joueurs actifs</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-morocco-green-500 mb-2">50+</div>
                <div className="text-slate-600 font-medium">Coachs vérifiés</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-morocco-gold-500 mb-2">100+</div>
                <div className="text-slate-600 font-medium">Contrats signés</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Video Preview */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden xl:block animate-float">
          <div className="relative w-64 h-96 rounded-3xl overflow-hidden shadow-premium-lg border-4 border-white/50">
            <div className="absolute inset-0 bg-gradient-to-br from-morocco-red-500 to-morocco-green-500 opacity-90" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="text-white font-semibold mb-1">Aperçu vidéo</div>
              <div className="text-white/80 text-sm">Format premium vertical</div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Stats Section */}
      <PremiumStats />

      {/* Features Section Premium */}
      <section id="features" className="py-20 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-morocco-red-100 to-morocco-red-200 border border-morocco-red-300 mb-6">
              <Zap className="w-4 h-4 text-morocco-red-600 mr-2" />
              <span className="text-morocco-red-800 font-semibold text-sm">Processus simplifié</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Comment ça marche
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Un processus en 3 étapes pour connecter les talents avec les opportunités
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-morocco-red-500 to-morocco-red-600 flex items-center justify-center shadow-premium transition-all duration-500 group-hover:scale-110 group-hover:shadow-glow">
                  <Video className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-morocco-gold-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  1
                </div>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-slate-900">Crée ta vitrine premium</h4>
              <p className="text-slate-600 leading-relaxed">Upload tes meilleures actions en vidéo, renseigne tes stats détaillées et compétences. Montre ton potentiel avec un profil professionnel.</p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-morocco-green-500 to-morocco-green-600 flex items-center justify-center shadow-premium transition-all duration-500 group-hover:scale-110 group-hover:shadow-glow-green">
                  <Target className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-morocco-gold-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  2
                </div>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-slate-900">Sois découvert par les pros</h4>
              <p className="text-slate-600 leading-relaxed">Les coachs vérifiés parcourent les profils avec des filtres avancés, regardent tes vidéos et te contactent directement via la plateforme.</p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-morocco-gold-500 to-morocco-gold-600 flex items-center justify-center shadow-premium transition-all duration-500 group-hover:scale-110 group-hover:shadow-glow-gold">
                  <Trophy className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-morocco-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  3
                </div>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-slate-900">Décroche ton contrat</h4>
              <p className="text-slate-600 leading-relaxed">Négocie directement avec les clubs et coachs intéressés. Suivi personnalisé et accompagnement pour concrétiser les opportunités.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section Premium */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-morocco-red-500 rounded-full blur-3xl opacity-10" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-morocco-gold-500 rounded-full blur-3xl opacity-10" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-morocco-gold-100/20 to-morocco-gold-200/20 border border-morocco-gold-300/30 mb-6 backdrop-blur-sm">
              <Crown className="w-4 h-4 text-morocco-gold-400 mr-2" />
              <span className="text-morocco-gold-200 font-semibold text-sm">Tarifs transparents</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Choisissez votre
              <span className="text-premium block">formule premium</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Des tarifs adaptés à tous les profils, du talent émergent au joueur professionnel
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plan Gratuit */}
            <div className="card-player bg-white/95 backdrop-blur-md p-8 relative">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Découverte</h4>
                <div className="text-5xl font-black text-slate-900 mb-2">
                  0 <span className="text-lg text-slate-600 font-medium">MAD/mois</span>
                </div>
                <p className="text-slate-600">Parfait pour commencer</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-slate-700">Profil de base</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-slate-700">3 vidéos maximum</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-slate-700">Visibilité standard</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-slate-300 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs">✗</span>
                  </div>
                  <span className="text-slate-400">Analytics basiques</span>
                </li>
              </ul>
              
              <Button variant="secondary" size="lg" className="w-full">
                Commencer gratuitement
              </Button>
            </div>
            
            {/* Plan Pro - Recommandé */}
            <div className="card-premium p-8 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="badge-premium">
                  <Crown className="w-3 h-3 mr-1" />
                  Recommandé
                </div>
              </div>
              
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Pro</h4>
                <div className="text-5xl font-black text-slate-900 mb-2">
                  99 <span className="text-lg text-slate-600 font-medium">MAD/mois</span>
                </div>
                <p className="text-slate-600">Pour les joueurs sérieux</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-slate-700 font-medium">Profil complet premium</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-slate-700 font-medium">Vidéos illimitées HD</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-slate-700 font-medium">Priorité dans les résultats</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-slate-700 font-medium">Analytics avancées</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-slate-700 font-medium">Badge vérifié premium</span>
                </li>
              </ul>
              
              <Button variant="default" size="lg" className="w-full">
                Passer au Pro
              </Button>
            </div>

            {/* Plan Elite */}
            <div className="card-player bg-white/95 backdrop-blur-md p-8 relative">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Elite</h4>
                <div className="text-5xl font-black text-slate-900 mb-2">
                  199 <span className="text-lg text-slate-600 font-medium">MAD/mois</span>
                </div>
                <p className="text-slate-600">Pour les professionnels</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-slate-700">Tout du plan Pro</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-morocco-gold-500 rounded-full flex items-center justify-center mr-3">
                    <Crown className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-slate-700 font-medium">Coach personnel dédié</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-morocco-gold-500 rounded-full flex items-center justify-center mr-3">
                    <Crown className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-slate-700 font-medium">Mise en relation directe</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-morocco-gold-500 rounded-full flex items-center justify-center mr-3">
                    <Crown className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-slate-700 font-medium">Suivi carrière premium</span>
                </li>
              </ul>
              
              <Button variant="premium" size="lg" className="w-full group premium-button">
                <Crown className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>Devenir Elite</span>
              </Button>
            </div>
          </div>

          {/* Garantie */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <Shield className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-white font-medium">Garantie satisfait ou remboursé 30 jours</span>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Testimonials */}
      <PremiumTestimonials />

      {/* FAQ Section Premium */}
      <section id="faq" className="py-20 bg-gradient-to-br from-slate-50 to-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-16">Questions fréquentes</h3>
          
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-semibold mb-3">Comment créer mon profil joueur ?</h4>
              <p className="text-gray-600">Il suffit de cliquer sur "Je suis joueur", remplir tes informations personnelles, tes stats et uploader tes meilleures vidéos d'actions de jeu.</p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-3">Les coachs peuvent-ils me contacter directement ?</h4>
              <p className="text-gray-600">Oui, les coachs vérifiés peuvent te contacter via la plateforme pour discuter d'opportunités.</p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-3">Quels formats vidéo sont acceptés ?</h4>
              <p className="text-gray-600">Nous acceptons les vidéos MP4 en format vertical (9:16) d'une durée de 15 à 60 secondes pour une expérience optimale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <Target className="h-8 w-8 text-morocco-red mr-3" />
            <h1 className="text-2xl font-bold">Football Connect</h1>
          </div>
          <p className="text-center text-gray-400">
            © 2025 Football Connect Morocco. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}