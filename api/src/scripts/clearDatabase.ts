// clearDatabase.ts

import { DataSource } from 'typeorm';
import { Pokemon } from '../pokemon/entities/pokemon.entity';

// Configuración de la conexión usando DataSource
const dataSource = new DataSource({
  type: 'sqlite',
  database: 'pokemon-battle.db',
  entities: [Pokemon],
  synchronize: false, // Sincronización solo en migraciones
});

async function clearDatabase() {
  try {
    // Inicializar la conexión
    await dataSource.initialize();
    const pokemonRepository = dataSource.getRepository(Pokemon);

    // Limpiar la base de datos
    await pokemonRepository.clear();
    console.log('Base de datos limpiada');
  } catch (error) {
    console.error('Error al limpiar la base de datos:', error);
  } finally {
    // Finalizar la conexión
    await dataSource.destroy();
  }
}

clearDatabase();
