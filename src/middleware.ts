import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // Récupérer le token d'authentification à l'aide de NextAuth
    const token = await getToken({ req, secret });
    console.log('Token:', token);  // Debug pour voir le token récupéré

    // Routes protégées avec le routeur app
    const protectedRoutes: { [key: string]: string } = {
        admin: '/admin',
        sign: '/sign',
        profile: '/profile',
        verify: '/validation',
        forgot: '/forgot',
        change: '/forgot/change',
    };

    // Vérification des routes protégées
    if (!token) {
        // Si l'utilisateur n'est pas connecté
        if (pathname.startsWith(protectedRoutes.profile) || pathname.startsWith(protectedRoutes.admin)) {
            const res = NextResponse.redirect(new URL(protectedRoutes.sign, req.url));
            res.cookies.set('flashMessage', 'Vous devez être connecté pour accéder à cette page.', { path: '/' });
            return res;
        }
    } else {
        // Si l'utilisateur est connecté mais pas admin
        if (pathname.startsWith(protectedRoutes.admin) && !token.isAdmin) {
            const res = NextResponse.redirect(new URL(protectedRoutes.sign, req.url));
            res.cookies.set('flashMessage', 'Accès réservé aux administrateurs.', { path: '/' });
            return res;
        }

        // Empêcher l'accès à la page de connexion si déjà connecté
        if (pathname.startsWith(protectedRoutes.sign)) {
            const res = NextResponse.redirect(new URL(protectedRoutes.profile, req.url));
            res.cookies.set('flashMessage', 'Vous êtes déjà connecté.', { path: '/' });
            return res;
        }

        // Si l'utilisateur est connecté mais non vérifié
        if (pathname.startsWith(protectedRoutes.profile) && !token.isVerified) {
            const res = NextResponse.redirect(new URL(protectedRoutes.verify, req.url));
            res.cookies.set('flashMessage', 'Veuillez vérifier votre compte pour accéder à cette page.', { path: '/' });
            return res;
        }

        // Bloquer l'accès à la page de validation si déjà vérifié
        if (pathname.startsWith(protectedRoutes.verify) && token.isVerified) {
            const res = NextResponse.redirect(new URL(protectedRoutes.profile, req.url));
            res.cookies.set('flashMessage', 'Votre compte est déjà vérifié.', { path: '/' });
            return res;
        }

        // Bloquer l'accès à /forgot et /change si l'utilisateur est connecté
        if (pathname.startsWith(protectedRoutes.forgot) || pathname.startsWith(protectedRoutes.change)) {
            const res = NextResponse.redirect(new URL(protectedRoutes.profile, req.url));
            res.cookies.set('flashMessage', 'Vous êtes déjà connecté, pas besoin de changer le mot de passe.', { path: '/' });
            return res;
        }
    }

    // Continuer si aucune redirection n'est nécessaire
    return NextResponse.next();
}

export const config = {
    matcher: ['/:path*'], // Applique le middleware à toutes les pages d'authentification avec le routeur app
};
