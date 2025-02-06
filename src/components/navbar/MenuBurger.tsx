import React, { useEffect, useState } from 'react';
import { FaUserCircle, FaHome, FaUniversity, FaInfoCircle, FaEnvelope } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const MenuBurger: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);
    const [shouldRender, setShouldRender] = useState(isOpen);

    const handleNavClick = (targetId: string) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth",
            });
        }
    };

    const handlePageNavClick = (targetId: string, path: string) => {
        handleNavClick(targetId);
        if (window.location.pathname !== path) {
            router.push(path);
        }
    };

    useEffect(() => {
        if (isOpen) {
            setShouldRender(true);
            const timeout = setTimeout(() => {
                setIsVisible(true);
            }, 10);
            return () => clearTimeout(timeout);
        } else {
            setIsVisible(false);
            const timeout = setTimeout(() => {
                setShouldRender(false);
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [isOpen]);

    if (!shouldRender) return null;

    return (
        <div
            className={`fixed top-0 right-0 min-h-screen h-full w-96 bg-black text-white shadow-2xl transform transition-transform ease-in-out duration-500 z-50 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}
            style={{ backdropFilter: 'blur(10px)', transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out' }}
        >
            {/* Bouton pour fermer */}
            <button onClick={onClose} className="w-full p-8 self-end">
                <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

            {/* Barre de séparation */}
            <hr className="border-t mt-0 mb-4" />

            {/* Titre du menu */}
            <h1 className="text-4xl w-full font-bold text-center py-8">Menu</h1>

            {/* Menu déroulant */}
            <nav className="flex-grow flex flex-col justify-center text-center items-center space-y-8 text-xl">
                <details open className="w-full p-4 pt-2">
                    <summary className="cursor-pointer flex items-center space-x-2 text-xl font-semibold hover:text-gray-400 transition-colors">
                        <FaHome /> <span>Accueil</span>
                    </summary>
                    <ul className="space-y-3 mt-2">
                        <li className="cursor-pointer hover:bg-gray-800 p-2 rounded-md transition-all" onClick={() => handlePageNavClick('top', '/')}>
                            <span>Introduction</span>
                        </li>
                        <li className="cursor-pointer hover:bg-gray-800 p-2 rounded-md transition-all" onClick={() => handlePageNavClick('skills', '/')}>
                            <span>Compétences</span>
                        </li>
                        <li className="cursor-pointer hover:bg-gray-800 p-2 rounded-md transition-all" onClick={() => handlePageNavClick('projects', '/')}>
                            <span>Réalisations de Fleo</span>
                        </li>
                        <li className="cursor-pointer hover:bg-gray-800 p-2 rounded-md transition-all" onClick={() => handlePageNavClick('company', '/')}>
                            <span>Mon entreprise</span>
                        </li>
                        <li className="cursor-pointer hover:bg-gray-800 p-2 rounded-md transition-all" onClick={() => handlePageNavClick('contactUs', '/')}>
                            <span>Contact</span>
                        </li>
                    </ul>
                </details>

                <details className="w-full pt-2 p-4">
                    <summary className="cursor-pointer flex items-center space-x-2 text-xl font-semibold hover:text-gray-400 transition-colors">
                        <FaInfoCircle /> <span>A propos</span>
                    </summary>
                    <ul className="space-y-3 mt-2">
                        <li className="cursor-pointer hover:bg-gray-800 p-2 rounded-md transition-all" onClick={() => handlePageNavClick('aboutSite', '/about')}>
                            <span>De ce site</span>
                        </li>
                        <li className="cursor-pointer hover:bg-gray-800 p-2 rounded-md transition-all" onClick={() => handlePageNavClick('aboutMe', '/about')}>
                            <span>De moi</span>
                        </li>
                    </ul>
                </details>

                <details className="w-full pt-2 p-4">
                    <summary className="cursor-pointer flex items-center space-x-2 text-xl font-semibold hover:text-gray-400 transition-colors">
                        <FaUniversity /> <span>Université</span>
                    </summary>
                    <ul className="space-y-3 mt-2">
                        <li className="cursor-pointer hover:bg-gray-800 p-2 rounded-md transition-all" onClick={() => handlePageNavClick('formation', '/univ')}>
                            <span>Ma formation</span>
                        </li>
                        <li className="cursor-pointer hover:bg-gray-800 p-2 rounded-md transition-all" onClick={() => handlePageNavClick('university', '/univ')}>
                            <span>Mes projets</span>
                        </li>
                    </ul>
                </details>
            </nav>
        </div>
    );
};

export default MenuBurger;
