<template>
    <b-navbar-item tag="router-link" :to="{path}">
        <img :src="srcImg" :alt="altImg">
    </b-navbar-item>
</template>
<script>
export default {
    name: 'BaseNavbar',
    props: ["altImg", "path","srcImg", ],
}
</script>