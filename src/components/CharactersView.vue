<template>
  <div>
    <CharactersList
      v-if="!$apollo.queries.characters.loading"
      :characters="dataToDispaly"
    />
    <v-container>
      <v-pagination
        v-if="!$apollo.queries.characters.loading && paginationLength > 1"
        v-model="page"
        :length="paginationLength"
        :total-visible="7"
        @input="changePage(page)"
        class="pagination"
        next-icon="mdi-menu-right"
        prev-icon="mdi-menu-left"
      ></v-pagination>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CharactersList from "@/components/CharactersList.vue";

import gql from "graphql-tag";

export default Vue.extend({
  name: "CharactersView",
  components: {
    CharactersList,
  },
  data: () => {
    return {
      page: 1,
      dataToDispaly: Array,
      characters: Object,
      filterName: "",
      filterId: Number,
      character: Object,
      episodes: Array,
      filterEpisode: String,
      paginationLength: Number,
      charactersByIds: [],
      charactersByIdsList: [],
    };
  },
  apollo: {
    // filter
    characters: {
      query: gql`
        query characters($page: Int!, $filterName: String!) {
          characters(
            page: $page

            filter: { name: $filterName }
          ) {
            info {
              pages
              count
            }
            results {
              id
              name
              image
              gender
              episode {
                episode
              }
              species
            }
          }
        }
      `,
      variables: {
        page: 1,
        filterName: "",
      },
      result({ data }) {
        this.dataToDispaly = data.characters.results;
        this.paginationLength = data.characters.info.pages;
      },
      errorPolicy: "all",
    },
    character: {
      query: gql`
        query character($filterId: ID!) {
          character(id: $filterId) {
            id
            name
            image
            gender
            episode {
              episode
            }
            species
          }
        }
      `,
      variables: {
        filterId: 1,
      },
      errorPolicy: "all",
    },
    episodes: {
      query: gql`
        query episodes($filterEpisode: String!) {
          episodes(page: 1, filter: { episode: $filterEpisode }) {
            results {
              episode
              characters {
                id
                name
                image
                gender
                episode {
                  episode
                }
                species
              }
            }
          }
        }
      `,
      variables: {
        filterEpisode: "s01e01",
      },
      errorPolicy: "all",
    },
    charactersByIds: {
      query: gql`
        query charactersByIds($ids: [ID!]!) {
          charactersByIds(ids: $ids) {
            id
            name
            image
            gender
            episode {
              episode
            }
            species
          }
        }
      `,
      variables() {
        return {
          ids: this.charactersByIdsList,
        };
      },
      errorPolicy: "all",
      skip() {
        return this.skipQueryCharacters;
      },
    },
  },
  created() {
    this.charactersByIdsList = JSON.parse(
      window.localStorage.getItem("FavoritesCharactersIds")
    );
    console.log(this.charactersByIdsList);

    if (this.charactersByIdsList !== null) {
      this.$store.commit(
        "changeFavoritesCharactersIds",
        this.charactersByIdsList
      );
      this.$apollo.queries.charactersByIds.skip = false;
      this.$apollo.queries.charactersByIds.refetch();
    }

    this.$store.subscribe((event, state) => {
      console.log(event);
      this.paginationLength = 1;

      if (event.type === "changeFavoritesCharactersIds") {
        this.charactersByIdsList = this.$store.state.favoritesCharactersIds;

        this.$apollo.queries.charactersByIds.skip = false;
      }

      if (event.type === "switchPage") {
        if (event.payload === "characters") {
          this.$apollo.queries.characters.fetchMore({
            updateQuery: (previousResult, { fetchMoreResult }) => {
              if (!fetchMoreResult) {
                return previousResult;
              }
              this.dataToDispaly = fetchMoreResult.characters.results;
              this.paginationLength = fetchMoreResult.characters.info.pages;
              return fetchMoreResult;
            },
          });
        }
        if (event.payload === "favorites" && this.charactersByIds !== null) {
          this.dataToDispaly = this.charactersByIds;
        }
        if (event.payload === "favorites" && this.charactersByIds === null) {
          this.dataToDispaly = [];
        }
      }

      if (event.type === "changeSearchData") {
        if (event.payload.type === "ep") {
          this.filterEpisode = event.payload.value;
          console.log("up");
          this.$apollo.queries.episodes.fetchMore({
            variables: {
              filterEpisode: this.filterEpisode,
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {
              if (!fetchMoreResult) {
                this.dataToDispaly = previousResult;

                return previousResult;
              }

              this.dataToDispaly =
                previousResult.episodes.results[0].characters;
              console.log(fetchMoreResult);
              if (fetchMoreResult.episodes !== null) {
                return fetchMoreResult;
              }
              if (fetchMoreResult.episodes === null) {
                this.dataToDispaly = this;
              }
            },
          });
        }

        if (event.payload.type === "id") {
          this.filterId = event.payload.value;
          this.paginationLength = 1;
          this.$apollo.queries.character.fetchMore({
            variables: {
              filterId: this.filterId,
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {
              if (!fetchMoreResult) {
                this.dataToDispaly = [previousResult.character];

                return previousResult;
              }
              this.dataToDispaly = [fetchMoreResult.character];
              console.log(fetchMoreResult);
              if (fetchMoreResult.character !== null) {
                return fetchMoreResult;
              }
              if (fetchMoreResult.character === null) {
                this.dataToDispaly = [];
              }
            },
          });
        }

        if (event.payload.type === "name") {
          this.filterName = event.payload.value;
          this.$apollo.queries.characters.fetchMore({
            variables: {
              filterName: this.filterName,
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {
              if (!fetchMoreResult) {
                return previousResult;
              }
              // this.paginationLength = fetchMoreResult.characters.info.pages;
              this.page = 1;
              if (fetchMoreResult.characters !== null) {
                return fetchMoreResult;
              }
              if (fetchMoreResult.characters === null) {
                this.dataToDispaly = [];
              }
            },
          });
        }
      }
    });
  },
  methods: {
    changePage(value: number) {
      this.$apollo.queries.characters.fetchMore({
        variables: {
          page: this.page,
          filterName: this.filterName,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult;
          }
          return fetchMoreResult;
        },
      });
    },
  },
});
</script>
<style>
.pagination .v-pagination {
  justify-content: left;
  height: 141px;
  align-items: flex-start;
  padding-top: 40px;
}
.pagination .v-pagination__item {
  height: 40px;
  width: 40px;
  box-shadow: none !important;
  border: 1px solid #a9b1bd;
  border-radius: 4px;
  margin: 0;
}
.pagination .v-pagination__navigation {
  height: 40px;
  width: 40px;
  box-shadow: none !important;
  border: 1px solid #a9b1bd;
  border-radius: 4px;
  margin: 0;
}
.pagination li {
  margin: 0 4px 0 4px;
}
.pagination li:first-of-type {
  margin: 0 4px 0 0;
}
.pagination .v-pagination__more {
  height: 40px;
  width: 40px;
  border: 1px solid #a9b1bd;
  border-radius: 4px;
  margin: 0 4px 0 4px;
}
.pagination .v-pagination .v-pagination__item {
  color: #a9b1bd !important;
}
.pagination .v-pagination__navigation .v-icon {
  color: #11b0c8 !important;
}
.pagination .v-pagination__navigation--disabled .v-icon {
  color: #a9b1bd !important;
}
.pagination .v-pagination .v-pagination__item--active {
  color: #ffffff !important;
}
@media (max-width: 500px) {
  .pagination .v-pagination__more,
  .pagination .v-pagination__navigation,
  .pagination .v-pagination__item {
    height: 32px;
    width: 32px;
  }
}
</style>
