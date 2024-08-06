// src/db/queries/delete.ts
import { eq } from 'drizzle-orm';
import { db } from '../index';
import { actualSituationTable, skillsTable, projectsTable, contactsTable } from '../schema';

// Fonction pour supprimer une situation actuelle
export async function deleteActualSituation(id: number) {
    await db.delete(actualSituationTable).where(eq(actualSituationTable.id, id));
}

// Fonction pour supprimer une compétence
export async function deleteSkill(id: number) {
    await db.delete(skillsTable).where(eq(skillsTable.id, id));
}

// Fonction pour supprimer un projet
export async function deleteProject(id: number) {
    await db.delete(projectsTable).where(eq(projectsTable.id, id));
}

// Fonction pour supprimer un contact
export async function deleteContact(id: number) {
    await db.delete(contactsTable).where(eq(contactsTable.id, id));
}
