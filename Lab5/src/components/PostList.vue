<template>
    <div class="container">
        <h2>Danh sách bài viết</h2>
        <div v-for="(post, index) in posts" :key="index" :class="{ 'highlighted': post.title.length > 20 }"
            :style="{ backgroundcolor: post.backgroundcolor, color: post.textcolor }" class="post">
            <h3 class="text-success">Tiêu đề:{{ post.title }}</h3>
            <h4 class="text-danger">Tác giả:{{ post.author }}</h4>
            <p>Nội dung:{{ post.content }}</p>
        </div>
    </div>
</template>
    
<script>
    export default {
    name: "PostList",
    props: {
    posts: {
    type: Array,
    required: true
    
    }
    
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
    width: 800px;
    margin: 20px auto;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border: 1px solid #e0e0e0;
}

h3.text-success {
    color: black;
    margin-bottom: 5px;
    font-size: 1.5em;
}

h4.text-danger {
    color: black;
    margin-bottom: 10px;
    font-size: 1.2em;
}

.post {
    padding: 15px;
    margin-bottom: 20px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 6px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
}

.post:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.highlighted {
    border-left: 5px solid #007bff;
    background-color: #e7f3ff;
}

</style>