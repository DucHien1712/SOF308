import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import BlogList from './components/BlogList.vue';
import BlogPost from './components/BlogPost.vue';
import Login from './components/Login.vue';
import UserInfo from './components/UserInfo.vue';
import Dashboard from './components/Dashboard.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/blogs', component: BlogList },
  { path: '/blog/:id', component: BlogPost },
  { path: '/login', component: Login },
  { path: '/infor', component: UserInfo },
  { path: '/dashboard', component: Dashboard },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

const app = createApp(App);
app.use(router); // Sử dụng Vue Router
app.mount('#app');
