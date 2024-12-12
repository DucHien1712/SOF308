<template>
  <div>
    <h3>Danh sách sinh viên</h3>
    <table border="1">
      <thead>
        <tr>
          <th>Tên</th>
          <th>Tuổi</th>
          <th>Điểm trung bình</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.name">
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
};
</script>
