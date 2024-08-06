import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';


// Table pour stocker les utilisateurs
export const adminTable = sqliteTable('admin', {
    id: integer('id').primaryKey(),
    username: text('username').unique().notNull(),
    password: text('password').notNull(),
});

export const actualSituationTable = sqliteTable('actualSituation', {
    id: integer('id').primaryKey(),
    content: text('content').notNull(),
});


// Table pour stocker les compétences
export const skillsTable = sqliteTable('skills', {
    id: integer('id').primaryKey(),
    title: text('title').notNull(),
    content: text('content').notNull(),
    image: text('image').notNull(),
});

// Table pour stocker les projets
export const projectsTable = sqliteTable('projects', {
    id: integer('id').primaryKey(),
    title: text('title').notNull(),
    url: text('url').notNull(),
    image: text('image').notNull(),
    type: text('type').notNull(),
});

// Table pour stocker les contacts
export const contactsTable = sqliteTable('contacts', {
    id: integer('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull(),
    message: text('message').notNull(),
});


export type InsertUser = typeof adminTable.$inferInsert;
export type SelectUser = typeof adminTable.$inferSelect;
export type InsertActualSituation = typeof actualSituationTable.$inferInsert;
export type SelectActualSituation = typeof actualSituationTable.$inferSelect;