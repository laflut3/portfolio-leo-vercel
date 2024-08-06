// src/db/queries/insert.ts
import { db } from '../index';
import { actualSituationTable, skillsTable, projectsTable, contactsTable } from '../schema'
// Fonction pour insérer une situation actuelle
export async function createActualSituation(data: { content: string }) {
    console.log('Data to update:', data);
    await db.insert(actualSituationTable).values(data);
}

// Fonction pour insérer une compétence
export async function createSkill(data: { title: string; content: string; image: string }) {
    await db.insert(skillsTable).values(data);
}

// Fonction pour insérer un projet
export async function createProject(data: { title: string; url: string; image: string; type: string }) {
    await db.insert(projectsTable).values(data);
}

// Fonction pour insérer un contact
export async function createContact(data: { name: string; email: string; message: string }) {
    await db.insert(contactsTable).values(data);
}
