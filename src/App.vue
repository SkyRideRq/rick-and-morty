<template>
  <v-app>
    <TheHeader />

    <AppView />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import AppView from "./components/AppView.vue";
import TheHeader from "./components/TheHeader.vue";
export default Vue.extend({
  name: "App",

  components: {
    AppView,
    TheHeader,
  },

  data: () => ({
    //
  }),
});
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap");
* {
  font-family: "Poppins", sans-serif !important;
  font-size: 16px !important;
  color: #a9b1bd;
}
.container {
  max-width: 1365px !important;
  margin: 0 auto !important;
  width: 100% !important;
  padding: 0px !important;
}
@media (max-width: 1440px) {
  .container {
    padding: 0 20px !important;
  }
}
.v-input__icon .mdi-magnify {
  color: #11b0c8 !important;
}
.fav-btn {
  width: 43px !important;
  height: 43px !important;
  min-width: 43px !important;
  border-width: 2px !important;
}
.border-bottom {
  border-bottom: 1px solid #e5eaf4;
}
.v-icon.v-icon {
  font-size: 24px !important;
}
</style>
