<template>
    <div class="login">
        <HeaderBar path="Home / Login" title="Sign In"></HeaderBar>
        <div class="content my-3">
            <div class="login-form me-4">
                <div class="row my-2">
                    <div class="col-sm-12">
                        <label for="input-default">Email Address:</label>
                    </div>
                    <div class="col-sm-12">
                        <input @input="$emit(this.email, $event.target.value)" type="email" class="form-control" id="input-default" />
                    </div>
                </div>

                <div class="row my-2">
                    <div class="col-sm-12">
                        <label for="input-default">Password:</label>
                    </div>
                    <div class="col-sm-12">
                        <input @input="$emit(this.password, $event.target.value)" type="password" class="form-control" id="input-default" />
                    </div>
                </div>

                <div class="btn-form mt-3">
                    <button class="btn btn-danger capslock bold" @click="signIn" type="button">
                        Sign In
                    </button>
                    <a>Forgot your password?</a>
                </div>
            </div>
            <div class="customer ms-4">
                <h5 class="bold capslock">New Customer?</h5>
                <div class="flex-d f-13 mt-3 light-black-4">
                    <sapn>Create an account with us and you'll be able to:</sapn>
                    <li>Check out faster</li>
                    <li>Save multiple shipping addresses</li>
                    <li>Access your order history</li>
                    <li>Track new orders</li>
                    <li>Save items to your Wish List</li>
                </div>
                <button class="btn btn-danger mt-3 capslock bold" type="button">
                    Create account
                </button>
            </div>
        </div>
    </div>

    <NewsLetter></NewsLetter>
</template>

<script>
    import NewsLetter from '@/components/Landing/NewsLetter.vue';
    import HeaderBar from '@/components/HeaderBar.vue';
    import '@/assets/scss/views/Auth/Login.scss';

    export default {
        name: "Login",
        components: {
            NewsLetter,
            HeaderBar
        },
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            signIn() {
                console.log("222222", this.email, this.password);
            }
        }
    }
</script>