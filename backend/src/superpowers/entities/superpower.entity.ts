import { Column, Model, Table, NotEmpty } from 'sequelize-typescript';
import { InferAttributes, InferCreationAttributes } from 'sequelize/types';

@Table({ timestamps: false })
export class Superpower extends Model<
  InferAttributes<Superpower>,
  InferCreationAttributes<Superpower>
> {
  @NotEmpty
  @Column
  public superpower: string;
}
