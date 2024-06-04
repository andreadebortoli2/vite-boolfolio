<script>
import { store } from '../store';

export default {
    name: 'AppHeader',
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <header>
        <div class="container">
            <nav class="menu">
                <div class="left-menu">
                    <div class="logo">
                        <span>Andrea</span> De Bortoli
                    </div>
                </div>
                <div class="right-menu">
                    <ul>
                        <li v-for="route in store.routes">
                            <router-link activeClass :to="{ name: route.route_name }">{{ route.view_name
                                }}</router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>

<style scoped>
header {
    background-color: var(--primary-dark);
    background: linear-gradient(to right, var(--primary-dark), var(--primary-light));
    box-shadow: 0 10px 10px 5px var(--medium);
    position: fixed;
    width: 100%;
    z-index: 100;

    .menu {

        display: flex;
        justify-content: space-between;
        align-items: center;

        .left-menu {
            .logo {
                margin-left: -2rem;
                font-size: 2rem;

                span {
                    font-size: 4rem;
                }
            }
        }

        .right-menu {


            ul {
                display: flex;
                justify-content: space-between;
                gap: 1rem;
                list-style-type: none;

                a {
                    color: var(--secodary-light);
                    font-size: 1.5rem;
                    font-weight: bold;
                    text-decoration: none;

                    &.router-link-exact-active {
                        color: var(--primary-dark);
                    }
                }
            }
        }
    }
}
</style>