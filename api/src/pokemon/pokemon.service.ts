import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: Repository<Pokemon>,
  ) {}

  async create(createPokemonDto: CreatePokemonDto): Promise<Pokemon> {
    const newPokemon = this.pokemonRepository.create(createPokemonDto);
    return this.pokemonRepository.save(newPokemon);
  }

  async findAll(): Promise<Pokemon[]> {
    return this.pokemonRepository.find();
  }

  async findOne(id: number): Promise<Pokemon> {
    return this.pokemonRepository.findOne({ where: { id } });
  }

  async update(id: number, updatePokemonDto: UpdatePokemonDto): Promise<Pokemon> {
    await this.pokemonRepository.update(id, updatePokemonDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.pokemonRepository.delete(id);
  }
}
