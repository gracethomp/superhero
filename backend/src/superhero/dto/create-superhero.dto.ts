import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateSuperheroDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  public nickname: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  public real_name: string;

  @IsNotEmpty()
  @IsString()
  public origin_description: string;

  @IsNotEmpty()
  @IsString()
  public superpowers: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  public catch_phrase: string;
}
