<template>
  <v-app>
    <!-- Main Content -->
    <v-main>
      <v-container fluid>
        <!-- ВСТАВКА КОМПОНЕНТА HomeView ЧЕРЕЗ РОУТЕР -->
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: false,
    projects: ['Games', 'Sand', 'Cinema', 'Homepage'],
    subjects: [
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
    ],
    coosing: [
      'Hult Foresman',
      'Ball',
      '(сеть)',
      'Fast',
      'Stalk',
      'Oymatsa',
      'Zom',
      'Numbers',
      'Gives a Go',
    ],
    supportItems: ['FAQ', 'Контакты', 'Помощь'],
    tags: ['Новинка', 'Популярное', 'Акция'],
  }),
}
</script>

<style scoped>
.v-application {
  background-color: #f5f7fa;
}
</style>
