import { notFound } from 'next/navigation';
import { getSession } from 'next-auth/react';
import ClientSAEPage from "@/components/SAE/ClientSAEPage";

async function fetchSAEById(id: string) {
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/SAE/${id}`, { cache: 'no-store' });
    if (!response.ok) {
        return null;
    }
    return response.json();
}

export default async function SAEPage({ params }: { params: { id: string } }) {
    const { id } = params; // Récupère l'ID depuis la route dynamique
    const sae = await fetchSAEById(id);

    if (!sae) {
        notFound(); // Redirige vers une page 404 si l'objet SAE n'est pas trouvé
    }

    const session = await getSession(); // Récupère les informations de l'utilisateur connecté

    return (
        <ClientSAEPage
            id={id}
            isAdmin={session?.user?.isAdmin || false} // Passe l'état administrateur
            {...sae}
        />
    );
}
