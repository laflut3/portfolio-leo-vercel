"use client";
import React, {useState, useEffect, useRef} from "react";
import Image from "next/image";
import {useSession} from 'next-auth/react';
import {AiOutlineUser} from "react-icons/ai";
import {useRouter} from "next/navigation";

import france from "@/../public/assets/image/designIcon/france-icon.jpg";
import github from "@/../public/assets/image/reseauSociaux/github-icon.svg";
import linkedin from "@/../public/assets/image/reseauSociaux/linkedin-icon.svg";
import insta from "@/../public/assets/image/reseauSociaux/insta-icon.png";
import phone from "@/../public/assets/image/utils/phone-icon2.png";
import MenuBurger from "@/components/navbar/MenuBurger";
import {FaChevronRight} from "react-icons/fa";

export default function Navbar() {
    const [isBlurred, setIsBlurred] = useState(false);
    const {data: session} = useSession();
    const router = useRouter();
    const [menuBurgerIsVisible, setMenuBurgerIsVisible] = useState<boolean>(false);

    // États pour contrôler la visibilité des sous-menus
    const [isAccueilOpen, setIsAccueilOpen] = useState<boolean>(false);
    const [isAProposOpen, setIsAProposOpen] = useState<boolean>(false);
    const [isUniversiteOpen, setIsUniversiteOpen] = useState<boolean>(false);

    // Références pour détecter les clics en dehors des sous-menus
    const accueilRef = useRef<HTMLLIElement | null>(null);
    const aProposRef = useRef<HTMLLIElement | null>(null);
    const universiteRef = useRef<HTMLLIElement | null>(null);

    // Gestion des clics en dehors des sous-menus
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                accueilRef.current &&
                !accueilRef.current.contains(event.target as Node) &&
                isAccueilOpen
            ) {
                setIsAccueilOpen(false);
            }
            if (
                aProposRef.current &&
                !aProposRef.current.contains(event.target as Node) &&
                isAProposOpen
            ) {
                setIsAProposOpen(false);
            }
            if (
                universiteRef.current &&
                !universiteRef.current.contains(event.target as Node) &&
                isUniversiteOpen
            ) {
                setIsUniversiteOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isAccueilOpen, isAProposOpen, isUniversiteOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsBlurred(scrollPosition > 50);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleNavClick = (targetId: string) => {
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth",
            });
        }
    };

    const handleAcceuilNavClick = (targetId: string) => {
        handleNavClick(targetId);

        if (window.location.pathname !== "/") {
            router.push("/");
        }
    };

    const handleAboutNavClick = (targetId: string) => {
        handleNavClick(targetId);

        if (window.location.pathname !== "/about") {
            router.push("/about");
        }
    };

    const handleUnivNavClick = (targetId: string) => {
        handleNavClick(targetId);

        if (window.location.pathname !== "/univ") {
            router.push("/univ");
        }
    };


    const SignClick = () => {
        router.push("/sign");
    };

    const ProfileClick = () => {
        router.push("/profile");
    };

    const menuIsVisible = () => {
        setMenuBurgerIsVisible(true);
    }

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isBlurred ? 'bg-black bg-opacity-50 backdrop-blur-md pb-2' : 'bg-transparent'
            }`}
        >
            <nav className="mt-2">
                <div className="flex justify-between items-center w-full px-4 md:px-8">
                    <div className="flex">
                        <p className="flex items-center text-primary text-sm sm:text-lg md:text-2xl font-aquire pr-2">
                            LEO TORRES
                        </p>
                        <Image
                            src={france}
                            alt='France Icon'
                            width={20}
                            height={20}
                            style={{objectFit: 'contain'}}
                        />
                    </div>
                    <div className="hidden lg:flex space-x-6">
                        <ul className="flex text-primary items-center space-x-10">
                            {/* Accueil Submenu */}
                            <li className="relative cursor-pointer" ref={accueilRef}>
                                <button
                                    onClick={() => {
                                        setIsAccueilOpen(!isAccueilOpen);
                                        setIsAProposOpen(false);
                                        setIsUniversiteOpen(false);
                                    }}
                                    className="flex items-center space-x-1 focus:outline-none"
                                    aria-expanded={isAccueilOpen}
                                >
                                    <span>Accueil</span>
                                    <FaChevronRight
                                        className={`transform transition-transform duration-300 ${
                                            isAccueilOpen ? 'rotate-90' : ''
                                        }`}
                                    />
                                </button>
                                <ul
                                    className={`absolute w-48 ${
                                        isAccueilOpen
                                            ? 'opacity-100 pointer-events-auto scale-100'
                                            : 'opacity-0 pointer-events-none scale-95'
                                    } flex flex-col bg-black/80 backdrop-blur-md text-white space-y-2 shadow-lg mt-2 transform transition-all duration-300 ease-in-out text-start`}
                                >
                                    <li
                                        className="cursor-pointer hover:bg-white hover:text-black p-2 rounded w-full"
                                        onClick={() => handleAcceuilNavClick('top')}
                                    >
                                        <span className="block py-2">Introduction</span>
                                    </li>
                                    <li
                                        className="cursor-pointer hover:bg-white hover:text-black p-2 rounded w-full"
                                        onClick={() => handleAcceuilNavClick('skills')}
                                    >
                                        <span className="block py-2">Compétences</span>
                                    </li>
                                    <li
                                        className="cursor-pointer hover:bg-white hover:text-black p-2 rounded w-full"
                                        onClick={() => handleAcceuilNavClick('projects')}
                                    >
                                        <span className="block py-2">Projets</span>
                                    </li>
                                    <li
                                        className="cursor-pointer hover:bg-white hover:text-black p-2 rounded w-full"
                                        onClick={() => handleAcceuilNavClick('company')}
                                    >
                                        <span className="block py-2">Mon entreprise</span>
                                    </li>
                                    <li
                                        className="cursor-pointer hover:bg-white hover:text-black p-2 rounded w-full"
                                        onClick={() => handleAcceuilNavClick('contactUs')}
                                    >
                                        <span className="block py-2">Contact</span>
                                    </li>
                                </ul>
                            </li>

                            {/* À propos Submenu */}
                            <li className="relative cursor-pointer" ref={aProposRef}>
                                <button
                                    onClick={() => {
                                        setIsAProposOpen(!isAProposOpen);
                                        setIsAccueilOpen(false);
                                        setIsUniversiteOpen(false);
                                    }}
                                    className="flex items-center space-x-1 focus:outline-none"
                                    aria-expanded={isAProposOpen}
                                >
                                    <span>À propos</span>
                                    <FaChevronRight
                                        className={`transform transition-transform duration-300 ${
                                            isAProposOpen ? 'rotate-90' : ''
                                        }`}
                                    />
                                </button>
                                <ul
                                    className={`absolute w-48 ${
                                        isAProposOpen
                                            ? 'opacity-100 pointer-events-auto scale-100'
                                            : 'opacity-0 pointer-events-none scale-95'
                                    } flex flex-col bg-black/80 backdrop-blur-md text-white space-y-2 shadow-lg mt-2 transform transition-all duration-300 ease-in-out text-start`}
                                >
                                    <li
                                        className="cursor-pointer hover:bg-white hover:text-black p-2 rounded w-full"
                                        onClick={() => handleAboutNavClick('aboutSite')}
                                    >
                                        <span className="block py-2">de ce site</span>
                                    </li>
                                    <li
                                        className="cursor-pointer hover:bg-white hover:text-black p-2 rounded w-full"
                                        onClick={() => handleAboutNavClick('aboutMe')}
                                    >
                                        <span className="block py-2">de moi</span>
                                    </li>
                                </ul>
                            </li>

                            {/* Université Submenu */}
                            <li className="relative cursor-pointer" ref={universiteRef}>
                                <button
                                    onClick={() => {
                                        setIsUniversiteOpen(!isUniversiteOpen);
                                        setIsAccueilOpen(false);
                                        setIsAProposOpen(false);
                                    }}
                                    className="flex items-center space-x-1 focus:outline-none"
                                    aria-expanded={isUniversiteOpen}
                                >
                                    <span>Université</span>
                                    <FaChevronRight
                                        className={`transform transition-transform duration-300 ${
                                            isUniversiteOpen ? 'rotate-90' : ''
                                        }`}
                                    />
                                </button>
                                <ul
                                    className={`absolute w-48 ${
                                        isUniversiteOpen
                                            ? 'opacity-100 pointer-events-auto scale-100'
                                            : 'opacity-0 pointer-events-none scale-95'
                                    } flex flex-col bg-black/80 backdrop-blur-md text-white space-y-2 shadow-lg mt-2 transform transition-all duration-300 ease-in-out text-start`}
                                >
                                    <li
                                        className="cursor-pointer hover:bg-white hover:text-black p-2 rounded w-full"
                                        onClick={() => handleUnivNavClick('formation')}
                                    >
                                        <span className="block py-2">Ma formation</span>
                                    </li>
                                    <li
                                        className="cursor-pointer hover:bg-white hover:text-black p-2 rounded w-full"
                                        onClick={() => handleUnivNavClick('university')}
                                    >
                                        <span className="block py-2">Mes projets</span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center space-x-2">
                        <button className="block lg:hidden" onClick={menuIsVisible}>
                            ☰
                        </button>
                        {session?.user ? (
                            <button
                                className="flex items-center justify-center rounded-full bg-secondary p-2"
                                onClick={ProfileClick}
                            >
                                <AiOutlineUser size={30}/>
                            </button>
                        ) : (
                            <button
                                className="flex items-center justify-center rounded-full bg-secondary p-2"
                                onClick={SignClick}
                            >
                                Se connecter
                            </button>
                        )}
                        <div className="hidden lg:flex space-x-2">
                            <a
                                href="https://www.linkedin.com/in/leo-torres-804687264/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-tertiary border border-black w-10 h-10 flex items-center justify-center"
                            >
                                <Image
                                    src={linkedin}
                                    alt='linkedin icon'
                                    width={30}
                                    height={30}
                                    style={{objectFit: 'contain'}}
                                />
                            </a>
                            <a
                                href="https://github.com/laflut3/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-tertiary border border-black w-10 h-10 flex items-center justify-center"
                            >
                                <Image
                                    src={github}
                                    alt='github icon'
                                    width={30}
                                    height={30}
                                    style={{objectFit: 'contain'}}/>
                            </a>
                            <a
                                href="https://www.instagram.com/le0_trs/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-tertiary border border-black w-10 h-10 flex items-center justify-center"
                            >
                                <Image
                                    src={insta}
                                    alt='instagram icon'
                                    width={30}
                                    height={30}
                                    style={{objectFit: 'contain'}}
                                />
                            </a>
                        </div>
                        <button
                            className="lg:hidden rounded-full w-10 h-10 flex items-center justify-center bg-secondary"
                            onClick={() => handleNavClick("contactUs")}
                        >
                            <Image
                                src={phone}
                                alt="Phone Icon"
                                width={24}
                                height={24}
                                style={{objectFit: 'contain'}}
                            />
                        </button>
                    </div>
                </div>
                <MenuBurger isOpen={menuBurgerIsVisible} onClose={() => setMenuBurgerIsVisible(false)}/>
            </nav>
        </header>
    );
}
