<template>
    <div v-if="!isLoggedIn" class="p-5 col-sm-4">
        <h3> Đăng nhập</h3>
        <form @submit.prevent="login">
            <div class="mb-3 mt-3">
                <label>Email : </label>
                <input type="email" class="form-control" v-model="email"
                placeholder="Nhập email">
                <p v-if="emailError" style="color: red;">{{ emailError }}</p>
             </div>
            <div class="mb-3">
                <label>Mật khẩu: </label>
                <input type="password" class="form-control" v-model="password"
                placeholder="Nhập mật khẩu">
                <p v-if="passwordError" style="color: red;">{{ passwordError }}</p>
            </div>
            <button type="submit" class="btn btn-primary">Đăng nhập</button>
        </form>
    </div>
    
    <div v-else class="p-5 col-sm-5">
        <h3>Welcome, {{ email }} !</h3>
        <button @click="logout" class="btn btn-primary">Đăng xuất</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isLoggedIn = ref(false);
const email = ref('');
const password = ref('');
const emailError = ref( );
const passwordError = ref('');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const login = () => {
    // Reset thông điệp lỗi
    emailError.value = '';
    passwordError.value='';

    // Validate email
    if (!email.value) {
        emailError.value = 'Mời bạn nhập Email !!! ';
    } else if (!emailRegex.test(email.value)) {
        emailError.value = 'Vui lòng nhập email hợp lệ !!! ';

    }

    // Validate mật khẩu
    if (!password.value) {
        passwordError.value = 'Mời bạn nhập Mật khẩu !!!';
    }

    // Nếu không có lỗi, xử lý login
    if (!emailError.value && !passwordError.value) {
        isLoggedIn.value = true;
    }
}

const logout = () => {
    isLoggedIn.value = false;
    email.value = '';
    password.value= '';
    emailError.value = '';
    passwordError.value= '';
}
</script>

<style scoped>
/* Tổng thể */
div {
    font-family: Arial, sans-serif;
    color: #333; /* Màu chữ cơ bản */
}

/* Tiêu đề */
h3 {
    font-size: 24px; /* Cỡ chữ lớn */
    font-weight: bold;
    margin-bottom: 20px;
    color: #007bff; /* Màu xanh chủ đạo */
}

/* Form */
form {
    border: 1px solid #ccc; /* Viền nhạt xung quanh form */
    border-radius: 8px; /* Bo góc nhẹ */
    padding: 20px; /* Khoảng cách bên trong */
    background-color: #f9f9f9; /* Màu nền nhạt */
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Hiệu ứng đổ bóng nhẹ */
}

label {
    font-size: 16px; /* Cỡ chữ của nhãn */
    margin-bottom: 5px;
}

input {
    font-size: 14px; /* Cỡ chữ của input */
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc; /* Viền nhạt */
    border-radius: 4px; /* Bo góc input */
    width: 100%; /* Full chiều ngang */
    box-sizing: border-box; /* Không bị tràn nội dung */
}

input:focus {
    border-color: #007bff; /* Đổi màu viền khi focus */
    outline: none; /* Bỏ viền mặc định */
}

/* Thông báo lỗi */
p {
    font-size: 14px; /* Cỡ chữ nhỏ hơn */
    margin-top: 5px;
    margin-bottom: 0;
}

/* Nút */
button {
    font-size: 16px;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    background-color: #007bff; /* Màu nền xanh chủ đạo */
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease; /* Hiệu ứng chuyển màu */
}

button:hover {
    background-color: #0056b3; /* Màu đậm hơn khi hover */
}

button:focus {
    outline: none; /* Bỏ viền mặc định khi nhấn */
}

/* Phần Welcome */
.welcome-message {
    font-size: 18px;
    margin-bottom: 15px;
    color: #333;
}
</style>
