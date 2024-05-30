<script>
export default {

}
</script>

<template>
    <header>
        <div class="container">
            <nav class="menu">
                <div class="left-menu">
                    LOGO
                </div>
                <div class="right-menu">
                    <ul>
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
        font-size: 2.5rem;
        font-weight: bolder;
        background-color: skyblue;
        padding: 1rem;
        border-radius: 2rem 0 2rem 0;
        color: white;
    }

    .right-menu {
        ul {
            display: flex;
            justify-content: space-between;
            gap: 1rem;
            list-style-type: none;

            a {
                color: white;
                font-size: 1.5rem;
                font-weight: bold;
                text-decoration: none;
            }
        }
    }
}
</style>