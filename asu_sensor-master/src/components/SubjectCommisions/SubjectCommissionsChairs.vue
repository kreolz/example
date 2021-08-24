<template>
  <div>
    <v-select
        :items="chairs"
        item-text="name"
        item-value="id"
        v-model="chair"
        @change="changeChair"
        placeholder="Выберите кафедру"
    />
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "SubjectCommissionsChairs",
  computed: {
    ...mapState('catalog', [
        'chairs'
    ])
  },
  data(){
    return{
      chair: '',
    }
  },
  methods:{
    changeChair(){
      this.$emit('select-chair', this.chair)
    }
  }
}
</script>

<style scoped>

</style>
