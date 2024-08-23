import { PlayersProps } from "./types";
import Button from "@/components/Button/Button";
import './Players.css'
import PokemonCard from "./PokemonCard/PokemonCard";

export default function Players(props:PlayersProps) {

    const { pokemonSelected, pokemonOponent } = props;

  return (
    <div className="players-wrapper-container">
        <PokemonCard pokemon={pokemonSelected} />
        
        <Button text={'Start Battle'} color="success" variant="contained"/>

        <PokemonCard pokemon={pokemonOponent} />
    </div>
  )
}
