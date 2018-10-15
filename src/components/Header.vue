<template>
    <v-toolbar-side-icon @click.stop="$emit('toggle-drawer')"></v-toolbar-side-icon>
</template>

<style scoped lang="sass">
    button
        position: absolute
    
    .v-toolbar__side-icon.v-btn.v-btn--icon.theme--light
        position: absolute

</style>
