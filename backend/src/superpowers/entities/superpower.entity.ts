import { Column, Model, Table } from 'sequelize-typescript';
import { InferAttributes, InferCreationAttributes } from 'sequelize/types';

@Table({ timestamps: false })
export class Superpower extends Model<
  InferAttributes<Superpower>,
  InferCreationAttributes<Superpower>
> {
  @Column
  public superpower: string;
}
