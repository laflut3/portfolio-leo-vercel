"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import SiteCard from './SiteCard';
import FilterBar from './FilterBar';
import { getAllProjects } from '@/db/queries/select';

export default function ThirdSectionContainer() {
    const [projects, setProjects] = useState<{ id: number; title: string; url: string; image: string; type: string }[]>([]);
    const [filteredProjects, setFilteredProjects] = useState<{ id: number; title: string; url: string; image: string; type: string }[]>([]);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const projectsData = await getAllProjects();
                setProjects(projectsData);
                setFilteredProjects(projectsData); 
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

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

    const handleFilterChange = (type: string) => {
        if (type === "All") {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter(project => project.type === type));
        }
    };

    return (
        <section className="min-h-screen pt-8 flex flex-col items-center">
            <FilterBar onFilterChange={handleFilterChange} />
            <div className="relative w-full mt-4">
                <button
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full shadow-md z-10 hidden md:flex"
                    onClick={scrollLeft}
                >
                    <Image src="/assets/left-icon.svg" alt="Scroll left" width={24} height={24} />
                </button>
                <div
                    className="overflow-x-auto whitespace-nowrap scroll-smooth"
                    ref={scrollContainerRef}
                >
                    <div className="flex space-x-4 px-4 items-center justify-center">
                        {filteredProjects.map(project => (
                            <div key={project.id} className="flex-shrink-0 w-[300px] h-[300px]">
                                <SiteCard
                                    id={project.id}
                                    title={project.title}
                                    url={project.url}
                                    image={project.image}
                                    type={project.type}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full shadow-md z-10 hidden md:flex"
                    onClick={scrollRight}
                >
                    <Image src="/assets/right-arrow-icon.svg" alt="Scroll right" width={24} height={24} />
                </button>
            </div>
        </section>
    );
}
