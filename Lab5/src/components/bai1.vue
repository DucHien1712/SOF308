<template>
    <h1>{{ hi }}</h1>
    <br>
    <button @click="change">Click để thay đổi</button>
</template>

<script setup>
    import {ref} from 'vue';

    const hi = ref('Welcome VueJS');
    const change = () => {
        hi.value = 'Hello Class';
    };
</script>

<style>
    h1 {
        color: red;
    }
</style>