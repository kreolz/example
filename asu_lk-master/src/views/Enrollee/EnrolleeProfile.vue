<template>
    <v-container
    >
        <v-row
                dense
        >
            <v-col>
                <v-card
                        flat
                >
                    <v-tabs
                            v-model="tabProfile"
                            icons-and-text
                            fixed-tabs
                            show-arrows

                    >
                        <v-tab
                                key="tab1"
                                href="#passport"
                        >
                            Основные данные
                            <v-icon>
                                mdi-account
                            </v-icon>
                        </v-tab>
                        <v-tab
                                key="tab2"
                                href="#education"
                        >
                            Образование
                            <v-icon>
                                mdi-school
                            </v-icon>
                        </v-tab>
                        <v-tab
                                key="tab3"
                                href="#singletop"
                        >
                            Достижения
                            <v-icon>
                                mdi-trophy
                            </v-icon>
                        </v-tab>
                        <v-tab
                                key="tab3_1"
                                href="#singletop_1"
                        >
                            Льготы
                            <v-icon>
                                mdi-chart-timeline-variant
                            </v-icon>
                        </v-tab>
                        <v-tab
                                key="tab4"
                                href="#file"
                        >
                            Копии документов
                            <v-icon>
                                mdi-file
                            </v-icon>
                        </v-tab>
                    </v-tabs>
                    <v-tabs-items
                            v-model="tabProfile"
                    >
                       <v-tab-item
                                key="passport"
                                value="passport"
                                style="padding-top: 25px;"
                       >
                           <v-row>
                               <v-col>
                                   <material-card
                                           title="Основные данные"
                                           icon="mdi-file"
                                   >
                                       <enrollee-profile-main />
                                   </material-card>
                               </v-col>
                           </v-row>
                           <v-row style="margin-top: 10px;">
                               <v-col>
                                   <material-card
                                            title="Паспортные данные"
                                            icon="mdi-passport"
                                   >
                                        <enrollee-profile-passport />
                                   </material-card>
                               </v-col>
                           </v-row>
                           <v-row style="margin-top: 10px;">
                               <v-col>
                                   <material-card
                                           title="Регистрация"
                                           icon="mdi-map-marker"
                                   >
                                       <enrollee-profile-registration />
                                   </material-card>
                               </v-col>
                           </v-row>
                           <v-row style="margin-top: 10px;">
                               <v-col>
                                   <material-card
                                           title="Контакты"
                                           icon="mdi-phone"
                                   >
                                       <enrollee-profile-contact />
                                       <v-subheader>
                                           Данные о родных
                                       </v-subheader>
                                       <enrollee-profile-relationship />
                                   </material-card>
                               </v-col>
                           </v-row>
<!--                           <v-row style="margin-top: 10px;">-->
<!--                               <v-col>-->
<!--                                   <material-card title="Дополнительная информация"-->
<!--                                                  icon="mdi-plus">-->
<!--                                       <enrollee-profile-other />-->
<!--                                       <enrollee-profile-work />-->
<!--                                   </material-card>-->

