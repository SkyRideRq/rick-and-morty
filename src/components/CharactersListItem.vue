<template>
  <div class="border-bottom">
    <v-container class="item-row">
      <div class="col-img">
        <v-img height="68" width="43" :src="item.image"></v-img>
      </div>
      <div class="col-text">
        {{ item.id }}
      </div>
      <div class="col-text">
        {{ item.name }}
      </div>
      <div class="col-text">
        <v-icon v-if="item.gender === 'Male'">
          mdi-gender-male
        </v-icon>
        <v-icon v-if="item.gender === 'Female'">
          mdi-gender-female
        </v-icon>
        <v-icon v-if="item.gender === 'Genderless'">
          mdi-close
        </v-icon>
        <v-icon v-if="item.gender === 'unknown'">
          mdi-minus
        </v-icon>
        {{ item.gender }}
      </div>
      <div class="col-text">
        {{ item.species }}
      </div>
      <div class="col-text">
        {{ item.episode.slice(-1)[0].episode }}
      </div>

      <div v-if="$store.state.switch === 'characters'" class="col-text">
        <v-tooltip v-if="check(item.id)" right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="fav-btn" color="primary" v-bind="attrs" v-on="on">
              <v-icon>mdi-star</v-icon>
            </v-btn>
          </template>
          <span>In your favorites</span>
        </v-tooltip>
        <v-tooltip v-if="!check(item.id)" right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="fav-btn"
              outlined
              color="primary"
              @click="addToFavorites(item.id)"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-star</v-icon>
            </v-btn>
          </template>
          <span>Add to favorites</span>
        </v-tooltip>
      </div>

      <div v-else class="col-text">
        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="fav-btn"
              color="primary"
              @click="removeFromFavorites(item.id)"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-star</v-icon>
            </v-btn>
          </template>
          <span>Remove from favorites</span>
        </v-tooltip>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CharactersListItem",
  data: () => {
    return {
      favoritesCharactersIds: [],
    };
  },
  created() {
    this.favoritesCharactersIds = this.$store.state.favoritesCharactersIds;
  },
  props: { item: Object },
  methods: {
    check(id: number) {
      return this.favoritesCharactersIds.includes(id);
    },
    addToFavorites(id: number) {
      // this.item.id
      this.favoritesCharactersIds.push(id);
      console.log(id);
      this.saveData();
    },
    removeFromFavorites(id: number) {
      const index = this.favoritesCharactersIds.indexOf(id);
      if (index > -1) {
        this.favoritesCharactersIds.splice(index, 1);
      }
      this.$emit("deleteItem", id);
      this.saveData();
      // this.$el.parentNode.removeChild(this.$el);
    },
    saveData() {
      this.$store.commit(
        "changeFavoritesCharactersIds",
        this.favoritesCharactersIds
      );
      window.localStorage.setItem(
        "FavoritesCharactersIds",
        JSON.stringify(this.favoritesCharactersIds)
      );
    },
  },
});
</script>
<style>
.item-row {
  height: 84px;
  display: flex;
  align-items: center;
}
</style>
