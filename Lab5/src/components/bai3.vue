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

form {
    background-color: #f8f9fa; 
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    max-width: 600px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
}

h1 {
    color: #343a40;
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
}

form label {
    font-weight: bold;
    margin-bottom: 8px;
    display: block;
    color: #495057;
}

form input {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    width: 100%; 
    margin-bottom: 15px;
    transition: border-color 0.3s ease;
}

form input:focus {
    border-color: #80bdff;
    outline: none;
    box-shadow: 0 0 5px rgba(128, 189, 255, 0.5);
}

.info-display {
    background-color: #343a40;
    color: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    width: 100%;
    margin-left: auto; 
    margin-right: auto; 
    padding: 20px; 
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
    color: white;
}

.mb-3 {
    margin-bottom: 20px;
}

form input:hover {
    border-color: #6c757d;
}

</style>