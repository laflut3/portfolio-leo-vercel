"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
    const [authenticated, setAuthenticated] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    useEffect(() => {
        const checkAuth = () => {
            const authCookie = document.cookie.split('; ').find(row => row.startsWith('admin_auth='));
            if (authCookie) {
                router.push('/admin/home'); 
            }
        };

        checkAuth();
    }, [router]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const username = (form.elements.namedItem('username') as HTMLInputElement).value;
        const password = (form.elements.namedItem('password') as HTMLInputElement).value;

        try {
            const response = await fetch('/api/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const result = await response.json();
            if (result.message) {
                setAuthenticated(true);
                setError('');
                router.push('/admin/home');
            } else {
                setError('Invalid username or password');
            }
        } catch (error) {
            setError('An error occurred');
        }
    };

    return (
        <main className='h-screen'>
            <section className="fifth-section min-h-screen py-8 mt-5 flex justify-center items-center px-4 sm:px-6 lg:px-8">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col space-y-4 w-full max-w-md sm:max-w-lg p-6 rounded-lg shadow-lg bg-white bg-opacity-15"
                >
                    <div className="flex flex-col w-full">
                        <label htmlFor="username" className="mb-2 text-sm font-semibold">Username*</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter your username"
                            className="border w-full rounded-lg text-tertiary px-3 py-2 placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                            required
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="password" className="mb-2 text-sm font-semibold">Password*</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            className="border rounded-lg w-full text-tertiary px-3 py-2 placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                            required
                        />
                    </div>
                    {error && (
                        <div className="text-red-500 text-sm">{error}</div>
                    )}
                    <button
                        type="submit"
                        className="bg-secondary text-tertiary px-6 py-2 rounded-full font-semibold hover:bg-secondary-dark transition-colors"
                    >
                        SE CONNECTER
                    </button>
                </form>
            </section>
        </main>
    );
}
