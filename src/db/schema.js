"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactsTable = exports.projectsTable = exports.skillsTable = exports.actualSituationTable = exports.adminTable = void 0;
var sqlite_core_1 = require("drizzle-orm/sqlite-core");
// Table pour stocker les utilisateurs
exports.adminTable = (0, sqlite_core_1.sqliteTable)('admin', {
    id: (0, sqlite_core_1.integer)('id').primaryKey(),
    username: (0, sqlite_core_1.text)('username').unique().notNull(),
    password: (0, sqlite_core_1.text)('password').notNull(),
});
exports.actualSituationTable = (0, sqlite_core_1.sqliteTable)('actualSituation', {
    id: (0, sqlite_core_1.integer)('id').primaryKey(),
    content: (0, sqlite_core_1.text)('content').notNull(),
});
// Table pour stocker les compétences
exports.skillsTable = (0, sqlite_core_1.sqliteTable)('skills', {
    id: (0, sqlite_core_1.integer)('id').primaryKey(),
    title: (0, sqlite_core_1.text)('title').notNull(),
    content: (0, sqlite_core_1.text)('content').notNull(),
    image: (0, sqlite_core_1.text)('image').notNull(),
});
// Table pour stocker les projets
exports.projectsTable = (0, sqlite_core_1.sqliteTable)('projects', {
    id: (0, sqlite_core_1.integer)('id').primaryKey(),
    title: (0, sqlite_core_1.text)('title').notNull(),
    url: (0, sqlite_core_1.text)('url').notNull(),
    image: (0, sqlite_core_1.text)('image').notNull(),
    type: (0, sqlite_core_1.text)('type').notNull(),
});
// Table pour stocker les contacts
exports.contactsTable = (0, sqlite_core_1.sqliteTable)('contacts', {
    id: (0, sqlite_core_1.integer)('id').primaryKey(),
    name: (0, sqlite_core_1.text)('name').notNull(),
    email: (0, sqlite_core_1.text)('email').notNull(),
    message: (0, sqlite_core_1.text)('message').notNull(),
});
