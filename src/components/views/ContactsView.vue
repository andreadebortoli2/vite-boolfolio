<script>
import axios from 'axios';
import { store } from '../../store';

export default {

    name: 'ContactsView',
    data() {
        return {
            store,
            name: '',
            email: '',
            message: '',
            loading: false,
            errors: [],
        }
    },
    methods: {
        sendMessage() {
            const data = {
                name: this.name,
                email: this.email,
                message: this.message
            }
            // console.log(data);

            this.loading = true

            axios.post(store.base_url + store.form_api_url, data).then(response => {
                // console.log(response);
                if (response.data.success) {
                    // console.log(response);
                    this.name = '';
                    this.email = '';
                    this.message = '';
                } else {
                    // console.log(response.data.errors);
                    this.errors = response.data.errors;
                }
                this.loading = false;
            }).catch(error => {
                console.error(error);
            })

        }
    },
    mounted() {
    }
}
</script>

<template>
    <section class="container">
        <h1>Contact me</h1>
        <div class="row">
            <div class="col contact">
                <p>directly on
                    <a href="#">
                        <i class="fa-brands fa-linkedin" aria-hidden="true"></i>
                    </a>
                </p>
                <h2>or <br> send me a message</h2>
            </div>
            <div class="col form">

                <form @submit.prevent="sendMessage()">

                    <div class="name">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" name="name" id="name" aria-describedby="helpId"
                            placeholder="John Doe" v-model="name" />
                    </div>
                    <div class="email">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelpId"
                            placeholder="abc@mail.com" v-model="email" />
                    </div>

                    <div class="message">
                        <label for="message" class="form-label">Message</label>
                        <textarea class="form-control" name="message" id="message" rows="8"
                            v-model="message">Type your message</textarea>
                    </div>

                    <button type="submit" :disabled="loading">
                        {{ loading ? 'Sending...' : 'Send' }}
                    </button>
                </form>
            </div>
        </div>
    </section>
</template>

<style scoped>
.container {

    h1 {
        padding: 0 8rem 3rem;
        margin-top: -2rem;
        font-family: "Zilla Slab", serif;
        font-size: 5rem;
        color: var(--secondary-dark);
    }

    .row {
        display: flex;

        .contact {
            width: calc(100% / 12 * 5);
            padding-left: 6rem;

            p {
                padding: 3rem 6rem;
                font-size: 2rem;
                color: var(--primary-dark);

                a {
                    color: var(--lightest);
                    font-size: 3rem;
                    margin-left: 0.5rem;
                    padding: 0.1rem 0.3rem 0;
                    line-height: 1.5rem;
                    transition: 0.4s;

                    &:hover {
                        color: var(--primary-dark);
                        background-color: var(--lightest);
                        border-radius: 0.3rem;
                    }
                }
            }

            h2 {
                font-family: "Zilla Slab", serif;
                font-size: 3rem;
                color: var(--secondary-medium);
            }
        }

        .form {
            width: calc(100% / 12 * 7);

            form {
                border-image: linear-gradient(var(--primary-dark), var(--primary-light)) 2 / 5px;
                padding: 2rem 3rem;


                input,
                textarea {
                    width: 100%;
                    margin: 1rem 0 2rem;
                    padding: 0.5rem;
                    background-color: var(--lightest);
                    border: 2px solid transparent;
                }

                label {
                    margin-left: 2rem;
                    font-family: "Zilla Slab", serif;
                    font-size: 1.5rem;
                    color: var(--secondary-light);
                }


                button {
                    width: 100%;
                    padding: 0.5rem 0;
                    font-size: 2rem;
                    color: var(--darkest);
                    font-family: "Pixelify Sans", sans-serif;
                    transition: 0.5s;

                    &:hover {
                        cursor: pointer;
                        background-color: var(--medium);
                        color: var(--lightest);
                    }
                }
            }
        }
    }
}
</style>