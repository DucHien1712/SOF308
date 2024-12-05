<template>
  <div class="sign-up-container" :class="{ active: isSignUp }">
    <!-- Form Đăng Ký -->
    <div class="sign-up-form-container sign-up-sign-up" v-show="isSignUp">
      <form @submit.prevent="signUp">
        <h1>Create Account</h1>
        <input type="text" placeholder="Username" v-model="signUpData.username" />
        <input type="email" placeholder="Email" v-model="signUpData.email" />
        <input type="password" placeholder="Password" v-model="signUpData.password" />
        <input type="password" placeholder="Confirm Password" v-model="signUpData.confirmPassword" />
        <span>or register with social platforms</span>
        <div class="sign-up-social-icons">
          <a href="#" class="icon"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="icon"><i class="fa-brands fa-facebook"></i></a>
          <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
          <a href="#" class="icon"><i class="fa-brands fa-linkedin"></i></a>
        </div>
        <button class="btn">Sign up</button>
      </form>
    </div>

    <!-- Form Đăng Nhập -->
    <div class="sign-up-form-container sign-up-sign-in" v-show="!isSignUp">
      <form @submit.prevent="signIn">
        <h1>Sign In</h1>
        <input type="text" placeholder="Username" v-model="signInData.username" />
        <input type="password" placeholder="Password" v-model="signInData.password" />
        <a href="#">Forget Password?</a>
        <span>or login with social platforms</span>
        <div class="sign-up-social-icons">
          <a href="#" class="icon"><i class="fa-brands fa-facebook"></i></a>
          <a href="#" class="icon"><i class="fa-brands fa-facebook"></i></a>
          <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
          <a href="#" class="icon"><i class="fa-brands fa-linkedin"></i></a>
        </div>
        <button class="btn">Sign in</button>
        <RouterLink to="/" class="back"><h5>Back</h5></RouterLink>
      </form>
    </div>

    <!-- Toggle Container -->
    <div class="sign-up-toggle-container">
      <div class="sign-up-toggle">
        <div class="sign-up-toggle-panel sign-up-toggle-left" v-show="isSignUp">
          <h1>Welcome Back!</h1>
          <p>Already have an account?</p>
          <button @click="toggleForm">Sign in</button>
        </div>
        <div class="sign-up-toggle-panel sign-up-toggle-right" v-show="!isSignUp">
          <h1>Welcome, Friend!</h1>
          <p>Don't have an account?</p>
          <button @click="toggleForm">Sign up</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isLoggedIn = ref(false);
const isSignUp = ref(false);
const signUpData = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
});

const signInData = ref({
  username: '',
  password: ''
});

const toggleForm = () => {
  isSignUp.value = !isSignUp.value;
};

const saveAccountToLocalStorage = (account) => {
  const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
  accounts.push(account);
  localStorage.setItem('accounts', JSON.stringify(accounts));
};

const checkAccountInLocalStorage = (username, password) => {
  const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
  return accounts.find(acc => acc.username === username && acc.password === password);
};

const signUp = () => {
  if (signUpData.value.username && signUpData.value.email && signUpData.value.password && signUpData.value.confirmPassword) {
    if (signUpData.value.password !== signUpData.value.confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Passwords do not match!",
        position: 'top',
        toast: true,
        showConfirmButton: false,
        timer: 3000,
        customClass: {
          popup: 'small-toast',
        }
      });
      return;
    }

    const existingAccounts = JSON.parse(localStorage.getItem('accounts')) || [];
    const isExistingUser = existingAccounts.some(acc => acc.username === signUpData.value.username);

    if (isExistingUser) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Username already exists! Please choose another username.",
        position: 'top',
        toast: true,
        showConfirmButton: false,
        timer: 3000,
        customClass: {
          popup: 'small-toast',
        }
      });
      return;
    }

    saveAccountToLocalStorage({
      username: signUpData.value.username,
      email: signUpData.value.email,
      password: signUpData.value.password
    });

    Swal.fire({
      icon: "success",
      title: `Welcome, ${signUpData.value.username}!`,
      text: "Your account has been created.",
      position: 'top',
      toast: true,
      showConfirmButton: false,
      timer: 3000,
      customClass: {
        popup: 'small-toast',
      }
    });

    signUpData.value.password = '';
    signUpData.value.confirmPassword = '';
    isSignUp.value = false;
  } else {
    Swal.fire({
      icon: "warning",
      title: "Oops...",
      text: "Please fill in all fields!",
      position: 'top',
      toast: true,
      showConfirmButton: false,
      timer: 3000,
      customClass: {
        popup: 'small-toast',
      }
    });
  }
};

