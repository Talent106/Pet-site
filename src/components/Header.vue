<template>
    <div class="header">
        <a href="/">
            <img class="logo" src="../assets/img/lp_logo_1_1706041538__38057.webp" />
        </a>

        <div class="menu">
            <div class="top-bar">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="What are you looking for?" />
                    <div class="input-group-append">
                        <button class="btn btn-outline-success" type="button">
                            <i class="bi bi-search"></i>
                        </button>
                    </div>
                </div>
                <div class="d-flex ms-4">
                    <i class="bi bi-geo-alt-fill me-2"></i>
                    <a>Store Locator</a>
                </div>
                <div class="d-flex m-3">
                    <i class="bi bi-question-circle me-2"></i>
                    <a href="/contact">Help</a>
                </div>
                <div class="d-flex m-3">
                    <i class="bi bi-person-circle me-2"></i>
                    <a href="/login">Account</a>
                </div>
            </div>
            <div class="bottom-bar">
                <div class="menu-btn">
                    <a>NEWS!</a>
                    <a>Dog</a>
                    <a>Cat</a>
                    <a>About</a>
                    <a>Blog</a>
                    <a href="/contact">Contact Us</a>
                </div>
                <button class="btn btn-outline-danger rounded-pill">
                    <i class="bi bi-cart3 me-2"></i>CART
                    <b-badge pill variant="danger">0</b-badge>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import '@/assets/scss/components/Header.scss';

    export default {
        name: 'Header'
    }
</script>