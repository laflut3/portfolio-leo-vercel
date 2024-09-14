"use client"

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import terre from "@/../public/assets/image/planete/terre.png";
import BDDiv from "@/components/home/SkillDiv/skillUtils/BDDiv";

export default function BDDSection() {
    const [isVisible, setIsVisible] = useState(false);

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

        const target = document.querySelector("#bddSectionDiv");
        if (target) {
            observer.observe(target);
        }

        return () => {
            if (target) observer.unobserve(target);
        };
    }, []);

    return (
        <motion.div
            id="bddSectionDiv"
            className="min-h-screen w-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-10"
            initial={{ opacity: 0, y: 50 }} // Départ avec un léger déplacement vers le bas
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }} // Montée et descente
            transition={{ duration: 1, ease: "easeInOut" }} // Durée et transition fluide
        >
            <h3 className="text-xl sm:text-2xl md:text-4xl font-semibold text-center mb-4 sm:mb-6">
                Base de données
            </h3>
            <Image
                src={terre}
                alt="Terre"
                className="object-contain max-h-[30vh] sm:max-h-[40vh] md:max-h-[50vh] w-auto mb-4"
            />
            <BDDiv />
        </motion.div>
    );
}
