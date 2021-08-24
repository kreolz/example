<template>
  <v-row dense>
    <v-col cols="6">
      <v-img :src="require('@/assets/img/folder-blue.svg')" />
    </v-col>
    <v-col cols="6">
      <v-img :src="require('@/assets/img/folder-red.svg')" />
    </v-col>
    <v-col cols="6">
      <v-img :src="require('@/assets/img/folder-yellow.svg')" />
    </v-col>
    <v-col cols="6">
      <a href="">
        <v-img :src="require('@/assets/img/folder-green.svg')" />
      </a>
    </v-col>
  </v-row>
</template>

<script>
export default {
name: "HomeHotSection"
}
</script>

<style scoped>

</style>
