// Import các file cần thiết
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap CSS
import { createApp } from 'vue';  // Tạo ứng dụng Vue
import App from './App.vue';  // Component chính của ứng dụng
import router from './router';  // Import router từ file router.js

// Tạo một ứng dụng Vue mới
const app = createApp(App);

// Sử dụng router trong ứng dụng
app.use(router);

// Mount ứng dụng vào phần tử có id là 'app'
app.mount('#app');
