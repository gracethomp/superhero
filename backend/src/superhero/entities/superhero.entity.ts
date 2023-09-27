import {
  Column,
  Model,
  Table,
  DataType,
  NotEmpty,
  BelongsToMany,
} from 'sequelize-typescript';
import { InferAttributes, InferCreationAttributes } from 'sequelize/types';
import { Superpower } from 'src/superpowers';
import { PowerHero } from './power-hero.entity';

@Table({ timestamps: false })
export class Superhero extends Model<
  InferAttributes<Superhero>,
  InferCreationAttributes<Superhero>
> {
  @NotEmpty
  @Column
  public nickname: string;
  @NotEmpty
  @Column
  public real_name: string;

  @NotEmpty
  @Column({ type: DataType.TEXT })
  public origin_description: string;

  @NotEmpty
  @Column
  public catch_phrase: string;

  @BelongsToMany(() => Superpower, () => PowerHero)
  superpowers: Superpower[];
}
