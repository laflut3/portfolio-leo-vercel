import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { actualSituationTable } from '../src/db/schema';

config({ path: '.env.local' });

const client = createClient({
    url: process.env.NEXT_PUBLIC_TURSO_CONNECTION_URL!,
    authToken: process.env.NEXT_PUBLIC_TURSO_AUTH_TOKEN!,
});

const db = drizzle(client);

const actualSituationContent = "Etudiant de 3ème année de BUT (Bachelor Universitaire Technologique) informatique qui aspire à me développer et à contribuer au domaine de l’informatique. Je suis basé sur Montpellier et je suis intéressé par l’espace, le sport et par les nouvelles technologies pour ne citer qu’elles.";

async function insertActualSituation() {
    try {
        await db.insert(actualSituationTable).values({ content: actualSituationContent });
        console.log('Actual situation inserted successfully');
    } catch (error) {
        console.error('Error inserting actual situation:', error);
    } finally {
        client.close();
    }
}

insertActualSituation();
