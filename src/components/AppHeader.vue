<script>
export default {

}
</script>

<template>
    <header>
        <div class="container">
            <nav class="menu">
                <div class="left-menu">
                    <div class="logo">
                        LOGO
                    </div>
                </div>
                <div class="right-menu">
                    <ul>
                        <li>
                            <router-link :to="{ name: 'home' }">Home</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'projects' }">Projects</router-link>
                        </li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>

<style scoped>
header {
    background-color: steelblue;
    box-shadow: 0 10px 10px gray;
}

.menu {
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left-menu {
        .logo {
            font-size: 2.5rem;
        }
    }

    .right-menu {
        ul {
            display: flex;
            justify-content: space-between;
            gap: 1rem;
            list-style-type: none;

            a {
                color: whitesmoke;
                font-size: 1.5rem;
                font-weight: bold;
                text-decoration: none;
            }
        }
    }
}
</style>