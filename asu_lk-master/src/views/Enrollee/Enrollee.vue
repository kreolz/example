<template>
    <div>
        <v-container fluid>
            <v-row>
                <v-col cols="12">
                    Заполнение данных: {{progressProfile.length/7*100}}%
                </v-col>
                <v-col cols="12">
                    Поданные заявления: {{claims.length}}
                </v-col>
                <v-col cols="12">
                    Вступительные испытания: не требуется
                </v-col>
                <v-col cols="12">
                    Заполнение данных: 100%
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    export default {
        name: "Enrollee",
        data(){
            return {
                tabProfile: 'passport'
            }
        },
        computed:{
            ...mapState('enrollee', {
                claims: 'claims',
                stepByStep: 'stepByStep'
            }),
            progressProfile(){
                return this.stepByStep.filter(item => item.isFinished===true)
            }
        },
        methods:{
            ...mapActions('enrollee', {
                getClaims: 'get_claims',
                getStepByStepRegistration: 'get_step_by_step'
            })
        },
        mounted() {
            this.getClaims()
            this.getStepByStepRegistration()
        }
    }
</script>

<style scoped>

</style>
