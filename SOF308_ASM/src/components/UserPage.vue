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
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Account
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link v-if="!isLoggedIn" to="/login" class="dropdown-item">
                  <i class="fa-solid fa-user" id="icons"></i> Login
                </router-link>
              </li>
              <li v-if="isLoggedIn">
                <router-link to="/forgot-password" class="dropdown-item">
                  <i class="fa-solid fa-question" id="icons"></i> Forgot Password
                </router-link>
              </li>
              <li v-if="isLoggedIn">
                <router-link to="/edit-profile" class="dropdown-item">
                  <i class="fa-solid fa-user-pen" id="icons"></i> Change Password
                </router-link>
              </li>
              <li v-if="isLoggedIn">
                <button @click="logout" class="dropdown-item">
                  <i class="fa-solid fa-sign-out" id="icons"></i> Logout
                </button>
              </li>
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

    <div class="container blog-section mt-4">
        <div class="row">
            <!-- Giới thiệu bản thân -->
            <div class="col-md-4">
                <h2 class="section-title">Về tôi</h2>
                <div class="card mb-3">
                    <img :src="profile.image" class="card-img-top" alt="Profile">
                    <div class="card-body">
                        <h5 class="card-title">Giới thiệu bản thân</h5>
                        <p class="card-text" v-if="!isEditing">
                            Họ và tên:<strong>{{ profile.name }}</strong> <br>
                            Ngày sinh: {{ profile.dob }} <br>
                            Địa chỉ: {{ profile.address }} <br>
                            Giới tính: {{ profile.gender }} <br>
                            Châm ngôn: {{ profile.quote }}
                        </p>
                        
                        <!-- Form chỉnh sửa thông tin cá nhân -->
                        <div v-if="isEditing">
                            <form @submit.prevent="saveProfile">
                                <div class="mb-3">
                                    <label for="name" class="form-label">Họ và tên</label>
                                    <input type="text" class="form-control" id="name" v-model="profile.name" required>
                                </div>
                                <div class="mb-3">
                                    <label for="dob" class="form-label">Ngày sinh</label>
                                    <input type="date" class="form-control" id="dob" v-model="profile.dob" required>
                                </div>
                                <div class="mb-3">
                                    <label for="address" class="form-label">Địa chỉ</label>
                                    <input type="text" class="form-control" id="address" v-model="profile.address" required>
                                </div>
                                <div class="mb-3">
                                    <label for="gender" class="form-label">Giới tính</label>
                                    <select class="form-control" id="gender" v-model="profile.gender" required>
                                        <option value="Nam">Nam</option>
                                        <option value="Nữ">Nữ</option>
                                        <option value="Khác">Khác</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="quote" class="form-label">Châm ngôn</label>
                                    <input type="text" class="form-control" id="quote" v-model="profile.quote" required>
                                </div>
                                <div class="mb-3">
                                    <label for="image" class="form-label">Chọn ảnh đại diện</label>
                                    <input type="file" class="form-control" id="image" @change="handleImageUpload">
                                    <p v-if="newImage">Ảnh mới đã được chọn: <strong>{{ newImage.name }}</strong></p>
                                </div>
                                
                                <button type="submit" class="btn btn-primary">Lưu thay đổi</button>
                                <button type="button" class="btn btn-secondary" @click="cancelEdit" style="margin-left: 10px;" >Hủy</button>
                            </form>
                        </div>

                        <button v-if="!isEditing" @click="editProfile" class="btn btn-primary">Chỉnh sửa thông tin</button>
                    </div>
                </div>
            </div>

            <!-- Blog của tôi -->
            <div class="col-md-8">
                <h2 class="section-title">Blog của tôi</h2>
                <div class="blog-content border p-3 rounded shadow-sm">
                    <div class="row">
                        <!-- Bài viết chính -->
                        <div class="col-md-7" v-if="blogs.length">
                            <div class="card mb-3" v-for="(blog, index) in blogs.slice(0, 1)" :key="index">
                                <h5 class="card-title">
                                    {{ blog.title }}
                                    <span class="ms-2"><i class="fas fa-comment"></i> {{ blog.comments }}</span>
                                </h5>
                                <img :src="blog.image" class="card-img-top" :alt="blog.title">
                                <div class="card-body">
                                    <p class="card-text">{{ blog.description }}</p>
                                </div>
                            </div>
                        </div>

                        <!-- Các bài viết khác -->
                        <div class="col-md-5">
                            <div class="other-news">
                                <div class="card d-flex flex-row mb-3" v-for="(blog, index) in blogs.slice(1)" :key="index">
                                    <img :src="blog.image" alt="Other News" class="img-fluid" style="width: 90px; height: 95px; object-fit: cover;">
                                    <div class="card-body p-2">
                                        <p class="card-text mb-1">{{ blog.title }}</p>
                                        <span><i class="fas fa-comment"></i> {{ blog.comments }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center mt-3">
                        <a href="#" class="btn btn-info btn-see-more">Xem thêm</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="footer">
        <div class="footer-content">
            <div class="footer-section about">
                <h1 class="logo-text"><span>Đức</span>Hiền</h1>
                <p>
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

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isLoggedIn = ref(false);

const userStatus = localStorage.getItem('isLoggedIn');
isLoggedIn.value = userStatus === 'true';

const logout = () => {
  localStorage.clear();
  isLoggedIn.value = false;
  router.push('/login');
  Swal.fire({
    icon: 'success',
    title: 'Logged Out',
    text: 'You have successfully logged out!',
    position: 'top',
    toast: true,
    showConfirmButton: false,
    timer: 3000,
    customClass: {
    popup: 'small-toast',
    },
  });
};
</script>

<script>
export default {
  data() {
    return {
      isEditing: false, 
      profile: {
        name: "Trần Đức Hiền",
        dob: "17/12/2005",
        address: "1180/9 Quang Trung, Gò Vấp, Hồ Chí Minh",
        gender: "Nam",
        quote: "Áp lực tạo nên kim cương",
        image: "/src/assets/images/hien.jpg",
      },
      blogs: [
        {
          title: "JavaScript – Ngôn ngữ lập trình phổ biến nhất",
          description: "Có vẻ như bạn không thể trở thành software developer mà không dùng đến JavaScript. Đó là lý do JavaScript nên đứng đầu tiên trong danh sách ngôn ngữ lập trình thích hợp cho người mới bắt đầu, thậm chí thích hợp cả với những ai vẫn còn đang ở bước tìm hiểu “ngôn ngữ lập trình là gì”. Lý do khiến JavaScript trở thành ngôn ngữ lập trình được yêu thích nhất là bởi nó thân thiện đối với hầu hết các trình duyệt web và có nhiều cú pháp linh hoạt. Dù là ngôn ngữ dành cho Front-end nhưng JavaScript vẫn được sử dụng cho Back-end thông qua Node.js JavaScript giúp tăng độ mượt mà cho người sử dụng khi tương tác trên trang web. Cơ hội việc làm cho người học JavaScript cũng được đánh giá là rộng mở và rất tiềm năng.",
          comments: 30,
          image: "/src/assets/images/blog1.webp",
        },
        {
          title: "Java",
          comments: 15,
          image: "/src/assets/images/blog2.webp",
        },
        {
          title: "PHP",
          comments: 10,
          image: "/src/assets/images/blog3.webp",
        },
        {
          title: "Python",
          comments: 10,
          image: "/src/assets/images/blog4.webp",
        },
        {
          title: "C/C++",
          comments: 10,
          image: "/src/assets/images/blog5.webp",
        },
      ],
    };
  },
  methods: {
    editProfile() {
      this.isEditing = true;
    },
    saveProfile() {
      if (this.newImage) {
        this.profile.image = URL.createObjectURL(this.newImage);
      }
      this.isEditing = false;
      Swal.fire({
          icon: "success",
          title: "Oops...",
          text: "Information saved successfully.",
          position: 'top',
          toast: true,
          showConfirmButton: false,
          timer: 3000,
          customClass: {
            popup: 'small-toast',
          }
        });
    },
    cancelEdit() {
      this.isEditing = false;
      this.newImage = null;  
    },
    handleImageUpload(event) {
      this.newImage = event.target.files[0];
    },
  },
};
</script>


<style>
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
    margin-top: 50px;
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

.section-title {
  font-family: 'Arial', sans-serif; 
  font-size: 2rem; 
  font-weight: bold; 
  color: #34495e;
  text-align: center; 
  margin-bottom: 20px; 
}


.blog-content {
  font-family: 'Roboto', sans-serif; 
  color: #333;
  background-color: #f9f9f9; 
  padding: 20px;
  border-radius: 10px; 
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); 
}


.card {
  margin-bottom: 20px; 
  border-radius: 10px; 
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); 
}

.card-title {
  font-family: 'Roboto', sans-serif; 
  font-size: 1.5rem; 
  font-weight: bold; 
  color: #2c3e50; 
  margin-bottom: 10px; 
  text-align: center;
}

.card-title span {
  font-size: 1rem; 
  color: #95a5a6; 
}

.card-img-top {
  border-top-left-radius: 10px; 
  border-top-right-radius: 10px; 
  height: 250px; 
  object-fit: cover; 
}

.card-body {
  padding: 15px; 
}

.card-text {
  font-size: 1rem; 
  color: black; 
  line-height: 1.5; 
}

.blog-content img {
  width: 100%; 
  height: auto; 
  object-fit: cover; 
}

.other-news .card img {
  width: 90px; 
  height: 95px; 
  object-fit: cover; 
  border-radius: 8px; 
}

.other-news .card {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px; 
}

.other-news .card-body p {
  font-size: 0.9rem;
  color: #34495e; 
  font-weight: bold;
  margin-bottom: 5px; 
}

.other-news .card-body span {
  font-size: 0.8rem; 
  color: #7f8c8d; 
}
</style>
