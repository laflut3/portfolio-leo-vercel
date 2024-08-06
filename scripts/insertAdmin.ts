import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { adminTable } from '../src/db/schema';
import * as bcrypt from 'bcrypt';

config({ path: '.env.local' });

const client = createClient({
    url: process.env.NEXT_PUBLIC_TURSO_CONNECTION_URL!,
    authToken: process.env.NEXT_PUBLIC_TURSO_AUTH_TOKEN!,
});

const db = drizzle(client);

const adminUser = {
    username: 'leoByleo',
    password: 'Laflute34@'
};

async function insertAdmin() {
    try {
        const hashedPassword = await bcrypt.hash(adminUser.password, 10);
        const adminUserWithHashedPassword = { ...adminUser, password: hashedPassword };

        await db.insert(adminTable).values(adminUserWithHashedPassword);
        console.log('Admin user inserted successfully');
    } catch (error) {
        console.error('Error inserting admin user:', error);
    } finally {
        client.close();
    }
}

insertAdmin();
