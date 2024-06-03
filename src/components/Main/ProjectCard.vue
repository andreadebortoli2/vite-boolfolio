<script>
import { store } from '../../store';

export default {
    name: 'ProjectCard',
    props: {
        project: Object,
    },
    data() {
        return {
            store,
        }
    },
    mounted() {
        // console.log(this.project);
    }
}
</script>

<template>
    <div class="card">
        <router-link :to="{ name: 'single_project', params: { slug: project.slug } }">
            <template v-if="project.image.startsWith('project-images')">
                <img :src="store.base_url + 'storage/' + project.image" alt="">
            </template>
            <template v-else>
                <img :src="project.image" alt="">
            </template>
            <div class="card-body">
                <h3>
                    {{ project.title }}
                </h3>
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
            </div>
        </router-link>
    </div>
</template>

<style scoped>
.card {
    border: 1px solid gray;
    border-radius: 0.5rem;
    padding-bottom: 1rem;
    width: calc(100% / 12 * 3);

    img {
        width: 100%;
        height: 60%;
        object-fit: cover;
        border-radius: 0.5rem 0.5rem 0 0;
    }

    .card-body {
        padding: 1rem;
    }
}
</style>