'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Section {
    texte?: string;
    image?: any;
}

interface ClientSAEProps {
    titre: string;
    descriptionGenerale: string;
    note?: number;
    type: string;
    annee?: string;
    semestre?: string;
    lien: string;
    imageGenerale: any;
    section?: Section[]; // Les sections du projet
}

export default function ClientSAEPage({
                                          titre,
                                          descriptionGenerale,
                                          note,
                                          type,
                                          annee,
                                          semestre,
                                          lien,
                                          imageGenerale,
                                          section = [], // Par défaut, un tableau vide
                                      }: ClientSAEProps) {
    const [image, setImage] = useState<string>('');
    const [sectionImages, setSectionImages] = useState<string[]>([]);

    useEffect(() => {
        if (imageGenerale) {
            const base64Image = `data:image/png;base64,${Buffer.from(imageGenerale.data).toString('base64')}`;
            setImage(base64Image);
        }

        // Convertir les images des sections en Base64
        if (section.length > 0) {
            const images = section
                .map((sec) =>
                    sec.image
                        ? `data:image/png;base64,${Buffer.from(sec.image.data).toString('base64')}`
                        : null
                )
                .filter((img): img is string => img !== null); // Filtre les nulls et garde uniquement les strings
            setSectionImages(images);
        }
    }, [imageGenerale, section]);


    return (
        <section className="py-16 px-6 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white min-h-screen mt-16">
            <div className="max-w-5xl mx-auto bg-gray-800 p-10 rounded-lg shadow-2xl transform transition-all hover:scale-105">
                {/* Titre */}
                <h1 className="text-4xl font-extrabold text-yellow-500 mb-8 text-center">
                    {titre}
                </h1>

                {/* Description générale */}
                <p className="text-gray-300 text-lg leading-relaxed mb-8">{descriptionGenerale}</p>

                {/* Détails */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {note && (
                        <div className="bg-gray-700 p-4 rounded-lg shadow-md">
                            <h2 className="text-xl text-yellow-500 font-bold">Note</h2>
                            <p className="text-lg text-white mt-2">{note}/20</p>
                        </div>
                    )}
                    <div className="bg-gray-700 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl text-yellow-500 font-bold">Type</h2>
                        <p className="text-lg text-white mt-2 capitalize">{type}</p>
                    </div>
                    {annee && (
                        <div className="bg-gray-700 p-4 rounded-lg shadow-md">
                            <h2 className="text-xl text-yellow-500 font-bold">Année</h2>
                            <p className="text-lg text-white mt-2 capitalize">{annee}</p>
                        </div>
                    )}
                    {semestre && (
                        <div className="bg-gray-700 p-4 rounded-lg shadow-md">
                            <h2 className="text-xl text-yellow-500 font-bold">Semestre</h2>
                            <p className="text-lg text-white mt-2">{semestre}</p>
                        </div>
                    )}
                </div>

                {/* Lien vers le projet */}
                <div className="mt-8 text-center">
                    <a
                        href={lien}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
                    >
                        Voir le projet
                    </a>
                </div>

                {/* Image principale */}
                {image && (
                    <div className="mt-12">
                        <Image
                            src={image}
                            alt={titre}
                            className="rounded-lg shadow-lg mx-auto max-w-full object-contain"
                            width={400}
                            height={300}
                        />
                    </div>
                )}

                {/* Sections */}
                {section.length > 0 && (
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold text-yellow-500 mb-6 text-center">Sections</h2>
                        <div className="space-y-8">
                            {section.map((sec, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-700 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center"
                                >
                                    {sec.image && sectionImages[index] && (
                                        <div className="mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                                            <Image
                                                src={sectionImages[index]}
                                                alt={`Section ${index + 1}`}
                                                className="rounded-lg shadow-lg max-w-full object-contain"
                                                width={300}
                                                height={200}
                                            />
                                        </div>
                                    )}
                                    <div>
                                        {sec.texte && (
                                            <p className="text-gray-300 text-lg leading-relaxed">
                                                {sec.texte}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
