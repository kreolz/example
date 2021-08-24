<template>
  <div>
    <s-k-e-d-list :items="consultations" :loading-items="loading" :search="search"/>
  </div>
</template>

<script>
import {mapState} from "vuex";
import SKEDList from "@/components/baseComponents/SKED/SKEDList";

export default {
  name: "ConsultationsList",
  components: {SKEDList},
  props:{
    search: {
      type: String,
      default: '',
    }
  },
  computed:{
    ...mapState('timetable', {
      consultations: 'consultations',
      loading: 'loadingConsultations'
    }),
  },
}
</script>

<style scoped>

</style>
