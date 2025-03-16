import {useState} from "react";

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

    const poursuite = `
        Actuellement étudiant en dernière année de BUT informatique parcours Déploiement d’Applications Communicantes et Sécurisées (DACS), j’ai effectué cette dernière année en alternance chez Crédit Agricole Technologies et Services. Cette expérience professionnelle en tant que développeur back-end Java Spring Boot m’a permis d’identifier mon objectif professionnel. Ma priorité absolue est de maintenir le lien avec le milieu professionnel, ce qui m'a poussé à cibler exclusivement des formations en alternance.

        À plus long terme, mon ambition est de devenir ingénieur DevOps, DevSecOps ou expert en cybersécurité afin d’acquérir une expertise complète dans la chaîne de développement et de sécurisation des applications. Les postes que je vise sont expert technique, leader d’équipe ou encore manager. À terme, un de mes objectifs serait de créer ma propre entreprise spécialisée dans l’accompagnement des organisations dans leur transformation DevOps et la sécurisation de leurs systèmes, réseau et personnel. Ce projet me motive à développer en continu de nouvelles compétences techniques, tout en cultivant un sens stratégique et une vision globale du marché.

        Afin d’en apprendre un peu plus sur les formations possibles dans cette voie, je me suis rendu au salon de l’étudiant à Montpellier où j’ai pu échanger avec un élève de l’INSA de Lyon (voir Annexe 1 : interview salon étudiant). Ces entretiens ont pu m'aider à choisir et cibler les écoles dans lesquelles j’aimerais aller, et donc dans mon choix d’intégrer une école d’ingénieur, tout en envisageant un Master en informatique comme solution alternative.

        Les spécialisations qui m'intéressent le plus sont DevOps et Cybersécurité. Je souhaite donc postuler pour des écoles proposant ce type de formations, notamment à travers les candidatures effectuées au CESI, à Polytech Montpellier (formation DO), à 3IL Rodez, et à l’IMT Alès.

        La faisabilité de ces formations est assurée grâce à la prolongation de mon alternance chez CA-TS pour une durée de 2 à 3 ans. Cela m’a été confirmé le 27/02/2025 par la personne chargée du recrutement de mon entreprise. Cela me garantit que l’alternance ne posera pas de problème.

        Si toutefois mes candidatures dans ces écoles d’ingénieurs n'aboutissent pas, j’ai envisagé deux Masters qui ont une grande valeur ajoutée professionnelle et technique :

        CNAM Montpellier, Master Cybersécurité : Cette formation spécialisée permettrait de consolider mes compétences en sécurité informatique tout en restant en alternance.

        Epitech, MSc en alternance : Ayant déjà été admis dans cette formation, elle constitue une solution intégrable. Sa pédagogie axée sur les projets pratiques et l’alternance garantit une continuité professionnelle et technique.

        En parallèle de l’acquisition de connaissances techniques, je souhaite également renforcer mes compétences humaines et mon savoir-être afin de devenir un professionnel complet. La collaboration, la communication efficace, la gestion du stress et la capacité à motiver une équipe sont autant d’aptitudes indispensables pour évoluer dans un environnement DevOps et sécuritaire. Je souhaite ainsi approfondir mon sens du leadership, mon adaptabilité, et ma faculté à résoudre les problèmes tout en restant à l’écoute des besoins de mon équipe. L’objectif est de devenir un acteur clé au sein d’une organisation, capable d’aligner les enjeux techniques et humains pour mener à bien des projets innovants.
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
                    className="relative bg-gradient-to-r from-gray-800 to-gray-700 text-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 justify-center">
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
                    className="relative bg-gradient-to-r from-gray-700 to-gray-800 text-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 justify-center">
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

                {/* Boîte 2 : Ma poursuite */}
                <div
                    className="relative bg-gradient-to-r from-gray-700 to-gray-800 text-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 justify-center">
                    <h3 className="text-2xl font-bold mb-4">Ma poursuite</h3>
                    <p className="line-clamp-3 text-gray-300">
                        Actuellement étudiant en dernière année de BUT informatique parcours Déploiement d’Applications Communicantes et Sécurisées (DACS), j’ai effectué cette dernière année en alternance
                    </p>
                    <button
                        onClick={() => toggleModal("Ma Poursuite")}
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
                    <div className="bg-gray-800 rounded-lg max-w-3xl max-h-[80vh] shadow-lg flex flex-col overflow-hidden">
                        <div className="p-4 bg-gray-900">
                            <h2 className="text-3xl font-bold text-yellow-500">
                                {selectedModal === "parcours" ? "Mon Parcours" : selectedModal === "biographie" ? "Biographie" : "Ma Poursuite"}
                            </h2>
                        </div>
                        <div className="text-gray-300 text-lg leading-relaxed whitespace-pre-line overflow-y-auto flex-grow p-8">
                            {selectedModal === "parcours" ? parcours : selectedModal === "biographie" ? biography : poursuite}
                        </div>
                        <div className="p-4 bg-gray-900">
                            <button
                                onClick={() => toggleModal(null)}
                                className="w-full bg-yellow-500 text-black text-sm font-semibold py-3 px-4 rounded-md shadow-md hover:bg-yellow-600 hover:shadow-lg transition-all duration-300"
                            >
                                Fermer
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
