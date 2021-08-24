<template>
  <div class="subject-commissions-link">
    <router-link v-for="chair in chairsShortName" :to="'/subjectcommissions/'+chair.id" :key="chair.id">
      <base-touche-panel
        width="90px"
        height="90px"
        :title="chair.shortName"
      ></base-touche-panel>
    </router-link>
  </div>
</template>

<script>
import BaseTouchePanel from "@/components/baseComponents/BaseTouchPanel";
import {mapState} from "vuex";
export default {
  name: "SubjectCommissionsFastLink",
  components: {BaseTouchePanel},
  computed:{
    ...mapState('catalog', ['chairs']),
    chairsShortName() {
      return this.chairs.map(chair=>{
        return {
          ...chair,
          shortName: chair.name.replace('"', '').split(' ').map(word=> word[0]).join('')
        }
      })
    }
  }
}
</script>

<style scoped>
  .subject-commissions-link{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 100%;
    width: 100%;
  }
</style>
