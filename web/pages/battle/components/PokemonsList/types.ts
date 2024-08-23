import { Pokemon } from "@/models/Pokemon"

export type PokemonsListProps = {
    handleSelectPokemon: (pokemon:Pokemon) => void
}