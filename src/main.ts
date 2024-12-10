import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import { toastConfig } from './notifications/config';

const pinia = createPinia();

const app = createApp(App);

app.use(Toast, toastConfig);
app.use(pinia);
app.use(router);
app.mount('#app');