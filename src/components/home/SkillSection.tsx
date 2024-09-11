"use client";

import React, {useEffect, useRef} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Image from 'next/image';
import mercury from '@/../public/assets/image/planete/mercure.png';
import venus from '@/../public/assets/image/planete/venus.png';
import terre from '@/../public/assets/image/planete/terre.png';
import mars from '@/../public/assets/image/planete/mars.png';
import jupiter from '@/../public/assets/image/planete/jupiter.png';
import saturne from '@/../public/assets/image/planete/saturne.png';
import uranus from '@/../public/assets/image/planete/uranus.png';
import neptune from '@/../public/assets/image/planete/neptune.png';
import arrow from '@/../public/assets/image/utils/special-arrow-icon.svg';


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
                translateX: "-700vw",  // Adjust for the number of images (7 planets + earth)
                ease: "none",
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "8500 top",  // Adjust end based on scroll length needed
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
        <section className="overflow-hidden">
            <div ref={triggerRef}>
                <div ref={sectionRef} className="min-h-screen w-[800vw] flex flex-row relative">
                    {/* Mercury */}
                    <div className="min-h-screen w-screen flex flex-col justify-center items-center">
                        <Image
                            src={mercury}
                            alt="Mercure"
                            className="object-contain h-[80vh] w-auto"
                        />

                    </div>
                    {/* Venus */}
                    <div className="min-h-screen w-screen flex justify-center items-center">
                        <Image
                            src={venus}
                            alt="Venus"
                            className="object-contain h-[80vh] w-auto"
                        />
                    </div>
                    {/* Earth */}
                    <div className="min-h-screen w-screen flex justify-center items-center">
                        <Image
                            src={terre}
                            alt="Terre"
                            className="object-contain h-[80vh] w-auto"
                        />
                    </div>
                    {/* Mars */}
                    <div className="min-h-screen w-screen flex justify-center items-center">
                        <Image
                            src={mars}
                            alt="Mars"
                            className="object-contain h-[80vh] w-auto"
                        />
                    </div>
                    {/* Jupiter */}
                    <div className="min-h-screen w-screen flex justify-center items-center">
                        <Image
                            src={jupiter}
                            alt="Jupiter"
                            className="object-contain h-[80vh] w-auto"
                        />
                    </div>
                    {/* Saturn */}
                    <div className="min-h-screen w-screen flex justify-center items-center">
                        <Image
                            src={saturne}
                            alt="Saturne"
                            className="object-contain h-[80vh] w-auto"
                        />
                    </div>
                    {/* Uranus */}
                    <div className="min-h-screen w-screen flex justify-center items-center">
                        <Image
                            src={uranus}
                            alt="Uranus"
                            className="object-contain h-[80vh] w-auto"
                        />
                    </div>
                    {/* Neptune */}
                    <div className="min-h-screen w-screen flex justify-center items-center">
                        <Image
                            src={neptune}
                            alt="Neptune"
                            className="object-contain h-[80vh] w-auto"
                        />
                    </div>
                    <div className="min-h-screen w-screen flex flex-col justify-center items-center text-center">
                        <p className={"text-8xl"}>La suite</p>
                        <Image src={arrow} alt={"arrow"} className={"rotate-90 translate-y-10"}></Image>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ScrollSection;
