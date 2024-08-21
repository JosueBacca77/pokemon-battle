import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pokemon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  hp: number;

  @Column()
  attack: number;

  @Column()
  defense: number;

  @Column()
  speed: number;

  @Column({ nullable: true })
  imageUrl: string | null;

  @Column({ nullable: true })
  type: string | null;
}
