<template>
  <div class="ScoreToText">
    <v-alert class="mb-6" text="Increment or decrement the score in exercice 2 to see the text change"></v-alert>
    {{ text }}
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
  scoring: {
    type: Number,
    required: true,
  }
})

const text = computed(() => {
  if (props.scoring % 3 === 0 && props.scoring % 5 === 0) {
    return "Bobbee"
  }

  if (props.scoring % 3 === 0) {
    return "Bob";
  }

  if (props.scoring % 5 === 0) {
    return "bee";
  }

  return props.scoring
})
</script>