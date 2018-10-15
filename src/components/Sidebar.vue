<template>
  <v-navigation-drawer v-model="drawer" absolute>
    <v-container fluid>
      <v-layout align-center justify-center>
        <router-link to="/" exact>
          <img id="logo" src="@/assets/logo3.png" alt="logo">
        </router-link>
      </v-layout>
    </v-container>
    <v-list dense>
      <template v-for="route in activeRoutes">
        <SidebarList v-bind:route="route" :key="route.name"></SidebarList>
      </template>
    </v-list>
    <!-- <div v-show="getRouteIndex() >= 0 ? true : false">
      <v-icon @click="prev" :disabled="getRouteIndex() === 0 ? true : false">mdi-chevron-left</v-icon>
      <v-icon
        @click="next"
        :disabled="getRouteIndex() === flattenRoutes.length - 1 ? true : false"
      >mdi-chevron-right</v-icon>
    </div>-->
  </v-navigation-drawer>
</template>

<style scoped lang="sass">
	@import "@/styles/sidebar.sass"
</style>

<script>
import SidebarList from "@/components/SidebarList.vue";
export default {
  props: {
    routes: Array
  },
  components: {
    SidebarList
  },
  data() {
    return {
      drawer: true
    };
  },
  methods: {
    getRouteIndex: function() {
      return this.flattenRoutes.findIndex(r => r.path === this.$route.path);
    },
    prev: function() {
      const index = this.getRouteIndex();
      if (index !== 0) {
        this.$router.push(this.flattenRoutes[index - 1].path);
      }
    },
    next: function() {
      const index = this.getRouteIndex();
      if (index < this.flattenRoutes.length - 1) {
        this.$router.push(this.flattenRoutes[index + 1].path);
      }
    },
    removeRoutes: function(route, copy) {
      if (!route.show) {
        copy.splice(copy.indexOf(route), 1);
      }
      if (route.children) {
        route.children.forEach(r => {
          this.removeRoutes(r, copy);
        });
      }
    },
    addFlatRoutes: function(route, arr) {
      if (!route.children) {
        arr.push(route);
      } else {
        route.children.forEach(r => {
          this.addFlatRoutes(r, arr);
        });
      }
    }
  },
  computed: {
    activeRoutes: function() {
      let copy = this.routes.slice();
      copy.forEach(route => {
        this.removeRoutes(route, copy);
      });
      return copy;
    },
    flattenRoutes: function() {
      let accumulator = [];
      this.activeRoutes.forEach(route => {
        this.addFlatRoutes(route, accumulator);
      });
      return accumulator;
    }
  }
};
</script>
