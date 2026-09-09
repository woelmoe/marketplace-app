import {
  IsString,
  IsNumber,
  IsOptional,
  IsBoolean,
  IsArray,
  IsDateString,
  Min,
  Max,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  title: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsNumber()
  @Min(0)
  @IsOptional()
  old_price?: number;

  @IsNumber()
  @Min(0)
  @Max(100)
  @IsOptional()
  discount?: number;

  @IsNumber()
  @Min(0)
  @Max(5)
  @IsOptional()
  rating?: number;

  @IsNumber()
  @Min(0)
  @IsOptional()
  reviews?: number;

  @IsBoolean()
  @IsOptional()
  is_in_cart?: boolean;

  @IsBoolean()
  @IsOptional()
  is_fast_view?: boolean;

  @IsDateString()
  @IsOptional()
  delivery_date?: string;

  @IsArray()
  @IsOptional()
  properties?: Record<string, any>[];

  @IsArray()
  @IsOptional()
  imgs?: string[];
}
