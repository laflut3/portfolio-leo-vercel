import {useState} from "react";

interface Project {
    id: string;
    category: string;
    title: string;
    description: string;
    note?: string;
}

const projects = {
    universitaire: {
        A1: {
            S1: [
                {
                    id: "sae1.1",
                    category: "SAE 1.x",
                    title: "SAE 1.1 - Implementation",
                    note: "12.5",
                    description: "Durant cette situation d'apprentissage et d'évaluation nous avons dû programmer, en groupe de deux personnes, une suite de méthodes, afin de recréer le jeux de société nommer « MasterMind », dans la classe principale du programme."
                },
                {
                    id: "sae1.2",
                    category: "SAE 1.x",
                    title: "SAE 1.2 - Comparaison d'algo",
                    note: "16",
                    description: "Durant cette situation d'apprentissage et d'évaluation nous avons dû programmer en groupe de deux personnes une suite de méthodes en lien avec les relations binaires. L’exercice est : dans une classe du même nom nous avons recomposé différents types de ces mêmes relationsissues de la classe principale."
                },
                {
                    id: "sae1.3",
                    category: "SAE 1.x",
                    title: "SAE 1.3 - Installation poste",
                    note: "12.672",
                    description: "Dans cette SAE nous avons appris, par groupe de deux personnes, ce qu’est un Dual Boot et une machine virtuelle grâce à des recherches (documentations). Nous avons par la suite défini quelle est la différence entre ces deux principes et dressé un compte rendu de nos recherches. Nous avons également rédigé une notice d’installation, en anglais, pour ces deux systèmes, avec un listing matériel et une installation de tous les logiciels annexes pour mener à bien tous les processus de l’installation. Pour conclure ce travail nous avons eu à installer ces deux systèmes en classe ceci suivi d’une soutenance orale qui vérifie si le travail a été effectué correctement"
                },
                {
                    id: "sae1.4",
                    category: "SAE 1.x",
                    title: "SAE 1.4 - Création BD",
                    note: "12.5",
                    description: "Dans cette SAE nous avons créé une Base de Données, par groupe de 3/4 personnes. Nous avons réalisé des requêtes en lien avec cette BD et nous avons répondu à certaines questions d’économie et de gestion"
                },
                {
                    id: "sae1.5",
                    category: "SAE 1.x",
                    title: "SAE 1.5 - Recueil de besoins",
                    note: "14.025",
                    description: "Dans cette SAE, divisé en 3 livrables, et fait en groupe de 3/4 personnes, nous avons dû créer le script d’une Escape Game et l’imager dans le livrable 1. Nous avons créé à partir de l’Escape Game d’un autre groupe un site web et imaginé les différentes salles pour le livrable 2. Enfin nous avons dû noter l’Escape Game du groupe qui a concrétisé notre projet pour le livrable 3"
                },
                {
                    id: "sae1.6",
                    category: "SAE 1.x",
                    title: "SAE 1.6 - Environnement éco",
                    note: "12.85",
                    description: "Dans cette SAE, composée de 3 livrables, nous devions effectuer une recherche documentaire approfondie sur une controverse sociotechnique, par groupe de 3/4 personnes. Nous avons identifié les enjeux, les acteurs, la chronologie et les ressources documentaires qui y sont associés.\n" +
                        "\n" +
                        "Livrable 1 : Document de synthèse sur la recherche documentaire (R1.11)\n" +
                        "Livrable 2 : Analyse de la controverse selon la méthode PESTEL (R1.08 et R1.09)\n" +
                        "Livrable 3 : Site Internet statique avec 4-5 pages (R1.02)"
                },
            ],

            S2: [
                {
                    id: "sae2.1",
                    category: "SAE 2.x",
                    title: "SAE 2.1 - Développement d'application",
                    note: "11.5",
                    description: "Durant cette SAE nous avons dû développer le jeu de plateau les aventuriers du rail. Afin de réaliser cette situation d'apprentissage et d'évaluation , qui est divisée en deux parties, nous avons dû nous servir des Ressources R2.01 Dev. Objets pour la première partie, R2.02 Dev. D’app. Avec IHM pour la deuxième partie, et enfin R2.03 qualité de Dev. Pour les deux parties."
                },
                {
                    id: "sae2.2",
                    category: "SAE 2.x",
                    title: "SAE 2.2 - Exploration algo",
                    note: "12.055",
                    description: "Durant cette situation d'apprentissage et d'évaluation nous avons dû programmer en groupe de deux personnes une suite de méthodes en lien avec les graphes simples et non orientés dans une classe du même nom afin de compléter la SAE 2.01 sur le jeux les Aventuriers du rail"
                },
                {
                    id: "sae2.3",
                    category: "SAE 2.x",
                    title: "SAE 2.3 - Installation Services réseau",
                    note: "15.44",
                    description: "Dans cette SAE, nous avons mené par groupe de 4 personnes des recherches sur des protocoles et des normes de service de persistance de données (base de données), de serveur http de pages web dynamiques et statiques et enfin de service de messagerie/mail. En parallèle de ce travail, nous avons mené une série de réunion afin de conduire le projet comme il se doit."
                },
                {
                    id: "sae2.4",
                    category: "SAE 2.x",
                    title: "SAE 2.4 - Exploitation BD",
                    note: "12.185",
                    description: "Dans cette SAE, qui était réalisé par groupe de 3/4 personnes (finalement seul car les membres de mon projet ont abbandonné cette SAE), nous avons créé un modèle EA à partir de fichier CSV. Nous avons ensuite réalisé le schéma relationnel et le script de création des tables de ce modèle EA et enfin nous avons fait un livrable de statistiques permettant de modéliser certaines données. Nous avons découvert à travers ce projet le logiciel DBeaver pour ajouter les données à partir des fichiers CSV dans les tables"
                },
                {
                    id: "sae2.5",
                    category: "SAE 2.x",
                    title: "SAE 2.5 - Gestion d'un projet",
                    note: "17.05",
                    description: "Dans cette SAE, réalisée par groupe de 3/4/5 personnes. Nous avons créé un Bar ESport. Pour cela, nous avons réalisé 4 missions distinctes qui sont :\n" +
                        "\n" +
                        "1. La première mission consiste à faire un listing de tous nos besoins de fonctionnement (matériel – personnel – immo. …)\n" +
                        "2. La seconde mission consiste à réaliser un GANT et un PERT du projet pour créer un planning des tâches afin de réaliser le projet.\n" +
                        "3. La troisième mission consiste à budgétiser l’ensemble du projet (comptabilité) et à faire un prévisionnel sur 1 an en calculant 4 à 5 amortissements des achats faits pour réaliser le projet.\n" +
                        "4. La dernière tâche consiste à synthétiser l’ensemble du projet à travers un cahier des charges et une synthèse."
                },
                {
                    id: "sae2.6",
                    category: "SAE 2.x",
                    title: "SAE 2.6 - Travail d'équipe",
                    note: "13.8",
                    description: "Cette SAE n'etait pas vraiment un projet. Elle consistait en quelques mots a noté les membres de son équipe de projet de communication (projet secondaire), Une realisation faite par groupe de 4 personnes. Ce projet secondaire avez pour but la conception et l'imagination d'un figma pour designer un site web pour une vente au enchere etudiante."
                },

            ],
        },
        A2: [
            {
                id: "sae3b",
                category: "SAE 3",
                title: "SAE 3B",
                notes: "14.625",
                description: "L'enjeu était d'assurer l'intégration de la manipulation des données tout en respectant des paradigmes de qualité, avec un accent particulier sur la sécurité. Ce processus a pris place sur une période de quatre mois, au cours de laquelle il a fallu mettre en œuvre des compétences techniques et méthodologiques pour atteindre les objectifs fixés."
            },
            {
                id: "stage",
                category: "Stage",
                title: "Stage 2ème Année",
                description: "Description du stage 2ème année"
            },
        ]
    },
    perso: [
        {
            id: "fleoweb",
            category: "Perso",
            title: "FLEO WEB",
            description: "Microentreprise de développement web"
        },
        {
            id: "noobsave",
            category: "Perso",
            title: "NOOB SAVE",
            description: "Application de sauvegarde automatisée"
        },
        {
            id: "l3management",
            category: "Perso",
            title: "L3 Management",
            description: "Projet universitaire et personnel"
        },
    ],
};

