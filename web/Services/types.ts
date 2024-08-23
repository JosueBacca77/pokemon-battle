import { Pokemon } from "@/models/Pokemon";

export type GetPokemonsParams = {
    signal: AbortSignal
};

export type GetPokemonsResponse = {
    success: boolean;
    pokemons: Pokemon[]
};