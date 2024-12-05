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
    beforeEnter: (to, from, next) => {
      const accounts = JSON.parse(localStorage.getItem('accounts'));
      if (accounts) {
        next(); 
      } else {
        Swal.fire({
          icon: "warning",
          title: "Oops...",
          text: "Please log in to continue.",
          position: 'top',
          toast: true,
          showConfirmButton: false,
          timer: 3000,
          customClass: {
            popup: 'small-toast',
          }
        });
      }
    }
  },
  {
    path: '/post/:id', 
    name: 'Details',
    component: () => import('../components/Details.vue'), 
  },
  {
    path: '/post-articles',  
    name: 'PostPage',
    component: () => import('../components/PostPage.vue'), 
    beforeEnter: (to, from, next) => {
      const accounts = JSON.parse(localStorage.getItem('accounts'));
      if (accounts) {
        next();
      } else {
        Swal.fire({
          icon: "warning",
          title: "Oops...",
          text: "Please log in to continue.",
          position: 'top',
          toast: true,
          showConfirmButton: false,
          timer: 3000,
          customClass: {
            popup: 'small-toast',
          }
        });
      }
    }
  },
  {
    path: '/user',  
    name: 'UserPage',
    component: () => import('../components/UserPage.vue'), 
    beforeEnter: (to, from, next) => {
      const accounts = JSON.parse(localStorage.getItem('accounts'));
      if (accounts) {
        next(); 
      } else {
        Swal.fire({
          icon: "warning",
          title: "Oops...",
          text: "Please log in to continue.",
          position: 'top',
          toast: true,
          showConfirmButton: false,
          timer: 3000,
          customClass: {
            popup: 'small-toast',
          }
        });
      }
    }
  },
];

const router = createRouter({
  history: createWebHistory(),  
  routes,  
});

export default router;
