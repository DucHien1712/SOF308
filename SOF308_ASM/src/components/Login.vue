<template>
    <div class="container m-5">
      <div class="row">
        <div class="col-sm-6">
          <!-- Left side (Logo and welcome message) -->
          <div class="login-left d-flex flex-column justify-content-center text-center p-4 rounded border">
            <h2>Welcome!</h2>
            <img src="../assets/logobg.png" alt="Logo" class="img-fluid mb-4">
            <p>Not a member yet? <a href="#" class="dk">Register now</a></p>
          </div>
        </div>
  
        <div class="col-sm-6">
          <!-- Right side (Login form) -->
          <div class="login-right p-4 rounded border">
            <h3 class="form-title mb-4">Login</h3>
            <form @submit.prevent="handleLogin">
              <!-- Username Input -->
              <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" v-model="username" class="form-control" id="username" placeholder="Enter your username" required />
              </div>
  
              <!-- Email Input -->
              <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" v-model="email" class="form-control" id="email" placeholder="Enter your email" required />
              </div>
  
              <!-- Password Input -->
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" v-model="password" class="form-control" id="password" placeholder="Enter your password" required />
              </div>
  
              <!-- Remember me checkbox -->
              <div class="mb-3 form-check">
                <input type="checkbox" v-model="rememberMe" class="form-check-input" id="rememberMe" />
                <label class="form-check-label" for="rememberMe">Remember me</label>
              </div>
  
              <!-- Login Button -->
              <button type="submit" class="btn btn-primary w-100 mb-3" style="background-color: #222222; border-radius: 20px;">Login in now</button>
  
              <!-- Forgot Password and other login methods -->
              <div class="d-flex justify-content-end">
                <a href="#" class="text-muted" style="color: #222222; font-weight: bold; font-size: 14px;">Forgot your password?</a>
              </div>
  
              <div class="d-flex justify-content-start">
                <p>Or sign in with</p>
              </div>
              <!-- Social Media Login Buttons -->
              <div class="social-buttons d-flex justify-content-between mt-4">
                <button type="button" class="btn btn-outline-primary social-btn">
                  <i class="fab fa-facebook-f"></i> Facebook
                </button>
                <button type="button" class="btn btn-outline-danger social-btn">
                  <i class="fab fa-google"></i> Google
                </button>
                <button type="button" class="btn btn-outline-info social-btn">
                  <i class="fab fa-twitter"></i> Twitter
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: '',
        rememberMe: false
      };
    },
    methods: {
      handleLogin() {
        console.log('Username:', this.username);
        console.log('Email:', this.email);
        console.log('Password:', this.password);
        console.log('Remember Me:', this.rememberMe);
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    margin: 5rem;
  }
  
  .row {
    margin: 0; /* Loại bỏ margin giữa các cột */
  }
  
  .login-left, .login-right {
    padding: 40px;
    border-radius: 10px;
    border: 1px solid #ccc;
  }
  
  .login-left {
    background-image: url('../assets/logobg.png');
    background-size: cover;
    color: #222222;
    border-right: none; /* Loại bỏ viền bên phải */
  }
  
  .login-right {
    padding: 40px;
    border-left: none; /* Loại bỏ viền bên trái */
  }
  
  .form-title {
    margin-bottom: 20px;
  }
  
  .social-buttons .btn {
    width: 183px; /* Kích thước rộng */
    height: 53px; /* Kích thước cao */
    font-size: 0.9rem; /* Giảm kích thước nút */
    border-radius: 5px; /* Bo góc */
    border: 1px solid #ccc; /* Viền xám */
    background-color: white; /* Nền trắng */
    color: black; /* Màu chữ đen */
  }
  
  .social-buttons .btn i {
    margin-right: 8px;
  }
  
  .login-right .btn {
    font-weight: bold;
  }
  
  .login-left .dk {
    font-weight: bold;
    color: #222222;
  }
  
  .social-buttons .btn i {
    font-size: 1.3rem; /* Tăng kích thước icon */
  }
  
  .social-buttons .btn .fab {
    font-size: 1.5rem; /* Kích thước icon cho Facebook, Google, Twitter */
  }
  
  /* Loại bỏ margin giữa các cột trong .row */
  .row {
    margin: 0;
    padding: 0; /* Nếu cần, bạn có thể loại bỏ padding */
  }
  
  /* Loại bỏ margin của các cột col-sm-6 */
  .col-sm-6 {
    margin: 0; /* Loại bỏ margin của các cột */
    padding: 0; /* Loại bỏ padding nếu cần */
  }
  
  /* Đảm bảo các cột có kích thước bằng nhau */
  .col-sm-6 {
    flex: 1; /* Giúp hai cột có chiều rộng bằng nhau */
  }
  
  </style>
  