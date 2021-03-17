import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";
import store from "./store";

Vue.config.productionTip = false;

const apolloClient = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  onError(err) {
    console.log(err);
  },
});
Vue.use(VueApollo);
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});
new Vue({
  router,
  store,
  vuetify,
  apolloProvider,
  render: (h) => h(App),
}).$mount("#app");
