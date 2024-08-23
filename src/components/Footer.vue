<template>
    <div class="footer">
        <div class="info">
            <img class="logo me-4" src="../assets/img/lp_logo_1_1706041538__38057.webp" />
            
            <div class="footer-info mx-4">
                <div class="d-flex text-white mb-3">
                    <i class="bi bi-geo-alt-fill text-danger me-2"></i>
                    110 Melrich Rd, Suite 4 Cranbury , NJ 08512 United States Of America
                </div>
                <div class="d-flex text-white mb-3">
                    <i class="bi bi-geo-alt-fill text-danger me-2"></i>
                    (609) 655-3700
                </div>
                <div class="d-flex text-white">
                    <img class="flag me-2" src="../assets/img/australian-flag-icon.jpg" />
                    For Our Australian Customers
                </div>
            </div>

            <div class="categories bold text-white">
                <h6 class="capslock">categories</h6>
                <a href="">New!</a>
                <a href="">Dog</a>
                <a href="">Cat</a>
            </div>
        </div>
    </div>
</template>

<script>
    import '@/assets/scss/components/Footer.scss';

    export default {
        name: "Footer"
    }
</script>