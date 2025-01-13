import { useState } from "react";

export default function AboutMore() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedModal, setSelectedModal] = useState<string | null>(null);

    const diplomas = [
        {
            title: "BIA",
            description: "Brevet d’Initiation à l’Aéronautique, Lycée Jean Jaurès, 2020 - 2021",
        },
        {
            title: "Bac STI2D",
            description: "Mention Bien, Lycée Jean Mermoz, 2021 - 2022",
        },
        {
            title: "DUT Informatique",
            description: "Diplôme Universitaire Technologique, IUT Montpellier, 2023 - 2024",
        },
        {
            title: "BUT Informatique",
            description: "En cours, Bac +3, IUT Montpellier, 2024 - 2025",
        },
        {
            title: "Licence 3 Management",
            description:
                "Double diplomation (Management, Technologies et Sciences), IAE Montpellier, 2024 - 2025",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % diplomas.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + diplomas.length) % diplomas.length);
    };

    const toggleModal = (modalName: string | null) => {
        setSelectedModal(modalName);
        setIsModalOpen(!!modalName);
    };

    const biography = `
        Bonjour, je me nomme Léo Torres.

        Je suis né dans la magnifique région du Languedoc-Roussillon, plus précisément à Montpellier, une ville riche en histoire et en culture. Mon parcours éducatif est marqué par un engagement constant pour l'excellence, dans tout ce que j'entreprends.

        Je suis une personne calme, bienveillante, sociable, rigoureuse, travailleuse et passionné. Mais je possède quelques défauts. Effectivement, je suis aussi perfectionniste et pugnace. J'aime quand les choses sont bien faites, ce qui me pousse à passer du temps sur des détails. Je suis aussi une personne qui laisse très difficilement tomber.

        Je tiens, au passage, à remercier mes deux frères, Achille et Maël, qui m'ont permis de renforcer mes qualités. Je tiens aussi à remercier mes parents, ma mère, mon beau-père ainsi que mon père, qui ont été des piliers dans mon éducation, dans ma vie professionnelle, et l'apprentissage de mes passions.

        Par ailleurs, mes passions sont diverses. Je suis passionné par l'astronomie et l'astrophysique, le sport (musculation et escalade) et bien évidemment l'informatique à laquelle je voue mon avenir.

        Cette passion pour l'informatique représente, pour moi, bien plus que mon avenir. Elle représente ce que j'aime faire, c'est une passion que j'ai travaillée à la longue de nombreux travaux. J'aime mon futur métier, car il représente aussi une partie de ma vie et de ma jeunesse.
    `;

    const parcours = `
        Pour commencer, j'ai suivi mes études au lycée Jean Jaurès pour mon année de seconde. J’y ai choisi l’option BIA que j’ai validée. Mon premier objectif était d’avoir des connaissances en aéronautique.

        J'ai ensuite choisi de me diriger vers une filière plus adaptée à mon profil... La STI2D (Science Technologique de l'Industrie et du Développement Durable), au sein du lycée Jean Mermoz à Montpellier. Cette expérience a été enrichissante, me permettant d'explorer les domaines de la technologie et du développement durable, qui m'ont passionné.

        J'ai décroché mon Bac technologique avec mention ; ce qui a renforcé ma détermination à persévérer dans le domaine de l'informatique, un domaine en constante évolution.

        Pour me permettre de faire grandir mon arbre de compétence dans le domaine qui me passionne, je suis allé en première année de BUT en informatique.

        Dans le cadre de mon projet professionnel personnalisé (PPP), j’ai réalisé l’interview d’un hacker éthique (pentester). Toutes les facettes de son métier me plaisent et ont conforté mon choix déjà bien défini.

        Par la suite durant les 4 derniers mois de ma formation, j'ai eu l'occasion d'intégrer Discomp Électronique pour un stage en réseau, système et sécurité pour améliorer le système d'information de l'entreprise.

        Actuellement en 3ÉME année de Bachelor Universitaire de Technologie (BUT) en informatique, mon choix de parcours s'est porté sur DACS (Déploiement d'Applications communicantes et sécurisées). Ce dernier me permet d’acquérir les connaissances nécessaires afin de travailler dans le domaine de la cybersécurité.
    `;

    return (
        <section className="py-12 px-6 text-center bg-gradient-to-b from-black via-gray-900 to-black text-white">
            <h2 className="text-4xl font-extrabold mb-6 text-yellow-500 drop-shadow-md">
                En savoir plus sur moi
            </h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed text-gray-300">
                Explorez mon parcours professionnel, mes compétences et mes réalisations.
            </p>

            {/* Grille des boîtes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {/* Boîte 1 : Mon Parcours */}
                <div
                    className="relative bg-gradient-to-r from-gray-800 to-gray-700 text-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <h3 className="text-2xl font-bold mb-4">Mon Parcours</h3>
                    <p className="line-clamp-3 text-gray-300">
                        Pour commencer, j'ai suivi mes études au lycée Jean Jaurès pour mon
                        année de seconde. J’y ai choisi l’option BIA que j’ai validée...
                    </p>
                    <button
                        onClick={() => toggleModal("parcours")}
                        className="mt-6 w-full bg-yellow-500 text-black text-sm font-semibold py-3 px-4 rounded-md shadow-md hover:bg-yellow-600 hover:shadow-lg transition-all duration-300"
                    >
                        Lire la suite
                    </button>
                </div>

                {/* Boîte 2 : Biographie */}
                <div
                    className="relative bg-gradient-to-r from-gray-700 to-gray-800 text-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <h3 className="text-2xl font-bold mb-4">Biographie</h3>
                    <p className="line-clamp-3 text-gray-300">
                        Bonjour, je me nomme Léo Torres. Je suis né dans la magnifique région
                        du Languedoc-Roussillon...
                    </p>
                    <button
                        onClick={() => toggleModal("biographie")}
                        className="mt-6 w-full bg-yellow-500 text-black text-sm font-semibold py-3 px-4 rounded-md shadow-md hover:bg-yellow-600 hover:shadow-lg transition-all duration-300"
                    >
                        Lire la suite
                    </button>
                </div>

                {/* Diplômes */}
                <div
                    className="relative bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <h3 className="text-2xl font-bold mb-4">Mes Diplômes</h3>
                    <div className="relative overflow-hidden">
                        <div className="text-center">
                            <h4 className="text-xl font-bold text-yellow-500">
                                {diplomas[currentSlide].title}
                            </h4>
                            <p className="text-gray-300 mt-2">{diplomas[currentSlide].description}</p>
                        </div>
                        <div className="flex justify-between mt-6">
                            <button
                                onClick={prevSlide}
                                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 shadow-md"
                            >
                                Précédent
                            </button>
                            <button
                                onClick={nextSlide}
                                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 shadow-md"
                            >
                                Suivant
                            </button>
                        </div>
                        <div className="flex justify-center mt-6 space-x-2">
                            {diplomas.map((_, index) => (
                                <span
                                    key={index}
                                    className={`w-4 h-4 rounded-full ${
                                        index === currentSlide ? "bg-yellow-500" : "bg-gray-500"
                                    }`}
                                ></span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-10 bg-blue-500 text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition-transform transform hover:scale-105"
            >
                Voir mon CV
            </a>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-gray-800 p-8 rounded-lg max-w-3xl shadow-lg">
                        <h2 className="text-3xl font-bold text-yellow-500 mb-4">
                            {selectedModal === "parcours" ? "Mon Parcours" : "Biographie"}
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                            {selectedModal === "parcours" ? parcours : biography}
                        </p>
                        <button
                            onClick={() => toggleModal(null)}
                            className="mt-6 w-full bg-yellow-500 text-black text-sm font-semibold py-3 px-4 rounded-md shadow-md hover:bg-yellow-600 hover:shadow-lg transition-all duration-300"
                        >
                            Fermer
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
