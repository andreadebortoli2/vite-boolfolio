<script>
import { store } from '../store';

export default {
    name: 'AppFooter',
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <div class="logo">
                        LOGO
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit praesentium molestiae laborum dicta
                        commodi deleniti repellendus sapiente quaerat pariatur doloremque?</p>
                </div>
                <div class="col-2 quick-links">
                    <h4>
                        Quick links
                    </h4>
                    <ul>
                        <li v-for="route in store.routes">
                            <router-link :to="{ name: route.route_name }">{{ route.view_name }}</router-link>
                        </li>
                    </ul>
                </div>
                <div class="col-2">
                    <h4>
                        Find me on
                    </h4>
                    <ul class="social-links">
                        <li>
                            <a href="#">
                                <i class="fa-brands fa-linkedin fa-fw" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa-brands fa-youtube fa-fw" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa-brands fa-github fa-fw" aria-hidden="true"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    background-color: gray;
    padding-top: 1rem;
    color: whitesmoke;
}

.row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.col-3 {
    width: calc(100% / 12 * 3);

    p {
        padding: 1rem 0;
    }
}

.col-2 {
    width: calc(100% / 12 * 2);
    text-align: center;


    ul {
        list-style: none;
        padding-top: 1rem;

        a {
            color: whitesmoke;
            text-decoration: none;
        }
    }

    .social-links {
        display: flex;
        justify-content: center;
        padding-top: 1rem;
        gap: 1rem;
    }
}
</style>