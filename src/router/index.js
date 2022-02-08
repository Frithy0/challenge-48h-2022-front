import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import Quiz from '/src/views/Quiz.vue'

const routes = [
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
    {
        path: "/:pathMatch(.*)*",
        redirect: '/cat/people'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router