import ClientNavbar from "@/components/ClientNavbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import "../styles/global.css";

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
        <link rel="icon" href="/icon.png" />
      </head>
      <body className="font-akaya" suppressHydrationWarning={true}>
        <ClientNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
