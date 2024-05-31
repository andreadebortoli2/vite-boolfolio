<script>
export default {
    name: 'HomeView',
}
</script>

<template>
    <div class="wrapper">
        <div class="container">
            <div class="banner">
                <h1>Welcome to my portfolio</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus tempore repellat ab natus quod
                    odit, saepe cumque libero voluptatum consequatur magni quae laborum pariatur deserunt ipsam dolorem
                    cupiditate quidem maiores quaerat animi quos placeat quasi quas eveniet! Sint reiciendis vel dicta
                    sed
                    est id quibusdam nihil expedita nostrum aperiam nulla necessitatibus voluptatem libero quam,
                    voluptates
                    officiis nobis nesciunt nemo hic omnis modi quae. Ut delectus doloremque non inventore numquam
                    laboriosam ipsam fugiat possimus quas eligendi tenetur neque eos at, aut voluptates voluptatum
                    incidunt
                    tempora? Facere reprehenderit beatae earum, eaque molestiae necessitatibus ipsa quibusdam quasi.
                    Voluptatum eos dignissimos asperiores aspernatur sed?
                </p>
                <router-link :to="{ name: 'projects' }">
                    <button>
                        Have a look
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