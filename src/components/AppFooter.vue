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
                <div class="col">
                    <div class="logo">
                        <span>Andrea</span> De Bortoli
                    </div>

                    <div class="find-on">
                        <h4>
                            Find me on:
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
        </div>
    </footer>
</template>

<style scoped>
footer {
    background-color: var(--primary-dark);
    color: var(--lightest);
    padding-bottom: 0.3rem;

    .row {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        .col {
            display: flex;
            align-items: baseline;

            .logo {
                padding-right: 2rem;
                font-size: 1rem;

                span {
                    font-size: 2rem;
                }
            }

            .find-on {
                display: flex;
                align-items: center;
                justify-content: space-evenly;

                .social-links {
                    padding-left: 1rem;
                    list-style: none;
                    display: flex;
                    justify-content: space-around;
                    gap: 1rem;

                    a {
                        color: var(--lightest);
                        text-decoration: none;
                    }
                }
            }
        }
    }
}
</style>