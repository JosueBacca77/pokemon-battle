import Card from "@/components/Card/Card";
import { PlayersProps } from "./types";
import Button from "@/components/Button/Button";
import './Players.css'
import PokemonCard from "./PokemonCard/PokemonCard";

export default function Players(props:PlayersProps) {

    const { pokemonSelected } = props;

  return (
    <div className="players-wrapper-container">

        <PokemonCard pokemon={pokemonSelected} />
        
        
        <Button text={'Start Battle'} />

        <div className="pokemon-card">
            <Card
                cardMediaUrl="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png"
            >
                <div>POKEMON DATA</div>
            </Card>
        </div>

    </div>
  )
}
