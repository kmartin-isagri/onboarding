<template>
  <v-card class="PictureCard" variant="flat">
    <v-img class="align-end" :src="photo.url" :alt="photo.name" aspect-ratio="1" cover
      gradient="to bottom, rgba(0,0,0,.0), rgba(0,0,0,.1)">
      <v-card-title class="d-flex text-white">
        {{ photo.name }}
      </v-card-title>
    </v-img>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn :color="showMessages ? 'blue' : 'medium-emphasis'" icon="mdi-message" size="small"
        @click="showMessages = !showMessages"></v-btn>
      <v-btn :color="photo.liked ? 'pink' : 'medium-emphasis'" icon="mdi-heart" size="small"
        @click="$emit('like:click', photo)"></v-btn>
    </v-card-actions>

    <div v-if="showMessages" class="message-section">
      <div v-for="message in photo.messages" :key="message.id" class="message-item">
        {{ message.content }}
        <v-divider class="my-2"></v-divider>
      </div>

      <v-form @submit.prevent="submit">
        <v-textarea v-model="form.content" label="Add a comment" variant="outlined" dense hide-details
          autofocus></v-textarea>
        <v-btn class="mt-2" type="submit" color="black" block>Envoyer</v-btn>
      </v-form>
    </div>

  </v-card>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, reactive, ref } from 'vue';

const props = defineProps({
  photo: {
    type: Object,
    required: true
  }
})


const emit = defineEmits(['like:click', 'comment:submit']);

const showMessages = ref(false);

const INITIAL_FORM = {
  content: ''
};

const form = reactive({ ...INITIAL_FORM });

function submit() {
  if (!form.content.trim().length) {
    return;
  }

  emit('comment:submit', { photo: props.photo, content: form.content });
  resetForm()
}

function resetForm() {
  Object.assign(form, { ...INITIAL_FORM });
}

</script>

<style scoped></style>