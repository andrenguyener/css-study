<template>
  <div class="blank-page">
    <h1 class="blank-page-title">{{ title }}</h1>
    <slot></slot>
  </div>
</template>

<style scoped lang="sass">
  @import "@/styles/blankPage.sass"
</style>

<script>
export default {
  props: {
    title: String
  }
};
</script>
