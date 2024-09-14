"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import arrow from "@/../public/assets/image/utils/special-arrow-icon.svg";
import soleil from "@/../public/assets/image/planete/soleil.png";

export default function SkillIntro() {
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

        const target = document.querySelector("#skillIntroDiv");
        if (target) {
            observer.observe(target);
        }

        return () => {
            if (target) observer.unobserve(target);
        };
    }, []);

    return (
        <motion.div
            id="skillIntroDiv"
            className="min-h-screen w-screen flex flex-col justify-center items-center"
            initial={{ opacity: 0, y: 50 }} // Départ avec un léger déplacement vers le bas
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }} // Montée et descente
            transition={{ duration: 1, ease: "easeInOut" }} // Durée et transition
        >
            <h2 className="flex text-2xl md:text-4xl xl:text-6xl text-center items-center">
                <p className={"hidden sm:block"}>Bienvenue dans mon système de compétences</p>
                <p className={"sm:hidden block"}>Mes compétences</p>
                <Image src={arrow} alt="Flèche spéciale" className={"h-auto ml-5"} />
            </h2>
            <Image
                src={soleil}
                alt="Soleil"
                className="object-contain max-h-[40vh] sm:max-h-[60vh] w-auto mb-4"
            />
        </motion.div>
    );
}
