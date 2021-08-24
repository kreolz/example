<template>
  <div class="timetable-teacher-wrapper">
    <div class="teacher-litter">
      <base-touche-panel
          v-for="litter in litters" :key="litter"
          :title="litter"
          @click.native="setActiveLitter(litter)"
          :class="{'active': litter==activeLitter}"
          class="active-blue"
          width="75px"
          height="75px"
      ></base-touche-panel>
    </div>
    <div class="teacher-list">
      <h3>Список преподавателей</h3>
      <h4 v-if="activeLitter==''">Для начала выберите фильтр для подгрузки преподавателей</h4>
      <h4 v-if="teachersByLitter.length==0">Преподавайтелей по выбранному фльтру не найдены</h4>
      <div v-for="teacher in teachersByLitter" :key="teacher.id">
        <div class="teacher-item" @click="setActiveTeacher(teacher)">
          {{teacher.lastName}} {{teacher.firstName[0]}}. {{teacher.patronymic[0]}}.
          <span class="subtitle-1">{{teacher.position}}, {{teacher.academicStatus}}</span>
        </div>
      </div>
    </div>
    <v-dialog
        v-model="dialogTT"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
    >
      <v-card>
        <time-table-main :valueTimeTable="activeTeacher" typeTimeTable="Teacher"  @exit="exit"/>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import BaseTouchePanel from "@/components/baseComponents/BaseTouchPanel";
import TimeTableMain from "@/components/TimeTable/TimeTableMain";
export default {
  name: "TimeTableTeacherWrapper",
  components: {TimeTableMain, BaseTouchePanel},
  data(){
    return{
      dialogTT: false,
      activeLitter: '',
      litters: 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ',
      activeTeacher: '',
    }
  },
  methods:{
    setActiveLitter(litter){
      this.activeLitter = litter
    },
    setActiveTeacher(teacher){
      this.activeTeacher = {
        id: teacher.id,
        name: `${teacher.lastName} ${teacher.firstName[0]}. ${teacher.patronymic[0]}.`
      }
      this.dialogTT = true
    },
    exit(){
      this.dialogTT = false
    }
  },
  computed: {
    ...mapState('catalog', {
      teachersTimeTable: 'teachersTimeTable'
    }),
    teachersByLitter(){
      return this.teachersTimeTable.filter(teacher => teacher.lastName.toLowerCase()[0]==this.activeLitter.toLowerCase())
    }
  }
}
</script>

<style scoped>
  .timetable-teacher-wrapper{
    display: grid;
    grid-template-columns: 2fr 2fr;
    grid-template-rows: 1fr;
  }
  .teacher-litter{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .teacher-list{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
</style>
