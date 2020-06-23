<script>
import Title from './Title.vue';
import Subtitle from './Subtitle.vue';

export default {
    data() {
        return {
            title: 'My title',
            fName: 4,
            lName: 'ga',
            products: [],
            route: 'title'
        };
    },
    computed: {
        isMiha() {
            return String(this.fName).indexOf('miha') !== -1;
        },
        filterdProd() {
            return this.products.filter(p => p >= 2);
        }
    },
    created() {
        console.log('created');
        setTimeout(() => {
            this.products = [1, 2, 4];
        }, 1000);
    },
    mounted() {
        console.log('mounted');
    },
    components: {
        'app-title': Title,
        'app-subtitle': Subtitle
    },
    methods: {
        onChangeTitle(payload) {
            console.log(payload.newTitle);
            this.title = payload.newTitle;
        },
        changeRoute(route) {
            console.log(route);
            this.route = route;
        }
    }
};
</script>

<template>
    <div id="app">
        <a href @click.prevent="changeRoute('title')">Title</a>
        <a href @click.prevent="changeRoute('subtitle')">Subtitle</a>
        <app-title v-if="route === 'title'"></app-title>
        <app-subtitle v-else-if="route === 'subtitle'"></app-subtitle>
    </div>
</template>

<style lang="scss" scoped></style>
