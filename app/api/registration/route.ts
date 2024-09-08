// app/api/registration/route.ts
import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../utils/dbConnection';
import Registration from '../../../models/registration';

export async function GET() {
    try {
        await connectToDatabase();
        const registration = await Registration.findOne({});
        return NextResponse.json(registration);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch registration' }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        await connectToDatabase();
        const data = await request.json();
        const registration = await Registration.findOneAndUpdate({}, data, {
            new: true,
            upsert: true, // Ensure there's always one record
        });
        return NextResponse.json(registration);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update registration' }, { status: 500 });
    }
}
