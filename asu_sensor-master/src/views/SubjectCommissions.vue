<template>
  <div class="subjectcommissions">
    <subject-commissions-wrapper />
  </div>
</template>

<script>
import SubjectCommissionsWrapper from "@/components/SubjectCommisions/SubjectCommissionsWrapper";
export default {
name: "SubjectCommissions",
  components: {SubjectCommissionsWrapper}
}
</script>

<style scoped>
  .subjectcommissions{
    height: 100vh;
  }
</style>
