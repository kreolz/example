<template>
    <v-container>
        <v-row>
            <v-col>
                <v-row justify="center" dense>
                    <v-col cols="12" md="6">
                        <v-subheader class="subtitle-2">
                            Добавьте данные о родных (1-2 человека)
                        </v-subheader>
                        <v-row dense>
                            <v-col cols="12">
                                <v-select
                                        :items="relationship"
                                        item-text="value"
                                        item-value="id"
                                        v-model="relation.idRelation"
                                        label="Степень родства"
                                />
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                        v-model="relation.phone"
                                        label="Номер телефона"
                                />
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                        v-model="relation.name"
                                        label="ФИО"
                                />
                            </v-col>
                            <v-col cols="12">
                                <v-row justify="end" dense>
                                    <v-btn  color="primary"
                                            @click="addRelation()"
                                    >
                                        Добавить
                                    </v-btn>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12">
                <v-subheader class="subtitle-2">
                    Сохраненные данные о родных
                </v-subheader>
                <v-simple-table>
                    <thead>
                        <tr>
                            <td>Степень родства</td>
                            <td>Телефон</td>
                            <td>ФИО</td>
                        </tr>
                    </thead>
                    <tbody>
                    <tr v-if="relationships.length==0" class="text-center">
                        <td>Данные не найдены</td>
                    </tr>
                        <tr v-else v-for="item in relationships" :key="item.id">
                            <td>{{relationship.find(n=>n.id===item.relationshipId).value}}</td>
                            <td>{{item.phone}}</td>
                            <td>{{item.name}}</td>
                            <td>
                                <v-btn icon @click="deleteRelation(item.id)">
                                    <v-icon>
                                        mdi-delete
                                    </v-icon>
                                </v-btn>
                            </td>
                        </tr>

                    </tbody>
                </v-simple-table>
                <br>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { mapState, mapActions, mapGetters } from 'vuex'
    import {mapMultiRowFields} from 'vuex-map-fields'
    export default {
        name: "EnrolleeProfileRelationship",
        data(){
            return{
                relation: {
                    idRelation: 0,
                    phone: '',
                    name: '',
                }
            }
        },
        computed:{
            ...mapGetters('catalog',{
                getRelation: 'GET_RELATION'
            }),
            ...mapState('catalog', {
                relationship: 'relationship'
            }),
            ...mapMultiRowFields('enrollee', {
                relationships: 'relationships'
            })
        },
        methods:{
            ...mapActions({
                setRelation: 'enrollee/set_relationship',
                getRelationships: 'enrollee/get_relationships',
                deleteRelation: 'enrollee/delete_relationship',
                getRelationshipsList: 'catalog/get_relationships_list'
            }),
            addRelation(){
                this.setRelation(this.relation)
                this.relation = {
                    idRelation: 0,
                    phone: ''
                }
            }
        },
        mounted() {
            this.getRelationshipsList()
            this.getRelationships()
        }

    }
</script>

<style scoped>

</style>
