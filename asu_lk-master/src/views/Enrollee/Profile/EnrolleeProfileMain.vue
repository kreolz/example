<template>
    <div>
        <v-form @submit.prevent="setMainInfo">
            <v-container fluid>
                <v-row>
                    <v-col cols="12" sm="12" md="4">
                        <v-text-field
                                v-model="lastName"
                                label="Фамилия"
                        />
                    </v-col>
                    <v-col cols="12" sm="12" md="4">
                        <v-text-field
                                v-model="firstName"
                                label="Имя"
                        />
                    </v-col>
                    <v-col cols="12" sm="12" md="4">
                        <v-text-field
                                v-model="patronymic"
                                label="Отчество"
                        />
                    </v-col>
                    <v-col cols="12" sm="12" md="3">
                        <v-select
                                :items="genders"
                                item-value="id"
                                item-text="value"
                                v-model="gender"
                                label="Пол"
                        />
                    </v-col>
                    <v-col cols="12" sm="12" md="3">
                        <v-dialog
                                ref="dialog"
                                v-model="modal"
                                :return-value.sync="birthDay"
                                persistent
                                width="290px"
                        >
                            <template v-slot:activator="{ on }">
                                <v-text-field
                                        v-model="birthDay"
                                        label="Дата рождения"
                                        prepend-icon="mdi-event"
                                        readonly
                                        v-on="on"
                                ></v-text-field>
                            </template>
                            <v-date-picker v-model="birthDay" scrollable>
                                <v-spacer></v-spacer>
                                <v-btn text color="primary" @click="modal = false">Закрыть</v-btn>
                                <v-btn text color="primary" @click="$refs.dialog.save(birthDay)">Сохранить</v-btn>
                            </v-date-picker>
                        </v-dialog>
                    </v-col>
                </v-row>
                <div class="subtitle-2">
                    Данные для связи
                </div>
                <v-row>
                    <v-col
                            cols="12"
                            sm="12"
                            md="6">
                        <v-text-field
                                disabled
                                v-model="email"
                                label="Email"
                        />
                    </v-col>
                </v-row>
                <v-row
                        justify="end"
                >
                    <v-btn
                            type="submit"
                            color="primary"
                    >
                        Сохранить
                    </v-btn>
                </v-row>
            </v-container>
        </v-form>
    </div>
</template>

<script>
    import MaterialCard from "@/components/base/MaterialCard";
    import {mapFields} from 'vuex-map-fields'
    import { mapActions, mapState} from 'vuex'
    export default {
        name: "EnrolleeProfileMain",
        components: {MaterialCard},
        data() {
            return {
                date: new Date().toISOString().substr(0, 10),
                modal: false,
            }
        },
        computed:{
            ...mapFields('enrollee',{
                firstName: 'main.firstName',
                lastName: 'main.lastName',
                patronymic: 'main.patronymic',
                gender: 'main.genderId',
                birthDay: 'main.birthday',
                email: 'main.email',
            }),
            ...mapState('catalog', {
                genders: 'genders'
            })
        },
        methods:{
            ...mapActions({
                setMainInfo: 'enrollee/set_main_info',
                getMainInfo: 'enrollee/get_main_info',
                getGenders: 'catalog/get_genders'
            })
        },
        mounted() {
            this.getGenders()
            this.getMainInfo()
        }
    }
</script>

<style scoped>

</style>
