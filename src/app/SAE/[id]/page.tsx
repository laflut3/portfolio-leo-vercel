import { notFound } from 'next/navigation';
import ClientSAEPage from "@/components/SAE/ClientSAEPage";

interface SAEDetailProps {
    params: { id: string };
}

async function fetchSAEById(id: string) {
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/SAE/${id}`, { cache: 'no-store' });
    if (!response.ok) {
        return null;
    }
    return response.json();
}

export default async function SAEPage({ params }: SAEDetailProps) {
    const { id } = params;
    const sae = await fetchSAEById(id);

    if (!sae) {
        notFound(); // Redirige vers une page 404 si le produit n'existe pas
    }

    return (
        <ClientSAEPage
            titre={sae.titre}
            descriptionGenerale={sae.descriptionGenerale}
            note={sae.note}
            type={sae.type}
            annee={sae.annee}
            semestre={sae.semestre}
            lien={sae.lien}
            imageGenerale={sae.imageGenerale}
            section={sae.section} // Ajoute les sections ici
        />
    );
}
