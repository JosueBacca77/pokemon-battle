import { Typography } from '@mui/material';
import "./PokemonItem.css"
import Card from '@/components/Card/Card';

export default function PokemonItem() {
  return (
    <Card classes={{"root": "pokemonCard"}}>
        <img className='pokemonImage' src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png" alt="Pikachu" />
        <Typography component="p">
            Pikachu
        </Typography>
    </Card>
  )
}
