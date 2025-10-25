import { NextRequest, NextResponse } from 'next/server';
import { addSave, removeSave } from '@/lib/data';

export async function POST(request: NextRequest) {
  try {
    const { coachUserId, playerUserId, action } = await request.json();

    if (!coachUserId || !playerUserId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (action === 'unsave') {
      removeSave(coachUserId, playerUserId);
    } else {
      addSave({ coachUserId, playerUserId });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}