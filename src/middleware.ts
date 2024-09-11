import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

// Interface représentant les informations du token utilisateur
interface UserPayload {
    isAdmin: boolean;
    isVerified: boolean;
    [key: string]: any;
}

export async function middleware(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    const url = req.nextUrl.clone();

    // Par défaut, l'utilisateur n'est ni admin ni vérifié
    let isAdmin = false;
    let isVerified = false;

    // Si un token est présent, extraire les informations de l'utilisateur
    if (token) {
        const userPayload = token as UserPayload;
        isAdmin = userPayload.isAdmin;
        isVerified = userPayload.isVerified;
    }

    // Autoriser l'accès aux pages de login et de register si l'utilisateur n'est pas connecté
    if (!token && (url.pathname === 'sign')) {
        return NextResponse.next();
    }

    // Rediriger vers /login si l'utilisateur n'est pas connecté et tente d'accéder à /profile
    if (!token && url.pathname === '/profile') {
        const response = NextResponse.redirect(new URL('/sign', req.url));
        response.cookies.set('flashMessage', 'Vous devez être connecté pour accéder à cette page.', { path: '/' });
        return response;
    }

    // Rediriger les utilisateurs connectés essayant d'accéder à /login ou /register
    if (token && (url.pathname === 'sign')) {
        url.pathname = '/';
        const response = NextResponse.redirect(url);
        response.cookies.set('flashMessage', 'Vous êtes déjà connecté.', { path: '/' });
        return response;
    }

    // Bloquer l'accès à /validation si l'utilisateur est déjà vérifié
    if (token && isVerified && url.pathname === '/validation') {
        url.pathname = '/';
        const response = NextResponse.redirect(url);
        response.cookies.set('flashMessage', 'Vous avez déjà vérifié votre compte.', { path: '/' });
        return response;
    }

    // Rediriger les utilisateurs non-vérifiés vers /validation
    if (token && !isVerified && url.pathname !== '/validation' && !url.pathname.startsWith('/admin')) {
        url.pathname = '/validation';
        const response = NextResponse.redirect(url);
        response.cookies.set('flashMessage', 'Veuillez vérifier votre compte.', { path: '/' });
        return response;
    }

    // Rediriger les utilisateurs non-admin essayant d'accéder aux pages admin
    if (token && isVerified && !isAdmin && url.pathname.startsWith('/admin')) {
        url.pathname = '/';
        const response = NextResponse.redirect(url);
        response.cookies.set('flashMessage', 'Accès interdit. Administrateurs uniquement.', { path: '/' });
        return response;
    }

    // Si aucune redirection n'est nécessaire, continuer normalement
    return NextResponse.next();
}

export const config = {
    matcher: [
        '/',
        '/admin/:path*',  // Assurez-vous que toutes les routes admin sont protégées
        '/profile',
        '/sign',
        '/validation',
    ],
};
