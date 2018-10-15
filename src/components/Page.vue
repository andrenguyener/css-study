<template>
  <div class="page">
    <h1 class="page-title">{{ title }}</h1>
    <slot></slot>
    <Pagination :routes="routes"></Pagination>
  </div>
</template>

<style lang="sass">
  @import "@/styles/page.sass"
</style>

<script>
import Pagination from "@/components/Pagination.vue";
export default {
  props: {
    title: String,
    routes: Array
  },
  components: {
    Pagination
  }
};
</script>
