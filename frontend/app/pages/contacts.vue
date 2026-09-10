<template>
  <v-container class="contacts-page" max-width="1000">
    <h1 class="text-h4 mb-2">Контакты</h1>
    <p class="text-body-1 text-medium-emphasis mb-8">
      Открыт к предложениям, сотрудничеству и интересным проектам.
    </p>

    <v-row>
      <v-col cols="12" md="4">
        <ContactInfoCard />
      </v-col>

      <v-col cols="12" md="8">
        <AboutDeveloperCard :blocks="aboutBlocks" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import ContactInfoCard from '~/components/Contacts/ContactInfoCard.vue'
import AboutDeveloperCard from '~/components/Contacts/AboutDeveloperCard.vue'
import { aboutBlocks } from '~/components/Contacts/data'
</script>

<style scoped>
.contacts-page {
  padding-top: 24px;
  padding-bottom: 48px;
}
</style>
