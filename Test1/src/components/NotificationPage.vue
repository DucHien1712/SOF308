<template>
    <div>
      <router-link to="/">Trang chủ</router-link>
      <router-link to="/notification">Trang thông báo</router-link>
    </div>

    <div>
      <h1>Thông báo</h1>
      <input v-model="searchName" placeholder="Nhập tên sinh viên" />
      <button @click="searchStudents">Tìm kiếm</button>
  
      <table border="1" v-if="filteredStudents.length">
        <thead>
          <tr>
            <th>Tên</th>
            <th>Tuổi</th>
            <th>Điểm trung bình</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in filteredStudents" :key="student.name">
            <td>{{ student.name }}</td>
            <td>{{ student.age }}</td>
            <td>{{ student.gpa }}</td>
            <td>
              <button @click="notifyStudent(student)">Gửi thông báo</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchName: "",
        students: [
          { name: "An", age: 20, gpa: 8.5 },
          { name: "Bình", age: 22, gpa: 9.0 },
          { name: "Chi", age: 19, gpa: 7.5 },
        ],
        filteredStudents: [],
      };
    },
    methods: {
      searchStudents() {
        this.filteredStudents = this.students.filter(student =>
          student.name.includes(this.searchName)
        );
      },
      notifyStudent(student) {
        alert(`Thông báo cho sinh viên ${student.name}, DTB là ${student.gpa}`);
      },
    },
  };
  </script>
  