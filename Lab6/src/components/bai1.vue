<template>
    <h1>Nhập điểm của bạn</h1>
    <br>
    <input type="number" v-model="point" min="0" max="10" placeholder="Nhập tại đây">
    <br>
    <h4 v-if="point !== null && point >= 9">Học lực: Xuất sắc</h4>
    <h4 v-else-if="point !== null && point >= 8">Học lực: Giỏi</h4>
    <h4 v-else-if="point !== null && point >= 6.5">Học lực: Khá</h4>
    <h4 v-else-if="point !== null && point >= 5">Học lực: Trung Bình</h4>
    <h4 v-else-if="point !== null">Học lực: Yếu</h4>
</template>

<script setup>
import { ref } from 'vue';
const point = ref(null);
</script>

<style>
    h1 {
        color: red;
        font-weight: 600;
    }
    
    h4 {
        color: red;
        font-weight: 600;
    }
</style>
