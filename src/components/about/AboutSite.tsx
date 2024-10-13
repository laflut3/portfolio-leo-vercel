import Image from "next/image";

import next from '@/../public/assets/image/logoDev/web/nextjs.png'
import vercel from '@/../public/assets/image/logoDev/systeme/vercel.png'

export default function AboutSite() {
    return (
        <section className="relative h-screen bg-black w-full flex flex-col items-center justify-center">
            <h2 className={"text-6xl"}>A propos de ce site</h2>
            <div className="p-6 flex w-full justify-center space-x-6">
                <Image src={next} alt={'next logo'} className={"w-[200px] h-auto"}/>
                <Image src={vercel} alt={'vercel logo'} className={"bg-white p-2 w-[200px] h-auto rounded-full"}/>
            </div>
            <div className="flex flex-col w-full justify-center text-center space-y-6">
                <p>
                    Ce site est un espace dédié à la présentation de mon parcours professionnel et
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    académique. En tant que future professionnel dans le domaine de l'informatique, ce site
                    constitue la vitrine de tous mes projets, autant scolaires que personnels.
                </p>
                <p>
                    Il est programmer en next.js et typescript, le design est fait majoritairement grâce à tailwind.
                    Certaine librairie tels que framer-motion, gsap, ou three.js on aider a faire quelque éléments de
                    design. Enfin la base de donnée de projet est sur dans une collection dans un cluster mongodb et le
                    site est héberger sur vercel.
                </p>
                <p>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Je vous invite à explorer les différentes pages de ce site pour en apprendre d'avantage sur
                    mon parcours et mes réalisations.
                </p>
                <p>
                    Merci de votre visite, et je vous souhaite une agréable découverte de mon Portfolio.
                </p>
            </div>
        </section>
    )
}