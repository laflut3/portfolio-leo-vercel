"use client";
import React, {useState, useEffect} from "react";
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

export default function Navbar() {
    const [isBlurred, setIsBlurred] = useState(false);
    const {data: session} = useSession();
    const router = useRouter();
    const [menuBurgerIsVisible, setMenuBurgerIsVisible] = useState<boolean>(false);


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

        if (window.location.pathname !== "/") {
            router.push("/");
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
                    <span className="flex items-center text-primary text-sm sm:text-lg md:text-2xl font-aquire">
                        LEO TORRES
                        <Image
                            src={france}
                            alt='France Icon'
                            width={20}
                            height={20}
                            style={{objectFit: 'contain'}}
                        />
                    </span>
                    <div className="hidden lg:flex space-x-4">
                        <ul className="flex space-x-4 text-primary items-center">
                            <li className="cursor-pointer" onClick={() => handleNavClick("top")}>Accueil</li>
                            <li className="cursor-pointer" onClick={() => handleNavClick("skills")}>Compétences</li>
                            <li className="cursor-pointer" onClick={() => handleNavClick("projects")}>Projets</li>
                            <li className="cursor-pointer" onClick={() => handleNavClick("company")}>Mon entreprise</li>
                            <li className="cursor-pointer" onClick={() => handleNavClick("contactUs")}>Contact</li>
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
