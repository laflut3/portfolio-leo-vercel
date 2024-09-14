"use client"

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import mars from "@/../public/assets/image/planete/mars.png";
import SystemDiv from "@/components/home/SkillDiv/skillUtils/SystemDiv";

export default function SystemeSection() {
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

        const target = document.querySelector("#systemSectionDiv");
        if (target) {
            observer.observe(target);
        }

        return () => {
            if (target) observer.unobserve(target);
        };
    }, []);

    return (
        <motion.div
            id="systemSectionDiv"
            className="min-h-screen w-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-10"
            initial={{ opacity: 0, y: 50 }} // Départ avec un léger déplacement vers le bas
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }} // Montée et descente
            transition={{ duration: 1, ease: "easeInOut" }} // Durée et transition fluide
        >
            <h3 className="text-xl sm:text-2xl md:text-4xl font-semibold text-center mb-4 sm:mb-6">
                Système
            </h3>
            <Image
                src={mars}
                alt="Mars"
                className="object-contain max-h-[30vh] sm:max-h-[40vh] md:max-h-[50vh] w-auto mb-4"
            />
            <SystemDiv />
        </motion.div>
    );
}