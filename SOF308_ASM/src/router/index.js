import { createRouter, createWebHistory } from 'vue-router';
import SignIn_SignUp from '../components/SignIn_SignUp.vue';
import Home from '../components/Home.vue';  

const routes = [
  {
    path: '/',  
    name: 'Home',
    component: Home,  
  },
  {
    path: '/login',  
    name: 'Login',
    component: SignIn_SignUp,  
  },
  {
    path: '/edit-profile',  
    name: 'EditProfile',
    component: () => import('../components/EditUserPage.vue'), 
  },
  {
    path: '/details',  
    name: 'Details',
    component: () => import('../components/Details.vue'), 
  },
  {
    path: '/post-articles',  
    name: 'PostPage',
    component: () => import('../components/PostPage.vue'), 
  },
  {
    path: '/user',  
    name: 'UserPage',
    component: () => import('../components/UserPage.vue'), 
  },
];

const router = createRouter({
  history: createWebHistory(),  
  routes,  
});

export default router;
