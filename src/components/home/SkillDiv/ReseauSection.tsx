import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import jupiter from "@/../public/assets/image/planete/jupiter.png";
import ReseauDiv from "@/components/home/SkillDiv/skillUtils/RéseauProtocoleDiv";

export default function ReseauSection() {
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

        const target = document.querySelector("#reseauSectionDiv");
        if (target) {
            observer.observe(target);
        }

        return () => {
            if (target) observer.unobserve(target);
        };
    }, []);

    return (
        <motion.div
            id="reseauSectionDiv"
            className="min-h-screen w-screen flex flex-col justify-center items-center px-4 md:px-10"
            initial={{ opacity: 0, y: 50 }} // Départ avec un léger déplacement vers le bas
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }} // Montée et descente
            transition={{ duration: 1, ease: "easeInOut" }} // Durée et transition fluide
        >
            <h3 className="text-2xl md:text-4xl font-semibold text-center mb-4">Réseau et protocoles</h3>
            <Image
                src={jupiter}
                alt="Jupiter"
                className="object-contain max-h-[30vh] sm:max-h-[40vh] md:max-h-[50vh] w-auto mb-4"
            />
            <ReseauDiv />
        </motion.div>
    );
}
