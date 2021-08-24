<template>
    <v-app-bar
            id="app-bar"
            fixed
            app
            flat
            height="75"
    >
        <v-btn
                class="mr-3"
                elevation="1"
                fab
                small
                @click="setDrawer(!drawer)"
        >
            <v-icon v-if="value">
                mdi-view-quilt
            </v-icon>

            <v-icon v-else>
                mdi-dots-vertical
            </v-icon>
        </v-btn>

        <v-toolbar-title
                class="hidden-sm-and-down font-weight-light"
                v-text="$route.name"
        />

        <v-spacer />
    </v-app-bar>
</template>

<script>
    // Components
    import { VHover, VListItem } from 'vuetify/lib'

    // Utilities
    import { mapState, mapMutations } from 'vuex'

    export default {
        name: "AdminEnrolleeAppBar",
        props: {
            value: {
                type: Boolean,
                default: false,
            },
        },

        data: () => ({
            notifications: [
                'Ошибка в заполнении данных об образовании!',
                'Вы заполнили Основные данные в анкете',
                'Вы зарегистрировались в системе "Поступай онлайн Рубцовского института"',
            ],
        }),

        computed: {
            ...mapState('app', ['drawer']),
        },

        methods: {
            ...mapMutations('app', {
                setDrawer: 'SET_DRAWER',
            }),
        },
    }
</script>

<style scoped>

</style>
