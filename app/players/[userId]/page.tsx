import { notFound } from 'next/navigation';
import { getPlayerById } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, User, Verified, Calendar, Ruler, Weight, Target } from 'lucide-react';
import { getPositionColor, formatDuration } from '@/lib/utils';
import Link from 'next/link';

interface PlayerProfilePageProps {
  params: { userId: string };
}

export default async function PlayerProfilePage({ params }: PlayerProfilePageProps) {
  const player = getPlayerById(params.userId);

  if (!player) {
    notFound();
  }

  const { user, age, heightCm, weightKg, dominantFoot, positions, club, bio, skills, videos } = player;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <Link href="/" className="flex items-center">
              <Target className="h-8 w-8 text-morocco-red mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">Football Connect</h1>
            </Link>
            <nav className="flex space-x-6">
              <Link href="/coach" className="text-gray-600 hover:text-gray-900">Espace Coach</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Profile */}
          <div className="lg:col-span-2 space-y-8">
            {/* Player Header */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <User className="w-12 h-12 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
                      {user.verified && (
                        <Verified className="w-6 h-6 text-blue-500" />
                      )}
                      {user.plan === 'PRO' && (
                        <Badge className="bg-gold-100 text-gold-800">PRO</Badge>
                      )}
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      {user.city}, {user.country}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {positions.map((position) => (
                        <Badge
                          key={position}
                          className={getPositionColor(position)}
                        >
                          {position}
                        </Badge>
                      ))}
                    </div>
                    {bio && (
                      <p className="text-gray-700">{bio}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Videos */}
            <Card>
              <CardHeader>
                <CardTitle>Vidéos ({videos.length})</CardTitle>
              </CardHeader>
              <CardContent>
                {videos.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    {videos.map((video) => (
                      <div key={video.id} className="bg-gray-100 rounded-2xl overflow-hidden">
                        <div className="aspect-video bg-black flex items-center justify-center">
                          <video
                            src={video.src}
                            className="w-full h-full object-cover"
                            controls
                            poster="/videos/thumbnail-placeholder.jpg"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold mb-2">{video.title}</h3>
                          <div className="flex flex-wrap gap-2 mb-2">
                            {video.tags.map((tag) => (
                              <span
                                key={tag}
                                className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                          <p className="text-sm text-gray-600">{formatDuration(video.durationSec)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">Aucune vidéo disponible</p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Informations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-600">Âge</p>
                    <p className="font-medium">{age} ans</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Ruler className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-600">Taille</p>
                    <p className="font-medium">{heightCm} cm</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Weight className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-600">Poids</p>
                    <p className="font-medium">{weightKg} kg</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-600">Pied dominant</p>
                    <p className="font-medium">
                      {dominantFoot === 'LEFT' ? 'Gauche' : dominantFoot === 'RIGHT' ? 'Droit' : 'Ambidextre'}
                    </p>
                  </div>
                </div>
                {club && (
                  <div>
                    <p className="text-sm text-gray-600">Club actuel</p>
                    <p className="font-medium">{club}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Compétences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {Object.entries(skills).map(([skill, value]) => (
                  <div key={skill}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="capitalize">{skill === 'speed' ? 'Vitesse' : skill === 'stamina' ? 'Endurance' : skill === 'technique' ? 'Technique' : skill === 'vision' ? 'Vision' : skill === 'finishing' ? 'Finition' : skill === 'passing' ? 'Passes' : skill === 'aerial' ? 'Jeu aérien' : 'Défense'}</span>
                      <span className="font-medium">{value}/10</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${(value / 10) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}