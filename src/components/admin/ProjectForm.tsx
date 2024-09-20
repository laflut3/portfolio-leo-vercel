import React, { useState, useEffect } from 'react';
import Image from "next/image";

interface ProjectFormProps {
    isEditMode: boolean;
    onSave: (formData: FormData) => void;
    project: Project | null;
}

interface Project {
    url: string;
    type: string;
    image?: File | null;
}

const ProjectForm: React.FC<ProjectFormProps> = ({ isEditMode, onSave, project }) => {
    const [formData, setFormData] = useState<Project>({ url: '', type: '', image: null });
    const [previewImage, setPreviewImage] = useState<string | null>(null); // Prévisualisation de l'image

    useEffect(() => {
        if (project) {
            setFormData({ url: project.url, type: project.type, image: null });
        } else {
            setFormData({ url: '', type: '', image: null });
        }
    }, [project]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setFormData((prevFormData) => ({ ...prevFormData, image: file }));
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setPreviewImage(reader.result as string); // Prévisualiser l'image choisie
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const form = new FormData();
        form.append('url', formData.url);
        form.append('type', formData.type);
        if (formData.image) {
            form.append('image', formData.image);
        }
        onSave(form);
    };

    return (
        <form onSubmit={handleSubmit} className="text-black mb-8">
            <input
                type="text"
                name="url"
                value={formData.url}
                onChange={handleInputChange}
                placeholder="URL du projet"
                className="border p-2 mb-2 w-full"
                required
            />
            <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                placeholder="Type du projet"
                className="border p-2 mb-2 w-full"
                required
            />
            <input
                type="file"
                name="image"
                onChange={handleFileChange}
                className="text-white border p-2 mb-2 w-full"
            />

            {/* Afficher l'image choisie */}
            {previewImage && (
                <div className="my-4">
                    <Image src={previewImage} alt="Image choisie" width={100} height={100} className="mb-2" />
                </div>
            )}

            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                {isEditMode ? 'Modifier le projet' : 'Ajouter le projet'}
            </button>
        </form>
    );
};

export default ProjectForm;
