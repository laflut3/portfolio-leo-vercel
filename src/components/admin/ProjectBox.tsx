import React from 'react';
import Image from "next/image";

interface ProjectBoxProps {
    project: any;
    onEdit: () => void;
    onDelete: () => void;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({project, onEdit, onDelete}) => {
    const imageSrc = project.image
        ? `data:image/jpeg;base64,${Buffer.from(project.image.data).toString('base64')}`
        : "/default-image.jpg"; // Image par défaut si pas d'image

    return (
        <div className="border p-4 rounded shadow-md">
            <div className={`flex justify-center items-center text-center`}>
                <Image src={imageSrc} alt={project.type} width={100} height={100} className="mb-2"/>
            </div>
            <h3 className="text-lg font-bold">{project.type}</h3>
            <p>{project.url}</p>
            <div className="flex space-x-2 mt-4">
                <button onClick={onEdit} className="bg-yellow-500 p-2 rounded text-white">
                    ✏️ Modifier
                </button>
                <button onClick={onDelete} className="bg-red-500 p-2 rounded text-white">
                    🗑️ Supprimer
                </button>
            </div>
        </div>
    );
};

export default ProjectBox;
