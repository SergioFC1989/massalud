<template>
  <div class="container">
      <div class="notification">
      <section>
          <form @submit.prevent="$emit('onLogin')">
            <BaseInput
              :label = "'Correo electrónico'"
              :type = "'email'"
              @onInput = "$emit('onChange','email', $event)"
              :name = "'email'"
              :valid= "'required'"
            />
            <BaseInput
              :label = "'Contraseña'"
              :type = "'password'"
              @onInput = "$emit('onChange','password', $event)"
              :name = "'password'"
              :pass = "true"
              :valid = "'required'"
            />   
            <button type="submit" class="button is-primary"> Enviar </button>
          </form>
      </section>
    </div>
  </div>
</template>
<script>
import BaseInput from './Base/Base-Input'
export default {
  name: 'LoginComp',
  components: {
    BaseInput
  },
}
</script>