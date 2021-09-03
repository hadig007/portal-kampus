<template>
    <div>
        <nav>
            <h2><router-link class="link" to="/home">PORTAL KAMPUS</router-link></h2>
            <ul>
                <router-link class="link" to="/home">Home</router-link>
                <router-link class="link" to="/data">Data</router-link>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

div{
    font-family: 'Roboto Condensed', sans-serif;
}
nav{
    background-color: rgb(0, 112, 150);
    display: flex;
    justify-content: space-around;
    padding: 1rem;
    color: white;
}
h2{
    margin: 0;
    font-family: 'Pacifico', cursive;
}
ul{
    display: flex;
    flex-direction: row; 
    padding: 0;
    margin-bottom: 0;
}
ul li{
    margin: 5px 15px;
    padding: 0;
    list-style: none;
    color: rgba(255, 255, 255, 0.623);
    text-decoration: none;
}
.link{
    color: rgb(255, 255, 255);
    padding: 5px 15px;
    display: flex;
    align-items: center;
    transition: 0.4s;
}
.link:hover{
    color: rgb(255, 255, 255);
    text-decoration: none;
    background-color: rgba(173, 216, 230, 0.37);
    padding: 5px 15px;
    border-radius: 5px;
}
.link:active{
    color: rgb(255, 255, 255);
    text-decoration: none;
    background-color: rgba(173, 216, 230, 0.37);
    padding: 5px 15px;
    border-radius: 5px;
}
a:active:hover{
    text-decoration: none;
    text-transform: none;
}
</style>