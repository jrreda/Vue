import { createApp } from 'vue';
import App from './app/app';
import { router } from './app/app';

createApp(App).use(router).mount('#app');
