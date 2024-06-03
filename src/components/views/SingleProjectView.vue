<script>
import router from '../../router';
import { store } from '../../store';
import axios from 'axios';

export default {
    name: 'SingleProjectView',
    data() {
        return {
            project: {},
            callSuccess: ''
        }
    },
    methods: {
        callSingleApi(url) {
            axios.get(url).then(response => {
                // console.log(response.data);
                this.project = response.data.project
                this.callSuccess = response.data.success
            })
                .catch(error => {
                    console.error(error);
                })
        },
    },
    mounted() {
        let single_project_url = store.base_url + store.projects_api_url + this.$route.params.id;
        this.callSingleApi(single_project_url);
        console.log(this.project);
        console.log(this.project.type);
    }
}
</script>

<template>
    <template v-if="callSuccess == true">
        <div class="container">
            <template v-if="project.image.startsWith('project-images')">
                <img :src="store.base_url + 'storage/' + project.image" alt="">
            </template>
            <template v-else>
                <img :src="project.image" alt="">
            </template>
            <h2>
                {{ project.title }}
            </h2>
            <div class="metadata">
                <strong>Type:</strong>
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
                <strong>Author:</strong>
                <span v-if="project.author !== null"> {{ project.author }}</span>
                <span v-else> None</span>
            </div>
            <p>
                {{ project.description }}
            </p>
        </div>
    </template>
    <div v-else>
        404
    </div>
</template>

<style scoped></style>