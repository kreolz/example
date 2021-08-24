<template>
  <div class="userpage">
    <user-page-wrapper />
  </div>
</template>

<script>
import UserPageWrapper from "@/components/UserPage/UserPageMain";
export default {
name: "UserPage",
  components: {UserPageWrapper}
}
</script>

<style scoped>
  .userpage{
    max-height: 100%;
  }
</style>
