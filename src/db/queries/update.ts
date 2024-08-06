// src/db/queries/update.ts
import { eq } from 'drizzle-orm';
import { db } from '../index';
import { actualSituationTable, skillsTable, projectsTable, contactsTable } from '../schema';

// Fonction pour mettre à jour une situation actuelle
export async function updateActualSituation(id: number, data: Partial<{ content: string }>) {
    await db.update(actualSituationTable).set(data).where(eq(actualSituationTable.id, id));
}

// Fonction pour mettre à jour une compétence
export async function updateSkill(id: number, data: Partial<{ title: string; content: string; image: string }>) {
    await db.update(skillsTable).set(data).where(eq(skillsTable.id, id));
}

// Fonction pour mettre à jour un projet
export async function updateProject(id: number, data: Partial<{ title: string; url: string; image: string }>) {
    await db.update(projectsTable).set(data).where(eq(projectsTable.id, id));
}


