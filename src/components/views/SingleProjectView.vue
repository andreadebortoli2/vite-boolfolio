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
                console.log(this.callSuccess);
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
    <div class="container">
        <h3 v-if="loading">
            Loading ...
        </h3>
        <template v-else>
            <template v-if="callSuccess == true">
                <div class="row">
                    <div class="col left">
                        <h2>
                            {{ project.title }}
                        </h2>
                        <div class="metadata">
                            <strong>Type: </strong>
                            <span v-if="project.type !== null"> {{ project.type.name }}</span>
                            <span v-else> None</span>
                            <br>
                            <strong>Technology: </strong>
                            <template v-if="project.technologies.length !== 0">
                                <span v-for="(technology, index) in project.technologies">{{ technology.name }} <span
                                        v-if="index !== project.technologies.length - 1"> - </span></span>
                            </template>
                            <span v-else> None</span>
                            <br>
                            <strong>Author: </strong>
                            <span v-if="project.author !== null"> {{ project.author }}</span>
                            <span v-else> None</span>
                            <br>
                            <strong>source code: </strong>
                            <span v-if="project.author !== null"> {{ project.source_code_url }}</span>
                            <span v-else> None</span>
                            <br>
                            <strong>site: </strong>
                            <span v-if="project.author !== null"> {{ project.production_site_url }}</span>
                            <span v-else> None</span>
                        </div>
                        <p>
                            {{ project.description }}
                        </p>
                    </div>
                    <div class="col right">
                        <template v-if="project.image.startsWith('project-images')">
                            <img :src="store.base_url + 'storage/' + project.image" alt="">
                        </template>
                        <template v-else>
                            <img :src="project.image" alt="">
                        </template>
                    </div>
                </div>
            </template>
        </template>
    </div>
</template>

<style scoped>
.container {
    min-height: 75vh;
    padding: 3rem 0;

    .row {
        display: flex;

        .col {
            width: 50%;

            &.left {
                padding-right: 4rem;

                .metadata {
                    padding: 1rem 0;

                    strong {
                        line-height: 1.5rem;
                    }
                }
            }

            img {
                width: 100%;
            }
        }
    }
}
</style>