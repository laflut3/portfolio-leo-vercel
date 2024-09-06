"use client";
import React, {useState, useEffect} from "react";
import Image from "next/image";
import {useSession} from 'next-auth/react';
import Link from "next/link";
import {AiOutlineUser} from "react-icons/ai";

export default function Navbar() {
    const [isBlurred, setIsBlurred] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {data: session} = useSession();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition > 50) {
                setIsBlurred(true);
            } else {
                setIsBlurred(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavClick = (targetId: string) => {
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth",
            });
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isBlurred ? 'bg-black bg-opacity-50 backdrop-blur-md pb-2' : 'bg-transparent'
            }`}
        >
            <nav className="mt-2">
                <div className="name flex justify-between items-center w-full px-4 md:px-8">
                <span className="flex items-center text-primary text-xl md:text-2xl">
                    LEO TORRES
                    <Image
                        src='/assets/france-icon.jpg'
                        alt='France Icon' width={20} height={20}
                        style={{objectFit: 'contain'}}/>
                </span>
                    <div className="flex items-center">
                        <div className="hidden lg:flex">
                            <ul className="flex justify-between w-full items-center space-x-4 text-primary">
                                <li onClick={() => handleNavClick("top")}>Accueil</li>
                                <li onClick={() => handleNavClick("skills")}>Compétences</li>
                                <li onClick={() => handleNavClick("projects")}>Projets</li>
                                <li onClick={() => handleNavClick("company")}>Mon entreprise</li>
                                {!session?.user ? (
                                    <li>
                                        <Link
                                            href="/login"
                                        >
                                            Se connecter
                                        </Link>
                                    </li>
                                ) : (
                                    <></>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className={"flex"}>
                        <button className="block lg:hidden" onClick={toggleMenu}>
                            ☰
                        </button>

                        <div className="flex space-x-1 ml-4">
                            {session?.user ? (
                                <Link href="/profile"
                                      className="bg-secondary text-primary rounded-xl px-4 py-2 flex items-center">
                                    <AiOutlineUser size={35}/>
                                </Link>
                            ) : (
                                <></>
                            )}
                            <a
                                href="https://www.linkedin.com/in/leo-torres-804687264/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-tertiary border border-black w-10 h-10 flex items-center justify-center"
                            >
                                <Image src='/assets/linkedin-icon.svg' alt='linkedin icon' width={30} height={30}
                                       style={{objectFit: 'contain'}}/>
                            </a>
                            <a
                                href="https://github.com/laflut3/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-tertiary border border-black w-10 h-10 flex items-center justify-center"
                            >
                                <Image src='/assets/github-icon.svg' alt='github icon' width={30} height={30}
                                       style={{objectFit: 'contain'}}/>
                            </a>
                            <a
                                href="https://www.instagram.com/le0_trs/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-tertiary border border-black w-10 h-10 flex items-center justify-center"
                            >
                                <Image src='/assets/insta-icon.png' alt='instagram icon' width={30} height={30}
                                       style={{objectFit: 'contain'}}/>
                            </a>
                            <button
                                className="hidden md:flex items-center justify-center rounded-full w-40 h-10 text-center bg-secondary px-2"
                                onClick={() => handleNavClick("contactUs")}>
                                Nous connecter
                            </button>
                            <button
                                className="md:hidden rounded-full w-10 h-10 flex items-center justify-center bg-secondary"
                                onClick={() => handleNavClick("contactUs")}
                            >
                                <Image src="/assets/phone-icon2.png" alt="Phone Icon" width={24} height={24}
                                       style={{objectFit: 'contain'}}/>
                            </button>
                        </div>
                    </div>
                </div>
                {isMenuOpen && (
                    <div
                        className="md:hidden flex flex-col items-start space-y-2 bg-black bg-opacity-90 text-primary p-4 absolute top-full left-0 w-full z-50">
                        <a href="#" className="block py-2" onClick={() => handleNavClick("top")}>Accueil</a>
                        <a href="#" className="block py-2" onClick={() => handleNavClick("skills")}>Compétences</a>
                        <a href="#" className="block py-2" onClick={() => handleNavClick("projects")}>Projets</a>
                        <a href="#" className="block py-2" onClick={() => handleNavClick("company")}>Mon entreprise</a>
                    </div>
                )}
            </nav>
        </header>
    );
}