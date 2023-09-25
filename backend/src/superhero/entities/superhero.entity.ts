import { Column, Model, Table, DataType } from 'sequelize-typescript';
import { InferAttributes, InferCreationAttributes } from 'sequelize/types';

@Table({ timestamps: false })
export class Superhero extends Model<
  InferAttributes<Superhero>,
  InferCreationAttributes<Superhero>
> {
  @Column
  public nickname: string;

  @Column
  public real_name: string;

  @Column({ type: DataType.TEXT })
  public origin_description: string;

  @Column({ type: DataType.TEXT })
  public superpowers: string;

  @Column
  public catch_phrase: string;
}
