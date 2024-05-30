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
    <div class="container">
        <div class="row">
            <template v-for="project in projects.data">
                <ProjectCard :project="project" />
            </template>
        </div>
    </div>
</template>

<style scoped>
.container {
    margin: 2rem auto;
    width: 90%;

    .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 2rem;
    }
}
</style>