import React, { useState, useEffect, Suspense } from 'react';
import Loader from '@/components/utils/Loader';
import ProjectCard from './ProjectDiv/ProjectCard';
import { fetchProjects } from '@/services/api'; // Utilise axios maintenant
import { IProject } from "@/types/IProject";

const ProjectFilterBar = React.lazy(() => import('./ProjectDiv/ProjectFilterBar'));

const ProjectSection: React.FC = () => {
    const [filterType, setFilterType] = useState<string | null>(null);
    const [projects, setProjects] = useState<IProject[]>([]);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(typeof window !== 'undefined');

        const fetchData = async () => {
            try {
                const fetchedProjects = await fetchProjects();
                setProjects(fetchedProjects?.Projects || []); // Assurez-vous que les projets sont bien récupérés
            } catch (error) {
                console.error('Error fetching projects:', error);
                setProjects([]);
            }
        };

        fetchData();
    }, []);

    const handleFilterChange = (type: string) => setFilterType(type);
    const handleRemoveFilter = () => setFilterType(null);

    if (!isClient) return null;

    const filteredProjects = filterType
        ? projects.filter((project) => project.type === filterType)
        : projects;

    return (
        <section
            className="min-h-screen flex flex-col items-center mb-4 mt-4 pt-8 w-full"
            id={"projects"}
        >
            <h1 className="text-8xl p-6 mb-12 font-aquire">Mes projets</h1>
            <Suspense fallback={<Loader />}>
                <ProjectFilterBar onFilterChange={handleFilterChange} />
            </Suspense>
            {filterType && (
                <div className="flex justify-center mt-4 px-4">
                    <div className="flex items-center bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
                        <span>{filterType}</span>
                        <button
                            className="ml-2 text-gray-500 hover:text-gray-700"
                            onClick={handleRemoveFilter}
                        >
                            &#x2715;
                        </button>
                    </div>
                </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl mt-6 px-4">
                {Array.isArray(filteredProjects) && filteredProjects.length > 0 ? (
                    filteredProjects.map((project) => (
                        <ProjectCard key={project._id} project={project} />
                    ))
                ) : (
                    <p>No projects found</p>
                )}
            </div>
        </section>
    );
};

export default ProjectSection;
