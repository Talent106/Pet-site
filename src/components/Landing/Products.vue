<template>
    <div class="product">
        <h1>Featured Products</h1>
        <div class="gallery">
            <div v-for="(item, index) in items" :key="index" class="card m-3" style="max-width: 20rem;">
                <img :src="item.img" class="card-img-top" alt="Image">
                <div class="card-body">
                    <p v-if="item.brand" class="brand-name">{{ item.brand }}</p>
                    <h5 class="card-title bold">{{ item.title }}</h5>
                    <div class="d-flex">
                        <div class="star text-danger">
                            <i class="bi bi-star-fill me-1"></i>
                            <i class="bi bi-star-fill me-1"></i>
                            <i class="bi bi-star-fill me-1"></i>
                            <i class="bi bi-star-fill me-1"></i>
                            <i class="bi bi-star-fill me-1"></i>
                        </div>
                        <span class="light-black-4">{{ item.review }}</span>
                    </div>
                    <h5 class="bold my-3">
                        ${{ item.price }}
                    </h5>
                    <a href="#" class="btn btn-outline-danger bold capslock w-100">
                        <i v-if="item.icon" :class="item.icon"></i>
                        {{ item.btn }}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import img1 from '@/assets/img/Black__72545.webp';
    import img2 from '@/assets/img/LP_Food_topper_BACK_16oz__34399.jpg';
    import img3 from '@/assets/img/8004__83009.jpg';
    import img4 from '@/assets/img/Photo_3-7-20_7_23_10_pm__02389.jpg';
    import '@/assets/scss/components/Landing/Products.scss';

    export default {
        name: "Products",
        data() {
            return {
                items: [
                    {
                        img: img1,
                        brand: "corsa",
                        title: "Corsa Bowls (5 Colors, 3 Sizes)",
                        review: "review 1",
                        price: "6.99",
                        btn: "Show Option"
                    },
                    {
                        img: img2,
                        title: "16 oz. Meal Topper Turkey Cranberry",
                        review: "review 4",
                        price: "14.99",
                        icon: "bi bi-plus-lg me-1",
                        btn: "Add To Cart"
                    },
                    {
                        img: img3,
                        brand: "Natures Choice",
                        title: "Nature's Choice Sweet Potato & Duck Meat Sticks",
                        review: "review 165",
                        price: "1.49",
                        icon: "bi bi-plus-lg me-1",
                        btn: "Add To Cart"
                    },
                    {
                        img: img4,
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