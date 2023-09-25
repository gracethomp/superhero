import { IsNotEmpty, IsString, Max } from 'class-validator';

export class CreateSuperheroDto {
  @IsNotEmpty()
  @IsString()
  @Max(255)
  public nickname: string;

  @IsNotEmpty()
  @IsString()
  @Max(255)
  public real_name: string;

  @IsNotEmpty()
  @IsString()
  public origin_description: string;

  @IsNotEmpty()
  @IsString()
  public superpowers: string;

  @IsNotEmpty()
  @IsString()
  @Max(255)
  public catch_phrase: string;
}
