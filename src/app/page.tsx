"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { getActualSituation } from "@/db/queries/select";

import FifthSection from "@/components/home/FifthSection";
import Preloader from "@/components/home/Preload";
import CompanySection from "@/components/home/CompanySection";
import SkillSection from "@/components/home/SkillSection";
import ThirdSection from "@/components/home/ThirdSection";
import PresentationSection from "@/components/home/PresentationSection";

export default function HomePage() {
  const [preloaderVisible, setPreloaderVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPreloaderVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="w-full">
      {preloaderVisible && <Preloader />}
      <PresentationSection/>
      <SkillSection/>
      <ThirdSection/>
      <CompanySection/>
      <FifthSection/>
    </main>
  );
}
