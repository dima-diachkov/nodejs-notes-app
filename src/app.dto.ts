import { IsNotEmpty, IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateNoteDto {
  @IsNotEmpty()
  @IsString()
  time: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsOptional()
  @IsBoolean()
  archived?: boolean;
}

export class UpdateNoteDto {
  @IsOptional()
  @IsString()
  time?: string;

  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @IsBoolean()
  archived?: boolean;
}
