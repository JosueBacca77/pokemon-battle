
import './Battle.css'
import BattleWinner from './BattleWinner/BatleWinner';
import { useEffect, useState } from 'react';
import { Pokemon } from '@/models/Pokemon';
import { BattleProps } from './types';
import Players from './Players/Players';

const POKEMON_OPONENT: Pokemon= {
  "id":1,
  "name": "Eevve",
  "hp": 3,
  "attack": 5,
  "defense": 3,
  "speed": 2,
  "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png",
  "type": "Land"
}

export default function Battle(props:BattleProps) {

  const { pokemonSelected } = props;

  const [winner, setWinner] = useState<Pokemon | null>(null);
  const [pokemonOponent, setPokemonOponent] = useState<Pokemon | null>(null);


  useEffect(() => {
    setPokemonOponent(POKEMON_OPONENT)
  
  }, [])
  
  return (
    <div className="BattleWrapper">
      {
        winner && <BattleWinner winnerName={winner.name} />
      }
      {
        pokemonOponent && <Players pokemonSelected={pokemonOponent} pokemonOponent={pokemonSelected} />
      }
    </div>
  )
}
