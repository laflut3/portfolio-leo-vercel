// components/Preloader.tsx
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import fleoLogo from "../../../public/assets/image/logoDev/fleo-logo.svg";

import { Variants, Transition } from "framer-motion";

const logoVariants: Variants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
        opacity: [0.5, 1, 0.5],
        scale: [0.8, 1.2, 0.8],
        rotate: [0, 360],
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "loop" as "loop",
            ease: "easeInOut",
        },
    },
};

export default function Preloader() {
    return (
        <div className="fixed inset-0 z-50 flex items-center w-full max-w-screen justify-center bg-black">
            <motion.div
                className="flex items-center justify-center"
                variants={logoVariants}
                initial="initial"
                animate="animate"
            >
                <Image
                    src={fleoLogo}
                    alt="Loading"
                    width={100}
                    height={100}
                    className="object-contain"
                />
            </motion.div>
        </div>
    );
}