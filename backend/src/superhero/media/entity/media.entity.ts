import {
  Column,
  Model,
  Table,
  NotEmpty,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { InferAttributes, InferCreationAttributes } from 'sequelize/types';
import { Superhero } from 'src/superhero';

@Table({ timestamps: false })
export class Media extends Model<
  InferAttributes<Media>,
  InferCreationAttributes<Media>
> {
  @NotEmpty
  @Column
  public mediaId: string;

  @NotEmpty
  @ForeignKey(() => Superhero)
  @Column
  public superhero_id: number;

  @BelongsTo(() => Superhero)
  superhero: Superhero;
}
