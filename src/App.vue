<template>
  <div id="app">
    <Header @toggle-drawer="$refs.drawer.drawer = !$refs.drawer.drawer"/>
    <Sidebar ref="drawer" :routes="routes"/>
    <!-- <v-btn icon class="mt-3 fixed-position" @toggle-drawer="$refs.drawer.drawer = !$refs.drawer.drawer">
      <v-icon>menu</v-icon>
    </v-btn>-->
    <!-- <router-view :routes="routes"/> -->
    <Page :routes="routes" :title="this.$route.name">
      <router-view/>
    </Page>
    <!-- <Pagination :routes="routes"></Pagination> -->
  </div>
</template>

<style lang="sass">
  @import "@/styles/app.sass"
</style>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import Page from "@/components/Page.vue";
import Routes from "@/router.js";
import Pagination from "@/components/Pagination.vue";
export default {
  components: {
    Sidebar,
    Header,
    Page,
    Pagination
  },
  data() {
    return {
      routes: Routes.options.routes
    };
  }
};
</script>
