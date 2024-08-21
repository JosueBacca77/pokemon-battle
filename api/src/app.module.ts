import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { PokemonModule } from './pokemon/pokemon.module'; // Importa el módulo que creaste
import { ConfigModule } from '@nestjs/config';
import { DatabaseConfigService } from './configs/DatabaseConfiguration.service';
import { DatabaseConfigModule } from './configs/DatabaseConfiguration.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  DatabaseConfigModule, // Importa el módulo de configuración de la base de datos
  TypeOrmModule.forRootAsync({
    imports: [DatabaseConfigModule],
    inject: [DatabaseConfigService],
    useFactory: async (databaseConfigService: DatabaseConfigService): Promise<TypeOrmModuleOptions> => {
      
      return databaseConfigService.getDatabaseConfig();
    },
  }),
  PokemonModule,
],
providers: [DatabaseConfigService],
})
export class AppModule {}
