<template>
  <div>
      <s-k-e-d-list :items="retakes" :loading-items="loadingRetakes" :search="search" />
  </div>
</template>

<script>
import {mapState} from 'vuex'
import SKEDList from "@/components/baseComponents/SKED/SKEDList";
export default {
  name: "RetakesList",
  components: {SKEDList},
  props:{
    search: {
      type: String,
      default: '',
    }
  },
  computed: {
    ...mapState('timetable' ,[
        'retakes',
        'loadingRetakes',
    ])
  }
}
</script>

<style scoped>

</style>
