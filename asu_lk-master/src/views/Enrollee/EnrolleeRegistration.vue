<template>
    <v-app>
        <v-container
        >
            <v-row
                    justify="center"
                    align="center"
            >
                <v-col
                        cols="12"
                        sm="12"
                        md="12"
                        lg="9"
                        xl="6"
                >
                    <v-stepper
                            v-model="e1"
                            vertical
                            class="registration-enrollee-stepper"
                    >
                        <v-container>
                            <v-row>
                                <v-col>
                                    <div class="display-2">
                                        Заполнение анкетных данных поступающего в Рубцовский институт (филиал) АлтГУ
                                    </div>
                                    <div class="subtitle-2">
                                        Помните, что все поля обязательны для заполнения. Вам понадобятся копии следующих
                                        документов: Паспорт, Документ об образовании (аттестат, диплом и др.). Если вы
                                        обнаружите ошибку в данных, то вы можете вернуться назад и исправить или
                                        сделать это уже после полной регистрации в личном кабинете в разделе "Анкета".
                                    </div>
                                </v-col>
                            </v-row>
                        </v-container>

                        <v-stepper-step :complete="e1 > 1" step="1">
                            Основные данные
                        </v-stepper-step>
                        <v-stepper-content step="1">
                            <v-container>
                                <EnrolleeProfileMain/>
                                <v-btn
                                        color="primary"
                                        @click="e1 = 2"
                                        v-text="$t('enrollee.registrationNextBtn')"
                                />
                            </v-container>
                        </v-stepper-content>

                        <v-stepper-step :complete="e1 > 2" step="2">
                            Паспортные данные
                        </v-stepper-step>
                        <v-stepper-content step="2">
                            <EnrolleeProfilePassport/>
                            <v-btn
                                    color="primary"
                                    @click="e1 = 3"
                                    v-text="$t('enrollee.registrationNextBtn')"
                            />
                            <v-btn
                                    text
                                    @click="e1 = 1"
                                    v-text="$t('enrollee.registrationBackBtn')"
                            />
                        </v-stepper-content>

                        <v-stepper-step :complete="e1 > 3" step="3">Место регистрации</v-stepper-step>
                        <v-stepper-content step="3">
                            <EnrolleeProfileRegistration/>

                            <v-btn
                                    color="primary"
                                    @click="e1 = 4"
                                    v-text="$t('enrollee.registrationNextBtn')"
                            />

                            <v-btn
                                    text
                                    @click="e1 = 2"
                                    v-text="$t('enrollee.registrationBackBtn')"
                            />
                        </v-stepper-content>
                        <v-stepper-step :complete="e1 > 4" step="4">Копии паспорта и регистрации(прописки)</v-stepper-step>
                        <v-stepper-content step="4">
                            <enrollee-profile-copy-document-passport />

                            <v-btn
                                    color="primary"
                                    @click="e1 = 5"
                                    v-text="$t('enrollee.registrationNextBtn')"
                            />

                            <v-btn
                                    text
                                    @click="e1 = 3"
                                    v-text="$t('enrollee.registrationBackBtn')"
                            />
                        </v-stepper-content>
                        <v-stepper-step :complete="e1 > 5" step="5">Образование</v-stepper-step>
                        <v-stepper-content step="5">
                            <enrollee-profile-education />
                            <enrollee-profile-education-exam />
                            <enrollee-profile-education-point />


                            <v-btn
                                    color="primary"
                                    @click="e1 = 6"
                                    v-text="$t('enrollee.registrationNextBtn')"
                            />

                            <v-btn
                                    text
                                    @click="e1 = 4"
                                    v-text="$t('enrollee.registrationBackBtn')"
                            />
                        </v-stepper-content>
                        <v-stepper-step :complete="e1 > 6" step="6">Копии документов об образовании</v-stepper-step>
                        <v-stepper-content step="6">
                            <enrollee-profile-copy-document-education />

                            <v-btn
                                    color="primary"
                                    @click="e1 = 7"
                                    v-text="$t('enrollee.registrationNextBtn')"
                            />

                            <v-btn
                                    text
                                    @click="e1 = 5"
                                    v-text="$t('enrollee.registrationBackBtn')"
                            />
                        </v-stepper-content>
                        <v-stepper-step :complete="e1 > 7" step="7">Контактные данные</v-stepper-step>
                        <v-stepper-content step="7">
                            <enrollee-profile-contact />

                            <v-btn
                                    color="primary"
                                    @click="e1 = 8"
                                    v-text="$t('enrollee.registrationNextBtn')"
                            />

                            <v-btn
                                    text
                                    @click="e1 = 6"
                                    v-text="$t('enrollee.registrationBackBtn')"
                            />
                        </v-stepper-content>
                        <v-stepper-step :complete="e1 > 8" step="8">Данные о родных</v-stepper-step>
                        <v-stepper-content step="8">
                            <enrollee-profile-relationship />

                            <v-btn
                                    color="primary"
                                    @click="e1 = 9"
                                    v-text="$t('enrollee.registrationNextBtn')"
                            />

                            <v-btn
                                    text
                                    @click="e1 = 7"
                                    v-text="$t('enrollee.registrationBackBtn')"
                            />
                        </v-stepper-content>
                        <v-stepper-step :complete="e1 > 9" step="9">Заявление</v-stepper-step>
                        <v-stepper-content step="9">
                            <v-container>
                                <v-row>
                                    <v-col>
                                        <enrollee-claim />
                                        <v-switch
                                                v-model="privilege"
                                                label="Льготные условия поступления"
                                        />
                                        <enrollee-profile-privilege v-if="privilege" />
                                        <v-switch
                                                v-model="achievement"
                                                label="Достижения"
                                        />
                                        <enrollee-profile-achievement v-if="achievement" />
                                    </v-col>
                                </v-row>
                            </v-container>

                            <v-btn
                                    color="primary"
                                    @click="sendDocForCheck"
                            >
                                Отправить документы на проверку
                            </v-btn>

                            <v-btn
                                    @click="e1 = 8"
                                    text
                                    v-text="$t('enrollee.registrationBackBtn')"
                            />
                        </v-stepper-content>
                    </v-stepper>
                </v-col>
            </v-row>
            <v-dialog
                    v-model="dialog"
                    width="500"
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                            fixed
                            dark
                            fab
                            bottom
                            right
                            large
                            v-bind="attrs"
                            v-on="on"
                            color="pink"
                    >
                        <v-icon large>mdi-help</v-icon>
                    </v-btn>
                </template>

                <v-card>
                    <v-card-title
                            class="headline grey lighten-2"
                            primary-title
                    >
                        Помощь
                    </v-card-title>

                    <v-card-text>
                        <help />
                        <v-alert type="info">
                            <ol>
                                <li>Заполнение данных следует проводить в строгом соответствии с документами</li>
                                <li>Если возникают ошибки при сохранении данных или отправке на проверку, для начала попробуйте обновить страницу при помощи Ctrl+F5</li>
                                <li>Помните, что при возникновении проблем с заполнением данных вы можете позвонить (написать в WhatsApp) по номерам приемной комиссии или написать на почту webmaster@rb.asu.ru</li>
                            </ol>
                        </v-alert>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                                color="primary"
                                text
                                @click="dialog = false"
                        >
                            Закрыть
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-container>
    </v-app>
