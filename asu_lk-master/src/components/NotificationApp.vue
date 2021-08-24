<template>
    <v-snackbar
            v-model="show"
            :color="color"
            :left="left"
            :multi-line="multiLine"
            :right="right"
            :timeout="timeout"
            :top="top"
            :vertical="vertical"
    >
        <v-icon>
            {{icon}}
        </v-icon>
    {{text}}
    </v-snackbar>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "NotificationApp",
        computed: {
            ...mapState('notification', [
                'show',
                'color',
                'left',
                'multiLine',
                'right',
                'timeout',
                'top',
                'vertical',
                'text',
                'icon',
            ])
        }
    }
</script>

<style scoped>

</style>
