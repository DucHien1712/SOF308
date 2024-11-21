<template>
  <div id="app">
    <nav>
      <router-link to="/">Trang chủ</router-link>
      <router-link to="/blogs">Danh sách bài viết</router-link>
      <router-link to="/profile">Thông tin người dùng</router-link>
      <router-link to="/login">Đăng nhập</router-link>
    </nav>
    <router-view></router-view> <!-- Các view sẽ được hiển thị ở đây -->
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
nav {
  padding: 10px;
  background-color: #f0f0f0;
}

router-link {
  margin-right: 10px;
}
</style>
