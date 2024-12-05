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

div {
    font-family: Arial, sans-serif;
    color: #333; 
}

h3 {
    font-size: 24px; 
    font-weight: bold;
    margin-bottom: 20px;
    color: #007bff; 
}

form {
    border: 1px solid #ccc;
    border-radius: 8px; 
    padding: 20px; 
    background-color: #f9f9f9; 
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 
}

label {
    font-size: 16px;
    margin-bottom: 5px;
}

input {
    font-size: 14px; 
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc; 
    border-radius: 4px; 
    width: 100%; 
    box-sizing: border-box; 
}

input:focus {
    border-color: #007bff; 
    outline: none; 
}

p {
    font-size: 14px; 
    margin-top: 5px;
    margin-bottom: 0;
}

button {
    font-size: 16px;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    background-color: #007bff; 
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease; 
}

button:hover {
    background-color: #0056b3;
}

button:focus {
    outline: none; 
}

.welcome-message {
    font-size: 18px;
    margin-bottom: 15px;
    color: #333;
}
</style>
