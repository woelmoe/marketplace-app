<template>
  <v-navigation-drawer
    v-model="model"
    app
    temporary
    width="300"
    class="sidebar-navigation"
  >
    <!-- Заголовок боковой панели -->
    <v-list-item two-line class="px-2 py-4">
      <v-list-item-avatar color="primary" rounded>
        <v-icon color="white">mdi-store</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="text-h6 font-weight-bold">
          UX-makmet
        </v-list-item-title>
        <v-list-item-subtitle>Интернет-магазин</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider />

    <!-- Основная навигация -->
    <v-list dense nav>
      <v-subheader class="text-uppercase font-weight-bold">
        Навигация
      </v-subheader>
      <v-list-item
        v-for="item in navItems"
        :key="item.title"
        :to="item.route"
        link
        exact
        active-class="primary--text"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>

    <v-divider class="my-2" />

    <!-- Раздел "Проекты" -->
    <v-list dense nav>
      <v-subheader class="text-uppercase font-weight-bold">
        Проекты
      </v-subheader>
      <v-list-item-group>
        <v-list-item
          v-for="project in projects"
          :key="project.id"
          :to="`/projects/${project.id}`"
          link
        >
          <v-list-item-icon>
            <v-icon small>mdi-folder-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ project.name }}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <v-divider class="my-2" />

    <!-- Раздел "Товары" -->
    <v-list dense nav>
      <v-subheader class="text-uppercase font-weight-bold">
        Товары
      </v-subheader>
      <v-list-item-group>
        <v-list-item
          v-for="product in products"
          :key="product.id"
          link
          @click="handleProductClick(product)"
        >
          <v-list-item-content>
            <v-list-item-title class="font-weight-medium">
              {{ product.name }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ product.description }}
            </v-list-item-subtitle>
            <v-list-item-subtitle class="text-h6 primary--text">
              {{ product.price }}
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn
              small
              color="primary"
              outlined
              @click.stop="handleBuy(product)"
            >
              Купить
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <v-divider class="my-2" />

    <!-- Корзина -->
    <v-list dense nav>
      <v-subheader class="text-uppercase font-weight-bold">
        Корзина
      </v-subheader>
      <v-list-item link to="/cart">
        <v-list-item-icon>
          <v-icon>mdi-cart-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Перейти в корзину</v-list-item-title>
        <v-list-item-action>
          <v-chip small color="primary" outlined>
            {{ cartCount }}
          </v-chip>
        </v-list-item-action>
      </v-list-item>
    </v-list>

    <!-- Подвал боковой панели -->
    <template #append>
      <v-divider />
      <v-list dense>
        <v-list-item link to="/settings">
          <v-list-item-icon>
            <v-icon>mdi-cog-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Настройки</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="handleLogout">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Выход</v-list-item-title>
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

// Props для управления состоянием боковой панели
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);

const model = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});

// Router
const router = useRouter();

// Основные элементы навигации
const navItems = ref([
  { title: 'Главная', route: '/', icon: 'mdi-home' },
  { title: 'Каталог', route: '/catalog', icon: 'mdi-grid' },
  { title: 'О нас', route: '/about', icon: 'mdi-information-outline' },
  { title: 'Контакты', route: '/contacts', icon: 'mdi-email' },
]);

// Проекты
const projects = ref([
  { id: 1, name: 'Finley', route: '/projects/finley' },
  { id: 2, name: 'Copooler', route: '/projects/copooler' },
  { id: 3, name: 'Emala Hoke', route: '/projects/emala-hoke' },
]);

// Товары
const products = ref([
  {
    id: 1,
    name: 'Finley',
    description: 'Сайт футбольного клуба',
    price: '$150',
  },
  {
    id: 2,
    name: 'Copooler',
    description: 'Создайте дружественный клуб',
    price: '$250',
  },
  {
    id: 3,
    name: 'Emala Hoke',
    description: 'Клуб для любителей хоккея',
    price: '$130',
  },
]);

// Корзина (пример данных)
const cartCount = ref(3);

// Методы
const handleProductClick = (product: any) => {
  router.push(`/products/${product.id}`);
};

const handleBuy = (product: any) => {
  console.log('Добавлено в корзину:', product.name);
  // Логика до��авления в корзину
};

const handleLogout = () => {
  router.push('/login');
};
</script>

<style scoped>
.sidebar-navigation {
  border-right: 1px solid rgba(0, 0, 0, 0.12);
}

.sidebar-navigation .v-list-item--active {
  background-color: rgba(25, 118, 210, 0.1);
  border-left: 3px solid #1976d2;
}
</style>
