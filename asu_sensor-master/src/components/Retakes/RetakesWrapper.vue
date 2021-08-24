<template>
  <div>
      <retakes-list :search="keyboardString" />
      <default-keyboard
          @add="addLitter"
          @space="spaceLitter"
          @backspace="backspaceLitter"
          @delete="deleteLitter"
      />
  </div>
</template>

<script>
import RetakesList from "@/components/Retakes/RetakesList";
import DefaultKeyboard from "@/components/Keyboard/DefayltKeyboard";
import KeyboardMethods from "@/mixins/KeyboardMethods";
export default {
  name: "RetakesWrapper",
  components: {DefaultKeyboard, RetakesList},
  mixins: [KeyboardMethods]
}
</script>

<style scoped>

</style>
