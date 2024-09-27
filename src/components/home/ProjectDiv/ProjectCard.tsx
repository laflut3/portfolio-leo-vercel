import {IProject} from "@/types/IProject";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
    project: IProject;
}

const ProjectCard: React.FC<ProjectCardProps> = ({project}) => {
    const imageSrc = project.image
        ? `data:image/jpeg;base64,${Buffer.from(project.image.data).toString('base64')}`
        : "/default-image.jpg"; // Fallback si aucune image n'est disponible

    return (
        <Link href={project.url} passHref>
            <div
                className="flex flex-col justify-center text-center items-center border-2 border-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 w-full p-4">
                {project.image ? (
                    <Image
                        src={imageSrc}
                        alt={project.type}
                        className="object-cover"
                        width={200} // Ajuster la taille selon vos besoins
                        height={200}
                    />
                ) : (
                    <div className="w-full h-40 bg-gray-200 flex justify-center items-center">
                        <span className="text-gray-500">No Image Available</span>
                    </div>
                )}
                <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">{project.type}</h3>
                    <p className="text-gray-600 truncate">{project.url}</p>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
