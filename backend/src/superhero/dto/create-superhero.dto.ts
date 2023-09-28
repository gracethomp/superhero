import {
  IsArray,
  IsNotEmpty,
  IsString,
  MaxLength,
  ArrayMinSize,
  IsNumberString,
} from 'class-validator';
import { UniqueArrayValues } from 'src/utils';

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

  @IsArray()
  @ArrayMinSize(1, { message: 'At least one number is required' })
  @IsNumberString(
    {},
    {
      each: true,
      message: 'All items in the array must be numbers',
    },
  )
  @UniqueArrayValues({ message: 'Superpowers ids must be unique' })
  public superpowers: string[];

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  public catch_phrase: string;

  @IsNotEmpty()
  @IsArray()
  @IsString()
  public mediaIds: string[];
}
