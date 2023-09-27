import {
  Column,
  Model,
  Table,
  NotEmpty,
  BelongsToMany,
} from 'sequelize-typescript';
import { InferAttributes, InferCreationAttributes } from 'sequelize/types';
import { PowerHero, Superhero } from 'src/superhero';

@Table({ timestamps: false })
export class Superpower extends Model<
  InferAttributes<Superpower>,
  InferCreationAttributes<Superpower>
> {
  @NotEmpty
  @Column
  public superpower: string;

  // @BelongsToMany(() => Superhero, () => PowerHero)
  // superheroes: Superhero[];
}
