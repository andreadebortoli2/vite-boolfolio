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
                                    <i class="fa-brands fa-linkedin" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fa-brands fa-youtube" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fa-brands fa-github" aria-hidden="true"></i>
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
    padding: 0.5rem 0 0.3rem;
    box-shadow: 0 0 20px 1px var(--primary-light);

    .row {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        .col {
            display: flex;
            align-items: baseline;
            padding: 0 0.5rem;
            border: 4px double var(--secondary-dark);
            border-radius: 0.7rem;

            .logo {
                padding-right: 2rem;
                font-size: 1rem;

                span {
                    font-size: 2rem;
                }
            }

            .find-on {
                display: flex;
                align-items: end;
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
                        text-align: center;
                        font-size: 1.3rem;

                        i {
                            padding: 0.3rem 0.3rem 0.1rem;
                            border-radius: 0.5rem;

                        }

                        :hover {
                            transition: 0.5s;
                            color: var(--medium-dark);
                            background-color: var(--lightest);

                        }
                    }
                }
            }
        }
    }
}
</style>