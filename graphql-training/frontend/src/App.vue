<template>
  <v-app>
    <v-app-bar app color="primary" dark flat>

      <v-spacer></v-spacer>

      <v-btn to="/" variant="text">Home</v-btn>
      <v-btn :to="{ name: 'exercice-1' }" variant="text">Exo 1</v-btn>
      <v-btn :to="{ name: 'exercice-2' }" variant="text">Exo 2</v-btn>
      <v-btn :to="{ name: 'exercice-3' }" variant="text">Exo 3</v-btn>
      <v-btn :to="{ name: 'exercice-4' }" variant="text">Exo 4</v-btn>
      <v-btn :to="{ name: 'exercice-5' }" variant="text">Exo 5</v-btn>
    </v-app-bar>

    <v-main>
      <v-container class="pa-8">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator';

@Component({})
export class App extends Vue {
}

export default toNative(App);
</script>