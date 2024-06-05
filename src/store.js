import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
    routes: [
        {
            route_name: 'home',
            view_name: 'Home'
        },
        {
            route_name: 'projects',
            view_name: 'Projects'
        },
        {
            route_name: 'about',
            view_name: 'About'
        },
        {
            route_name: 'contacts',
            view_name: 'Contacts'
        },
    ],
    base_url: 'http://127.0.0.1:8000/',
    projects_api_url: 'api/projects/',
    form_api_url: 'api/contacts',
})