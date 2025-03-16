'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

interface Section {
    texte?: string;
    image?: any;
}

interface ClientSAEProps {
    isAdmin: boolean; // Indique si l'utilisateur est administrateur
    id: string; // ID du SAE
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
                                          id,
                                          titre,
                                          descriptionGenerale,
                                          note,
                                          type,
                                          annee,
                                          semestre,
                                          lien,
                                          imageGenerale,
                                          section = [],
                                      }: ClientSAEProps) {
    const [image, setImage] = useState<string>('');
    const [sectionImages, setSectionImages] = useState<string[]>([]);
    const [sections, setSections] = useState<Section[]>(section);

    const [newSectionTexte, setNewSectionTexte] = useState<string>('');
    const [newSectionImage, setNewSectionImage] = useState<File | null>(null);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [editSectionTexte, setEditSectionTexte] = useState<string>('');
    const [editSectionImage, setEditSectionImage] = useState<File | null>(null);

    const session = useSession().data?.user;

    useEffect(() => {
        if (imageGenerale) {
            const base64Image = `data:image/png;base64,${Buffer.from(imageGenerale.data).toString('base64')}`;
            setImage(base64Image);
        }

        if (section.length > 0) {
            const images = section
                .map((sec) =>
                    sec.image
                        ? `data:image/png;base64,${Buffer.from(sec.image.data).toString('base64')}`
                        : null
                )
                .filter((img): img is string => img !== null);
            setSectionImages(images);
        }
    }, [imageGenerale, section]);

    const handleAddSection = async () => {
        if (!newSectionTexte && !newSectionImage) {
            alert('Veuillez remplir le texte ou ajouter une image pour la nouvelle section.');
            return;
        }

        const formData = new FormData();
        formData.append('texte', newSectionTexte);
        if (newSectionImage) formData.append('image', newSectionImage);

        const response = await fetch(`/api/SAE/${id}/section`, {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            const data = await response.json();
            setSections(data.sae.section);
            setNewSectionTexte('');
            setNewSectionImage(null);
        } else {
            alert('Erreur lors de l\'ajout de la section.');
        }
    };

    const handleDeleteSection = async (index: number) => {
        try {
            const response = await fetch(`/api/SAE/${id}/section/${index}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                const data = await response.json();
                setSections(data.sae.section); // Met à jour les sections
            } else {
                const errorData = await response.json();
                console.error('Erreur API :', errorData.error);
                alert(`Erreur : ${errorData.error}`);
            }
        } catch (error) {
            console.error('Erreur lors de la suppression :', error);
            alert('Erreur réseau ou serveur.');
        }
    };

    const handleEditSectionSubmit = async () => {
        if (editIndex === null) return;

        const formData = new FormData();
        formData.append('texte', editSectionTexte);
        if (editSectionImage) {
            formData.append('image', editSectionImage);
        }

        const response = await fetch(`/api/SAE/${id}/section/${editIndex}`, {
            method: 'PUT',
            body: formData,
        });

        if (response.ok) {
            const data = await response.json();
            setSections(data.sae.section); // Mettre à jour les sections
            setIsEditing(false);
            setEditIndex(null);
            setEditSectionTexte('');
            setEditSectionImage(null);
        } else {
            alert('Erreur lors de la modification de la section.');
        }
    };

    return (
        <section className="py-16 px-6 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white min-h-screen mt-16">
            <div className="mx-auto bg-gray-800 p-10 rounded-lg shadow-2xl">
                {/* Titre */}
                <div className="flex w-full justify-between items-center mb-10">
                    <h1 className="text-4xl font-extrabold text-yellow-500 mb-8">{titre}</h1>

                    {image && (
                        <div className="mt-12">
                            <Image
                                src={image}
                                alt={titre}
                                className="rounded-lg shadow-lg mx-auto max-w-full object-contain"
                                width={200}
                                height={150}
                            />
                        </div>
                    )}
                </div>

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

                {/* Sections */}
                {sections.length > 0 && (
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold text-yellow-500 mb-6 text-center">Sections</h2>
                        <div className="space-y-8">
                            {sections.map((sec, index) => (
                                <div
                                    key={index}
                                    className={`bg-gray-700 p-6 rounded-lg shadow-md flex flex-col ${
                                        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    } items-center`}
                                >
                                    {/* Image */}
                                    {sec.image && sectionImages[index] && (
                                        <div className="mb-4 md:mb-0 md:mr-6 md:ml-6 flex-shrink-0">
                                            <Image
                                                src={sectionImages[index]}
                                                alt={`Section ${index + 1}`}
                                                className="rounded-lg shadow-lg max-w-full object-contain"
                                                width={300}
                                                height={200}
                                            />
                                        </div>
                                    )}

                                    {/* Texte */}
                                    <div className="flex-grow">
                                        {sec.texte && (
                                            <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                                                {sec.texte}
                                            </p>
                                        )}

                                        {/* Boutons pour l'admin */}
                                        {session?.isAdmin && (
                                            <div className="flex space-x-4 mt-4">
                                                <button
                                                    onClick={() => handleDeleteSection(index)}
                                                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg shadow-md"
                                                >
                                                    Supprimer
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setEditIndex(index);
                                                        setEditSectionTexte(sec.texte || '');
                                                        setIsEditing(true);
                                                    }}
                                                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md"
                                                >
                                                    Modifier
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Formulaire d'ajout de section pour les administrateurs */}
                {session?.isAdmin && (
                    <div className="mt-16 bg-gray-700 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-yellow-500 mb-6">Ajouter une Section</h2>
                        <div className="space-y-4">
                            <textarea
                                value={newSectionTexte}
                                onChange={(e) => setNewSectionTexte(e.target.value)}
                                placeholder="Texte de la section"
                                className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                            <input
                                type="file"
                                onChange={(e) => setNewSectionImage(e.target.files?.[0] || null)}
                                accept="image/*"
                                className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                            <button
                                onClick={handleAddSection}
                                className="w-full py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-lg shadow-md"
                            >
                                Ajouter la Section
                            </button>
                        </div>
                    </div>
                )}

                {/* Modale de modification */}
                {isEditing && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
                            <h2 className="text-2xl font-bold text-yellow-500 mb-4">Modifier la Section</h2>
                            <div className="space-y-4">
                                <textarea
                                    value={editSectionTexte}
                                    onChange={(e) => setEditSectionTexte(e.target.value)}
                                    placeholder="Texte de la section"
                                    className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                />
                                <input
                                    type="file"
                                    onChange={(e) => setEditSectionImage(e.target.files?.[0] || null)}
                                    accept="image/*"
                                    className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                />
                                <div className="flex space-x-4">
                                    <button
                                        onClick={handleEditSectionSubmit}
                                        className="w-full py-4 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-lg shadow-md"
                                    >
                                        Enregistrer
                                    </button>
                                    <button
                                        onClick={() => setIsEditing(false)}
                                        className="w-full py-4 bg-gray-500 hover:bg-gray-400 text-white font-bold rounded-lg shadow-md"
                                    >
                                        Annuler
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
