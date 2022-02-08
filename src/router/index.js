import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import Quiz from '/src/views/Quiz.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/cat/:name',
        name: 'Categorie',
        component: Home,
    },
    {
        path: '/quiz',
        name: 'Quiz',
        component: Quiz,
    },


];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router