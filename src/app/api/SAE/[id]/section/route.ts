import {NextResponse} from 'next/server';
import {connectDB} from '@/../Lib/MongoLib/mongodb';
import SAE from '@/../Lib/SAELib/models/SAE';

// Connect to the database
connectDB();

/**
 * Ajouter une nouvelle section à un SAE.
 */
export async function POST(request: Request, { params }: { params: { id: string } }) {
    await connectDB(); // Connexion à la base de données

    const { id } = params;

    if (!id) {
        return NextResponse.json({ error: 'ID manquant dans la requête' }, { status: 400 });
    }

    try {
        const sae = await SAE.findById(id);

        if (!sae) {
            return NextResponse.json({ error: 'SAE introuvable' }, { status: 404 });
        }

        const formData = await request.formData();
        const texte = formData.get('texte')?.toString() || '';
        const image = formData.get('image') as File;

        // Vérifiez que l'utilisateur a fourni un texte ou une image
        if (!texte && !image) {
            return NextResponse.json({ error: 'Texte ou image requis' }, { status: 400 });
        }

        // Ajout de la nouvelle section
        const newSection: any = { texte };
        if (image) {
            newSection.image = Buffer.from(await image.arrayBuffer());
        }

        sae.section.push(newSection);
        await sae.save();

        return NextResponse.json({ sae }); // Retourne l'objet SAE mis à jour
    } catch (error) {
        console.error('Erreur serveur :', error);
        return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 });
    }
}

/**
 * Modifier une section d'un SAE.
 */
export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    const body = await request.json();

    try {
        const sae = await SAE.findById(id);
        if (!sae) {
            return NextResponse.json({ error: 'SAE introuvable.' }, { status: 404 });
        }

        // Modifier la section spécifique
        const sectionIndex = sae.section.findIndex((_ : any, index : any) => index === body.index);
        if (sectionIndex === -1) {
            return NextResponse.json({ error: 'Section introuvable.' }, { status: 404 });
        }

        if (body.texte) {
            sae.section[sectionIndex].texte = body.texte;
        }

        if (body.image) {
            sae.section[sectionIndex].image = body.image;
        }

        await sae.save();
        return NextResponse.json({ message: 'Section modifiée avec succès.', sae });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Erreur lors de la modification de la section.' }, { status: 500 });
    }
}

/**
 * Supprimer une section d'un SAE.
 */
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    const body = await request.json();

    try {
        const sae = await SAE.findById(id);
        if (!sae) {
            return NextResponse.json({ error: 'SAE introuvable.' }, { status: 404 });
        }

        // Supprime la section spécifique
        sae.section = sae.section.filter((_ : any, index : any) => index !== body.index);
        await sae.save();

        return NextResponse.json({ message: 'Section supprimée avec succès.', sae });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Erreur lors de la suppression de la section.' }, { status: 500 });
    }
}
