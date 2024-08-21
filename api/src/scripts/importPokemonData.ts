// importPokemonData.ts

import { DataSource } from 'typeorm';
import { Pokemon } from '../pokemon/entities/pokemon.entity';
import {pokemon as pokemonData} from '../../data/pokemon.json'; // Importa los datos desde el JSON

// Configuración de la conexión usando DataSource
const dataSource = new DataSource({
  type: 'sqlite',
  database: 'pokemon-battle.db',
  entities: [Pokemon],
  synchronize: false, // Sincronización solo en migraciones
});

async function importPokemonData() {
  try {
    // Inicializar la conexión
    await dataSource.initialize();
    const pokemonRepository = dataSource.getRepository(Pokemon);

    // Mapear los datos del JSON ignorando el campo 'id'
    const pokemons = pokemonData.map((data) => {
      const pokemon = new Pokemon();
      pokemon.name = data.name;
      pokemon.attack = data.attack;
      pokemon.defense = data.defense;
      pokemon.speed = data.speed;
      pokemon.hp = data.hp;
      pokemon.imageUrl = data.imageUrl;
      pokemon.type = data.type;
      return pokemon;
    });

    // Guardar los datos en la base de datos
    await pokemonRepository.save(pokemons);
    console.log('Datos importados correctamente');
  } catch (error) {
    console.error('Error al importar los datos:', error);
  } finally {
    // Finalizar la conexión
    await dataSource.destroy();
  }
}

importPokemonData();
