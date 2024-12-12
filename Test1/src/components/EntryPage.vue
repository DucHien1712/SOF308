<template>
  <div>
    <h1>Quản lý sinh viên</h1>
    <div>
      <router-link to="/">Trang chủ</router-link>
      <router-link to="/notification">Trang thông báo</router-link>
    </div>

    <!-- Form thêm sinh viên -->
    <AddStudent @add-student="addStudent" />

    <!-- Lọc sinh viên -->
    <FilterStudent :students="students" />

    <!-- Xóa sinh viên -->
     <h3>Xoá sinh viên</h3>
    <div>
      <input v-model="deleteName" placeholder="Nhập tên cần xóa" />
      <button @click="deleteStudent">Xóa</button>
    </div>

    <!-- Hiển thị danh sách sinh viên -->
    <StudentList :students="students" />
  </div>
</template>

<script>
import AddStudent from "../components/AddStudent.vue";
import FilterStudent from "../components/FilterStudent.vue";
import StudentList from "../components/StudentList.vue";

export default {
  components: {
    AddStudent,
    FilterStudent,
    StudentList,
  },
  data() {
    return {
      students: [
        { name: "An", age: 20, gpa: 8.5 },
        { name: "Bình", age: 22, gpa: 9.0 },
        { name: "Chi", age: 19, gpa: 7.5 },
      ],
      deleteName: "",
    };
  },
  methods: {
    addStudent(newStudent) {
      this.students.push(newStudent);
    },
    deleteStudent() {
      this.students = this.students.filter(student => student.name !== this.deleteName);
      this.deleteName = "";
    },
  },
};
</script>
