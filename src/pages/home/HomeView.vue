<template>
  <!-- Main Content -->
  <v-main>
    <v-container fluid>
      <v-row>
        <!-- Left Content Area (placeholder) -->
        <v-col cols="12" md="8">
          <v-card elevation="2" class="pa-6">
            <v-card-title class="text-h5">Главная страница</v-card-title>
            <v-divider class="my-3" />
            <v-card-text>
              <p>Контент главной страницы по макету.</p>
              <v-chip-group column>
                <v-chip v-for="tag in tags" :key="tag" outlined>{{ tag }}</v-chip>
              </v-chip-group>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Right Sidebar (Supporto) -->
        <v-col cols="12" md="4">
          <v-card elevation="2" class="pa-4">
            <v-card-title class="text-h6">Supporto</v-card-title>
            <v-divider />
            <v-list dense>
              <v-list-item v-for="item in supportItems" :key="item">
                <v-list-item-icon>
                  <v-icon small>mdi-chevron-right</v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{ item }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
import { ref } from 'vue'

// Реактивные данные
const drawer = ref(false)

const projects = ref(['Games', 'Sand', 'Cinema', 'Homepage'])

const subjects = ref([
  {
    name: 'Finley',
    description: 'Сайт футбольного спортивного клуба',
    price: '$150',
  },
  {
    name: 'Copooler',
    description: 'Создайте дружественный клуб',
    price: '$250',
  },
  {
    name: 'Emala hoke',
    description: 'Создайте новый клуб для любителей хоккея',
    price: '$130',
  },
])

const coosing = ref([
  'Hult Foresman',
  'Ball',
  '(сеть)',
  'Fast',
  'Stalk',
  'Oymatsa',
  'Zom',
  'Numbers',
  'Gives a Go',
])

const supportItems = ref(['FAQ', 'Контакты', 'Помощь'])

const tags = ref(['Новинка', 'Популярное', 'Акция'])

// Методы
const handleBuy = (subject) => {
  console.log('Buying:', subject.name)
  // Здесь можно добавить логику покупки
  alert(`Вы выбрали: ${subject.name} за ${subject.price}`)
}

// Определение имени компонента (опционально)
defineOptions({
  name: 'MainPage',
})
</script>

<style scoped>
/* Минимум кастомных стилей – только для тонкой настройки, если нужно */
.v-application {
  background-color: #f5f7fa;
}
</style>
