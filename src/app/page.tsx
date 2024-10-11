"use client"

import React, {useState, useEffect} from "react";
import ContactSection from "@/components/home/ContactSection";
import Preloader from "@/components/Preload";
import CompanySection from "@/components/home/CompanySection";
import SkillSection from "@/components/home/SkillSection";
import ProjectSection from "@/components/home/ProjectSection";
import PresentationSection from "@/components/home/PresentationSection";

const TWELVE_HOURS = 12 * 60 * 60 * 1000; // 12 heures en millisecondes
export default function HomePage() {
    const [preloaderVisible, setPreloaderVisible] = useState(false);

    useEffect(() => {
        const lastShown = localStorage.getItem("lastPreloaderShown");
        const now = new Date().getTime();

        if (!lastShown || now - parseInt(lastShown) > TWELVE_HOURS) {
            setPreloaderVisible(true);
            const timer = setTimeout(() => {
                setPreloaderVisible(false);
                localStorage.setItem("lastPreloaderShown", now.toString());
            }, 6000);

            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <main className="w-full">
            {preloaderVisible && <Preloader/>}
            <PresentationSection/>
            <SkillSection/>
            <ProjectSection/>
            <CompanySection/>
            <ContactSection/>
        </main>
    );
}

