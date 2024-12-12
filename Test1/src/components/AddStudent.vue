<template>
  <div>
    <h3>Thêm sinh viên</h3>
    <form @submit.prevent="submitForm">
      <input v-model="name" placeholder="Tên" required />
      <input v-model.number="age" placeholder="Tuổi" required type="number" />
      <input v-model.number="gpa" placeholder="Điểm trung bình" required type="number" />
      <button type="submit">Thêm sinh viên</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      age: null,
      gpa: null,
    };
  },
  methods: {
    submitForm() {
      const newStudent = { name: this.name, age: this.age, gpa: this.gpa };
      this.$emit("add-student", newStudent);
      this.name = "";
      this.age = null;
      this.gpa = null;
    },
  },
};
</script>
