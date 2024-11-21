<script setup>
import bai1 from './components/bai1.vue'
import bai2 from './components/bai2.vue'
import bai3 from './components/bai3.vue'

import { ref } from 'vue'
import CreatePost from './components/CreatePost.vue'
import PostList from './components/PostList.vue'

const posts = ref([])

function addPost(post) {
posts.value.push(post)
}
</script>

<template>
    <div id="app">
        <h1>Ứng dụng Blog với VueJS</h1>
        <br>
        <CreatePost @add-post="addPost"></CreatePost>
        <br>
        <PostList :posts="posts"></PostList>
    </div>
</template>

<style>
    h1 {
        text-align: center;
    }
</style>