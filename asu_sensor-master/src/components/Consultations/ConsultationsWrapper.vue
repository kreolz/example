<template>
  <div class="consultations-wrapper">
    <consultations-list :search="keyboardString" />
    <default-keyboard
        @add="addLitter"
        @del="deleteLitter"
        @space="spaceLitter"
        @backspace="backspaceLitter"
    />
  </div>
</template>

<script>
import ConsultationsList from "@/components/Consultations/ConsultationsList";
import DefaultKeyboard from "@/components/Keyboard/DefayltKeyboard";
import KeyboardMethods from "@/mixins/KeyboardMethods";
export default {
  name: "ConsultationsWrapper",
  components: {DefaultKeyboard, ConsultationsList},
  mixins: [ KeyboardMethods ]
}
</script>

<style scoped>
  .consultations-wrapper{
    border-radius: 50px 50px;
  }
</style>
