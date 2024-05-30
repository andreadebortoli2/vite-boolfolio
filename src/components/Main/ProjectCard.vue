<script>
export default {
    name: 'ProjectCard',
    props: {
        project: Object
    }
}
</script>

<template>
    <div class="card">
        <img :src="project.image" alt="">
        <div class="card-body">
            <h3>
                {{ project.title }}
            </h3>
            <div class="metadata">
                <strong>Type:</strong> {{ project.type.name }}
                <br>
                <strong>Technology:</strong>
                <span v-if="project.technologies.length !== 0">{{ project.technologies }}</span>
                <span v-else> None</span>
                <br>
                <strong>Author:</strong> {{ project.author }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    border: 1px solid gray;
    border-radius: 0.5rem;
    width: 20%;

    img {
        width: 100%;
        border-radius: 0.5rem;
    }

    .card-body {
        padding: 1rem;
    }
}
</style>