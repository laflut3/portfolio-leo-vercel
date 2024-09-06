"use client"

import React, { useState } from "react";
import axios from "axios";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const EmailValidationSection: React.FC = () => {
    const { data: session } = useSession();
    const [message, setMessage] = useState<string>("");
    const [error, setError] = useState<string>("");
    const router = useRouter();

    const handleSendValidationEmail = async () => {
        setMessage("");
        setError("");

        try {
            const response = await axios.post("/api/user/validationEmail");

            console.log(response); // Pour déboguer, affichez la réponse dans la console.

            if (response.status === 200) {
                setMessage("Email de validation envoyé avec succès !");
            } else {
                setError("Échec de l'envoi de l'email de validation");
            }
        } catch (error) {
            console.error(error); // Log de l'erreur pour plus de détails.
            setError("Échec de l'envoi de l'email de validation");
        }
    };

    const handleDelete = async (userId: string) => {
        setMessage("");
        setError("");

        try {
            const response = await axios.delete("/api/user", { data: { userId } });
            if (response.status === 200) {
                setMessage("Utilisateur supprimé avec succès");
                signOut({ callbackUrl: "/" });
            } else {
                setError("Échec de la suppression de l'utilisateur");
            }
        } catch (error) {
            setError("Échec de la suppression de l'utilisateur");
        }
    };

    const handleReturnToShop = () => {
        router.push("/");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl mb-6">Validation email</h1>
            <div className="bg-white shadow-2xl bg-opacity-50 rounded-lg text-center">
                <div className="p-8">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <h2 className="text-2xl mb-2">Bienvenue dans l'aventure !</h2>
                    <p className="mb-6">Prenez plaisir à naviguer sur notre site.</p>
                    <div className="space-x-4">
                        {session?.user?.isVerified ? (
                            <button
                                onClick={handleReturnToShop}
                                className="bg-red-500 text-white py-2 px-6 rounded-full mb-4 hover:bg-red-600 transition"
                            >
                                Retour dans la boutique
                            </button>
                        ) : (
                            <>
                                <button
                                    onClick={handleSendValidationEmail}
                                    className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition"
                                >
                                    Validation
                                </button>
                                <button
                                    onClick={() => handleDelete(session?.user?.id ?? "")}
                                    className="bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600 transition"
                                >
                                    Supprimer
                                </button>
                            </>
                        )}
                    </div>
                    {message && <p className="mt-4 text-green-500">{message}</p>}
                    {error && <p className="mt-4 text-red-500">{error}</p>}
                </div>
            </div>
        </div>
    );
};

export default EmailValidationSection;
