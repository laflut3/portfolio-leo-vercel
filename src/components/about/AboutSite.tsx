import Image from "next/image";

import next from '@/../public/assets/image/logoDev/web/nextjs.png'
import vercel from '@/../public/assets/image/logoDev/systeme/vercel.png'

export default function AboutSite() {
    return (
        <section id="aboutSite" className="relative min-h-screen bg-black w-full flex flex-col items-center justify-center px-4 lg:px-8 overflow-y-auto mt-16"> {/* Ajout de mt-16 */}
            <h2 className="text-3xl lg:text-6xl font-bold text-white mb-8 text-center">
                À propos de ce site
            </h2>

            {/* Logos */}
            <div className="p-4 flex w-full justify-center space-x-4 lg:space-x-12 mb-8">
                <Image src={next} alt="Next.js logo" className="h-auto w-1/4 md:w-1/6"/>
                <Image src={vercel} alt="Vercel logo" className="bg-white p-2 h-auto w-1/4 md:w-1/6 rounded-full"/>
            </div>

            {/* Text Content */}
            <div className="flex flex-col w-full p-5 text-center text-white space-y-6 lg:space-y-8">
                <p className="text-sm lg:text-lg leading-relaxed">
                    Ce site est un espace dédié à la présentation de mon parcours professionnel et académique.
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    En tant que futur professionnel dans le domaine de l'informatique, ce site constitue la vitrine
                    de tous mes projets, autant scolaires que personnels.
                </p>
                <p className="text-sm lg:text-lg leading-relaxed">
                    Il est programmé en Next.js et TypeScript, le design est majoritairement réalisé grâce à Tailwind CSS.
                    Certaines librairies telles que Framer Motion, GSAP, ou Three.js ont aidé à créer des éléments de design.
                    Enfin, la base de données des projets est stockée dans un cluster MongoDB et le site est hébergé sur Vercel.
                </p>
                <p className="text-sm lg:text-lg leading-relaxed">
                    Je vous invite à explorer les différentes pages de ce site pour en apprendre davantage sur
                    mon parcours et mes réalisations.
                </p>
                <p className="text-sm lg:text-lg leading-relaxed">
                    Merci de votre visite, et je vous souhaite une agréable découverte de mon Portfolio.
                </p>
            </div>
        </section>
    );
}
