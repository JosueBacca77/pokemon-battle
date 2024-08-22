
import './Battle.css'
import BattleWinner from './BattleWinner/BatleWinner';
import { useState } from 'react';
import { Pokemon } from '@/models/Pokemon';

export default function Battle() {

  const [winner, setWinner] = useState<Pokemon | null>(null);

  return (
    <div className="BattleWrapper">
      {
        winner && <BattleWinner winnerName={winner.name} />
      }
    </div>
  )
}
