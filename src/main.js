import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import * as BootstrapVueNext from 'bootstrap-vue-next';
import { BButton } from 'bootstrap-vue-next';
import { BBadge } from 'bootstrap-vue-next';
import '@/assets/scss/App.scss';
import router from './router';

const app = createApp(App);

// Install BootstrapVue 3
app.use(BootstrapVueNext);
app.component('BIcon', BootstrapVueNext.BIcon);
app.component('b-button', BButton);
app.component('b-badge', BBadge);

app.use(router);
app.mount('#app');