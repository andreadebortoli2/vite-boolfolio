<script>
export default {
    name: 'Banner',
    props: {
        banner: Object,
    },
    mounted() {
        // console.log(this.banner);
    }
}
</script>

<template>
    <div class="wrapper">
        <div class="container">
            <div class="banner">
                <h1>{{ banner.title }}</h1>
                <p>
                    {{ banner.content }}
                </p>
                <router-link :to="{ name: banner.route_name }">
                    <button>
                        {{ banner.call_to_action }}
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    min-height: 70vh;

    .banner {
        margin-top: 3rem;
        background-color: lightseagreen;

        h1 {
            margin-left: 5rem;
            padding-top: 2rem;
        }

        p {
            padding: 3rem 2rem;
        }

        button {
            margin-left: 10rem;
            margin-bottom: 2rem;
            padding: 1rem 3rem;
            border-radius: 2rem;
            border: none;

            &:hover {
                cursor: pointer;
                background-color: lightskyblue;
            }
        }
    }
}
</style>