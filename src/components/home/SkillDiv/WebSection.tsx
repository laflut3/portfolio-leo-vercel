"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import WebDiv from "@/components/home/SkillDiv/skillUtils/WebDiv";
import mercury from '@/../public/assets/image/planete/mercure.png';

const WebSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isPageVisible, setIsPageVisible] = useState(true);

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

        const target = document.querySelector("#webDiv");
        if (target) {
            observer.observe(target);
        }

        return () => {
            if (target) observer.unobserve(target);
        };
    }, []);

    // Gérer le changement de visibilité de la page (quand l'utilisateur quitte l'écran)
    useEffect(() => {
        const handleVisibilityChange = () => {
            console.log(`Visibility State: ${document.visibilityState}`); // Debugging
            if (document.visibilityState === "hidden") {
                setIsPageVisible(false); // Cacher la div quand l'utilisateur quitte l'écran
            } else {
                setIsPageVisible(true); // Réafficher la div quand l'utilisateur revient
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);

    return (
        <motion.div
            id="webDiv"
            className="min-h-screen w-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-10"
            initial={{ opacity: 0, y: 50 }}  // Départ avec un léger déplacement vers le bas
            animate={{ opacity: isVisible && isPageVisible ? 1 : 0, y: isVisible && isPageVisible ? 0 : 50 }}  // L'effet de montée et descente
            transition={{ duration: 1, ease: "easeInOut" }}  // Durée et transition plus douces
        >
            <h3 className="text-xl sm:text-2xl md:text-4xl font-semibold text-center mb-4 sm:mb-6">
                Développement Web
            </h3>
            <Image
                src={mercury} // Assure-toi que le chemin de l'image est correct
                alt="Mercure"
                className="object-contain max-h-[30vh] sm:max-h-[40vh] md:max-h-[50vh] w-auto mb-4"
            />
            <WebDiv />
        </motion.div>
    );
};

export default WebSection;
