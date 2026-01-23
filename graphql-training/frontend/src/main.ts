import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { apolloClient } from "./graphql/apollo";

loadFonts();

createApp(App)
  .provide(DefaultApolloClient, apolloClient)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount("#app");
