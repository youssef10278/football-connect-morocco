import { NextRequest, NextResponse } from 'next/server';
import { getPlayers } from '@/lib/data';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');
  const position = searchParams.get('position');
  const minAge = searchParams.get('minAge') ? parseInt(searchParams.get('minAge')!) : undefined;
  const maxAge = searchParams.get('maxAge') ? parseInt(searchParams.get('maxAge')!) : undefined;
  const country = searchParams.get('country');
  const city = searchParams.get('city');
  const dominantFoot = searchParams.get('dominantFoot');

  let players = getPlayers();

  // Apply filters
  if (position) {
    players = players.filter(p => p.positions.includes(position));
  }
  if (minAge) {
    players = players.filter(p => p.age >= minAge);
  }
  if (maxAge) {
    players = players.filter(p => p.age <= maxAge);
  }
  if (country) {
    players = players.filter(p => p.user.country.toLowerCase().includes(country.toLowerCase()));
  }
  if (city) {
    players = players.filter(p => p.user.city?.toLowerCase().includes(city.toLowerCase()));
  }
  if (dominantFoot) {
    players = players.filter(p => p.dominantFoot === dominantFoot);
  }

  // Pagination
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedPlayers = players.slice(startIndex, endIndex);

  return NextResponse.json({
    players: paginatedPlayers,
    pagination: {
      page,
      limit,
      total: players.length,
      totalPages: Math.ceil(players.length / limit)
    }
  });
}