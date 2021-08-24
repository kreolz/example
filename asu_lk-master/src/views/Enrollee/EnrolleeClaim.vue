<template>
    <v-container
            fluid
    >
            <v-row>
                <v-col>
                    <v-select
                            v-model="educationLevel"
                            :items="educationLevels"
                            item-value="id"
                            item-text="value"
                            attach
                            label="Выберите уровень образования"
                    ></v-select>
                    <v-select
                            v-model="educationStudySet"
                            :items="educationStudySets"
                            item-value="id"
                            item-text="value"
                            attach
                            label="Выберите форму набора"
                    ></v-select>
                    <v-select
                            v-if="educationLevel==2"
                            v-model="educationForm"
                            :items="educationForms"
                            item-value="id"
                            item-text="value"
                            attach
                            label="Выберите форму образования"
                    ></v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-select
                            :disabled="!(specialitys.length>0)"
                            :items="specialitys"
                            item-value="id"
                            item-text="admission"
                            v-model="claim"
                            chips
                            return-object
                            v-on:input="limiter"
                            label="Специальность/направление"
                    />
                </v-col>
            </v-row>
            <v-row justify="end">
                <v-col cols="12" md="3">
                    <v-btn color="primary" @click="addClaim" :disabled="maxSpeciality">
                        Добавить заявление
                    </v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-subheader class="display-1">
                        Расставьте выбранные направление в приоритетном порядке (выстроить приоритеты означает определить для себя наиболее важные направления и специальности).
                        <br>Не более трех направлений и специальностей.
                    </v-subheader>
                    <v-data-table
                            :headers="headers"
                            :items="claims"
                            hide-default-footer
                            class="elevation-1"
                            ref="sortableTable"
                    >
                        <template slot="item" slot-scope="props">
                            <tr class="sortableRow" :key="itemKey(props.item)">
                                <td class="px-1" style="width: 0.1%">
                                    <v-btn style="cursor: move" icon class="sortHandle">
                                        <v-icon>mdi-drag-horizontal-variant</v-icon>
                                    </v-btn>
                                </td>
                                <td>
                                    <span class="display-1" style="margin-top: 5px;">{{ props.item.admission}}</span><br>
                                    <v-subheader style="padding: 0; margin-top: -5px;">{{props.item.fullAdmission}}</v-subheader>
                                </td>
                                <td>
                                    <v-btn icon @click="deleteClaim(props.item)">
                                        <v-icon>mdi-delete</v-icon>
                                    </v-btn>
                                </td>
                            </tr>
                        </template>
                    </v-data-table>
                </v-col>
            </v-row>
            <v-row justify="end">
                <v-col cols="12" md="3">
                    <v-btn color="primary" @click="saveClaims">
                        Сохранить заявления
                    </v-btn>
                </v-col>
            </v-row>
        <br>
        <br>
    </v-container>
</template>

<script>
    import MaterialCard from "@/components/base/MaterialCard";
    import {mapState, mapActions, mapGetters} from 'vuex'
    import Sortable from 'sortablejs'
    export default {
        name: "EnrolleeClaim",
        components: {MaterialCard,},
        data() {
            return {
                itemKeys: new WeakMap(),
                currentItemKey: 0,
                educationForm: '',
                educationLevel: '',
                educationStudySet: '',
                claim: {},
                claims: [],
                headers: [
                    {
                        sortable: false
                    },
                    {
                        text: 'Направление/специальность',
                        align: 'left',
                        sortable: false,
                    },
                    { text: 'Действия',sortable: false },
                ]
            }
        },
        computed: {
            ...mapState('catalog', {
                educationLevels: 'educationLevels',
                educationForms: 'educationForms',
                educationStudySets: 'educationStudySet',
                educationSpecialityAll: 'educationSpecialityAll'
            }),
            ...mapState('enrollee', {
                shortClaims: 'claims'
            }),
            form() {
                if (this.getEducationForm) return 1
                return (this.educationLevel != 2) ? 1 : this.educationForm
            },
            specialitys() {
                if (this.educationLevel && this.educationStudySet) {
                    return this.educationSpecialityAll.filter(
                        item => item.idStudySet == this.educationStudySet && item.idEducationLevel == this.educationLevel && item.idEducation == this.form
                    )
                } else {
                    return []
                }
            },
            maxSpeciality(){
              return this.claims.length>=3
            },
            ...mapGetters('catalog', [
                'GET_SPECIALITYS'
            ])
        },
        methods: {
            ...mapActions({
                getEducationLevels: 'catalog/get_education_levels',
                getEducationForms: 'catalog/get_education_forms',
                getEducationStudySet: 'catalog/get_education_study_set',
                getEducationSpecialityAll: 'catalog/get_education_speciality_all',
                getShortClaims: 'enrollee/get_claims',
                setClaim: 'enrollee/set_claim',
                delete_claim: 'enrollee/delete_claim'
            }),
            limiter(e) {
                if (e.length > 3) {
                    console.log(' you can only select two', e)
                    e.pop()
                }
            },
            addClaim() {
                if (!this.claim.id)  return
                if (!this.claims.find(n => n.id === this.claim.id)) {
                    this.claims.push(this.claim)
                    this.claim = {}
                }
            },
            dragReorder ({oldIndex, newIndex}) {
                const movedItem = this.claims.splice(oldIndex, 1)[0]
                this.claims.splice(newIndex, 0, movedItem)
            },
            itemKey (item) {
                if (!this.itemKeys.has(item)) this.itemKeys.set(item, ++this.currentItemKey)
                return this.itemKeys.get(item)
            },
            async saveClaims(){
                let priority = 1;
                let tmpClaims = JSON.parse(JSON.stringify(this.claims))
                    tmpClaims.forEach( item => {
                        item.priority = priority
                        this.$store.dispatch('enrollee/set_claim', item)
                        priority++
                    })
                await this.sortClaimsFull()
            },
            filterSpecialityOnShortClaims(item){
                return this.shortClaims.find(n => n.specialityId==item.id)
            },
            deleteClaim(claim){
                this.delete_claim(claim)
                this.claims.splice(this.claims.indexOf(claim),1)
            },
            async sortClaimsFull(){
                await this.getEducationSpecialityAll()
                await this.getShortClaims()
                this.claims = this.educationSpecialityAll.filter( item => this.filterSpecialityOnShortClaims(item))
                this.claims = this.claims.map( item=> {
                    let tmpSClaim = this.shortClaims.find(b =>b.specialityId==item.id)
                    item.priority = tmpSClaim.priority
                    return item
                })
                this.claims = this.claims.sort((a,b)=>a.priority > b.priority ? 1 : -1)
                console.log(this.claims)
            }
        },
        async mounted() {
            await this.getEducationLevels()
            await this.getEducationForms()
            await this.getEducationStudySet()
            await  this.sortClaimsFull()
            new Sortable(
                this.$refs.sortableTable.$el.getElementsByTagName('tbody')[0],
                {
                    draggable: '.sortableRow',
                    handle: '.sortHandle',
                    onEnd: this.dragReorder
                }
            )
        }
    }
</script>

<style scoped>

</style>
