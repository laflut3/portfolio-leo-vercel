import ClientNavbar from "@/components/navbar/ClientNavbar";
import Footer from "@/components/Footer";
import "../styles/global.css";
import {Provider} from "@/app/provider";
import FlashMessage from "@/components/utils/FlashMessage";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import {Metadata} from "next";

export const metadata: Metadata = {
    metadataBase: new URL('https://portfolio-leo-vercel.vercel.app'),

    title: {
        default: 'Portfolio de Léo Torres',
        template: '%s | Portfolio de Léo Torres',
    },

    description: "Bienvenue sur mon site ! Je suis Léo Torres, développeur full stack et créateur de FLEO-WEB, une entreprise spécialisée dans la conception de sites web pour micro-entreprises, auto-entrepreneurs et petites entreprises.",

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

    authors: [{ name: 'Léo Torres', url: 'https://portfolio-leo-vercel.vercel.app' }],

    openGraph: {
        title: 'Portfolio de Léo Torres',
        description: "Bienvenue sur mon site ! Je suis Léo Torres, développeur full stack et créateur de FLEO-WEB.",
        url: 'https://portfolio-leo-vercel.vercel.app',
        siteName: 'Portfolio de Léo Torres',
        images: [
            {
                url: 'https://portfolio-leo-vercel.vercel.app/opengraph-image.png',
                width: 1200,
                height: 630,
            },
        ],
        locale: 'fr_FR',
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Portfolio de Léo Torres',
        description:
            "Bienvenue sur mon site ! Je suis Léo Torres, développeur full stack et créateur de FLEO-WEB.",
        creator: '@leo_trs_off',
        images: ['https://portfolio-leo-vercel.vercel.app/opengraph-image.png'],
    },

    icons: {
        icon: '/favicon.ico',
        apple: '/favicon.ico',
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
        <SpeedInsights/>
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
