// src/db/queries/select.ts
import { eq } from 'drizzle-orm';
import { db } from '../index';
import { adminTable, actualSituationTable, skillsTable, projectsTable, contactsTable } from '../schema';

// Fonction pour obtenir un utilisateur par ID
export async function getAdminUserById(id: number) {
  return db.select().from(adminTable).where(eq(adminTable.id, id)).limit(1).get();
}

// Fonction pour obtenir la situation actuelle
export async function getActualSituation() {
  const result = await db.select().from(actualSituationTable).limit(1);
  return result[0] || null; 
}

// Fonction pour obtenir toutes les compétences
export async function getAllSkills() {
  return db.select().from(skillsTable);
}

// Fonction pour obtenir tous les projets
export async function getAllProjects() {
  return db.select().from(projectsTable);
}

// Fonction pour obtenir tous les contacts
export async function getAllContacts() {
  return db.select().from(contactsTable);
}
