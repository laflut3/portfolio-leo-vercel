import ClientNavbar from "@/components/navbar/ClientNavbar";
import Footer from "@/components/Footer";
import type {Metadata} from "next";
import "../styles/global.css";
import {Provider} from "@/app/provider";
import FlashMessage from "@/components/utils/FlashMessage";

export const metadata: Metadata = {
    title: "LEO TORRES",
    description: "Bienvenue sur mon portfolio",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
        <head>
            <link rel="icon" href="/icon.png"/>
        </head>
        <body className="font-akaya" suppressHydrationWarning={true}>
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
