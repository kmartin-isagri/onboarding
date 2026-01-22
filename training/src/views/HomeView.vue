<template>
  <div class="HomeView">
    <v-card class="exo-card" title="Exercice 1" elevation="0">
      <v-card-text class="px-6 pt-6 pb-10">
        <CharCounter />
      </v-card-text>
    </v-card>

    <v-card class="exo-card" title="Exercice 2" elevation="0">
      <v-card-text class="px-6 pt-6 pb-10">
        <ScoreCounter v-model="scoring" />
      </v-card-text>
    </v-card>

    <v-card class="exo-card" title="Exercice 3" elevation="0">
      <v-card-text class="px-6 pt-6 pb-10">
        <ScoreToText :scoring="scoring" />
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import CharCounter from '@/components/CharCounter.vue';
import ScoreCounter from '@/components/ScoreCounter.vue';
import ScoreToText from '@/components/ScoreToText.vue';
import { ref } from 'vue';

const scoring = ref(0)

</script>


<style scoped>
.exo-card {
  margin-bottom: 3rem;
}
</style>
