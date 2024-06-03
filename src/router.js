import { createRouter, createWebHistory } from "vue-router";

import HomeView from "./components/views/HomeView.vue";
import ProjectsView from "./components/views/ProjectsView.vue";
import AboutView from "./components/views/AboutView.vue";
import ContactsView from "./components/views/ContactsView.vue";
import SingleProjectView from "./components/views/SingleProjectView.vue";
import NotFound from "./components/views/NotFound.vue";

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
        },
        {
            path: '/project/:slug',
            name: 'single_project',
            component: SingleProjectView
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound
        },
    ]
});

export default router;