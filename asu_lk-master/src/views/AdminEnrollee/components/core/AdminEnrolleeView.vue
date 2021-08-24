<template>
    <v-content>
        <admin-check-data />

        <admin-enrollee-footer />
    </v-content>
</template>

<script>
    import AdminEnrolleeFooter from "./AdminEnrolleeFooter";
    import AdminCheckData from "../../AdminCheckData";
    export default {
        name: "AdminEnrolleeView",
        components: {AdminCheckData, AdminEnrolleeFooter}
    }
</script>

<style scoped>

</style>
