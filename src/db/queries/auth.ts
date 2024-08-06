// src/db/queries/auth.ts
import { db } from '../index';
import { adminTable } from '../schema';
import * as bcrypt from 'bcrypt';
import { eq } from 'drizzle-orm';

// Fonction pour obtenir un utilisateur par nom d'utilisateur
async function getAdminUserByUsername(username: string) {
  return db.select().from(adminTable).where(eq(adminTable.username, username)).get();
}

// Fonction pour vérifier les identifiants de l'utilisateur
export async function verifyAdminCredentials(username: string, password: string): Promise<boolean> {
  const adminUser = await getAdminUserByUsername(username);
  if (!adminUser) {
    return false;
  }
  return bcrypt.compare(password, adminUser.password);
}
