import mongoose, { Schema, model } from "mongoose";

export interface SAEDocument {
    titre: string;
    descriptionGenerale: string;
    imageGenerale: Buffer;
    section?: {
        texte?: string;
        image?: Buffer;
    }[];
    lien: string;
    type: string; // Universitaire, Personnel, etc.
    annee?: string; // Exemple : "annee 1", "annee 2", "annee 3"
    semestre?: string; // Exemple : "S1", "S2"
    note?: number; // Entre 0 et 20
}

const SAESchema = new Schema({
    titre: {
        type: String,
        required: true,
    },
    descriptionGenerale: {
        type: String,
        required: true,
    },
    imageGenerale: {
        type: Buffer,
        required: true,
    },
    section: [
        {
            texte: {
                type: String,
                required: false, // Optionnel
            },
            image: {
                type: Buffer,
                required: false, // Optionnel
            },
        },
    ],
    lien: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    annee: {
        type: String, // Exemple : "annee 1", "annee 2", "annee 3"
        required: false,
        enum: ["annee 1", "annee 2", "annee 3"], // Limitation des valeurs possibles
    },
    semestre: {
        type: String, // Exemple : "S1" pour Semestre 1, "S2" pour Semestre 2
        required: false,
    },
    note: {
        type: Number,
        required: false,
        min: 0,
        max: 20,
    },
});

const SAE = mongoose.models?.SAE || model<SAEDocument>("SAE", SAESchema);
export default SAE;
