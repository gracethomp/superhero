import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateSuperpowerDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  public superpower: string;
}
