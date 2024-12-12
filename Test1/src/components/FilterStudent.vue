<template>
  <div>
    <h3>Lọc sinh viên</h3>
    <input v-model.number="gpaThreshold" placeholder="Nhập ngưỡng GPA" type="number" />
    <button @click="filterStudents">Lọc</button>

    <table border="1" v-if="filteredStudents.length">
      <thead>
        <tr>
          <th>Tên</th>
          <th>Tuổi</th>
          <th>Điểm trung bình</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in filteredStudents" :key="student.name">
          <td>{{ student.name }}</td>
          <td>{{ student.age }}</td>
          <td>{{ student.gpa }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["students"],
  data() {
    return {
      gpaThreshold: 0,
      filteredStudents: [],
    };
  },
  methods: {
    filterStudents() {
      this.filteredStudents = this.students.filter(student => student.gpa > this.gpaThreshold);
    },
  },
};
</script>
