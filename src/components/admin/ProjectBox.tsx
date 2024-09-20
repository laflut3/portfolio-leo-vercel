import React from 'react';

interface ProjectBoxProps {
    project: any;
    onEdit: () => void;
    onDelete: () => void;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({ project, onEdit, onDelete }) => {
    return (
        <div className="border p-4 rounded shadow-md">
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
