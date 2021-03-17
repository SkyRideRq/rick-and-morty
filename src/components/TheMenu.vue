<template>
  <v-container>
    <v-tabs class="tabs">
      <v-tab @click="switchToCharacters" class="tab-item">All Characters</v-tab>
      <v-tab @click="switchToFavourites" class="tab-item">Favorites</v-tab>
    </v-tabs>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TheMenu",
  methods: {
    switchToCharacters() {
      this.$store.commit("switchPage", "characters");
    },
    switchToFavourites() {
      this.$store.commit("switchPage", "favorites");
    },
  },
});
</script>
<style>
.tabs {
  height: 78px;
  padding-top: 18px;
}
.tabs .v-tabs-bar {
  height: 30px;
}
.tabs .v-tab--active {
  color: #11b0c8 !important;
}
.tabs .v-tabs-slider {
  background-color: #11b0c8 !important;
}
.tab-item {
  padding: 0 !important;
  text-transform: none !important;
  font-weight: 500;
  min-width: unset !important;
  color: #a9b1bd !important;
  margin-right: 81px;
  letter-spacing: normal !important;
}
@media (max-width: 500px) {
  .v-slide-group__next,
  .v-slide-group__prev {
    flex: none !important;
    min-width: unset !important;
  }
}
</style>
