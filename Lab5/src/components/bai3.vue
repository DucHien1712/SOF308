<template>
    <div class="col-sm-8">
        <h1>Thông tin cá nhân</h1>
        <form class="form">
            <div class="mb-3">
                <label>Họ và Tên:</label>
                <input v-model="userInfo.name" type="text" class="form-control" placeholder="Nhập họ và tên" />
            </div>
            <div class="mb-3">
                <label>Tuổi:</label>
                <input v-model="userInfo.age" type="number" class="form-control" placeholder="Nhập tuổi" />
            </div>
            <div class="mb-3">
                <label>Email:</label>
                <input v-model="userInfo.email" type="email" class="form-control" placeholder="Nhập email" />
            </div>
        </form>


        <!-- Hiển thị thông tin ngay sau khi nhập -->
        <div class="info-display mt-4 p-3 bg-dark text-white rounded">
            <h2>Thông tin đã nhập:</h2>
            <p><strong>Họ và Tên:</strong> {{ userInfo.name }}</p>
            <p><strong>Tuổi:</strong> {{ userInfo.age }}</p>
            <p><strong>Email:</strong> {{ userInfo.email }}</p>
        </div>
    </div>
</template>


<script setup>
import { reactive } from 'vue';


// Khởi tạo đối tượng thông tin người dùng sử dụng reactive để tạo reactivity
const userInfo = reactive({
    name: '',
    age: null,
    email: ''
});
</script>

<style scoped>

.form {
    width: 800px;
    margin: 0 auto;
}
/* CSS cho khung form */
form {
    background-color: #f8f9fa; /* Nền sáng */
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    max-width: 600px; /* Tăng chiều rộng tối đa */
    width: 100%; /* Chiếm toàn bộ chiều rộng container */
    margin-left: auto; /* Căn giữa */
    margin-right: auto; /* Căn giữa */
}

/* CSS cho tiêu đề chính */
h1 {
    color: #343a40;
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
}

/* CSS cho nhãn (label) */
form label {
    font-weight: bold;
    margin-bottom: 8px;
    display: block;
    color: #495057;
}

/* CSS cho ô nhập liệu */
form input {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    width: 100%; /* Đảm bảo chiều rộng ô nhập liệu theo form */
    margin-bottom: 15px;
    transition: border-color 0.3s ease;
}

form input:focus {
    border-color: #80bdff;
    outline: none;
    box-shadow: 0 0 5px rgba(128, 189, 255, 0.5);
}

/* CSS cho phần hiển thị thông tin */
.info-display {
    background-color: #343a40;
    color: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 600px; /* Tăng chiều rộng tối đa */
    width: 100%; /* Chiếm toàn bộ chiều rộng container */
    margin-left: auto; /* Căn giữa */
    margin-right: auto; /* Căn giữa */
    padding: 20px; /* Tăng khoảng cách bên trong */
}

.info-display h2 {
    font-size: 20px;
    border-bottom: 2px solid #495057;
    padding-bottom: 10px;
    margin-bottom: 15px;
}

.info-display p {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 8px;
}

.info-display p strong {
    color: #ffc107;
}

/* Tùy chỉnh khoảng cách giữa các phần */
.mb-3 {
    margin-bottom: 20px;
}

/* Hiệu ứng hover cho ô nhập liệu */
form input:hover {
    border-color: #6c757d;
}

</style>