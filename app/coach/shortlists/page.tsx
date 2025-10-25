'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, Plus, List, Download, Trash2, User } from 'lucide-react';
import Link from 'next/link';

interface Shortlist {
  id: string;
  name: string;
  players: Array<{
    id: string;
    name: string;
    positions: string[];
    age: number;
    city: string;
  }>;
  createdAt: string;
}

export default function CoachShortlistsPage() {
  const [shortlists, setShortlists] = useState<Shortlist[]>([
    {
      id: '1',
      name: 'Défenseurs centraux',
      players: [
        { id: 'u-amrabat', name: 'Sofyan Amrabat', positions: ['CDM', 'CM'], age: 28, city: 'Rabat' },
      ],
      createdAt: '2025-10-15'
    },
    {
      id: '2',
      name: 'Ailiers rapides',
      players: [
        { id: 'u-hakimi', name: 'Achraf Hakimi', positions: ['RB', 'RWB'], age: 27, city: 'Casa' },
        { id: 'u-ziyech', name: 'Hakim Ziyech', positions: ['RW', 'CAM'], age: 31, city: 'Oujda' },
      ],
      createdAt: '2025-10-10'
    }
  ]);

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newShortlistName, setNewShortlistName] = useState('');

  const createShortlist = () => {
    if (!newShortlistName.trim()) return;

    const newShortlist: Shortlist = {
      id: Date.now().toString(),
      name: newShortlistName,
      players: [],
      createdAt: new Date().toISOString().split('T')[0]
    };

    setShortlists([newShortlist, ...shortlists]);
    setNewShortlistName('');
    setShowCreateForm(false);
  };

  const deleteShortlist = (id: string) => {
    setShortlists(shortlists.filter(s => s.id !== id));
  };

  const exportShortlist = (shortlist: Shortlist) => {
    // Mock export functionality
    const csvContent = [
      'Nom,Positions,Âge,Ville',
      ...shortlist.players.map(p => `${p.name},"${p.positions.join(', ')}",${p.age},${p.city}`)
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${shortlist.name}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center">
              <Link href="/coach" className="mr-4">
                <ChevronLeft className="w-6 h-6 text-gray-600 hover:text-gray-900" />
              </Link>
              <div className="flex items-center">
                <List className="h-6 w-6 text-morocco-red mr-3" />
                <h1 className="text-2xl font-bold text-gray-900">Mes Shortlists</h1>
              </div>
            </div>
            <Button
              onClick={() => setShowCreateForm(true)}
              className="flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>Nouvelle shortlist</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Create Form */}
        {showCreateForm && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Créer une nouvelle shortlist</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={newShortlistName}
                  onChange={(e) => setNewShortlistName(e.target.value)}
                  placeholder="Nom de la shortlist"
                  className="flex-1 rounded-lg border border-gray-300 px-3 py-2"
                  onKeyPress={(e) => e.key === 'Enter' && createShortlist()}
                />
                <Button onClick={createShortlist}>Créer</Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowCreateForm(false);
                    setNewShortlistName('');
                  }}
                >
                  Annuler
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Shortlists Grid */}
        {shortlists.length === 0 ? (
          <div className="text-center py-12">
            <List className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Aucune shortlist</h3>
            <p className="text-gray-600 mb-6">Créez votre première shortlist pour organiser vos joueurs favoris</p>
            <Button onClick={() => setShowCreateForm(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Créer une shortlist
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shortlists.map((shortlist) => (
              <Card key={shortlist.id} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{shortlist.name}</CardTitle>
                      <p className="text-sm text-gray-600 mt-1">
                        {shortlist.players.length} joueur(s) • Créée le {new Date(shortlist.createdAt).toLocaleDateString('fr-FR')}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => exportShortlist(shortlist)}
                        className="text-gray-400 hover:text-blue-600"
                        title="Exporter"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => deleteShortlist(shortlist.id)}
                        className="text-gray-400 hover:text-red-600"
                        title="Supprimer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {shortlist.players.length === 0 ? (
                    <p className="text-gray-500 text-center py-4">Aucun joueur ajouté</p>
                  ) : (
                    <div className="space-y-3">
                      {shortlist.players.slice(0, 3).map((player) => (
                        <div key={player.id} className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm truncate">{player.name}</p>
                            <p className="text-xs text-gray-600">
                              {player.positions.join(', ')} • {player.age} ans • {player.city}
                            </p>
                          </div>
                        </div>
                      ))}
                      {shortlist.players.length > 3 && (
                        <p className="text-xs text-gray-500 text-center">
                          +{shortlist.players.length - 3} autre(s)
                        </p>
                      )}
                    </div>
                  )}
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <Link
                      href={`/coach/search`}
                      className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Ajouter des joueurs →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Quick Actions */}
        <div className="mt-12 bg-blue-50 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">Actions rapides</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/coach/search" className="flex items-center space-x-3 text-blue-700 hover:text-blue-900">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Plus className="w-5 h-5" />
              </div>
              <span>Rechercher des joueurs</span>
            </Link>
            <Link href="/coach/feed" className="flex items-center space-x-3 text-blue-700 hover:text-blue-900">
              <div className="bg-blue-100 p-2 rounded-lg">
                <List className="w-5 h-5" />
              </div>
              <span>Parcourir le feed</span>
            </Link>
            <Link href="/coach/terrain" className="flex items-center space-x-3 text-blue-700 hover:text-blue-900">
              <div className="bg-blue-100 p-2 rounded-lg">
                <User className="w-5 h-5" />
              </div>
              <span>Voir le terrain</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}