<template>
    <div>
      <Login_Bai4 v-if="!isLoggedIn" @loggedIn="handleLoginSuccess" />
      
      <Comment_Bai4 v-else :username="loggedInUser" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Login_Bai4 from './Login_Bai4.vue';
  import Comment_Bai4 from './Comment_Bai4.vue';
  
  const isLoggedIn = ref(false);
  const loggedInUser = ref('');
  
  function handleLoginSuccess(username) {
    loggedInUser.value = username;
    isLoggedIn.value = true;
  }
  </script>
  