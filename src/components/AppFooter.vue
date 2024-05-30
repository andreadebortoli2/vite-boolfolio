<script>
export default {

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
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                </div>
                <div class="col-2">
                    <h4>
                        Find on
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
    background-color: steelblue;
    padding-top: 1rem;
    box-shadow: 0 -10px 10px gray;
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

    .quick-links {}
}
</style>