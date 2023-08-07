import { IsNotEmpty, IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateNoteDto {
  @IsNotEmpty({ message: 'Time cannot be empty' })
  @IsString({ message: 'Time must be a string' })
  time: string;

  @IsNotEmpty({ message: 'Content cannot be empty' })
  @IsString({ message: 'Content must be a string' })
  content: string;

  @IsNotEmpty({ message: 'Category cannot be empty' })
  @IsString({ message: 'Category must be a string' })
  category: string;

  @IsOptional()
  @IsBoolean({ message: 'Archived must be a boolean' })
  archived?: boolean;
}

export class UpdateNoteDto {
  @IsNotEmpty({ message: 'Time cannot be empty' })
  @IsString({ message: 'Time must be a string' })
  time: string;

  @IsNotEmpty({ message: 'Content cannot be empty' })
  @IsString({ message: 'Content must be a string' })
  content: string;

  @IsNotEmpty({ message: 'Category cannot be empty' })
  @IsString({ message: 'Category must be a string' })
  category: string;

  @IsOptional()
  @IsBoolean({ message: 'Archived must be a boolean' })
  archived?: boolean;
}
