<template>
    <v-card>
        <h2>{{ title }}</h2>
        <p>{{ category }}</p>
    </v-card>
</template>

<script>
export default {
    name: 'TestPreview',
    props: {
        id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        }
    }
}
</script>

<style>

</style>