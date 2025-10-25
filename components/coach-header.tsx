'use client';

import Link from 'next/link';
import { Target, Bell, Settings, User, Crown, Search, LogOut, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

interface CoachHeaderProps {
  coachName?: string;
  clubName?: string;
  isPremium?: boolean;
  notifications?: number;
}

export function CoachHeader({ 
  coachName = "Coach Anouar", 
  clubName = "Club Casa",
  isPremium = true,
  notifications = 3 
}: CoachHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative bg-white/90 backdrop-blur-md border-b border-slate-200/50 shadow-lg sticky top-0 z-50">
      {/* Premium Gradient Bar */}
      {isPremium && (
        <div className="h-1 bg-gradient-to-r from-morocco-red-500 via-morocco-gold-500 to-morocco-green-500" />
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo & Brand */}
          <div className="flex items-center group">
            <div className="relative">
              <Target className="h-10 w-10 text-morocco-red-500 transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-morocco-red-500 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
            </div>
            <div className="ml-4">
              <h1 className="text-2xl font-black text-slate-900">Coach Dashboard</h1>
              <p className="text-xs text-morocco-gold-600 font-semibold tracking-wide">PREMIUM WORKSPACE</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/coach/terrain" 
              className="text-slate-600 hover:text-morocco-red-500 font-medium transition-colors duration-300 relative group"
            >
              Terrain
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-morocco-red-500 transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link 
              href="/coach/search" 
              className="text-slate-600 hover:text-morocco-red-500 font-medium transition-colors duration-300 relative group"
            >
              Recherche
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-morocco-red-500 transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link 
              href="/coach/feed" 
              className="text-slate-600 hover:text-morocco-red-500 font-medium transition-colors duration-300 relative group"
            >
              Feed Vidéos
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-morocco-red-500 transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link 
              href="/coach/shortlists" 
              className="text-slate-600 hover:text-morocco-red-500 font-medium transition-colors duration-300 relative group"
            >
              Shortlists
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-morocco-red-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Search className="w-4 h-4" />
            </Button>

            {/* Notifications */}
            <div className="relative">
              <Button variant="ghost" size="sm">
                <Bell className="w-5 h-5" />
              </Button>
              {notifications > 0 && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-morocco-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{notifications}</span>
                </div>
              )}
            </div>

            {/* Coach Profile */}
            <div className="flex items-center space-x-3 pl-4 border-l border-slate-200">
              <div className="hidden md:block text-right">
                <div className="flex items-center space-x-2">
                  <p className="text-sm font-semibold text-slate-900">{coachName}</p>
                  {isPremium && <Crown className="w-4 h-4 text-morocco-gold-500" />}
                </div>
                <p className="text-xs text-slate-600">{clubName}</p>
              </div>
              
              <div className="relative group">
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                  isPremium 
                    ? 'bg-gradient-to-br from-morocco-gold-400 to-morocco-gold-600 shadow-glow-gold' 
                    : 'bg-gradient-to-br from-morocco-red-500 to-morocco-green-500 shadow-lg'
                }`}>
                  <User className="w-5 h-5 text-white" />
                </div>
                
                {/* Dropdown Menu */}
                <div className="absolute right-0 top-12 w-48 bg-white rounded-2xl shadow-premium border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-2">
                    <Link href="/coach/profile" className="flex items-center px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-xl transition-colors">
                      <User className="w-4 h-4 mr-2" />
                      Mon Profil
                    </Link>
                    <Link href="/coach/settings" className="flex items-center px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-xl transition-colors">
                      <Settings className="w-4 h-4 mr-2" />
                      Paramètres
                    </Link>
                    <hr className="my-2 border-slate-200" />
                    <button className="flex items-center px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-xl transition-colors w-full text-left">
                      <LogOut className="w-4 h-4 mr-2" />
                      Déconnexion
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200">
            <nav className="space-y-2">
              <Link href="/coach/terrain" className="block px-3 py-2 text-slate-600 hover:text-morocco-red-500 hover:bg-slate-50 rounded-xl transition-colors">
                Terrain
              </Link>
              <Link href="/coach/search" className="block px-3 py-2 text-slate-600 hover:text-morocco-red-500 hover:bg-slate-50 rounded-xl transition-colors">
                Recherche
              </Link>
              <Link href="/coach/feed" className="block px-3 py-2 text-slate-600 hover:text-morocco-red-500 hover:bg-slate-50 rounded-xl transition-colors">
                Feed Vidéos
              </Link>
              <Link href="/coach/shortlists" className="block px-3 py-2 text-slate-600 hover:text-morocco-red-500 hover:bg-slate-50 rounded-xl transition-colors">
                Shortlists
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}