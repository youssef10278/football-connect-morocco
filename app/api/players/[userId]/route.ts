import { NextRequest, NextResponse } from 'next/server';
import { getPlayerById } from '@/lib/data';

export async function GET(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  const player = getPlayerById(params.userId);
  
  if (!player) {
    return NextResponse.json({ error: 'Player not found' }, { status: 404 });
  }

  return NextResponse.json(player);
}