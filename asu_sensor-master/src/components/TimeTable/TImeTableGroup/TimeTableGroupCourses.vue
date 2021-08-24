<template>
    <div class="courses">
      <div
          v-for="course in courses"
          :key="course"
          class="course"
          :class="{'active': true}"
          @click="getGroupByCourse(course)"
      >
        {{course}} курс
      </div>
    </div>
</template>

<script>
export default {
name: "TimeTableGroupCourses",
  data(){
    return{
      courses: [1, 2, 3, 4, 5],
    }
  }
}
</script>

<style scoped>

</style>
