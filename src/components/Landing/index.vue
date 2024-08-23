<template>
    <div class="landing">
        <div class="carousel">
            <div class="content-wrapper">
                <div class="content">
                    <div class="title">USA Made Treats for Dogs</div>
                    <div class="discription mt-4">
                        Real Meat, Simple Ingredients. Made right here in the USA.
                        Explore our wide variety of treats all lovingly prepared with extraordinary attention to detail.
                    </div>
                    <button class="btn btn-danger mt-4" type="button">
                        SHOP NOW
                    </button>
                </div>
            </div>
        </div>

        <div class="banners">
            <div v-for="(item, index) in items" :key="index" class="banner-x">
                <img class="gallery" :src="item.img" />
                <div class="round">
                    <i :class="item.icon"></i>
                </div>
                <p>{{ item.title }}</p>
            </div>
        </div>

        <Products></Products>
    </div>
</template>

<script>
    import Products from './Products.vue';
    import '@/assets/scss/components/Landing/Landing.scss';
    import img1 from '@/assets/img/1.jpg';
    import img2 from '@/assets/img/2.jpg';
    import img3 from '@/assets/img/3.jpg';
    import img4 from '@/assets/img/4.jpg';

    export default {
        name: 'Landing',
        components: {
            Products
        },
        data() {
            return {
                items: [
                    {
                        img: img1,
                        icon: "bi bi-house-fill",
                        title: "Treats"
                    },
                    {
                        img: img2,
                        icon: "bi bi-palette-fill",
                        title: "Bones & Chews"
                    },
                    {
                        img: img3,
                        icon: "bi bi-puzzle-fill",
                        title: "Bowls & Diners"
                    },
                    {
                        img: img4,
                        icon: "bi bi-inboxes-fill",
                        title: "Accessories"
                    },
                ]
            }
        }
    }
</script>