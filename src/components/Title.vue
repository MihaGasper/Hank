<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Title 1'
        }
    },
    methods: {
        onClick() {
            this.$emit('changeTitle', {
                newTitle: 'gobe'
            });
        }
    }
};
</script>

<template>
    <div>
        <h1>
            2
        </h1>
    </div>
</template>
