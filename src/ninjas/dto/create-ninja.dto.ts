import { IsBoolean, IsEnum, IsOptional, IsString } from 'class-validator';
import { NinjaRank } from '../entity/ninjas.entity';

export class CreateNinjaDto {
  @IsString()
  name: string;

  @IsEnum(NinjaRank)
  rank: NinjaRank;

  @IsOptional()
  @IsBoolean()
  available?: boolean;
}
