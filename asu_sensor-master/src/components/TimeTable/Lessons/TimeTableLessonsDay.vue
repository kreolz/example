<template>
    <div>
        <v-container fluid>
            <v-row >
                <v-col md="3"
                       text-xs-center
                       :hidden="!showDatePicker">
                    <v-row dense>
                        <v-col md="12">
                            <v-row align="center">
                                <v-col md="2">
                                    <v-btn icon
                                           large
                                            @click="saveModalTimeTable(false)">
                                        <v-icon large>
                                            arrow_back
                                        </v-icon>
                                    </v-btn>
                                </v-col>
                                <v-col>
                                    <h3>Назад к выбору</h3>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col md="12">
                            <v-date-picker :landscape="false"
                                           :reactive="false"
                                           locale="ru-RU"
                                           full-width
                                           @input="getTimetable"
                                           :first-day-of-week="1"
                                           v-model="date"
                                           v-show="showDatePicker"
                                           next-icon="chevron_right"
                                           prev-icon="chevron_left"/>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col :md="widthTimeTable"
                       text-xs-center>
                    <v-row v-for="day in timetable.Days"
                           transition="scale-transition"
                           dense>
                        <v-col md="12">
                            <ClassicLesson v-for="item in 8"
                                           v-bind:pair="day.Pairs.find(pair=>pair.Number==item)"
                                           v-bind:load-time-table="loadTimeTable"
                                           :key="item"/>

    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'
    import ClassicLesson from "./TimeTableLesson";

    export default {
        data() {
            return {
                date: '',
                landscape: false,
                reactive: false,
            }
        },
        components: {
            ClassicLesson: ClassicLesson
        },
        methods: {
            ...mapMutations('timetable', {
                saveModalTimeTable: "SAVE_MODAL_TIMETABLE"
            }),
            getTimeTableFirst: function (idGroup) {
                this.$store.dispatch('timetable/getTimeTable', this.date)
            },

            getTimetable: function () {
                this.$store.dispatch('timetable/getTimeTable', this.dateForTimeTable, 3);
                this.$root.$data.Tick = 0
            },

            formatDate(date) {
                if (!date) return null;
                const [year, month, day] = date.split('-');
                return `${day}.${month}.${year}`
            },

            parseDate(date) {
                if (!date) return null;
                const [month, day, year] = date.split('/');
                return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
            }
        },
        computed: {
            ...mapState('timetable', {
                timetable: 'timetable',
                valueTimeTable: 'valueTimeTable',
                loadTimeTable: 'loadTimeTable'
            }),
            dateForTimeTable() {
                return this.formatDate(this.date)
            },
            widthTimeTable(){
                return (this.showDatePicker) ? 9:12;
            }
        },
        props: {
            typeTT: String,
            showDatePicker: Boolean
        },
        created() {
            let d = new Date();
            let curr_date = d.getDate();
            let curr_month = d.getMonth() + 1;
            let curr_year = d.getFullYear();
            this.date = curr_year + '-' + curr_month + '-' + curr_date;
            this.getTimeTableFirst()
        }
    }
</script>

<style lang="css">

</style>
