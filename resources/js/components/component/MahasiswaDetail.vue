<template>
    <div class="halaman">
        <div class="row" >
        <div class="load text-success" v-if="loading">loading..</div>
        <div v-else class="card m-3 p-1">
            <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Nama : {{ mahasiswa.nama }}</h5>
                <p class="card-text">Jurusan : {{ mahasiswa.jurusan }}</p>
                <!-- <router-link class="btn btn-success btn-block" :to="{ name : 'detail', params:{id}}">Detail</router-link> -->
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import UserCard from '../component/UserCard.vue';
export default {
  components: { UserCard },
    data(){
        return{
            loading :true,
            mahasiswa:null,
            id:null
        }
    },
    created(){
        this.loading=true;
        const req = axios.get(`/api/home/${this.$route.params.id}`).then(response=>{
            this.mahasiswa = response.data;
            this.loading=false;
        });
    }
}
</script>

<style scoped>
.row{
    display: flex;
    justify-content: space-evenly;
}
.card{
    max-width: 50%;
}
.halaman{
    background-color: lightgray;
    min-height: 720px;
}
</style>