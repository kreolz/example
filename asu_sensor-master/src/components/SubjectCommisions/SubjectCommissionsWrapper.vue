<template>
  <div>
    <subject-commissions-chairs @select-chair="changeChair" />
    <subject-commissions-list :selected-chair="chair" :search="keyboardString" />
    <default-keyboard />
  </div>
</template>

<script>
import SubjectCommissionsList from "@/components/SubjectCommisions/SubjectCommissionsList";
import SubjectCommissionsChairs from "@/components/SubjectCommisions/SubjectCommissionsChairs";
import DefaultKeyboard from "@/components/Keyboard/DefayltKeyboard";
import KeyboardMethods from "@/mixins/KeyboardMethods";
export default {
  name: "SubjectCommissionsWrapper",
  components: {DefaultKeyboard, SubjectCommissionsChairs, SubjectCommissionsList},
  mixins: [KeyboardMethods],
  data(){
    return{
      chair: '',
    }
  },
  methods:{
    changeChair(selectedChair){
      this.chair = selectedChair
    }
  }
}
</script>

<style scoped>

</style>
