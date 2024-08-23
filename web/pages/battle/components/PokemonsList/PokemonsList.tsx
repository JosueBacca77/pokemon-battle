import PokemonItem from "./PokemonItem/PokemonItem";
import "./PokemonsList.css"
import Text from "@/components/Text/Text";
import { PokemonsListProps } from "./types";

export default function PokemonsList(props:PokemonsListProps) {

  const { pokemons, handleSelectPokemon } = props;

  return (
    <div className="pokemonsListWrapper">
        <Text variant="h5" fontWeight={400} value="Select your Pokemon" />
        <div className="pokemonsList">
          {
            pokemons.map((pokemon) => 
              <div onClick={() => handleSelectPokemon(pokemon)}>
                <PokemonItem pokemon={pokemon}/>
              </div>
            )
          }
        </div>
  </div>
  )
}
