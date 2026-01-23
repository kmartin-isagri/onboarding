<template>
  <v-card class="exo-card" title="Exercice 5" elevation="0">
    <v-card-text class="px-6 pt-6 pb-10">
      <div v-if="loading">Chargement...</div>
      <div v-else-if="error">Erreur : {{ error.message }}</div>
      <v-row v-else>
        <v-col v-for="photo in photos" :key="photo.id" cols="3">
          <PictureCard :photo="photo" @like:click="onLikeClick" @comment:submit="addMessage" />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
import PictureCard from '@/components/PictureCard.vue';
import { useQuery, useMutation } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { computed } from 'vue';

// pas le temps de le faire proprement (typer les caches apollo, supprimer ou revoir store vuex, etc...)
const { result, loading, error, refetch } = useQuery(gql`
  query GetAlbum($albumId: ID!) {
    album(albumId: $albumId) {
      id
      name
      photos {
        id
        url
        likeCount
        liked
        messages {
          id
          content
        }
      }
    }
  }
`, () => ({ albumId: '1' }), { fetchPolicy: 'network-only' })


const photos = computed(() => result.value?.album.photos || [])

const { mutate: sendMessage, onDone: onMessageDone, onError: onMessageError } = useMutation(gql`
  mutation AddComment($photoId: ID!, $content: String!) {
    addComment(photoId: $photoId, content: $content) {
      id
      url
      likeCount
      messages {
        id
        content
      }
    }
  }`, () => ({
  fetchPolicy: 'no-cache',
}))

onMessageDone(() => refetch({ albumId: '1' }));

const { mutate: sendLike, onDone: onLikeDone, onError: onLikeError } = useMutation(gql`
  mutation Like($photoId: ID!) {
    likePhoto(photoId: $photoId) {
      id
      likeCount
    }
  }`, () => ({
  fetchPolicy: 'no-cache',
}))

onLikeDone(() => refetch({ albumId: '1' }));

const { mutate: sendUnlike, onDone: onUnlikeDone, onError: onUnlikeError } = useMutation(gql`
  mutation Unlike($photoId: ID!) {
    unlikePhoto(photoId: $photoId) {
      id
      likeCount
      liked
    }
  }`, () => ({
  fetchPolicy: 'no-cache',
}))

onUnlikeDone(() => refetch({ albumId: '1' }));


async function onLikeClick(photo: any) {
  if (photo.liked) {
    // store.dispatch('album/unlikePhoto', photo.id);
    sendUnlike({
      photoId: photo.id
    })
  } else {
    // store.dispatch('album/likePhoto', photo.id);
    sendLike({
      photoId: photo.id
    })
  }
}

async function addMessage({ photo, content }: { photo: any, content: string }) {
  // store.dispatch('album/addMessage', { photoId: photo.id, content });
  sendMessage({
    photoId: photo.id,
    content
  })
}

</script>