<template>
    <div>
        <div class="card m-2 p-1">
            <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Nama : {{ nama }}</h5>
                <p class="card-text">Jurusan : {{ jurusan }}</p>
                <router-link class="btn btn-success btn-block" :to="{ name : 'detail', params:{id}}">Detail</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['nama','jurusan','id'],
}
</script>

<style scoped>
.card{
    max-width: 300px;
}

</style>