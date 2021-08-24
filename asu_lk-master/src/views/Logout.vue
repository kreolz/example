<template>
    <v-app>
        Выход из личного кабинета. Через пару секунд вы будете переправлены на страницу авторизации.
    </v-app>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        name: "Logout",
        methods:{
            ...mapActions('authorization', {
                logout: 'logout'
            })
        },
        mounted() {
            this.logout()
        }
    }
</script>

<style scoped>

</style>