export default function ProjectSelecteur() {
    const [filter, setFilter] = useState<string>("all");
    const [semester, setSemester] = useState<string>("all");

    const filteredProjects = (): Project[] => {
        let result: Project[] = [];

        if (filter === "all") {
            result = [
                ...Object.values(projects.universitaire.A1)
                    .flatMap((sem) => sem), // Récupérer tous les projets des semestres A1
                ...projects.universitaire.A2, // Ajouter les projets d'A2 directement
                ...projects.perso, // Ajouter les projets personnels
            ];
        } else if (filter === "universitaire") {
            result = [
                ...Object.values(projects.universitaire.A1)
                    .flatMap((sem) => sem),
                ...projects.universitaire.A2,
            ];
        } else if (filter === "perso") {
            result = projects.perso;
        }

        if (semester !== "all" && filter === "universitaire") {
            // Vérifier si le filtre concerne un semestre spécifique dans A1
            result = projects.universitaire.A1[semester as keyof typeof projects.universitaire.A1] || [];
        }

        return result;
    };

    return (
        <section className="py-12 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white">
            <h2 className="text-3xl font-extrabold text-center text-yellow-500 mb-8 drop-shadow-lg">
                Projets
            </h2>

            {/* Filtres */}
            <div className="flex flex-col items-center space-y-4 mb-8">
                <div className="flex space-x-4">
                    <button
                        className={`px-4 py-2 rounded-lg shadow-md ${
                            filter === "all" ? "bg-yellow-500 text-black" : "bg-gray-800 hover:bg-gray-700"
                        }`}
                        onClick={() => {
                            setFilter("all");
                            setSemester("all");
                        }}
                    >
                        Tous
                    </button>
                    <button
                        className={`px-4 py-2 rounded-lg shadow-md ${
                            filter === "universitaire" ? "bg-yellow-500 text-black" : "bg-gray-800 hover:bg-gray-700"
                        }`}
                        onClick={() => {
                            setFilter("universitaire");
                            setSemester("all");
                        }}
                    >
                        Universitaire
                    </button>
                    <button
                        className={`px-4 py-2 rounded-lg shadow-md ${
                            filter === "perso" ? "bg-yellow-500 text-black" : "bg-gray-800 hover:bg-gray-700"
                        }`}
                        onClick={() => {
                            setFilter("perso");
                            setSemester("all");
                        }}
                    >
                        Personnel
                    </button>
                </div>

                {filter === "universitaire" && (
                    <div className="flex space-x-4">
                        <button
                            className={`px-4 py-2 rounded-lg shadow-md ${
                                semester === "S1" ? "bg-yellow-500 text-black" : "bg-gray-800 hover:bg-gray-700"
                            }`}
                            onClick={() => setSemester("S1")}
                        >
                            Semestre 1
                        </button>
                        <button
                            className={`px-4 py-2 rounded-lg shadow-md ${
                                semester === "S2" ? "bg-yellow-500 text-black" : "bg-gray-800 hover:bg-gray-700"
                            }`}
                            onClick={() => setSemester("S2")}
                        >
                            Semestre 2
                        </button>
                    </div>
                )}
            </div>

            {/* Boîtes des Projets */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects().map((project) => (
                    <div
                        key={project.id}
                        className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-yellow-500 transition-all duration-300"
                    >
                        <h3 className="text-xl font-semibold text-yellow-400 mb-2">{project.title}</h3>
                        <p className="text-gray-300">{project.description}</p>
                        {project.note && (
                            <p className="mt-2 text-sm text-gray-400">
                                <strong>Note :</strong> {project.note}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

