import { Column, Model, Table, NotEmpty } from 'sequelize-typescript';
import { InferAttributes, InferCreationAttributes } from 'sequelize/types';

@Table({ timestamps: false })
export class Media extends Model<
  InferAttributes<Media>,
  InferCreationAttributes<Media>
> {
  @NotEmpty
  @Column
  public mediaId: string;

  @NotEmpty
  @Column
  public superhero_id: number;
}
