"use client"
import PokemonsList from './PokemonsList/PokemonsList';
import './BattleContainer.css'
import { Pokemon } from '@/models/Pokemon';
import Battle from './Battle/Battle';
import Text from '@/components/Text/Text';
import { useEffect, useState } from 'react';
import useGetPokemons from '@/pages/pokemons/hooks/useGetPokemons';

const POKEMON_SELECTED: Pokemon= {
  "id":3,
  "name": "Pikachu",
  "hp": 4,
  "attack": 4,
  "defense": 3,
  "speed": 5,
  "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png",
  "type": "Land"
}

export default function BattleContainer() {

  const [pokemonSelected, setPokemonSelected] = useState<Pokemon | null>(null);

  const getPokemons = useGetPokemons();

  const handleSelectPokemon = (pokemon: Pokemon) => {
    setPokemonSelected(pokemon)
  }

  useEffect(() => {
    getPokemons.get()
  }, [])

  
  return (
    <div className="battle-wrapper">
      {
        getPokemons.data && 
        <>
          <Text variant="h2" fontWeight={400} value='Battle of Pokemon' />
          <PokemonsList pokemons={getPokemons.data} handleSelectPokemon={handleSelectPokemon}/>
          <Battle pokemonSelected={POKEMON_SELECTED} />
        </>
      }
    </div>
  )
}
