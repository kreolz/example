<template>
  <div class="timetable-group">
    <div class="courses">
      <base-touche-panel
          v-for="course in courses"
          :key="course"
          :class="{'active': course===activeCourse}"
          @click.native="setActiveCourse(course)"
          :title="course.toString()+` курс`"
          class="active-blue"
      />
    </div>
    <div class="groups">
      <base-touche-panel
         v-for="group in groupsByActiveCourse"
         :key="group.id"
         :class="{'active': group.id===activeGroup.id}"
         @click.native="setActiveGroup(group)"
         :title="group.name"
         class="active-red"
      />
    </div>
    <v-dialog
              v-model="dialogTT"
              fullscreen
              hide-overlay
              transition="dialog-bottom-transition"
    >
      <v-card>
        <time-table-main orientation-time-table="Vertical" :valueTimeTable="activeGroup" typeTimeTable="Group"  @exit="exit"/>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {mapState} from "vuex";
import TimeTableMain from "@/components/TimeTable/TimeTableMain";
import BaseTouchePanel from "@/components/baseComponents/BaseTouchPanel";

export default {
  name: "TimeTableGroupWrapper",
  components: {BaseTouchePanel , TimeTableMain},
  data(){
    return{
      courses: [1, 2, 3, 4, 5],
      activeCourse: 1,
      animationFilterGroups: false,
      activeGroup: {},
      dialogTT: false,
    }
  },
  computed:{
    ...mapState('catalog', {
      groups: 'groups'
    }),
    groupsByActiveCourse() {
      this.swapFilterGroups()
        let tmpGroups = this.groups.filter(group => group.course == this.activeCourse)
      this.swapFilterGroups()
      return tmpGroups
    }
  },
  methods:{
    exit(){
      this.dialogTT = false
    },
    setActiveCourse(course){
      this.activeCourse = course
    },
    setActiveGroup(group){
      this.dialogTT = true
      this.activeGroup = group
    },
    swapFilterGroups(){
      this.animationFilterGroups = !this.animationFilterGroups
    }
  }
}
</script>

<style scoped>
 .timetable-group{
   display: grid;
   grid-template-columns: 1fr 5fr;
   padding: 25px;
 }
 .courses{
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   align-content: flex-start;
   gap: 10px;
 }
 .course{
   width: 100px;
   height: 100px;
   border-radius: 10px;
   box-shadow: 0 0 10px #d9d9d9;
   font-weight: 500;
   display: flex;
   justify-content: center;
   align-items: center;
   color: rgba(0, 0, 0, 0.87);
   position: relative;
 }
 .course.active::after{
   position: absolute;
   bottom: 0;
   right: 0;
   width: 45px;
   height: 45px;
   content: '';
   border-radius: 50px 0 10px 0;
   background: rgb(57, 137, 210);
   background: linear-gradient(45deg, rgba(25,118,210,1) 0%, rgba(3,153,238,1) 80%);
   background: -webkit-linear-gradient(45deg, rgba(25,118,210,1) 0%, rgba(3,153,238,1) 80%);
   animation: animationActiveCourse .3s ease-in-out;
 }
 @keyframes animationActiveCourse {
    from{
      width: 10px;
      height: 10px;
    }
   20%{
     width: 20px;
     height: 20px;
   }
   40%{
     width: 40px;
     height: 40px;
   }
   60%{
     width: 60px;
     height: 60px;
   }
   80%{
     width: 55px;
     height: 55px;
   }
   to{
     width: 45px;
     height: 45px;
   }
 }
 .groups{
   display: flex;
   justify-content: normal;
   align-items: baseline;
   align-content: flex-start;
   flex-wrap: wrap;
   gap: 10px;
 }
 .group{
   width: 100px;
   height: 100px;
   border-radius: 10px;
   box-shadow: 0 0 10px #d9d9d9;
   font-weight: 500;
   display: flex;
   justify-content: center;
   align-items: center;
   color: rgba(0, 0, 0, 0.87);
   position: relative;
 }
 .group.active::after{
   position: absolute;
   bottom: 0;
   right: 0;
   width: 45px;
   height: 45px;
   content: '';
   animation: animationActiveCourse .3s ease-in-out;
 }
</style>
