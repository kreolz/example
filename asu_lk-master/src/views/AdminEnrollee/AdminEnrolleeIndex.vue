<template>
    <v-app>
        <admin-enrollee-app-bar />

<!--        <admin-enrollee-drawer />-->

        <admin-enrollee-view />
    </v-app>
</template>

<script>
    import AdminEnrolleeAppBar from "./components/core/AdminEnrolleeAppBar";
    import AdminEnrolleeDrawer from "./components/core/AdminEnrolleeDrawer";
    import AdminEnrolleeView from "./components/core/AdminEnrolleeView";
    export default {
        name: "AdminEnrolleeIndex",
        components: {AdminEnrolleeView, AdminEnrolleeDrawer, AdminEnrolleeAppBar}
    }
</script>

<style scoped>

</style>
