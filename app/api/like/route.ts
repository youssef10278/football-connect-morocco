import { NextRequest, NextResponse } from 'next/server';
import { addLike, removeLike } from '@/lib/data';

export async function POST(request: NextRequest) {
  try {
    const { coachUserId, videoId, action } = await request.json();

    if (!coachUserId || !videoId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (action === 'unlike') {
      removeLike(coachUserId, videoId);
    } else {
      addLike({ coachUserId, videoId });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}