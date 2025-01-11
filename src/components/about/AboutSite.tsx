"use client"

import Image from "next/image";

import next from '@/../public/assets/image/logoDev/web/nextjs.png';
import vercel from '@/../public/assets/image/logoDev/systeme/vercel.png';
import BackEtoile from "@/components/utils/BackEtoile";
import React from "react";

export default function AboutSite() {
    return (
        <>
            {/* Section principale */}
            <section
                id="aboutSite"
                className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 lg:px-12 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
            >
                <BackEtoile/>
                {/* Arrière-plan étoilé */}
                <div className="absolute top-0 left-0 w-full h-full bg-stars animate-stars"></div>

                <h2 className="text-4xl lg:text-6xl font-bold text-white mb-12 text-center drop-shadow-md">
                    À propos de ce site
                </h2>

                {/* Logos avec animations */}
                <div className="flex w-full justify-center items-center space-x-6 lg:space-x-16 mb-12 relative z-10">
                    <div
                        className="p-4 bg-white/5 rounded-full shadow-lg hover:scale-110 transition-transform duration-500">
                        <Image
                            src={next}
                            alt="Next.js logo"
                            className="h-auto w-16 md:w-20"
                        />
                    </div>
                    <div
                        className="p-4 bg-white/5 rounded-full shadow-lg hover:scale-110 transition-transform duration-500">
                        <Image
                            src={vercel}
                            alt="Vercel logo"
                            className="h-auto w-16 md:w-20"
                        />
                    </div>
                </div>

                {/* Texte principal */}
                <div
                    className="flex flex-col w-full max-w-4xl text-center text-white space-y-8 px-4 lg:px-8 relative z-10">
                    <p className="text-base lg:text-lg leading-relaxed tracking-wide drop-shadow-md">
                        Ce site est un espace dédié à la présentation de mon parcours professionnel et académique.
                        En tant que futur professionnel dans le domaine de l&apo;informatique, ce site constitue la vitrine
                        de tous mes projets, autant scolaires que personnels.
                    </p>
                    <p className="text-base lg:text-lg leading-relaxed tracking-wide drop-shadow-md">
                        Il est programmé en <span className="text-blue-400 font-semibold">Next.js</span> et <span
                        className="text-blue-400 font-semibold">TypeScript</span>, avec un design réalisé principalement
                        grâce à <span className="text-teal-400 font-semibold">Tailwind CSS</span>.
                        Certaines librairies comme <span
                        className="text-pink-400 font-semibold">Framer Motion</span>, <span
                        className="text-green-400 font-semibold">GSAP</span>, et <span
                        className="text-purple-400 font-semibold">Three.js</span> ont été utilisées pour enrichir
                        l’expérience visuelle.
                    </p>
                    <p className="text-base lg:text-lg leading-relaxed tracking-wide drop-shadow-md">
                        Les données des projets sont stockées dans un cluster <span
                        className="text-green-400 font-semibold">MongoDB</span> et le site est hébergé sur <span
                        className="text-gray-400 font-semibold">Vercel</span>.
                    </p>
                    <p className="text-base lg:text-lg leading-relaxed tracking-wide drop-shadow-md">
                        Merci de votre visite, et je vous souhaite une agréable exploration de mon portfolio.
                    </p>
                </div>
                <div
                    className="absolute top-10 left-20 w-32 h-32 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full blur-xl animate-pulse"></div>
                <div
                    className="absolute bottom-10 right-20 w-40 h-40 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full blur-lg animate-spin-slow"></div>

            </section>
        </>
    );
}
