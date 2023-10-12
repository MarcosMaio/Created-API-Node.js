//import { createServer } from 'node:http'

//const server = createServer((request, response) => {
   // response.write('oi')

   // return response.end()
// })

//server.listen(3333)

import { fastify } from 'fastify'
import cors from '@fastify/cors'
import { DatabasePostgres } from './database-postgres.js'
import path from 'path';
import fastifyStatic from '@fastify/static';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename); 


const server = fastify()

server.register(cors, {
    origin: true
})

server.register(fastifyStatic, {
    root: path.join(__dirname, 'static'),
    prefix: '/static/'
});

//const database = new DatabaseMemory()

const database = new DatabasePostgres

server.post('/characters', async (request, reply) => {
    const {name, description, image} = request.body

    await database.create({
        name: name,
        description: description,
        image: image,
    })

    return reply.status(201).send()
})

server.get('/characters', async () => {
    const characters = await database.list();

    
    const charactersWithFullImageURLs = characters.map((character) => {
        return {
            ...character,
            image: `https://created-api-node-js.onrender.com/${character.image}`
        };
    });

    return charactersWithFullImageURLs;
});
server.put('/characters/:id', async (request, reply) => {
    const charactersId = request.params.id
    const {name, description, image} = request.body

    await database.update({
        id: charactersId,
        name: name,
        description: description,
        image: image,
    })

    return reply.status(204).send()
})

server.delete('/characters/:id', async (request, reply) => {
    const charactersId = request.params.id
    
    await database.delete(charactersId)

    return reply.status(204).send()
})

server.listen({
    host: '0.0.0.0',
    port: process.env.PORT ?? 3333,
})