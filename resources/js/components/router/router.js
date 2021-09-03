import Home from '../pages/Home.vue';
import Data from '../pages/Data.vue';
import MahasiswaDetail from '../component/MahasiswaDetail.vue'
import NotFound from '../component/NotFound.vue';

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        name: 'home'
    },
    {
        path: '/home/:id',
        component: MahasiswaDetail,
        name : 'detail'
    },
    {
        path: '/data',
        component: Data,
    },
    { 
        path: '/:pathMatch(.*)*', 
        component: NotFound,
        name: 'NotFound',  
    },
];

export default routes;