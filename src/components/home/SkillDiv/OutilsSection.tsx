"use client"

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import saturne from "@/../public/assets/image/planete/saturne.png";
import OutilsDevDiv from "@/components/home/SkillDiv/skillUtils/OutilsDev";


export default function OutilsSection() {
    const [isVisible, setIsVisible] = useState(false);

    // Utiliser Intersection Observer pour détecter si la div est visible dans la fenêtre
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                });
            },
            { threshold: 0.5 } // Déclenche l'animation quand 50% de la div est visible
        );

        const target = document.querySelector("#outilsSectionDiv");
        if (target) {
            observer.observe(target);
        }

        return () => {
            if (target) observer.unobserve(target);
        };
    }, []);

    return (
        <motion.div
            id="outilsSectionDiv"
            className="min-h-screen w-screen flex flex-col justify-center items-center px-4 md:px-10"
            initial={{ opacity: 0, y: 50 }} // Départ avec un léger déplacement vers le bas
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }} // Montée et descente
            transition={{ duration: 1, ease: "easeInOut" }} // Durée et transition fluide
        >
            <h3 className="text-2xl md:text-4xl font-semibold text-center mb-4">Outils développement et sécurité</h3>
            <Image
                src={saturne}
                alt="Saturne"
                className="object-contain max-h-[30vh] sm:max-h-[40vh] md:max-h-[50vh] w-auto mb-4"
            />
            <OutilsDevDiv />
        </motion.div>
    );
}
