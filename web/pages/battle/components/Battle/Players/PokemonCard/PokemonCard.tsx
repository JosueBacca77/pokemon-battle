import Card from "@/components/Card/Card";
import { PokemonCardProps } from "./types";

export default function PokemonCard(props: PokemonCardProps) {

    const { pokemon } = props;


  return (
    <Card>
        Pokemon
    </Card>
  )
}
