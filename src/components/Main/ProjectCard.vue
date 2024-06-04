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
            <template v-if="project.image !== null">
                <div v-if="project.image.startsWith('project-images')">
                    <img :src="store.base_url + 'storage/' + project.image" alt="">
                </div>
                <div v-else>
                    <img :src="project.image" alt="">
                </div>
            </template>
            <div class="image-placeholder" v-else>
                Image not found
            </div>
            <div class="card-body">
                <h2>
                    {{ project.title }}
                </h2>
                <div class="metadata">
                    <div class="type">
                        <strong>Type: </strong>
                        <span v-if="project.type !== null"> {{ project.type.name }}</span>
                        <span v-else> None</span>
                    </div>
                    <div class="technologies">

                        <strong>Technology: </strong>
                        <template v-if="project.technologies.length !== 0">
                            <span v-for="(technology, index) in project.technologies">{{ technology.name }} <span
                                    v-if="index !== project.technologies.length - 1"> - </span></span>
                        </template>
                        <span v-else> None</span>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>

<style scoped>
.card {
    height: 100%;
    border-radius: 0.5rem;

    a {
        color: var(--secondary-light);
    }

    img {
        border: 3px solid var(--secondary-medium);
        width: 100%;
        aspect-ratio: 4 / 3;
        object-fit: cover;
        border-radius: 0.5rem;
        transition: 0.3s;
    }

    .image-placeholder {
        border: 3px solid var(--secondary-medium);
        aspect-ratio: 4 / 3;
        text-align: center;
        font-size: 2rem;
        font-family: "Pixelify Sans", sans-serif;
        padding-top: 5rem;
        background-color: var(--medium-light);
        opacity: 0.9;
        border-radius: 0.5rem;
    }

    .card-body {
        border-radius: 0.5rem;
        transition: 0.3s;
        padding: 1rem 0;
        text-align: center;
        font-family: "Source Code Pro", monospace;
        height: 100%;

        h2 {
            padding: 1rem;
        }

        .metadata {
            display: flex;
            justify-content: space-evenly;
            align-items: flex-end;

            strong {
                font-family: "Zilla Slab", serif;
            }
        }
    }

    &:hover {
        box-shadow: 0 0 5px 5px var(--primary-light);
        background-color: var(--primary-dark);

        img,
        .image-placeholder {
            opacity: 0.9;
            border-color: var(--primary-dark);
        }
    }
}
</style>