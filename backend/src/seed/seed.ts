import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { DataSource } from 'typeorm';
import { Product } from '../products/entities/product.entity';

async function seed() {
  // Создаем контекст приложения без запуска HTTP-сервера
  const app = await NestFactory.createApplicationContext(AppModule);
  const dataSource = app.get(DataSource);

  console.log('🔄 Проверка наличия данных...');

  // Проверяем, есть ли уже товары в БД
  const productRepository = dataSource.getRepository(Product);
  const count = await productRepository.count();

  if (count > 0) {
    console.log(
      `✅ Данные уже есть (${count} товаров). Пропускаем сидирование.`,
    );
    await app.close();
    return;
  }

  console.log('📦 Загружаем моковые данные...');

  // Данные товаров (25 штук)
  const products = [
    {
      title: 'МИО ИНОЗИТОЛ + ФОЛИЕВАЯ КИСЛОТА 1500мг',
      price: 1500.0,
      old_price: 1800.0,
      discount: 17,
      rating: 4.8,
      reviews: 156,
      is_in_cart: false,
      is_fast_view: false,
      delivery_date: '2026-09-15',
      properties: [
        { name: 'Форма выпуска', value: 'Таблетки' },
        { name: 'Количество', value: '60 шт' },
        { name: 'Производитель', value: 'Мирролла' },
      ],
      imgs: [
        '/uploads/products/1.jpg',
        '/uploads/products/no-image.jpg',
        '/uploads/products/no-image.jpg',
      ],
    },
    {
      title: 'МИО ИНОЗИТОЛ + ФОЛИЕВАЯ КИСЛОТА 3000мг',
      price: 2500.0,
      old_price: 3000.0,
      discount: 17,
      rating: 4.9,
      reviews: 234,
      is_in_cart: false,
      is_fast_view: false,
      delivery_date: '2026-09-16',
      properties: [
        { name: 'Форма выпуска', value: 'Таблетки' },
        { name: 'Количество', value: '120 шт' },
        { name: 'Производитель', value: 'Мирролла' },
      ],
      imgs: ['/uploads/products/1.jpg', '/uploads/products/no-image.jpg'],
    },
    {
      title: 'МИО ИНОЗИТОЛ капсулы 500мг',
      price: 1200.0,
      old_price: 1400.0,
      discount: 14,
      rating: 4.6,
      reviews: 98,
      is_in_cart: false,
      is_fast_view: false,
      delivery_date: '2026-09-17',
      properties: [
        { name: 'Форма выпуска', value: 'Капсулы' },
        { name: 'Количество', value: '30 шт' },
        { name: 'Производитель', value: 'Мирролла' },
      ],
      imgs: [
        '/uploads/products/1.jpg',
        '/uploads/products/no-image.jpg',
        '/uploads/products/no-image.jpg',
        '/uploads/products/no-image.jpg',
      ],
    },
    {
      title: 'Игровое кресло с 2 подушками черное',
      price: 15990.0,
      old_price: 18990.0,
      discount: 16,
      rating: 4.5,
      reviews: 89,
      is_in_cart: false,
      is_fast_view: false,
      delivery_date: '2026-09-20',
      properties: [
        { name: 'Тип', value: 'Игровое кресло' },
        { name: 'Подушки', value: '2 шт' },
        { name: 'Цвет', value: 'Черный' },
      ],
      imgs: ['/uploads/products/2.jpg', '/uploads/products/no-image.jpg'],
    },
    {
      title: 'Игровое кресло с подставкой для ног черное/красное',
      price: 18990.0,
      old_price: 22990.0,
      discount: 17,
      rating: 4.6,
      reviews: 67,
      is_in_cart: false,
      is_fast_view: false,
      delivery_date: '2026-09-21',
      properties: [
        { name: 'Тип', value: 'Игровое кресло' },
        { name: 'Подставка', value: 'Да' },
        { name: 'Цвет', value: 'Черный/Красный' },
      ],
      imgs: [
        '/uploads/products/2.jpg',
        '/uploads/products/no-image.jpg',
        '/uploads/products/no-image.jpg',
      ],
    },
    {
      title: 'Игровое кресло премиум кожаное',
      price: 24990.0,
      old_price: 29990.0,
      discount: 17,
      rating: 4.7,
      reviews: 123,
      is_in_cart: false,
      is_fast_view: false,
      delivery_date: '2026-09-22',
      properties: [
        { name: 'Тип', value: 'Игровое кресло' },
        { name: 'Материал', value: 'Эко-кожа' },
        { name: 'Цвет', value: 'Черный' },
      ],
      imgs: ['/uploads/products/2.jpg', '/uploads/products/no-image.jpg'],
    },
    {
      title: 'CLASSMARK Игровое кресло черное/красное',
      price: 24990.0,
      old_price: 28990.0,
      discount: 14,
      rating: 4.4,
      reviews: 234,
      is_in_cart: false,
      is_fast_view: false,
      delivery_date: '2026-09-23',
      properties: [
        { name: 'Тип', value: 'Игровое кресло' },
        { name: 'Бренд', value: 'CLASSMARK' },
        { name: 'Цвет', value: 'Черный/Красный' },
      ],
      imgs: [
        '/uploads/products/3.jpg',
        '/uploads/products/no-image.jpg',
        '/uploads/products/no-image.jpg',
      ],
    },
    {
      title: 'CLASSMARK Игровое кресло белое',
      price: 25990.0,
      old_price: 29990.0,
      discount: 13,
      rating: 4.5,
      reviews: 189,
      is_in_cart: false,
      is_fast_view: false,
      delivery_date: '2026-09-24',
      properties: [
        { name: 'Тип', value: 'Игровое кресло' },
        { name: 'Бренд', value: 'CLASSMARK' },
        { name: 'Цвет', value: 'Белый' },
      ],
      imgs: ['/uploads/products/3.jpg', '/uploads/products/no-image.jpg'],
    },
    {
      title: 'CLASSMARK Игровое кресло синее',
      price: 23990.0,
      old_price: 27990.0,
      discount: 14,
      rating: 4.3,
      reviews: 156,
      is_in_cart: false,
      is_fast_view: false,
      delivery_date: '2026-09-25',
      properties: [
        { name: 'Тип', value: 'Игровое кресло' },
        { name: 'Бренд', value: 'CLASSMARK' },
        { name: 'Цвет', value: 'Синий' },
      ],
      imgs: [
        '/uploads/products/3.jpg',
        '/uploads/products/no-image.jpg',
        '/uploads/products/no-image.jpg',
        '/uploads/products/no-image.jpg',
      ],
    },
    {
      title: 'RAKIZA Прямой мини диван-банкетка ткань серая',
      price: 15990.0,
      old_price: 18990.0,
      discount: 16,
      rating: 4.5,
      reviews: 89,
      is_in_cart: false,
      is_fast_view: false,
      delivery_date: '2026-09-20',
      properties: [
        { name: 'Материал', value: 'Ткань' },
        { name: 'Цвет', value: 'Серый' },
        { name: 'Тип', value: 'Банкетка' },
      ],
      imgs: ['/uploads/products/4.jpg', '/uploads/products/no-image.jpg'],
    },
    {
      title: 'RAKIZA Прямой мини диван-банкетка велюр бежевый',
      price: 18990.0,
      old_price: 22990.0,
      discount: 17,
      rating: 4.6,
      reviews: 76,
      is_in_cart: false,
      is_fast_view: false,
      delivery_date: '2026-09-21',
      properties: [
        { name: 'Материал', value: 'Велюр' },
        { name: 'Цвет', value: 'Бежевый' },
        { name: 'Тип', value: 'Банкетка' },
      ],
      imgs: [
        '/uploads/products/4.jpg',
        '/uploads/products/no-image.jpg',
        '/uploads/products/no-image.jpg',
      ],
    },
    {
      title: 'RAKIZA Прямой мини диван-банкетка эко-кожа черная',
      price: 21990.0,
      old_price: 25990.0,
      discount: 15,
      rating: 4.7,
      reviews: 112,
      is_in_cart: false,
      is_fast_view: false,
      delivery_date: '2026-09-22',
      properties: [
        { name: 'Материал', value: 'Эко-кожа' },
        { name: 'Цвет', value: 'Черный' },
        { name: 'Тип', value: 'Банкетка' },
      ],
      imgs: ['/uploads/products/4.jpg', '/uploads/products/no-image.jpg'],
    },
    {
      title: 'CLASSMARK Игровое кресло PRO черное',
      price: 32990.0,
      old_price: 38990.0,
      discount: 15,
      rating: 4.8,
      reviews: 345,
      is_in_cart: false,
      is_fast_view: false,
      delivery_date: '2026-09-26',
      properties: [
        { name: 'Тип', value: 'Игровое кресло' },
        { name: 'Бренд', value: 'CLASSMARK' },
        { name: 'Модель', value: 'PRO' },
      ],
      imgs: [
        '/uploads/products/3.jpg',
        '/uploads/products/no-image.jpg',
        '/uploads/products/no-image.jpg',
      ],
    },
    {
      title: 'RAKIZA Угловой мини диван-банкетка ткань серая',
      price: 28990.0,
      old_price: 32990.0,
      discount: 12,
      rating: 4.4,
      reviews: 54,
      is_in_cart: false,
      is_fast_view: false,
      delivery_date: '2026-09-27',
      properties: [
        { name: 'Материал', value: 'Ткань' },
        { name: 'Цвет', value: 'Серый' },
        { name: 'Тип', value: 'Угловая банкетка' },
      ],
      imgs: [
        '/uploads/products/4.jpg',
        '/uploads/products/no-image.jpg',
        '/uploads/products/no-image.jpg',
        '/uploads/products/no-image.jpg',
      ],
    },
    {
      title: 'Игровое кресло с вибромассажем черное',
      price: 29990.0,
      old_price: 35990.0,
      discount: 17,
      rating: 4.7,
      reviews: 98,
      is_in_cart: false,
      is_fast_view: false,
      delivery_date: '2026-09-28',
      properties: [
        { name: 'Тип', value: 'Игровое кресло' },
        { name: 'Массаж', value: 'Вибромассаж' },
        { name: 'Цвет', value: 'Черный' },
      ],
      imgs: ['/uploads/products/2.jpg', '/uploads/products/no-image.jpg'],
    },
    {
      title: 'МИО ИНОЗИТОЛ + МАГНИЙ 1500мг',
      price: 1800.0,
      old_price: 2100.0,
      discount: 14,
      rating: 4.7,
      reviews: 89,
      is_in_cart: false,
      is_fast_view: false,
      delivery_date: '2026-09-29',
      properties: [
        { name: 'Форма выпуска', value: 'Таблетки' },
        { name: 'Количество', value: '60 шт' },
        { name: 'Производитель', value: 'Мирролла' },
      ],
      imgs: [
        '/uploads/products/1.jpg',
        '/uploads/products/no-image.jpg',
        '/uploads/products/no-image.jpg',
      ],
    },
    {
      title: 'CLASSMARK Игровое кресло LUX черное/золотое',
      price: 39990.0,
      old_price: 45990.0,
      discount: 13,
      rating: 4.9,
      reviews: 567,
      is_in_cart: false,
      is_fast_view: false,
      delivery_date: '2026-09-30',
      properties: [
        { name: 'Тип', value: 'Игровое кресло' },
        { name: 'Бренд', value: 'CLASSMARK' },
        { name: 'Модель', value: 'LUX' },
      ],
      imgs: [
        '/uploads/products/3.jpg',
        '/uploads/products/no-image.jpg',
        '/uploads/products/no-image.jpg',
        '/uploads/products/no-image.jpg',
      ],
    },
    {
      title: 'RAKIZA Мини диван-банкетка с ящиком для хранения серая',
      price: 24990.0,
      old_price: 28990.0,
      discount: 14,
      rating: 4.5,
      reviews: 67,
      is_in_cart: false,
      is_fast_view: false,
      delivery_date: '2026-10-01',
      properties: [
        { name: 'Материал', value: 'Ткань' },
        { name: 'Цвет', value: 'Серый' },
        { name: 'Ящик', value: 'Да' },
      ],
      imgs: ['/uploads/products/4.jpg', '/uploads/products/no-image.jpg'],
    },
    {
      title: 'МИО ИНОЗИТОЛ + ЦИНК 1500мг',
      price: 1900.0,
      old_price: 2200.0,
      discount: 14,
      rating: 4.6,
      reviews: 78,
      is_in_cart: false,
      is_fast_view: false,
      delivery_date: '2026-10-02',
      properties: [
        { name: 'Форма выпуска', value: 'Таблетки' },
        { name: 'Количество', value: '60 шт' },
        { name: 'Производитель', value: 'Мирролла' },
      ],
      imgs: [
        '/uploads/products/1.jpg',
        '/uploads/products/no-image.jpg',
        '/uploads/products/no-image.jpg',
      ],
    },
    {
      title: 'Игровое кресло детское черное/красное',
      price: 9990.0,
      old_price: 11990.0,
      discount: 17,
      rating: 4.3,
      reviews: 45,
      is_in_cart: false,
      is_fast_view: false,
      delivery_date: '2026-10-03',
      properties: [
        { name: 'Тип', value: 'Детское кресло' },
        { name: 'Цвет', value: 'Черный/Красный' },
        { name: 'Возраст', value: '6+' },
      ],
      imgs: ['/uploads/products/2.jpg', '/uploads/products/no-image.jpg'],
    },
    {
      title: 'RAKIZA Банкетка прикроватная ткань бежевая',
      price: 12990.0,
      old_price: 14990.0,
      discount: 13,
      rating: 4.4,
      reviews: 56,
      is_in_cart: false,
      is_fast_view: false,
      delivery_date: '2026-10-04',
      properties: [
        { name: 'Материал', value: 'Ткань' },
        { name: 'Цвет', value: 'Бежевый' },
        { name: 'Тип', value: 'Прикроватная банкетка' },
      ],
      imgs: [
        '/uploads/products/4.jpg',
        '/uploads/products/no-image.jpg',
        '/uploads/products/no-image.jpg',
      ],
    },
    {
      title: 'CLASSMARK Игровое кресло SPORT черное/синее',
      price: 29990.0,
      old_price: 34990.0,
      discount: 14,
      rating: 4.6,
      reviews: 234,
      is_in_cart: false,
      is_fast_view: false,
      delivery_date: '2026-10-05',
      properties: [
        { name: 'Тип', value: 'Игровое кресло' },
        { name: 'Бренд', value: 'CLASSMARK' },
        { name: 'Модель', value: 'SPORT' },
      ],
      imgs: ['/uploads/products/3.jpg', '/uploads/products/no-image.jpg'],
    },
    {
      title: 'МИО ИНОЗИТОЛ + ВИТАМИН D3 1500мг',
      price: 2200.0,
      old_price: 2500.0,
      discount: 12,
      rating: 4.8,
      reviews: 123,
      is_in_cart: false,
      is_fast_view: false,
      delivery_date: '2026-10-06',
      properties: [
        { name: 'Форма выпуска', value: 'Таблетки' },
        { name: 'Количество', value: '60 шт' },
        { name: 'Производитель', value: 'Мирролла' },
      ],
      imgs: ['/uploads/products/1.jpg', '/uploads/products/no-image.jpg'],
    },
    {
      title: 'Игровое кресло со встроенной аудиосистемой черное',
      price: 34990.0,
      old_price: 39990.0,
      discount: 13,
      rating: 4.7,
      reviews: 89,
      is_in_cart: false,
      is_fast_view: false,
      delivery_date: '2026-10-07',
      properties: [
        { name: 'Тип', value: 'Игровое кресло' },
        { name: 'Аудио', value: 'Встроенная система' },
        { name: 'Цвет', value: 'Черный' },
      ],
      imgs: [
        '/uploads/products/2.jpg',
        '/uploads/products/no-image.jpg',
        '/uploads/products/no-image.jpg',
      ],
    },
    {
      title: 'RAKIZA Диван-банкетка с подлокотниками ткань серая',
      price: 27990.0,
      old_price: 31990.0,
      discount: 13,
      rating: 4.5,
      reviews: 78,
      is_in_cart: false,
      is_fast_view: false,
      delivery_date: '2026-10-08',
      properties: [
        { name: 'Материал', value: 'Ткань' },
        { name: 'Цвет', value: 'Серый' },
        { name: 'Подлокотники', value: 'Да' },
      ],
      imgs: [
        '/uploads/products/4.jpg',
        '/uploads/products/no-image.jpg',
        '/uploads/products/no-image.jpg',
        '/uploads/products/no-image.jpg',
      ],
    },
  ];

  // Сохраняем товары в БД
  await productRepository.save(products);

  console.log(`✅ Успешно загружено ${products.length} товаров!`);
  await app.close();
}

// Запускаем скрипт
seed().catch((error) => {
  console.error('❌ Ошибка при сидировании:', error);
  process.exit(1);
});
