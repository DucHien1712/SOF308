<template>
    <div class="col-sm-4 p-5">
        <h1 class="text-center">Quản lý công việc</h1>
        
        <!-- Form thêm công việc -- > -->
        <form @submit.prevent="addList">
            <div class="mb-3">
                <label class="form-label">Tên công việc: </label>
                <input type="text" class="form-control" v-model="newToDo" placeholder="Nhập tên công việc">
            </div>
            <button type="submit" class="btn btn-primary">Thêm công việc</button>
        </form>
            
            <!--  Danh sách công việc  -->
        <h1>Danh sách công việc</h1>
        <ul class="list-group mt-4">
            <li class="list-group-item d-flex justify-content-between align-items-center" v-for="(job, index) in jobs"
                :key="index">
                {{ job }}
                <button class="btn btn-danger btn-sm" @click="removeList(index)">Xoá</button>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const newToDo = ref('');
const jobs = ref(['Ăn sáng', 'Đi học', 'Chơi bóng rổ'
]);

const addList = () => {
    if (newToDo.value.trim()) { //loại bỏ khoảng trắng ở đầu và cuối của chuỗi
        jobs.value.push(newToDo.value.trim());
        newToDo.value = ''; // Reset input field
    }
};

const removeList = (index) => {
    jobs.value.splice(index, 1);
};

</script>

<style scoped>
.container {
    width: 1000px; /* Độ rộng container chính */
    display: flex; /* Dùng Flexbox để canh chỉnh */
    justify-content: space-between; /* Chia đều không gian giữa các phần */
    align-items: flex-start;
    gap: 20px; /* Khoảng cách giữa form và danh sách */
}

/* Form thêm công việc */
form {
    flex: 1; /* Chiếm không gian vừa đủ */
    max-width: 300px; /* Giới hạn chiều rộng form */
}

form h3 {
    font-size: 20px; /* Kích thước tiêu đề */
    margin-bottom: 15px;
}

form input,
form button {
    width: 100%; /* Chiều rộng full container */
    padding: 10px;
    margin-bottom: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px; /* Bo góc */
}

form button {
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    border: none;
}

form button:hover {
    background-color: #0056b3; /* Màu khi hover */
}

/* Danh sách công việc */
ul {
    flex: 2; /* Chiếm không gian lớn hơn */
    width: 100%;
}

ul h1 {
    font-size: 20px;
    margin-bottom: 15px;
}

.list-group-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    border-radius: 5px; /* Bo góc nhẹ */
}

.list-group-item button {
    padding: 5px 10px;
    font-size: 14px;
    background-color: #dc3545;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.list-group-item button:hover {
    background-color: #c82333; /* Màu khi hover */
}
</style>

