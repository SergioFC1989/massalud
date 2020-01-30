<template>
    <div>
        <NavBarComp />
        <LoginComp />
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
    } 
}
</script>