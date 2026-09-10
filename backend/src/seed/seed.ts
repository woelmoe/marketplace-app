import { NestFactory } from '@nestjs/core'
import { AppModule } from '../app.module'
import { DataSource } from 'typeorm'
import { Product } from '../products/entities/product.entity'
import { products } from './mockData'
import * as fs from 'fs'
import * as path from 'path'

// docker-compose exec postgres psql -U user -d mydb -c "TRUNCATE TABLE products RESTART IDENTITY;"
// docker compose up -d backend

seed().catch((error) => {
  console.error('❌ Ошибка при сидировании:', error)
  process.exit(1)
})

async function seed() {
  const app = await NestFactory.createApplicationContext(AppModule)
  const dataSource = app.get(DataSource)

  console.log('🔄 Проверка наличия данных...')

  const productRepository = dataSource.getRepository(Product)
  const count = await productRepository.count()

  if (count > 0) {
    console.log(
      `✅ Данные уже есть (${count} товаров). Пропускаем сидирование.`
    )
    await app.close()
    return
  }

  console.log('📦 Загружаем моковые данные...')

  function getImageBase64(imagePath: string): string | null {
    console.log('getImageBase64', process.cwd())

    try {
      const fullPath = path.join(
        process.cwd(),
        'uploads',
        path.basename(imagePath)
      )

      console.log(fullPath)

      if (!fs.existsSync(fullPath)) {
        console.warn(`⚠️ Файл не найден: ${fullPath}`)
        return null
      }

      const imageBuffer = fs.readFileSync(fullPath)

      const ext = path.extname(imagePath).toLowerCase()
      const mimeType =
        {
          '.jpg': 'image/jpeg',
          '.jpeg': 'image/jpeg',
          '.png': 'image/png',
          '.gif': 'image/gif',
          '.webp': 'image/webp',
          '.svg': 'image/svg+xml'
        }[ext] || 'image/jpeg'

      const base64 = imageBuffer.toString('base64')

      return `data:${mimeType};base64,${base64}`
    } catch (error) {
      console.log(`❌ Ошибка загрузки изображения ${imagePath}:`, error)
      return null
    }
  }

  function processProductImages(product: any): any {
    if (!product.imgs || !Array.isArray(product.imgs)) {
      return product
    }

    const processedImgs = product.imgs.map((imgPath) => {
      const base64 = getImageBase64(imgPath)
      return base64 || getNoImagePlaceholder()
    })

    return {
      ...product,
      imgs: processedImgs
    }
  }

  function getNoImagePlaceholder(): string {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <rect width="300" height="300" fill="#f0f0f0"/>
      <text x="150" y="150" font-family="Arial" font-size="20" fill="#999" text-anchor="middle">No Image</text>
    </svg>`
    return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`
  }

  const processedProducts = products.map((product) =>
    processProductImages(product)
  )

  await productRepository.save(processedProducts)

  console.log(
    `✅ Успешно загружено ${processedProducts.length} товаров с изображениями!`
  )
  await app.close()
}
