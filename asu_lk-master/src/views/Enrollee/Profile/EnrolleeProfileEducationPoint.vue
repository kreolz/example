<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-row>
                    <v-col cols="12">
                        <v-subheader class="display-1">
                            Добавьте оценки из аттестата (для поступающих на среднее профессиональное образование после 9 и 11 классов).
                        </v-subheader>
                    </v-col>
                    <v-col>
                        <v-select
                            v-model="nameDiscipline"
                            :loading="loading"
                            :items="disciplines"
                            item-text="value"
                            item-value="value"
                            :filter="filter"
                            cache-items
                            flat
                            hide-no-data
                            hide-details
                            label="Название предмета"
                            />
                    </v-col>
                    <v-col>
                        <v-select
                                v-model="point"
                            :items="[3,4,5]"
                            label="Оценка"
                        >
                        </v-select>
                    </v-col>
                    <v-col>
                        <v-btn
                                color="primary"
                                @click="addPoint()"
                        >
                            Добавить оценку
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12">
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
                        <tr v-for="point in points" :key="point.id">
                            <td>{{point.disciplineName}}</td>
                            <td>{{point.mark}}</td>
                            <td>
                                <v-btn
                                        icon="mdi-trash"
                                        @click="deletePoint(point.id)"
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
    import { mapActions, mapState } from 'vuex'
    import { mapMultiRowFields} from 'vuex-map-fields'
    export default {
        name: "EnrolleeProfileEducationPoint",
        data(){
            return{
                point: null,
                nameDiscipline: '',
                loading: false,
                localDisciplines: [],
            }
        },
        computed:{
            ...mapMultiRowFields('enrollee', {
                points: 'points'
            }),
            ...mapState('catalog', {
                disciplines: 'disciplines'
            })
        },
        methods:{
            addPoint(){
                this.setPoint({mark: this.point, name:this.nameDiscipline})
                this.point = null
                this.nameDiscipline = ''
            },
            ...mapActions({
                getPoints: 'enrollee/get_points',
                setPoint: 'enrollee/set_point',
                deletePoint: 'enrollee/delete_point',
                getDisciplines: 'catalog/get_disciplines'
            }),
            filter (item, queryText, itemText) {
                if (item.header) return false

                const hasValue = val => val != null ? val : ''

                const text = hasValue(itemText)
                const query = hasValue(queryText)

                return text.toString()
                    .toLowerCase()
                    .indexOf(query.toString().toLowerCase()) > -1
            },
        },
        mounted() {
            this.getPoints()
            this.getDisciplines()
            this.localDisciplines = this.disciplines

        }
    }
</script>

<style scoped>

</style>
