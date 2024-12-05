<template>
  <div id="app">
    <nav>
      <router-link to="/">Trang chủ</router-link>
      <router-link to="/blogs">Danh sách bài viết</router-link>
      <router-link to="/profile">Thông tin người dùng</router-link>
      <router-link to="/login">Đăng nhập</router-link>
    </nav>
    <router-view></router-view> 
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
nav {
  display: flex;
  justify-content: space-around; 
  padding: 10px;
  background-color: #f8f9fa; 
  border-bottom: 2px solid #eaeaea; 
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); 
}

router-link {
  margin: 0 15px; 
  text-decoration: none; 
  font-weight: bold; 
  font-size: 16px; 
  color: #007bff; 
  transition: color 0.3s ease; 
}

router-link:hover {
  color: #0056b3; 
}

router-link.router-link-exact-active {
  color: #28a745; 
  border-bottom: 2px solid #28a745; 
  padding-bottom: 2px; 
}
</style>
