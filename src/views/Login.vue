<template>
    <div>
        <NavBarComp/>
        <LoginComp @onLogin="validateBeforeSubmit()" @onChange = "(field, $event)=>{this[field] = $event}"/>
    </div>
</template>
<script>
import LoginComp from '../components/Login-comp'
import NavBarComp from '../components/NavBar-comp'
export default {
    name: 'Login',
    components: {
        LoginComp,
        NavBarComp,
    },
    data() {
        return {
            email: null,
            password: null,
        }
    },
    methods: {
        validateBeforeSubmit() {
        console.log(this.email + ' - ' + this.password)
            this.$validator.validate(this.email).then((valid) => {
                if (valid) {
                    this.$buefy.toast.open({
                        message: 'Form is valid!',
                        type: 'is-success',
                        position: 'is-bottom'
                    })
                    console.log(valid)
                    return;
                }
                this.$buefy.toast.open({
                    message: 'Form is not valid! Please check the fields.',
                    type: 'is-danger',
                    position: 'is-bottom'  
                })
            });
        }
    },
}
</script>