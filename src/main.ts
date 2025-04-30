import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import { toastConfig } from './notifications/config';
import FloatingVue from 'floating-vue';
import 'floating-vue/dist/style.css';

const pinia = createPinia();

const app = createApp(App);

app.use(Toast, toastConfig);
app.use(pinia);
app.use(router);
app.use(FloatingVue);
app.mount('#app');