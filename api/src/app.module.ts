import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { PokemonModule } from './pokemon/pokemon.module'; // Importa el módulo que creaste
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseConfigService } from './configs/DatabaseConfiguration.service';
import { DatabaseConfigModule } from './configs/DatabaseConfiguration.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  //   TypeOrmModule.forRoot({
  //     type: 'sqlite',
  //     database: 'pokemon-battle.db',
  //     entities: [__dirname + '/**/*.entity{.ts,.js}'],
  //     synchronize: true, // Para desarrollo, en producción deberías usar migraciones
  //   }),
  //   PokemonModule,
  // ],
  DatabaseConfigModule, // Importa el módulo de configuración de la base de datos
  TypeOrmModule.forRootAsync({
    imports: [DatabaseConfigModule],
    inject: [DatabaseConfigService],
    useFactory: async (databaseConfigService: DatabaseConfigService): Promise<TypeOrmModuleOptions> => {
      
      return databaseConfigService.getDatabaseConfig();
      // return {
      //   type: 'sqlite',
      //   database: databaseConfigService.get('DATABASE_NAME') || 'pokemon-battle.db',
      //   entities: [__dirname + '/**/*.entity{.ts,.js}'],
      //   synchronize: true, // Asegúrate de que esto es lo que deseas para tu entorno
      // };
    },
  }),
  PokemonModule,
],
providers: [DatabaseConfigService],
})
export class AppModule {}
