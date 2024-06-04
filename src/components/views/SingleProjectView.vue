<script>
import router from '../../router';
import { store } from '../../store';
import axios from 'axios';

export default {
    name: 'SingleProjectView',
    data() {
        return {
            store,
            project: {},
            callSuccess: null,
            loading: true
        }
    },
    methods: {
        callSingleApi(url) {
            axios.get(url).then(response => {
                // console.log(response.data);
                this.project = response.data.project;
                this.callSuccess = response.data.success;
                this.loading = false;
                // console.log(this.callSuccess);
                if (this.callSuccess == false) {
                    this.$router.push({ name: 'NotFound' })
                }
            })
                .catch(error => {
                    console.error(error);
                })
        },
    },
    mounted() {
        let single_project_url = store.base_url + store.projects_api_url + this.$route.params.slug;
        this.callSingleApi(single_project_url);
    }
}
</script>

<template>
    <section class="container">
        <div class="loading" v-if="loading">
            Loading ...
        </div>
        <template v-else>
            <template v-if="callSuccess == true">
                <div class="row">
                    <div class="col left">
                        <router-link class="go-back" :to="{ name: 'projects' }">
                            <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
                        </router-link>
                        <h1>
                            {{ project.title }}
                        </h1>
                        <div class="metadata">
                            <strong>Type: </strong>
                            <span v-if="project.type !== null">
                                {{ project.type.name }}
                            </span>
                            <span v-else> None</span>
                            <br>
                            <strong>Technology:</strong>
                            <template v-if="project.technologies.length !== 0">
                                <span v-for="(technology, index) in project.technologies">
                                    {{ technology.name }}
                                    <span v-if="index !== project.technologies.length - 1"> - </span>
                                </span>
                            </template>
                            <span v-else> None</span>
                            <br>
                            <strong>Source code:</strong>
                            <span v-if="project.source_code_url !== null">
                                <a :href="project.source_code_url">
                                    {{ project.source_code_url }}
                                </a>
                            </span>
                            <span v-else> None</span>
                        </div>
                        <p class="description" v-if="project.description">
                            {{ project.description }}
                        </p>
                    </div>
                    <div class="col right">
                        <template v-if="project.image !== null">
                            <template v-if="project.image.startsWith('project-images')">
                                <img :src="store.base_url + 'storage/' + project.image" alt="">
                            </template>
                            <template v-else>
                                <img :src="project.image" alt="">
                            </template>
                        </template>
                        <div class="image-placeholder" v-else>
                            Image not found
                        </div>
                    </div>
                </div>
            </template>
        </template>
    </section>
</template>

<style scoped>
.container {

    .row {
        display: flex;

        .col {
            width: 50%;

            &.left {
                font-family: "Source Code Pro", monospace;

                .go-back {
                    font-size: 2rem;
                    color: var(--medium);
                    border-radius: 50%;
                    padding: 0.5rem 0.8rem;
                    transition: 0.4s;
                    margin-left: -0.8rem;

                    &:hover {
                        color: var(--primary-light);
                        background-color: var(--medium);
                    }
                }

                h1 {
                    text-align: center;
                    font-size: 3rem;
                    color: var(--secondary-medium);
                    padding: 3rem 0;
                }

                .metadata {
                    padding: 2rem;

                    strong {
                        line-height: 1.8rem;
                        font-family: "Zilla Slab", serif;
                        padding: 0.2rem;
                        margin-right: 0.5rem;
                        border-radius: 0.5rem 0.2rem 0.5rem 0.2rem;
                        color: var(--primary-light);
                        background-color: var(--primary-dark);
                    }

                    span {
                        color: var(--secondary-light);

                        a {
                            color: var(--secondary-light);

                            &:hover {
                                text-decoration: underline;
                            }
                        }
                    }
                }

                .description {
                    background-color: var(--lightest-transp);
                    min-width: 90%;
                    margin-left: 1rem;
                    margin-right: 2rem;
                    padding: 2rem;
                    /* border-radius: 2rem 0 0 2rem; */
                    border-radius: 2rem;
                    color: var(--lightest);
                    font-size: 1.5rem;
                    font-weight: 300;
                }
            }

            &.right {
                /*                 padding: 1rem;
                background-color: var(--darkest);
                border-radius: 1rem; */

                img {
                    width: 100%;
                    aspect-ratio: 4 / 3;
                }

                .image-placeholder {
                    border: 3px solid var(--secondary-medium);
                    aspect-ratio: 4 / 3;
                    text-align: center;
                    font-size: 2rem;
                    font-family: "Pixelify Sans", sans-serif;
                    padding-top: 5rem;
                    background-color: var(--medium-light);
                    opacity: 0.7;
                    border-radius: 0.5rem;
                    color: var(--secondary-light);
                }
            }
        }
    }
}
</style>