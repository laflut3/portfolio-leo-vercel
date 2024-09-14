import Image from "next/image";
import bg_third_sec from "@/../public/assets/image/designIcon/planet-icon.png";
import ThirdSectionContainer from "@/components/home/thirdSectionUtils/ThirdSectionContainer";
import React from "react";

export default function ProjectSection() {
    return (
        <section className="min-h-screen relative third-section" id="projects">
            <div className="absolute inset-0 overflow-hidden">
                <div className="relative w-full h-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-full h-full md:max-w-screen-lg max-h-fit overflow-hidden">
                            <Image
                                src={bg_third_sec}
                                alt="Planet"
                                fill
                                style={{objectFit: 'cover', filter: 'blur(3px)', opacity: '0.5'}}
                                className="absolute inset-0 -z-10"
                            />
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 bg-primary bg-opacity-40 backdrop-blur-sm -z-20"/>
            </div>
            <div className="relative h-full z-10 text-center">
                <h2 className="text-3xl md:text-4xl text-primary font-bold mb-4">Projets</h2>
                <p className="mb-8 text-primary max-w-3xl mx-auto">
                    Découvrez une sélection de mes réalisations, incluant des sites web hébergés sur mon GitHub,
                    des projets développés pour des clients, ainsi que diverses contributions à des initiatives
                    collaboratives.
                </p>
                <ThirdSectionContainer/>
            </div>
        </section>
    )
}