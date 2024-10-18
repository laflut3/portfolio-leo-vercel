import Image from "next/image";
import iut from "@images/IUT/logoIUT.png"
import univ from "@images/IUT/logoUniv.png"

export default function ButSection() {
    return (
        <section
            className="relative min-h-screen bg-black w-full flex flex-col items-center justify-center px-4 lg:px-8 overflow-y-auto mt-16"> {/* Ajout de mt-16 */}
            <div className={"space-y-12"}>
                <div className={"flex flex-col space-y-8 text-center justify-center text-xl"}>
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
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Les étudiants ont l'opportunité d'acquérir de l'expérience en entreprise grâce à des stages
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        et de mettre en pratique leurs compétences lors de projets de fin d'études.
                    </p>
                    <p>
                        Les diplômés du BUT Informatique sont préparés à travailler dans divers domaines
                        informatiques, de la cybersécurité au développement de logiciels.
                    </p>
                    <p>
                        Cette formation les dote de solides compétences techniques et les rend aptes à relever les
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        défis de l'informatique en constante évolution.
                    </p>
                </div>
                <div className={"flex w-full space-x-6 justify-center"}>
                    <Image src={univ} alt={"univ"} className={"w-1/6"}/>
                    <Image src={iut} alt={"iut"} className={"w-1/6 rounded-full p-2"}/>
                </div>
            </div>
        </section>
    );
}