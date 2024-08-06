"use client";
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { getAllProjects } from '@/db/queries/select';
import { createProject } from '@/db/queries/insert';
import { updateProject } from '@/db/queries/update';
import { deleteProject } from '@/db/queries/delete';

export default function ProjectsAdminPage() {
    const [projects, setProjects] = useState<{ id: number; title: string; url: string; image: string; type: string }[]>([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [newProject, setNewProject] = useState({ title: '', url: '', image: '', type: '' });
    const router = useRouter();
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkAuth = () => {
            if (typeof document !== 'undefined') {
                const authCookie = document.cookie.split('; ').find(row => row.startsWith('admin_auth='));
                if (!authCookie) {
                    router.push('/admin');
                }
            }
        };
        checkAuth();
    }, [router]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const projectsData = await getAllProjects();
                setProjects(projectsData);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    const handleAddProject = async () => {
        try {
            await createProject(newProject);
            setProjects([...projects, { ...newProject, id: projects.length + 1 }]); // Update with a placeholder ID
            setNewProject({ title: '', url: '', image: '', type: '' });
            setShowAddModal(false);
        } catch (error) {
            console.error('Error adding project:', error);
        }
    };

    const handleDeleteProject = async (id: number) => {
        try {
            await deleteProject(id);
            setProjects(projects.filter(project => project.id !== id));
        } catch (error) {
            console.error('Error deleting project:', error);
        }
    };

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    const ProjectCard = ({ id, title, url, image, type }: { id: number; title: string; url: string; image: string; type: string }) => {
        return (
            <div className="relative flex flex-col justify-between bg-tertiary rounded-lg items-center w-[250px] h-[180px] overflow-hidden shadow-lg mx-2">
                <div className="absolute top-2 left-2">
                    <Image src={image} alt={title} width={70} height={70} className="rounded-full" />
                </div>
                <div className="flex flex-col justify-center items-center w-full h-full p-4">
                    <p className="text-center text-gray-600">{type}</p>
                    <a href={url} className="text-blue-500 underline mt-2">{title}</a>
                </div>
                <div className="absolute bottom-2 right-2">
                    <button
                        onClick={() => handleDeleteProject(id)}
                        className="px-2 py-1 rounded-lg bg-secondary text-primary"
                    >
                        Supprimer
                    </button>
                </div>
            </div>
        );
    };

    return (
        <main className="flex flex-col items-center justify-center h-auto min-h-screen p-4">
            <h2 className="text-2xl mb-4">Projets :</h2>
            <button
                onClick={() => setShowAddModal(true)}
                className="bg-blue-500 text-primary px-4 py-2 rounded-lg mb-4"
            >
                Ajouter un projet +
            </button>

            <div className="relative flex items-center">
                {/* Button for scrolling left */}
                <button
                    className="absolute left-0 transform pr-3 mt-[-10px] rounded-full shadow-md z-10"
                    onClick={scrollLeft}
                >
                    <Image src="/assets/left-icon.svg" alt="Scroll left" width={24} height={24} />
                </button>

                {/* Scrollable container for projects */}
                <div className="flex overflow-x-auto whitespace-nowrap pb-4 px-8" ref={scrollContainerRef}>
                    {projects.map(project => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>

                <button
                    className="absolute right-0 transform pl-3 mt-[-10px] rounded-full shadow-md z-10"
                    onClick={scrollRight}
                >
                    <Image src="/assets/right-arrow-icon.svg" alt="Scroll right" width={24} height={24} />
                </button>
            </div>

            {showAddModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                        <h3 className="text-xl mb-4 text-center text-tertiary">Ajouter un projet</h3>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleAddProject();
                            }}
                        >
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1 text-tertiary" htmlFor="title">Titre</label>
                                <input
                                    id="title"
                                    type="text"
                                    value={newProject.title}
                                    onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                                    className="w-full border rounded-lg p-2 text-tertiary"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1 text-tertiary" htmlFor="url">URL</label>
                                <input
                                    id="url"
                                    type="text"
                                    value={newProject.url}
                                    onChange={(e) => setNewProject({ ...newProject, url: e.target.value })}
                                    className="w-full border rounded-lg p-2 text-tertiary"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1 text-tertiary" htmlFor="image">URL de l'image</label>
                                <input
                                    id="image"
                                    type="text"
                                    value={newProject.image}
                                    onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
                                    className="w-full border rounded-lg p-2 text-tertiary"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1 text-tertiary" htmlFor="type">Type</label>
                                <select
                                    id="type"
                                    value={newProject.type}
                                    onChange={(e) => setNewProject({ ...newProject, type: e.target.value })}
                                    className="w-full border rounded-lg p-2 text-tertiary"
                                    required
                                >
                                    <option value="" disabled>Sélectionnez un type</option>
                                    <option value="E-commerce">E-commerce</option>
                                    <option value="Vitrine">Vitrine</option>
                                    <option value="Portfolio">Portfolio</option>
                                </select>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <button
                                    type="submit"
                                    className="bg-secondary text-primary px-4 py-2 rounded-lg"
                                >
                                    Ajouter
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setShowAddModal(false)}
                                    className="bg-tertiary text-tertiary border px-4 py-2 rounded-lg"
                                >
                                    Annuler
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}


        </main>
    );
}
