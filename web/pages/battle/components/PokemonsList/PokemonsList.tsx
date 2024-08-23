import PokemonItem from "./PokemonItem/PokemonItem";
import "./PokemonsList.css"
import Text from "@/components/Text/Text";
import { PokemonsListProps } from "./types";
import { Pokemon } from "@/models/Pokemon";

const POKEMONS_LIST:Pokemon[] = [
  { id: 1, name: "Pikachu", hp: 4, attack: 4, defense: 3, speed: 5, imageUrl: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png", type: "Land" },
  { id: 2, name: "Eevve", hp: 3, attack: 5, defense: 3, speed: 2, imageUrl: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png", type: "Land" },
]

export default function PokemonsList(props:PokemonsListProps) {

  const { handleSelectPokemon } = props;

  return (
    <div className="pokemonsListWrapper">
        <Text variant="h5" fontWeight={400} value="Select your Pokemon" />
        <div className="pokemonsList">
          {
            POKEMONS_LIST.map((pokemon) => 
              <div onClick={() => handleSelectPokemon(pokemon)}>
                <PokemonItem pokemon={pokemon}/>
              </div>
            )
          }
        </div>
  </div>
  )
}
