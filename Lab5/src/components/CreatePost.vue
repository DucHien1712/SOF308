<template>
    <div class="container">
        <h2>Tạo bài viết mới</h2>
        <input v-model="title" placeholder="Tiêu đề bài viết" />
        <input v-model="author" placeholder="Tên tác giả" />
        <textarea v-model="content" placeholder="Nội dung bài viết"></textarea>
        <button @click="submitPost">Đăng bài</button>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    // Sử dụng defineEmits để emit sự kiện
    const emit = defineEmits(['add-post'])

    const title = ref('')
    const content = ref('')
    const author = ref('')

    function submitPost() {
    if (title.value && content.value && author.value) {
    const newPost = {
    title: title.value,
    content: content.value,
    author: author.value

    }

    // Gửi sự kiện 'add-post' với dữ liệu của bài viết
    emit('add-post', newPost)

    // Reset fields
    title.value =
    content.value
    author.value

    }
}
</script>

<style>

/* Global Styles (áp dụng chung cho cả 2 file) */
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f9;
    color: #333;
    margin: 0;
    padding: 0;
    line-height: 1.6;
}

.container {
    width: 700px;
    margin: 20px auto;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border: 1px solid #e0e0e0;
}

h2 {
    font-size: 1.8em;
    color: #007bff;
    text-align: center;
    margin-bottom: 20px;
}

input, textarea {
    width: 100%;
    margin-bottom: 15px;
    padding: 12px;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 6px;
    box-sizing: border-box;
    transition: border-color 0.3s, box-shadow 0.3s;
}

input:focus, textarea:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    outline: none;
}

textarea {
    height: 150px;
    resize: none;
}

button {
    width: 100%;
    padding: 12px;
    font-size: 1em;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
}

button:hover {
    background-color: #0056b3;
}

button:active {
    transform: scale(0.98);
}

button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}

</style>