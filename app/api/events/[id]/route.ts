// app/api/events/[id]/route.ts
import { NextResponse } from 'next/server';
import { connectToDatabase } from "../../../../utils/dbConnection"
import Event from '../../../../models/event';

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    try {
        await connectToDatabase();
        await Event.findByIdAndDelete(params.id);
        return NextResponse.json({ message: 'Event deleted successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete event' }, { status: 500 });
    }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    try {
        await connectToDatabase();
        const data = await request.json();
        const updatedEvent = await Event.findByIdAndUpdate(params.id, data, { new: true });
        return NextResponse.json(updatedEvent);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update event' }, { status: 500 });
    }
}
