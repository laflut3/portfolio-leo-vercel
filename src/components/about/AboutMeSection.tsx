import { motion } from "framer-motion";
import React from "react";

export default function AboutMeSection() {
    return (
        <section className="relative h-screen bg-black overflow-hidden">
            <div className="absolute inset-0">
                {Array.from({length: 200}).map((_, index) => (
                    <span
                        key={index}
                        className="block rounded-full absolute bg-white opacity-80"
                        style={{
                            width: `${Math.random() * 3 + 1}px`,
                            height: `${Math.random() * 3 + 1}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                    ></span>
                ))}
            </div>
            <div className="absolute inset-0 flex justify-center items-center">
                <motion.div
                    className="text-yellow-500 text-center space-y-4 text-xl leading-relaxed w-3/4 max-w-2xl"
                    initial={{y: "100%"}}
                    animate={{y: "-100%"}}
                    transition={{duration: 30, ease: "linear", repeat: Infinity}}
                    style={{transform: "rotateX(25deg)", perspective: "400px"}}
                >
                    <p>Bonjour, je me nomme Léo Torres.</p>
                    <p>
                        Je suis né dans la magnifique région du Languedoc-Roussillon, plus précisément à
                        Montpellier, une ville riche en histoire et en culture. Mon parcours éducatif est marqué par
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        un engagement constant pour l'excellence, dans tout ce que j'entreprends.
                    </p>
                    <p>
                        Je suis une personne calme, bienveillante, sociable, rigoureuse, travailleuse et passionné.
                        Mais je possède quelques défauts. Effectivement, je suis aussi perfectionniste et pugnace.
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        J'aime quand les choses sont bien faites, ce qui me pousse à passer du temps sur des
                        détails. Je suis aussi une personne qui laisse très difficilement tomber.
                    </p>
                    <p>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Je tiens, au passage, à remercier mes deux frères, Achille et Maël, qui m'ont permis de
                        renforcer mes qualités. Je tiens aussi à remercier mes parents, ma mère, mon beau-père ainsi
                        que mon père, qui ont été des piliers dans mon éducation, dans ma vie professionnelle, et
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        l'apprentissage de mes passions.
                    </p>
                    <p>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Par ailleurs, mes passions sont diverses. Je suis passionné par l'astronomie et
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        l'astrophysique, le sport (musculation et escalade) et bien évidemment l'informatique à
                        laquelle je voue mon avenir.
                    </p>
                    <p>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Cette passion pour l'informatique représente, pour moi, bien plus que mon avenir. Elle
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        représente ce que j'aime faire, c'est une passion que j'ai travaillée à travers de nombreux
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        travaux. J'aime mon futur métier, car il représente aussi une partie de ma vie et
                        de ma jeunesse.
                    </p>
                    <p>
                        Pour finir je tiens à remercier toutes les personnes qui prendront le temps de lire ce texte
                        qui représente simplement un résumé très court de ma vie, et que cela vous poussera à en
                        apprendre plus sur moi via ce portfolio.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
