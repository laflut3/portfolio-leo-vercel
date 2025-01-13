import { NextResponse } from 'next/server';
import { connectDB } from '@/../Lib/MongoLib/mongodb';
import SAE from '@/../Lib/SAELib/models/SAE';

export async function POST(request: Request) {
    await connectDB();

    try {
        const formData = await request.formData();

        const titre = formData.get('titre')?.toString();
        const descriptionGenerale = formData.get('descriptionGenerale')?.toString();
        const file = formData.get('imageGenerale') as File | null;
        const lien = formData.get('lien')?.toString();
        const type = formData.get('type')?.toString();
        const annee = formData.get('annee')?.toString();
        const semestre = formData.get('semestre')?.toString();

        const noteValue = formData.get('note');
        const note = noteValue ? parseFloat(noteValue.toString()) : undefined;

        // Validation des champs obligatoires
        if (!titre || !descriptionGenerale || !file || !lien || !type) {
            return NextResponse.json(
                { error: 'Les champs "titre", "descriptionGenerale", "imageGenerale", "lien" et "type" sont obligatoires.' },
                { status: 400 }
            );
        }

        // Validation spécifique pour les projets "universitaire"
        if (type === 'universitaire' && !annee) {
            return NextResponse.json(
                { error: 'Le champ "annee" est obligatoire pour les projets de type "universitaire".' },
                { status: 400 }
            );
        }

        // Conversion du fichier en Buffer
        const imageGenerale = Buffer.from(await file.arrayBuffer());

        // Création du document
        const newProject = await SAE.create({
            titre,
            descriptionGenerale,
            imageGenerale,
            lien,
            type,
            annee: type === 'universitaire' ? annee : undefined,
            semestre: type === 'universitaire' ? semestre : undefined,
            note: type === 'universitaire' ? note : undefined,
        });

        return NextResponse.json(newProject, { status: 201 });
    } catch (error: any) {
        console.error('Erreur dans la route POST:', error);
        return NextResponse.json({ error: 'Erreur lors de la création du projet.' }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectDB();
        const projects = await SAE.find({}); // Récupérer tous les projets
        return NextResponse.json(projects);
    } catch (error) {
        console.error('Erreur lors de la récupération des projets:', error);
        return NextResponse.json({ error: 'Erreur interne du serveur.' }, { status: 500 });
    }
}

