<template>
  <v-app-bar app elevation="0" color="white" class="header">
    <div class="border-bottom">
      <v-container>
        <div class="header-top">
          <v-img
            :src="require('../assets/logo.svg')"
            contain
            height="70"
            width="240"
            class="logo-img"
          />
          <TheSearchBar />
        </div>
      </v-container>
    </div>
    <TheMenu />
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import TheMenu from "@/components/TheMenu.vue";
import TheSearchBar from "@/components/TheSearchBar.vue";

export default Vue.extend({
  name: "TheHeader",
  components: {
    TheMenu,
    TheSearchBar,
  },
});
</script>
<style>
.logo-img {
  flex: none !important;
}
.header {
  height: 213px !important;
}
.header .v-toolbar__content {
  display: block;
  padding: 0;
}
.header-top {
  height: 134px;
  display: flex;
  align-items: center;
}
@media (max-width: 800px) {
  .header-top {
    flex-direction: column;
    height: 200px;
  }
  .header {
    height: 271px !important;
  }
}
.header .v-select__selection {
  font-weight: 500;
}
</style>
