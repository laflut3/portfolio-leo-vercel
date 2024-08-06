import { NextResponse } from 'next/server';
import { verifyAdminCredentials } from '../../../../db/queries/auth';

export async function POST(request: Request) {
    const { username, password } = await request.json();

    if (!username || !password) {
        return NextResponse.json({ error: 'Username and password are required' }, { status: 400 });
    }

    const isAuthenticated = await verifyAdminCredentials(username, password);

    if (isAuthenticated) {
        // Set a cookie with a 10-minute expiration
        const response = NextResponse.json({ message: 'Authentication successful' });
        const expirationTime = new Date(Date.now() + 10 * 60 * 1000).toUTCString(); 
        response.cookies.set('admin_auth', 'authenticated', { expires: new Date(expirationTime) });
        return response;
    } else {
        return NextResponse.json({ error: 'Invalid username or password' }, { status: 401 });
    }
}
