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
    traverseRoutes: function(route, copy) {
      if (!route.show) {
        copy.splice(copy.indexOf(route), 1);
        return;
      }
      if (route.children) {
        route.children.forEach(r => {
          this.recursionRoutes(r);
        });
      }
    }
  },
  computed: {
    activeRoutes: function() {
      let copy = this.routes.slice();
      copy.forEach(route => {
        this.traverseRoutes(route, copy);
      });
      return copy;
    }
  }
};
</script>
