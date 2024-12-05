<template>
    <div class="m-5 col-sm-3 login-container">
      <h2>Đăng Nhập</h2>
      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <label for="username">Tên đăng nhập: </label>
          <input type="text" class="form-control" id="username" v-model="username"
            placeholder="Nhập tên đăng nhập" />
        </div>
  
        <div class="mb-3">
          <label for="password">Mật khẩu: </label>
          <input type="password" class="form-control" id="password" v-model="password"
            placeholder="Nhập mật khẩu" />
        </div>
  
        <button type="submit" class="btn btn-primary">Đăng nhập</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Khai báo biến lưu dữ liệu form đăng nhập
  const username = ref('');
  const password = ref('');
  
  // Hàm xử lý đăng nhập
  const emit = defineEmits(['loggedIn']);
  function handleLogin() {
    if (username.value && password.value) {
      emit('loggedIn', username.value);
    }
  }
  </script>
  
  <style scoped>
  .login-container {
    font-family: 'Arial', sans-serif; 
    color: #333; 
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px; 
  }
  
  h2 {
    color: #007bff; 
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  label {
    font-size: 14px;
    color: #555; 
  }
  
  .form-control {
    font-size: 16px; 
    padding: 10px;
    border-radius: 5px; 
    border: 1px solid #ddd;
    width: 100%;
  }
  
  button.btn {
    font-size: 16px;
    padding: 10px 15px;
    border-radius: 5px;
    width: 100%;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button.btn:hover {
    background-color: #0056b3; 
  }
  
  .mb-3 {
    margin-bottom: 15px;
  }
  
  input[type="text"], input[type="password"] {
    height: 40px;
  }
  </style>
  