<script>
import Banner from '../Main/Banner.vue';

export default {
    name: 'AboutView',
    components: {
        Banner,
    },
    data() {
        return {
            banner: {
                title: 'About me',
                content: 'lorem     Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fugiat rerum aspernatur natus cum pariatur sapiente recusandae. Iusto amet nesciunt, officiis dignissimos quam corrupti ullam, culpa nulla beatae alias dolores.',
                call_to_action: 'Contact me',
                route_name: 'contacts'
            }
        }
    }
}
</script>

<template>
    <Banner :banner="banner" />
</template>

<style scoped></style>
