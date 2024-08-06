"use client";

import React, { useState } from 'react';

interface FilterBarProps {
    onFilterChange: (type: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange }) => {
    const [selectedType, setSelectedType] = useState<string>("");

    const handleFilterChange = (type: string) => {
        setSelectedType(type);
        onFilterChange(type);
    };

    return (
        <div className="flex justify-center text-center p-4 md:p-8 lg:p-10">
            <div
                className="bg-secondary text-primary rounded-full overflow-hidden flex flex-wrap justify-center border-white border-2"
                style={{ backgroundColor: "#EB9D5A" }}
            >
                <button
                    className={`px-6 py-2 md:px-8 md:py-3 lg:px-12 lg:py-3 border-r border-white ${selectedType === "E-commerce" ? "bg-primary text-secondary" : "hover:bg-secondary"}`}
                    onClick={() => handleFilterChange("E-commerce")}
                >
                    E-commerce
                </button>
                <button
                    className={`px-6 py-2 md:px-8 md:py-3 lg:px-12 lg:py-3 border-r border-white ${selectedType === "Vitrine" ? "bg-primary text-secondary" : "hover:bg-secondary"}`}
                    onClick={() => handleFilterChange("Vitrine")}
                >
                    Vitrine
                </button>
                <button
                    className={`px-6 py-2 md:px-8 md:py-3 lg:px-12 lg:py-3 ${selectedType === "Portfolio" ? "bg-primary text-secondary" : "hover:bg-secondary"}`}
                    onClick={() => handleFilterChange("Portfolio")}
                >
                    Portfolio
                </button>
            </div>
        </div>
    );
};

export default FilterBar;
