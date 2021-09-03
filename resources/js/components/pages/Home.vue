<template>
    <div class="halaman">
        <div class="container">
            <div class="row">
                <user-card
                v-for="maha in mahasiswa"
                :key="maha.id"
                :nama="maha.nama"
                :jurusan="maha.jurusan"
                :id="maha.id"
                ></user-card>
            </div>
        </div>
    </div>
</template>

<script>
import UserCard from '../component/UserCard.vue';
export default {
    components:{
        UserCard
    },
    data(){
        return{
            mahasiswa:null,
        }
    },
    created(){
        axios.get('api/home').then(response=>{
            this.mahasiswa = response.data;
        });
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