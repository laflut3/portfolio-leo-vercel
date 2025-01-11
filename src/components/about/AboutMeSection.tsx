"use client";

import {motion} from "framer-motion";
import React, {useEffect, useState} from "react";
import BackEtoile from "@/components/utils/BackEtoile";
import Image from "next/image";
import leo from "@images/leo-photo2.svg";

export default function AboutMeSection() {
    const [duration, setDuration] = useState(40); // Valeur par défaut

    useEffect(() => {
        const updateDuration = () => {
            const screenHeight = window.innerHeight;

            // Ajuste la vitesse avec une durée minimale et maximale
            const baseSpeed = 30; // Durée pour un écran de 1080px
            const minDuration = 20; // Durée minimale
            const maxDuration = 50; // Durée maximale
            const calculatedDuration = baseSpeed * (1080 / screenHeight);

            // Limite la durée dans une plage définie
            const newDuration = Math.max(minDuration, Math.min(maxDuration, calculatedDuration));
            setDuration(newDuration);
        };

        // Met à jour la durée lors du chargement et du redimensionnement
        updateDuration();
        window.addEventListener("resize", updateDuration);

        return () => {
            window.removeEventListener("resize", updateDuration);
        };
    }, []);

    return (
        <section id="aboutMe"
                 className="relative h-screen bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
            {/* Arrière-plan étoilé */}
            <BackEtoile/>
            <div className="relative z-10 flex flex-col items-center text-center text-white space-y-8 px-4 lg:px-8">
                <h2 className="text-4xl lg:text-6xl font-bold text-yellow-500 bg-black z-50 drop-shadow-md p-6 rounded-2xl backdrop-blur">Biographie</h2>
                <motion.div
                    className="text-lg lg:text-2xl leading-relaxed space-y-6 w-full max-w-4xl"
                    initial={{y: "100%"}}
                    animate={{y: "-100%"}}
                    transition={{
                        duration: duration,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    <p>Bonjour, je me nomme Léo Torres.</p>
                    <p>
                        Je suis né dans la magnifique région du Languedoc-Roussillon, plus précisément à Montpellier,
                        une ville
                        riche en histoire et en culture. Mon parcours éducatif est marqué par un engagement constant
                        pour
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        l'excellence, dans tout ce que j'entreprends.
                    </p>
                    <p>
                        Je suis une personne calme, bienveillante, sociable, rigoureuse, travailleuse et passionné. Mais
                        je
                        possède quelques défauts, notamment un perfectionnisme prononcé qui me pousse à accorder une
                        grande
                        attention aux détails.
                    </p>
                    <p>
                        Je tiens à remercier mes deux frères, Achille et Maël, ainsi que mes parents pour leur soutien
                        constant
                        dans mon éducation et mes projets personnels et professionnels.
                    </p>
                    <p>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Mes passions incluent l'astronomie, l'astrophysique, le sport (musculation et escalade),
                        ainsi que
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        l'informatique, à laquelle je consacre mon avenir.
                    </p>
                    <p>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Cette passion pour l'informatique va au-delà d'une simple carrière. Elle reflète ce que
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        j'aime faire et
                        représente une part importante de ma vie et de ma jeunesse.
                    </p>
                    <p>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Merci de votre temps et de votre intérêt pour mon portfolio. J'espère que ce site vous
                        permettra
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        d'en apprendre davantage sur moi et mes projets.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
