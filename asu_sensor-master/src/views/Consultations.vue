<template>
  <div class="consultations">
    <consultations-wrapper />
  </div>
</template>

<script>
import ConsultationsWrapper from "@/components/Consultations/ConsultationsWrapper";
export default {
name: "Consultations",
  components: {ConsultationsWrapper}
}
</script>

<style scoped>
  .consultations{
    height: 100vh;
  }
</style>
