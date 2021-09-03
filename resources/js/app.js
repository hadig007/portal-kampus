require('./bootstrap');
window.Vue = require('vue').default;

import VueRouter from 'vue-router'
import Vue from 'vue/dist/vue';

import routes from './components/router/router.js';

Vue.use(VueRouter);

Vue.component('app-component', require('./components/App.vue').default);

const router = new VueRouter({
    mode : 'history',
    routes
});

const app = new Vue({
    el: '#app',
    router
});
