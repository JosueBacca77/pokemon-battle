import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class DatabaseConfigService {
  constructor(private configService: ConfigService) {}

  public getDatabaseConfig(): TypeOrmModuleOptions {
    return {
      type: 'sqlite',
      database: this.configService.get<string>('DATABASE'),
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Cambiar a `false` en producción y usar migraciones
    };
  }
}
