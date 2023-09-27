import { Model, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Superhero } from './superhero.entity';
import { Superpower } from 'src/superpowers';

@Table({ timestamps: false })
export class PowerHero extends Model<PowerHero> {
  @ForeignKey(() => Superhero)
  superhero_id: number;

  @ForeignKey(() => Superpower)
  superpower_id: number;

  @BelongsTo(() => Superhero)
  superhero: Superhero;

  @BelongsTo(() => Superpower)
  superpower: Superpower;
}
