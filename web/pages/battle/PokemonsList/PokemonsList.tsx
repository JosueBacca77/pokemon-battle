import { Typography } from "@mui/material";
import PokemonItem from "./PokemonItem/PokemonItem";
import "./PokemonsList.css"

export default function PokemonsList() {
  return (
    <div className="pokemonsListWrapper">
        <Typography variant="h5" component="h5">
            Select your Pokemon
        </Typography>
        <div className="pokemonsList">
            <PokemonItem />
            <PokemonItem />

            <PokemonItem />

            <PokemonItem />

            <PokemonItem />

        </div>
  </div>
  )
}
