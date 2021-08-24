<template>
  <div class="type-timetable-wrapper">
    <router-link v-for="item in typeTimeTable"  :to="item.url" :key="item.id" style="text-decoration: none">
      <base-touche-panel
          :title="item.name"
          :icon="item.icon"
          size-icon="large"
          width="200px"
          height="200px"
      />
    </router-link>
  </div>
</template>

<script>
import BaseTouchePanel from "@/components/baseComponents/BaseTouchPanel";
export default {
  name: "TimeTableType",
  components: {BaseTouchePanel},
  data() {
    return {
      typeTimeTable: [
        {
          id: 1,
          name: `Группа`,
          url: `timetable/groups`,
          color: ``,
          icon: `mdi-account-group-outline`,
        },
        {
          id: 2,
          name: `Аудитория`,
          url: `timetable/rooms`,
          color: ``,
          icon: `mdi-door`,
        },
        {
          id: 3,
          name: `Преподаватель`,
          url: `timetable/teachers`,
          color: ``,
          icon: `mdi-school-outline`,
        },
        {
          id: 4,
          name: `Аудитории с ПК`,
          url: `timetable/pc`,
          color: ``,
          icon: `mdi-laptop`,
        }
      ]
    }
  }
}
</script>

<style scoped>
.type-timetable-wrapper{
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  width: 80%;
}
.type-timetable-item{
  width: 200px;
  height: 200px;
  background: white;
  border-radius: 30px;
  color: #0399ee;
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 30px;
  text-decoration: none;
  box-shadow: 0 0 10px #d9d9d9;
}
.type-timetable-item:hover{
  box-shadow: 0 0 30px #d2d2d2;
  transition: box-shadow .4s ease-in-out;
}
.type-timetable-item .icon{

}
</style>
