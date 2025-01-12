"use client";

import React, { useState, useEffect } from 'react';
import SectionAdminProjects from '@/components/admin/Project/SectionAdminProjects';
import Loader from '@/components/utils/Loader';
import Image from "next/image";
import AdminSAESection from "@/components/admin/SAE/AdminSAESection";

const AdminPage: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true); // Gestion du chargement
    const [activeSection, setActiveSection] = useState<string | null>(null); // Gestion de la section active

    // Simulation du chargement
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Temps de chargement simulé (2 secondes)

        return () => clearTimeout(timer); // Nettoyage du timer
    }, []);

    // Fonction pour gérer le clic sur un bouton d'administration
    const handleClickSection = (section: string) => {
        setActiveSection(section);
    };

    const handleClickSAE = (section: string) => {
        setActiveSection(section);
    };

    // Fonction pour revenir au choix des sections à administrer
    const handleBackToAdminChoices = () => {
        setActiveSection(null);
    };

    // Affichage du loader tant que l'état "loading" est vrai
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader />
            </div>
        );
    }

    return (
        <main className="min-h-screen h-auto flex flex-col items-center justify-center">
            {/* Affichage des boutons de choix admin si aucune section n'est active */}
            {!activeSection && (
                <div className="w-full h-full flex justify-center space-x-4 mb-4">
                    <button
                        onClick={() => handleClickSection('projects')}
                        className="bg-secondary px-12 hover:bg-secondary-dark text-white font-bold py-2 rounded"
                    >
                        Projects
                    </button>
                    <button
                        onClick={() => handleClickSAE('SAE')}
                        className="bg-secondary px-12 hover:bg-secondary-dark text-white font-bold py-2 rounded"
                    >
                        SAE
                    </button>
                </div>
            )}

            {/* Affichage des sections en fonction de la section active */}
            {activeSection === 'projects' && (
                <div className="min-h-screen mx-auto p-8 mt-[5%] rounded-lg space-y-4">
                    <button
                        onClick={handleBackToAdminChoices}
                        className="mt-4 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                    >
                        Retour aux choix d&apos;administration
                    </button>
                    <SectionAdminProjects/>

                </div>
            )}
            {activeSection === 'SAE' && (
                <div className="min-h-screen mx-auto p-8 mt-[5%] rounded-lg space-y-4 w-full">
                    <button
                        onClick={handleBackToAdminChoices}
                        className="mt-4 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                    >
                        Retour aux choix d&apos;administration
                    </button>
                    <AdminSAESection/>
                </div>
            )}

            {/* Ajouter d'autres conditions pour d'autres sections ici */}
        </main>
    );
};

export default AdminPage;
