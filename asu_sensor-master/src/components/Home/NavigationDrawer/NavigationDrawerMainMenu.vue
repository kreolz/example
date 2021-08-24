<template>
  <div class="menu">
    <div class="menu-item" v-for="(link, i) in menuItems" :key="i" v-once>
      <router-link :to="link.to"  v-slot="{navigate, isActive}"  class="navigation-link">
        <i class="mdi  theme--light" @click="navigate" :class="[link.icon, isActive && 'active-link']"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
name: "NavigationDrawerMainMenu",
  data: () => ({
  }),
  computed:{
    ...mapState('app', {
      menuItems: 'navigationDrawerMenuItems'
    })
  }
}
</script>

<style lang="sass" >
@import 'src/assets/sass/color'
@import "src/assets/sass/defaultFont"
.menu
  padding-bottom: 25px

.menu-item
  text-decoration: none

.menu-item .active
  border-right: #7030ff 4px solid
.navigation-link
  color: $white
  font-size: $font-size
.active-link
  color: $asu-orange

</style>
