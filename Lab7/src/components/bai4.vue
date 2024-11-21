<template>
    <div>
      <!-- Nếu người dùng chưa đăng nhập, hiển thị form đăng nhập -->
      <Login_Bai4 v-if="!isLoggedIn" @loggedIn="handleLoginSuccess" />
      
      <!-- Nếu người dùng đã đăng nhập, hiển thị component bình luận -->
      <Comment_Bai4 v-else :username="loggedInUser" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Login_Bai4 from './Login_Bai4.vue';
  import Comment_Bai4 from './Comment_Bai4.vue';
  
  // Quản lý trạng thái đăng nhập và tên người dùng đã đăng nhập
  const isLoggedIn = ref(false);
  const loggedInUser = ref('');
  
  // Xử lý khi người dùng đăng nhập thành công
  function handleLoginSuccess(username) {
    loggedInUser.value = username;
    isLoggedIn.value = true;
  }
  </script>
  