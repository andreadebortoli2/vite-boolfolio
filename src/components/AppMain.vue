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
            projects: [],
            base_url: 'http://127.0.0.1:8000/',
            projects_api_url: 'api/projects/'
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
        let url = this.base_url + this.projects_api_url;
        this.callApi(url);
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="row">
                <template v-for="project in projects.data">
                    <ProjectCard :project="project" :base_url="base_url" />
                </template>
            </div>
        </div>
    </main>
</template>

<style scoped>
.container {
    margin: 3rem auto;

    .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 2rem;
    }
}
</style>