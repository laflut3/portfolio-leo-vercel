"use client";

import {dotWave} from "ldrs";
import Image from 'next/image';
import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import ValidationPopUp from "@/components/utils/ValidationPopUp";
import astronaute from "@/../public/assets/image/designIcon/astronaute-icon.png";

export default function FifthSection() {
    dotWave.register();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        consent: false,
    });
    const [status, setStatus] = useState<string>("");
    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value, type} = e.target;
        if (type === "checkbox") {
            const {checked} = e.target as HTMLInputElement;
            setFormData((prevData) => ({
                ...prevData,
                [name]: checked,
            }));
            if (name === "consent" && checked) {
                setShowPopup(true);
            }
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const data = await res.json();
        if (data.success) {
            setStatus("sent");
            setFormData({name: "", email: "", message: "", consent: false});
        } else {
            setStatus("error");
        }
    };

    return (
        <section className="fifth-section min-h-screen py-8 mt-5" id="contactUs">
            <div className="form-flex-container flex flex-col md:flex-row justify-evenly items-center w-full px-4">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col space-y-4 w-full max-w-lg p-6 rounded-lg shadow-lg text-black"
                >
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex flex-col w-full">
                            <label htmlFor="name" className="mb-2 text-sm font-semibold">Nom et Prénom*</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Votre nom et prénom"
                                className="border w-full rounded-lg px-6 py-2 placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="email" className="mb-2 text-sm font-semibold">Email*</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Votre email"
                                className="border rounded-lg w-full px-6 py-2 placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Votre message"
                        className="border rounded-lg w-full px-6 py-2 h-32 resize-none placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <div className="flex items-center space-x-2 mb-4">
                        <input
                            type="checkbox"
                            id="consent"
                            name="consent"
                            className="h-5 w-5"
                            checked={formData.consent}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="consent" className="text-secondary text-sm">J&apos;accepte que mes informations soient
                            utilisées pour le traitement de ma demande*</label>
                    </div>

                    <button
                        type="submit"
                        className={`bg-secondary text-tertiary px-12 py-2 rounded-full font-semibold hover:bg-secondary-dark transition-colors ${status === 'sending' ? 'bg-gray-500' : ''}`}
                        disabled={status === 'sending'}
                    >
                        {status === 'sending' ? (
                            <l-dot-wave
                                size="47"
                                speed="1"
                                color="white"
                            />
                        ) : 'Envoyer'}
                    </button>

                    {status === 'sent' &&
                        <p className="text-green-500 text-center mt-4">Message envoyé avec succès !</p>}
                    {status === 'error' &&
                        <p className="text-red-500 text-center mt-4">Erreur lors de l&apos;envoi. Veuillez
                            réessayer.</p>}
                </form>
                <div className="mt-8 md:mt-0">
                    <h3 className="text-3xl md:text-4xl font-bold text-center">Entrer en contact</h3>
                    <Image
                        src={astronaute}
                        alt="Astronaute"
                        width={280}
                        height={661}
                        className="mx-auto"
                        style={{objectFit: 'contain'}}
                    />
                </div>
            </div>
            {showPopup && (
                <ValidationPopUp
                    title="Consentement requis"
                    text="Avant de procéder à l'envoi, nous vous prions de bien vouloir confirmer votre consentement. Nous respectons votre vie privée et nous engageons à protéger vos informations personnelles conformément à notre politique de confidentialité. Veuillez lire attentivement les informations fournies et valider votre consentement pour continuer. Si vous avez des questions, n'hésitez pas à nous contacter."
                    onClose={() => setShowPopup(false)}
                />
            )}
        </section>
    );
}
