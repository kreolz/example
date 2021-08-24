<template>
  <div class="user-page-main">
      <div class="userpage-main-info">
        <info-user />
        <user-page-account-list />
      </div>
      <div class="userpage-main-timetable">
        <time-table-main orientation-time-table="horizontal" :value-time-table="{id: infoPersonnel.idphysical, name: infoPersonnel.id}" :type-time-table="typeTimeTable"/>
      </div>
  </div>
</template>

<script>
import InfoUser from "@/components/UserPage/UserPageInfoUser";
import TimeTableMain from "@/components/TimeTable/TimeTableMain";
import UserPageAccountList from "@/components/UserPage/UserPageAccountList";
import {mapState} from "vuex";
export default {
  name: "UserPageWrapper",
  components: {UserPageAccountList, TimeTableMain, InfoUser},
  data(){
    return{

    }
  },
  computed: {
    ...mapState('userPage', {
      infoPersonnel: 'infoPersonnel',
      accountActive: 'accountActive'
    }),
    typeTimeTable(){
      switch (this.accountActive.role){
        case 'teacher' :
          return 'Teacher';
        case 'admin' :
          return 'Teacher';
        case 'superadmin' :
          return 'Teacher';
        case 'student' :
          return 'Group';
        default:
          return 'Group';
      }
    },
    valueTimeTable(){
      return 1
    }
  },

}
</script>

<style scoped>
.user-page-main{
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 1fr;
}
</style>
