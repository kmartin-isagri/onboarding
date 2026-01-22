<template>
  <v-row>
      <v-col cols="12" class=" d-flex justify-center">
          <WelcomeComp></WelcomeComp>
      </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator';

import WelcomeComp from "@/components/WelcomeComp.vue"

@Component({
  components: {
      WelcomeComp
  }
})
export class Home extends Vue {

}

export default toNative(Home);
</script>