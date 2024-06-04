<script>
import ProjectCard from '../Main/ProjectCard.vue';
import axios from 'axios';
import { store } from '../../store';

export default {
    name: 'ProjectsView',
    components: {
        ProjectCard
    },
    data() {
        return {
            store,
            projects: [],
            loading: true
        }
    },
    methods: {
        callApi(url) {
            axios.get(url).then(response => {
                // console.log(response.data.projects);
                this.projects = response.data.projects;
                this.loading = false;
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
        let url = this.store.base_url + this.store.projects_api_url;
        this.callApi(url);
    }
}
</script>

<template>
    <section class="container">
        <h1>Projects</h1>
        <div class="loading" v-if="loading">
            Loading ...
        </div>
        <template v-else>
            <div class="row">
                <div class="col" v-for="project in projects.data">
                    <ProjectCard :project="project" />
                    <!-- ProjectCard -->
                </div>
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
        </template>
    </section>
</template>

<style scoped>
.container {

    h1 {
        padding: 0 8rem 3rem;
        margin-top: -2rem;
        font-family: "Zilla Slab", serif;
        font-size: 5rem;
        color: var(--secondary-dark);
    }

    .row {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;

        .col {
            width: calc((100% / 12 * 4) - 0.5rem);
            margin-bottom: 2rem;
        }
    }

    .pagination {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-top: 1rem;
        margin-bottom: -7rem;
        list-style: none;

        .page-item {
            padding: 0.5rem;
            border-radius: 1rem;
            color: var(--primary-light);
            font-size: 2rem;
            font-family: "Source Code Pro", monospace;
            transition: 0.4s;
        }

        .page-item:hover {
            cursor: pointer;
            color: var(--secondary-medium);
            font-size: 1.5rem;
            padding: 0 0.63rem;
        }

        .page-item.prev,
        .page-item.next {
            border: 1px solid var(--secondary-dark);
            font-family: "Pixelify Sans", sans-serif;
            color: var(--secondary-light);
            transition: 0.5s;

            &:hover {
                background-color: var(--secondary-dark);
                font-size: 2rem;
                padding: 0.5rem;
            }
        }

        .active {
            color: var(--secondary-light);
        }
    }
}
</style>