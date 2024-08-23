import { Pokemon } from '@/models/Pokemon.model';
import React, { createContext, useContext, useState } from 'react';

interface PokemonContextProps {
  pokemons: Pokemon[] | null;
  setPokemons: React.Dispatch<React.SetStateAction<Pokemon[] | null>>;
}

export const PokemonContext = createContext<PokemonContextProps | undefined>(undefined);

export const PokemonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [pokemons, setPokemons] = useState<Pokemon[] | null>(null);

  return (
    <PokemonContext.Provider value={{ pokemons, setPokemons }}>
      {children}
    </PokemonContext.Provider>
  );
};