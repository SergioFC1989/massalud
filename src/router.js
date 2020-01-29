import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Login from './views/Login'

import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        // Views
        { path: '/', name: 'Home', component: Home },
        { path: '/login', name: 'Login', component: Login },
        // Components


    ]
})
export default router;