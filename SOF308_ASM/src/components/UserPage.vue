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


    <div class="carousel-container">
        <h1 class="text-center mb-4">Trending Post</h1>
        <div class="carousel" ref="carousel">
            <div class="carousel-item" v-for="n in 9" :key="n">{{ n }}</div>
        </div>
    </div>

    <section class="container blog-section mt-4">
        <div class="row">
            <div class="col-md-4">
                <h2 class="section-title">Về tôi</h2>
                <div class="card mb-3">
                    <img src="/src/assets/images/Bee Blog.png" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">Giới thiệu bản thân</h5>
                        <p class="card-text">Trần Đức Hiền <br>
                            Châm ngôn: Áp lực tạo nền kim cương
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-md-8">
                <h2 class="section-title">Blog của tôi</h2>
                <div class="blog-content border p-3 rounded shadow-sm">
                    <div class="row">
                        <div class="col-md-7">
                            <div class="card mb-3">
                                <h5 class="card-title">Phương pháp tập Pilates giúp phục hồi chấn thương cột sống<span
                                        class="ms-2"><i class="fas fa-comment"></i> 16</span></h5>
                                <img src="/src/assets/images/Bee Blog.png" class="card-img-top" alt="Pilates">
                                <div class="card-body">
                                    <p class="card-text">
                                        Ngoài việc giúp duy trì vóc dáng, cải thiện sự linh hoạt, dẻo dai cho người tập.
                                        Pilates giúp cơ bắp và các khớp mọc dài hơn, kéo dãn hơn...
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-5">
                            <div class="other-news">
                                <div class="card d-flex flex-row mb-3">
                                    <img src="/src/assets/images/Bee Blog.png" alt="News 1" class="img-fluid"
                                        style="width: 90px; height: 95px; object-fit: cover;">
                                    <div class="card-body p-2">
                                        <p class="card-text mb-1">Biết ơn đời, đời sẽ <br> thương ta</p>
                                        <span><i class="fas fa-comment"></i> 30</span>
                                    </div>
                                </div>

                                <div class="card d-flex flex-row mb-3">
                                    <img src="/src/assets/images/Bee Blog.png" alt="News 2" class="img-fluid"
                                        style="width: 90px; height: 95px; object-fit: cover;">
                                    <div class="card-body p-2">
                                        <p class="card-text mb-1">9 tác dụng tuyệt vời <br> của cam</p>
                                        <span><i class="fas fa-comment"></i> 28</span>
                                    </div>
                                </div>

                                <div class="card d-flex flex-row mb-3">
                                    <img src="/src/assets/images/Bee Blog.png" alt="News 3" class="img-fluid"
                                        style="width: 90px; height: 95px; object-fit: cover;">
                                    <div class="card-body p-2">
                                        <p class="card-text mb-1">10 công dụng bất ngờ <br> từ dầu dừa</p>
                                        <span><i class="fas fa-comment"></i> 15</span>
                                    </div>
                                </div>

                                <div class="card d-flex flex-row mb-3">
                                    <img src="/src/assets/images/Bee Blog.png" alt="News 2" class="img-fluid"
                                        style="width: 90px; height: 95px; object-fit: cover;">
                                    <div class="card-body p-2">
                                        <p class="card-text mb-1">Lợi ích khi ăn rau mỗi <br> ngày</p>
                                        <span><i class="fas fa-comment"></i> 12</span>
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
    </section>

    <div class="container">
        <div class="row">
            <div class="col-sm-4">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                            aria-selected="true">Đọc nhiều</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                            aria-selected="false">Xem nhiều</button>
                    </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                        aria-labelledby="pills-home-tab" tabindex="0">
                        <div class="card d-flex flex-row mb-3">
                            <img src="/src/assets/images/Bee Blog.png" alt="News 1" class="img-fluid"
                                style="width: 90px; height: 95px; object-fit: cover;">
                            <div class="card-body p-2">
                                <p class="card-text mb-1">Biết ơn đời, đời sẽ <br> thương ta</p>
                                <span><i class="fas fa-comment"></i> 30</span>
                            </div>
                        </div>

                        <div class="card d-flex flex-row mb-3">
                            <img src="/src/assets/images/Bee Blog.png" alt="News 3" class="img-fluid"
                                style="width: 90px; height: 95px; object-fit: cover;">
                            <div class="card-body p-2">
                                <p class="card-text mb-1">10 công dụng bất ngờ <br> từ dầu dừa</p>
                                <span><i class="fas fa-comment"></i> 15</span>
                            </div>
                        </div>

                        <div class="card d-flex flex-row mb-3">
                            <img src="/src/assets/images/Bee Blog.png" alt="News 2" class="img-fluid"
                                style="width: 90px; height: 95px; object-fit: cover;">
                            <div class="card-body p-2">
                                <p class="card-text mb-1">Lợi ích khi ăn rau mỗi <br> ngày</p>
                                <span><i class="fas fa-comment"></i> 12</span>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                        tabindex="0">
                    </div>
                </div>
            </div>

            <div class="col-sm-8 mt-3">
                <h2 class="text-primary text-md-center">VIDEO - ĐỪNG BỎ LỠ</h2>

                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card">
                            <img src="/src/assets/images/Bee Blog.png" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Đi xa hơn để trưởng thành hơn</h5>
                                <p class="card-text">Tuổi trẻ chỉ nghĩ đến những chuyến đi, đợi <br> mong một ngày
                                    được bay nhảy trên những <br> phương trời mới lạ. Để rồi những cô đơn mê <br> mải,
                                    tuổi trẻ ấy mới muốn một nơi để trở về.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="/src/assets/images/Bee Blog.png" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Chút tâm tư những ngày cuối năm</h5>
                                <p class="card-text">Guồng quay cuộc sống dẫu có vội vàng, dẫu <br> có tấp nập đến đâu
                                    thì cũng chẳng nằm <br> ngoài quy luật tự nhiên và bất biến xuân, hạ, <br>
                                    thu, đông. Và rồi một năm cũ sắp trôi qua.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="/src/assets/images/Bee Blog.png" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Ước gì được trở về tuổi thơ</h5>
                                <p class="card-text">Tuổi trẻ chỉ nghĩ đến những chuyến đi, đợi <br> mong một ngày
                                    được bay nhảy trên những <br> phương trời mới lạ. Để rồi những cô đơn mê <br> mải,
                                    tuổi trẻ ấy mới muốn một nơi để trở về.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="/src/assets/images/Bee Blog.png" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Ba người thầy vĩ đại</h5>
                                <p class="card-text">Ta xem vạn vật là thầy. Tinh thần học hỏi của <br> ta luôn rộng
                                    mở hơn tất cả các người. Ta học <br> hỏi từ tất cả mọi vật, từ cành cây ngọn cỏ
                                    <br> đến đám mây trên trời kia.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center mt-3 mb-4">
                    <a href="#" class="btn btn-info btn-see-more">Xem thêm</a>
                </div>
            </div>
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

<script>

export default {
name: "CarouselComponent",
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
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
},
};
</script>