import { NextRequest, NextResponse } from 'next/server';
import {connectDB} from '@/../Lib/MongoLib/mongodb';
import SAE from '@/../Lib/SAELib/models/SAE';

// Connexion à la base de données
connectDB();

export async function DELETE(
    req: NextRequest,
    { params }: { params: { id: string; index: string } }
) {
    const { id, index } = params;

    try {
        const sae = await SAE.findById(id);

        if (!sae) {
            return NextResponse.json({ error: 'SAE introuvable' }, { status: 404 });
        }

        // Convertir l'index en entier
        const sectionIndex = parseInt(index, 10);

        if (isNaN(sectionIndex) || sectionIndex < 0 || sectionIndex >= sae.section.length) {
            return NextResponse.json({ error: 'Index invalide' }, { status: 400 });
        }

        // Supprimer la section
        sae.section.splice(sectionIndex, 1);
        await sae.save();

        return NextResponse.json({ message: 'Section supprimée avec succès', sae });
    } catch (error) {
        console.error('Erreur API DELETE :', error);
        return NextResponse.json(
            { error: 'Erreur lors de la suppression de la section' },
            { status: 500 }
        );
    }
}
