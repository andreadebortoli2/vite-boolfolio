<script>
import ProjectCard from './Main/ProjectCard.vue';
import axios, { Axios } from 'axios';

export default {
    name: 'AppMain',
    components: {
        ProjectCard
    },
    data() {
        return {
            projects: []
        }
    },
    methods: {
        callApi(url) {
            axios.get(url).then(response => {
                console.log(response.data.projects.data);
                this.projects = response.data.projects;
            })
        }
    },
    mounted() {
        let url = 'http://127.0.0.1:8000/api/projects';
        this.callApi(url);
    }
}
</script>

<template>
    <div>
        <template v-for="project in projects.data">
            <h3>title: {{ project.title }}</h3>
        </template>
        <!-- <ProjectCard /> placeholder -->
    </div>
</template>

<style scoped></style>