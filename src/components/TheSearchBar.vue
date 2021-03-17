<template>
  <v-form class="search-bar">
    <div class="search-label">
      <p>Search by</p>
    </div>
    <v-select
      class="search-select"
      v-model="searchData.type"
      :items="items"
      outlined
      @keyup.enter="search"
      :menu-props="{ bottom: true, offsetY: true }"
    ></v-select>
    <v-text-field
      class="search-textfield"
      outlined
      v-model="searchData.value"
      append-icon="mdi-magnify"
      @click:append="search"
      @keyup.enter="search"
    >
    </v-text-field>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TheSearchBar",
  components: {},
  data: () => {
    return {
      searchData: {
        type: "name",
        value: "",
      },
      items: [
        {
          text: "Name",
          value: "name",
          selected: true,
        },
        {
          text: "Identifier",
          value: "id",
        },
        {
          text: "Episode",
          value: "ep",
        },
      ],
    };
  },
  methods: {
    search() {
      if (this.searchData.value === "") {
        this.searchData.type = "name";
      }

      this.$store.commit("changeSearchData", this.searchData);
    },
  },
});
</script>
<style>
.search-bar {
  width: 505px;
  height: 56px;
  display: flex;
  margin-left: 80px;
}
@media (max-width: 800px) {
  .search-bar {
    margin-left: 0;
    margin-top: 20px;
    width: 100%;
  }
}
.search-label {
  width: 123px;
  border: 1px solid #a9b1bd;
  border-radius: 12px 0 0 12px;
  border-right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search-label p {
  font-weight: 500;
  margin-bottom: 0;
}
.search-select {
  width: 128px;
  border-radius: 0 !important;
  border-right: 0 !important;
}
.search-select fieldset {
  border-right: 0 !important;
}
.v-input--is-focused fieldset {
  border-right: 2px solid currentColor !important;
}
.search-textfield {
  border-radius: 0 12px 12px 0 !important;
}
.v-menu__content {
  box-shadow: none !important;
  border-radius: 0 0 12px 12px !important;
  border: 1px solid #a9b1bd;
  top: 98px !important;
}
.v-menu__content .v-list {
  padding: 0 !important;
}
.v-list-item__title {
  font-weight: 500;
}
.v-list-item:not(:last-of-type) {
  border-bottom: 1px solid #a9b1bd;
}
</style>
