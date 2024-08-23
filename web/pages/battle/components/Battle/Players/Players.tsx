import { PlayersProps } from "./types";
import Button from "@/components/Button/Button";
import './Players.css'
import PokemonCard from "./PokemonCard/PokemonCard";
// import { usePokemonsContext } from "@/context/PokemonsContext/usePokemonsContext";

export default function Players(props:PlayersProps) {

    const { pokemonSelected, pokemonOponent, isSelectingOponent, handleBattle } = props;

    // const { pokemons, setPokemons } = usePokemonsContext();

  return (
    <div className="players-wrapper-container">
        <PokemonCard pokemon={pokemonSelected} />
        
        <Button text={'Start Battle'} color="success" variant="contained" onClick={handleBattle}/>
        {
            !isSelectingOponent && pokemonOponent &&
            <PokemonCard pokemon={pokemonOponent} />
        } 
        {
          isSelectingOponent && <div className="loading-pokemons">Loading pokemons...</div>
        }
    </div>
  )
}
