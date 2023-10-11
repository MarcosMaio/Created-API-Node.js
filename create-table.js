import { sql } from './db.js'

sql `
    CREATE TABLE characters (
        id serial PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        image VARCHAR(255)
);
`.then(() => {
    console.log('Characters table created');
})