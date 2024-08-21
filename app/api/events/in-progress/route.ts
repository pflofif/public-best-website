// app/api/events/route.ts
import { NextResponse } from 'next/server';
import { connectToDatabase } from "../../../../utils/dbConnection"
import Event from '../../../../models/event';

export async function GET() {
    try {
        await connectToDatabase();
        const eventsInProgress = await Event.find({ isInProgress: true });
        return NextResponse.json(eventsInProgress);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch events in progress' }, { status: 500 });
    }
}