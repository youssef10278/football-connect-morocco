'use client';

import { useRef, useEffect, useState } from 'react';
import { Video, PlayerWithUser } from '@/lib/types';
import { Play, Pause, Heart, Bookmark, Share2, User } from 'lucide-react';
import { formatDuration } from '@/lib/utils';

interface VideoPlayerProps {
  video: Video;
  player: PlayerWithUser;
  isActive: boolean;
  onLike?: () => void;
  onSave?: () => void;
  onShare?: () => void;
}

export function VideoPlayer({ 
  video, 
  player, 
  isActive, 
  onLike, 
  onSave, 
  onShare 
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [isActive]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center">
      <video
        ref={videoRef}
        src={video.src}
        className="w-full h-full object-cover"
        loop
        muted={isMuted}
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Play/Pause Overlay */}
      <div 
        className="absolute inset-0 flex items-center justify-center cursor-pointer"
        onClick={togglePlay}
      >
        {!isPlaying && (
          <div className="bg-black bg-opacity-50 rounded-full p-4">
            <Play className="w-12 h-12 text-white" />
          </div>
        )}
      </div>

      {/* Video Info Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
        <div className="flex items-end justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">{player.user.name}</h3>
                <p className="text-gray-300 text-sm">{player.positions.join(', ')}</p>
              </div>
            </div>
            <h4 className="text-white text-lg font-medium mb-2">{video.title}</h4>
            <div className="flex flex-wrap gap-2 mb-2">
              {video.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-white bg-opacity-20 text-white px-2 py-1 rounded-full text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <p className="text-gray-300 text-sm">{formatDuration(video.durationSec)}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col space-y-4 ml-4">
            <button
              onClick={onLike}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-colors"
            >
              <Heart className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={onSave}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-colors"
            >
              <Bookmark className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={onShare}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-colors"
            >
              <Share2 className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Mute Button */}
      <button
        onClick={toggleMute}
        className="absolute top-4 right-4 bg-black bg-opacity-50 rounded-full p-2"
      >
        <span className="text-white text-sm">
          {isMuted ? '🔇' : '🔊'}
        </span>
      </button>
    </div>
  );
}