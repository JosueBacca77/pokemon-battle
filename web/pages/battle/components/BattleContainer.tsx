"use client"
import Typography from '@mui/material/Typography';
import PokemonsList from './PokemonsList/PokemonsList';
import './BattleContainer.css'
import { Pokemon } from '@/models/Pokemon';
import Battle from './Battle/Battle';

const POKEMON_SELECTED: Pokemon= {
  "id":3,
  "name": "Pikachu",
  "hp": 4,
  "attack": 4,
  "defense": 3,
  "speed": 5,
  "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png",
  "type": "Land"
}

export default function BattleContainer() {
  return (
    <div className="battleWrapper">
      <Typography variant='h2' component="h2" fontWeight={500} textAlign={"left"}>
        Battle of Pokemon
      </Typography>
      <PokemonsList />

      <Battle pokemonSelected={POKEMON_SELECTED} />

    </div>
  )
}
