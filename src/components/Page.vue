<template>
  <div class="page">
    <h1 class="page-title">{{ title }}</h1>
    <slot></slot>
  </div>
  
</template>

<style lang="sass">
  @import "@/styles/page.sass"
</style>

<script>
export default {
  props: {
    title: String
  }
};
</script>
