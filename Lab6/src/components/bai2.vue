<template>
    <h1>Hiển thị mùa theo tháng</h1>
    <br>
    <input type="number" v-model="month" placeholder="Nhập tháng tại đây">
    <br>

    <h3 v-if="month !==null && month >= 1 && month <= 3">Mùa xuân</h3>
    <h3 v-else-if="month !==null && month >= 4 && month <= 6">Mùa hạ</h3>
    <h3 v-else-if="month !==null && month >= 7 && month <= 9">Mùa thu</h3>
    <h3 v-else-if="month !==null && month >= 10 && month <= 12">Mùa đông</h3>
    <h3 v-else-if="month !==null">Mời bạn nhập tháng từ 1 đến 12 !!!</h3>
</template>

<script setup>
    import {ref} from 'vue';
    const month = ref(null);
</script>

<style>
    h1 {
        color: red;
        font-weight: 600;
    }

    h3 {
        color: red;
        font-weight: 600;
    }
</style>