<template>
  <v-navigation-drawer   v-model="drawer"
      absolute
    >
    <!-- <v-toolbar flat> -->
      <!-- <v-list> -->
        <!-- <v-list-tile> -->
          <!-- <v-list-tile-title class="title"> -->
            <v-container fluid>
              <v-layout align-center justify-center>
                <router-link to="/" exact><img id="logo" src="@/assets/logo3.png" alt="logo"></router-link>
              </v-layout>
            </v-container>
          <!-- </v-list-tile-title> -->
        <!-- </v-list-tile> -->
      <!-- </v-list> -->
    <!-- </v-toolbar> -->

    <v-divider></v-divider>

    <v-list dense class="pt-0">
      <v-list-tile
        v-for="route in activeRoutes"
        :key="route.name"
      >
        <v-list-tile-content>
          <v-list-tile-title></v-list-tile-title>
            <router-link :to=route.path exact>{{ route.name }}</router-link>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped lang="sass">
  @import "@/styles/sidebar.sass"
</style>

<script>
export default {
  props: {
    routes: Array
  },
  data() {
    return {
      drawer: true
    };
  },
  computed: {
    activeRoutes: function() {
      return this.routes.filter(route => {
        return route.show;
      });
    }
  }
};
</script>