const signIn = () => {
  if (signInData.value.username && signInData.value.password) {
    const account = checkAccountInLocalStorage(signInData.value.username, signInData.value.password);
    if (account) {
      Swal.fire({
        icon: "success",
        title: `Hello again, ${signInData.value.username}!`,
        text: "Your account has been created.",
        position: 'top',
        toast: true,
        showConfirmButton: false,
        timer: 3000,
        customClass: {
          popup: 'small-toast',
        }
      });
      localStorage.setItem('username', signInData.value.username);
      localStorage.setItem('isLoggedIn', 'true');
      isLoggedIn.value = true;
      router.push('/');
    } else {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Account does not exist. Please sign up first.",
        footer: '<a href="#">Why do I have this issue?</a>',
        position: 'top', 
        toast: true, 
        showConfirmButton: false, 
        timer: 3000, 
        customClass: {
          popup: 'small-toast',
        }
      });
      isSignUp.value = true;
    }
  } else {
    Swal.fire({
      icon: "warning",
      title: "Oops...",
      text: "Please enter your username and password!",
      position: 'top',
      toast: true,
      showConfirmButton: false,
      timer: 3000,
      customClass: {
        popup: 'small-toast',
      }
    });
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

body {
  background-color: #c9d6ff;
  background: linear-gradient(to right, #e2e2e2, #c9d6ff);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
}

.sign-up-container {
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
  margin: 0 auto;
  margin-top: 150px;
}

.sign-up-container p {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.3px;
  margin: 20px 0;
}

.sign-up-container h1 {
  font-weight: 400;
}

.sign-up-container span {
  font-size: 13px;
  margin-top: 5px;
  margin-bottom: 10px;
}

.sign-up-container a {
  color: #333;
  text-decoration: none;
  margin: 15px 0 10px;
}

.sign-up-container button {
  background-color: orange;
  color: #fff;
  font-size: 12px;
  padding: 10px 45px;
  border: 1px solid transparent;
  border-radius: 8px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-top: 10px;
  cursor: pointer;
}

.sign-up-container .btn:hover {
  background-color: #00a1ff;
}

.sign-up-container button.hidden {
  background-color: transparent;
  border-color: #fff;
}

.sign-up-container form {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  height: 100%;
}

.sign-up-container input {
  background-color: #ccc;
  border: none;
  margin: 8px 0;
  padding: 10px 15px;
  font-size: 13px;
  border-radius: 8px;
  width: 100%;
  outline: none;
}

.sign-up-form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-up-sign-in {
  left: 0;
  width: 50%;
  z-index: 2;
}

.sign-up-container.active .sign-up-sign-in {
  transform: translateX(100%);
}

.sign-up-sign-up {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.sign-up-container.active .sign-up-sign-up {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: move 0.6s;
}

@keyframes move {

  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}

.sign-up-social-icons {
  margin-top: 20px 0;
}

.sign-up-social-icons a {
  border: 1px solid #ccc;
  border-radius: 20%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 3px;
  width: 40px;
  height: 40px;
}

.sign-up-toggle-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: all 0.6s ease-in-out;
  border-radius: 150px 0 0 100px;
  z-index: 1000;
}

.sign-up-container.active .sign-up-toggle-container {
  transform: translateX(-100%);
  border-radius: 0 150px 100px 0;
}

.sign-up-toggle {
  background-color: linear-gradient(to left, #00a1ff, #00ff8f);
  height: 100%;
  background: linear-gradient(to right, #c33764, #1d2671);
  color: #fff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: all 0.6s ease-in-out;
}

.sign-up-container.active .sign-up-toggle {
  transform: translateX(50%);
}

.sign-up-toggle-panel {
  position: absolute;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 30px;
  text-align: center;
  top: 0;
  transform: translateX(0);
  transition: all 0.6s ease-in-out;
}

.sign-up-toggle-left {
  transform: translateX(-200%);
}

.sign-up-container.active .sign-up-toggle-left {
  transform: translateX(0);
}

.sign-up-toggle-right {
  right: 0;
  transform: translateX(0);
}

.sign-up-container.active .sign-up-toggle-right {
  transform: translateX(200%);
}

.sign-up-toggle button {
  background-color: transparent;
  color: #fff;
  border: 1px solid white;
  font-size: 12px;
  padding: 10px 45px;
  border-radius: 10px;
  font-weight: 600;
  margin-top: 20px;
  text-transform: uppercase;
  cursor: pointer;
}

.sign-up-toggle button:hover {
  background-color: orange;
  color: white;
}

.sign-up-toggle button#login {
  /* Thêm prefix */
  background-color: #00a1ff;
}

.sign-up-toggle button#register {
  /* Thêm prefix */
  background-color: #f6a12f;
}

.sign-up-toggle button#login:hover {
  /* Thêm prefix */
  background-color: #00ff8f;
}

.sign-up-toggle button#register:hover {
  /* Thêm prefix */
  background-color: #ff7200;
}

