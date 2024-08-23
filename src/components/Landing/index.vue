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

        <Banner :data="Banner_Items"></Banner>

        <Products></Products>

        <div class="newsletter">
            <h3 class="bold capslock me-4">Newsletter Signup</h3>
            <div class="input-group mx-4">
                <input type="text" class="form-control" placeholder="Email Address*">
                <div class="input-group-append">
                    <button class="btn btn-danger capslock bold" type="button">
                        Subscribe
                    </button>
                </div>
            </div>
            <img src="../../assets/img/dog.webp" />
        </div>
    </div>
</template>

<script>
    import Products from './Products.vue';
    import Banner from '@/components/Landing/Banner.vue';
    import '@/assets/scss/components/Landing/Landing.scss';
    import img1 from '@/assets/img/1.jpg';
    import img2 from '@/assets/img/2.jpg';
    import img3 from '@/assets/img/3.jpg';
    import img4 from '@/assets/img/4.jpg';

    export default {
        name: 'Landing',
        components: {
            Products,
            Banner
        },
        data() {
            return {
                Banner_Items: [
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