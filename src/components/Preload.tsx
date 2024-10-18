// components/Preloader.tsx
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import fleoLogo from "../../public/assets/image/fleo/fleo-logo.svg";
import rocketImage from "../../public/assets/image/designIcon/rocket-icon.png";
import BackEtoile from "@/components/utils/BackEtoile";

export default function Preloader() {
    // État pour contrôler la visibilité du préchargeur
    const [isPreloaderVisible, setIsPreloaderVisible] = useState(true);

    // États pour contrôler la séquence d'animation
    const [startRocketAnimation, setStartRocketAnimation] = useState(false);

    // MotionValues pour les animations
    const x = useMotionValue(0);

    // Dimensions
    const logoSize = 100;
    const rocketSize = 200; // Taille augmentée de la fusée
    const containerWidth = 500;
    const containerHeight = 200;

    // Calcul de la position de l'overlay pour révéler le texte
    const revealX = useTransform(x, [0, -300], [0, -containerWidth]);

    // Contrôles d'animation
    const logoControls = useAnimation();
    const preloaderControls = useAnimation();
    const contentControls = useAnimation();

    useEffect(() => {
        async function sequence() {
            // Démarrer l'animation du logo
            await logoControls.start({
                opacity: [0.5, 1, 0.5],
                scale: [0.8, 1.2, 0.8],
                rotate: [0, 360],
                x: -220,
                transition: {
                    duration: 2,
                    ease: "easeInOut",
                },
            });

            // Démarrer l'animation de la fusée
            setStartRocketAnimation(true);

            await new Promise((resolve) => setTimeout(resolve, 800));

            // Démarrer l'animation de déplacement du contenu vers le haut
            contentControls.start({
                y: -window.innerHeight,
                transition: {
                    duration: 2,
                    ease: "easeInOut",
                },
            });

            // Attendre la fin de l'animation
            await new Promise((resolve) => setTimeout(resolve, 2000));

            // Désactiver le préchargeur
            setIsPreloaderVisible(false);
        }

        sequence();
    }, [logoControls, contentControls]);

    if (!isPreloaderVisible) {
        return null; // Désactiver le préchargeur
    }

    // Variantes pour l'animation de la fusée
    const rocketVariants = {
        hidden: {
            y: 0, // Commence en bas du préchargeur
            rotate: -20,
        },
        visible: {
            y: -window.innerHeight, // Monte et sort par le haut de l'écran
            rotate: -20,
            transition: {
                duration: 3,
                ease: "easeInOut",
            },
        },
    };

    return (
        <div className="overflow-hidden fixed inset-0 z-50 w-full h-full">
            <motion.div
                className="relative w-full h-full flex items-center justify-center bg-black"
                animate={contentControls}
            >
                <BackEtoile/>

                {/* Conteneur pour le positionnement */}
                <div
                    className="relative"
                    style={{ width: containerWidth, height: containerHeight }}
                >
                    {/* Texte */}
                    <div
                        className="absolute"
                        style={{
                            width: containerWidth,
                            height: containerHeight,
                            top: 0,
                            left: 0,
                            overflow: "hidden",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                width: containerWidth,
                                height: containerHeight,
                                top: 0,
                                left: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <div
                                className="text-white text-3xl font-bold"
                                style={{
                                    position: "relative",
                                }}
                            >
                                LEO TORRES
                            </div>
                        </div>

                        {/* Overlay noir qui masque le texte */}
                        <motion.div
                            style={{
                                position: "absolute",
                                width: containerWidth,
                                height: containerHeight,
                                top: 0,
                                left: 0,
                                backgroundColor: "black",
                                x: revealX,
                            }}
                        />
                    </div>

                    {/* Animation du logo */}
                    <motion.div
                        className="absolute"
                        style={{
                            x,
                            top: (containerHeight - logoSize) / 2,
                            left: (containerWidth - logoSize) / 2,
                        }}
                        animate={logoControls}
                        initial={{ opacity: 0, scale: 0.8, x: 0 }}
                    >
                        <Image
                            src={fleoLogo}
                            alt="Loading"
                            width={logoSize}
                            height={logoSize}
                            className="object-contain"
                        />
                    </motion.div>
                </div>

                {/* Animation de la fusée */}
                <motion.div
                    className="absolute"
                    style={{
                        bottom: -300,
                        transform: "translateX(-50%)",
                    }}
                    variants={rocketVariants}
                    initial="hidden"
                    animate={startRocketAnimation ? "visible" : "hidden"}
                >
                    <Image
                        src={rocketImage}
                        alt="Rocket"
                        width={rocketSize}
                        height={rocketSize}
                        className="object-contain"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}
