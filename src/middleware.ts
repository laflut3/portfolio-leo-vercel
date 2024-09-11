import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req: NextRequest) {
    const token = await getToken({ req, secret });
    const { pathname } = req.nextUrl;

    // Routes protégées avec le routeur app
    const protectedRoutes: { [key: string]: string } = {
        admin: process.env.NEXTAUTH_URL + '/admin',
        sign: process.env.NEXTAUTH_URL + '/sign',
        profile: process.env.NEXTAUTH_URL + '/profile',
        verify: process.env.NEXTAUTH_URL + '/validation',
        forgot: process.env.NEXTAUTH_URL + '/forgot',
        change: process.env.NEXTAUTH_URL + '/forgot/change',
    };

    // Préparer la réponse
    let res = NextResponse.next();

    // Si l'utilisateur n'est pas connecté
    if (!token) {
        if ((pathname.startsWith(protectedRoutes.profile)) || (pathname.startsWith(protectedRoutes.admin))) {
            res = NextResponse.redirect(new URL(protectedRoutes.sign, req.url));
            res.cookies.set('flashMessage', 'Vous devez être connecté pour accéder à cette page.', { path: '/' });
            return res;
        }
    } else if (token) {
        // Si l'utilisateur est connecté mais pas admin
        if ((pathname.startsWith(protectedRoutes.admin)) && !(token.isAdmin)) {
            res = NextResponse.redirect(new URL(protectedRoutes.sign, req.url));
            res.cookies.set('flashMessage', 'Accès réservé aux administrateurs.', { path: '/' });
            return res;
        }

        // Empêcher l'accès à la page de connexion si déjà connecté
        if (pathname.startsWith(protectedRoutes.sign)) {
            res = NextResponse.redirect(new URL(protectedRoutes.profile, req.url));
            res.cookies.set('flashMessage', 'Vous êtes déjà connecté.', { path: '/' });
            return res;
        }

        // Si l'utilisateur est connecté mais non vérifié
        if (!(pathname.startsWith('/validation')) && !(token.isVerified)) {
            res = NextResponse.redirect(new URL('/validation', req.url));
            res.cookies.set('flashMessage', 'Veuillez vérifier votre compte pour accéder à cette page.', { path: '/' });
            return res;
        }

        // Bloquer l'accès à la page de validation si déjà vérifié
        if ((pathname.startsWith(protectedRoutes.verify)) && (token.isVerified)) {
            res = NextResponse.redirect(new URL("/", req.url));
            res.cookies.set('flashMessage', 'Votre compte est déjà vérifié.', { path: '/' });
            return res;
        }

        // Bloquer l'accès à /forgot et /change si l'utilisateur est connecté
        if (pathname.startsWith(protectedRoutes.forgot) || pathname.startsWith(protectedRoutes.change)) {
            res = NextResponse.redirect(new URL(protectedRoutes.profile, req.url));
            res.cookies.set('flashMessage', 'Vous êtes déjà connecté, pas besoin de changer le mot de passe.', { path: '/' });
            return res;
        }
    }

    // Continuer si aucune redirection n'est nécessaire
    return res;
}

export const config = {
    matcher: [
        '/',
        '/admin',
        '/sign',
        '/validation',
        '/profile',
        '/forgot',
        '/forgot/change',
    ],
};
