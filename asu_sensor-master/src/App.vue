<template>
  <v-app id="inspire">
    <div id="main">
      <div id="menu-wrapper">
        <navigation-drawer-main-menu />
      </div>
      <div id="content">
        <transition name="slide">
          <router-view />
        </transition>
      </div>
    </div>
  </v-app>
</template>

<script>

 import NavigationDrawerMainMenu from "@/components/Home/NavigationDrawer/NavigationDrawerMainMenu";
export default {
  name: 'App',
  components: {
     NavigationDrawerMainMenu
  },
  data: () => ({
    drawer: null,
  }),
};
</script>
<style lang="sass">
@use "sass:math"
#inspire
  background: rgb(57,137,210)
  background: linear-gradient(45deg, rgba(25,118,210,1) 0%, rgba(3,153,238,1) 100%)
  background: -webkit-linear-gradient(45deg, rgba(25,118,210,1) 0%, rgba(3,153,238,1) 100%)
  max-height: 100vh
  overflow: hidden

  #main
    display: grid
    grid-template-columns: 100px 1fr
    grid-template-rows: 1fr
    max-height: 100vh
    overflow: hidden

  #menu-wrapper
    grid-area: 1 / 1 / span 1 / span 1
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center

  #content
    display: grid
    grid-area: 1 / 2 / span 3 / span 5
    background: white
    border-radius: 50px 0 0 50px
    padding: 0 25px
    width: calc(100vw - 100px)
    max-height: 100vh
    overflow: hidden
</style>
