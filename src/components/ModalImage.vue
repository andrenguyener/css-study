<template>
    <div>
        <img
            @click="dialog = modalClick()"
            :class="`${classProp} page-image`"
            :src="require(`@/assets/${src}`)"
            alt=""
        >
        <v-dialog v-model="dialog" :lazy="true" :persistent="true" width="75%">
            <img
                @click="dialog = false"
                class="modal-image"
                :src="require(`@/assets/${src}`)"
                alt=""
            >
        </v-dialog>
    </div>
</template>
// Todo: Set origin of modal
<script>
export default {
  name: "ModalImage",
  props: {
    src: {
      type: String,
      required: true
    },
    classProp: {
      type: String,
      default: ""
    }
  },
  data: function() {
    return {
      dialog: false
    };
  },
  methods: {
    modalClick: function() {
      return window.innerWidth >= 1264;
    }
  }
};
</script>

<style scoped lang="sass">
    .page-image
        display: block
        width: 100%
        margin: 1em auto
        cursor: default
        @media screen and (min-width: 1264px)
            &:hover
                cursor: zoom-in
        
    .small-image
        width: 50%
    .modal-image
        z-index: 5
        width: 100%
        &:hover
            cursor: zoom-out
    .v-dialog__content--active
        background-color: rgba(100,100,100,0.8)
        pointer-events: auto
        
</style>
