"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import FilterBar from '../carousel/FilterBar';
import left from "@/../public/assets/image/utils/left-icon.svg"
import right from "@/../public/assets/image/utils/right-arrow-icon.svg"


export default function ThirdSectionContainer() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };


    return (
        <section className="min-h-screen pt-8 flex flex-col items-center">
            <div className="relative w-full mt-4">
                <button
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full shadow-md z-10 hidden md:flex"
                    onClick={scrollLeft}
                >
                    <Image src={left} alt="Scroll left" width={24} height={24} />
                </button>
                <div
                    className="overflow-x-auto whitespace-nowrap scroll-smooth"
                    ref={scrollContainerRef}
                >
                </div>
                <button
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full shadow-md z-10 hidden md:flex"
                    onClick={scrollRight}
                >
                    <Image src={right} alt="Scroll right" width={24} height={24} />
                </button>
            </div>
        </section>
    );
}
