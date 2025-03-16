
import ClientNavbar from "@/components/navbar/ClientNavbar";
import Footer from "@/components/Footer";
import "../styles/global.css";
import {Provider} from "@/app/provider";
import FlashMessage from "@/components/utils/FlashMessage";
import { Analytics } from "@vercel/analytics/react"
import {Metadata} from "next";

export const metadata: Metadata = {
    // Base URL de ton site (pour la construction d'URLs absolues)
    metadataBase: new URL('https://portfolio-leo-vercel.vercel.app'),

    // Titre par défaut et template (quand tu précises un titre dans une page)
    title: {
        default: 'Portfolio de Léo Torres',
        template: '%s | Portfolio de Léo Torres',
    },

    // Description principale de ton site
    description:
        "Bienvenue sur mon site ! Je suis Léo Torres, développeur full stack et créateur de FLEO-WEB, une entreprise spécialisée dans la conception de sites web pour micro-entreprises, auto-entrepreneurs et petites entreprises.",

    // Mots-clés pour les moteurs de recherche
    keywords: [
        'Léo Torres',
        'FLEO-WEB',
        'Développeur',
        'Full Stack',
        'Web',
        'site web',
        'Micro-entreprise',
        'Auto-entrepreneur',
        'Portfolio',
    ],

    // Auteur du site
    authors: [{ name: 'Léo Torres', url: 'https://portfolio-leo-vercel.vercel.app' }],

    // Configuration Open Graph (Facebook, LinkedIn, etc.)
    openGraph: {
        title: 'Portfolio de Léo Torres',
        description:
            "Bienvenue sur mon site ! Je suis Léo Torres, développeur full stack et créateur de FLEO-WEB.",
        url: 'https://portfolio-leo-vercel.vercel.app',
        siteName: 'Portfolio de Léo Torres',
        // L'image partagée sur les réseaux sociaux
        images: [
            {
                url: 'https://portfolio-leo-vercel.vercel.app/og-image.png',
                width: 1200,
                height: 630,
            },
        ],
        locale: 'fr_FR',
        type: 'website',
    },

    // Configuration Twitter
    twitter: {
        card: 'summary_large_image',
        title: 'Portfolio de Léo Torres',
        description:
            "Bienvenue sur mon site ! Je suis Léo Torres, développeur full stack et créateur de FLEO-WEB.",
        // Ton compte Twitter si tu en as un (ex. '@LeoTorresDev')
        creator: '@leo_trs_off',
        images: ['https://portfolio-leo-vercel.vercel.app/og-image.png'],
    },

    // Favicons et icônes (si tu en as)
    icons: {
        icon: '/favicon.ico', // ou '/icon.png'
        apple: '/apple-touch-icon.png',
    },
};


export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {

    return (
        <html lang="fr">
        <head>
            <link rel="icon" href="/icon.png"/>
        </head>
        <body className="font-akaya" suppressHydrationWarning={true}>
        <Analytics />
        <Provider>
            <ClientNavbar/>
            {children}
            <FlashMessage/>
            <Footer/>
        </Provider>
        </body>
        </html>
    );
}
