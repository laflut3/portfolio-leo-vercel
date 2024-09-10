"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { getActualSituation } from "@/db/queries/select";
import ThirdSectionContainer from "@/components/home/ThirdSectionContainer";
import bg_first_sec from "../../public/assets/image/background/bg-trou-noir2.png";
import bg_third_sec from "../../public/assets/image/designIcon/planet-icon.png";
import FifthSection from "@/components/home/FifthSection";
import Preloader from "@/components/home/Preload";
import CompanySection from "@/components/home/CompanySection";
import SkillSection from "@/components/home/SkillSection";
import ThirdSection from "@/components/home/ThirdSection";

export default function HomePage() {
  const [actualSituation, setActualSituation] = useState('');
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [preloaderVisible, setPreloaderVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getActualSituation();
        if (data && data.content) {
          setActualSituation(data.content);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération ou de la création de la situation actuelle :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    const timer = setTimeout(() => {
      setPreloaderVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);


  const handleNavClick = (targetId: string) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="w-full">
      {preloaderVisible && <Preloader />}

      <section
        className="min-h-[105vh] flex flex-col justify-center items-start w-full pl-4 md:pl-[5%] bg-primary relative first-section"
        style={{ background: `url(${bg_first_sec.src}) no-repeat center center/cover` }}
        id="top"
      >
        <div className="flex items-center border-secondary p-4 md:p-7">
          {isMobile ? (
            <div className="flex items-center justify-center w-full mb-2">
              <h3 className="text-white text-xl md:text-2xl">Bienvenue sur mon portfolio</h3>
              <Image src='assets/leo-photo2.svg' alt="Photo de Léo" width={60} height={60} className="rounded-full ml-12 border-[3px] object-cover object-center border-white" style={{ objectFit: 'contain' }} />
            </div>
          ) : (
            <h3 className="text-white text-xl md:text-2xl">Bienvenue sur mon portfolio</h3>
          )}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary font-erasbold text-stroke w-full md:w-3/4 pt-6 md:pt-9">
          Salut je suis Léo, Full Stack Developer
        </h1>
        <p className="text-lg md:text-xl text-primary text-stroke pt-4 md:pt-[5%] w-full md:w-1/2">
          {loading ? 'Chargement...' : actualSituation}
        </p>
        <div className="absolute bottom-10 left-0 p-4">
          <button className="text-primary text-lg md:text-xl p-2 rounded flex items-center" onClick={() => handleNavClick("contactUs")}>
            Me contacter
            <Image src="/assets/image/utils/special-arrow-icon.svg" alt="special arrow icon" width={32} height={32} className="pl-2" style={{ objectFit: 'contain' }} />
          </button>
        </div>
        <div className="absolute bottom-0 right-0 hidden md:block">
          <div className="overflow-hidden">
            <div className="animate-slide-in-from-right">
              <Image src='/assets/image/leo-photo.svg' alt="Photo de Léo" width={700} height={949} style={{ objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      </section>

      <SkillSection/>
      <ThirdSection/>
      <CompanySection/>
      <FifthSection/>
    </main>
  );
}
