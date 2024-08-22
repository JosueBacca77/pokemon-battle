// clearDatabase.ts

import { DataSource } from 'typeorm';
import { Pokemon } from '../pokemon/entities/pokemon.entity';
// import { Battle } from '../battle/entities/battle.entity';

const dataSource = new DataSource({
  type: 'sqlite',
  database: 'pokemon-battle.db',
  entities: [Pokemon],
  synchronize: false,
});

async function clearDatabase() {
  try {
    await dataSource.initialize();

    // const battleRepository = dataSource.getRepository(Battle);
    const pokemonRepository = dataSource.getRepository(Pokemon);

    // await battleRepository.clear();
    // console.log('Tabla de batallas limpiada');

    await pokemonRepository.clear();
    console.log('Tabla de Pokémon limpiada');
  } catch (error) {
    console.error('Error al limpiar la base de datos:', error);
  } finally {
    await dataSource.destroy();
  }
}

clearDatabase();
