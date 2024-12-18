import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CanBeUndefined } from '../../utilities/can-be-undefined';

export class ReplaceArticleDto {
  @IsNotEmpty()
  @ApiProperty()
  title: string;

  @CanBeUndefined()
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  content?: string;
}
