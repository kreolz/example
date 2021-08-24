<template>
    <v-app>
        Страница сброса пароля
    </v-app>
</template>

<script>
    export default {
        name: "ResetPassword",
        mounted() {
            this.$store.dispatch('authorization/start')
            this.$store.dispatch('authorization/reset_password', {
                id: this.$route.query.id,
                code: this.$route.query.code.replace( / /g, '+')
            })
        }
    }
</script>

<style scoped>

</style>
