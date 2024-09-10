import Image from "next/image";
import logo1 from "@/../public/assets/image/logoDev/git-icon.svg";
import logo2 from "@/../public/assets/image/logoDev/burp-icon.svg";
import logo3 from "@/../public/assets/image/logoDev/docker-icon.svg";
import logo4 from "@/../public/assets/image/logoDev/apache-icon.svg";
import logo5 from "@/../public/assets/image/logoDev/scrum-icon.svg";
import logo6 from "@/../public/assets/image/logoDev/oracle-server-icon.svg";
import logo7 from "@/../public/assets/image/logoDev/windows-server-icon.svg";
import logo8 from "@/../public/assets/image/logoDev/linux-icon.svg";
import logo9 from "@/../public/assets/image/logoDev/wireshark-icon.svg";
import React, {useEffect, useState} from "react";

interface Skill {
    id: number;
    title: string;
    content: string;
    image: string;
}

function SkillCard({title, content, image}: Skill) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative flex justify-center rounded-lg items-center w-[100px] h-[100px] overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`absolute flex justify-center items-center p-4 bg-secondary rounded-lg text-center transition-transform duration-300 ease-in-out
        ${isHovered ? 'translate-y-[-50%]' : 'translate-y-0'}`}
                style={{width: '100%', height: '100%'}}
            >
                <Image src={image} alt={title} width={80} height={80}/>
            </div>

            <div
                className={`absolute flex justify-center items-center bg-white border-2 rounded-lg border-black transition-opacity duration-300 ease-in-out
        ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                style={{width: '100%', height: '100%', top: 0, left: 0}}
            >
                <p className="text-tertiary text-center">{content}</p>
            </div>
        </div>
    );
}

export default function SkillSection() {


    return (
        <section id="skills" className="min-h-screen relative z-10 mt-[-15px] second-section">
            <div className="bg-tertiary py-12 w-full md:w-3/4 mx-auto flex flex-col items-center rounded-3xl">
                <h2 className="text-3xl md:text-4xl text-secondary font-aquire font-bold mb-4">Compétences</h2>
                <p className="mb-8 text-tertiary text-center w-full md:w-2/3">
                    Un aperçu de mon expertise dans le domaine :
                </p>
                <div className="skills flex flex-wrap justify-center gap-12">

                </div>
                <div className="tools pt-16 w-full md:w-3/4 mx-auto">
                    <h4 className="text-xl md:text-2xl text-tertiary font-normal">Outils :</h4>
                    <div className="flex flex-wrap items-start justify-start gap-4 pt-4 ml-14">
                        <Image src={logo1} alt="git icon" width={40} height={40} style={{objectFit: 'contain'}}/>
                        <Image src={logo2} alt="burp icon" width={40} height={40} style={{objectFit: 'contain'}}/>
                        <Image src={logo3} alt="docker icon" width={40} height={40} style={{objectFit: 'contain'}}/>
                        <Image src={logo4} alt="apache icon" width={40} height={40} style={{objectFit: 'contain'}}/>
                        <Image src={logo5} alt="scrum icon" width={40} height={40} style={{objectFit: 'contain'}}/>
                        <Image src={logo6} alt="oracle server icon" width={40} height={40}
                               style={{objectFit: 'contain'}}/>
                        <Image src={logo7} alt="windows server icon" width={40} height={40}
                               style={{objectFit: 'contain'}}/>
                        <Image src={logo8} alt="linux icon" width={40} height={40} style={{objectFit: 'contain'}}/>
                        <Image src={logo9} alt="wireshark icon" width={40} height={40} style={{objectFit: 'contain'}}/>
                    </div>
                </div>
                <div className="protocols pt-16 w-full md:w-3/4 mx-auto">
                    <h4 className="text-xl md:text-2xl text-tertiary font-normal">Protocoles :</h4>
                    <p className="text-tertiary text-center w-full pr-40 mt-2 md:w-3/4">
                        tcp/ip, POST, GET, DELETE, PUT, HEAD, csma/cd, DNS, DHCP, ARP, OSPF, UDP, Proxy
                    </p>
                </div>
            </div>
        </section>
    )
}