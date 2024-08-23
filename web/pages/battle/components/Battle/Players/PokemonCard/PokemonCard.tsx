import Card from "@/components/Card/Card";
import { PokemonCardProps } from "./types";
import "./PokemonCard.css"
import Text from "@/components/Text/Text";
import { PokemonStat } from "@/models/Pokemon";
import BorderLinearProgress from "@/components/BorderLinearProgress/BorderLinearProgress";
import { StatsLabels } from "@/constants/Stats";

export default function PokemonCard(props: PokemonCardProps) {

    const { pokemon } = props;

    const stats: PokemonStat[] = ['hp', 'attack', 'defense', 'speed']

  return (
    <div className="pokemon-card">
    <Card 
        cardMediaUrl="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png"
        classes={{"root": "pokemon-card"}}
    >
        <div className="pokemon-data">
            <Text value={pokemon.name} variant='subtitle1' fontWeight={500}  />
        
            {
                stats.map((stat) => 
                    <div className="pokemon-stat-wrapper">
                        <Text value={StatsLabels[stat]} variant='caption' fontWeight={200} />
                        <div className="linear-progress-wrapper">
                            <BorderLinearProgress value={pokemon[stat]*10}/>
                        </div>
                    </div>
                )
            }
        </div>
    </Card>
</div>
  )
}
