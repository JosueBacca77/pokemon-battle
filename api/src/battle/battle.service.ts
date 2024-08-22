import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Battle } from './entities/battle.entity';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';

@Injectable()
export class BattleService {
  constructor(
    @InjectRepository(Battle)
    private battleRepository: Repository<Battle>,
    @InjectRepository(Pokemon)
    private pokemonRepository: Repository<Pokemon>,
  ) {}

  private determineOrder(pokemon1: Pokemon, pokemon2: Pokemon): [Pokemon, Pokemon] {
    if (pokemon1.speed > pokemon2.speed) return [pokemon1, pokemon2];
    if (pokemon2.speed > pokemon1.speed) return [pokemon2, pokemon1];
    if (pokemon1.attack > pokemon2.attack) return [pokemon1, pokemon2];
    return [pokemon2, pokemon1];
  }

  private pokemonHit(attacker: Pokemon, defender: Pokemon){
    const damage = Math.max(1, attacker.attack - defender.defense);
    defender.hp -= damage;
  }

  private pokemonAttack(attacker: Pokemon, defender: Pokemon) {
    this.pokemonHit(attacker, defender)
    if(defender.hp <= 0){
        return attacker
    }
    return null
  } 

  async fight(pokemon1Id: number, pokemon2Id: number): Promise<Battle> {
    const pokemon1 = await this.pokemonRepository.findOneOrFail({ where: { id: pokemon1Id } });
    const pokemon2 = await this.pokemonRepository.findOneOrFail({ where: { id: pokemon2Id } });

    if(!pokemon1) {
      throw new Error(`Pokemon with id ${pokemon1Id} not found`);
    }

    if(!pokemon2) {
        throw new Error(`Pokemon with id ${pokemon2Id} not found`);
    }

    let rounds = 0;
    let winner: Pokemon;

    const startTime = new Date();

    const [first, second] = this.determineOrder(pokemon1, pokemon2);

    while (true) {
      rounds++;

      winner = this.pokemonAttack(first, second)
      if(winner){
        break;
      }

      winner = this.pokemonAttack(second, first)
      if(winner){
        break;
      }
    }

    const endTime = new Date();
    const duration = endTime.getTime() - startTime.getTime(); // Almacenar la duración en milisegundos

    const battle = this.battleRepository.create({
      pokemon1,
      pokemon2,
      winnerId: winner.id,
      startTime,
      endTime,
      duration,
      rounds,
      winnerHp: winner.hp,
    });

    return this.battleRepository.save(battle);
  }

  async getAll(): Promise<Battle[]> {
    return await this.battleRepository.find();
  }

}
