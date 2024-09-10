"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminHomePage() {
    const [actualSituation, setActualSituation] = useState('');
    const [originalSituation, setOriginalSituation] = useState('');
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const checkAuth = () => {
            if (typeof document !== 'undefined') {
                const authCookie = document.cookie.split('; ').find(row => row.startsWith('admin_auth='));
                if (!authCookie) {
                    router.push('/admin');
                }
            }
        };
        checkAuth();
    }, [router]);


    const handleClickBack = () => {
        setActualSituation(originalSituation);
        console.log('Back clicked, reverted to original content');
    };

    if (loading) {
        return <div className='h-screen flex justify-center items-center'>Loading...</div>;
    }

    return (
        <main className="min-h-screen flex items-center justify-center p-4">
            <div className="flex flex-col w-full max-w-md p-4 rounded-lg">
                <h2 className="text-2xl mb-9">ACTUEL TEXTE :</h2>
                <textarea
                    className="w-full h-60 rounded-xl p-4 text-md text-tertiary"
                    value={actualSituation}
                    onChange={(e) => {
                        console.log('Textarea value changed:', e.target.value);
                        setActualSituation(e.target.value);
                    }}
                />
                <div className="flex mt-4 flex-col sm:flex-row gap-4 items-center justify-center">
                    <button
                        className="bg-secondary w-1/2 py-2 rounded-xl text-primary"
                    >
                        Appliquer
                    </button>
                    <button
                        onClick={handleClickBack}
                        className="bg-tertiary w-1/2 py-2 rounded-xl text-tertiary"
                    >
                        Revenir en arrière
                    </button>
                </div>
            </div>
        </main>
    );
}
