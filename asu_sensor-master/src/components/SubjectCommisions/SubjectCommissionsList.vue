<template>
  <div>
      {{subjectCommissionsByChair}}
      {{selectedChair}}
  </div>
</template>

<script>

import {mapState} from "vuex";

export default {
  name: "SubjectCommissionsList",
  props:{
    selectedChair: {
      type: Number
    },
    search: {
      type: String,
      default: '',
    }
  },
  computed:{
    ...mapState('timetable', [
        'subjectCommissions',
        'loadingSubjectCommissions'
    ]),
    subjectCommissionsByChair(){
      return this.subjectCommissions.filter(item => item.chairId==this.selectedChair).map(item=>{
        return{
          ...item
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
