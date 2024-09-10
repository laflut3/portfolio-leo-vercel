"use client"

import React, { useState, useEffect } from "react";
import FifthSection from "@/components/home/FifthSection";
import Preloader from "@/components/home/Preload";
import CompanySection from "@/components/home/CompanySection";
import SkillSection from "@/components/home/SkillSection";
import ThirdSection from "@/components/home/ThirdSection";
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
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
      <main className="w-full">
        {preloaderVisible && <Preloader />}
        <PresentationSection />
        <SkillSection />
        <ThirdSection />
        <CompanySection />
        <FifthSection />
      </main>
  );
}
