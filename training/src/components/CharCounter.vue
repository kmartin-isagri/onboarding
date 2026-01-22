<template>
  <div class="CharCounter d-flex align-center justify-center">
    <v-text-field v-model="form.label" class="flex-grow mr-4" label="Text counter" hide-details density="compact" />
    <v-chip class="px-6" append-icon="mdi-star" variant="outlined" color="grey-darken-1">
      {{ charCount }}
    </v-chip>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive } from 'vue';

const form = reactive({
  label: '',
});

const charCount = computed(() => form.label.length);
</script>

<style scoped></style>