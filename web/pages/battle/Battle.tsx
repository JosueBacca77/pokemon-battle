"use client"
import Typography from '@mui/material/Typography';
import PokemonsList from './PokemonsList/PokemonsList';
import './Battle.css'

export default function Battle() {
  return (
    <div className="battleWrapper">
      <Typography variant='h2' component="h2">
        Battle of Pokemon
      </Typography>
      <PokemonsList />

    </div>
  )
}
