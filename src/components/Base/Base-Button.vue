<template>
    <div>
        <b-button :type="type" :size="size" @click="handleClick($event)">{{ description }}</b-button>
    </div>
</template>
<script>
export default {
    name: 'BaseButton',
    props: ["type", "size", "description"],
    methods: {
       handleClick(){
           this.$emit('click')
       } 
    }
}
</script>