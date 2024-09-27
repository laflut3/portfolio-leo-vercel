"use client";

import React, {useEffect, useRef} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Image from 'next/image';

import arrow from '@/../public/assets/image/utils/special-arrow-icon.svg';

import ReseauDiv from "@/components/home/SkillDiv/skillUtils/RéseauProtocoleDiv";
import SkillIntro from "@/components/home/SkillDiv/SkillIntro";
import WebSection from "@/components/home/SkillDiv/WebSection";
import AppSection from "@/components/home/SkillDiv/AppSection";
import BDDSection from "@/components/home/SkillDiv/BDDSection";
import SystemeSection from "@/components/home/SkillDiv/SystemeSection";
import OutilsSection from "@/components/home/SkillDiv/OutilsSection";
import ManagementSection from "@/components/home/SkillDiv/ManagementSection";
import ReseauSection from "@/components/home/SkillDiv/ReseauSection";
import OtherOutilsSection from "@/components/home/SkillDiv/OtherOutilsSection";

function ScrollSection() {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            {
                translateX: 0,
            },
            {
                translateX: "-805vw",  // Adjust for the number of images (7 planets + earth)
                ease: "none",
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "9000 top",  // Adjust end based on scroll length needed
                    scrub: 0.6,
                    pin: true,
                },
            }
        );

        return () => {
            pin.kill();  // Clean up the animation on unmount
        };
    }, []);

    return (
        <section id='skills' className="overflow-hidden">
            <div ref={triggerRef}>
                <div ref={sectionRef} className="min-h-screen w-[900vw] flex flex-row relative">
                    <div className={"min-h-screen w-36"}></div>
                    <SkillIntro/>
                    <WebSection/>
                    <AppSection/>
                    <BDDSection/>
                    <SystemeSection/>
                    <ReseauSection/>
                    <OutilsSection/>
                    <ManagementSection/>
                    <OtherOutilsSection/>

                    <div className="min-h-screen w-screen flex flex-col justify-center items-center text-center font-aquire">
                        <p className={"text-8xl"}>La suite</p>
                        <Image src={arrow} alt={"arrow"} className={"rotate-90 translate-y-10"}></Image>
                    </div>

                    <div className={"min-h-screen w-20"}/>

                </div>
            </div>
        </section>
    );
}

export default ScrollSection;
