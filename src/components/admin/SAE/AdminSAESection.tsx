'use client'

import {useState, useEffect, ChangeEvent, FormEvent} from "react";
import SAEItem from "@/components/admin/SAE/SAEItem";

interface Project {
    _id: string;
    titre: string;
    descriptionGenerale: string;
    imageGenerale: ArrayBuffer; // Utilisation de ArrayBuffer pour correspondre au Buffer
    lien: string;
    type: string;
    annee?: string;
    semestre?: string;
    note?: number;
}

export default function AdminSAESection() {
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
    const [projects, setProjects] = useState<Project[]>([]);
    const [editingProject, setEditingProject] = useState<Project | null>(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [newImage, setNewImage] = useState<File | null>(null);


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
        if (!editingProject) return;
        const { name, value, files } = e.target as HTMLInputElement;
        if (name === 'imageGenerale' && files?.length) {
            setNewImage(files[0]);
        } else {
            setEditingProject({ ...editingProject, [name]: value });
        }
    };

    const handleNewInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, files } = e.target as HTMLInputElement;

        if (name === 'imageGenerale' && files?.length) {
            setNewProject((prev) => ({ ...prev, imageGenerale: files[0] })); // Met à jour le fichier
        } else {
            setNewProject((prev) => ({ ...prev, [name]: value })); // Met à jour les autres champs
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

    const handleDelete = async (id: string) => {
        const response = await fetch(`/api/SAE/${id}`, {method: 'DELETE'});
        if (response.ok) {
            setProjects((prev) => prev.filter((project) => project._id !== id));
        }
    };

    const handleEditSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!editingProject) return;

        try {
            const formData = new FormData();
            formData.append('titre', editingProject.titre);
            formData.append('descriptionGenerale', editingProject.descriptionGenerale);
            formData.append('lien', editingProject.lien);
            formData.append('type', editingProject.type);
            if (editingProject.annee) formData.append('annee', editingProject.annee);
            if (editingProject.semestre) formData.append('semestre', editingProject.semestre);
            if (editingProject.note !== undefined) formData.append('note', editingProject.note.toString());
            if (newImage) formData.append('imageGenerale', newImage);

            const response = await fetch(`/api/SAE/${editingProject._id}`, {
                method: 'PATCH',
                body: formData,
            });

            if (!response.ok) throw new Error('Erreur lors de la modification du projet');
            setIsPopupOpen(false);
            setEditingProject(null);
            fetchProjects();
        } catch (err) {
            console.error(err);
            setError('Erreur lors de la modification du projet.');
        }
    };


    const handleEditClick = (project: Project) => {
        setEditingProject(project);
        setNewImage(null);
        setIsPopupOpen(true);
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
                                onChange={handleNewInputChange}
                                className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="descriptionGenerale" className="block font-medium mb-2">Description
                                Générale</label>
                            <textarea
                                id="descriptionGenerale"
                                name="descriptionGenerale"
                                value={newProject.descriptionGenerale}
                                onChange={handleNewInputChange}
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
                                onChange={handleNewInputChange}
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
                                onChange={handleNewInputChange}
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
                                onChange={handleNewInputChange}
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
                                        onChange={handleNewInputChange}
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
                                        onChange={handleNewInputChange}
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
                                        onChange={handleNewInputChange}
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
                ) : (
                    <ul className="space-y-8">
                        {projects.map((project) => (
                            <SAEItem
                                key={project._id}
                                project={project}
                                onDelete={handleDelete}
                                onEdit={handleEditClick}
                            />
                        ))}
                    </ul>
                )}
            </div>
            {isPopupOpen && editingProject && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-gray-800 p-6 rounded-lg max-w-md w-full shadow-lg">
                        <h2 className="text-2xl font-bold mb-4 text-white">Modifier le projet</h2>
                        <form onSubmit={handleEditSubmit}>
                            <div>
                                <label htmlFor="titre" className="block font-medium text-white mb-2">Titre</label>
                                <input
                                    type="text"
                                    id="titre"
                                    name="titre"
                                    value={editingProject.titre}
                                    onChange={handleInputChange}
                                    className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="descriptionGenerale" className="block font-medium text-white mb-2">
                                    Description Générale
                                </label>
                                <textarea
                                    id="descriptionGenerale"
                                    name="descriptionGenerale"
                                    value={editingProject.descriptionGenerale}
                                    onChange={handleInputChange}
                                    className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="lien" className="block font-medium text-white mb-2">Lien</label>
                                <input
                                    type="url"
                                    id="lien"
                                    name="lien"
                                    value={editingProject.lien}
                                    onChange={handleInputChange}
                                    className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="type" className="block font-medium text-white mb-2">Type de Projet</label>
                                <select
                                    id="type"
                                    name="type"
                                    value={editingProject.type}
                                    onChange={handleInputChange}
                                    className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                >
                                    <option value="universitaire">Universitaire</option>
                                    <option value="perso">Personnel</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="imageGenerale" className="block font-medium text-white mb-2">Nouvelle Image</label>
                                <input
                                    type="file"
                                    id="imageGenerale"
                                    name="imageGenerale"
                                    onChange={handleInputChange}
                                    className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    accept="image/*"
                                />
                            </div>
                            {editingProject.type === 'universitaire' && (
                                <>
                                    <div>
                                        <label htmlFor="annee" className="block font-medium text-white mb-2">Année</label>
                                        <select
                                            id="annee"
                                            name="annee"
                                            value={editingProject.annee || ''}
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
                                        <label htmlFor="semestre" className="block font-medium text-white mb-2">Semestre</label>
                                        <select
                                            id="semestre"
                                            name="semestre"
                                            value={editingProject.semestre || ''}
                                            onChange={handleInputChange}
                                            className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="">Sélectionner un semestre</option>
                                            <option value="S1">Semestre 1</option>
                                            <option value="S2">Semestre 2</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="note" className="block font-medium text-white mb-2">Note</label>
                                        <input
                                            type="number"
                                            id="note"
                                            name="note"
                                            value={editingProject.note || ''}
                                            onChange={handleInputChange}
                                            className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            min="0"
                                            max="20"
                                            step="0.1"
                                        />
                                    </div>
                                </>
                            )}
                            <div className="mt-4 flex justify-end gap-4">
                                <button
                                    type="button"
                                    className="py-2 px-4 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-400"
                                    onClick={() => setIsPopupOpen(false)}
                                >
                                    Annuler
                                </button>
                                <button
                                    type="submit"
                                    className="py-2 px-4 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500"
                                >
                                    Sauvegarder
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
}
