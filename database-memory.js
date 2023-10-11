export class DatabaseMemory {
    #Characters = new Map()
    
    list() {
        return Array.from(this.#Characters.entries()).map((charactersArray) => {
            const id = charactersArray[0]
            const date = charactersArray[1]

            return {
                id,
                ...date
            }
        });
    }

    create(Characters) {
        const nextId = Math.max(0, ...this.#Characters.keys()) + 1;
        this.#Characters.set(nextId.toString(), Characters); // Use nextId como chave no mapa
    }

    update(id, Characters) {
        this.#Characters.set(id,Characters)
    }

    delete(id) {
        this.#Characters.delete(id);
    }
}