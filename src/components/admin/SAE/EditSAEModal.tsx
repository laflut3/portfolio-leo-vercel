import React, { useState } from 'react';

interface EditSAEItemModalProps {
    project: any;
    onClose: () => void;
    onUpdate: (id: string, updatedProject: any) => void;
}

const EditSAEModal: React.FC<EditSAEItemModalProps> = ({ project, onClose, onUpdate }) => {
    const [updatedProject, setUpdatedProject] = useState({
        ...project,
        imageGenerale: null, // Pour gérer la mise à jour de l'image
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, files } = e.target as HTMLInputElement;
        if (name === "imageGenerale" && files?.length) {
            setUpdatedProject({ ...updatedProject, [name]: files[0] });
        } else {
            setUpdatedProject({ ...updatedProject, [name]: value });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onUpdate(project._id, updatedProject);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full">
                <h2 className="text-2xl font-semibold text-white mb-4">Modifier le projet</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-white">Titre</label>
                        <input
                            type="text"
                            name="titre"
                            value={updatedProject.titre}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-gray-700 text-white"
                        />
                    </div>
                    <div>
                        <label className="block text-white">Description Générale</label>
                        <textarea
                            name="descriptionGenerale"
                            value={updatedProject.descriptionGenerale}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-gray-700 text-white"
                        ></textarea>
                    </div>
                    <div>
                        <label className="block text-white">Lien</label>
                        <input
                            type="text"
                            name="lien"
                            value={updatedProject.lien}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-gray-700 text-white"
                        />
                    </div>
                    <div>
                        <label className="block text-white">Type</label>
                        <select
                            name="type"
                            value={updatedProject.type}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-gray-700 text-white"
                        >
                            <option value="universitaire">Universitaire</option>
                            <option value="personnel">Personnel</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-white">Semestre</label>
                        <input
                            type="text"
                            name="semestre"
                            value={updatedProject.semestre || ""}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-gray-700 text-white"
                        />
                    </div>
                    <div>
                        <label className="block text-white">Note</label>
                        <input
                            type="number"
                            name="note"
                            value={updatedProject.note || ""}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-gray-700 text-white"
                        />
                    </div>
                    <div>
                        <label className="block text-white">Image Générale</label>
                        <input
                            type="file"
                            name="imageGenerale"
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-gray-700 text-white"
                            accept="image/*"
                        />
                    </div>
                    <div className="flex gap-4">
                        <button
                            type="submit"
                            className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-500"
                        >
                            Mettre à jour
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="py-2 px-4 bg-gray-600 text-white rounded hover:bg-gray-500"
                        >
                            Annuler
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditSAEModal;
