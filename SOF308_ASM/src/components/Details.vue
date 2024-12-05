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

    <!-- Content -->
    <div class="content clearfix">
        <div class="main-content single">
            <h1 class="post-title" v-html="post.title"></h1>
            <p><i class="far fa-user"></i> {{ post.author }}</p>
            <p><i class="fas fa-calendar-alt"></i> {{ post.date }}</p>
            <div class="post-content" v-html="post.content"></div> 

            <!-- Bình luận -->
        <div class="comments-section">
            <h2>Bình luận</h2>
            
            <!-- Form thêm bình luận -->
            <form @submit.prevent="addComment">
                <textarea v-model="newComment" placeholder="Viết bình luận của bạn..." class="text-input"></textarea>
                <button type="submit" class="btn btn-big">Gửi</button>
            </form>

            <!-- Danh sách bình luận -->
            <div class="comments-list">
                <div v-for="(comment, index) in comments" :key="index" class="comment">
                    <p><strong>Người dùng:</strong> {{ comment.user }}</p>
                    <p>{{ comment.text }}</p>
                    <small>{{ comment.date }}</small>
                    <hr>
                </div>
            </div>
        </div>
        </div>

        <div class="sidebar single">
            <div class="section popular">
                <h2 class="section-title">Popular</h2>
                <div class="post clearfix">
                    <img src="/src/assets/images/sidebar1.jpg" alt="">
                    <a href="" class="title">
                        <h4>'Phố cà phê đường tàu nên thành điểm du lịch'</h4>
                    </a>
                </div>
                <div class="post clearfix">
                    <img src="/src/assets/images/sidebar2.jpg" alt="">
                    <a href="" class="title">
                        <h4>Vì sao bữa ăn Omakase giá tới chục triệu đồng?</h4>
                    </a>
                </div>
                <div class="post clearfix">
                    <img src="/src/assets/images/sidebar3.jpg" alt="">
                    <a href="" class="title">
                        <h4>Người Nhật Bản ngắm lá thu muộn</h4>
                    </a>
                </div>
                <div class="post clearfix">
                    <img src="/src/assets/images/sidebar4.jpg" alt="">
                    <a href="" class="title">
                        <h4>Kinh nghiệm thuê phòng tiện và rẻ ở Thổ Nhĩ Kỳ</h4>
                    </a>
                </div>
                <div class="post clearfix">
                    <img src="/src/assets/images/sidebar5.jpg" alt="">
                    <a href="" class="title">
                        <h4>Tiệc trà riêng tư giá hàng chục triệu đồng</h4>
                    </a>
                </div>
            </div>
            <div class="section topics">
                <h2 class="section-title">Topics</h2>
                <ul>
                    <li><a href="">Music</a></li>
                    <li><a href="">Sport</a></li>
                    <li><a href="">Science</a></li>
                    <li><a href="">World</a></li>
                    <li><a href="">Fashion</a></li>
                    <li><a href="">Education</a></li>
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
            post: {}, 
            comments: [], 
            newComment: '' 
        };
    },
    created() {
        const postId = this.$route.params.id;
        this.fetchPostDetails(postId); 
    },
    mounted() {
        this.loadComments();
    },
    methods: {
        fetchPostDetails(id) {
            const posts = [
                { id: 1, title: 'Bảo tàng Lịch Sử Quân sự Việt Nam<br> Ghi dấu trang sử hào hùng', author: 'Đức Hiền', date: 'November 24, 2024', content: 'Dành cho những bạn nào chưa biết, Bảo tàng Lịch sử Quân sự Việt Nam nằm ở Hà Nội tại địa chỉ 28A Điện<br> Biên Phủ, quận Ba Đình và được xây dựng ngay cạnh Cột Cờ Hà Nội. Bảo tàng này không chỉ mang dáng <br> vóc hiện đại mà còn giữ gìn và tôn vinh giá trị lịch sử. Bảo tàng Lịch sử Quân sự Việt Nam là một công trình <br> văn hóa lịch sử đặc biệt, được Bộ Quốc phòng đầu tư xây dựng trên địa bàn hai phường Tây Mỗ và Đại Mỗ <br> thuộc quận Nam Từ Liêm, Hà Nội, từ năm 2019. Với diện tích khuôn viên rộng lớn lên tới 386.600m², bảo tàng này không chỉ mang dáng vóc hiện đại mà còn giữ gìn và tôn vinh giá trị lịch sử. Tòa nhà chính của bảo tàng bao gồm 4 tầng nổi và 1 tầng trệt, với tổng diện tích xây dựng 23.198m² và diện tích sàn lên tới 64.640m². Điểm nhấn kiến trúc là tòa tháp Chiến thắng cao 45m, một biểu tượng đầy tự hào về tinh thần chiến đấu bất khuất của dân tộc.<br> <br>Hiện tại, bảo tàng đang lưu giữ hơn 150.000 hiện vật quý giá, trong đó có 4 bảo vật quốc gia, phản ánh chân thực những chặng đường lịch sử vẻ vang của quân đội Việt Nam. Với vai trò không chỉ là nơi lưu giữ lịch sử, bảo tàng còn là địa điểm thu hút du khách, khơi dậy lòng yêu nước và tự hào dân tộc cho thế hệ trẻ, góp phần lan tỏa giá trị lịch sử trong cộng đồng.<br><br> Bảo tàng Lịch sử Quân sự Việt Nam là 1 trong 6 bảo tàng quốc gia và là bảo tàng đứng đầu hệ thống các bảo tàng trong Quân đội. Khu bảo tàng nổi bật với khu vực tòa tháp Chiến Thắng và sân trước cao 45m với 4 khối nhà bảo tàng gồm 4 tầng nổi và 1 tầng trệt với diện tích được xây dựng lên đến 23.198m2.<br><br> Tại khu vực trưng bày ngoài trời của Bảo tàng Lịch sử Quân sự Việt Nam, du khách sẽ có cơ hội khám phá nhiều loại vũ khí và phương tiện quân sự lớn, từ pháo 85mm, pháo cao xạ 57mm cho đến xe tăng PT67 số hiệu 555. Những hiện vật nổi bật khác bao gồm máy bay MiG 17 (số hiệu 2047), SU22, và pháo tự hành M-107 với biệt danh "Vua chiến trường". Đặc biệt, nơi đây còn lưu giữ các loại máy bay quân đội Mỹ từng sử dụng trong chiến tranh Việt Nam, như A37, F5E, CH47, C130, cùng hàng chục loại bom và nhiều thiết bị chiến tranh khác. Mỗi hiện vật không chỉ là bản gốc mà còn chứa đựng câu chuyện lịch sử oai hùng, minh chứng rõ nét cho sự kiên cường và sáng tạo của quân dân Việt Nam qua các thời kỳ đấu tranh.' },
                { id: 2, title: 'Một ngày ở phố cổ Hà Nội mùa thu', author: 'Tâm Anh', date: 'November 24, 2024', content: 'Thời tiết đẹp ở Hà Nội dịp Giải phóng Thủ đô (10/10) là cơ hội để không chỉ khách du lịch mà cả người dân dạo chơi trong phố cổ. Chụp ảnh, trải nghiệm food tour, xem triển lãm và ngắm Hà Nội từ trên cao là những gợi ý cho du khách khi đến Hà Nội trong một ngày. Các trải nghiệm có nhiều hoạt động chỉ diễn ra trong mùa thu, tập trung ở phố cổ và khu vực gần hồ Gươm. Vào thu, trời Hà Nội sẽ sáng muộn hơn mùa hè. Khoảng 6h bước ra đường, du khách sẽ cảm nhận không khí trong lành, se se lạnh, nắng rực rỡ nhưng không bị lạnh quá hay nóng đổ mồ hôi.<br> <br> Độ ẩm thường dưới 50% nên sẽ có cảm giác hơi khô. Đây là một trải nghiệm đặc biệt của tiết trời thu, những thời điểm khác trong năm không có. Mùa thu Hà Nội thường ngắn nên hãy tận hưởng khoảnh khắc này. Nếu từ miền Nam ra, du khách nên mang theo một chiếc áo khoác mỏng hoặc sơ mi dài tay. Trong lần đầu tiên Michelin đến Việt Nam, nhiều quán phở ở Hà Nội được nhận các danh hiệu Selected (được Michelin gợi ý) và Bib Gourmand (quán ngon, giá hợp lý), trong đó có Phở Tư Lùn (hay phở Ấu Triệu) bên hông Nhà thờ lớn. <br> <br> Nước dùng đậm đà, béo là đặc trưng của hàng phở này. Quán mở cửa từ 6h30. Nếu chọn ngồi ngoài vỉa hè, du khách phải lấy ghế làm bàn hoặc bưng bát ăn. "Combo" mùa thu sẽ không thể thiếu một ly trà hay cà phê kèm một chút cốm mộc, cốm xào cùng vài quả chuối tiêu hoặc sấu chín ngâm. Đây là những món ăn đặc trưng mùa thu Hà Nội. Du khách có thể dễ dàng mua tại nhiều hàng rong hoặc các cửa hàng dọc phố Lý Quốc Sư trước mặt Nhà thờ lớn. Quanh khu vực nhà thờ, du khách có thể chọn các quán cà phê vỉa hè hoặc các quán "sang chảnh" hơn, ngắm Nhà thờ từ những căn gác, tùy phong cách. Nhà thờ lớn buổi sáng khá yên tĩnh. Những ngày tháng 10, đi qua các địa điểm nổi tiếng của Hà Nội như hồ Gươm, Nhà thờ Lớn, phố cổ, cầu Long Biên bạn sẽ bắt gặp rất nhiều người đến chụp ảnh, gồm cả du khách và người Hà Nội, với trang phục áo dài. Ánh nắng của mùa thu tạo nên những bức ảnh lung linh. Nếu muốn vắng vẻ, hãy chụp buổi sáng sớm, khi kết hợp đi dạo, muốn có những bức ảnh rực rỡ với ánh nắng vàng mùa thu, du khách nên chụp khoảng 9-10h. <br> <br>Du khách tới Hà Nội tháng 10 có cơ hội trải nghiệm nếp sống của người Hà Nội gần 100 năm trước ở nhà cổ 87 Mã Mây trong tour thực cảnh "Chuyện phố Hàng". Tour dài khoảng 45 phút, trình diễn vào cuối tuần. Trong tour, du khách được giới thiệu về nếp sống, hoạt động bán thuốc Đông y của người chủ, tham gia một số công đoạn như tán thuốc, vê thuốc, hơ ngải, xông hơi, thưởng thức món ăn dân dã. Sau khi có cái nhìn tổng quát về nghề thuốc Đông y, khách tham quan xem vở diễn "Chuyện phố Hàng" của các diễn viên Nhà hát Tuổi trẻ.' },
                { id: 3, title: 'Không gian thể thao cộng đồng hút giới trẻ phía Nam', author: 'Lan Anh', date: 'November 24, 2024', content: 'Không gian thể thao cộng đồng tại TP HCM, Cần Thơ và Đồng Nai vừa khai trương, thu hút nhiều bạn trẻ đến tập luyện mỗi ngày. Sân chơi mới thuộc chương trình "Không gian Thể thao Thanh niên - Tiếp năng lượng, bừng sức trẻ", do TCP Việt Nam cùng Trung ương Hội Liên hiệp Thanh niên (LHTN) Việt Nam và trung tâm Tình nguyện Quốc gia triển khai. Mục tiêu của chương trình là đồng hành với người dân, đặc biệt đối tượng thanh niên trong rèn luyện thể thao, nâng cao sức khỏe thể chất. Ba không gian thể thao tại mới đi vào hoạt động tại TP HCM (182 đường Lê Đức Thọ, phường 6, quận Gò Vấp), Cần Thơ (xã Thạnh Lộc, huyện Vĩnh Thạnh) và Đồng Nai (Trung tâm Văn hóa, Thể thao - Học tập cộng đồng xã Hố Nai 3, ấp Thanh Hóa, xã Hố Nai 3, huyện Trảng Bom) gồm cụm sân với diện tích tối thiểu là 1.000m2 mỗi sân.Các không gian thể thao được cải tạo, xây mới dựa trên nhu cầu tập luyện của cộng đồng tại địa phương, như TP HMC có 2 sân cầu lông và một số thiết bị tập thể dục, Đồng Nai có một sân pickleball, một sân bóng chuyền, một sân cầu lông cùng các trang thiết bị, Cần Thơ có sân bóng đá đáp ứng nhu cầu, đam mê chung của thanh niên địa phương. <br> <br> Nguyễn Nam (22 tuổi, Gò Vấp, TP HCM) sử dụng sân từ ngày khánh thành chia sẻ, khu vực luyện tập được cải tạo mới với màu sắc bắt mắt, thiết bị chất lượng, dành cho nhiều đối tượng khiến anh có cảm hứng luyện tập hơn. "Sáng sớm mình đi bộ và tập nhẹ, chiều lại chơi cầu lông. Duy trì trong nhiều ngày khiến mình cảm thấy nhiều năng lượng, không bị chây ì như trước", Nam nói. Anh Quang Minh (30 tuổi, xã Thạnh Lộc, Cần Thơ) thích môn bóng đá nhưng do sống xa trung tâm nên ít có cơ hội chơi. Khi không gian thể thao thanh niên tại Cần Thơ mở cửa hoạt động với sân bóng đá đạt chuẩn, anh Trung và những người bạn lập nhóm, giao lưu mỗi tuần. "Một sân bóng đá nhỏ từng là mơ ước của anh em trong xã. Bây giờ chúng tôi đã được thỏa đam mê, còn lập nhóm trên mạng xã hội, rủ nhau chơi thường xuyên", anh Minh cho hay. Từ ngày các không gian thể thao đi vào hoạt động các bạn trẻ miền Nam hưởng ứng tích cực, trở thành điểm hẹn thể thao vào cuối tuần. Cộng đồng ở nhiều tỉnh, thành phố tiếp cận dễ hơn với các môn thể thao "hot trend" như pickleball. Ở Đồng Nai, sự xuất hiện của sân chơi dành riêng cho bộ môn này khiến nhiều người thích thú. Lâm Nhi (29 tuổi, công nhân may) chia sẻ nhìn hình ảnh mọi người chơi pickleball trên mạng, muốn thử sức. <br> <br>Tuy nhiên khu vực cô sinh sống chưa có sân riêng cho môn này. "Bây giờ tôi đã được trải nghiệm không chỉ một môn mà nhiều môn, từ bóng chuyền, cầu lông... Đến sân lúc nào cũng đông vui, tràn ngập tiếng cười sau những giờ làm căng thẳng", Nhi chia sẻ. Tính đến nay, TCP Việt Nam và Trung ương Hội LHTN Việt Nam, Trung tâm Tình nguyện Quốc gia đã hoàn thành 8 công trình lần lượt tại Thanh Hóa, Đà Nẵng, Bắc Giang, Cần Thơ, Đồng Nai, TP HCM, Nghệ An, Bắc Ninh và dự kiến sẽ hoàn thành nâng cấp, sửa chữa thêm công trình tại Bình Dương trong năm 2024.'},
                { id: 4, title: 'Phở bò vào danh sách 20 món soup ngon nhất thế giới', author: 'Anh Minh', date: 'November 24, 2024', content:'Phở bò được nhiều khách quốc tế biết đến nhất trong ẩm thực Việt Nam, nằm trong top 20 món soup ngon hàng đầu thế giới do CNN chọn.<br> <br> Theo nhà nghiên cứu ẩm thực Janet Clarkson, tác giả cuốn Soup: A Global History (Lịch sử toàn cầu của món súp), soup là một trong những loại thực phẩm lâu đời, phổ biến nhất thế giới. Mỗi quốc gia sẽ có các món soup riêng, nổi bật, được du khách quốc tế yêu thích.<br> <br> Dựa vào các nghiên cứu của Janet, CNN đã đề cử 20 món soup ngon nhất thế giới (xếp theo thứ tự bảng chữ cái) thay lời gợi ý dành cho du khách. Trong danh sách, định nghĩa về soup được mở rộng hơn, chỉ các món ăn có nước hoặc được hầm nhừ trong nước. Và nước dùng phải có hương vị thơm ngon, là một thành phần quan trọng quyết định độ ngon của món ăn. <br> <br> Phở bò Việt Nam có nước dùng được ninh trong nhiều giờ với quế, hồi, các loại gia vị có công dụng làm ấm cơ thể để tạo nên "hương thơm tuyệt vời" cho món ăn. Phở cũng là món ăn được nhiều khách quốc tế biết đến nhất trong nền ẩm thực Việt.<br> <br> Việt Nam có nhiều phiên bản phở như phở bò, gà, tim cật, sốt vang, xào lăn. Tuy nhiên, nguyên bản nhất và được nhiều người ưa chuộng nhất vẫn là phở bò tái. Ngày nay, phở bò cũng được các đầu bếp thêm vào nhiều loại topping hơn để thực khách lựa chọn như bò chín, gân, gàu. <br> <br> Món soup đầu tiên được nhắc đến là Banga, món hạt cọ hầm nổi tiếng của người Nigeria. Các nguyên liệu nấu cùng còn có cá hun khói, thảo mộc, các loại gia vị thơm hoặc thêm các loại thịt, hải sản. <br> <br> Các đại diện khác tại châu Á cũng có mặt trong danh sách này gồm mì bò Lan Châu Trung Quốc, mì gạo mohinga Myanmar, mì gà cay ăn cùng trứng luộc Indonesia, tom yum Thái Lan, mì ramen tonkatsu Nhật Bản.<br> <br> Danh sách top 20 các món soup ngon trên thế giới được cập nhật liên tục qua các năm, phần lớn các món ăn trong top không thay đổi theo năm tháng, cho thấy được phần nào sự yêu thích của du khách với các món ăn truyền thống của các quốc gia. Năm nay, top 20 được công bố lần đầu vào tháng 1 và cập nhật lại danh sách vào 17/11. '},
                { id: 5, title: 'Kỹ thuật thở mặt trăng giúp dễ ngủ, sâu giấc', author: 'Thục Linh', date: 'November 24, 2024', content:'Kỹ thuật thở mặt trăng của Ấn Độ cổ đại được cho là phương pháp tự nhiên giúp giảm căng thẳng và dễ ngủ. <br><br> Theo thống kê, hơn một phần ba người trưởng thành toàn cầu không ngủ đủ 7 đến 8 tiếng mỗi đêm. Mất ngủ hoặc thiếu ngủ có thể gây ra tình trạng mệt mỏi, lờ đờ, uể oải vào ban ngày, ảnh hưởng đến chất lượng cuộc sống và công việc.<br> <br> Để cải thiện tình trạng này, tiến sĩ y tế Angie Tiwari, người sáng lập nền tảng yoga Unearthed, hướng dẫn kỹ thuật thở mặt trăng. Về cơ bản, thở mặt trăng là hít vào bằng mũi trái, đồng thời bịt mũi phải.<br> <br> Giống như các bài tập thở khác, thở mặt trăng tác động đến hệ thần kinh phó giao cảm, cơ quan điều hòa quá trình nghỉ ngơi và tiêu hóa. Kích hoạt hệ thần kinh này giúp cơ thể thư giãn, bởi nó làm giảm huyết áp và nhịp tim. Hoạt động của hệ thần kinh phó giao cảm cũng ức chế hệ thần kinh giao cảm, chịu trách nhiệm cho phản ứng chiến đấu hoặc bỏ chạy, từ đó tạo điều kiện cho giấc ngủ sâu. <br> <br> Trong tiếng Phạn, kỹ thuật này được gọi là chandra bhedana pranayama, hay "hơi thở xuyên trăng". Cái tên " thở mặt trăng" liên quan đến khái niệm năng lượng mặt trăng và mặt trời trong yoga.<br> <br> Angie Tiwar giải thích, phía bên trái cơ thể chứa năng lượng mặt trăng, còn phía bên phải là năng lượng mặt trời. Kết nối với bên phải mang lại năng lượng mạnh mẽ và phấn chấn, trong khi kết nối với bên trái giúp làm dịu và ổn định tinh thần.<br> <br> Quy luật thời gian trăng tròn cũng ảnh hưởng đến giấc ngủ. Tiến sĩ Elisabeth Philipps, chuyên gia dinh dưỡng từ Trung tâm Y tế Four-Five, cho biết trăng tròn làm giảm thời gian ngủ, ảnh hưởng giấc ngủ sâu và tăng thời gian cần thiết để một người chìm vào giấc ngủ.<br><br> Các nhà khoa học ở Thụy Sĩ phát hiện vào đêm trăng tròn, mọi người mất trung bình thêm 5 phút để thiếp đi. Nghiên cứu tương tự cũng cho thấy mọi người ngủ ít hơn trung bình 20 phút vào đêm trăng tròn. Ngoài ra, nồng độ melatonin, hormone giấc ngủ thiết yếu, ở cả nam và nữ đều thấp hơn vào những ngày trước và sau ngày rằm.<br> <br> Để có giấc ngủ ngon hơn, các chuyên gia khuyên mọi người sử dụng rèm chắn sáng, máy lọc không khí trong phòng ngủ, hạn chế thời gian sử dụng thiết bị điện tử và bổ sung magie glycinate. Các biện pháp khác bao gồm tập thể dục buổi tối và giữ chế độ ăn giàu trái cây, rau củ.'},
            ];
            
            const post = posts.find(p => p.id === parseInt(id));
            if (post) {
                this.post = post;
            } else {
                console.error('Không tìm thấy bài viết với ID:', id);
            }
        },
        loadComments() {
            const savedComments = localStorage.getItem('comments');
            this.comments = savedComments ? JSON.parse(savedComments) : [];
        },
        saveComments() {
            localStorage.setItem('comments', JSON.stringify(this.comments));
        },
        addComment() {
            const username = localStorage.getItem('username');
            if (!username) {
                Swal.fire({
                    icon: "warning",
                    title: "Oops...",
                    text: "Please log in to continue.",
                    position: 'top',
                    toast: true,
                    showConfirmButton: false,
                    timer: 3000,
                    customClass: {
                        popup: 'small-toast',
                    }
                });
                return;
            }

            if (!this.newComment.trim()) {
                Swal.fire({
                    icon: "warning",
                    title: "Oops...",
                    text: "Comment content cannot be empty!",
                    position: 'top',
                    toast: true,
                    showConfirmButton: false,
                    timer: 3000,
                    customClass: {
                        popup: 'small-toast',
                    }
                });
                return;
            }

            const newComment = {
                user: username,
                text: this.newComment.trim(),
                date: new Date().toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })
            };

            this.comments.push(newComment);
            this.newComment = ''; 
            this.saveComments();
        }
    }
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

