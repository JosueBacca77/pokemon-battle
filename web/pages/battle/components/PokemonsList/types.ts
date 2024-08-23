import { Pokemon } from "@/models/Pokemon"

export type PokemonsListProps = {
    pokemons: Pokemon[];
    handleSelectPokemon: (pokemon:Pokemon) => void
}