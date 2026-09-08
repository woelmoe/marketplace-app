import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  old_price?: number;

  @Column({ nullable: true })
  discount?: number;

  @Column('decimal', { precision: 3, scale: 2, default: 0 })
  rating: number;

  @Column({ default: 0 })
  reviews: number;

  @Column({ default: false })
  is_in_cart: boolean;

  @Column({ default: false })
  is_fast_view: boolean;

  @Column({ type: 'date', nullable: true })
  delivery_date?: string;

  @Column({ type: 'jsonb', default: [] })
  properties: Record<string, any>[];

  @Column('text', { array: true, default: {} })
  imgs: string[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
