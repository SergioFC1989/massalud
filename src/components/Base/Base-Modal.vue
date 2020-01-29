<template>
  <div>
      <b-modal hide-header-close no-close-on-backdrop no-close-on-esc hide-footer id="my-modal" :title="title" :size="size">
      <div class="d-block text-center">
        <h3> {{ message }} </h3>
        <p> {{ information }} </p>
      </div>
      <BaseButton
        :variant="'outline-success'"
        :description="'Entendido'"
        @click="$emit('close')"
      />
    </b-modal>
  </div>
</template>
<script>
import BaseButton from '../Base/Base-Button'
export default {
    name: 'BaseModal',
    components: {
      BaseButton,
    },
    props: {
        variant: {
          type: String,
        },
        title: {
          type: String,
        },
        message: {
          type: String,
        },
        textOneBtn: {
          type: String,
        },
        size: {
          type: String,
        },
        information: {
          type: String,
        },
        isShown: {
          type: Boolean,
          default: false,
        },
    },
    data() {
      return {
        informations:[]
      }
    },
    watch: {
      isShown (val) {
       val ? this.$bvModal.show('my-modal') : this.$bvModal.hide('my-modal') 
      }
    },
}
</script>