<template>
    <div>
        <b-field :label="label" :message="message" :label-position="labelPosition">
                <b-input
                :icon="icon"
                :placeholder="placeholder" 
                :password-reveal="pass"
                :type="type"
                :name="name" 
                :v-validate="valid"
                @input="$emit('onInput', $event)"
                /> 
        </b-field>
    </div>
</template>
<script>
export default {
    name: 'BaseInput',
    props:{
        label: {
            type: String,
        },
        type: {
            type: String,
            validator: val => {
                return (
                    ["url", "text", "password", "email", "search"].indexOf(val) !== -1
                );
            }
        },
        message: {
            type: String,
        },
        labelPosition: {
            type: String,
        },
        icon: {
            type: String,
        },
        placeholder: {
            type: String,
        },
        pass: {
            type: Boolean,
        },
        name: {
            type: String,
        },
        valid: {
            type: String,
        },
    }
}
</script>