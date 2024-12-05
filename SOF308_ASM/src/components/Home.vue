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

  <!-- SlideShow -->
  <div class="carousel-container">
    <h1 class="text-center mb-4">Trending Post</h1>
    <div class="carousel" ref="carousel">
      <div class="carousel-item" v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Trending Image" class="d-block w-100">
      </div>
    </div>
  </div>

  <!-- Content -->
  <div class="content clearfix">
    <div class="main-content">
      <h1 class="recent-post-title">Recent Posts</h1>
      <div class="post" v-for="(post, index) in posts" :key="index">
        <img :src="post.image" alt="" class="post-images">
        <div class="post-preview">
          <h2><router-link :to="`/post/${post.id}`">{{ post.title }}</router-link></h2>
          <i class="far fa-user"><span>{{ post.author }}</span></i>
          &nbsp;
          <i class="fas fa-calendar-alt"><span>{{ post.date }}</span></i>
          <p class="preview-text">{{ post.previewText }}</p>
          <router-link :to="`/post/${post.id}`" class="btn read-more">Read More</router-link>
        </div>
      </div>
    </div>

    <div class="sidebar">
      <div class="section search">
        <h2 class="section-title">Search</h2>
        <form action="" method="post">
          <input type="text" name="search-term" class="text-input" placeholder="Search...">
        </form>
      </div>

      <div class="section topics">
        <h2 class="section-title">Topics</h2>
        <ul>
          <li><router-link to="/topic/music">Music</router-link></li>
          <li><router-link to="/topic/sport">Sport</router-link></li>
          <li><router-link to="/topic/science">Science</router-link></li>
          <li><router-link to="/topic/world">World</router-link></li>
          <li><router-link to="/topic/fashion">Fashion</router-link></li>
          <li><router-link to="/topic/education">Education</router-link></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Footer -->
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
          <router-link to="https://facebook.com" target="_blank"><i class="fa-brands fa-facebook"></i></router-link>
          <router-link to="https://google.com" target="_blank"><i class="fa-brands fa-google"></i></router-link>
          <router-link to="https://github.com" target="_blank"><i class="fa-brands fa-github"></i></router-link>
          <router-link to="https://linkedin.com" target="_blank"><i class="fa-brands fa-linkedin"></i></router-link>
        </div>
      </div>
      <div class="footer-section links">
        <h2>Quick Links</h2>
        <br>
        <ul>
          <li><router-link to="/events">Events</router-link></li>
          <li><router-link to="/team">Team</router-link></li>
          <li><router-link to="/mentors">Mentors</router-link></li>
          <li><router-link to="/gallery">Gallery</router-link></li>
          <li><router-link to="/terms-and-conditions">Terms and Conditions</router-link></li>
        </ul>
      </div>
      <div class="footer-section contact-form">
        <h2>Contact us</h2>
        <br>
        <form action="" method="post">
          <input type="text" name="email" class="text-input contact-input" placeholder="Your email address...">
          <textarea name="message" id="" class="text-input contact-input" placeholder="Your message..."></textarea>
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
  name: "CarouselComponent",
  data() {
    return {
      images: [
        "/src/assets/images/banner1.jpg",
        "/src/assets/images/banner2.jpg",
        "/src/assets/images/banner3.jpg",
        "/src/assets/images/banner4.jpg",
        "/src/assets/images/banner5.jpg",
        "/src/assets/images/banner6.jpg",
        "/src/assets/images/banner7.jpg",
        "/src/assets/images/banner8.jpg",
        "/src/assets/images/banner9.jpg",
      ],
      posts: [
        {
          id: 1,
          title: "Bảo tàng Lịch Sử Quân sự Việt Nam: Ghi dấu trang sử hào hùng",
          author: "Đức Hiền",
          date: "November 24, 2024",
          previewText: "Dành cho những bạn nào chưa biết, Bảo tàng Lịch sử Quân sự Việt Nam nằm ở Hà Nội tại địa chỉ 28A Điện Biên Phủ, quận Ba Đình và được xây dựng ngay cạnh Cột Cờ Hà Nội.",
          image: "/src/assets/images/content1.webp",
        },
        {
          id: 2,
          title: "Một ngày ở phố cổ Hà Nội mùa thu",
          author: "Tâm Anh",
          date: "November 24, 2024",
          previewText: "Thời tiết đẹp ở Hà Nội dịp Giải phóng Thủ đô (10/10) là cơ hội để không chỉ khách du lịch mà cả người dân dạo chơi trong phố cổ. Chụp ảnh, trải nghiệm food tour, xem triển lãm và ngắm Hà Nội từ trên cao là những gợi ý cho du khách khi đến Hà Nội trong một ngày.",
          image: "/src/assets/images/content2.jpg",
        },
        {
          id: 3,
          title: "Không gian thể thao cộng đồng hút giới trẻ phía Nam",
          author: "Lan Anh",
          date: "November 24, 2024",
          previewText: "Không gian thể thao cộng đồng tại TP HCM, Cần Thơ và Đồng Nai vừa khai trương, thu hút nhiều bạn trẻ đến tập luyện mỗi ngày.",
          image: "/src/assets/images/content3.jpg",
        },
        {
          id: 4,
          title: "Phở bò vào danh sách 20 món soup ngon nhất thế giới",
          author: "Anh Minh",
          date: "November 24, 2024",
          previewText: "Phở bò được nhiều khách quốc tế biết đến nhất trong ẩm thực Việt Nam, nằm trong top 20 món soup ngon hàng đầu thế giới do CNN chọn.",
          image: "/src/assets/images/content4.jpg",
        },
        {
          id: 5,
          title: "Kỹ thuật thở mặt trăng giúp dễ ngủ, sâu giấc",
          author: "Thục Linh",
          date: "November 24, 2024",
          previewText: "Kỹ thuật thở mặt trăng của Ấn Độ cổ đại được cho là phương pháp tự nhiên giúp giảm căng thẳng và dễ ngủ.",
          image: "/src/assets/images/content5.png",
        },
      ],
    };
  },
  mounted() {
    $(this.$refs.carousel).slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
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

/* CSS Slideshow */
.carousel-container {
  width: 80%;
  margin: 0 auto;
  padding: 40px 0;
}

.carousel-item {
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 8px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: #555;
  margin: 0 5px;
}

.slick-prev:before,
.slick-next:before {
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  color: #333;
  font-size: 24px;
}

.slick-prev:before {
  content: "\f053";
}

.slick-next:before {
  content: "\f054";
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

/* CSS cho thông báo đăng xuất nhỏ */
.small-toast {
  font-size: 14px !important; /* Chỉnh kích thước font */
  padding: 10px 20px !important; /* Chỉnh padding cho thông báo */
  border-radius: 5px; /* Đặt bo góc */
}

/* Điều chỉnh vị trí thông báo */
.swal2-container {
  top: 10px !important; /* Đặt vị trí thông báo ở phía trên */
  left: 50% !important; /* Canh giữa */
  transform: translateX(-50%) !important; /* Canh giữa theo chiều ngang */
}

/* Điều chỉnh màu sắc nền thông báo (tuỳ chỉnh) */
.swal2-popup {
  color: black !important; /* Màu chữ trắng */
}

</style>