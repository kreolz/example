<template>
  <v-app>
    <router-view />
    <notification-app />
  </v-app>
</template>

<script>
  import NotificationApp from "./components/NotificationApp";
  export default {
    name: 'App',
    components: {NotificationApp},
  }
</script>
