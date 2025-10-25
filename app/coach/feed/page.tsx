'use client';

import { useState, useEffect } from 'react';
import { VideoPlayer } from '@/components/video-player';
import { Video, PlayerWithUser } from '@/lib/types';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

interface VideoWithPlayer extends Video {
  player: PlayerWithUser;
}

export default function CoachFeedPage() {
  const [videos, setVideos] = useState<VideoWithPlayer[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await fetch('/api/videos?limit=20');
      const data = await response.json();
      setVideos(data.videos);
    } catch (error) {
      console.error('Error fetching videos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = (e: React.WheelEvent) => {
    if (e.deltaY > 0 && currentIndex < videos.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (e.deltaY < 0 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowDown' && currentIndex < videos.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (e.key === 'ArrowUp' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, videos.length]);

  const handleLike = async () => {
    const video = videos[currentIndex];
    if (!video) return;

    try {
      await fetch('/api/like', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          coachUserId: 'c-1', // Mock coach ID
          videoId: video.id
        })
      });
    } catch (error) {
      console.error('Error liking video:', error);
    }
  };

  const handleSave = async () => {
    const video = videos[currentIndex];
    if (!video) return;

    try {
      await fetch('/api/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          coachUserId: 'c-1', // Mock coach ID
          playerUserId: video.playerUserId
        })
      });
    } catch (error) {
      console.error('Error saving player:', error);
    }
  };

  const handleShare = () => {
    const video = videos[currentIndex];
    if (!video) return;

    const url = `${window.location.origin}/players/${video.playerUserId}`;
    navigator.clipboard.writeText(url);
    // You could show a toast notification here
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Chargement des vidéos...</div>
      </div>
    );
  }

  if (videos.length === 0) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Aucune vidéo disponible</div>
      </div>
    );
  }

  return (
    <div className="relative h-screen overflow-hidden" onWheel={handleScroll}>
      {/* Back Button */}
      <Link
        href="/coach"
        className="absolute top-4 left-4 z-50 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </Link>

      {/* Video Navigation Dots */}
      <div className="absolute top-4 right-4 z-50 flex flex-col space-y-2">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>

      {/* Current Video */}
      {videos[currentIndex] && (
        <VideoPlayer
          video={videos[currentIndex]}
          player={videos[currentIndex].player}
          isActive={true}
          onLike={handleLike}
          onSave={handleSave}
          onShare={handleShare}
        />
      )}

      {/* Navigation Instructions */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-black bg-opacity-50 rounded-full px-4 py-2">
          <p className="text-white text-sm">
            Utilisez ↑↓ ou la molette pour naviguer
          </p>
        </div>
      </div>
    </div>
  );
}