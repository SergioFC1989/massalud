<template :slot="slotNav">
    <b-navbar-item>
        <router-link :to="to">{{item}}</router-link>
    </b-navbar-item>   
</template>
<script>
export default {
    name: 'BaseNavBarList',
    props: ["item", "to", "slotNav"]
}
</script>