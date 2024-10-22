import { NextResponse } from 'next/server';
import { connectToDatabase } from "../../../../utils/dbConnection"
import Event from '../../../../models/event';

export async function GET() {
    try {
        await connectToDatabase();
        const eventsInProgress = await Event.find({ isInProgress: true });
        const response = NextResponse.json(eventsInProgress);
        
        response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
        response.headers.set('Pragma', 'no-cache');
        response.headers.set('Expires', '0');
        response.headers.set('Surrogate-Control', 'no-store');
        
        return response;
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch events in progress' }, { status: 500 });
    }
}