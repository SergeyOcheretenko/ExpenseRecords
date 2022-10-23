import { IsNumber, IsString, IsUUID } from 'class-validator';

export class CreateRecordDto {
  @IsUUID()
  userId: string;

  @IsString()
  categoryId: string;

  @IsNumber()
  expense: number;
}
