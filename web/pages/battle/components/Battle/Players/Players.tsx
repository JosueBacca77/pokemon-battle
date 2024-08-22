import Card from "@/components/Card/Card";
import { PlayersProps } from "./types";

export default function Players(props:PlayersProps) {

    const { playerSelected } = props;

  return (
    <div className="PlayersWrapper">

        <Card>
            <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png" alt="Pikachu" />
        </Card>
        
        <Card>
        <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png" alt="Pikachu" />

        </Card>

    </div>
  )
}
