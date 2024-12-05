<template>
    <div>
      <h2>Đăng nhập</h2>
      <form @submit.prevent="login">
        <input v-model="username" placeholder="Tên đăng nhập" />
        <input type="password" v-model="password" placeholder="Mật khẩu" />
        <RouterLink to="/infor">
          <button type="submit">Đăng nhập</button>
        </RouterLink>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const username = ref('');
  const password = ref('');
  
  const emit = defineEmits(['loggedIn']);
  
  function login() {
    // Giả lập đăng nhập thành công
    emit('loggedIn', username.value);
    this.$router.push({ name: 'Dashboard' });
  }
  </script>
  