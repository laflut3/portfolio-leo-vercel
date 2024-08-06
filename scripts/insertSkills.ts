import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { skillsTable } from '../src/db/schema';  // Assurez-vous que le chemin est correct

// Charge les variables d'environnement
config({ path: '.env.local' });

// Crée un client pour la base de données
const client = createClient({
    url: process.env.NEXT_PUBLIC_TURSO_CONNECTION_URL!,
    authToken: process.env.NEXT_PUBLIC_TURSO_AUTH_TOKEN!,
});

// Initialise l'instance de drizzle
const db = drizzle(client);

// Les compétences à insérer
const skills = [
    { title: "Java", content: "javafx j2EE, springboot", image: '/assets/java-icon.svg' },
    { title: "JavaScript", content: "react, nodejs, express", image: '/assets/js-icon.svg' },
    { title: "TypeScript", content: "nextjs", image: '/assets/ts-icon.svg' },
    { title: "PHP", content: "php vanilla", image: '/assets/php-icon.svg' },
    { title: "PL/SQL", content: "postgre, phpmyadmin, oracle, mongoDB", image: '/assets/plsql-icon.svg' },
    { title: "C", content: "C vanilla", image: '/assets/c-icon.svg' },
    { title: "C++", content: "Arduino", image: '/assets/cpp-icon.svg' },
];

// Fonction pour insérer les compétences
async function insertSkills() {
    try {
        // Insère toutes les compétences dans la table
        await db.insert(skillsTable).values(skills);
        console.log('Skills inserted successfully');
    } catch (error) {
        console.error('Error inserting skills:', error);
    } finally {
        // Ferme le client
        client.close();
    }
}

// Exécute la fonction d'insertion
insertSkills();
