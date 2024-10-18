import React from "react";

export default function BackEtoile() {
    return (
        <div className="absolute inset-0">
            {Array.from({length: 200}).map((_, index) => (
                <span
                    key={index}
                    className="block rounded-full absolute bg-white opacity-80"
                    style={{
                        width: `${Math.random() * 3 + 1}px`,
                        height: `${Math.random() * 3 + 1}px`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `twinkle ${Math.random() * 5 + 2}s infinite ease-in-out`,
                    }}
                ></span>
            ))}
        </div>
    )
}