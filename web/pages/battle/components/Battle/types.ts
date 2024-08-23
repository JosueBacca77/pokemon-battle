import { Pokemon } from "@/models/Pokemon"

export type BattleProps = {
    pokemonSelected: Pokemon;
    pokemonOponent: Pokemon;
    isSelectingOponent: boolean;
}