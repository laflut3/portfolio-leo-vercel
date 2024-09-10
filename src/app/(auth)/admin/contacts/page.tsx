"use client";
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function ContactsAdminPage() {
    const [contacts, setContacts] = useState<{ id: number; name: string; email: string; message: string }[]>([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [newContact, setNewContact] = useState({ name: '', email: '', message: '' });
    const router = useRouter();
    const scrollContainerRef = useRef<HTMLDivElement>(null);

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

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    const ContactCard = ({ id, name, email, message }: { id: number; name: string; email: string; message: string }) => {
        return (
            <div className="relative flex flex-col justify-between bg-tertiary rounded-lg items-center w-[250px] h-[180px] overflow-hidden shadow-lg mx-2">
                <div className="flex flex-col justify-center items-center w-full h-full p-4">
                    <p className="text-center text-gray-600 font-semibold">{name}</p>
                    <p className="text-center text-gray-500">{email}</p>
                    <p className="text-center text-gray-400">{message}</p>
                </div>
                <div className="absolute bottom-2 right-2">
                    <button
                        className="px-2 py-1 rounded-lg bg-secondary text-primary"
                    >
                        Supprimer
                    </button>
                </div>
            </div>
        );
    };

    return (
        <main className="flex flex-col items-center justify-center h-auto min-h-screen p-4">
            <h2 className="text-2xl mb-4">Contacts :</h2>

            <div className="relative flex items-center">
                {/* Button for scrolling left */}
                <button
                    className="absolute left-0 transform pr-3 mt-[-10px] rounded-full shadow-md z-10"
                    onClick={scrollLeft}
                >
                    <Image src="/assets/left-icon.svg" alt="Scroll left" width={24} height={24} />
                </button>

                {/* Scrollable container for contacts */}
                <div className="flex overflow-x-auto whitespace-nowrap pb-4 px-8" ref={scrollContainerRef}>
                    {contacts.map(contact => (
                        <ContactCard key={contact.id} {...contact} />
                    ))}
                </div>

                <button
                    className="absolute right-0 transform pl-3 mt-[-10px] rounded-full shadow-md z-10"
                    onClick={scrollRight}
                >
                    <Image src="/assets/right-arrow-icon.svg" alt="Scroll right" width={24} height={24} />
                </button>
            </div>

            {showAddModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                        <h3 className="text-xl mb-4 text-center text-tertiary">Ajouter un contact</h3>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                // Handle add contact logic here
                                setNewContact({ name: '', email: '', message: '' });
                                setShowAddModal(false);
                            }}
                        >
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1 text-tertiary" htmlFor="name">Nom</label>
                                <input
                                    id="name"
                                    type="text"
                                    value={newContact.name}
                                    onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
                                    className="w-full border rounded-lg p-2 text-tertiary"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1 text-tertiary" htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    value={newContact.email}
                                    onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
                                    className="w-full border rounded-lg p-2 text-tertiary"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1 text-tertiary" htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    value={newContact.message}
                                    onChange={(e) => setNewContact({ ...newContact, message: e.target.value })}
                                    className="w-full border rounded-lg p-2 text-tertiary"
                                    required
                                />
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <button
                                    type="submit"
                                    className="bg-secondary text-primary px-4 py-2 rounded-lg"
                                >
                                    Ajouter
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setShowAddModal(false)}
                                    className="bg-tertiary text-tertiary border px-4 py-2 rounded-lg"
                                >
                                    Annuler
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </main>
    );
}
