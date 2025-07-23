import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum NinjaRank {
  GENIN = 'Genin',
  CHUNIN = 'Chunin',
  JOUNIN = 'Jounin',
}

@Entity()
export class Ninja {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: NinjaRank,
  })
  rank: NinjaRank;

  @Column({ default: true })
  available: boolean;

  @Column({ nullable: true })
  cv: string;
}
