import { NextResponse } from 'next/server';
import { connectDB } from '@/../Lib/MongoLib/mongodb';
import SAE from '@/../Lib/SAELib/models/SAE';
import fs from 'fs/promises';
import formidable from 'formidable';
import { Readable } from 'stream';
import { IncomingMessage } from 'http'; // Import de IncomingMessage

// Convertir la requête Request en IncomingMessage pour formidable
function requestToIncomingMessage(req: Request): IncomingMessage {
    const readable = Readable.from(req.body as any);
    const incomingMessage = Object.assign(readable, {
        headers: Object.fromEntries(req.headers),
        method: req.method,
        url: req.url,
    });
    return incomingMessage as unknown as IncomingMessage;
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    await connectDB(); // Connexion à la base de données

    const form = formidable({
        multiples: false, // Ne pas autoriser plusieurs fichiers par champ
    });

    try {
        const incomingRequest = requestToIncomingMessage(request);

        // Parsing de la requête
        const { fields, files } = await new Promise<{ fields: Record<string, any>; files: formidable.Files }>(
            (resolve, reject) => {
                form.parse(incomingRequest, (err, fields, files) => {
                    if (err) reject(err);
                    resolve({ fields, files });
                });
            }
        );

        // Convertir les champs en chaînes si nécessaire
        const updatedData: any = {};
        for (const key in fields) {
            const value = fields[key];
            // Si le champ est un tableau, prendre le premier élément (cas où le champ est mal interprété)
            updatedData[key] = Array.isArray(value) ? value[0] : value;
        }

        // Si une image est envoyée
        if (files.imageGenerale) {
            const file = Array.isArray(files.imageGenerale)
                ? files.imageGenerale[0] // Si tableau, prendre le premier fichier
                : files.imageGenerale; // Sinon, utiliser directement le fichier

            updatedData.imageGenerale = await fs.readFile(file.filepath); // Lire le fichier en tant que Buffer
        }

        // Mise à jour dans la base de données
        const updatedProject = await SAE.findByIdAndUpdate(id, updatedData, {
            new: true, // Retourner le document mis à jour
            runValidators: true, // Valider les données avant la mise à jour
        });

        if (!updatedProject) {
            return NextResponse.json({ error: 'Projet non trouvé.' }, { status: 404 });
        }

        return NextResponse.json(updatedProject);
    } catch (error) {
        console.error('Erreur lors de la mise à jour:', error);
        return NextResponse.json({ error: 'Erreur interne du serveur.' }, { status: 500 });
    }
}


export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    await connectDB();

    try {
        const { id } = params;
        const deletedProject = await SAE.findByIdAndDelete(id);
        if (!deletedProject) {
            return NextResponse.json({ error: 'Projet non trouvé.' }, { status: 404 });
        }
        return NextResponse.json(deletedProject, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function GET(request: Request, { params }: { params: { id: string } }) {
    try {
        await connectDB();
        const { id } = params;

        const sae = await SAE.findById(id);
        if (!sae) {
            return NextResponse.json({ error: 'Produit non trouvé' }, { status: 404 });
        }

        return NextResponse.json(sae);
    } catch (error) {
        console.error('Erreur lors de la récupération du produit:', error);
        return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 });
    }
}

