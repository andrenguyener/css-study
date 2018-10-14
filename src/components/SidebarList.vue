<template>
    <!-- TODO: Decide if want to handle active route logic here or parent -->

    <div v-if="route.show">
        <template v-if="route.children">
            <v-list-group :key="route.name">
                <v-list-tile slot="activator">
                    <v-list-tile-title>{{ route.name }}</v-list-tile-title>
                </v-list-tile>
                <v-list-tile v-for="subRoute in route.children" :key="subRoute.name">
                    <SidebarList v-bind:route="subRoute"></SidebarList>
                </v-list-tile>
            </v-list-group>
        </template>
        <template v-else>
            <v-list-tile :key="route.name">
                <v-list-tile-title>
                    <router-link :to="route.path" exact>{{ route.name }}</router-link>
                </v-list-tile-title>
            </v-list-tile>
        </template>
    </div>
</template>

<style scoped lang="sass">
	@import "@/styles/sidebarList.sass"
</style>

<script>
export default {
  name: "SidebarList",
  props: {
    route: Object
  }
};
</script>
