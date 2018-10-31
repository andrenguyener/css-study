<template>
  <div v-show="getRouteIndex() >= 0 ? true : false" id="pagination">
    <div id="prev" @click="prev">
      <v-icon id="prev-button" :disabled="getRouteIndex() === 0 ? true : false">mdi-chevron-left</v-icon>
      <p>{{ getRouteIndex() > 0 ? flattenRoutes[getRouteIndex() - 1].name : ""}}</p>
    </div>
    <div id="next" @click="next">
      <p>{{ getRouteIndex() === flattenRoutes.length - 1 ? "" : flattenRoutes[getRouteIndex() + 1].name }}</p>
      <v-icon
        id="next-button"
        :disabled="getRouteIndex() === flattenRoutes.length - 1 ? true : false"
      >mdi-chevron-right</v-icon>
    </div>
  </div>
</template>

<style scoped lang="sass">
    #pagination
        display: flex
        flex-shrink: 0
        // justify-content: center
        justify-content: space-between
        margin-top: 3em
        align-items: stretch
    #prev, #next
        display: flex
        &:hover
            p, i
                color: #42b983

        // align-self: flex-end
    #prev-button, #next-button

        // float: right
        // position: absolute
        // position: fixed
        // bottom: 50px
        // right: 0
    p
        cursor: pointer
        transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1)
        margin-bottom: 0
   
</style>


<script>
export default {
  props: {
    routes: Array
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
    // fix logic here for showing a path or not
    // refactor routes from sidebar
    addFlatRoutes: function(route, arr) {
      if (route.show) {
        if (!route.children) {
          arr.push(route);
        } else {
          route.children.forEach(r => {
            this.addFlatRoutes(r, arr);
          });
        }
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
