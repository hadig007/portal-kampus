import Home from '../pages/Home.vue';
import Data from '../pages/Data.vue';

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        name: Home
    },
    {
        path: '/data',
        component: Data,
    },
];

export default routes;