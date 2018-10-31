<template>
  <div class="page">
    <div class="page-body">
      <div class="page-content">
        <h1 class="page-title">{{ title }}</h1>
        <slot></slot>
      </div>
      <Pagination :routes="routes"></Pagination>
    </div>
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
