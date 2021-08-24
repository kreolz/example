<template>
  <v-content>
    <router-view />

    <dashboard-core-footer />
  </v-content>
</template>

<script>
  import Help from "../../component/Help";
  export default {
    name: 'DashboardCoreView',

    components: {
      Help,
      DashboardCoreFooter: () => import('./Footer'),
    },
  }
</script>
