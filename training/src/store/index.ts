import { createStore } from 'vuex'
import { album as albumFixture } from '@/fixtures/album'
import { uniqueId } from 'lodash';

type Message = {
  id: string;
  content: string;
}

const albumModule = {
  namespaced: true,
  state () {
    return {
      name: albumFixture.name,
      other: albumFixture.other,
      photos: albumFixture.photos.map(photo => ({
        name: photo.name,
        url: photo.url,
        id: photo.id,
        liked: false,
        messages: [
          // { id: '1', content: 'Super photo !' },
          // { id: '2', content: 'J\'aime beaucoup les couleurs.' }
        ] as Message[]
      }))
    }
  },
  mutations: { 
    toggleLike (state: any, photoId: string) {
      console.log('toggleLike', photoId)
      const photo = state.photos.find((p: any) => p.id === photoId)
      if (photo) {
        photo.liked = !photo.liked
      }
    },
    addMessage (state: any, { photoId, content }: { photoId: string; content: string }) {
      if (!content.trim().length) {
        throw new Error('Message content cannot be empty');
      }

      const photo = state.photos.find((p: any) => p.id === photoId)
      if (photo) {
        photo.messages.push({
          id: uniqueId(),
          content
        })
      }
    }
  },
  actions: {
    toggleLike ({ commit }: any, photoId: string) {
      commit('toggleLike', photoId)
    },
    addMessage ({ commit }: any, { photoId, content }: { photoId: string; content: string }) {
      commit('addMessage', { photoId, content });
    }
   },
  getters: {
    photos: (state: any) => state.photos
  }
}

export default createStore({
  modules: {
    album: albumModule
  }
})
