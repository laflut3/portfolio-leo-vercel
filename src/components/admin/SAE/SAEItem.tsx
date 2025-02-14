import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface SAEItemProps {
    project: {
        _id: string;
        titre: string;
        descriptionGenerale: string;
        imageGenerale: ArrayBuffer;
        lien: string;
        type: string;
        annee?: string;
        semestre?: string;
        note?: number;
    };
    onDelete: (id: string) => void;
    onEdit: (project: any) => void;
}

const SAEItem: React.FC<SAEItemProps> = ({ project, onDelete, onEdit }) => {
    const [image, setImage] = useState<string>('');

    useEffect(() => {
        if (project.imageGenerale) {
            const base64Image = `data:image/png;base64,${Buffer.from(
                project.imageGenerale
            ).toString('base64')}`;
            setImage(base64Image);
        }
    }, [project.imageGenerale]);

    return (
        <li className="bg-gray-700 p-6 rounded-lg shadow-md border border-gray-600 hover:border-blue-500 transition-all duration-300">
            <details>
                <summary className="cursor-pointer text-xl font-bold mb-4 text-blue-400">
                    {project.titre}
                </summary>
                <div className="mt-4 space-y-4">
                    <p className="text-gray-300">
                        <strong>Description :</strong> {project.descriptionGenerale}
                    </p>
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
                    {image && (
                        <div>
                            <Image
                                src={image}
                                alt={`${project.titre} image`}
                                width={150}
                                height={150}
                                className="rounded-lg shadow-md"
                            />
                        </div>
                    )}
                    <a
                        href={project.lien}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 underline hover:text-blue-300 mt-8"
                    >
                        Voir le projet
                    </a>
                </div>
            </details>
            <div className="mt-4 flex gap-4">
                <button
                    onClick={() => onDelete(project._id)}
                    className="py-2 px-4 bg-red-600 text-white rounded-lg shadow hover:bg-red-500"
                >
                    Supprimer
                </button>
                <button
                    onClick={() => onEdit(project)}
                    className="py-2 px-4 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500"
                >
                    Modifier
                </button>
            </div>
        </li>
    );
};

export default SAEItem;
