"use client";

import React, { useState, FormEvent } from 'react';

const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError('');
        setSuccess('');

        try {
            const response = await fetch('/api/user/password/forgot', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setSuccess('Vérifiez votre email pour le lien de réinitialisation.');
            } else {
                const data = await response.json();
                setError(data.message || 'Une erreur est survenue.');
            }
        } catch (err) {
            setError('Une erreur est survenue. Veuillez réessayer.');
        }
    };

    return (
        <section
            className="min-h-screen flex flex-col text-center justify-center items-center w-full"
            style={{background: "url('/assets/image/background/universe.png') center center / cover no-repeat"}}
        >
            <h2 className="text-3xl text-stroke font-semibold text-center mb-6">Mot de passe oublié</h2>
            <form onSubmit={handleSubmit} className="space-y-6 p-10 w-1/2">
                <div>
                    <label
                        className="block text-gray-700 text-sm font-medium mb-2"
                        htmlFor="email"
                    >
                        Adresse e-mail
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Entrez votre adresse e-mail"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="text-white w-full py-2 px-4 bg-secondary font-semibold rounded-md focus:outline-none "
                    >
                        Envoyer le lien de réinitialisation
                    </button>
                </div>
                {error && <p className="text-red-600 text-sm text-center mt-4">{error}</p>}
                {success && <p className="text-green-600 text-sm text-center mt-4">{success}</p>}
            </form>
        </section>
    );
};

export default ForgotPassword;
