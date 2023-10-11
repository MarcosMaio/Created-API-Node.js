import { sql } from './db.js'

export class DatabasePostgres {
    
    async list() {
        const characters = await sql`select * from characters`

        return characters
    }

    async create(Characters) {
        const { name, description, image} = Characters

        await sql`insert into Characters (name, description, image) VALUES (${name}, ${description}, ${image})`
    }

    async update(Characters) {
        const { name, description, image, id} = Characters

        await sql`update Characters set name = ${name}, description = ${description}, image = ${image} WHERE id = ${id}`
    }

    async delete(id) {
        await sql`delete from Characters where id = ${id}`
    }
}