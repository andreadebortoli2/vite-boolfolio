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

        <div class="back_home">
            <router-link :to="{ name: 'home' }">
                <span>Back HOME</span>
            </router-link>
        </div>
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

        span {
            text-decoration: none;
            color: steelblue;
        }

        &:hover {
            border: none;
            background-color: steelblue;

            span {
                color: white;
            }
        }
    }
}
</style>