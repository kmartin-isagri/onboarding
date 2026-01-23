<template>
  <v-app>
    <v-app-bar app color="primary" dark flat>

      <v-spacer></v-spacer>

      <v-btn to="/" variant="text">Home</v-btn>
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