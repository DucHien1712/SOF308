<template>
    <!-- Menubar -->
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="/src/assets/images/Bee Blog.png" alt="">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link" aria-current="page">
              <i class="fa-solid fa-house" id="icons"></i>Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/user" class="nav-link">
              <i class="fa-solid fa-clipboard" id="icons"></i>CV
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/post-articles" class="nav-link">
              <i class="fa-solid fa-upload" id="icons"></i>Post Articles
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/edit-profile" class="nav-link">
              <i class="fa-regular fa-id-card" id="icons"></i>Edit Profile
            </router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Account
            </a>
            <ul class="dropdown-menu">
              <router-link to="/login" class="dropdown-item">
                <i class="fa-solid fa-user" id="icons"></i>Login
              </router-link>
              <li><router-link to="/forgot-password" class="dropdown-item">
                <i class="fa-solid fa-question" id="icons"></i>Forgot Password
                </router-link></li>
              <li><router-link to="/edit-profile" class="dropdown-item">
                <i class="fa-solid fa-user-pen" id="icons"></i>Change Password
                </router-link></li>
            </ul>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/language/vn" class="nav-link">Tiếng Việt</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/language/en" class="nav-link">Tiếng Anh</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

    <!-- Main Content -->
<div class="container mt-5 mb-5" v-if="editing">
  <div class="profile-container mx-auto p-4" style="max-width: 600px;">
    <h2 class="text-center mb-4">Chỉnh Sửa Thông Tin Cá Nhân</h2>
    <!-- Profile Picture Section -->
    <div class="text-center mb-4">
      <img :src="profile.image" alt="Avatar" class="profile-pic" style="width: 150px; height: 150px; border-radius: 50%; object-fit: cover;">
      <div class="change-pic-btn">
        <label for="uploadPic" class="btn btn-outline-primary btn-sm">Thay Đổi Ảnh</label>
        <input type="file" id="uploadPic" class="d-none" accept="image/*" @change="onImageChange">
      </div>
    </div>

    <!-- Form Section -->
    <form @submit.prevent="saveChanges">
      <div class="mb-3">
        <label for="fullName" class="form-label">Họ và Tên</label>
        <input type="text" class="form-control" id="fullName" v-model="profile.name" placeholder="Nhập họ và tên">
      </div>
      <div class="mb-3">
        <label for="dob" class="form-label">Ngày sinh</label>
        <input type="date" class="form-control" id="dob" v-model="profile.dob" placeholder="Chọn ngày sinh">
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">Địa chỉ</label>
        <input type="text" class="form-control" id="address" v-model="profile.address" placeholder="Nhập địa chỉ">
      </div>
      <div class="mb-3">
        <label for="gender" class="form-label">Giới tính</label>
        <select class="form-control" id="gender" v-model="profile.gender">
          <option value="Nam">Nam</option>
          <option value="Nữ">Nữ</option>
          <option value="Khác">Khác</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="quote" class="form-label">Châm ngôn</label>
        <input type="text" class="form-control" id="quote" v-model="profile.quote" placeholder="Nhập châm ngôn">
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-primary">Lưu Thay Đổi</button>
        <button @click="cancelEdit" type="button" class="btn btn-secondary">Hủy</button>
      </div>
    </form>
  </div>
