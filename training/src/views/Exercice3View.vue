<template>
  <v-card class="exo-card" title="Exercice 3" elevation="0">
    <v-card-text class="px-6 pt-6 pb-10">
      <ScoreCounter v-model="scoring" class="mb-12" />
      <ScoreToText :scoring="scoring" />
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
import ScoreCounter from '@/components/ScoreCounter.vue';
import ScoreToText from '@/components/ScoreToText.vue';
import { ref } from 'vue';

const scoring = ref(0)

</script>