</template>

<script>
    import EnrolleeProfileMain from "./Profile/EnrolleeProfileMain";
    import EnrolleeProfilePassport from "./Profile/EnrolleeProfilePassport";
    import EnrolleeProfileEducation from "./Profile/EnrolleeProfileEducation";
    import EnrolleeProfileRegistration from "./Profile/EnrolleeProfileRegistration";
    import {mapState, mapActions} from 'vuex'
    import EnrolleeProfileContact from "./Profile/EnrolleeProfileContact";
    import EnrolleeProfileRelationship from "./Profile/EnrolleeProfileRelationship";
    import EnrolleeClaim from "./EnrolleeClaim";
    import EnrolleeProfileCopyDocumentEducation from "./Profile/CopyDocument/EnrolleeProfileCopyDocumentEducation";
    import EnrolleeProfileCopyDocumentPassport from "./Profile/CopyDocument/EnrolleeProfileCopyDocumentPassport";
    import EnrolleeProfileEducationPoint from "./Profile/EnrolleeProfileEducationPoint";
    import EnrolleeProfilePrivilege from "./Profile/EnrolleeProfilePrivilege";
    import EnrolleeProfileAchievement from "./Profile/EnrolleeProfileAchievement";
    import EnrolleeProfileEducationExam from "./Profile/EnrolleeProfileEducationExam";
    import AuthorizationServices from "../../services/AuthorizationServices";
    import Help from "@/views/dashboard/component/Help";

    export default {
        name: "Registration",
        components: {
            Help,
            EnrolleeProfileEducationExam,
            EnrolleeProfileAchievement,
            EnrolleeProfilePrivilege,
            EnrolleeProfileEducationPoint,
            EnrolleeProfileCopyDocumentPassport,
            EnrolleeProfileCopyDocumentEducation,
            EnrolleeClaim,
            EnrolleeProfileRelationship,
            EnrolleeProfileContact,
            EnrolleeProfileRegistration,
            EnrolleeProfileEducation,
            EnrolleeProfilePassport,
            EnrolleeProfileMain
        },
        data() {
            return {
                e1: 1,
                modal: false,
                dialog: false,
                privilege: false,
                achievement: false,
            }
        },
        computed:{
          ...mapState('enrollee', {
              step: 'stepByStep'
          })
        },
        methods:{
            ...mapActions('enrollee', {
               sendDataCheck: 'send_all_to_confirmation'
            }),
            sendDocForCheck(){
                this.sendDataCheck()
            }
        },
        mounted() {
            this.$store.dispatch('authorization/start')
        }
    }
</script>

<style scoped>
    .registration-enrollee-stepper {

    }
</style>
