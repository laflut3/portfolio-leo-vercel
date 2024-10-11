import React, { useEffect, useState } from 'react';
import { FaUserCircle } from "react-icons/fa";
import Link from 'next/link';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const MenuBurger: React.FC<SidebarProps> = ({ isOpen, onClose }) => {

    const [isVisible, setIsVisible] = useState(false);
    const [shouldRender, setShouldRender] = useState(isOpen);

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
            }, 500); // Plus long pour donner le temps de voir l'animation
            return () => clearTimeout(timeout);
        }
    }, [isOpen]);

    if (!shouldRender) return null;

    const menuItems = [
        { label: 'Accueil', href: '/' },
        { label: 'Produits', href: '/products' },
        { label: 'A propos', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Profil', href: '/profile', icon: FaUserCircle },
    ];

    return (
        <div
            className={`absolute top-0 right-0 min-h-screen h-full w-96 bg-white shadow-xl transform transition-transform ease-in-out duration-500 z-50 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}
            style={{ maxHeight: '100vh', transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out' }}
        >
            {/* Bouton pour fermer */}
            <button onClick={onClose} className="p-4 self-end">
                <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

            {/* Menu déroulant */}
            <nav className="flex-grow flex flex-col justify-center items-center space-y-8">
                {menuItems.map((item, index) => (
                    <Link key={index} href={item.href}>
                        <div
                            className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer rounded text-xl transition-colors duration-200 ease-in-out opacity-0 transform translate-y-10"
                            style={{
                                transitionDelay: `${index * 100}ms`,
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translate-y-0' : 'translate-y-10',
                            }}
                        >
                            {item.icon && <item.icon className="inline-block mr-2" />}
                            {item.label}
                        </div>
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default MenuBurger;
