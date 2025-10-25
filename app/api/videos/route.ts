import { NextRequest, NextResponse } from 'next/server';
import { getVideos, getPlayers } from '@/lib/data';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');
  const position = searchParams.get('position');
  const dominantFoot = searchParams.get('dominantFoot');
  const minAge = searchParams.get('minAge') ? parseInt(searchParams.get('minAge')!) : undefined;
  const maxAge = searchParams.get('maxAge') ? parseInt(searchParams.get('maxAge')!) : undefined;

  let videos = getVideos().filter(v => v.status === 'APPROVED');
  const players = getPlayers();

  // Apply filters based on player attributes
  if (position || dominantFoot || minAge || maxAge) {
    videos = videos.filter(video => {
      const player = players.find(p => p.userId === video.playerUserId);
      if (!player) return false;

      if (position && !player.positions.includes(position)) return false;
      if (dominantFoot && player.dominantFoot !== dominantFoot) return false;
      if (minAge && player.age < minAge) return false;
      if (maxAge && player.age > maxAge) return false;

      return true;
    });
  }

  // Sort by creation date (newest first)
  videos.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  // Pagination
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedVideos = videos.slice(startIndex, endIndex);

  // Enrich videos with player data
  const enrichedVideos = paginatedVideos.map(video => {
    const player = players.find(p => p.userId === video.playerUserId);
    return {
      ...video,
      player: player || null
    };
  });

  return NextResponse.json({
    videos: enrichedVideos,
    pagination: {
      page,
      limit,
      total: videos.length,
      totalPages: Math.ceil(videos.length / limit)
    }
  });
}