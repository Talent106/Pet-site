<template>
    <div class="banners">
        <div v-for="(item, index) in data" :key="index" class="banner-x">
            <img class="gallery" :src="item.img" />
            <div class="round">
                <i :class="item.icon"></i>
            </div>
            <p>{{ item.title }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Banner",
        props: {
            data: Array
        }
    }
</script>