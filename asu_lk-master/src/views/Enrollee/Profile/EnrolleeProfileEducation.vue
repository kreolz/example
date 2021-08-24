<template>
    <v-container>
        <v-dialog
                v-model="modalAttestat"
                max-width="70%"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-chip
                        color="blue lighten-2"
                        dark
                        v-bind="attrs"
                        v-on="on"
                >
                    Образец Аттестата
                </v-chip>
            </template>

            <v-card>
                <v-card-title
                        class="headline grey lighten-2"
                        primary-title
                >
                    Образец аттестата
                    <v-spacer/>
                    <v-btn icon @click="modalAttestat = false">
                        <v-icon>
                            mdi-close
                        </v-icon>
                    </v-btn>
                </v-card-title>
                <v-img src="../../../assets/attestat.jpg" alt="Образец аттестата"/>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="primary"
                            text
                            @click="modalAttestat = false"
                    >
                        Закрыть
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog
                v-model="modalAttestat1"
                max-width="70%"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-chip
                        color="grey darken-2"
                        dark
                        v-bind="attrs"
                        v-on="on"
                >
                    Образец Аттестата (вкладыш)
                </v-chip>
            </template>

            <v-card>
                <v-card-title
                        class="headline grey lighten-2"
                        primary-title
                >
                    Образец аттестата (вкладыш)
                    <v-spacer/>
                    <v-btn icon @click="modalAttestat1 = false">
                        <v-icon>
                            mdi-close
                        </v-icon>
                    </v-btn>
                </v-card-title>
                <v-img src="../../../assets/Obrazets_attestata_vkladysh.png" alt="Образец аттестата (вкладыша)"/>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="primary"
                            text
                            @click="modalAttestat1 = false"
                    >
                        Закрыть
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog
                v-model="modalAttestatkz"
                max-width="70%"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-chip
                        color="pink lighten-2"
                        dark
                        v-bind="attrs"
                        v-on="on"
                >
                    Образец аттестата (Казахстан)
                </v-chip>
            </template>

            <v-card>
                <v-card-title
                        class="headline grey lighten-2"
                        primary-title
                >
                    Образец аттестата (Казахстан)
                    <v-spacer/>
                    <v-btn icon @click="modalAttestatkz = false">
                        <v-icon>
                            mdi-close
                        </v-icon>
                    </v-btn>
                </v-card-title>
                <v-img src="../../../assets/Attestat_kazakhstana.png" alt="Образец аттестата (Казахстан)"/>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="primary"
                            text
                            @click="modalAttestatkz = false"
                    >
                        Закрыть
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog
                v-model="modalDiplom"
                max-width="70%"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-chip
                        color="blue lighten-2"
                        dark
                        v-bind="attrs"
                        v-on="on"
                >
                    Образец Диплома
                </v-chip>
            </template>

            <v-card>
                <v-card-title
                        class="headline grey lighten-2"
                        primary-title
                >
                    Образец диплома
                    <v-spacer/>
                    <v-btn icon @click="modalDiplom = false">
                        <v-icon>
                            mdi-close
                        </v-icon>
                    </v-btn>
                </v-card-title>
                <v-img src="../../../assets/diplom.jpg" alt="Образец диплома"/>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="primary"
                            text
                            @click="modalDiplom = false"
                    >
                        Закрыть
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog
                v-model="modalDiplomSPO"
                max-width="70%"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-chip
                        color="blue lighten-2"
                        dark
                        v-bind="attrs"
                        v-on="on"
                >
                    Образец Диплома СПО
                </v-chip>
            </template>

            <v-card>
                <v-card-title
                        class="headline grey lighten-2"
                        primary-title
                >
                    Образец диплома СПО
                    <v-spacer/>
                    <v-btn icon @click="modalDiplomSPO = false">
                        <v-icon>
                            mdi-close
                        </v-icon>
                    </v-btn>
                </v-card-title>
                <v-img src="../../../assets/diplomspo.jpg" alt="Образец диплома СПО"/>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="primary"
                            text
                            @click="modalDiplomSPO = false"
                    >
                        Закрыть
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog
                v-model="modalDiplomSPO1"
                max-width="70%"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-chip
                        color="grey darken-2"
                        dark
                        v-bind="attrs"
                        v-on="on"
                >
                    Образец Диплома (Вкладыш)
                </v-chip>
            </template>

            <v-card>
                <v-card-title
                        class="headline grey lighten-2"
                        primary-title
                >
                    Образец Диплома (Вкладыш)
                    <v-spacer/>
                    <v-btn icon @click="modalDiplomSPO1 = false">
                        <v-icon>
                            mdi-close
                        </v-icon>
                    </v-btn>
                </v-card-title>
                <v-img src="../../../assets/Obrazets_VO_vkladysh.png" alt="Образец Диплома (Вкладыш)"/>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="primary"
                            text
                            @click="modalDiplomSPO1 = false"
                    >
                        Закрыть
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-form
                @submit.prevent="setEducationInfo"

        >
            <v-row>
                <v-col>
                    <v-container fluid>
                        <v-row dense>
                            <v-col cols="12" sm="12" md="6">
                                <v-select
                                        :items="levelEducation"
                                        item-text="value"
                                        item-value="id"
                                        v-model="levelEducationId"
                                        label="Уровень образования"
                                />
                            </v-col>
                            <v-col cols="12" sm="12" md="6">
                                <v-select
                                        v-model="typeDocumentId"
                                        :items="typeDocument"
                                        item-value="id"
                                        item-text="value"
                                        label="Тип документа"
                                />
                            </v-col>
                            <v-col cols="12" sm="12" md="6">
                                <v-text-field
                                        type="text"
                                        v-model="series"
                                        label="Серия документа"
                                />
                            </v-col>
                            <v-col cols="12" sm="12" md="6">
                                <v-text-field
                                        type="text"
                                        v-model="number"
                                        label="Номер документа"
                                />
                            </v-col>
                            <v-col cols="12" sm="12" md="6">
                                <v-text-field
                                        type="text"
                                        v-model="seriesLiner"
                                        label="Серия вкладыша"
                                />
                            </v-col>
                            <v-col cols="12" sm="12" md="6">
                                <v-text-field
                                        type="text"
                                        v-model="numberLiner"
                                        label="Номер вкладыша"
                                />
                            </v-col>
                            <v-col cols="12" sm="12">
                                <v-text-field
                                        v-model="educationInstituteName"
                                        label="Наименование учебного заведения"
                                />
                            </v-col>
                            <v-col cols="12" sm="12" md="6">
                                <v-dialog
                                        ref="dialog"
                                        v-model="modal"
                                        :return-value.sync="issueDate"
                                        persistent
                                        width="290px"
                                >
                                    <template v-slot:activator="{ on }">
                                        <v-text-field
                                                v-model="issueDate"
                                                label="Дата выдачи"
                                                readonly
                                                v-on="on"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker v-model="issueDate" scrollable>
                                        <v-spacer></v-spacer>
                                        <v-btn text color="primary" @click="modal = false">Закрыть</v-btn>
                                        <v-btn text color="primary" @click="$refs.dialog.save(issueDate)">Сохранить</v-btn>
                                    </v-date-picker>
                                </v-dialog>
                            </v-col>
                            <v-col cols="12" sm="12" md="6">
                                <v-text-field
                                        v-model="endingYear"
                                        label="Год окончания учебного заведения"
                                        type="number"
                                />
                            </v-col>
                        </v-row>
                    </v-container>
                </v-col>
            </v-row>
            <v-row
                    justify="end"
            >
