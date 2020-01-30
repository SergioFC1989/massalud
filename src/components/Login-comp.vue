<template>
  <div class="container">
      <div class="notification">
      <section>
            <form 
                ref="form"
                @submit.prevent="validateBeforeSubmit()"
                novalidate
            >
            <BaseInput
                :value="fieldValues.email"
                :label="'Correo electrónico'"
                :type="'email'"
                :name="'email'"
                @onInput="onFieldChange('email', $event)"
            />
            <!-- <BaseInput
              :label = "'Contraseña'"
              :type = "'password'"
              @onInput = "$emit('onChange','password', $event)"
              :name = "'password'"
              :pass = "true"
              :v-valid = "'required'"
            />    -->
            <button type="submit" class="button is-primary">Enviar</button>
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
    props: {
        values: {
            type: Object
        }
    },
    data() {
        return {
            fieldValues: {
                email: null,
                password: null
            }
        }
    },
    methods: {
        onFieldChange(field, value) {
            this.fieldValues[field] = value;
        },

        validateBeforeSubmit() {
            // const isValid = this.$refs.$children.map(child => child.isValid)
            console.log(this.$refs)
            // console.log(this.$children[1].$children[0].$children[0].$children[0].isValid)
            // this.$validator.validateAll().then(result => console.log(result));
            // this.$children[0].$validator.validateAll().then(result => {
            //     console.log(result);
            // });
            // this.$validator.validateAll().then((result) => {
            //     if (result) {
            //         this.$buefy.toast.open({
            //             message: 'Form is valid!',
            //             type: 'is-success',
            //             position: 'is-bottom'
            //         })
            //         return;
            //     }
            //     this.$buefy.toast.open({
            //         message: 'Form is not valid! Please check the fields.',
            //         type: 'is-danger',
            //         position: 'is-bottom'
            //     })
            // });
        }
    }  
}
</script>