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

        <Products :data="Products"></Products>

        <NewsLetter></NewsLetter>
    </div>
</template>

<script>
    import Products from './Products.vue';
    import Banner from '@/components/Landing/Banner.vue';
    import NewsLetter from './NewsLetter.vue';
    import '@/assets/scss/components/Landing/Landing.scss';
    import img1 from '@/assets/img/1.jpg';
    import img2 from '@/assets/img/2.jpg';
    import img3 from '@/assets/img/3.jpg';
    import img4 from '@/assets/img/4.jpg';
    import img1_1 from '@/assets/img/Black__72545.webp';
    import img2_1 from '@/assets/img/LP_Food_topper_BACK_16oz__34399.jpg';
    import img3_1 from '@/assets/img/8004__83009.jpg';
    import img4_1 from '@/assets/img/Photo_3-7-20_7_23_10_pm__02389.jpg';

    export default {
        name: 'Landing',
        components: {
            Products,
            Banner,
            NewsLetter
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
                ],

                Products: [
                    {
                        img: img1_1,
                        brand: "corsa",
                        title: "Corsa Bowls (5 Colors, 3 Sizes)",
                        review: "review 1",
                        price: "6.99",
                        btn: "Show Option"
                    },
                    {
                        img: img2_1,
                        title: "16 oz. Meal Topper Turkey Cranberry",
                        review: "review 4",
                        price: "14.99",
                        icon: "bi bi-plus-lg me-1",
                        btn: "Add To Cart"
                    },
                    {
                        img: img3_1,
                        brand: "Natures Choice",
                        title: "Nature's Choice Sweet Potato & Duck Meat Sticks",
                        review: "review 165",
                        price: "1.49",
                        icon: "bi bi-plus-lg me-1",
                        btn: "Add To Cart"
                    },
                    {
                        img: img4_1,
                        brand: "Bella Pet Mats",
                        title: "Pet Food & Water Mats (9 Styles)",
                        review: "review 5",
                        price: "7.99",
                        btn: "Show Option"
                    }
                ]
            }
        }
    }
</script>