/* Content */
.content .main-content.single {
    background: white;
    padding: 20px 50px;
    font-size: 1.1rem;
    border-radius: 5px;
}

.content .main-content.single .post-title {
    text-align: center;
    margin-bottom: 40px;
}

.content .sidebar.single {
    padding: 0px 10px;
}

.content .popular .post {
    border-top: 1px solid #e0e0e0;
    margin-top: 10px;
    padding-top: 10px;
}

.content .popular .post img {
    height: 60px;
    width: 75px;
    float: left;
    margin-right: 10px;
}

.comments-section {
    margin-top: 20px;
}

.comments-section h2 {
    font-size: 24px;
    margin-bottom: 15px;
}

.comments-section .text-input {
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.comments-section .btn {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
}

.comments-list .comment {
    margin-top: 15px;
}

.comments-list .comment p {
    margin: 5px 0;
}

.comments-list .comment hr {
    margin-top: 10px;
    border: 0;
    border-top: 1px solid #ccc;
}

/* Cập nhật màu sắc và font chữ của tiêu đề */
.popular .section-title {
    font-size: 24px;  /* Thay đổi kích thước font chữ của tiêu đề section */
    font-weight: bold;
    color: #333;  /* Thay đổi màu chữ của tiêu đề */
    margin-bottom: 20px;
}

/* Chỉnh sửa các bài viết trong Popular */
.popular .post {
    margin-bottom: 15px;  /* Tạo khoảng cách giữa các bài viết */
}

/* Cập nhật màu sắc và kích thước của tiêu đề bài viết */
.popular .post .title h4 {
    font-size: 14px;  /* Font chữ nhỏ lại */
    color: #555;  /* Thay đổi màu chữ */
    text-decoration: none;  /* Xóa gạch chân */
    transition: color 0.3s ease;  /* Hiệu ứng khi hover */
}

/* Thay đổi màu chữ khi hover */
.popular .post .title h4:hover {
    color: #007BFF;  /* Màu chữ khi hover */
}

/* Giảm kích thước ảnh trong các bài viết */
.popular .post img {
    max-width: 100%;  /* Giới hạn kích thước ảnh để vừa với container */
    height: auto;
}


</style>