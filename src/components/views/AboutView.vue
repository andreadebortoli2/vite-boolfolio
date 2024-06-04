<script>
export default {
    name: 'AboutView',
}
</script>

<template>
    <section class="container">
        <h1>About me</h1>
        <div class="row">
            <div class="col details">
                <div class="wrapper">
                    <div class="col profile-image">
                        <div class="image-placeholder"></div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia officiis ullam modi omnis laborum
                        dicta enim facilis alias quae hic dolore quidem, inventore asperiores ipsa nam natus atque unde
                        blanditiis. Blanditiis necessitatibus eius earum totam minima explicabo culpa hic accusamus
                        mollitia
                        accusantium sit unde corrupti at repellat, tempora dolor doloribus quam! Eveniet quae dolor
                        officiis
                        quos neque, ea assumenda facere reiciendis asperiores eius cum vero laborum iusto illum mollitia
                        consequatur amet dignissimos nemo in non. Dicta similique, nisi mollitia perspiciatis adipisci
                        laborum porro! Voluptatum odit in reprehenderit quidem quae? Placeat alias veniam deserunt vel
                        consequuntur vitae animi quisquam, qui repellendus accusamus officia tenetur rerum magnam
                        aperiam
                        ipsa ipsam dolore error aliquam? Quibusdam explicabo corrupti labore quisquam odit consequuntur
                        deleniti sit vel unde harum illo, voluptatem saepe corporis, quos adipisci ex voluptatibus.
                        Nobis
                        vero odit aperiam delectus omnis quae soluta temporibus consequatur fuga magnam tempore alias
                        quia,
                        architecto labore dignissimos fugiat.
                    </p>
                    <router-link :to="{ name: 'contacts' }">contacts</router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
h1 {
    padding: 0 8rem 3rem;
    margin-top: -2rem;
    font-family: "Zilla Slab", serif;
    font-size: 5rem;
    color: var(--secondary-dark);
}

.row {

    .details {
        background-color: var(--lightest-transp);
        height: fit-content;
        padding: 2rem;
        border-radius: 2rem;
        color: var(--lightest);
        font-size: 1.5rem;
        font-weight: 300;
        line-height: 2rem;

        .wrapper {
            border: 3px solid var(--primary-dark);
            border-radius: 2rem;
            padding: 2rem 2rem 0;

            .profile-image {
                width: 300px;
                shape-outside: circle();
                padding: 0.5rem;
                border-radius: 50%;
                aspect-ratio: 1;
                background: linear-gradient(to bottom, var(--secondary-dark), var(--secondary-light));
                float: inline-end;

                .image-placeholder {
                    border-radius: 50%;
                    width: 100%;
                    aspect-ratio: 1;
                    background-color: var(--primary-dark);
                }

            }

            p {
                width: calc(100% / 12 * 9);
                display: inline;
                font-family: "Source Code Pro", monospace;
                font-weight: 500;
            }

            a {
                margin: 2rem -2rem 0;
                padding: 2rem;
                border-radius: 0 0 1.8rem 1.8rem;
                display: block;
                text-align: center;
                font-family: "Pixelify Sans", sans-serif;
                font-size: 3rem;
                background-color: var(--primary-dark);
                color: var(--lightest-transp);
                border-top: 3px solid var(--primary-dark);
                transition: 0.5s;

                &:hover {
                    background-color: var(--secondary-medium);
                    border-top: 3px solid var(--primary-dark);
                    color: var(--primary-dark);
                }
            }
        }
    }
}
</style>
