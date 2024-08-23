import { Pokemon } from "@/models/Pokemon.model";

export type PlayersProps = {
    pokemonSelected: Pokemon;
    pokemonOponent: Pokemon | null;
    isSelectingOponent: boolean;
    handleBattle: () => void;
}