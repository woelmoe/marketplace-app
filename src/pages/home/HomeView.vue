<template>
  <!-- Header / Navigation -->
  <v-app-bar color="primary" dark dense>
    <v-app-bar-nav-icon @click="drawer = !drawer" />
    <v-toolbar-title class="text-h6 font-weight-medium"> UX-makmet </v-toolbar-title>
    <v-spacer />
    <v-chip small outlined class="mr-2">МХ Навіця організації Ольга</v-chip>
  </v-app-bar>

  <!-- Sidebar Navigation Drawer -->
  <v-navigation-drawer v-model="drawer" app temporary>
    <v-list dense>
      <v-subheader>Projects</v-subheader>
      <v-list-item-group>
        <v-list-item v-for="item in projects" :key="item">
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>

      <v-divider class="my-2" />

      <v-subheader>Subjects</v-subheader>
      <v-list-item-group>
        <v-list-item v-for="subject in subjects" :key="subject.name">
          <v-list-item-content>
            <v-list-item-title class="font-weight-medium">{{ subject.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ subject.description }}</v-list-item-subtitle>
            <v-list-item-subtitle class="text-h6 primary--text">{{
              subject.price
            }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn small color="primary" outlined>Купить</v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list-item-group>

      <v-divider class="my-2" />

      <v-subheader>Coosing dack</v-subheader>
      <v-list dense>
        <v-list-item v-for="item in coosing" :key="item">
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-list>
  </v-navigation-drawer>

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

  <!-- Footer (optional) -->
  <v-footer app color="grey lighten-3" padless>
    <v-row justify="center" class="py-2">
      <span class="caption grey--text text--darken-1">UX‑makmet &copy; 2026</span>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'MainPage',
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
/* Минимум кастомных стилей – только для тонкой настройки, если нужно */
.v-application {
  background-color: #f5f7fa;
}
</style>
