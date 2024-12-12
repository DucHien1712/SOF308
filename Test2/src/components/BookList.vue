<template>
    <div>
      <h3>Danh sách sách</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Tên sách</th>
            <th>Tác giả</th>
            <th>Số lượng</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(book, index) in books" :key="index">
            <td>{{ book.title }}</td>
            <td>{{ book.author }}</td>
            <td>{{ book.quantity }}</td>
            <td>
              <button @click="$emit('edit-book', book)">Sửa</button>
              <button @click="$emit('delete-book', index)">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    props: ["books"]
  };
  </script>
  