<template>
  <div class="retakes">
    <retakes-wrapper />
  </div>
</template>

<script>
import RetakesWrapper from "@/components/Retakes/RetakesWrapper";
export default {
name: "Retakes",
  components: {RetakesWrapper}
}
</script>

<style scoped>
  .retakes{
    height: 100vh;
  }
</style>
