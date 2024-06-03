<script>
export default {
    name: 'NotFound'
}
</script>

<template>
    <div class="container">
        <h1>
            404 Not Found
        </h1>

        <router-link :to="{ name: 'home' }">
            <button class="back_home">
                Back HOME
            </button>
        </router-link>
    </div>
</template>

<style scoped>
.container {
    min-height: 80vh;
    padding-top: 5rem;
    text-align: center;

    .back_home {
        margin: 10rem auto 0;
        border: 2px solid steelblue;
        border-radius: 1rem;
        padding: 1rem;
        width: fit-content;
        height: fit-content;
        text-decoration: none;
        color: steelblue;

        &:hover {
            border: none;
            background-color: steelblue;
            color: white;
        }
    }
}
</style>