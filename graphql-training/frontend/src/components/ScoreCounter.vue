<template>
  <div class="ScoreCounter">
    <div class="text-center pa-3">
      {{ model }}
    </div>
    <div class="d-flex align-center justify-center">
      <v-btn @click="model--">-</v-btn>
      <v-btn class="ml-4" @click="model++">+</v-btn>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineModel } from 'vue';

const model = defineModel();
</script>