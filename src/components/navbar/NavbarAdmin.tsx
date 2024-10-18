"use client";
import { useState } from 'react';
import Image from 'next/image'

export default function NavbarAdmin() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
            <nav className="mt-2">
                <div className="name flex justify-between items-center w-full px-4 md:px-8">
                    <span className="flex items-center text-primary text-xl md:text-2xl">
                        ADMINISTRATEUR
                    </span>
                    <div className="flex items-center">
                        <button className="block md:hidden" onClick={toggleMenu}>
                            ☰
                        </button>
                        <div className="flex space-x-1 ml-4">
                            
                            <a  href='/' className="hidden md:flex items-center justify-center rounded-full w-40 h-10 text-center bg-secondary px-2">
                                Accueil
                            </a>
                            <button className="md:hidden rounded-full w-10 h-10 flex items-center justify-center bg-secondary">
                                <Image src="/assets/phone-icon.png" alt="Phone Icon" width={24} height={24} />
                            </button>
                        </div>
                    </div>  
                </div>
                {isMenuOpen && (
                    <div className="md:hidden flex flex-col items-start space-y-2 bg-black bg-opacity-90 text-primary p-4 absolute top-full left-0 w-full z-50">
                        <a href="/admin/home" className="block py-2">Situation Actuelle</a>
                        <a href="/admin/skills" className="block py-2">Compétences</a>
                        <a href="/admin/projects" className="block py-2">Projets</a>
                        <a href="/admin/contacts" className="block py-2">Contacts</a>
                        <a href="/" className="block py-2 bg-secondary">Accueil</a>
                    </div>
                )}
            </nav>
        </header>
    );
}