</div>


    <div class="footer">
        <div class="footer-content">
            <div class="footer-section about">
                <h1 class="logo-text"><span>Đức</span>Hiền</h1>
                <p>
                    Nội dung footer ở đây
                </p>
                <div class="contact">
                    <span><i class="fa-solid fa-phone-flip"></i> &nbsp;0812.529.537</span>
                    <span><i class="fa-solid fa-envelope"></i> &nbsp;tranduchien509@gmail.com</span>
                </div>
                <div class="socials">
                    <a href=""><i class="fa-brands fa-facebook"></i></a>
                    <a href=""><i class="fa-brands fa-google"></i></a>
                    <a href=""><i class="fa-brands fa-github"></i></a>
                    <a href=""><i class="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
            <div class="footer-section links">
                <h2>Quick Links</h2>
                <br>
                <ul>
                    <li><a href="">Events</a></li>
                    <li><a href="">Team</a></li>
                    <li><a href="">Mentores</a></li>
                    <li><a href="">Gallery</a></li>
                    <li><a href="">Terms and Conditions</a></li>
                </ul>
            </div>
            <div class="footer-section contact-form">
                <h2>Contact us</h2>
                <br>
                <form action="" method="post">
                    <input type="text" name="email" class="text-input contact-input"
                        placeholder="Your email address...">
                    <textarea name="message" id="" class="text-input contact-input"
                        placeholder="Your message..."></textarea>
                    <button type="submit" class="btn btn-big contact-btn">
                        <i class="fa-regular fa-envelope"></i>
                        Send
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EditProfile',
    data() {
        return {
            profilePic: 'https://via.placeholder.com/150', // Default profile picture
            formData: {
                fullName: '', // User's full name
                email: '',    // User's email
                password: ''  // User's password
            }
        };
    },
    methods: {
        // Function to handle profile picture change
        onImageChange(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.profilePic = e.target.result; // Update the profile picture preview
                };
                reader.readAsDataURL(file);
            }
        },
        // Function to save changes (mock example)
        saveChanges() {
            // For now, just log the form data
            console.log('Updated Profile Data:', this.formData);
            alert('Thông tin đã được lưu thành công!');
        }
    }
};
</script>

<style>
body {
    background-color: #f8f9fa;
    font-family: 'Arial', sans-serif;
}

.profile-container {
    background: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.profile-container h2 {
    color: #455159;
}

.profile-pic {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #007bff;
}

.change-pic-btn {
    margin-top: 10px;
}

.form-control {
    border-radius: 8px;
}

.btn-primary {
    background-color: #007bff;
    border: none;
}

.btn-primary:hover {
    background-color: #0056b3;
}

body,
html {
    height: 100%;
    background-color: #F6F6F6;
    padding: 0px;
    margin: 0px;
    font-family: 'Lora', sans-serif;
}

/* CCS Menubar */
.navbar-brand img {
    width: 120px;
    height: 120px;
}

.navbar-nav .nav-item {
    margin-right: 40px;
}

#icons {
    margin-right: 10px;
}

.nav-link {
    font-size: 1.1rem;
    font-weight: 500;
    color: #333;
    font-family: 'Montserrat', sans-serif;
}

.nav-link:hover {
    color: #007bff;
    text-decoration: underline;
}

.navbar-nav:last-child .nav-item {
    margin-left: 10px;
}

.dropdown-menu .dropdown-item {
    font-size: 1.1rem;
    font-weight: 500;
    color: #333;
    font-family: 'Montserrat', sans-serif;
}

.dropdown-menu .dropdown-item:hover {
    color: #007bff;
}

.navbar-brand img {
    width: 120px;
    height: 120px;
}

.navbar-nav .nav-item {
    margin-right: 40px;
}

#icons {
    margin-right: 10px;
}

.nav-link {
    font-size: 1.1rem;
    font-weight: 500;
    color: #333;
    font-family: 'Montserrat', sans-serif;
}

.nav-link:hover {
    color: #007bff;
    text-decoration: underline;
}


/* CSS Content */
.content {
    width: 90%;
    margin: 30px auto 30px;
}

.content .main-content {
    width: 70%;
    float: left;
}

.clearfix::after {
    content: '';
    display: block;
    clear: both;
}

.content .main-content .post {
    width: 95%;
    height: 270px;
    margin: 20px auto;
    border-radius: 5px;
    background-color: white;
    position: relative;
}

.content .main-content .post .read-more {
    float: right;
    border: 1px solid #006669;
    background: transparent;
    border-radius: 0;
    color: #006669 !important;
    position: relative;
    bottom: 10px;
    right: 10px;
    margin: 10px;
}

.content .main-content .post .read-more:hover {
    background: #006669;
    color: white !important;
    transition: .25s;
}

.content .main-content .post .post-images {
    width: 40%;
    height: 100%;
    float: left;
}

