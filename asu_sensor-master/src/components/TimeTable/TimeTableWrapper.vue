<template>
  <div class="time-table-wrapper">
        <router-view name="timetable">
        </router-view>
  </div>
</template>

<script>
export default {
  name: "TimeTableWrapper"
}
</script>

<style scoped>
  .time-table-wrapper{
    height: 100%;
  }
</style>
