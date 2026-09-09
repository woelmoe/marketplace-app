import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, Like } from 'typeorm'
import { Product } from './entities/product.entity'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ) {}

  async findAll(limit = 100, offset = 0) {
    const [data, total] = await this.productRepository.findAndCount({
      take: limit,
      skip: offset,
      order: { id: 'ASC' }
    })

    return { data, total }
  }

  async findOne(id: number) {
    const product = await this.productRepository.findOne({ where: { id } })
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`)
    }
    return product
  }

  async create(createProductDto: CreateProductDto) {
    const product = this.productRepository.create(createProductDto)
    return this.productRepository.save(product)
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.findOne(id)
    Object.assign(product, updateProductDto)
    return this.productRepository.save(product)
  }

  async remove(id: number) {
    const result = await this.productRepository.delete(id)
    if (result.affected === 0) {
      throw new NotFoundException(`Product #${id} not found`)
    }
    return { success: true, message: 'Product deleted' }
  }

  async search(query: string) {
    const qb = this.productRepository
      .createQueryBuilder('product')
      .select([
        'product.id',
        'product.title',
        'product.price',
        'product.old_price',
        'product.discount',
        'product.rating',
        'product.reviews',
        'product.is_in_cart'
      ])
      .orderBy('product.id', 'ASC')

    if (query && query.trim() !== '') {
      qb.where('LOWER(product.title) LIKE LOWER(:query)', {
        query: `%${query.trim()}%`
      })
    }

    const products = await qb.getMany()

    console.log(products)

    return {
      success: true,
      data: products,
      count: products.length,
      query: query || ''
    }
  }

  async filterByPrice(min: number, max: number) {
    return this.productRepository
      .createQueryBuilder('product')
      .where('product.price BETWEEN :min AND :max', { min, max })
      .orderBy('product.price', 'ASC')
      .getMany()
  }

  async getFavorites() {
    return this.productRepository.find({
      where: { is_in_cart: true },
      order: { id: 'ASC' }
    })
  }

  async count() {
    return this.productRepository.count()
  }
}
