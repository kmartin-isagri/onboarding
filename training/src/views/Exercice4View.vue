<template>
  <v-card class="exo-card" title="Exercice 4" elevation="0">
    <v-card-text class="px-6 pt-6 pb-10">
      <v-row>
        <v-col v-for="photo in photos" :key="photo.id" cols="3">
          <PictureCard :photo="photo" @like:click="onLikeClick" @comment:submit="addMessage" />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
import PictureCard from '@/components/PictureCard.vue';
import { useStore } from 'vuex';

const store = useStore();
const photos = store.getters['album/photos']


function onLikeClick(photo: any) {
  store.dispatch('album/toggleLike', photo.id);
}

function addMessage({ photo, content }: { photo: any, content: string }) {
  store.dispatch('album/addMessage', { photoId: photo.id, content });
}

</script>