import { useContext } from "react";
import { PokemonContext } from "./PokemonsProvider";

export const usePokemonsContext = () => {
    const context = useContext(PokemonContext);
    if (!context) {
      throw new Error('usePokemonContext must be used within a PokemonProvider');
    }
    return context;
  };