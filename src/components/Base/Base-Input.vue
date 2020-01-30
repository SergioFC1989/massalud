<template>
    <b-field
            :label="label" 
            :label-position="labelPosition"
        >
            <b-input
                @input="$emit('onInput', $event)"
                :icon="icon"
                :type="type"
                :placeholder="placeholder"
                :password-reveal="pass"
                :name="name"
                :ref="name"
                required
            />
        </b-field>
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
        }
    }
}
</script>