import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { sign } from 'jsonwebtoken';

const ADMIN_USER = process.env.ADMIN_USER || '-';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '-';
const SECRET_KEY = process.env.SECRET_KEY || '-';

export async function POST(req: NextRequest) {
    const { username, password } = await req.json();

    if (username === ADMIN_USER && password === ADMIN_PASSWORD) {
        const token = sign({ username, timestamp: Date.now() }, SECRET_KEY);

        const response = NextResponse.json({ message: 'Login successful' });
        response.cookies.set('authToken', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            path: "/"
        });
        return response;
    }

    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
}
