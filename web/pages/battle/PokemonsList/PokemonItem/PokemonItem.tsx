import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import "./PokemonItem.css"

export default function PokemonItem() {
  return (
    <Card classes={{"root": "pokemonCard"}}>
        <img className='pokemonImage' src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png" alt="Pikachu" />
        <Typography  component="p">
            Pikachu
        </Typography>
    </Card>
  )
}
