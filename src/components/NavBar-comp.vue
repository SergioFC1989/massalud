<template>
<b-navbar role="navigation">
    <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <BaseNavBarLogo :srcImg="'../../static/logo.jpg'" :path="'/'"/>
        </b-navbar-item>
    </template>
    <template slot="start">
        <BaseNavBarList slotNav="start" v-for="navbarItem in navbarItemStart" :key="navbarItem.key" :item="navbarItem.name" :to="{path: navbarItem.pathRouteStart}"/>
    </template>
    <template slot="end">
        <b-navbar-item v-for="navbarItem in navbarItemsEnd" :key="navbarItem.key" tag="div" >
            <div >
                <router-link :to="{path: navbarItem.pathRoutesEnd}">{{navbarItem.name}}</router-link>
            </div>
        </b-navbar-item>
    </template>
    </b-navbar>
</template>
<script>
import BaseNavBarLogo from '../components/Base/Base-Navbar-Logo'
import BaseNavBarList from '../components/Base/Base-NavBar-List'
export default {
    name: 'NavBarComp',
    components: {
        BaseNavBarLogo,
        BaseNavBarList,
    },
    data() {
        return {
            navbarItemStart: [ 
               { name:'Home', pathRouteStart:'/tohome' },
               { name:'¿Quiénes somos?', pathRouteStart:'/quienes' },
               { name:'Planes de trabajo', pathRouteStart:'/plan' },
           ],
            navbarItemsEnd: [ 
               { name:'Iniciar Sesión', pathRoutesEnd:'/login' },
               { name:'¿Aún no está registrado?', pathRoutesEnd:'/quienes' },
           ]
        }
    },
}
</script>