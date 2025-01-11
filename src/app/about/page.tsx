"use client"

import AboutMeSection from "@/components/about/AboutMeSection";
import AboutSite from "@/components/about/AboutSite";
import React from "react";
import AboutMore from "@/components/about/AboutMore";

export default function AboutPage() {
    return (
        <main className="min-h-screen w-full">
            <AboutSite/>
            <AboutMeSection/>
            <AboutMore/>

        </main>
    );
}