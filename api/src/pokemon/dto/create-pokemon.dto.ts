import { IsNotEmpty, IsNumber, IsString, Min, Max, IsOptional } from 'class-validator';

export class CreatePokemonDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(255)
  attack: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(255)
  defense: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(255)
  speed: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(255)
  hp: number;

  @IsOptional()  // Permite que sea opcional
  @IsString()
  imageUrl?: string;

  @IsOptional()  // Permite que sea opcional
  @IsString()
  type?: string;
}
