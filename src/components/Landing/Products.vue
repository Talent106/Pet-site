<template>
    <div class="product">
        <h1>Featured Products</h1>
        <div class="gallery">
            <div v-for="(item, index) in data" :key="index" class="card m-3" style="max-width: 20rem;">
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
    import '@/assets/scss/components/Landing/Products.scss';

    export default {
        name: "Products",
        props: {
            data: Array
        }
    }
</script>