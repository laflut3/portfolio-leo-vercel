import {NextRequest, NextResponse} from 'next/server';
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

export async function PATCH(
    req: NextRequest,
    { params }: { params: { id: string; index: string } }
) {
    const { id, index } = params; // Récupération de l'ID du SAE et l'index de la section
    const parsedIndex = parseInt(index, 10); // Convertir l'index en nombre

    if (isNaN(parsedIndex)) {
        return NextResponse.json(
            { error: 'Index invalide, veuillez fournir un entier.' },
            { status: 400 }
        );
    }

    try {
        // Récupérer les données de la requête
        const formData = await req.formData();
        const updatedTexte = formData.get('texte')?.toString() || null;
        const updatedImage = formData.get('image') as File | null;

        // Charger le SAE correspondant
        const sae = await SAE.findById(id);
        if (!sae) {
            return NextResponse.json(
                { error: `Aucun SAE trouvé avec l'ID : ${id}` },
                { status: 404 }
            );
        }

        // Vérifier si l'index de la section est valide
        if (parsedIndex < 0 || parsedIndex >= sae.section.length) {
            return NextResponse.json(
                { error: `Aucune section trouvée à l'index : ${index}` },
                { status: 404 }
            );
        }

        // Mettre à jour la section spécifique
        if (updatedTexte) {
            sae.section[parsedIndex].texte = updatedTexte;
        }

        if (updatedImage) {
            sae.section[parsedIndex].image = Buffer.from(await updatedImage.arrayBuffer());
        }

        // Sauvegarder les modifications
        await sae.save();

        return NextResponse.json({
            message: 'Section mise à jour avec succès.',
            sae,
        });
    } catch (error: any) {
        console.error('Erreur lors de la mise à jour de la section :', error);
        return NextResponse.json(
            { error: 'Erreur interne du serveur.' },
            { status: 500 }
        );
    }
}