.content .main-content .recent-post-title {
    margin: 20px;
}

.content .main-content .post .post-preview {
    width: 60%;
    padding: 10px;
    float: right;
}

.btn {
    padding: .5rem 1rem;
    background: #006669;
    color: white;
    border: 1px solid transparent;
    border-radius: .25rem;
}

.btn:hover {
    color: white !important;
    background: #006669;
}

.content .main-content .post .post-preview h2 a {
    font-size: 1.6rem;
    font-weight: 700;
    color: #455159;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
}

.content .main-content .post .post-preview i {
    font-size: 1.0rem;
    color: #007bff;
    margin: 2px;
}

.content .main-content .post .post-preview span {
    font-size: 1.2rem;
    font-weight: normal;
    color: #333;
    font-family: 'Montserrat', sans-serif;
    margin-left: 4px;
}


.content .main-content .post .post-preview h2 a:hover {
    color: #006669;
    text-decoration: none;
}

/* CSS Sidebar */

.content .sidebar {
    width: 30%;
    float: left;
    height: 300px;
}

.content .sidebar .section {
    background: white;
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 20px;
    color: #455159;
}

.content .sidebar .section .section-title {
    margin: 10px 0px 10px 0px;
}

.content .sidebar .section.search {
    margin-top: 88px;
}

.content .sidebar .section.topics ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.content .sidebar .section.topics ul li a {
    display: block;
    padding: 15px 0px 15px 0px;
    border-bottom: 1px solid #e0e0e0;
    transition: all 0.3s;
    text-decoration: none;
    color: #455159;
    font-weight: 500;
}


.content .sidebar .section.topics ul li a:hover {
    padding-left: 20px;
    transition: all 0.3s;
}

.text-input {
    padding: .7rem 1rem;
    display: block;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #e0e0e0;
    outline: none;
    color: #444;
    line-height: 1.5rem;
    font-size: 1.2rem;
    font-family: 'Lora', sans-serif;
}

/* CSS Footer */
.footer {
    position: relative;
    background: #303036;
    color: #d3d3d3;
    height: 400px;
    padding: 20px;
}

.footer .footer-content {
    height: 350px;
    display: flex;
}

.footer .footer-content .footer-section {
    flex: 1;
    padding: 25px;
}

.footer .footer-content h1,
.footer .footer-content h2 {
    color: white;
}

.footer .footer-content .about h1 span {
    color: #05f7ff;
}

.footer .footer-content .about .contact span {
    display: block;
    font-size: 1.1rem;
    margin-bottom: 8px;
}

.footer .footer-content .about .socials a {
    border: 1px solid gray;
    width: 45px;
    height: 41px;
    padding-top: 5px;
    margin-right: 5px;
    text-align: center;
    display: inline-block;
    font-size: 1.3rem;
    border-radius: 5px;
}

.footer .footer-content .about .socials a i {
    color: white;
}

.footer .footer-content .about .socials a:hover {
    border: 1px solid white;
    color: white;
    transition: all .3s;
}

.footer .footer-content .links ul a {
    display: block;
    margin-bottom: 10px;
    font-size: 1.2rem;
}

.footer .footer-content .links ul li a {
    color: white;
    text-decoration: none;
}

.footer .footer-content .links ul a:hover {
    color: white;
    margin-left: 15px;
    transition: all .3s;
}

.footer .footer-content .contact-form .contact-input {
    background: #272727;
    color: #bebdbd;
    margin-bottom: 10px;
    line-height: 1.5rem;
    padding: .9rem 1.4rem;
    border: none;
}

.footer .footer-content .contact-form .contact-input:focus {
    background: #1a1a1a;
}

.footer .footer-content .contact-form .contact-btn {
    float: right;
}

.btn-big {
    padding: .7rem 1.3rem;
    line-height: 1.3rem;
}

.footer .footer-bottom {
    background: #343a40;
    color: #686868;
    width: 100%;
    height: 50px;
    text-align: center;
    position: absolute;
    bottom: 0px;
    left: 0px;
    padding-top: 20px;
}

#list {
    margin-left: 300px;
}
</style>