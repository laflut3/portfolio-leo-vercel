"use client";

import React, {useEffect, useRef} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Image from 'next/image';

import soleil from '@/../public/assets/image/planete/soleil.png';
import mercury from '@/../public/assets/image/planete/mercure.png';
import venus from '@/../public/assets/image/planete/venus.png';
import terre from '@/../public/assets/image/planete/terre.png';
import mars from '@/../public/assets/image/planete/mars.png';
import jupiter from '@/../public/assets/image/planete/jupiter.png';
import saturne from '@/../public/assets/image/planete/saturne.png';
import uranus from '@/../public/assets/image/planete/uranus.png';
import neptune from '@/../public/assets/image/planete/neptune.png';
import arrow from '@/../public/assets/image/utils/special-arrow-icon.svg';

import WebDiv from "@/components/home/skillUtils/WebDiv";
import AppDevDiv from "@/components/home/skillUtils/AppDevDiv";
import BDDiv from "@/components/home/skillUtils/BDDiv";
import SystemDiv from "@/components/home/skillUtils/SystemDiv";
import ReseauDiv from "@/components/home/skillUtils/RéseauProtocoleDiv";
import OutilsDevDiv from "@/components/home/skillUtils/OutilsDev";


function ScrollSection() {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            {
                translateX: 0,
            },
            {
                translateX: "-805vw",  // Adjust for the number of images (7 planets + earth)
                ease: "none",
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "9000 top",  // Adjust end based on scroll length needed
                    scrub: 0.6,
                    pin: true,
                },
            }
        );

        return () => {
            pin.kill();  // Clean up the animation on unmount
        };
    }, []);

    return (
        <section className="overflow-hidden">
            <div ref={triggerRef}>
                <div ref={sectionRef} className="min-h-screen w-[900vw] flex flex-row relative">

                    <div className={"min-h-screen w-52"}></div>

                    <div className="min-h-screen w-screen flex flex-col justify-center items-center">
                        <h2 className="flex text-2xl md:text-4xl xl:text-6xl text-center items-center">
                            <p className={"hidden sm:block"}>Bienvenue dans mon système de compétences</p>
                            <p className={"sm:hidden block"}>Mes compétences</p>
                            <Image src={arrow} alt={arrow} className={"h-auto ml-5"}/>
                        </h2>
                        <Image
                            src={soleil}
                            alt="soleil"
                            className="object-contain max-h-[40vh] sm:max-h-[60vh] w-auto mb-4"
                        />

                    </div>

                    {/* Mercury */}
                    <div
                        className="min-h-screen w-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-10">
                        <h3 className="text-xl sm:text-2xl md:text-4xl font-semibold text-center mb-4 sm:mb-6">
                            Développement Web
                        </h3>
                        <Image
                            src={mercury}
                            alt="Mercure"
                            className="object-contain max-h-[30vh] sm:max-h-[40vh] md:max-h-[50vh] w-auto mb-4"
                        />
                        <WebDiv/>
                    </div>


                    {/* Venus */}
                    <div
                        className="min-h-screen w-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-10">
                        <h3
                            className="text-xl sm:text-2xl md:text-4xl font-semibold text-center mb-4 sm:mb-6"
                        >
                            Développement d&apos;application
                        </h3>
                        <Image
                            src={venus}
                            alt="Venus"
                            className="object-contain max-h-[30vh] sm:max-h-[40vh] md:max-h-[50vh] w-auto mb-4"
                        />
                        <AppDevDiv/>
                    </div>

                    {/* Earth */}
                    <div
                        className="min-h-screen w-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-10">
                        <h3 className="text-xl sm:text-2xl md:text-4xl font-semibold text-center mb-4 sm:mb-6">
                            Base de données
                        </h3>
                        <Image
                            src={terre}
                            alt="Terre"
                            className="object-contain max-h-[30vh] sm:max-h-[40vh] md:max-h-[50vh] w-auto mb-4"
                        />
                        <BDDiv/>
                    </div>

                    {/* Mars */}
                    <div
                        className="min-h-screen w-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-10">
                        <h3 className="text-xl sm:text-2xl md:text-4xl font-semibold text-center mb-4 sm:mb-6">
                            Système
                        </h3>
                        <Image
                            src={mars}
                            alt="Mars"
                            className="object-contain max-h-[30vh] sm:max-h-[40vh] md:max-h-[50vh] w-auto mb-4"
                        />
                        <SystemDiv/>
                    </div>

                    {/* Jupiter */}
                    <div className="min-h-screen w-screen flex flex-col justify-center items-center px-4 md:px-10">
                        <h3 className="text-2xl md:text-4xl font-semibold text-center mb-4">Réseau et protocoles</h3>
                        <Image
                            src={jupiter}
                            alt="Jupiter"
                            className="object-contain max-h-[30vh] sm:max-h-[40vh] md:max-h-[50vh] w-auto mb-4"
                        />
                        <ReseauDiv/>
                    </div>

                    {/* Saturn */}
                    <div className="min-h-screen w-screen flex flex-col justify-center items-center px-4 md:px-10">
                        <h3 className="text-2xl md:text-4xl font-semibold text-center mb-4">Outils développement et
                            sécurité</h3>
                        <Image
                            src={saturne}
                            alt="Saturne"
                            className="object-contain max-h-[30vh] sm:max-h-[40vh] md:max-h-[50vh] w-auto mb-4"
                        />
                        <OutilsDevDiv/>
                    </div>

                    {/* Uranus */}
                    <div className="min-h-screen w-screen flex flex-col justify-center items-center px-4 md:px-10">
                        <h3 className="text-2xl md:text-4xl font-semibold text-center mb-4">Management</h3>
                        <Image
                            src={uranus}
                            alt="Uranus"
                            className="object-contain max-h-[30vh] sm:max-h-[40vh] md:max-h-[50vh] w-auto mb-4"
                        />
                    </div>

                    {/* Neptune */}
                    <div className="min-h-screen w-screen flex flex-col justify-center items-center px-4 md:px-10">
                        <h3 className="text-2xl md:text-4xl font-semibold text-center mb-4">Outils autre</h3>
                        <Image
                            src={neptune}
                            alt="Neptune"
                            className="object-contain max-h-[30vh] sm:max-h-[40vh] md:max-h-[50vh] w-auto mb-4"
                        />
                    </div>
                    <div className="min-h-screen w-screen flex flex-col justify-center items-center text-center">
                        <p className={"text-8xl"}>La suite</p>
                        <Image src={arrow} alt={"arrow"} className={"rotate-90 translate-y-10"}></Image>
                    </div>

                    <div className={"min-h-screen w-20"}></div>

                </div>
            </div>
        </section>
    );
}

export default ScrollSection;
