<template>
  <v-app>
    <v-app-bar app color="primary" dark flat>
      <div class="d-flex align-center">
        <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="./assets/bobbee_hrz.png"
          transition="scale-transition" width="200" />
      </div>
      <v-spacer></v-spacer>
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