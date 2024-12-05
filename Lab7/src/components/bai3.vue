<template>
    <div class="container">
      <div class="form-container">
        <h3>Đăng ký người dùng</h3>
        <form @submit.prevent="register">
          <div class="mb-3">
            <label>Họ tên: </label>
            <input type="text" class="form-control" v-model="user.name" placeholder="Nhập họ tên" required />
          </div>
  
          <div class="mb-3">
            <label>Email: </label>
            <input type="email" class="form-control" v-model="user.email" placeholder="Nhập email" required />
          </div>
  
          <div class="mb-3">
            <label>Mật khẩu: </label>
            <input type="password" class="form-control" v-model="user.password" placeholder="Nhập mật khẩu" required />
          </div>
  
          <div class="mb-3">
            <label>Ngày sinh: </label>
            <input type="date" class="form-control" v-model="user.dob" required />
          </div>
  
          <div class="mb-3">
            <label>Giới tính: </label>
            <select class="form-control" v-model="user.gender" required>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
              <option value="Khác">Khác</option>
            </select>
          </div>
  
          <div class="mb-3">
            <label>Ngôn ngữ: </label>
            <select class="form-control" v-model="user.language" required>
              <option value="Tiếng Việt">Tiếng Việt</option>
              <option value="Tiếng Anh">Tiếng Anh</option>
              <option value="Tiếng Nhật">Tiếng Nhật</option>
            </select>
          </div>
  
          <button type="submit" class="btn btn-success">Đăng ký</button>
        </form>
      </div>
  
      <div v-if="isRegistered" class="info-container">
        <h4>Thông tin đăng ký:</h4>
        <ul>
          <li><strong>Họ tên:</strong> {{ user.name }}</li>
          <li><strong>Email:</strong> {{ user.email }}</li>
          <li><strong>Ngày sinh:</strong> {{ user.dob }}</li>
          <li><strong>Giới tính:</strong> {{ user.gender }}</li>
          <li><strong>Ngôn ngữ:</strong> {{ user.language }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const user = ref({
    name: '',
    email: '',
    password: '',
    dob: '',
    gender: 'Nam',
    language: 'Tiếng Việt'
  });
  
  const isRegistered = ref(false); 
  
  const register = () => {
    isRegistered.value = true;
    user.value.password = ''; 
  }
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    width: 1000px;
  }
  
  .form-container, .info-container {
    width: 45%;
  }
  
  h3, h4 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  input, select {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  
  button {
    padding: 10px 15px;
    background-color: #28a745;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #218838;
  }
  
  ul {
    padding-left: 20px;
  }
  
  li {
    font-size: 16px;
    margin-bottom: 8px;
  }
  </style>
  