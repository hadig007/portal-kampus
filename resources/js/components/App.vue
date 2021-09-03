<template>
    <div>
        <header-component></header-component>
        <router-view></router-view>
        <footer-component></footer-component>
    </div>
</template>

<script>
import HeaderComponent from './layouts/Header.vue';
import FooterComponent from '../components/layouts/Footer.vue';

export default {
    components:{
        HeaderComponent,
        FooterComponent
    },
    data(){
        return{
        }
    }
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');
*{
    font-family: 'Roboto Condensed', sans-serif;
}
</style>