<template>
    <div class="halaman">
        <div class="container">
            <div class="row">
                <user-card></user-card>
                <user-card></user-card>
                <user-card></user-card>
                <user-card></user-card>
                <user-card></user-card>
                <user-card></user-card>
                <user-card></user-card>
                <user-card></user-card>
                <user-card></user-card>
                <user-card></user-card>
                <user-card></user-card>
                <user-card></user-card>
            </div>
        </div>
    </div>
</template>

<script>
import UserCard from '../components/UserCard.vue';
export default {
    components:{
        UserCard
    }
}
</script>

<style scoped>
.halaman{
    background-color: lightgray;
    min-height: 720px;
    display: absolute;
    bottom: 0;
}
.container{
    background-color: rgba(255, 255, 255, 0.555);
    padding: 3rem;
}
.row{
    display: flex;
    justify-content: space-evenly;
}
</style>