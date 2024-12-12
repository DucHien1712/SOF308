<template>
    <div>
      <h3>{{ editingBook ? "Sửa Sách" : "Thêm Sách" }}</h3>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="title">Tên sách:</label>
          <input id="title" v-model="formData.title" required />
        </div>
        <div>
          <label for="author">Tác giả:</label>
          <input id="author" v-model="formData.author" required />
        </div>
        <div>
          <label for="quantity">Số lượng:</label>
          <input id="quantity" type="number" v-model.number="formData.quantity" required />
        </div>
        <button type="submit">{{ editingBook ? "Cập nhật" : "Thêm" }}</button>
        <button v-if="editingBook" type="button" @click="cancelEdit">Hủy</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    props: ["editingBook"],
    data() {
      return {
        formData: { title: "", author: "", quantity: 1 }
      };
    },
    watch: {
      editingBook: {
        immediate: true,
        handler(newBook) {
          if (newBook) {
            this.formData = { ...newBook };
          } else {
            this.resetForm();
          }
        }
      }
    },
    methods: {
      handleSubmit() {
        this.$emit("add-book", { ...this.formData });
        this.resetForm();
      },
      resetForm() {
        this.formData = { title: "", author: "", quantity: null };
      },
      cancelEdit() {
        this.$emit("add-book", null);
        this.resetForm();
      }
    }
  };
  </script>
  