<!--                               </v-col>-->
<!--                           </v-row>-->
                       </v-tab-item>
                        <v-tab-item
                                key="education"
                                value="education"
                                style="padding-top: 25px;"
                        >
                            <v-row>
                                <v-col>
                                    <material-card
                                            title="Сведения об образовании"
                                            icon="mdi-school"
                                    >
                                        <enrollee-profile-education />
                                    </material-card>
                                    <material-card
                                            title="ЕГЭ"
                                            icon="mdi-bookmark-multiple">
                                        <enrollee-profile-education-exam />
                                    </material-card>
                                    <material-card
                                        title="Оценки"
                                        icon="mdi-bookmark-multiple">
                                        <enrollee-profile-education-point />
                                    </material-card>
                                </v-col>
                            </v-row>
                        </v-tab-item>
                        <v-tab-item
                                key="singletop"
                                value="singletop"
                        >
                          <enrollee-profile-achievement />
                        </v-tab-item>
                        <v-tab-item
                                key="singletop_1"
                                value="singletop_1"
                        >
                            <enrollee-profile-privilege />
                        </v-tab-item>
                        <v-tab-item
                                key="file"
                                value="file"
                                style="padding-top: 25px;"
                        >
                            <v-row>
                                <v-col>
                                    <material-card
                                            title="Копии документов"
                                            icon="mdi-file"
                                    >
                                        <enrollee-profile-documents />
                                    </material-card>
                                </v-col>
                            </v-row>
                        </v-tab-item>
                    </v-tabs-items>
                </v-card>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
    import MaterialCard from "@/components/base/MaterialCard";
    import EnrolleeProfilePassport from "@/views/Enrollee/Profile/EnrolleeProfilePassport";
    import EnrolleeProfileMain from "@/views/Enrollee/Profile/EnrolleeProfileMain";
    import EnrolleeProfileRegistration from "@/views/Enrollee/Profile/EnrolleeProfileRegistration";
    import EnrolleeProfileOther from "@/views/Enrollee/Profile/EnrolleeProfileOther";
    import EnrolleeProfileEducation from "@/views/Enrollee/Profile/EnrolleeProfileEducation";
    import EnrolleeProfileDocuments from "./Profile/EnrolleeProfileDocuments";
    import EnrolleeProfileEducationPoint from "@/views/Enrollee/Profile/EnrolleeProfileEducationPoint";
    import EnrolleeProfileContact from "@/views/Enrollee/Profile/EnrolleeProfileContact";
    import EnrolleeProfileRelationship from "@/views/Enrollee/Profile/EnrolleeProfileRelationship";
    import EnrolleeProfilePrivilege from "@/views/Enrollee/Profile/EnrolleeProfilePrivilege";
    import EnrolleeProfileWork from "./Profile/EnrolleeProfileWork";
    import EnrolleeProfileAchievement from "./Profile/EnrolleeProfileAchievement";
    import EnrolleeProfileEducationExam from "./Profile/EnrolleeProfileEducationExam";

    export default {
        name: "EnrolleeProfile",
        components: {
            EnrolleeProfileEducationExam,
            EnrolleeProfileAchievement,
            EnrolleeProfileWork,
            EnrolleeProfilePrivilege,
            EnrolleeProfileRelationship,
            EnrolleeProfileContact,
            EnrolleeProfileEducationPoint,
            EnrolleeProfileDocuments,
            'enrollee-profile-education': EnrolleeProfileEducation,
            'enrollee-profile-other': EnrolleeProfileOther,
            'enrollee-profile-registration': EnrolleeProfileRegistration,
            'enrollee-profile-main': EnrolleeProfileMain,
            'enrollee-profile-passport': EnrolleeProfilePassport,
            'material-card': MaterialCard,
        },
        data(){
            return{
                tabProfile: 'passport',
                steps: [
                    {
                        preview: '/example-1.png',
                        title: 'Шаг первый',
                        description: 'I am an example step, click in the top right corner to enlarge me. Click next if you no longer want to see me. ',
                        next_cta: 'Следующий',
                        prev_cta: 'Предыдущий',
                    },
                    {
                        preview: '/example-1.png',
                        title: 'Шаг 2',
                        description: 'Congratz, I am the second step in this 2 step tuturial. If you reached me that means you have reached the end.'
                    }
                ],
                text: {
                    next_cta: 'Следующий',
                    prev_cta: 'Предыдущий',
                    restart_cta: 'Повтор'
                },
                theme: {
                    color: '#009de0',
                    radius: '5px'
                },
                blurEl: '.can-tour-blur',
                debug: true
            }
        },
        mounted() {
            //this.$store.dispatch('authorization/start')
        }
    }
</script>

<style scoped>

</style>
