
import './Battle.css'
import BattleWinner from './BattleWinner/BatleWinner';
import { useState } from 'react';
import { Pokemon } from '@/models/Pokemon';
import { BattleProps } from './types';
import Players from './Players/Players';

export default function Battle(props:BattleProps) {

  const { pokemonSelected, pokemonOponent, isSelectingOponent } = props;

  const [winner, setWinner] = useState<Pokemon | null>(null);

  return (
    <div className="BattleWrapper">
      {
        winner && <BattleWinner winnerName={winner.name} />
      }
      <Players isSelectingOponent={isSelectingOponent} pokemonSelected={pokemonSelected} pokemonOponent={pokemonOponent} />
    </div>
  )
}
