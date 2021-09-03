<template>
    <div class="halaman">
        <div class="container card">
            <user-card class=""></user-card>
        </div>
    </div>
</template>

<script>
import UserCard from '../components/UserCard.vue';
export default {
    components:{
        UserCard
    },
}
</script>

<style scoped>
.halaman{
    background-color: lightgray;
    min-height: 710px;
}

.container{
    background-color: rgb(255, 255, 255);
}
</style>