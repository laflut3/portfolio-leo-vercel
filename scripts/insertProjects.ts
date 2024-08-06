import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { projectsTable } from '../src/db/schema'; // Assurez-vous que le chemin est correct

config({ path: '.env.local' });

const client = createClient({
    url: process.env.NEXT_PUBLIC_TURSO_CONNECTION_URL!,
    authToken: process.env.NEXT_PUBLIC_TURSO_AUTH_TOKEN!,
});

const db = drizzle(client);

const exampleProject = {
    title: 'Projet Exemple',
    url: 'https://example.com',
    image: 'https://example.com/image.jpg',
    type: 'Web Application'
};

async function insertProject() {
    try {
        await db.insert(projectsTable).values(exampleProject);
        console.log('Project inserted successfully');
    } catch (error) {
        console.error('Error inserting project:', error);
    } finally {
        client.close();
    }
}

insertProject();
