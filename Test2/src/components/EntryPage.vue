<template>
    <div>
      <h2>Quản lý Sách</h2>
      <input 
        type="text" 
        v-model="searchQuery" 
        placeholder="Tìm kiếm sách" 
      />
      <BookForm @add-book="handleAddBook" :editingBook="editingBook" />
      <BookList 
        :books="searchBooks()" 
        @delete-book="handleDeleteBook" 
        @edit-book="handleEditBook" 
      />
    </div>
  </template>
  
  <script>
  import BookList from "../components/BookList.vue";
  import BookForm from "../components/BookForm.vue";
  
  export default {
    components: { BookList, BookForm },
    data() {
      return {
        books: [
          { title: "Lập trình Vue.js", author: "Nguyễn Văn A", quantity: 3 },
          { title: "JavaScript Cơ Bản", author: "Trần Văn B", quantity: 5 },
          { title: "HTML & CSS", author: "Lê Văn C", quantity: 2 }
        ],
        editingBook: null, 
        searchQuery: "" 
      };
    },
    methods: {
      searchBooks() {
        if (!this.searchQuery) return this.books; 
        return this.books.filter(book =>
          book.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
      handleAddBook(book) {
        if (this.editingBook) {
          Object.assign(this.editingBook, book);
          this.editingBook = null;
        } else {
          this.books.push(book);
        }
      },
      handleDeleteBook(index) {
        this.books.splice(index, 1); 
      },
      handleEditBook(book) {
        this.editingBook = book; 
      }
    }
  };
  </script>
  