import Image from "next/image";
import iut from "@images/IUT/logoIUT.png";
import univ from "@images/IUT/logoUniv.png";
import BackEtoile from "@/components/utils/BackEtoile";
import React from "react";

export default function ButSection() {
    return (
        <section
            className="relative min-h-screen bg-black w-full flex flex-col items-center justify-center px-4 lg:px-8 overflow-hidden mt-16">
            <BackEtoile/>

            <div className="flex flex-col items-center w-full max-w-6xl space-y-12">
                {/* Titre */}
                <h2 className="text-4xl lg:text-6xl font-extrabold text-white text-center mb-8">
                    BUT Informatique
                </h2>

                {/* Contenu du texte */}
                <div
                    className="flex flex-col text-center text-gray-300 text-lg lg:text-xl space-y-6 lg:space-y-8 leading-relaxed">
                    <p>
                        Le BUT Informatique est une formation en trois ans offerte par les Instituts Universitaires
                        de Technologie (IUT) en France.
                    </p>
                    <p>
                        Ce programme vise à former des professionnels polyvalents en informatique, couvrant des
                        domaines tels que la programmation, les réseaux, la sécurité, le développement web et la
                        gestion de projets.
                    </p>
                    <p>
                        Les étudiants ont l'opportunité d'acquérir de l'expérience en entreprise grâce à des stages
                        et de mettre en pratique leurs compétences lors de projets de fin d'études.
                    </p>
                    <p>
                        Les diplômés du BUT Informatique sont préparés à travailler dans divers domaines
                        informatiques, de la cybersécurité au développement de logiciels.
                    </p>
                    <p>
                        Cette formation les dote de solides compétences techniques et les rend aptes à relever les
                        défis de l'informatique en constante évolution.
                    </p>
                </div>

                {/* Logos */}
                <div className="flex justify-center space-x-8">
                    <Image src={univ} alt="Université"
                           className="w-24 lg:w-32 opacity-90 hover:opacity-100 transition-all duration-300"/>
                    <Image src={iut} alt="IUT Montpellier"
                           className="w-24 lg:w-32 bg-white rounded-full p-2 hover:scale-110 transition-transform duration-300"/>
                </div>
            </div>

            {/* Dégradés Orangés */}
            <div
                className="absolute top-10 left-20 w-32 h-32 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full blur-xl animate-pulse"></div>
            <div
                className="absolute bottom-10 right-20 w-40 h-40 bg-gradient-to-r from-red-500 to-orange-600 rounded-full blur-lg animate-spin-slow"></div>
        </section>
    );
}