<!--                <v-btn-->
<!--                        :disabled="isLocked"-->
<!--                        @click="sendConfirmed()"-->
<!--                        color="primary"-->
<!--                >-->
<!--                    Отправить на проверку-->
<!--                </v-btn>-->
                <v-btn
                        type="submit"
                        color="primary"
                >
                    Сохранить
                </v-btn>
            </v-row>
        </v-form>
    </v-container>
</template>

<script>
    import MaterialCard from "@/components/base/MaterialCard";
    import { mapFields } from 'vuex-map-fields'
    import {mapActions, mapState} from 'vuex'
    import EnrolleeInfoConfirmed from "../../../services/API/EnrolleeInfoConfirmed";
    export default {
        name: "EnrolleeProfileEducation",
        components: {MaterialCard},
        data() {
            return {
                date: new Date().toISOString().substr(0, 10),
                modal: false,
                modalAttestat: false,
                modalAttestatkz: false,
                modalAttestat1: false,
                modalDiplom: false,
                modalDiplomSPO: false,
                modalDiplomSPO1: false,
                isLocked: true,
                items: [
                    {
                        id: 1,
                        name: 'Русский язык',
                    },
                    {
                        id: 2,
                        name: 'Химия',
                    },
                    {
                        id: 3,
                        name: 'Биология',
                    },
                    {
                        id: 4,
                        name: 'Математика',
                    },
                ],
            }
        },
        computed:{
            ...mapFields('enrollee', {
                series: 'education.diplomaSeries',
                number: 'education.diplomaNumber',
                seriesLiner: 'education.linerSeries',
                numberLiner: 'education.linerNumber',
                issueDate: 'education.issueDate',
                endingYear: 'education.endingYear',
                typeDocumentId: 'education.educationDocumentTypeId',
                levelEducationId: 'education.educationLevelId',
                educationInstituteName: 'education.educationInstituteName'
            }),
            ...mapState('catalog',{
                    levelEducation: 'levelEducation',
                    typeDocument: 'typeDocumentEduction'
            })
        },
        methods:{
            ...mapActions({
                getLevelEducation: 'catalog/get_level_education',
                getEducationDocumentType: 'catalog/get_education_document_type',
                setEducationInfo: 'enrollee/set_education_info',
                getEducationInfo: 'enrollee/get_education_info'
            })
        },
        async mounted() {
            this.getLevelEducation()
            this.getEducationDocumentType()
            this.getEducationInfo()
            this.isLocked = await EnrolleeInfoConfirmed.getIsLocked('education')
        }
    }
</script>

<style scoped>

</style>
