"use client";
import React, { useState } from 'react';
import { createContact } from '@/db/queries/insert';
import Image from 'next/image';

export default function FifthSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [consent, setConsent] = useState(false);
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleConsentChange = () => {
        setConsent(!consent);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!consent) {
            alert('Vous devez accepter le consentement pour envoyer le message.');
            return;
        }

        setStatus('sending');

        try {
            await createContact(formData);
            setStatus('sent');
            setFormData({ name: '', email: '', message: '' });
            setConsent(false);
        } catch (error) {
            console.error('Error submitting contact form:', error);
            setStatus('error');
        }
    };

    return (
        <section className="fifth-section min-h-screen py-8 mt-5" id="contactUs">
            <div className="form-flex-container flex flex-col md:flex-row justify-evenly items-center w-full px-4">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col space-y-4 w-full max-w-lg p-6 rounded-lg shadow-lg"
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
                                onChange={handleInputChange}
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
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Votre message"
                        className="border rounded-lg w-full px-6 py-2 h-32 resize-none text-tertiary placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                    />
                    <div className="flex items-center space-x-2 mb-4">
                        <input
                            type="checkbox"
                            id="consent"
                            name="consent"
                            className="h-5 w-5"
                            checked={consent}
                            onChange={handleConsentChange}
                            required
                        />
                        <label htmlFor="consent" className="text-sm">J'accepte que mes informations soient utilisées pour le traitement de ma demande*</label>
                    </div>
                    <button
                        type="submit"
                        className={`bg-secondary text-tertiary px-12 py-2 rounded-full font-semibold hover:bg-secondary-dark transition-colors ${status === 'sending' ? 'bg-gray-500' : ''}`}
                        disabled={status === 'sending'}
                    >
                        {status === 'sending' ? 'Envoi en cours...' : 'Envoyer'}
                    </button>
                    {status === 'sent' && <p className="text-green-500 text-center mt-4">Message envoyé avec succès !</p>}
                    {status === 'error' && <p className="text-red-500 text-center mt-4">Erreur lors de l'envoi. Veuillez réessayer.</p>}
                </form>
                <div className="mt-8 md:mt-0">
                    <h3 className="text-3xl md:text-4xl font-bold text-center">Entrer en contact</h3>
                    <Image
                        src='/assets/astronaute-icon.png'
                        alt="Astronaute"
                        width={280}
                        height={661}
                        className="mx-auto"
                        style={{ objectFit: 'contain' }}
                    />
                </div>
            </div>
        </section>
    );
}
