// app/api/events/route.ts
import { NextResponse } from 'next/server';
import { connectToDatabase } from "../../../utils/dbConnection"
import Event from '../../../models/event';

export async function GET() {
    try {
        await connectToDatabase();
        const events = await Event.find({});
        return NextResponse.json(events);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        await connectToDatabase();
        const data = await request.json();
        const newEvent = new Event(data);
        await newEvent.save();
        return NextResponse.json(newEvent, { status: 201 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: 'Failed to create event' }, { status: 500 });
    }
}