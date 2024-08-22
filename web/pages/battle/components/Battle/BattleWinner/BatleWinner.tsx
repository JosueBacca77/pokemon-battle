import Text from "@/components/Text/Text";
import { BattleWinnerProps } from "../types";
import './Battle.css'

export default function BattleWinner(props:BattleWinnerProps) {

   const { winnerName } = props

  return (
    <div className="BattleWinnerWrapper">
      <Text value={winnerName} variant='h2' fontWeight={500} textAlign={"left"} />
    </div>
  )
}
