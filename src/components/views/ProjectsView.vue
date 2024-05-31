<script>
import ProjectCard from '../Main/ProjectCard.vue';
import axios, { Axios } from 'axios';

export default {
    name: 'ProjectsView',
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
                console.log(response.data.projects);
                this.projects = response.data.projects;
            })
                .catch(error => {
                    console.error(error);
                })
        },
        nextPage(nextPageUrl) {
            this.callApi(nextPageUrl);
        },
        prevPage(prevPageUrl) {
            this.callApi(prevPageUrl);
        },
        goToPage(page) {
            let pageUrl = this.projects.path + '?page=' + page;
            this.callApi(pageUrl);
        }
    },
    mounted() {
        let url = this.base_url + this.projects_api_url;
        this.callApi(url);
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <template v-for="project in projects.data">
                <ProjectCard :project="project" :base_url="base_url" />
                <!-- ProjectCard -->
            </template>
        </div>
        <nav aria-label="Page navigation">
            <ul class="pagination">
                <li class="page-item prev" @click="prevPage(projects.prev_page_url)"
                    v-if="projects.prev_page_url !== null">
                    Prev
                </li>
                <li class="page-item" :class="{ active: page === projects.current_page }"
                    v-for="page in projects.last_page" @click="goToPage(page)">
                    {{ page }}
                </li>
                <li class="page-item next" @click="nextPage(projects.next_page_url)"
                    v-if="projects.next_page_url !== null">
                    Next
                </li>
            </ul>
        </nav>
        <!-- Pagination -->
    </div>
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

    .pagination {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
        list-style: none;

        .page-item {
            padding: 0.5rem;
            border-radius: 1rem;
        }

        .page-item:hover {
            cursor: pointer;
            background-color: lightblue;
        }

        .page-item.prev,
        .page-item.next {
            border: 1px solid gray;
        }

        .active {
            background-color: skyblue;
        }
    }
}
</style>