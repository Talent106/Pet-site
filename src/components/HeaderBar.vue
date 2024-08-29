<template>
    <p class="f-12 light-black-4">{{ path }}</p>
    <h2 class="bold capslock light-black-2">{{ title }}</h2>
</template>

<script>
    export default {
        name: "HeaderBar",
        props: {
            path: String,
            title: String
        }
    }
</script>