import { createRouter, createWebHistory } from "vue-router";

import HomeView from "./components/views/HomeView.vue";
import ProjectsView from "./components/views/ProjectsView.vue";
import AboutView from "./components/views/AboutView.vue";
import ContactsView from "./components/views/ContactsView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactsView
        }
    ]
});

export default router;