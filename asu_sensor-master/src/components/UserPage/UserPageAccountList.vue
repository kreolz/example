<template>
  <div>
    <v-chip-group>
      <v-chip
          v-for="account in accountList"
          :class="{'green--text':account.username==accountActive.username}"
          :key="account.username">
        {{account.username}}
      </v-chip>
    </v-chip-group>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "UserPageAccountList",
  computed:{
    ...mapState('userPage', {
      accountList: 'accountList',
      accountActive: 'accountActive'
    })
  }
}
</script>

<style scoped>

</style>
