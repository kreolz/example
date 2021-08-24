<template>
    <v-container>
        <v-row>
            <v-col>
                <v-text-field
                        v-model="workPlace"
                        label="Место работы"
                    />
                <v-text-field
                        v-model="workPosition"
                        label="Должность"
                    />
                <v-btn
                        @click="setWork"
                >
                    Сохранить
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {mapFields} from 'vuex-map-fields'
    import {mapActions} from 'vuex'
    export default {
        name: "EnrolleeProfileWork",
        computed:{
            ...mapFields('enrollee', {
                workPlace: 'work.workPlace',
                workPosition: 'work.workPosition'
            })
        },
        methods:{
            ...mapActions('enrollee', {
                setWork: 'set_work',
                getWork: 'get_work'
            })
        },
        mounted() {
            this.getWork()
        }
    }
</script>

<style scoped>

</style>
