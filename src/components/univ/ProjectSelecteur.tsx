'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Project {
    _id: string;
    titre: string;
    descriptionGenerale: string;
    type: string;
    annee?: string;
    semestre?: string;
    note?: number;
}

export default function ProjectSelecteur() {
    const [filter, setFilter] = useState<string>('all'); // Filtre par type
    const [year, setYear] = useState<string>('all'); // Filtre par année
    const [semester, setSemester] = useState<string>('all'); // Filtre par semestre
    const [projects, setProjects] = useState<Project[]>([]); // Liste des projets
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const router = useRouter(); // Utilisé pour redirection

    useEffect(() => {
        fetchProjects();
    }, []);

    // Récupère les projets depuis l'API
    const fetchProjects = async () => {
        try {
            const response = await fetch('/api/SAE'); // Appel à l'API
            if (!response.ok) throw new Error('Erreur lors de la récupération des projets.');
            const data = await response.json();
            setProjects(data); // Stocke les projets récupérés
        } catch (err: any) {
            console.error(err);
            setError(err.message || 'Erreur inattendue.');
        } finally {
            setLoading(false);
        }
    };

    // Applique les filtres successivement
    const filteredProjects = (): Project[] => {
        if (!Array.isArray(projects)) return []; // Vérifie si les projets sont un tableau

        let result: Project[] = projects;

        // Filtre par type
        if (filter === 'universitaire') {
            result = result.filter((project) => project.type === 'universitaire');
        } else if (filter === 'perso') {
            result = result.filter((project) => project.type === 'perso');
        }

        // Filtre par année (si applicable)
        if (filter === 'universitaire' && year !== 'all') {
            result = result.filter((project) => project.annee === year);
        }

        // Filtre par semestre (si applicable)
        if (filter === 'universitaire' && year !== 'all' && semester !== 'all') {
            result = result.filter((project) => project.semestre === semester);
        }

        return result; // Retourne la liste filtrée
    };

    return (
        <section className="py-12 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white">
            <h2 className="text-3xl font-extrabold text-center text-yellow-500 mb-8 drop-shadow-lg">
                Projets
            </h2>

            {/* Filtres */}
            <div className="flex flex-col items-center space-y-4 mb-8">
                {/* Filtre par type */}
                <div className="flex space-x-4">
                    <button
                        className={`px-4 py-2 rounded-lg shadow-md ${
                            filter === 'all' ? 'bg-yellow-500 text-black' : 'bg-gray-800 hover:bg-gray-700'
                        }`}
                        onClick={() => {
                            setFilter('all');
                            setYear('all');
                            setSemester('all');
                        }}
                    >
                        Tous
                    </button>
                    <button
                        className={`px-4 py-2 rounded-lg shadow-md ${
                            filter === 'universitaire' ? 'bg-yellow-500 text-black' : 'bg-gray-800 hover:bg-gray-700'
                        }`}
                        onClick={() => {
                            setFilter('universitaire');
                            setYear('all');
                            setSemester('all');
                        }}
                    >
                        Universitaire
                    </button>
                    <button
                        className={`px-4 py-2 rounded-lg shadow-md ${
                            filter === 'perso' ? 'bg-yellow-500 text-black' : 'bg-gray-800 hover:bg-gray-700'
                        }`}
                        onClick={() => {
                            setFilter('perso');
                            setYear('all');
                            setSemester('all');
                        }}
                    >
                        Personnel
                    </button>
                </div>

                {/* Filtre par année (si type = universitaire) */}
                {filter === 'universitaire' && (
                    <div className="flex space-x-4 mb-4">
                        <button
                            className={`px-4 py-2 rounded-lg shadow-md ${
                                year === 'all' ? 'bg-yellow-500 text-black' : 'bg-gray-800 hover:bg-gray-700'
                            }`}
                            onClick={() => setYear('all')}
                        >
                            Toutes les Années
                        </button>
                        <button
                            className={`px-4 py-2 rounded-lg shadow-md ${
                                year === 'annee 1' ? 'bg-yellow-500 text-black' : 'bg-gray-800 hover:bg-gray-700'
                            }`}
                            onClick={() => setYear('annee 1')}
                        >
                            Année 1
                        </button>
                        <button
                            className={`px-4 py-2 rounded-lg shadow-md ${
                                year === 'annee 2' ? 'bg-yellow-500 text-black' : 'bg-gray-800 hover:bg-gray-700'
                            }`}
                            onClick={() => setYear('annee 2')}
                        >
                            Année 2
                        </button>
                        <button
                            className={`px-4 py-2 rounded-lg shadow-md ${
                                year === 'annee 3' ? 'bg-yellow-500 text-black' : 'bg-gray-800 hover:bg-gray-700'
                            }`}
                            onClick={() => setYear('annee 3')}
                        >
                            Année 3
                        </button>
                    </div>
                )}

                {/* Filtre par semestre (si année est sélectionnée) */}
                {filter === 'universitaire' && year !== 'all' && (
                    <div className="flex space-x-4">
                        <button
                            className={`px-4 py-2 rounded-lg shadow-md ${
                                semester === 'S1' ? 'bg-yellow-500 text-black' : 'bg-gray-800 hover:bg-gray-700'
                            }`}
                            onClick={() => setSemester('S1')}
                        >
                            Semestre 1
                        </button>
                        <button
                            className={`px-4 py-2 rounded-lg shadow-md ${
                                semester === 'S2' ? 'bg-yellow-500 text-black' : 'bg-gray-800 hover:bg-gray-700'
                            }`}
                            onClick={() => setSemester('S2')}
                        >
                            Semestre 2
                        </button>
                    </div>
                )}
            </div>

            {/* Boîtes des Projets */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {loading ? (
                    <p className="text-gray-400">Chargement...</p>
                ) : error ? (
                    <p className="text-red-500">{error}</p>
                ) : filteredProjects().length > 0 ? (
                    filteredProjects().map((project) => (
                        <div
                            key={project._id}
                            className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:shadow-xl hover:border-yellow-500 transition-all duration-300"
                        >
                            <h3 className="text-xl font-semibold text-yellow-400 mb-4">{project.titre}</h3>
                            <p className="text-gray-300 mb-4">{project.descriptionGenerale}</p>
                            {project.note && (
                                <p className="mt-2 text-sm text-gray-400">
                                    <strong>Note :</strong> {project.note}
                                </p>
                            )}
                            <button
                                onClick={() => router.push(`/SAE/${project._id}`)}
                                className="mt-4 px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition duration-300"
                            >
                                Voir plus
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-400">Aucun projet trouvé.</p>
                )}
            </div>
        </section>
    );
}
