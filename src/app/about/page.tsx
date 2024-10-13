"use client"

import AboutMeSection from "@/components/about/AboutMeSection";
import AboutSite from "@/components/about/AboutSite";

export default function AboutPage() {
    return (
        <main className="min-h-screen w-full">
            <AboutSite/>
            <AboutMeSection/>
        </main>
    );
}