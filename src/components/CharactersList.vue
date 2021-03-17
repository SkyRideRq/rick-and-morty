<template>
  <div class="responsive-list">
    <div class="responsive-box">
      <v-container
        v-if="$store.state.switch === 'characters' && characters[0].id === null"
      >
        <p class="text-center">no results</p>
      </v-container>
      <v-container
        v-if="
          ($store.state.switch === 'favorites' && characters[0].id === null) ||
            controll
        "
      >
        <p class="text-center">no favorites</p>
      </v-container>
      <div class="table-header" v-else>
        <v-container>
          <div class="d-flex">
            <div class="col-img">
              Photo
            </div>
            <div class="col-text">
              Character ID
            </div>
            <div class="col-text">
              Name
            </div>
            <div class="col-text">
              Gender
            </div>
            <div class="col-text">
              Species
            </div>
            <div class="col-text">
              Last Episode
            </div>
            <div v-if="$store.state.switch === 'characters'" class="col-text">
              Add To Favorites
            </div>
            <div v-else class="col-text">
              Remove From Favorites
            </div>
          </div>
        </v-container>

        <!--  -->
      </div>
      <CharactersListItem
        v-for="item in characters"
        :item="item"
        :key="item.id"
        @deleteItem="deleteThisItem"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CharactersListItem from "@/components/CharactersListItem.vue";

export default Vue.extend({
  name: "CharactersList",
  components: {
    CharactersListItem,
  },
  data: () => {
    return {
      controll: false,
    };
  },
  props: { characters: Array },
  methods: {
    deleteThisItem(value) {
      // this.characters.splice(this.characters.indexOf(value), 1);
      console.log("start");
      console.log(this.characters);
      console.log(this.characters.length);
      if (this.characters.length < 2) {
        this.controll = true;
      } else {
        for (let i = 0; i < this.characters.length; i++) {
          if (this.characters[i].id == value) {
            this.characters.splice(i, 1);
            break;
          }
        }
      }

      console.log("fin");
      console.log(this.characters);
      // console.log(this.characters);
    },
  },
});
</script>
<style>
.table-header {
  background: rgba(229, 234, 244, 0.25);
  height: 54px;
  display: flex;
  align-items: center;
}
.col-img {
  width: 160px;
}
.col-text {
  width: 200px;
}
@media (max-width: 960px) {
  .responsive-list {
    overflow-x: scroll;
  }
  .responsive-box {
    width: 960px;
  }
}
</style>
