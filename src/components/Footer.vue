<template>
    <div class="footer">
        <div class="info">
            <img class="logo me-4 mb-3" src="../assets/img/lp_logo_1_1706041538__38057.webp" />

            <div class="footer-info mx-5">
                <div class="d-flex text-white mb-3 f-13">
                    <i class="bi bi-geo-alt-fill text-danger me-2"></i>
                    110 Melrich Rd, Suite 4 Cranbury , NJ 08512 United States Of America
                </div>
                <div class="d-flex text-white mb-3 f-13">
                    <i class="bi bi-geo-alt-fill text-danger me-2"></i>
                    (609) 655-3700
                </div>
                <div class="d-flex text-white f-13 bold">
                    <img class="flag me-2" src="../assets/img/australian-flag-icon.jpg" />
                    For Our Australian Customers
                </div>
            </div>

            <div class="information bold mx-5">
                <h6 class="capslock text-white">categories</h6>
                <a href="">New!</a>
                <a href="">Dog</a>
                <a href="">Cat</a>
            </div>

            <div class="information bold mx-5">
                <h6 class="capslock text-white">information</h6>
                <a href="">About</a>
                <a href="">Blog</a>
                <a href="">Contact Us</a>
                <a href="">Stor Locator</a>
                <a href="">Team & Conditions</a>
                <a href="">Contact Us</a>
            </div>

            <div class="information bold mx-5">
                <h6 class="capslock text-white">Brand</h6>
                <a href="">Dolce</a>
                <a href="">Bella Bowls</a>
                <a href="">Nature Choice</a>
                <a href="">Pure Buffalo</a>
                <a href="">Gorumet</a>
                <a href="">Active Pets</a>
            </div>
        </div>

        <div class="payment mt-4 text-white">
            <div class="payment-icons f-25">
                <i class="bi bi-paypal me-4"></i>
                <i class="bi bi-credit-card-fill me-4"></i>
                <i class="bi bi-google-play me-4"></i>
                <i class="bi bi-apple"></i>
            </div>
            <a>© 2024 Shop LP</a>
        </div>
    </div>
</template>

<script>
    import '@/assets/scss/components/Footer.scss';

    export default {
        name: "Footer",
    }
</script>