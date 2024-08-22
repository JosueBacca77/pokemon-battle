import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Battle {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pokemon, { eager: true })
  pokemon1: Pokemon;

  @ManyToOne(() => Pokemon, { eager: true })
  pokemon2: Pokemon;

  @Column()
  winnerId: number;

  @CreateDateColumn()
  startTime: Date;

  @Column()
  endTime: Date;

  @Column({ type: 'integer' }) // Usar INTEGER para la duración en milisegundos
  duration: number;

  @Column()
  rounds: number;

  @Column()
  winnerHp: number;
}
