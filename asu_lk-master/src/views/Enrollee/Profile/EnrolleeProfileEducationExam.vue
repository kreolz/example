<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-subheader>
                    Добавьте результаты ЕГЭ (для поступающих на высшее образование).
                </v-subheader>
            </v-col>
            <v-col>
                <v-select
                        :items="specialityExam"
                        item-value="id"
                        item-text="value"
                        v-model="exam"
                        label="Выберите предмет"
                    />
                <v-text-field
                        v-model="mark"
                        label="Количество набранных баллов"
                    />
                <v-btn color="primary" @click="addExam">
                    Добавить
                </v-btn>
            </v-col>
            <v-col>
                Сохраненные оценки
                <v-simple-table>
                    <thead>
                    <tr>
                        <td>Предмет</td>
                        <td>Оценка</td>
                        <td>Действие</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="exam in exams" :key="exam.id">
                        <td>{{specialityExam.find(item => item.id == exam.disciplineId).value}}</td>
                        <td>{{exam.mark}}</td>
                        <td>
                            <v-btn
                                    icon="mdi-trash"
                                    @click="deleteExam(exam.id)"
                            >
                                <v-icon>
                                    mdi-delete
                                </v-icon>
                            </v-btn>
                        </td>
                    </tr>
                    </tbody>
                </v-simple-table>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    export default {
        name: "EnrolleeProfileEducationExam",
        data(){
            return{
                exam: {},
                mark: '',
            }
        },
        computed:{
            ...mapState('catalog', {
                specialityExam: 'specialityExam'
            }),
            ...mapState('enrollee',{
                exams: 'exams'
            })
        },
        methods:{
            ...mapActions({
                getSpecialityExam: 'catalog/get_speciality_exam',
                getExams: 'enrollee/get_exams',
                setExam: 'enrollee/set_exam',
                deleteExam: 'enrollee/delete_exam'
            }),
            addExam(){
                this.setExam(
                    {
                        disciplineId: this.exam,
                        mark: this.mark
                    }
                )
            }
        },
        mounted() {
            this.getSpecialityExam()
            this.getExams()
        }
    }
</script>

<style scoped>

</style>
