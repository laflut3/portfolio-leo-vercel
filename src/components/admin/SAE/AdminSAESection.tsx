import { useState, useEffect, ChangeEvent, FormEvent } from "react";

interface Project {
    _id: string;
    titre: string;
    descriptionGenerale: string;
    imageGenerale: File | null;
    lien: string;
    type: string;
    annee?: string;
    semestre?: string;
    note?: number;
}

export default function AdminSAESection() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [newProject, setNewProject] = useState<{
        titre: string;
        descriptionGenerale: string;
        imageGenerale: File | null; // Accepte à la fois File et null
        lien: string;
        type: string;
        annee?: string;
        semestre?: string;
        note?: number;
    }>({
        titre: "",
        descriptionGenerale: "",
        imageGenerale: null, // Valeur initiale
        lien: "",
        type: "universitaire",
        annee: "",
        semestre: "",
        note: undefined,
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        setLoading(true);
        try {
            const response = await fetch("/api/SAE");
            if (!response.ok) throw new Error("Erreur lors du chargement des projets");
            const data = await response.json();
            setProjects(data);
        } catch (error) {
            console.error(error);
            setError("Impossible de charger les projets.");
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, files } = e.target as HTMLInputElement;
        if (name === "imageGenerale" && files?.length) {
            setNewProject((prev) => ({ ...prev, [name]: files[0] }));
        } else {
            setNewProject((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!newProject.titre || !newProject.descriptionGenerale || !newProject.imageGenerale || !newProject.lien) {
            setError("Tous les champs obligatoires doivent être remplis.");
            return;
        }

        const formData = new FormData();
        formData.append("titre", newProject.titre);
        formData.append("descriptionGenerale", newProject.descriptionGenerale);
        if (newProject.imageGenerale) formData.append("imageGenerale", newProject.imageGenerale);
        formData.append("lien", newProject.lien);
        formData.append("type", newProject.type);
        if (newProject.type === "universitaire") {
            formData.append("annee", newProject.annee || "");
            formData.append("semestre", newProject.semestre || "");
            if (newProject.note !== undefined) {
                formData.append("note", newProject.note.toString());
            }
        }

        try {
            const response = await fetch("/api/SAE", {
                method: "POST",
                body: formData,
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Erreur lors de l'ajout du projet.");
            }

            setNewProject({
                titre: "",
                descriptionGenerale: "",
                imageGenerale: null,
                lien: "",
                type: "universitaire",
                annee: "",
                semestre: "",
                note: undefined,
            });
            fetchProjects();
        } catch (error: any) {
            console.error("Erreur lors de la soumission:", error);
            setError(error.message || "Erreur inattendue.");
        }
    };

    return (
        <section className="p-6 text-white min-h-screen">
            <div className="p-3 rounded-2xl max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-center">Gestion des Projets SAE</h1>

                <div className="bg-gray-800 p-10 rounded-lg shadow-lg mb-12">
                    <h2 className="text-2xl font-semibold mb-6">Ajouter un nouveau projet</h2>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div>
                            <label htmlFor="titre" className="block font-medium mb-2">Titre</label>
                            <input
                                type="text"
                                id="titre"
                                name="titre"
                                value={newProject.titre}
                                onChange={handleInputChange}
                                className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="descriptionGenerale" className="block font-medium mb-2">Description Générale</label>
                            <textarea
                                id="descriptionGenerale"
                                name="descriptionGenerale"
                                value={newProject.descriptionGenerale}
                                onChange={handleInputChange}
                                className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            ></textarea>
                        </div>

                        <div>
                            <label htmlFor="imageGenerale" className="block font-medium mb-2">Image Générale</label>
                            <input
                                type="file"
                                id="imageGenerale"
                                name="imageGenerale"
                                onChange={handleInputChange}
                                className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                accept="image/*"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="lien" className="block font-medium mb-2">Lien</label>
                            <input
                                type="url"
                                id="lien"
                                name="lien"
                                value={newProject.lien}
                                onChange={handleInputChange}
                                className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="type" className="block font-medium mb-2">Type de Projet</label>
                            <select
                                id="type"
                                name="type"
                                value={newProject.type}
                                onChange={handleInputChange}
                                className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            >
                                <option value="universitaire">Universitaire</option>
                                <option value="perso">Personnel</option>
                            </select>
                        </div>

                        {newProject.type === "universitaire" && (
                            <>
                                <div>
                                    <label htmlFor="annee" className="block font-medium mb-2">Année</label>
                                    <select
                                        id="annee"
                                        name="annee"
                                        value={newProject.annee}
                                        onChange={handleInputChange}
                                        className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">Sélectionner une année</option>
                                        <option value="annee 1">Année 1</option>
                                        <option value="annee 2">Année 2</option>
                                        <option value="annee 3">Année 3</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="semestre" className="block font-medium mb-2">Semestre</label>
                                    <select
                                        id="semestre"
                                        name="semestre"
                                        value={newProject.semestre}
                                        onChange={handleInputChange}
                                        className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">Sélectionner un semestre</option>
                                        <option value="S1">Semestre 1</option>
                                        <option value="S2">Semestre 2</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="note" className="block font-medium mb-2">Note</label>
                                    <input
                                        type="number"
                                        id="note"
                                        name="note"
                                        value={newProject.note || ""}
                                        onChange={handleInputChange}
                                        className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        min="0"
                                        max="20"
                                        step="0.1"
                                    />
                                </div>
                            </>
                        )}

                        <button
                            type="submit"
                            className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-md transition duration-300"
                        >
                            Ajouter le projet
                        </button>
                    </form>
                </div>
            </div>

            <div className="bg-gray-800 p-10 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-6">Projets existants</h2>
                {loading ? (
                    <p className="text-gray-400">Chargement...</p>
                ) : projects.length > 0 ? (
                    <ul className="space-y-8">
                        {projects.map((project) => (
                            <li
                                key={project._id}
                                className="bg-gray-700 p-6 rounded-lg shadow-md border border-gray-600 hover:border-blue-500 transition-all duration-300"
                            >
                                <details>
                                    <summary className="cursor-pointer text-xl font-bold mb-4 text-blue-400">
                                        {project.titre}
                                    </summary>
                                    <div className="mt-4 space-y-4">
                                        <p className="text-gray-300"><strong>Description
                                            :</strong> {project.descriptionGenerale}</p>
                                        {project.note !== undefined && (
                                            <p className="text-gray-300">
                                                <strong>Note :</strong> {project.note}
                                            </p>
                                        )}
                                        {project.annee && (
                                            <p className="text-gray-300">
                                                <strong>Année :</strong> {project.annee}
                                            </p>
                                        )}
                                        {project.semestre && (
                                            <p className="text-gray-300">
                                                <strong>Semestre :</strong> {project.semestre}
                                            </p>
                                        )}
                                        <p className="text-gray-300">
                                            <strong>Type :</strong> {project.type}
                                        </p>
                                        <a
                                            href={project.lien}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-400 underline hover:text-blue-300"
                                        >
                                            Voir le projet
                                        </a>
                                    </div>
                                </details>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-400">Aucun projet trouvé.</p>
                )}
            </div>

        </section>
    );
}
