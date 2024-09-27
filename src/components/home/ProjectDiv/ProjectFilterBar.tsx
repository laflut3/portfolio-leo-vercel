"use client";

import React from 'react';

interface CatalogueFilterBarProps {
    onFilterChange: (type: string) => void;
}

const CatalogueFilterBar: React.FC<CatalogueFilterBarProps> = ({ onFilterChange }) => {

    const handleEcommerce = () => {
        onFilterChange("E-commerce");
    };

    const handleVitrine = () => {
        onFilterChange("Vitrine");
    };

    const handlePortefolio = () => {
        onFilterChange("Portfolio");
    };

    const handleAppJava = () => {
        onFilterChange("Application Java");
    };

    return (
        <div
            className="w-full flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 font-merriweather text-white items-center justify-center">
            <button className="px-8 py-2 bg-secondary rounded-xl" onClick={handleEcommerce}>Site E-commerce</button>
            <button className="px-14 py-2 bg-secondary rounded-xl" onClick={handleVitrine}>Site Vitrine</button>
            <button className="px-12 py-2 bg-secondary rounded-xl" onClick={handlePortefolio}>Site Portfolio</button>
            <button className="px-12 py-2 bg-secondary rounded-xl" onClick={handleAppJava}>Application java</button>
        </div>
    );
};

export default CatalogueFilterBar;
