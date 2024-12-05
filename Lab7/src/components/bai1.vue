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
const jobs = ref([]);

const addList = () => {
    if (newToDo.value.trim()) { 
        jobs.value.push(newToDo.value.trim());
        newToDo.value = ''; 
    }
};

const removeList = (index) => {
    jobs.value.splice(index, 1);
};

</script>

<style scoped>
.container {
    width: 1000px; 
    display: flex; 
    justify-content: space-between; 
    align-items: flex-start;
    gap: 20px;
}

form {
    flex: 1; 
    max-width: 300px; 
}

form h3 {
    font-size: 20px; 
    margin-bottom: 15px;
}

form input,
form button {
    width: 100%; 
    padding: 10px;
    margin-bottom: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px; 
}

form button {
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    border: none;
}

form button:hover {
    background-color: #0056b3; 
}

ul {
    flex: 2; 
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
    border-radius: 5px; 
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
    background-color: #c82333; 
}
</style>