.sign-up-social-icons a:hover {
  /* Thêm prefix */
  color: #fff;
}

.sign-up-social-icons a:nth-child(1) {
  /* Thêm prefix */
  border-color: #db4437;
}

.sign-up-social-icons a:nth-child(1):hover {
  /* Thêm prefix */
  background-color: #db4437;
}

.sign-up-social-icons a:nth-child(2) {
  /* Thêm prefix */
  border-color: #4267B2;
}

.sign-up-social-icons a:nth-child(2):hover {
  /* Thêm prefix */
  background-color: #4267B2;
}

.sign-up-social-icons a:nth-child(3) {
  /* Thêm prefix */
  border-color: #333;
}

.sign-up-social-icons a:nth-child(3):hover {
  /* Thêm prefix */
  background-color: #333;
}

.sign-up-social-icons a:nth-child(4) {
  /* Thêm prefix */
  border-color: #0077b5;
}

.sign-up-social-icons a:nth-child(4):hover {
  /* Thêm prefix */
  background-color: #0077b5;
}

/* CSS cho thông báo nhỏ */
.small-toast {
  font-size: 14px !important;
  /* Chỉnh kích thước font */
  padding: 10px 20px !important;
  /* Chỉnh padding cho thông báo */
  border-radius: 5px;
  /* Đặt bo góc */
}

/* Điều chỉnh vị trí thông báo */
.swal2-container {
  top: 10px !important;
  /* Đặt vị trí thông báo ở phía trên */
  left: 50% !important;
  /* Canh giữa */
  transform: translateX(-50%) !important;
  /* Canh giữa theo chiều ngang */
}

/* Điều chỉnh màu sắc nền thông báo (tuỳ chỉnh) */
.swal2-popup {
  background-color: #333 !important;
  color: #fff !important;
}

.back h5 {
  font-size: 15px;
  color: #333; /* Màu chữ */
  text-decoration: none; /* Bỏ gạch chân */
  font-weight: normal; /* Kiểu chữ bình thường */
  transition: color 0.3s ease; /* Hiệu ứng chuyển màu mượt mà */
}

.back h5:hover {
    color: #0056b3; /* Màu chữ khi hover */
    text-decoration: underline; /* Gạch chân khi hover */
}
</style>